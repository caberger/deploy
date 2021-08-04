import * as core from "@actions/core"
//import * as github from "@actions/github"

import {addSshKey} from "./ssh-add"

try {
    const name = core.getInput("ssh-key-name")
    const key = core.getInput("ssh-private-key")
    //const payload = JSON.stringify(github.context.payload, undefined, 2)
    //console.log(`The event payload: ${payload}`)

    if (name && key) {
        const fileName = addSshKey(name, key)
        core.info(`file ${fileName} created`)
    } else {
        core.setFailed(`invalid params: name=${name} key=${key}`)
    }
} catch (error) {
    core.setFailed(error.message)
}