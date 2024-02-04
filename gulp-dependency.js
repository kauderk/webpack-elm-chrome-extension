// https://stackoverflow.com/a/60921145
const fs = require('fs')
const shrinkwrapFilePath = 'npm-shrinkwrap.json'
const emptyShrinkwrapContent = `{
      "dependencies": {
        "graceful-fs": {
            "version": "4.2.2"
         }
      }
    }`
if (fs.existsSync(shrinkwrapFilePath)) {
  fs.writeFileSync(shrinkwrapFilePath, emptyShrinkwrapContent)
} else {
  fs.writeFileSync(shrinkwrapFilePath, emptyShrinkwrapContent)
}
console.log(`reset ${shrinkwrapFilePath}`)
