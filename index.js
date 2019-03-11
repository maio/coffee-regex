function nextState(ok, rest) {
  return {
    ok,
    rest
  };
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

function charMatch(s, char) {
  if (s.length === 0) {
    return nextState(false);
  }

  return nextState(s[0] === char, s.substr(1));
}

function match(s, pattern) {
  if (pattern === '') {
    return true;
  }

  if (pattern[0] === '.') {
    const { ok, rest } = anyCharMatch(s);
    return ok && match(rest, pattern.substr(1));
  }

  const { ok, rest } = charMatch(s, pattern[0]);
  return ok && match(rest, pattern.substr(1));
}

module.exports = {
  match
};
