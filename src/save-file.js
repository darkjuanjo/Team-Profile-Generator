const fs = require('fs');

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/MyTeam.html', fileContent, err => {

            if(err) {
                reject(err);
                return
            }
            resolve({
                ok: true,
                message: 'File Saved!'
            });
        });
    });
};

const copyCSS = () => {
    return new Promise((resolve, reject) => {
        fs.copyFile('./src/style.css', './dist/style.css', err => {
            if(err) {
                reject(err);
                return
            }
            resolve({
                ok: true,
                message: 'File Copied'
            });
        });

    });
};

module.exports = {writeFile, copyCSS};