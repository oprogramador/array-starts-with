function arrayStartsWith(base, start) {
  for (let i = 0; i < start.length; i++) {
    if (base[i] !== start[i]) {
      return false;
    }
  }

  return true;
}

export default arrayStartsWith;
