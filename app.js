/* console.log("Hello World!");
let a = 5;
let b = 10;
console.log("sum is:",a + b);

let pencilprice = 10;
let errasorprice = 5;
// let output = "The total price is:"+(pencilprice+errasorprice)+"Rupees.";
let output =`The total price is: ${pencilprice}Rupees.`
console.log(output);
let color = "red";
if (color==="red") {
    console.log("Stop");
}
if (color==="yellow") {
    console.log("Slow down");
}
if (color==="green") {
    console.log("go");
}
let size="XL";
if(size==="XL") {
    console.log("price is Rs.250");
}
else if(size==="L") {
    console.log("price is Rs.200");
}
else if(size==="M") {
    console.log("price is Rs. 100");
}
else {
    console.log("price is Rs. 50")
}
let str = "apple";
if(str[0]==="a" && str.length>3){
    console.log("Good String");
} else {
    console.log("Not a good string");
}
alert("something is wrong");
console.log("this is simple log");
console.error("this is an error log");
let firstName = prompt("enter first name");
let lastName = prompt("enter last name");
console.log("welcome",firstName, lastName, "!");
let firstname = prompt("Please enter your first no:");
let lastname = prompt("please enter your last name:");
let msg ="Welcome"+firstname+lastName+"!";
alert(msg);
let game = [['X',null,'O'],[null,'X',null],['O',null,'X']];
console.log(game);
const favoriteMovie = "Ramaiyya Vastavaiyya";
let guess = prompt("Guess my favourite movie");
while((guess != favoriteMovie) && (guess != "quit")){
    prompt("Ooops wrong guess! Please try again....");

}
if(guess == favoriteMovie){
    alert("congrats!!");
} else {
    alert("you quit!");
}
let todo = [];
let req = prompt("Please enter your request");
while(true) {
    if(req == "quit"){
        console.log("quitting app")
        break;
    }
    if(req == "list"){
        console.log("--------------");
        for(let i=0;i<todo.length;i++) {
            console.log(i,todo[i]);
        }
        console.log("------------");
    }else if(req=="add"){
      let task =  prompt("please enter the task you want to add");
      todo.push(task);
      console.log("task added");
    }else if(req=="delete"){
        let idx =  prompt("please enter the task index");
        todo.splice(idx,1);
        console.log("task deleted");
    }else{
        console.log("wrong request");
    }
     req = prompt("Please enter your request");
}
//function
function hello() {
    console.log("Hello Pallavi!");
}
hello();
hello();
hello();
function printPoem() {
    console.log("Twinkle Twinkle, little star");
    console.log("how I wonder what you are")
}
printPoem();
function rollDice() {
    let rand = Math.floor(Math.random()*6)+1;
    console.log(rand);
}
rollDice();
function printInfo(name,age) {
    console.log(`${name}'s age is ${age}`);
}
printInfo("Pallavi",22);
printInfo(14);
function printTable(n){
    for(let i=n;i<=n*10;i+=n){
        console.log(i);
    }
}
printTable(9);
function sum(a,b){
    return a+b;
}
console.log(sum(2,5));
let student = {
    age:23,
    name:"Pallavi",
    math:93,
    eng:95,
    phy:97,
    getAvg() {
        let avg = (this.eng + this.phy + this.math)/3;
        console.log(`${this.name} got avg marks = ${avg}`);
    }

}
    //Try-Catch
try {
    console.log(a);

} catch(e) {
    console.log("Variable is not defined:");
    console.log(e);
}
//Arrow Function
const sum = (a,b)=> {
    console.log(a+b);
}
let cube = n => {
    return n*n*n;
}
const hello=() =>{
    console.log("Hello Pallavi");
}
//Implicit Return in Arrow Function
const mul = (a,b) => (
    a*b
);
const mul = (a,b)=>a*b
//setTimeout Function
console.log("Hi there ..!");
setTimeout(() =>{
    console.log("Apna College");
},4000);
console.log("Welcome to");
//setInterval
let id = setInterval(() => {
    console.log("Hi Pallavi..!")
},2000);
console.log(id);
let id = setInterval(()=>{
    console.log("Pallavi");
},2000);
setTimeout(()=> {
    clearInterval(id);
},10000);
//ArrayMethods
//forEach
let arr = [1,2,3,4,5];
let print = function (el){
    console.log(el);
};
arr.forEach(print);
//OR
let arr = [1,2,3,4,5];
arr.forEach(function(el){
    console.log(el);
});
arr.forEach((el)=> {
    console.log(el);
});
let arr = [{
    Name:"Pallavi",
    Marks:99,

},
{
    Name:"Ashwini",
    Marks:90,
},
{
    Name:"Sanket",
    Marks:100,
}];
arr.forEach((student)=>{
    console.log(student);
    console.log(student.Marks);
});
//Map
let num = [1,2,3,4];
let double = num.map((el) => {
    return el*2;
});
//Filter
let num = [1,2,3,4,5,6,7,8,9,10,11,12];
let ans = num.filter((el)=>{
    return el%2==0; //even==>true  odd==>false
}
);
//Every
num = [2,4,6,1];
let ans = num.every((el) => (el%2==0))
//Some
num = [1,2,3,4,5,6];
let ans =num.some((el)=>
{
  el%2==0;
});
//Reduce
let num = [1,2,3,4];
let final = num.reduce((res,el)=>
{
    console.log(res);
    return res+el;
});
console.log(final);
//Default Parameters
function sum (a,b=2)
{
    return a+b;
}
//Spread
let arr = [1,3,4,6,2,7,9,2,45,61,23,78,6,4,3,21];
let ans = Math.max(...arr);
//Spread(array literals)
let arr = [1,2,3,4,5];
let newarr = [...arr];
let char = [..."HelloPallavi"];
// Spread(Object Literals)
let data= {
    email:"Pallavi@gmail.com",
    pass:"abcd,"
}
let datacopy = {...data};
//Rest
function sum (...args){
    return args.reduce((sum,el)=>sum+el);
}
//Destructuring
let names = ["tony","bruce","peter","steve","Pallavi","Sanket","kaju"];
//let winner = names[0];
//let runnerup = names[1];
//let secondrunnerup = names[2];
let [winner,runnerup,secondrunnerup,...others]=names;
//Destructuring for objects
const Student = {
    name:"Sanket",
    age:21,
    class:"B.tech",
    subject:["AI","ML","c","Py"],
    username:"sanavi@123",
    pass:"ps",
}
//let username = Student.username;
//let pass = Student.pass;
let { username, pass } = Student;
let { username:user,pass:secret,city="Fattepur"}=Student;
//DOM =>(Document Object Model)
//Dom events
let btn = document.querySelector("button");
console.dir(btn);
btn.onclick = function ()
{
    console.log("button was clicked");
};
let btn = document.querySelector("button");
console.log(btn);
function sayHello() {
    alert("Hello Pallavi!");
};
btn.onclick = sayHello;
let btns = document.querySelectorAll("button");
for (btn of btns) {
    btn.onclick = sayHello;
    btn.onmouseenter = function () {
        console.log("u entered a button");
    }
}
function sayHello() {
    alert("yahoooo pallavi");
};
//Event Listener
let btns = document.querySelectorAll("button");
for(btn of btns){
//btn.addEventListener("click",sayHello);
//btn.addEventListener("click",sayName);
btn.addEventListener("dbclick",function() {
    console.log("u double clicked");
});
}
function sayHello() {
    console.log("hii!");
};
function sayName() {
    console.log("pallavi");
};
//Activity=>Generate random color
let btn = document.querySelector("button");
btn.addEventListener("click",function () {
    let h3 = document.querySelector("h3");
    let randomColor = getRandomColor();
    h3.innerText = randomColor;
    let div = document.querySelector("div");
    div.style.backgroundColor =randomColor;
    console.log("color updated");
});
function getRandomColor () {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

let color = `rgb(${red},${green},${blue})`;
return color ;
}
// this in eventListener
let btn = document.querySelector("button");
let h1 = document.querySelector("h1");
let h3 = document.querySelector("h3");
let p = document.querySelector("p");
//btn.addEventListener("click",function() {
  //  console.dir(this.innerText);
    //this.style.backgroundColor = "blue";
//});
//h1.addEventListener("click",function() {
  //  console.dir(this.innerText);
    //this.style.backgroundColor = "blue";
//});
//h3.addEventListener("click",function() {
  //  console.dir(this.innerText);
    //this.style.backgroundColor = "blue";
//});
//p.addEventListener("click",function() {
  //  console.dir(this.innerText);
    //this.style.backgroundColor = "blue";
//});
//or with redundancy
function changeColor () {
    console.dir (this.innerText);
    this.style.backgroundColor = "blue";

}
btn.addEventListener("click",changeColor);
h1.addEventListener("click",changeColor);
h3.addEventListener("click",changeColor);
p.addEventListener("click",changeColor); 

let btn = document.querySelector("button");
btn.addEventListener("click",function(event){
    console.log(event);
    console.log("button clicked");
});
//Keyboard Events
let inp = document.querySelector("input");
inp.addEventListener("keydown",function() {
    console.log("Key was pressed");
});
let inp = document.querySelector("input");
inp.addEventListener("keyup",function() {
    console.log("Key was pressed");
});
//Activity
let inp = document.querySelector("input");
inp.addEventListener("keyup",function(event) {
    console.log("code=",event.code);
    if(event.code=="ArrowUp"){
        console.log("Character moves forward");
    } else if(event.code=="ArrowDown"){
         console.log("Character moves backward");
    } else if(event.code=="ArrowLeft"){
         console.log("Character moves left");
    } else if(event.code=="ArrowRight"){
      console.log("Character moves right");
    }else if (event.code=="KeyD") {
        console.log("Character moves Down")
    }else if (event.code=="KeyR") {
        console.log("Character moves Right")
    }
});
//Form Events
let form = document.querySelector("form");
form.addEventListener("submit",function(e) {
    e.preventDefault(); //to stop url 'action" we used in html
    alert("Form Submitted");
});
//change event
//input event
//EVENT BUBBLING
let div = document.querySelector("div");
let ul = document.querySelector("ul");
let lis = document.querySelector("li");
div.addEventListener("click",function(){
    
    console.log("Div was clicked");
});
ul.addEventListener("click",function(e){
    e.stopPropagation();
    console.log("ul was clicked");
});
for(li of lis){
li.addEventListener("click",function(e){
    e.stopPropagation();
    console.log("li was clicked");
});
}*/
/*let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");
btn.addEventListener("click",function() {
    let item = document.createElement("li");
    item.innerText = inp.value;
    let delBtn = document.createElement("button");
    delBtn.innerText = "delete";
    delBtn.classList.add("delete");
    item.appendChild(delBtn);
    ul.appendChild(item);
    inp.value ="";
});*/
/*let delBtns = document.querySelectorAll(".delete");
for(delBtn  of delBtns) {
    delBtn.addEventListener("click",function () {
        let par = this.parentElement;
        console.log(par);
        par.remove();
    });

}
//If add an element on our web page then the event listener can,t
//work because it only works on existing element
//hence here we use event delegation
ul.addEventListener("click",function (event) {
    if(event.target.nodeName == "BUTTON") {
        let listItem = event.target.parentElement;
        listItem.remove();
        console.log("Item deleted!");
    }
});
//Call Stack
function hello() {
    console.log("Hello Pallavi!");
}
function demo () {
    hello();
}
demo();
function one() {
    return 1;
}
function two() {
    return one() + one() ;
}
function three() {
    let ans = two() + one();
    console.log(ans);
}
three();*/
//Breakpoints
/*h1 = document.querySelector("h1");
setTimeout(() => {
    h1.style.color = "pink";

},1000);
setTimeout(() => {
    h1.style.color = "orange";

},2000);
setTimeout(() => {
    h1.style.color = "red";

},2000);
setTimeout(() => {
    h1.style.color = "green";

},4000);*/
//OR

