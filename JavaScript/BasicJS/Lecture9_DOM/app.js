// GET Element by ID:-
/*
let ImgObj = document.getElementById("mainImg"); // this will return the object of Image.
console.dir(ImgObj);
ImgObj.src = "assets/creation_1.png"; // this will change the actual main image with anthoer DB Cooper's image.
ImgObj = document.getElementById("un-known"); // this will return null, coz there is no tag with this ID.
*/


/*
// GET Element by className:-
let smallImages = document.getElementsByClassName("oldImg");// this will return the collection of object.
console.log(smallImages); 
// this will print all objects inside collection
for(let i=0; i<smallImages.length; i++) {
    console.log(smallImages[i]);
}
*/





// >>>>>>>>>>>>>>>
/*
// GET Element by Tag Name :- return the collection and if the tag does not exits it will return empty collection.
let tagRes = document.getElementsByTagName("p");
console.log(tagRes);
*/







// QUERY SELECTORS
/*
let ans = document.querySelector("p");
console.dir(ans);
console.log(ans)
console.dir(document.querySelector("div a").innerText);
console.log(document.querySelector("div a"));
*/



// QUERY SELECTORS ALL :- this will return the list of objects of tags.
/*
let ans = document.querySelectorAll("div a");
console.log(ans)
*/







// Setting content in the objects
let para = document.querySelectorAll("p")[0];
console.log(para);
console.log(para.innerHTML);
console.log(para.innerText);
console.log(para.textContent);

// changing the value by manupulation
/*
para.innerHTML = "<h1>This is changed from JS file.</h1>";
// para.innerText = "<h1>This is changed from JS file.</h1>";
// para.textContent = "<h1>This is changed from JS file.</h1>"

*/
/*
para.innerHTML = `<u>${para.innerText}</u>`; // this is really important >>>>>>>>>>>>>>>>>>>>>>>>>>>>.
*/







// this will give idea of "getAttribute" and "setAttribute".
/*
let img = document.querySelector("#mainImg");
console.log(img.getAttribute("src")); // this will give the "src value" of the mainImg. 

let downImg = document.querySelectorAll(".oldImg")[1];
console.log(downImg);

let downImg_source = downImg.getAttribute("src");

img.setAttribute("src",`${downImg_source}`); // this will change the main image 
*/


// excessing all the inline styles of element
/*
let img = document.querySelector("#mainImg");
console.log(img.style);
*/









// ClassList >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

/*
let head = document.querySelector("h1");
console.log(head.classList); // This will give all the class list 
head.classList.add("xyz"); // this method will add the class to the classList
head.classList.add("xyz3");
console.log(head.classList);


head.classList.remove("xyz3"); // used to remove the class 
console.log(head.classList); // this will not have "xyz3" class 


head.classList.add("jkl");
console.log(head.classList);
head.classList.toggle("jkl"); // this will not remove the class it will just set the class to false. which means the class will not be applied.
console.log(head.classList);
head.classList.toggle("jkl"); // this will not remove the class it will just set the class to true. which means the class will be applied.
console.log(head.classList);


let check = head.classList.contains("xyz3");
console.log("Class is present :"+check);

*/







// Navigation
/*
let head4 = document.querySelector("h4");
let boxDiv = document.querySelector(".box");
let boxUL = document.querySelector(".box ul");
console.log(head4);
console.log(head4.parentElement); // this method will give the parent element 
console.log(boxDiv.children); // this will give the all childrens of the the selected element.
console.log(boxUL);
console.log(boxUL.previousElementSibling);
console.log(head4.nextElementSibling);
*/






/*
// Adding new Elements to the document
let newB = document.createElement("button");
console.log(newB);
newB.innerText = "Click Me!";
let box = document.querySelector(".box");
box.appendChild(newB); // this will add the button to the actual document. it will add the button in the last of the the Publication Info div.

// append method >>> this will add more info to the same element
newB.append(" I will work for U!"); // this will add test inside the button element only


// prepend method >>> thid add everything in the starting.
let preh4 = document.createElement("h4");
preh4.innerText = "I am Prepend";
box.prepend(preh4);



// insertAdjacentElement >>> this also add emelent to the document
let newHead = document.createElement("h4");
newHead.innerText = "I am insertAdjacentElement";
box.insertAdjacentElement("beforeend", newHead);
*/






/*
// removing the element from the document
let box = document.querySelector(".box");
let boxHead = document.querySelector(".box h4");
let boxUL = document.querySelector(".box ul");
box.removeChild(boxHead);
boxUL.remove();
*/



















