import * as core from "@actions/core"
import {addSshKey} from "./ssh-add"

import params from "./params"

async function run() {
    try {
        console.info("start deployment...")
        console.info(JSON.stringify(params))
        params.verify()
        console.info("install ssh key...")
        const fileName = await addSshKey(params.name, params.key)
        core.setOutput("key-file", fileName)
        core.info(`file ${fileName} created`)
    } catch (error) {
        core.setFailed(error.message)
    }
}

run()
