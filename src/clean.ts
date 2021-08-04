import * as core from "@actions/core"
import {sshKeyDir} from "./ssh-add"
import * as io from "@actions/io"
import params from "./params"

try {
    params.verify()
    io.rmRF(sshKeyDir)
    core.info(`${sshKeyDir} removed`)
} catch (error) {
    core.setFailed(error.message)
}