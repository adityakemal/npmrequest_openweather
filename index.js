//cara install request yaitu npm install request --save
const request = require('request')
var kota = 'london'
// var key = '6f969091d7cb34135df463e4c0cd1a40'
var key = 'eba413aa101112cf7f8908f31d551189' //name : bismillah in account open wether
//

var url = `http://api.openweathermap.org/data/2.5/weather?q=${kota},uk&APPID=${key}`
request(url,(err,response,body)=>{
  var body = JSON.parse(body)
  // console.log(body);

  if (err){
    console.log(err);
  }else if (body.cod ==="404"){
    console.log(body.message, 'bro!!');
  }else {
    console.log(`in ${body.name} the weather is ${body.weather[0].description}`);
  }

  // console.log(response)
  // console.log(body.weather[0]);
})
