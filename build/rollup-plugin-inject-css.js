const rf = require('fs')
const chalk = require("chalk");
let filePath = []
export default function RollupPluginJnjectCss(replaceStr, fileName) {
    return {
        name: 'rollup-js-inject-css',
        generateBundle (outputOptions, bundle, isWrite) {
            filePath.push(outputOptions.file)
        },
        closeBundle () {
            console.log(chalk.green(`starting inject-css to js fileName:${fileName}`))
            let cssFileDir = fileName.replace('js', 'css')
			console.log(chalk.green(`cssFileDir:${cssFileDir}`))
            let cssData = rf.readFileSync(cssFileDir, 'utf-8')
            filePath.forEach((filePath) => {
                let jsData = rf.readFileSync(filePath, 'utf-8')
                jsData = jsData.replace(replaceStr, cssData)
                rf.writeFileSync(filePath, jsData)
                console.log(chalk.green(`inject-css to js success ${filePath}`))
            })
            filePath = []
            rf.unlinkSync(cssFileDir)
            console.log(chalk.green('end inject-css to js'))
            console.log(chalk.green('-----inject-css to js succss-----'))
        }
    };
}
