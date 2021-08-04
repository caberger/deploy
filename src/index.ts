import * as core from "@actions/core"
import {addSshKey} from "./ssh-add"

import params from "./params"

try {
    params.verify()
    const fileName = addSshKey(params.name, params.key)
    core.setOutput("key-file", fileName)
    core.info(`file ${fileName} created`)
} catch (error) {
    core.setFailed(error.message)
}