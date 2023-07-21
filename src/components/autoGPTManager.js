const download = require('download-git-repo');

function downloadAutoGPT() {
    download('direct:https://github.com/Significant-Gravitas/Auto-GPT.git', 'path/to/download/to', function (err) {
        if (err) {
            console.error(err);
        } else {
            console.log('Download completed!');
        }
    });
}

module.exports = {
    downloadAutoGPT,
};
