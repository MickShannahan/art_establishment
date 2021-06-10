
export function convertToQuery(object) {
  let htmlEncode = ''
  for (const key in object) {
    htmlEncode += key + '=' + object[key]
  }
  return htmlEncode
}
