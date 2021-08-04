import * as os from "os"
import * as fs from "fs"
import * as io from "@actions/io"
import {join} from "path"
import * as core from "@actions/core"

const SSH_KEY_DIR = "sshkeys"

export function addSshKey(name: string, key: string) {
    const folder = join(os.userInfo().homedir, SSH_KEY_DIR)
    const fileName = join(folder, name)
    try {
        io.mkdirP(folder)
        fs.writeFileSync(fileName, key)
    } catch (error) {
        console.error(error.message)
        core.setFailed(error.message)
    }
    return fileName   
}
