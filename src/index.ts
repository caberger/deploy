import * as core from "@actions/core"
import {addSshKey} from "./ssh-add"
import {resolveHomeFolder} from "./util"

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
        const source = resolveHomeFolder(params.sourceFolder)
        copyFiles(identityFileName, source, params.server, params.user, params.destinationFolder)
    } catch (error) {
        core.setFailed(error.message)
    }
}

run()
