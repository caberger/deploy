import {join} from "path"
import * as os from "os"

export function homeDir() {
    return os.userInfo().homedir
}
export function resolveHomeFolder(filepath: string) {
    if (filepath[0] === '~') {
        return join(homeDir(), filepath.slice(1))
    }
    return filepath
}