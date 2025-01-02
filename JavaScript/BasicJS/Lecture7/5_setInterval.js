console.log("My name is :-");
let id1 = setInterval(func, 2000) // 2000 = 2 seconds
console.log("Id :"+id1);

let conut = 0;
function func() {
    console.log("Jayprakash");
    conut++;
    if (conut == 3) {
        clearInterval(id1); // when this is called, the setInterval will stop it's exicution.
    }
}


