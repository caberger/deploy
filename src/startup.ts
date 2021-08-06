import { Params } from "./params"
import * as core from "@actions/core"
import {join} from "path"
import * as io from "@actions/io"
import {homeDir} from "./utils"

async function init() { 
    const githubAction = process.env.GITHUB_ACTION
    return githubAction ? runnerSetup() : testSetup()
}
async function runnerSetup() {
    core.info("runner setup")
    const params = new Params()
    params.sshKeyName =  core.getInput("alias")
    params.key = core.getInput("ssh-private-key")
    params.server = core.getInput("server")
    params.user = core.getInput("user")
    params.tempPath = process.env.RUNNER_TEMP
    params.sshDir = join(homeDir(), ".ssh")
    return params
}
async function testSetup() {
    core.info("test setup")
    const params = new Params()
    params.sshKeyName = "test"
    params.key = "not a key"
    params.server = "www.example.com"
    params.user = "johndoe"

    params.tempPath = join(process.cwd(), "target")
    await io.mkdirP(params.tempPath)
    core.info(`created ${params.tempPath}`)
    params.sshDir = params.tempPath
    return params
}
export default await init()
