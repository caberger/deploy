import * as os from "os"
import * as fs from "fs"
import * as io from "@actions/io"
import {join} from "path"
import * as core from "@actions/core"

export const SSH_KEY_DIR = "sshkeys"

export const sshKeyDir = join(os.userInfo().homedir, SSH_KEY_DIR)

export function addSshKey(name: string, key: string) {
    const fileName = join(sshKeyDir, name)
    try {
        io.mkdirP(sshKeyDir)
        fs.writeFileSync(fileName, key)
    } catch (error) {
        console.error(error.message)
        core.setFailed(error.message)
    }
    return fileName   
}
