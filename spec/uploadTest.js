//  *  Jasmine Test File - Upload
//  *
//  *  Tests upload capability of library
//  *
//  *
//  * This cannot be run inside a Node Session, use Jasmine for this tests.

const owo = new (require(require('path').resolve('../owo.js/index.js')))('FAKE-TOKEN');

describe('upload_test', () => {
  it('upload', () => {
        // Upload the file to OwO.
    owo.upload(require('path').resolve('../owo.js/examples/file.png'))
            .then(data => {
              console.log(data);
              expect(data).toBe('string');
            })
            .catch(err => {
              console.log(err);
              expect(err).toBe(undefined);
            });
  });
});
