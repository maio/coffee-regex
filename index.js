function newState(s, pattern) {
  return {
    ok: true,
    s,
    pattern
  };
}

function nextState(ok, rest) {
  return {
    ok,
    s: rest
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

function buildNext(state) {
  const { s, pattern } = state;

  if (pattern[0] === '.') {
    return {
      matchFn: anyCharMatch,
      restPattern: pattern.substr(1)
    };
  }

  return {
    matchFn: (s) => charMatch(s, pattern[0]),
    restPattern: pattern.substr(1)
  };
};

function _match(state) {
  const { s, pattern } = state;

  if (pattern === '' && s === '') {
    return true;
  }

  const { matchFn, restPattern } =  buildNext(state);

  const result = matchFn(s);
  return result.ok && _match({
    ...result,
    pattern: restPattern
  });
}

function match(s, pattern) {
  return _match({
    s,
    pattern
  });
}

module.exports = {
  match
};
