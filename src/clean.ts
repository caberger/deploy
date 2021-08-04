import * as core from "@actions/core"
import {sshKeyDir} from "./ssh-add"
import * as io from "@actions/io"
import params from "./params"

try {
    core.info("clean ssh keys")
    params.verify()
    io.rmRF(sshKeyDir)
    core.info(`${sshKeyDir} removed`)
} catch (error) {
    core.setFailed(error.message)
}