import * as core from "@actions/core"
import {addSshKey, sshKeyDir} from "./ssh-add"


import params from "./params"
import {copyFiles} from "./ssh-add"

async function run() {
    try {
        console.info("start deployment...")
        console.info(JSON.stringify(params))
        params.verify()
        console.info("install ssh key...")
        const identityFileName = await addSshKey(params.name, params.key)
        core.setOutput("key-file", identityFileName)
        core.info(`file ${identityFileName} created`)
        copyFiles(identityFileName, params.sourceFolder, params.server, params.user, params.destinationFolder)
    } catch (error) {
        core.setFailed(error.message)
    }
}

run()
