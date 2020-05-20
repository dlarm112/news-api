let newsList = []
let loaded = 1
let pages = 20
const apiKey = '63c2b3de19bc480a8294ac81bc72751b'
const loadNews = async () => {
    let url = (`https://newsapi.org/v2/everything?page=${loaded}&pageSize=${pages}&q=+("the bachelor" OR "the bachelorette")-("bollywood" OR "trump")&apiKey=63c2b3de19bc480a8294ac81bc72751b`)
    let data = await fetch(url)
    let result = await data.json();
    newsList = result.articles
    render(newsList)
    console.log("FULL result", result)
}
const render = (list) => {
    console.log("you call render and you have list", list)
    let newsHtml = list.map((item, index) =>
     `<div id="news">
     
     <div id="contentArea">
     <div>
        <a href="${item.url}"><h4><div id="tite">${item.title}</div></h4></a>
            <div id="source">${item.source.name}</div>
            <div id="publishAt">${item.publishedAt}</div>
     </div>
            <div id="imgArea">
                <a href="${item.url}"><img src="${item.urlToImage}" width=200></a>
             </div>
      </div>
      <p id="pages">${index+1} of ${list.length}</p>
      </div>`
    ).join('')
    document.getElementById("newsArea").innerHTML = newsHtml
}
loadNews();

const load20 =() => {
    pages = pages + 20;
    loadNews();
}

