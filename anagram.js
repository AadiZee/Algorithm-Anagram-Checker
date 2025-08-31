function createCharMap(str) {
  const charMap = {};
  str = str.toLowerCase().replace(/[\W]/g, "");
  for (let char of str) {
    charMap[char] = charMap[char] ? charMap[char] + 1 : 1;
  }
  return charMap;
}

function anagramCheckerWithCharMap(stringA, stringB) {
  const charMapA = createCharMap(stringA);
  const charMapB = createCharMap(stringB);

  if (Object.keys(charMapA).length !== Object.keys(charMapB).length)
    return false;

  for (let key in charMapA) {
    if (charMapA[key] !== charMapB[key]) return false;
  }

  return true;
}

const sortString = (str) =>
  str.toLowerCase().replace(/[\W]/g, "").split("").sort().join("");

const anagramCheckerSorting = (stringA, stringB) =>
  sortString(stringA) === sortString(stringB);

console.log(anagramCheckerWithCharMap("RAIL! SAFETY!", "fairy tales"));
console.log(anagramCheckerSorting("RAIL! SAFETY!", "fairy tales"));
