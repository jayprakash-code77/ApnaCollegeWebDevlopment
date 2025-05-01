// JSON comes in string 
let StringResponse = '{"id": 1,"name": "John Doe","email": "johndoe@example.com","username": "johndoe123"}';
console.log(StringResponse);

let jsonConvertedRes = JSON.parse(StringResponse); // this will convert the string to JSON formate.
console.log(jsonConvertedRes);
console.log(jsonConvertedRes.name);

let stringConvert = JSON.stringify(jsonConvertedRes); // this will convert the json to string formate.
console.log(stringConvert);








// AJAX : Asynchronous Javascript and XML(Now it's JSON instead of XML)
// 
