// * Shorten URL tester
// *
// * tests the URL Shorten function.
// *
// * This cannot be run inside a Node Session, use Jasmine for this tests.

const owo = new (require(require('path').resolve('../owo.js/index.js')))('FAKE-TOKEN');

describe('shorten_test', () => {
  it('shorten', () => {
        // let's try to shorten osu.ppy.sh using this
    owo.shorten('https://osu.ppy.sh')
            .then(data => {
              console.log(data);
              expect(data).toBe('string');
            })
            .catch(err => {
              reject(err);
              expect(err).toBe(undefined);
            });
  });
});
