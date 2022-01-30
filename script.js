url= "https://api.weatherbit.io/v2.0/current?lat=35.7796&lon=-78.6382&key=API_KEY&include=minutely"

const data1 = (res) =>{
    fetch(
        `https://api.weatherbit.io/v2.0/current?city=${res.data[0].city_name}&key=API_KEY&include=minutely`
    ).then((res)=>{
        res.json().then((res)=>{
            console.log(res.data);
        });
    });
};

fetch(url).then((res)=> {
    data1(res);
});
