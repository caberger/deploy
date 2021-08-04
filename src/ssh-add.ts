//import * as os from "os"
import * as fs from "fs"
import * as io from "@actions/io"
import {join} from "path"
import * as core from "@actions/core"
import * as util from "util"
import {exec} from "child_process"

import {homeDir, resolveHomeFolder} from "./utils"

export const SSH_KEY_DIR = "sshkeys"
const ssh = join(homeDir(), ".ssh")

export const sshKeyDir = join(homeDir(), SSH_KEY_DIR)
const execPromise = util.promisify(exec)

export async function addSshKey(name: string, key: string) {
    const fileName = join(sshKeyDir, name)
    try {
        core.info(`create folder ${sshKeyDir}`)
        /*
        if (!fs.existsSync(sshKeyDir)) {
            core.info(`folder ${sshKeyDir} does not exist`)
            fs.mkdirSync(sshKeyDir)
        }
        */
        await io.mkdirP(sshKeyDir)
        core.info(`write to ${fileName}`)
        fs.writeFileSync(fileName, key)
        core.info("ssh key installed")
        fs.chmodSync(fileName, 0o400)
        await display(fileName)
    } catch (error) {
        console.error(error.message)
        core.setFailed(error.message)
    }
    return fileName   
}
export async function addKownHost(server: string) {
    await io.mkdirP(ssh)
    core.info(`created ${ssh}`)
    const knownHosts = join(ssh, "known_hosts")
    const cmd = `ssh-keyscan -H -t rsa -v ${server}  >> ${knownHosts}`
    core.info(cmd)
    const {stdout, stderr} = await execPromise(cmd)
    core.info(stdout)
}
async function display(folder: string) {
    const {stdout, stderr} = await execPromise(`ls -l ${folder}`)
    core.info(stdout)
}
export async function copyFiles(identityFile: string, source: string, server: string, user: string, destination: string) {
    const sourceFolder = resolveHomeFolder(source)
    const cmd = `scp -i ${identityFile} -r ${sourceFolder} ${user}@${server}:${destination}`
    core.info(cmd)
    const {stdout, stderr} = await execPromise(cmd)
    core.info(stdout)
    console.log(cmd)
}