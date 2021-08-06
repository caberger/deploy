import * as core from "@actions/core"

import {addSshKey, addKownHost, addToConfigFile} from "./ssh-add"
import params from "./startup"

async function run() {
    try {
        console.info("start deployment...")
        params.verify()
        console.info("install ssh key...")

        const identityFileName = await addSshKey(params.identityFile, params.key)
        core.setOutput("key-file", identityFileName)
        core.info(`file ${identityFileName} created`)
        await addToConfigFile(params.sshKeyName, params.user, params.server, params.identityFile)
        await addKownHost(params.server)
    } catch (error) {
        core.setFailed(error.message)
    }
}

run()
