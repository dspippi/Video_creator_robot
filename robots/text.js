const algorithmia = require('algorithmia')

function robot(content){
    fetchContentFromWikipedia(content)
  //  sanitizeContent(content)
  //  breakContentIntoSentences(content)

  function  fetchContentFromWikipedia(content){
      const algorithmiaAuthenticated = algorithmia('API KEY')
      const wikipediaAlgotithm = algorithmiaAuthenticated.algo('web/WikipediaParser/0.1.2')
      const wikipediaResponde = wikipediaAlgotithm.pipe(content.searchTerm)
      const wikipediaContent = wikipediaResponde.get()
      console.log(wikipediaContent)
  }
}
module.exports = robot