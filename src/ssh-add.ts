//import * as os from "os"
import * as fs from "fs"
import * as io from "@actions/io"
import {join} from "path"
import * as core from "@actions/core"

import {homeDir, resolveHomeFolder} from "./util"

export const SSH_KEY_DIR = "sshkeys"

export const sshKeyDir = join(homeDir(), SSH_KEY_DIR)

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
    } catch (error) {
        console.error(error.message)
        core.setFailed(error.message)
    }
    return fileName   
}
export function copyFiles(identityFile: string, source: string, server: string, user: string, destination: string) {
    const sourceFolder = resolveHomeFolder(source)
    const cmd = `cp -i ${identityFile} -r ${source} ${user}@${server}:${destination}`
    console.log(cmd)
}