/*h1 = document.querySelector("h1");
function changeColor(color,delay,nextColorChange) {
    setTimeout(() =>{
        h1.style.color = color;
        if(nextColorChange) nextColorChange();
    },delay);
    
}
changeColor("red",1000,() =>{
    changeColor("orange",1000, ()=> {
    changeColor("yellow",1000,() =>{
    changeColor("pink",1000);  //callbacks nesting => callback hell
    });  
    });
});*/
//changeColor("green",2000);
//changeColor("yellow",3000);
//changeColor("maroon",4000);


//Callback hell
/*function savetoDb(data) {
    let ineternetSpeed = Math.floor(Math.random()*10)+1;
    if(ineternetSpeed > 4) {
        console.log("your data was saved",data);
    }else {
        console.log("weak connection. data not saved");
    }
}
savetoDb("Pallavi!");*/
/*function savetoDb(data,success,failure){
    let ineternetSpeed = Math.floor(Math.random()*10+1);
    if(ineternetSpeed >4){
        success();
    }else {
        failure();
    }
}
savetoDb(
    "Pallavi",()=>{
        console.log(" Success: Your data was saved");
        savetoDb(
            "Rathod",()=>{
                console.log("Success2: data2 saved");
                savetoDb(
                    "Hi",()=>{
                        console.log("Success3:data3 was saved");
                    },()=>{
                        console.log("Failure3:weak connection. data3 not saved");
                    }
                )
            },()=>{
                console.log("Failure2: weak connection. data2 not saved");
            }
        );
    },
    ()=> {
        console.log(" Failure: weak connection. data not saved");
    }
);*/
//resolve==>success    reject===>failure
//promises object represents the eventual completion or failure of an asynchronous operation and its resulting value
/*function savetoDb(data){
    return new Promise((resolve,reject)=>{
        let ineternetSpeed = Math.floor(Math.random()*10)+1;
        if(ineternetSpeed > 4) {
            resolve("success: data was saved");
        }else {
            reject("failure: weak connection");
        }
    });
}*/
// catch and then method in promises
/*let request = savetoDb("Hi there"); //req is promise object
request.then(()=>{
    console.log("Promise was resolved:");
    console.log(request);
})
.catch(()=>{
    console.log("promise was rejected");
    console.log(request);
});*/
/*savetoDb("Hi there")
.then(()=>{
    console.log("Promise was resolved:");
    
})
.catch(()=>{
    console.log("promise was rejected");
    
});*/
//Promise Chaining 
//this code is same as call hell
/*savetoDb("Hi there")
.then(()=>{
    console.log("data1 saved");
    return savetoDb("Pallavi here");
})
.then(()=>{
    console.log("data2 saved");
    return savetoDb("from bcs");
})
.then(()=>{
    console.log("data3 was saved");
})
.catch(()=>{
    console.log("promise was rejected");
});*/
//Results and Errors in Promises
/*savetoDb("Hi there")
.then((result)=>{
   
    console.log("data1 saved");
    console.log(result);
    return savetoDb("Pallavi here");
})
.then((result)=>{
   
    console.log("data2 saved");
    console.log(result);
    return savetoDb("from bcs");
})
.then((result)=>{
    
    console.log("data3 was saved");
    console.log(result);
})
.catch((error)=>{
   
    console.log("promise was rejected");
     console.log(error);
});*/
//async function
/*async function greet(params) {
    throw "random error";
    return "hello";
}
greet()
.then((res)=>{
    console.log("promise was resolved");
    console.log("result was:",res);
})
.catch((err)=>{
    console.log("promise was rejected with error",err);
});
//arrow async function
let demo = async () => {
    return 2;
}*/
//await function => pauses the execution of its surrounding async function until the promises is settled (resolved or rejected)
/*function getNum() {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            let num = Math.floor(Math.random()*10)+1;
            console.log(num);
            resolve();
        },1000);
    });
}
async function demo1() {
    await getNum();
     await getNum();
    getNum();
}*/
/*h1 = document.querySelector("h1");
function changeColor(color,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            h1.style.color = color;
            console.log(`change to ${color}!`);
            resolve("color changed");
        },delay);
    });
}
async function demo3() {
    await changeColor("red",1000);
    await changeColor("blue",1000);
    await changeColor("green",1000);
    changeColor("magenta",1000);
    
}*/
//Handling Rejection in Await
/*h1 = document.querySelector("h1");
function changeColor(color,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let num = Math.floor(Math.random()*5)+1;
            if(num > 3) {
                reject("promise rejected");
            }
            h1.style.color = color;
            console.log(`color changed to ${color}`);
            resolve("color changed!");
        },delay);
    });
}
async function demo3() {
    try {
        await changeColor("red",1000);
        await changeColor("pink",1000);
        await changeColor("yellow",1000);
        await changeColor("hot pink",1000);
    }catch (error){
        console.log("Error Caught");
        console.log(error);
    }
    let a = 5;
    console.log(a);
    console.log("new no:",a+7);
}*/
//API = Application Programming Interface
// if we want to interact two software the we use API's
//The API's which works with the HTTP protocol is called Web API
//API's provides us JSON data (JavaScript Object Notation)
//in JSON the data is present in key and value pair but the keys are string 
//whare in the javascript object the keys are not string
//In JSON undefined is not valid value
//Accesing data from JSON
/*let jsonRes = '{"fact":"The oldest cat on record was Cr\u00e8me Puff from Austin, Texas, who lived from 1967 to August 6, 2005, three days after her 38th birthday. A cat typically can live up to 20 years, which is equivalent to about 96 human years.","length":220}';
let validRes = JSON.parse(jsonRes); //Json object to Javascript object
console.log(validRes.fact);
let student = {
    name:"shradha",
    marks:"95",
};
JSON.stringify(student);//opposite of parse*/
//Api testing tool
//Hoppscoth & Postman
//Ajax => Asynchronous Javascript and XML
//First API request
/*let url = "https://catfact.ninja/fact";
fetch(url)  // fetch method return promises as response
.then((response)=>{
    console.log(response);
    response.json().then((data)=>{console.log(data)});  // using this function the data will be in readable format
})
.catch((error)=>{
    console.log("Error-",error);
});*/
//fetch using await and async
/*let url = "https://catfact.ninja/fact";
async function getFacts() {
    let res = await fetch(url);
    let data = await res.json();
    console.log(data);
}*/
//Axios
/*let btn = document.querySelector("button");
btn.addEventListener("click",async ()=>{
    let fact = await getFacts();// to access the fact on html page
    console.log(fact);
    let p = document.querySelector("#result");
    p.innerText = fact;
});
let url = "https://catfact.ninja/fact";
let url2 = "https://dog.ceo/api/breeds/image/random";
async function getFacts() {
    try {
        let res = await axios.get(url);
        return res.data.fact;

    }catch(e){
        console.log("error-",e);
        return "No fact found";
    }
}*/
/*let url2 = "https://dog.ceo/api/breeds/image/random";
btn.addEventListener("click",async ()=>{
    let link = await getImage();
   // console.log(link);
   let img = document.querySelector("#result2");
   img.getAttribute("src",link);
});
async function getImage() {
    try {
        let res = await axios.get(url2);
        return res.data.message;

    }catch(e){
        console.log("error-",e);
        return "/";
    }
}*/
//Sending Headers using axios
/*const url = "https://icanhazdadjoke.com/";
async function getJokes() {
    try{
        const config = {headers :{Accept:"application/json"}};
        let res = await axios.get(url,config);
        console.log(res.data);
        }catch(err){
            console.log(e);
        }
}*/
//Activity using Query String
let url = "https://universities.hipolabs.com/search?name=";
let btn = document.querySelector("button");
btn.addEventListener("click",async()=> {
    let country = document.querySelector("input").value;
    console.log(country);
    let colleges = await getColleges(country);
    console.log(colleges);
    Show(colleges);
});
function Show(colleges){
    let list = document.querySelector("#list");
    list.innerText = "";
    for(col of colleges){
        console.log(col.name);
        let li = document.createElement("li");
        li.innerText = col.name;
        list.appendChild(li);
    }
}
async function getColleges(country) {
    try{
        let res = await axios.get(url + country);
        return res.data;
    }catch (e) {
        console.log("error:",e);
        return [];
    }
}




