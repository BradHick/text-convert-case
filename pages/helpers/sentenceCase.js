/* eslint-disable no-sequences */

const sentenceCase = (value) => {
  value = value.toLowerCase();
  let c = '';
  for (let b = !0, d = 0; d < value.length; d++) {
    var e = value.charAt(d);
    // eslint-disable-next-line no-unused-expressions
    /\.|\\!|\?|\n|\r/.test(e)
      ? (b = !0)
      : // eslint-disable-next-line no-sequences
        // eslint-disable-next-line eqeqeq
        '' != e.trim() && 1 == b && ((e = e.toUpperCase()), (b = !1)),
      (c += e);
  }
  return c;
};

export default sentenceCase;
