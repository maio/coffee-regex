function nextState(ok, rest) {
  return {
    ok,
    rest
  };
}

function exactMatch(pattern, s) {
  if (s !== pattern) {
    return false;
  }

  return true;
}

function anyCharMatch(s) {
  if (s.length === 0) {
    return nextState(false);
  }

  if (s.length === 1) {
    return nextState(true, '');
  }

  return nextState(true, s.substr(1));
}

function match(s, pattern) {
  if (pattern[0] === '.') {
    const { ok, rest } = anyCharMatch(s);
    return ok && match(rest, pattern.substr(1));
  }

  return exactMatch(pattern, s);
}

module.exports = {
  match
};
