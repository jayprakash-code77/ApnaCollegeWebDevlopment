// using the axios instead of fetch
/*
const url = "https://catfact.ninja/fact"; // Define a valid API endpoint
async function getFacts() {
    try {
        let response = await axios.get(url);
        console.log(response); // Correctly accessing the API response
        console.log(response.data.fact);
    } catch (error) {
        console.log("ERROR:", error);
    }
}
getFacts();
*/







/*
// example use

let btn = document.querySelector("button");
let p = document.querySelector("#fact");

const url = "https://catfact.ninja/fact"; // Define a valid API endpoint
async function getFacts() {
    try {
        let response = await axios.get(url);
        console.log(response); // Correctly accessing the API response
        console.log(response.data.fact);
        return response.data.fact;
    } catch (error) {
        console.log("ERROR:", error);
        return "No fact found!!";
    }
}

btn.addEventListener("click", async () => { // here we have to use "async"
    let ans = await getFacts(); // here we have to use "await"
    console.log(ans);
    p.innerText = ans;
});

*/
















// Use the Random dog image API and make the project

let url = "https://dog.ceo/api/breeds/image/random";

async function getRandomDogImage() {
    try {
        const response = await axios.get(url);
        console.log(response);
        return response.data;
    } catch (error) {
        console.log("ERROR :", error);
    }
}

let btn = document.querySelector("#dogBTN");
let img = document.querySelector("#dogImage");
btn.addEventListener("click", async () => {
    let data = await getRandomDogImage();
    console.log(data.message);
    img.setAttribute("src", data.message);
});











