const url ="https://official-joke-api.appspot.com/random_joke";

async function getJocks() {
    try {
        const header = {headers: {Accept:"application/json"}}
        let res = await axios.get(url, header);
        console.log(res.data);
    } catch (error) {
        console.log(error);
    }
}
getJocks();