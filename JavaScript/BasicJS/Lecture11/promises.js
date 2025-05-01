// this is done without callbacks
/*
function saveDB(data) {
    let internetSpeed = Math.floor(Math.random() * 10)+1;
    if(internetSpeed > 4) {
        console.log("Data saved");
    }else{
        console.log("Data not saved");
    }
}
saveDB();
*/




// this is done with callbacks
// it has only one level of callback 
/*
function saveDB(data, success, failure) {
    let internetSpeed = Math.floor(Math.random() * 10) + 1;
    if (internetSpeed > 4) {
        success();
    } else {
        failure();
    }
}

saveDB("Jayprakash", () => {
    console.log("success: Data Saved!!!");
},
    () => {
        console.log("failure: Data not Saved!!!");
    });
    */




    /*
// this is done with callbacks
// it has only multiple level of callback, and it is creating the "callback hell"
// it implementing that if one data is saved than only the other data should be stored!!!
    function saveDB(data, success, failure) {
        let internetSpeed = Math.floor(Math.random() * 10) + 1;
        if (internetSpeed > 4) {
            success();
        } else {
            failure();
        }
    }
    
    saveDB("Jayprakash", () => {
        console.log("success: Data Saved!!!");
        saveDB("jp", ()=>{
            console.log("success : Data2 stored!!!");
        }, 
    () => {
        console.log("failure : data2 not saved!!!");
    })
    },
        () => {
            console.log("failure: Data not Saved!!!");
        });

        */





/*
// Promises : It is an javascript OBJECT
// the promises object represents the completion of failure of an asynchronous operations and its resulting value.
// promise object take callbacks having two parameters "Promise((resolve, reject)=>{});" 
function saveDB(data) {
    return new Promise((resolve, reject)=>{
        let internetSpeed = Math.floor(Math.random() * 10) + 1;
        if (internetSpeed > 4) {
            resolve("data was saved ");
        } else {
            reject("data was not saved!!!");// if this reject is called than it generates an error!!! that will be solved using Promise object methods.
        }
    });
}

let promiseReturn = saveDB("Jay");
console.log(promiseReturn);
*/











function saveDB(data) {
    return new Promise((resolve, reject)=>{
        let internetSpeed = Math.floor(Math.random() * 10) + 1;
        if (internetSpeed > 4) {
            resolve("data was saved ");
        } else {
            reject("data was not saved!!!");// if this reject is called than it generates an error!!! that will be solved using Promise object methods.
        }
    });
}
/*
let request = saveDB("apna college!!!")
    .then(() => { // this will execute only if the the promise is resolved
        console.log("Promise was resolved!!");
    })
    .catch(() => {
        console.log("Promise was rejected!!!");
    })
*/


/*
saveDB("apn acollege")
    .then(() =>{
        console.log("Data saved. Promise resolved!");
    })
    .catch(()=>{
        console.log("Data not saved. Promise rejected!!!");
    })
*/



/*
// This is called Promise Chaining
// using the multiple then and single catch
// NOTE: this will also create an error 
saveDB("jayprakash")
    .then(() =>{
        console.log("Data saved. Promise resolved!!!");
        saveDB("raju")
            .then(() => {
                console.log("Data2 saved. Ptomise2 resolved!!!");
            });
    })
    .catch(() =>{
        console.log("Data not saved. Promise rejected!!!");
    })
*/



/*
// 
saveDB("jayprakash")
    .then(() =>{
        console.log("Data1 saved. Promise1 resolved!!!");
        return saveDB("raju");
    })
    .then(() => {
        console.log("Data2 saved. Ptomise2 resolved!!!");
        return saveDB("jay");
    })
    .then(() => {
        console.log("Data3 saved. Ptomise3 resolved!!!");
    })
    .catch(() =>{
        console.log("Data not saved. Promise rejected!!!");
    })
        */



    

/*
// promises are rejected and resolved with some data. We can access that result by passing the argument to the then and catch callbacks.
saveDB("jayprakash")
    .then((result) => {
        console.log("Data1 saved. Promise1 resolved!!!");
        console.log(result);
        return saveDB("raju");
    })
    .then((result) => {
        console.log("Data2 saved. Ptomise2 resolved!!!");
        console.log(result);
        return saveDB("jay");
    })
    .then((result) => {
        console.log("Data3 saved. Ptomise3 resolved!!!");
        console.log(result);
    })
    .catch((error) => {
        console.log("Data not saved. Promise rejected!!!");
        console.log(error);
    })

    */









    /*
    // change color function
    function changeColor(color, delay) {
        return new Promise((resolve, reject)=>{
            setTimeout(() => {
                resolve(color);
            }, delay);
        });
    }


    changeColor("red", 1000)
    .then((result) =>{
        console.log("Color changed to :", result);
        console.log(result);
        // throw("This is an created error");
        return changeColor("green", 3000);
    })
    .then((result) =>{
        console.log("Color changed to :", result);
        console.log(result);
    })
    .catch((error) => {
        console.log("There is an error: ", error);
    })

    */









         






















