import arrayStartsWith from 'array-starts-with';
import expect from 'array-starts-with/tests/expect';

describe('index', () => {
  it('exports arrayStartsWith as default', () => {
    expect(arrayStartsWith).to.be.a('function');
  });
});
