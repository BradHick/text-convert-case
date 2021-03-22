const capitalCase = (a) => {
  let c;
  return (
    (c = a.toLowerCase()),
    (c = (c + '').replace(/^(\S)|\s+(\S)/g, function (a) {
      return a.toUpperCase();
    })),
    // (c = _(c)),
    (c = c.replace(/\(([A-Za-z])/g, function (a) {
      return a.toUpperCase();
    })),
    c
  );
};

export default capitalCase;
