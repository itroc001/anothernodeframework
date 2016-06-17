const gcloud = require('gcloud')({
    projectId: 'fn-hipster',
    keyFilename: './config/gcloud-keyfile.json'
});

module.exports = gcloud.datastore();