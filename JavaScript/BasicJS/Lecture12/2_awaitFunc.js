/*
function getNum() {
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            let num = Math.floor(Math.random() * 10) + 1;
            console.log(num);
            resolve();
        }, 1000);
    });
}

// NOTE : await keyword is used only inside the async functions
async function demo() {
    await getNum();
    await getNum();
    await getNum();
    await getNum();
    await getNum();
}
demo();
*/








/*
// Now using the await keyword in changeColor() function in lecture 11 in the Callback hell
    // change color function
    function changeColor(color, delay) {
        return new Promise((resolve, reject)=>{
            setTimeout(() => {
                console.log(`Color changed to ${color}!`);
                resolve(color);
            }, delay);
        });
    }

    // this is without using the await keyword>>>>>>>>>>>>>>>>>>>>>>>
    // changeColor("red", 1000)
    // .then((result) =>{
    //     console.log("Color changed to :", result);
    //     console.log(result);
    //     // throw("This is an created error");
    //     return changeColor("green", 3000);
    // })
    // .then((result) =>{
    //     console.log("Color changed to :", result);
    //     console.log(result);
    // })
    // .catch((error) => {
    //     console.log("There is an error: ", error);
    // })
    

    async function demo() {
        await changeColor("red", 1000);
        await changeColor("green", 1000);
        await changeColor("yellow", 1000);
        await changeColor("pink", 1000);
        await changeColor("blue", 1000);
    }
    demo();
    */













    // Handling the rejections >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    function changeColor(color, delay) {
        return new Promise((resolve, reject)=>{
            setTimeout(() => {
                let num = Math.floor(Math.random() * 5);
                // now this can reject any promise any time based on number generated 
                if(num > 3) {
                    reject("promise rejected!");
                }

                console.log(`Color changed to ${color}!`);
                resolve(color);
            }, delay);
        });
    }
    // the below code will stop if any one of the promise is rejected.
    /*
    async function demo() {
        await changeColor("red", 1000);
        await changeColor("green", 1000);
        await changeColor("yellow", 1000);
        await changeColor("pink", 1000);
        await changeColor("blue", 1000);
        console.log("This is not a code related to promise so it must execute even if any promise if rejected");
        console.log(123);
    }
    demo();
    */
/*
    async function demo() {
        try {
            await changeColor("red", 1000);
            await changeColor("green", 1000);
            await changeColor("yellow", 1000);
            await changeColor("blue", 1000);
            await changeColor("blue", 1000);
        } catch (error) {
            console.log("Error !!", error);
        }

        // this code will execute in all conditions 
        console.log("This is not a code related to promise so it must execute even if any promise if rejected");
        console.log(123);
    }
    demo();
    */






    