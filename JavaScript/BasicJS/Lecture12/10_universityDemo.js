let url = "http://universities.hipolabs.com/search?name=";
let btn = document.querySelector("button");

btn.addEventListener("click", async () => {
    let inputCountry = document.querySelector("input").value;
    let dataArray = await getUniverByCountryName(inputCountry);
    display(dataArray);
})

// function to get colleges
async function getUniverByCountryName(country) {
    try {
        let response = await axios.get(url + country);
        // console.log(response.data);
        return response.data;
    } catch (error) {
        console.log("ERROR :", error);
        return [];
    }
}

async function display(dataArray) {
    let list = document.querySelector("#liMainBody");
    list.innerText = "";
    for (col of dataArray) {
        console.log(col.name);
        let newListElement = document.createElement("li");
        newListElement.innerText = col.name;
        list.appendChild(newListElement);
    }

}



