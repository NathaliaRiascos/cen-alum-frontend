const fs = require("fs")
const { choices, decisions } = require("../tokens")


/* 
1 - limiar los espacios
2 - cambiar los keys a kebab-case

*/

const toKebabCase = string => 
  string.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase();

function transformTokens(parentKey, object) {
  const objectKeys = Object.keys(object)

  return objectKeys.reduce((tokensTransformed, objectKey) => {
    const value = object[objectKey]

    if (typeof value === "object") {
      // TODO
      const customProperty = parentKey
        ? `${parentKey}-${objectKey}`
        : `${objectKey}`

      return `${tokensTransformed}
      ${transformTokens(`${toKebabCase(customProperty)}`, value)};`
    }

    return `${tokensTransformed}
    --${parentKey}-${toKebabCase(objectKey)}: ${value};`
  }, '')
}

function buildTokens() {


  const customProperties = `
    ${transformTokens(null, choices)}
    ${transformTokens(null, decisions)}
  `

  const data = [':root {', customProperties.trim(), '}'].join('\n')

  fs.writeFile("./src/tokens.css", data, "utf8", function (error) {
    if (error) {
      return console.error(error)
    }
  })
}

buildTokens()
