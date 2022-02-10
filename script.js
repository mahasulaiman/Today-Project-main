const newsKey = "cfef1bff4c5b4900818b96ec6f1d80e2"
const newsApi = `https://newsapi.org/v2/everything?q=tesla&from=2022-01-08&sortBy=publishedAt&apiKey=${newsKey}`
let categoryURL = `https://newsapi.org/v2/top-headlines?category=general&language=en&apiKey=cfef1bff4c5b4900818b96ec6f1d80e2`
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
    document.getElementById("newsCards").innerHTML = data.articles.map(article => `
    <div class="row g-0">
    <div class="col-md-3 text-center" style="width: 20rem;"> 
    <img src="${article.urlToImage}" class="card-img-top" style="height: 200px" alt="...">
    </div>
    <div class="col-md-3">
    <div class="card-body">
    <h5 class="card-title">${article.title}</h5>
    <p class="card-text">${article.author}${article.content}</p>
    </div>
    </div>
    <div class="col-md-3 text-center">
    <a href=${article.url}" class= "card-link">Further more</a>
    </div>
    </div>
    </div>
    `
                    ).join("")
                })
            })
        }
fetchCategory();
let btn = document.getElementById("search");
let city = "hufuf";
let weatherKey=`2068ef9849e648ddb04d89725dacf080`;
btn.addEventListener("click",(event)=>{
event.preventDefault()
city = document. getElementById("weather-input").value;
console. log (city)
weatherFun();
})

function weatherFun(){
fetch(`https://api.weatherbit.io/v2.0/current?key=${weatherKey}&city=${city}&include=minutely&units=s"`)
.then(res=>{
res.json().then (data=> {
console.log (data)
let temp = data.data[0].app_temp;
let cityName = data.data[0].city_name;
let status = data.data[0].weather.description;
let code = data.data[0].weather.icon;
document.querySelector(".weather").innerHTML =`${temp} <br> ${status} <br> ${cityName} <br> <img src="https://www.weatherbit.io/static/img/icons/${code}.png"/>`;
})
})
}
weatherFun();
