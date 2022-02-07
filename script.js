const newsKey = "cfef1bff4c5b4900818b96ec6f1d80e2"
const newsApi = `https://newsapi.org/v2/everything?q=tesla&from=2022-01-07&sortBy=publishedAt&apiKey=${newsKey}`
let categoryURL = `https://newsapi.org/v2/top-headlines?category=general&apiKey=cfef1bff4c5b4900818b96ec6f1d80e2`
        let headings = document.querySelectorAll("#heading a");
        for (let heading of headings) {
            heading.addEventListener("click", (event) => {
                let category = event.target.id;
                console.log(category);
                categoryURL = `https://newsapi.org/v2/top-headlines?category=${category}&apiKey=cfef1bff4c5b4900818b96ec6f1d80e2`
                fetchCategory()
            })
        }
        function fetchCategory() {
            fetch(categoryURL).then(res=>{
            res.json().then(data=>{
            console.log(data,"cat");
            document.getElementById("mewsCard").innerHTML = data.articles.map(article => `
            <div class="col-md-6 my-2">
            <div class="card" >
            <img sre="${article.urlToImage}" class="card-img-top" style="height: 200px" alt="...">
            <div class="card-body">
            <div style="height:150px;overflow:hidden">
            <h5 class="card-title">${article.title}</h5>
            <p class="card-text">${article.author}</p>
            <p class="card-text">${article.content}</p>
            </div>
            <a href=${article.url}" class= "btn btn-primary mt-3" target="_blank">Further more</a>
            </div>
            </div>
            </div>
            `
                            ).join("")
                        })
                    })
                }