const fs = require('fs');
const path = require('path');
const { runLoaders } = require("loader-runner");

runLoaders(
    {
        resource: "./index.css",
        loaders: [path.resolve(__dirname, "./index.js")],
        readResource: fs.readFile.bind(fs),
    },
    (err, result) => (err ? console.log(err) : null)
)