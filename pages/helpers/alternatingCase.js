const alternatingCase = (a) => {
  a = a.toLowerCase();
  for (var b = '', c = 0; c < a.length; c++) {
    var d = a.charAt(c);
    b += c % 2 ? d.toUpperCase() : d;
  }
  return b;
};

export default alternatingCase;
