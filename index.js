function exactMatch(pattern, s) {
  if (s !== pattern) {
    return false;
  }

  return true;
}

function anyCharMatch(s) {
  return (s.length === 1);
}

function match(s, pattern) {
  if (pattern === '.') {
    return anyCharMatch(s);
  }

  return exactMatch(pattern, s);
}

module.exports = {
  match
};
