// var url = `https://newsapi.org/v2/everything?q=Apple&from=2024-05-09&to=2024-05-09&sortBy=popularity&apiKey=0a57ab53b6e349f8934f6ecb46b23a71`;
//  var url = ` https://newsapi.org/v2/top-headlines?country=us&apiKey=0a57ab53b6e349f8934f6ecb46b23a71`
// var req = new Request(url);
let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=0a57ab53b6e349f8934f6ecb46b23a71`




fetch(url)
 



  .then((response) => response.json())
  .then((json) => {
   console.log(json);
    let artileTitle = "";
    let jsonArticles = json.articles;
    console.log(jsonArticles);
    for (let article of jsonArticles) {
        console.log(article);
      if(article.urlToImage == null){
    
        console.log(article.title);
        artileTitle+="";
      }else{
        // console.log(article);
      artileTitle += `<div class="card col-md-4">
      <img src= ${article.urlToImage} class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${article.title}</h5>
        <p class="mt-3">${article.description}</p>
        <a href= ${article.url} class="btn btn-primary">Go somewhere</a>
      </div>
      </div>
      </div>`
      }
    }
    document.getElementById("news-load").innerHTML = artileTitle;
  });
