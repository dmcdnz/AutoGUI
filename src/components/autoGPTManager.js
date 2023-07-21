const download = require('download-git-repo');
const fs = require('fs');
const path = require('path');

function downloadAutoGPT() {
    download('direct:https://github.com/Significant-Gravitas/Auto-GPT.git', './auto-gpt', function (err) {
        if (err) {
            console.error(err);
        } else {
            console.log('Download completed!');
        }
    });
}

function checkAndCreateEnvFile() {
    const envPath = path.join(__dirname, './auto-gpt', '.env');
    const templatePath = path.join(__dirname, './auto-gpt', '.env.template');

    fs.access(envPath, fs.constants.F_OK, (err) => {
        if (err) {
            console.log('.env file does not exist, creating one from .env.template');
            fs.copyFile(templatePath, envPath, (err) => {
                if (err) {
                    console.error('Error creating .env file:', err);
                } else {
                    console.log('.env file created successfully');
                }
            });
        } else {
            console.log('.env file exists');
        }
    });
}

module.exports = {
    downloadAutoGPT,
    checkAndCreateEnvFile,
};
