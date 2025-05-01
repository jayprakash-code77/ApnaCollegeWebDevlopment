let url = "https://catfact.ninja/fact";

/*
fetch(url) // this fetch method willr return "Promise"
        .then((res) => {
            let factObj = res.json(); // this will make the data readable and it will also return "Promise"
            factObj.then((result) => {
                console.log(result);
                console.log(result.fact);
                console.log(result.length);
            })
        })
        .catch((err) => {
            console.log("There is an error :", err);
        })

*/




/*
fetch(url) // this fetch method willr return "Promise"
        .then((res) => {
            // console.log(res);
            return res.json(); // this will make the data readable and it will also return "Promise"
        })
        .then((result) => {
            // console.log(result);
            console.log(result.fact);
            console.log(result.length);
        })
        .catch((err) => {
            console.log("There is an error :", err);
        })
*/








// using fetch with "async" and "await"
async function getFacts() {
    try {
        let res = await fetch(url);
        let data = await res.json();
        console.log(data.fact);
    } catch (error) {
        console.log("ERROR :", error);
    }
}
getFacts();


