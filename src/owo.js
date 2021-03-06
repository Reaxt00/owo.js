
const { createReadStream } = require('fs');
const Endpoints = require('./Endpoints');
const request = require('superagent');
const OwOError = require('./owoError');

/*
 * Creates a new class
 * @prop {key} key your whats-th.is API Key.
 */
class OwOClient {
  constructor (key) {
    this.key = key;
  }
/*
 * Uploads to OWO
 * @prop {String} path the file directory name.
 */
    upload (path) {
    let files = (path instanceof Array) ? path : new Array(path);
    for (let index in files) files[index] = createReadStream(files[index]);
    return request.post(Endpoints.upload(this.key))
      .field('files[]', files)
      .then((res) => res.body)
      .catch((err) => new OwOError(err.message, err.response.req, err.response));
  }
/*
 * shortens your desired URL.
 * @prop {String} url your URL you desire to shorten.
 */
    shorten (url) {
    return request.get(Endpoints.shorten(this.key, url))
      .then((res) => res.text)
      .catch((err) => new OwOError(err.message, err.response.req, err.response));
  }
}

module.exports = OwOClient;
