import arrayStartsWith from 'array-starts-with/arrayStartsWith';
import expect from 'array-starts-with/tests/expect';

describe('arrayStartsWith', () => {
  it('returns true for empty arrays', () => {
    const base = [];
    const start = [];

    const result = arrayStartsWith(base, start);

    expect(result).to.equal(true);
  });

  it('returns true for same one-element arrays', () => {
    const base = ['foo'];
    const start = ['foo'];

    const result = arrayStartsWith(base, start);

    expect(result).to.equal(true);
  });

  it('returns true for same two-element arrays', () => {
    const base = ['foo', 'bar'];
    const start = ['foo', 'bar'];

    const result = arrayStartsWith(base, start);

    expect(result).to.equal(true);
  });

  it('returns true for same three-element arrays', () => {
    const base = ['foo', 'bar', 'baz'];
    const start = ['foo', 'bar', 'baz'];

    const result = arrayStartsWith(base, start);

    expect(result).to.equal(true);
  });

  it('returns true for empty start array', () => {
    const base = ['foo', 'bar', 'baz'];
    const start = [];

    const result = arrayStartsWith(base, start);

    expect(result).to.equal(true);
  });

  it('returns true when base array starts with one-element start array', () => {
    const base = ['foo', 'bar', 'baz'];
    const start = ['foo'];

    const result = arrayStartsWith(base, start);

    expect(result).to.equal(true);
  });

  it('returns true when base array starts with two-element start array', () => {
    const base = ['foo', 'bar', 'baz'];
    const start = ['foo', 'bar'];

    const result = arrayStartsWith(base, start);

    expect(result).to.equal(true);
  });

  it('returns false for different one-element arrays', () => {
    const base = ['foo'];
    const start = ['foo2'];

    const result = arrayStartsWith(base, start);

    expect(result).to.equal(false);
  });

  it('returns false for different two-element arrays', () => {
    const base = ['foo', 'bar'];
    const start = ['foo2', 'bar2'];

    const result = arrayStartsWith(base, start);

    expect(result).to.equal(false);
  });

  it('returns false when base array does not start with one-element start array', () => {
    const base = ['foo', 'bar', 'baz'];
    const start = ['foo2'];

    const result = arrayStartsWith(base, start);

    expect(result).to.equal(false);
  });

  it('returns false when base array does not start with two-element start array but starts with its part', () => {
    const base = ['foo', 'bar', 'baz'];
    const start = ['foo', 'bar2'];

    const result = arrayStartsWith(base, start);

    expect(result).to.equal(false);
  });

  it('returns false when base array does not start with two-element start array but contains it', () => {
    const base = ['foo', 'bar', 'baz'];
    const start = ['bar', 'baz'];

    const result = arrayStartsWith(base, start);

    expect(result).to.equal(false);
  });

  it('returns false when last start array element matches partially', () => {
    const base = ['foo', 'bar', 'baz'];
    const start = ['foo', 'ba'];

    const result = arrayStartsWith(base, start);

    expect(result).to.equal(false);
  });
});
