const readline = require('readline-sync')
const robots = {
    text: require('./robots/text.js')
}

function start() {
    const content = {}

    content.searchTerm = askAndReturnSearchTerm()
    content.prefix = askAndReturnPrefix()
    robots.text(content)

    function askAndReturnSearchTerm() {
        return readline.question('Escreva uma palavra chave: ')
    }
    function askAndReturnPrefix() {
        const prefixes = ['Quem e', 'O que e', 'A historia de']
        const selectedPrefixIndex = readline.keyInSelect(prefixes)
        return prefixes[selectedPrefixIndex]
    }
    console.log(content)
}


start()