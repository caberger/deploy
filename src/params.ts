import {join} from "path"

export class Params {
    sshKeyName!: string
    key!: string
    server!: string
    source!: string
    destinationFolder!: string
    user!: string
    tempPath: string
    sshDir: string

    get identityFile() {
        return join(this.tempPath, this.sshKeyName)
    }
    verify() {
        const ok = this.sshKeyName && this.key && this.server
        if (!ok) {
            const msg = `invalid params: server=${this.server} name=${this.sshKeyName} key=${this.key}`
            throw new Error(msg)
        }
    }
}

export default Params
