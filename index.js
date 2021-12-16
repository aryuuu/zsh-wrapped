const fs = require('fs');
const homedir = require('os').homedir();

const zshPath = homedir + "/.zsh_history"
const zshFile = fs.readFileSync(zshPath, "utf8")
const lines = zshFile.split("\n")
for (const line of lines) {
    if (!line.startsWith(': ')) {  // invalid prefix
        continue
    }
    const time = parseInt(line.substring(2, 12))
    const command = line.substring(15)

    console.log(time)
    console.log(command)
}
console.log(lines.length)