export const formatQuery = (query: string) => {
  function cleanSpaces(str: string) {
    let res = '';
    for (let i = 0; i < str.length; i += 1) {
      if (!(str[i] === ' ' && str[i + 1] && str[i + 1] === ' ')) {
        res += str[i];
      }
    }
    return res;
  }

  function addNewLines(str: string) {
    let level = 0;
    const indentSize = 2;
    let res = '';

    for (let i = 0; i < str.length; i += 1) {
      if (str[i] === '{') {
        level += 1;
        res += `{\n${' '.repeat(indentSize * level)}`;
      } else if (str[i] === '}') {
        level -= 1;
        res += `\n${' '.repeat(indentSize * level)}}`;
      } else if (str[i] === ' ' && str[i + 1] === '{') {
        res += ' ';
      } else if (str[i] === ' ' && str[i + 1] === '}') {
        // eslint-disable-next-line no-continue
        continue;
      } else if (
        str[i] === ' ' &&
        level > 1 &&
        str[i + 1] !== '{' &&
        str[i - 1] !== '{'
      ) {
        res += `\n${' '.repeat(indentSize * level)}`;
      } else if (str[i] !== ' ') {
        res += str[i];
      }
    }
    return res;
  }

  function handleCommands(str: string) {
    let res = str;
    if (res.startsWith('query')) {
      res = res.replace('query', 'query ');
    }
    if (res.startsWith('mutation')) {
      res = res.replace('mutation', 'mutation ');
    }
    if (res.startsWith('fragment')) {
      res = res.replace('fragment', 'fragment ');
    }
    return res;
  }

  const singleLine = query.replace(/(\r\n|\n|\r)/gm, '');
  const onlySingleSpaced = cleanSpaces(singleLine);
  const prettified = addNewLines(onlySingleSpaced);
  const res = handleCommands(prettified);
  return res;
};
