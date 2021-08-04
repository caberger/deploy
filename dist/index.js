(()=>{"use strict";var e={351:function(e,t,r){var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){if(n===undefined)n=r;Object.defineProperty(e,n,{enumerable:true,get:function(){return t[r]}})}:function(e,t,r,n){if(n===undefined)n=r;e[n]=t[r]});var i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:true,value:t})}:function(e,t){e["default"]=t});var o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var r in e)if(r!=="default"&&Object.hasOwnProperty.call(e,r))n(t,e,r);i(t,e);return t};Object.defineProperty(t,"__esModule",{value:true});t.issue=t.issueCommand=void 0;const s=o(r(87));const u=r(278);function issueCommand(e,t,r){const n=new Command(e,t,r);process.stdout.write(n.toString()+s.EOL)}t.issueCommand=issueCommand;function issue(e,t=""){issueCommand(e,{},t)}t.issue=issue;const c="::";class Command{constructor(e,t,r){if(!e){e="missing.command"}this.command=e;this.properties=t;this.message=r}toString(){let e=c+this.command;if(this.properties&&Object.keys(this.properties).length>0){e+=" ";let t=true;for(const r in this.properties){if(this.properties.hasOwnProperty(r)){const n=this.properties[r];if(n){if(t){t=false}else{e+=","}e+=`${r}=${escapeProperty(n)}`}}}}e+=`${c}${escapeData(this.message)}`;return e}}function escapeData(e){return u.toCommandValue(e).replace(/%/g,"%25").replace(/\r/g,"%0D").replace(/\n/g,"%0A")}function escapeProperty(e){return u.toCommandValue(e).replace(/%/g,"%25").replace(/\r/g,"%0D").replace(/\n/g,"%0A").replace(/:/g,"%3A").replace(/,/g,"%2C")}},186:function(e,t,r){var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){if(n===undefined)n=r;Object.defineProperty(e,n,{enumerable:true,get:function(){return t[r]}})}:function(e,t,r,n){if(n===undefined)n=r;e[n]=t[r]});var i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:true,value:t})}:function(e,t){e["default"]=t});var o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var r in e)if(r!=="default"&&Object.hasOwnProperty.call(e,r))n(t,e,r);i(t,e);return t};var s=this&&this.__awaiter||function(e,t,r,n){function adopt(e){return e instanceof r?e:new r((function(t){t(e)}))}return new(r||(r=Promise))((function(r,i){function fulfilled(e){try{step(n.next(e))}catch(e){i(e)}}function rejected(e){try{step(n["throw"](e))}catch(e){i(e)}}function step(e){e.done?r(e.value):adopt(e.value).then(fulfilled,rejected)}step((n=n.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:true});t.getState=t.saveState=t.group=t.endGroup=t.startGroup=t.info=t.warning=t.error=t.debug=t.isDebug=t.setFailed=t.setCommandEcho=t.setOutput=t.getBooleanInput=t.getMultilineInput=t.getInput=t.addPath=t.setSecret=t.exportVariable=t.ExitCode=void 0;const u=r(351);const c=r(717);const a=r(278);const d=o(r(87));const l=o(r(622));var f;(function(e){e[e["Success"]=0]="Success";e[e["Failure"]=1]="Failure"})(f=t.ExitCode||(t.ExitCode={}));function exportVariable(e,t){const r=a.toCommandValue(t);process.env[e]=r;const n=process.env["GITHUB_ENV"]||"";if(n){const t="_GitHubActionsFileCommandDelimeter_";const n=`${e}<<${t}${d.EOL}${r}${d.EOL}${t}`;c.issueCommand("ENV",n)}else{u.issueCommand("set-env",{name:e},r)}}t.exportVariable=exportVariable;function setSecret(e){u.issueCommand("add-mask",{},e)}t.setSecret=setSecret;function addPath(e){const t=process.env["GITHUB_PATH"]||"";if(t){c.issueCommand("PATH",e)}else{u.issueCommand("add-path",{},e)}process.env["PATH"]=`${e}${l.delimiter}${process.env["PATH"]}`}t.addPath=addPath;function getInput(e,t){const r=process.env[`INPUT_${e.replace(/ /g,"_").toUpperCase()}`]||"";if(t&&t.required&&!r){throw new Error(`Input required and not supplied: ${e}`)}if(t&&t.trimWhitespace===false){return r}return r.trim()}t.getInput=getInput;function getMultilineInput(e,t){const r=getInput(e,t).split("\n").filter((e=>e!==""));return r}t.getMultilineInput=getMultilineInput;function getBooleanInput(e,t){const r=["true","True","TRUE"];const n=["false","False","FALSE"];const i=getInput(e,t);if(r.includes(i))return true;if(n.includes(i))return false;throw new TypeError(`Input does not meet YAML 1.2 "Core Schema" specification: ${e}\n`+`Support boolean input list: \`true | True | TRUE | false | False | FALSE\``)}t.getBooleanInput=getBooleanInput;function setOutput(e,t){process.stdout.write(d.EOL);u.issueCommand("set-output",{name:e},t)}t.setOutput=setOutput;function setCommandEcho(e){u.issue("echo",e?"on":"off")}t.setCommandEcho=setCommandEcho;function setFailed(e){process.exitCode=f.Failure;error(e)}t.setFailed=setFailed;function isDebug(){return process.env["RUNNER_DEBUG"]==="1"}t.isDebug=isDebug;function debug(e){u.issueCommand("debug",{},e)}t.debug=debug;function error(e){u.issue("error",e instanceof Error?e.toString():e)}t.error=error;function warning(e){u.issue("warning",e instanceof Error?e.toString():e)}t.warning=warning;function info(e){process.stdout.write(e+d.EOL)}t.info=info;function startGroup(e){u.issue("group",e)}t.startGroup=startGroup;function endGroup(){u.issue("endgroup")}t.endGroup=endGroup;function group(e,t){return s(this,void 0,void 0,(function*(){startGroup(e);let r;try{r=yield t()}finally{endGroup()}return r}))}t.group=group;function saveState(e,t){u.issueCommand("save-state",{name:e},t)}t.saveState=saveState;function getState(e){return process.env[`STATE_${e}`]||""}t.getState=getState},717:function(e,t,r){var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){if(n===undefined)n=r;Object.defineProperty(e,n,{enumerable:true,get:function(){return t[r]}})}:function(e,t,r,n){if(n===undefined)n=r;e[n]=t[r]});var i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:true,value:t})}:function(e,t){e["default"]=t});var o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var r in e)if(r!=="default"&&Object.hasOwnProperty.call(e,r))n(t,e,r);i(t,e);return t};Object.defineProperty(t,"__esModule",{value:true});t.issueCommand=void 0;const s=o(r(747));const u=o(r(87));const c=r(278);function issueCommand(e,t){const r=process.env[`GITHUB_${e}`];if(!r){throw new Error(`Unable to find environment variable for file command ${e}`)}if(!s.existsSync(r)){throw new Error(`Missing file at path: ${r}`)}s.appendFileSync(r,`${c.toCommandValue(t)}${u.EOL}`,{encoding:"utf8"})}t.issueCommand=issueCommand},278:(e,t)=>{Object.defineProperty(t,"__esModule",{value:true});t.toCommandValue=void 0;function toCommandValue(e){if(e===null||e===undefined){return""}else if(typeof e==="string"||e instanceof String){return e}return JSON.stringify(e)}t.toCommandValue=toCommandValue},962:function(e,t,r){var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){if(n===undefined)n=r;Object.defineProperty(e,n,{enumerable:true,get:function(){return t[r]}})}:function(e,t,r,n){if(n===undefined)n=r;e[n]=t[r]});var i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:true,value:t})}:function(e,t){e["default"]=t});var o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var r in e)if(r!=="default"&&Object.hasOwnProperty.call(e,r))n(t,e,r);i(t,e);return t};var s=this&&this.__awaiter||function(e,t,r,n){function adopt(e){return e instanceof r?e:new r((function(t){t(e)}))}return new(r||(r=Promise))((function(r,i){function fulfilled(e){try{step(n.next(e))}catch(e){i(e)}}function rejected(e){try{step(n["throw"](e))}catch(e){i(e)}}function step(e){e.done?r(e.value):adopt(e.value).then(fulfilled,rejected)}step((n=n.apply(e,t||[])).next())}))};var u;Object.defineProperty(t,"__esModule",{value:true});t.getCmdPath=t.tryGetExecutablePath=t.isRooted=t.isDirectory=t.exists=t.IS_WINDOWS=t.unlink=t.symlink=t.stat=t.rmdir=t.rename=t.readlink=t.readdir=t.mkdir=t.lstat=t.copyFile=t.chmod=void 0;const c=o(r(747));const a=o(r(622));u=c.promises,t.chmod=u.chmod,t.copyFile=u.copyFile,t.lstat=u.lstat,t.mkdir=u.mkdir,t.readdir=u.readdir,t.readlink=u.readlink,t.rename=u.rename,t.rmdir=u.rmdir,t.stat=u.stat,t.symlink=u.symlink,t.unlink=u.unlink;t.IS_WINDOWS=process.platform==="win32";function exists(e){return s(this,void 0,void 0,(function*(){try{yield t.stat(e)}catch(e){if(e.code==="ENOENT"){return false}throw e}return true}))}t.exists=exists;function isDirectory(e,r=false){return s(this,void 0,void 0,(function*(){const n=r?yield t.stat(e):yield t.lstat(e);return n.isDirectory()}))}t.isDirectory=isDirectory;function isRooted(e){e=normalizeSeparators(e);if(!e){throw new Error('isRooted() parameter "p" cannot be empty')}if(t.IS_WINDOWS){return e.startsWith("\\")||/^[A-Z]:/i.test(e)}return e.startsWith("/")}t.isRooted=isRooted;function tryGetExecutablePath(e,r){return s(this,void 0,void 0,(function*(){let n=undefined;try{n=yield t.stat(e)}catch(t){if(t.code!=="ENOENT"){console.log(`Unexpected error attempting to determine if executable file exists '${e}': ${t}`)}}if(n&&n.isFile()){if(t.IS_WINDOWS){const t=a.extname(e).toUpperCase();if(r.some((e=>e.toUpperCase()===t))){return e}}else{if(isUnixExecutable(n)){return e}}}const i=e;for(const o of r){e=i+o;n=undefined;try{n=yield t.stat(e)}catch(t){if(t.code!=="ENOENT"){console.log(`Unexpected error attempting to determine if executable file exists '${e}': ${t}`)}}if(n&&n.isFile()){if(t.IS_WINDOWS){try{const r=a.dirname(e);const n=a.basename(e).toUpperCase();for(const i of yield t.readdir(r)){if(n===i.toUpperCase()){e=a.join(r,i);break}}}catch(t){console.log(`Unexpected error attempting to determine the actual case of the file '${e}': ${t}`)}return e}else{if(isUnixExecutable(n)){return e}}}}return""}))}t.tryGetExecutablePath=tryGetExecutablePath;function normalizeSeparators(e){e=e||"";if(t.IS_WINDOWS){e=e.replace(/\//g,"\\");return e.replace(/\\\\+/g,"\\")}return e.replace(/\/\/+/g,"/")}function isUnixExecutable(e){return(e.mode&1)>0||(e.mode&8)>0&&e.gid===process.getgid()||(e.mode&64)>0&&e.uid===process.getuid()}function getCmdPath(){var e;return(e=process.env["COMSPEC"])!==null&&e!==void 0?e:`cmd.exe`}t.getCmdPath=getCmdPath},436:function(e,t,r){var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){if(n===undefined)n=r;Object.defineProperty(e,n,{enumerable:true,get:function(){return t[r]}})}:function(e,t,r,n){if(n===undefined)n=r;e[n]=t[r]});var i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:true,value:t})}:function(e,t){e["default"]=t});var o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var r in e)if(r!=="default"&&Object.hasOwnProperty.call(e,r))n(t,e,r);i(t,e);return t};var s=this&&this.__awaiter||function(e,t,r,n){function adopt(e){return e instanceof r?e:new r((function(t){t(e)}))}return new(r||(r=Promise))((function(r,i){function fulfilled(e){try{step(n.next(e))}catch(e){i(e)}}function rejected(e){try{step(n["throw"](e))}catch(e){i(e)}}function step(e){e.done?r(e.value):adopt(e.value).then(fulfilled,rejected)}step((n=n.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:true});t.findInPath=t.which=t.mkdirP=t.rmRF=t.mv=t.cp=void 0;const u=r(357);const c=o(r(129));const a=o(r(622));const d=r(669);const l=o(r(962));const f=d.promisify(c.exec);const p=d.promisify(c.execFile);function cp(e,t,r={}){return s(this,void 0,void 0,(function*(){const{force:n,recursive:i,copySourceDirectory:o}=readCopyOptions(r);const s=(yield l.exists(t))?yield l.stat(t):null;if(s&&s.isFile()&&!n){return}const u=s&&s.isDirectory()&&o?a.join(t,a.basename(e)):t;if(!(yield l.exists(e))){throw new Error(`no such file or directory: ${e}`)}const c=yield l.stat(e);if(c.isDirectory()){if(!i){throw new Error(`Failed to copy. ${e} is a directory, but tried to copy without recursive flag.`)}else{yield cpDirRecursive(e,u,0,n)}}else{if(a.relative(e,u)===""){throw new Error(`'${u}' and '${e}' are the same file`)}yield copyFile(e,u,n)}}))}t.cp=cp;function mv(e,t,r={}){return s(this,void 0,void 0,(function*(){if(yield l.exists(t)){let n=true;if(yield l.isDirectory(t)){t=a.join(t,a.basename(e));n=yield l.exists(t)}if(n){if(r.force==null||r.force){yield rmRF(t)}else{throw new Error("Destination already exists")}}}yield mkdirP(a.dirname(t));yield l.rename(e,t)}))}t.mv=mv;function rmRF(e){return s(this,void 0,void 0,(function*(){if(l.IS_WINDOWS){if(/[*"<>|]/.test(e)){throw new Error('File path must not contain `*`, `"`, `<`, `>` or `|` on Windows')}try{const t=l.getCmdPath();if(yield l.isDirectory(e,true)){yield f(`${t} /s /c "rd /s /q "%inputPath%""`,{env:{inputPath:e}})}else{yield f(`${t} /s /c "del /f /a "%inputPath%""`,{env:{inputPath:e}})}}catch(e){if(e.code!=="ENOENT")throw e}try{yield l.unlink(e)}catch(e){if(e.code!=="ENOENT")throw e}}else{let t=false;try{t=yield l.isDirectory(e)}catch(e){if(e.code!=="ENOENT")throw e;return}if(t){yield p(`rm`,[`-rf`,`${e}`])}else{yield l.unlink(e)}}}))}t.rmRF=rmRF;function mkdirP(e){return s(this,void 0,void 0,(function*(){u.ok(e,"a path argument must be provided");yield l.mkdir(e,{recursive:true})}))}t.mkdirP=mkdirP;function which(e,t){return s(this,void 0,void 0,(function*(){if(!e){throw new Error("parameter 'tool' is required")}if(t){const t=yield which(e,false);if(!t){if(l.IS_WINDOWS){throw new Error(`Unable to locate executable file: ${e}. Please verify either the file path exists or the file can be found within a directory specified by the PATH environment variable. Also verify the file has a valid extension for an executable file.`)}else{throw new Error(`Unable to locate executable file: ${e}. Please verify either the file path exists or the file can be found within a directory specified by the PATH environment variable. Also check the file mode to verify the file is executable.`)}}return t}const r=yield findInPath(e);if(r&&r.length>0){return r[0]}return""}))}t.which=which;function findInPath(e){return s(this,void 0,void 0,(function*(){if(!e){throw new Error("parameter 'tool' is required")}const t=[];if(l.IS_WINDOWS&&process.env["PATHEXT"]){for(const e of process.env["PATHEXT"].split(a.delimiter)){if(e){t.push(e)}}}if(l.isRooted(e)){const r=yield l.tryGetExecutablePath(e,t);if(r){return[r]}return[]}if(e.includes(a.sep)){return[]}const r=[];if(process.env.PATH){for(const e of process.env.PATH.split(a.delimiter)){if(e){r.push(e)}}}const n=[];for(const i of r){const r=yield l.tryGetExecutablePath(a.join(i,e),t);if(r){n.push(r)}}return n}))}t.findInPath=findInPath;function readCopyOptions(e){const t=e.force==null?true:e.force;const r=Boolean(e.recursive);const n=e.copySourceDirectory==null?true:Boolean(e.copySourceDirectory);return{force:t,recursive:r,copySourceDirectory:n}}function cpDirRecursive(e,t,r,n){return s(this,void 0,void 0,(function*(){if(r>=255)return;r++;yield mkdirP(t);const i=yield l.readdir(e);for(const o of i){const i=`${e}/${o}`;const s=`${t}/${o}`;const u=yield l.lstat(i);if(u.isDirectory()){yield cpDirRecursive(i,s,r,n)}else{yield copyFile(i,s,n)}}yield l.chmod(t,(yield l.stat(e)).mode)}))}function copyFile(e,t,r){return s(this,void 0,void 0,(function*(){if((yield l.lstat(e)).isSymbolicLink()){try{yield l.lstat(t);yield l.unlink(t)}catch(e){if(e.code==="EPERM"){yield l.chmod(t,"0666");yield l.unlink(t)}}const r=yield l.readlink(e);yield l.symlink(r,t,l.IS_WINDOWS?"junction":null)}else if(!(yield l.exists(t))||r){yield l.copyFile(e,t)}}))}},357:e=>{e.exports=require("assert")},129:e=>{e.exports=require("child_process")},747:e=>{e.exports=require("fs")},87:e=>{e.exports=require("os")},622:e=>{e.exports=require("path")},669:e=>{e.exports=require("util")}};var t={};function __nccwpck_require__(r){var n=t[r];if(n!==undefined){return n.exports}var i=t[r]={exports:{}};var o=true;try{e[r].call(i.exports,i,i.exports,__nccwpck_require__);o=false}finally{if(o)delete t[r]}return i.exports}(()=>{__nccwpck_require__.r=e=>{if(typeof Symbol!=="undefined"&&Symbol.toStringTag){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}Object.defineProperty(e,"__esModule",{value:true})}})();if(typeof __nccwpck_require__!=="undefined")__nccwpck_require__.ab=__dirname+"/";var r={};(()=>{__nccwpck_require__.r(r);var e=__nccwpck_require__(186);var t=__nccwpck_require__(747);var n=__nccwpck_require__(436);var i=__nccwpck_require__(622);var o=__nccwpck_require__(669);var s=__nccwpck_require__(129);var u=__nccwpck_require__(87);function homeDir(){return u.userInfo().homedir}function resolveHomeFolder(e){if(e[0]==="~"){return(0,i.join)(homeDir(),e.slice(1))}return e}var c=undefined&&undefined.__awaiter||function(e,t,r,n){function adopt(e){return e instanceof r?e:new r((function(t){t(e)}))}return new(r||(r=Promise))((function(r,i){function fulfilled(e){try{step(n.next(e))}catch(e){i(e)}}function rejected(e){try{step(n["throw"](e))}catch(e){i(e)}}function step(e){e.done?r(e.value):adopt(e.value).then(fulfilled,rejected)}step((n=n.apply(e,t||[])).next())}))};const a="sshkeys";const d=(0,i.join)(homeDir(),a);const l=o.promisify(s.exec);function addSshKey(r,o){return c(this,void 0,void 0,(function*(){const s=(0,i.join)(d,r);try{e.info(`create folder ${d}`);yield n.mkdirP(d);e.info(`write to ${s}`);t.writeFileSync(s,o);e.info("ssh key installed")}catch(t){console.error(t.message);e.setFailed(t.message)}return s}))}function addKownHost(t){return c(this,void 0,void 0,(function*(){yield n.mkdirP("~/.ssh");const r=`ssh-keyscan -H -t rsa -v ${t}  >> ~/.ssh/known_hosts`;e.info(r);const{stdout:i,stderr:o}=yield l(r);e.info(i)}))}function copyFiles(t,r,n,i,o){return c(this,void 0,void 0,(function*(){const s=resolveHomeFolder(r);const u=`scp -i ${t} -r ${s} ${i}@${n}:${o}`;e.info(u);const{stdout:c,stderr:a}=yield l(u);e.info(c);console.log(u)}))}class Params{constructor(){this.sourceFolder="~/deployment";this.destinationFolder="./dest";this.user="root"}verify(){const e=this.name&&this.key&&this.server;if(!e){const e=`invalid params: server=${this.server} name=${this.name} key=${this.key}`;throw new Error(e)}}}const f=new Params;f.name=e.getInput("ssh-key-name");f.key=e.getInput("ssh-private-key");f.server=e.getInput("server");f.sourceFolder=e.getInput("source-folder");f.destinationFolder=e.getInput("destination-folder");f.user=e.getInput("user");const p=f;var h=undefined&&undefined.__awaiter||function(e,t,r,n){function adopt(e){return e instanceof r?e:new r((function(t){t(e)}))}return new(r||(r=Promise))((function(r,i){function fulfilled(e){try{step(n.next(e))}catch(e){i(e)}}function rejected(e){try{step(n["throw"](e))}catch(e){i(e)}}function step(e){e.done?r(e.value):adopt(e.value).then(fulfilled,rejected)}step((n=n.apply(e,t||[])).next())}))};function run(){return h(this,void 0,void 0,(function*(){try{console.info("start deployment...");console.info(JSON.stringify(p));p.verify();console.info("install ssh key...");const t=yield addSshKey(p.name,p.key);e.setOutput("key-file",t);e.info(`file ${t} created`);yield addKownHost(p.server);const r=resolveHomeFolder(p.sourceFolder);yield copyFiles(t,r,p.server,p.user,p.destinationFolder)}catch(t){e.setFailed(t.message)}}))}run()})();module.exports=r})();