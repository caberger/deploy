(()=>{"use strict";var e={351:function(e,t,r){var i=this&&this.__createBinding||(Object.create?function(e,t,r,i){if(i===undefined)i=r;Object.defineProperty(e,i,{enumerable:true,get:function(){return t[r]}})}:function(e,t,r,i){if(i===undefined)i=r;e[i]=t[r]});var n=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:true,value:t})}:function(e,t){e["default"]=t});var o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var r in e)if(r!=="default"&&Object.hasOwnProperty.call(e,r))i(t,e,r);n(t,e);return t};Object.defineProperty(t,"__esModule",{value:true});t.issue=t.issueCommand=void 0;const s=o(r(87));const u=r(278);function issueCommand(e,t,r){const i=new Command(e,t,r);process.stdout.write(i.toString()+s.EOL)}t.issueCommand=issueCommand;function issue(e,t=""){issueCommand(e,{},t)}t.issue=issue;const a="::";class Command{constructor(e,t,r){if(!e){e="missing.command"}this.command=e;this.properties=t;this.message=r}toString(){let e=a+this.command;if(this.properties&&Object.keys(this.properties).length>0){e+=" ";let t=true;for(const r in this.properties){if(this.properties.hasOwnProperty(r)){const i=this.properties[r];if(i){if(t){t=false}else{e+=","}e+=`${r}=${escapeProperty(i)}`}}}}e+=`${a}${escapeData(this.message)}`;return e}}function escapeData(e){return u.toCommandValue(e).replace(/%/g,"%25").replace(/\r/g,"%0D").replace(/\n/g,"%0A")}function escapeProperty(e){return u.toCommandValue(e).replace(/%/g,"%25").replace(/\r/g,"%0D").replace(/\n/g,"%0A").replace(/:/g,"%3A").replace(/,/g,"%2C")}},186:function(e,t,r){var i=this&&this.__createBinding||(Object.create?function(e,t,r,i){if(i===undefined)i=r;Object.defineProperty(e,i,{enumerable:true,get:function(){return t[r]}})}:function(e,t,r,i){if(i===undefined)i=r;e[i]=t[r]});var n=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:true,value:t})}:function(e,t){e["default"]=t});var o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var r in e)if(r!=="default"&&Object.hasOwnProperty.call(e,r))i(t,e,r);n(t,e);return t};var s=this&&this.__awaiter||function(e,t,r,i){function adopt(e){return e instanceof r?e:new r((function(t){t(e)}))}return new(r||(r=Promise))((function(r,n){function fulfilled(e){try{step(i.next(e))}catch(e){n(e)}}function rejected(e){try{step(i["throw"](e))}catch(e){n(e)}}function step(e){e.done?r(e.value):adopt(e.value).then(fulfilled,rejected)}step((i=i.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:true});t.getState=t.saveState=t.group=t.endGroup=t.startGroup=t.info=t.warning=t.error=t.debug=t.isDebug=t.setFailed=t.setCommandEcho=t.setOutput=t.getBooleanInput=t.getMultilineInput=t.getInput=t.addPath=t.setSecret=t.exportVariable=t.ExitCode=void 0;const u=r(351);const a=r(717);const c=r(278);const l=o(r(87));const d=o(r(622));var f;(function(e){e[e["Success"]=0]="Success";e[e["Failure"]=1]="Failure"})(f=t.ExitCode||(t.ExitCode={}));function exportVariable(e,t){const r=c.toCommandValue(t);process.env[e]=r;const i=process.env["GITHUB_ENV"]||"";if(i){const t="_GitHubActionsFileCommandDelimeter_";const i=`${e}<<${t}${l.EOL}${r}${l.EOL}${t}`;a.issueCommand("ENV",i)}else{u.issueCommand("set-env",{name:e},r)}}t.exportVariable=exportVariable;function setSecret(e){u.issueCommand("add-mask",{},e)}t.setSecret=setSecret;function addPath(e){const t=process.env["GITHUB_PATH"]||"";if(t){a.issueCommand("PATH",e)}else{u.issueCommand("add-path",{},e)}process.env["PATH"]=`${e}${d.delimiter}${process.env["PATH"]}`}t.addPath=addPath;function getInput(e,t){const r=process.env[`INPUT_${e.replace(/ /g,"_").toUpperCase()}`]||"";if(t&&t.required&&!r){throw new Error(`Input required and not supplied: ${e}`)}if(t&&t.trimWhitespace===false){return r}return r.trim()}t.getInput=getInput;function getMultilineInput(e,t){const r=getInput(e,t).split("\n").filter((e=>e!==""));return r}t.getMultilineInput=getMultilineInput;function getBooleanInput(e,t){const r=["true","True","TRUE"];const i=["false","False","FALSE"];const n=getInput(e,t);if(r.includes(n))return true;if(i.includes(n))return false;throw new TypeError(`Input does not meet YAML 1.2 "Core Schema" specification: ${e}\n`+`Support boolean input list: \`true | True | TRUE | false | False | FALSE\``)}t.getBooleanInput=getBooleanInput;function setOutput(e,t){process.stdout.write(l.EOL);u.issueCommand("set-output",{name:e},t)}t.setOutput=setOutput;function setCommandEcho(e){u.issue("echo",e?"on":"off")}t.setCommandEcho=setCommandEcho;function setFailed(e){process.exitCode=f.Failure;error(e)}t.setFailed=setFailed;function isDebug(){return process.env["RUNNER_DEBUG"]==="1"}t.isDebug=isDebug;function debug(e){u.issueCommand("debug",{},e)}t.debug=debug;function error(e){u.issue("error",e instanceof Error?e.toString():e)}t.error=error;function warning(e){u.issue("warning",e instanceof Error?e.toString():e)}t.warning=warning;function info(e){process.stdout.write(e+l.EOL)}t.info=info;function startGroup(e){u.issue("group",e)}t.startGroup=startGroup;function endGroup(){u.issue("endgroup")}t.endGroup=endGroup;function group(e,t){return s(this,void 0,void 0,(function*(){startGroup(e);let r;try{r=yield t()}finally{endGroup()}return r}))}t.group=group;function saveState(e,t){u.issueCommand("save-state",{name:e},t)}t.saveState=saveState;function getState(e){return process.env[`STATE_${e}`]||""}t.getState=getState},717:function(e,t,r){var i=this&&this.__createBinding||(Object.create?function(e,t,r,i){if(i===undefined)i=r;Object.defineProperty(e,i,{enumerable:true,get:function(){return t[r]}})}:function(e,t,r,i){if(i===undefined)i=r;e[i]=t[r]});var n=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:true,value:t})}:function(e,t){e["default"]=t});var o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var r in e)if(r!=="default"&&Object.hasOwnProperty.call(e,r))i(t,e,r);n(t,e);return t};Object.defineProperty(t,"__esModule",{value:true});t.issueCommand=void 0;const s=o(r(747));const u=o(r(87));const a=r(278);function issueCommand(e,t){const r=process.env[`GITHUB_${e}`];if(!r){throw new Error(`Unable to find environment variable for file command ${e}`)}if(!s.existsSync(r)){throw new Error(`Missing file at path: ${r}`)}s.appendFileSync(r,`${a.toCommandValue(t)}${u.EOL}`,{encoding:"utf8"})}t.issueCommand=issueCommand},278:(e,t)=>{Object.defineProperty(t,"__esModule",{value:true});t.toCommandValue=void 0;function toCommandValue(e){if(e===null||e===undefined){return""}else if(typeof e==="string"||e instanceof String){return e}return JSON.stringify(e)}t.toCommandValue=toCommandValue},962:function(e,t,r){var i=this&&this.__createBinding||(Object.create?function(e,t,r,i){if(i===undefined)i=r;Object.defineProperty(e,i,{enumerable:true,get:function(){return t[r]}})}:function(e,t,r,i){if(i===undefined)i=r;e[i]=t[r]});var n=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:true,value:t})}:function(e,t){e["default"]=t});var o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var r in e)if(r!=="default"&&Object.hasOwnProperty.call(e,r))i(t,e,r);n(t,e);return t};var s=this&&this.__awaiter||function(e,t,r,i){function adopt(e){return e instanceof r?e:new r((function(t){t(e)}))}return new(r||(r=Promise))((function(r,n){function fulfilled(e){try{step(i.next(e))}catch(e){n(e)}}function rejected(e){try{step(i["throw"](e))}catch(e){n(e)}}function step(e){e.done?r(e.value):adopt(e.value).then(fulfilled,rejected)}step((i=i.apply(e,t||[])).next())}))};var u;Object.defineProperty(t,"__esModule",{value:true});t.getCmdPath=t.tryGetExecutablePath=t.isRooted=t.isDirectory=t.exists=t.IS_WINDOWS=t.unlink=t.symlink=t.stat=t.rmdir=t.rename=t.readlink=t.readdir=t.mkdir=t.lstat=t.copyFile=t.chmod=void 0;const a=o(r(747));const c=o(r(622));u=a.promises,t.chmod=u.chmod,t.copyFile=u.copyFile,t.lstat=u.lstat,t.mkdir=u.mkdir,t.readdir=u.readdir,t.readlink=u.readlink,t.rename=u.rename,t.rmdir=u.rmdir,t.stat=u.stat,t.symlink=u.symlink,t.unlink=u.unlink;t.IS_WINDOWS=process.platform==="win32";function exists(e){return s(this,void 0,void 0,(function*(){try{yield t.stat(e)}catch(e){if(e.code==="ENOENT"){return false}throw e}return true}))}t.exists=exists;function isDirectory(e,r=false){return s(this,void 0,void 0,(function*(){const i=r?yield t.stat(e):yield t.lstat(e);return i.isDirectory()}))}t.isDirectory=isDirectory;function isRooted(e){e=normalizeSeparators(e);if(!e){throw new Error('isRooted() parameter "p" cannot be empty')}if(t.IS_WINDOWS){return e.startsWith("\\")||/^[A-Z]:/i.test(e)}return e.startsWith("/")}t.isRooted=isRooted;function tryGetExecutablePath(e,r){return s(this,void 0,void 0,(function*(){let i=undefined;try{i=yield t.stat(e)}catch(t){if(t.code!=="ENOENT"){console.log(`Unexpected error attempting to determine if executable file exists '${e}': ${t}`)}}if(i&&i.isFile()){if(t.IS_WINDOWS){const t=c.extname(e).toUpperCase();if(r.some((e=>e.toUpperCase()===t))){return e}}else{if(isUnixExecutable(i)){return e}}}const n=e;for(const o of r){e=n+o;i=undefined;try{i=yield t.stat(e)}catch(t){if(t.code!=="ENOENT"){console.log(`Unexpected error attempting to determine if executable file exists '${e}': ${t}`)}}if(i&&i.isFile()){if(t.IS_WINDOWS){try{const r=c.dirname(e);const i=c.basename(e).toUpperCase();for(const n of yield t.readdir(r)){if(i===n.toUpperCase()){e=c.join(r,n);break}}}catch(t){console.log(`Unexpected error attempting to determine the actual case of the file '${e}': ${t}`)}return e}else{if(isUnixExecutable(i)){return e}}}}return""}))}t.tryGetExecutablePath=tryGetExecutablePath;function normalizeSeparators(e){e=e||"";if(t.IS_WINDOWS){e=e.replace(/\//g,"\\");return e.replace(/\\\\+/g,"\\")}return e.replace(/\/\/+/g,"/")}function isUnixExecutable(e){return(e.mode&1)>0||(e.mode&8)>0&&e.gid===process.getgid()||(e.mode&64)>0&&e.uid===process.getuid()}function getCmdPath(){var e;return(e=process.env["COMSPEC"])!==null&&e!==void 0?e:`cmd.exe`}t.getCmdPath=getCmdPath},436:function(e,t,r){var i=this&&this.__createBinding||(Object.create?function(e,t,r,i){if(i===undefined)i=r;Object.defineProperty(e,i,{enumerable:true,get:function(){return t[r]}})}:function(e,t,r,i){if(i===undefined)i=r;e[i]=t[r]});var n=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:true,value:t})}:function(e,t){e["default"]=t});var o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var r in e)if(r!=="default"&&Object.hasOwnProperty.call(e,r))i(t,e,r);n(t,e);return t};var s=this&&this.__awaiter||function(e,t,r,i){function adopt(e){return e instanceof r?e:new r((function(t){t(e)}))}return new(r||(r=Promise))((function(r,n){function fulfilled(e){try{step(i.next(e))}catch(e){n(e)}}function rejected(e){try{step(i["throw"](e))}catch(e){n(e)}}function step(e){e.done?r(e.value):adopt(e.value).then(fulfilled,rejected)}step((i=i.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:true});t.findInPath=t.which=t.mkdirP=t.rmRF=t.mv=t.cp=void 0;const u=r(357);const a=o(r(129));const c=o(r(622));const l=r(669);const d=o(r(962));const f=l.promisify(a.exec);const p=l.promisify(a.execFile);function cp(e,t,r={}){return s(this,void 0,void 0,(function*(){const{force:i,recursive:n,copySourceDirectory:o}=readCopyOptions(r);const s=(yield d.exists(t))?yield d.stat(t):null;if(s&&s.isFile()&&!i){return}const u=s&&s.isDirectory()&&o?c.join(t,c.basename(e)):t;if(!(yield d.exists(e))){throw new Error(`no such file or directory: ${e}`)}const a=yield d.stat(e);if(a.isDirectory()){if(!n){throw new Error(`Failed to copy. ${e} is a directory, but tried to copy without recursive flag.`)}else{yield cpDirRecursive(e,u,0,i)}}else{if(c.relative(e,u)===""){throw new Error(`'${u}' and '${e}' are the same file`)}yield copyFile(e,u,i)}}))}t.cp=cp;function mv(e,t,r={}){return s(this,void 0,void 0,(function*(){if(yield d.exists(t)){let i=true;if(yield d.isDirectory(t)){t=c.join(t,c.basename(e));i=yield d.exists(t)}if(i){if(r.force==null||r.force){yield rmRF(t)}else{throw new Error("Destination already exists")}}}yield mkdirP(c.dirname(t));yield d.rename(e,t)}))}t.mv=mv;function rmRF(e){return s(this,void 0,void 0,(function*(){if(d.IS_WINDOWS){if(/[*"<>|]/.test(e)){throw new Error('File path must not contain `*`, `"`, `<`, `>` or `|` on Windows')}try{const t=d.getCmdPath();if(yield d.isDirectory(e,true)){yield f(`${t} /s /c "rd /s /q "%inputPath%""`,{env:{inputPath:e}})}else{yield f(`${t} /s /c "del /f /a "%inputPath%""`,{env:{inputPath:e}})}}catch(e){if(e.code!=="ENOENT")throw e}try{yield d.unlink(e)}catch(e){if(e.code!=="ENOENT")throw e}}else{let t=false;try{t=yield d.isDirectory(e)}catch(e){if(e.code!=="ENOENT")throw e;return}if(t){yield p(`rm`,[`-rf`,`${e}`])}else{yield d.unlink(e)}}}))}t.rmRF=rmRF;function mkdirP(e){return s(this,void 0,void 0,(function*(){u.ok(e,"a path argument must be provided");yield d.mkdir(e,{recursive:true})}))}t.mkdirP=mkdirP;function which(e,t){return s(this,void 0,void 0,(function*(){if(!e){throw new Error("parameter 'tool' is required")}if(t){const t=yield which(e,false);if(!t){if(d.IS_WINDOWS){throw new Error(`Unable to locate executable file: ${e}. Please verify either the file path exists or the file can be found within a directory specified by the PATH environment variable. Also verify the file has a valid extension for an executable file.`)}else{throw new Error(`Unable to locate executable file: ${e}. Please verify either the file path exists or the file can be found within a directory specified by the PATH environment variable. Also check the file mode to verify the file is executable.`)}}return t}const r=yield findInPath(e);if(r&&r.length>0){return r[0]}return""}))}t.which=which;function findInPath(e){return s(this,void 0,void 0,(function*(){if(!e){throw new Error("parameter 'tool' is required")}const t=[];if(d.IS_WINDOWS&&process.env["PATHEXT"]){for(const e of process.env["PATHEXT"].split(c.delimiter)){if(e){t.push(e)}}}if(d.isRooted(e)){const r=yield d.tryGetExecutablePath(e,t);if(r){return[r]}return[]}if(e.includes(c.sep)){return[]}const r=[];if(process.env.PATH){for(const e of process.env.PATH.split(c.delimiter)){if(e){r.push(e)}}}const i=[];for(const n of r){const r=yield d.tryGetExecutablePath(c.join(n,e),t);if(r){i.push(r)}}return i}))}t.findInPath=findInPath;function readCopyOptions(e){const t=e.force==null?true:e.force;const r=Boolean(e.recursive);const i=e.copySourceDirectory==null?true:Boolean(e.copySourceDirectory);return{force:t,recursive:r,copySourceDirectory:i}}function cpDirRecursive(e,t,r,i){return s(this,void 0,void 0,(function*(){if(r>=255)return;r++;yield mkdirP(t);const n=yield d.readdir(e);for(const o of n){const n=`${e}/${o}`;const s=`${t}/${o}`;const u=yield d.lstat(n);if(u.isDirectory()){yield cpDirRecursive(n,s,r,i)}else{yield copyFile(n,s,i)}}yield d.chmod(t,(yield d.stat(e)).mode)}))}function copyFile(e,t,r){return s(this,void 0,void 0,(function*(){if((yield d.lstat(e)).isSymbolicLink()){try{yield d.lstat(t);yield d.unlink(t)}catch(e){if(e.code==="EPERM"){yield d.chmod(t,"0666");yield d.unlink(t)}}const r=yield d.readlink(e);yield d.symlink(r,t,d.IS_WINDOWS?"junction":null)}else if(!(yield d.exists(t))||r){yield d.copyFile(e,t)}}))}},357:e=>{e.exports=require("assert")},129:e=>{e.exports=require("child_process")},747:e=>{e.exports=require("fs")},87:e=>{e.exports=require("os")},622:e=>{e.exports=require("path")},669:e=>{e.exports=require("util")}};var t={};function __nccwpck_require__(r){var i=t[r];if(i!==undefined){return i.exports}var n=t[r]={exports:{}};var o=true;try{e[r].call(n.exports,n,n.exports,__nccwpck_require__);o=false}finally{if(o)delete t[r]}return n.exports}(()=>{__nccwpck_require__.r=e=>{if(typeof Symbol!=="undefined"&&Symbol.toStringTag){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}Object.defineProperty(e,"__esModule",{value:true})}})();if(typeof __nccwpck_require__!=="undefined")__nccwpck_require__.ab=__dirname+"/";var r={};(()=>{__nccwpck_require__.r(r);var e=__nccwpck_require__(186);var t=__nccwpck_require__(87);var i=__nccwpck_require__(747);var n=__nccwpck_require__(436);var o=__nccwpck_require__(622);const s="sshkeys";const u=(0,o.join)(t.userInfo().homedir,s);function addSshKey(t,r){const s=(0,o.join)(u,t);try{n.mkdirP(u);i.writeFileSync(s,r)}catch(t){console.error(t.message);e.setFailed(t.message)}return s}class Params{verify(){const e=this.name&&this.key&&this.server;const t=`invalid params: name=${this.name} key=${this.key}`;throw new Error(t)}}const a=new Params;a.name=e.getInput("ssh-key-name");a.key=e.getInput("ssh-private-key");a.server=e.getInput("server");const c=a;try{c.verify();const t=addSshKey(c.name,c.key);e.info(`file ${t} created`)}catch(t){e.setFailed(t.message)}})();module.exports=r})();