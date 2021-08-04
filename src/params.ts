import * as core from "@actions/core"

class Params {
    name: string
    key: string
    server: string
    sourceFolder = "~/deployment"
    destinationFolder = "./dest"
    user = "root"

    verify() {
        const ok = this.name && this.key && this.server
        if (!ok) {
            const msg = `invalid params: server=${this.server} name=${this.name} key=${this.key}`
            throw new Error(msg)
        }
    }
}

const params = new Params()
params.name =  core.getInput("ssh-key-name")
params.key = core.getInput("ssh-private-key")
params.server = core.getInput("server")
params.sourceFolder = core.getInput("source-folder")
params.destinationFolder = core.getInput("destination-folder")
params.user = core.getInput("user")

export default params
