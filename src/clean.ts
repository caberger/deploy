import * as core from "@actions/core"
import * as io from "@actions/io"
import {join} from "path"
import params from "./startup"

async function cleanUp() {
    try {
        core.info("clean ssh keys")
        params.verify()
        await io.rmRF(params.identityFile)
        core.info(`${params.identityFile} removed`)
    } catch (error) {
        core.setFailed(error.message)
    }
}

cleanUp()