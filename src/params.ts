import * as core from "@actions/core"

class Params {
    name: string
    key: string
    server: string

    verify() {
        const ok = this.name && this.key && this.server
        const msg = `invalid params: name=${this.name} key=${this.key}`
        throw new Error(msg)
    }
}

const params = new Params()
params.name =  core.getInput("ssh-key-name")
params.key = core.getInput("ssh-private-key")
params.server = core.getInput("server")

export default params
