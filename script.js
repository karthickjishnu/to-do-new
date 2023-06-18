// /*alert("hi")
// let amount=1000
// console.log("your bill amount"+amount);


// let a=10

// let b=a++
// console.log(b)
// console.log(a)


// //

// let c=2

// c**=4

// console.log(c)//
// a="5"
// console.log(typeof(a))
// //

// let name=prompt("what is your age")
// console.log("hi"+name)//

// let h1=document.getElementById("head1")
// h1.innerHTML="welcome my website";*/


//  /*const  convert=()=>{
// const cVal=Number(document.getElementById("input").value)
// const FVal=(cVal*9/5)+32

// const answer=document.getElementById("result")

// answer.innerHTML= "= "+ FVal.toFixed(2)+  "degree"

// }
// let str1="be confident with your family,"
// let str2=str1.slice(-2)
// console.log(str2);


// let str3="Love your self,don't blame anyone,"
// console.log(str3.indexOf("e"))
// let str4=str3.replace("Love","hate")
//  console.log(str4);

//  let bill="rs.100"
//  console.log(bill.length)

//  let amount=bill.padStart(9,1)
//  console.log(amount)



//  //Ternary operator

//  let a=10
//  let b=20
//  let c=15

 
//  let value=a<b?c:a
// console.log(value)*/
// let math=Math.sqrt(33)
// console.log(math)//





// //


// let smart=[1,2,3,4]
// let start= smart.slice(-1,-3)
// console.log(start)//


// var array=[5,8,10,7,9,11]
// array.splice(3,3,17,19,111)
// console.log(array)//
 
// let arr= [2,3,0,25,22]

// console.log(arr.length)
// console.log(arr[2])//



// let user={

//     userid:function(){
//     userdept=["mech","civil"],
//     username="param",
//     password= 1234,
//     email= "param123@gmail.com",
//     sex= "male"
 


//     },
//     addtolist:function add(){
//         console.log("add to your cart number")
//     }

// }
// user.userid()
// user.addtolist()

// console.log(sex)



// // for(i=1;i<=5;i++){
// //     console.log(i)
// // }





    
 



// // while(true){
// //     let num=Number(prompt("number"))
// //     if(isNaN(num))
// //     break;
// // }

// const btn=document.querySelector("button")


// btn.addEventListener("click",display)

// function display(){

// const inputdiv =document.getElementById('input')
// const city=input.options[input.selectedIndex].value 
// let population=0, language="", literacyRate=0


// switch(city){
//     case "bangalore":
//         population=84434,
//         language="kannada",
//         literacyRate=85
//         break
//         case "chennai":
//             population=93456,
//             language="Tamil",
//             literacyRate=90
//             break
//             case "mumbai":
//                 population=10987,
//                 language="marathi",
//                 literacyRate=75
//                 break
//                 case "Delhi":
//                     population=12345,
//                     language="Hindi",
//                     literacyRate=65
//                     break


// }
// let text=`The Indian city of ${city} has a population of ${population}.Language spoken is ${language} and literacy rate is ${literacyRate}%`

// console.log(text)
// let resultdiv=document.getElementById('result')
// resultdiv.innerHTML=text



// } 

// function greetHeading(name){
//     let heading=document.querySelector("h1")

//     heading.innerHTML= " hello " +  name
   
// }
// function greet(callback){
//     callback("ram")
    
// }
// greet(greetHeading)
// console.log(greetHeading)


// let btn=document.getElementById("btn")
// let colortext=document.getElementById('color')
// let wrap=document.getElementById('container')

// const hex=[1,2,3,4,5,6,7,8,9,0,"A","B","C","D","E","F"]

// btn.addEventListener("click",changebg)
// function changebg(){
//     let hexColor="#"
//     for (i=1;i<=6;i++){
//        hexColor=hexColor+randHexValue()
//     }
//     wrap.style.backgroundColor=hexColor
// colortext.innerHTML=hexColor
// console.log(hexColor)
// }






// function randHexValue(){
// let randomIndex=Math.floor(Math.random()*16)
// return hex[randomIndex]
// }
// let oldbtn=document.getElementById("new")
// let change=document.getElementById("change")
// let click=document.getElementById('dept')
// let arr=["mechanical","civil","ECE","EEE","CSE"]

// function ChangeColor(){
    


// }
// ChangeColor()




// let data=[1,2,3,5,6,7];
   

 
//  const print=((item,index)=>{
//     let control = document.getElementById("value")
//     control.innerHTML=[[index]]+"="+[item]
    
// })
// data.forEach(print)
// console.log(data)


// let result=["civil","mech","cse","ece"];
// console.log(result.length)
// const display=((value,index)=>{
//     let opt=document.createElement("option")
//     opt.textContent=value
//     opt.value=value
//     document.getElementById("branch").appendChild(opt)
//     console.log([index]+"="+value)
    
// })
// result.forEach(display)
// let values=[-1,2,-3,-4,35,32,15,-2,22]
// let pos_count=0
//     let neg_count=0

// const show=(item)=>{
    


// for(i=0;i<=item.length;i++){

//     if (0<item[i]){
//      pos_count++;
//     }
//     else
//          neg_count++;
    
//     }
   
   
// }
// console.log(`positive number ${pos_count}`)
// console.log(` negative number ${neg_count}`)

  


// let priceUSD=[22,33,44]
// let priceINR=priceUSD.map(item=>item*83)
// console.log(priceINR)
  



// const convert=(item)=>{
// return item*83
// }
// let priceInr=priceUSD.map(convert)
// console.log(priceInr)

// map

// let array=[
//     {name:"john",age:12},
//     {name:"kohn",age:13},
//     {name:"mohn",age:12},
//     {name:"oohn",age:13}
// ]

// let value=array.map(item=>item.age)
// console.log(value)
// // filter
// let cost=[1,22,33,44,2,1,3]

//  let highval=cost.filter(item=>item>10)

// let ans=document.getElementById('highvalue')
// ans.innerHTML=" helo "+ highval 

// // closure
// function makeover(x){
//    return function(y){
//        return x+y
//     }
// }
// let add5 = makeover(5)
// console.log(add5(10))

// let plus=makeover(100)
// console.log(plus(23))



// function inner(title){
//     let innerVariable="oil"
//     function inside(){
//         let insideVariable="soap"
//         console.log("innerVariable",innerVariable)
//         console.log("insideVariable",insideVariable)
//         console.log("hello",title)
        
//     }
    
// return inside
// }
// let soapName=inner("Hamam")
// soapName()


// function biscuit(name){
//  function cookies(title){
      
      
//          console.log("biscuitName =",name)
//          console.log("cookiesName",title)
//     }
// return cookies
   
// }
// let call2=biscuit("oreo")
//   call2("parle g")
  


//  //stack and Heap storage

// let obj1={name:"Rahul",age:20}
// let obj2=obj1

// console.log("obj1",obj1.age)
// console.log("obj2",obj2.age)

// let arr=[1,22,33,44,22,2,3,4]
// let myset=new Set(arr)


// myset.add(7)

// myset.add({a:"women",b:"men"})
// console.log(myset.has(4))

// let arr2=Array.from(myset)
// console.log(arr2)

// let map=new Map()
// map.set("a",2)
// map.set("d",7)

// map.set("b",3)
// console.log(map)




// for(let i of map){
//     console.log(i)
// }

// for(let k of map){
//     console.log(k)
// }
// for (let k of map.keys()){
//     console.log(k)
// }
// for (let v of map.keys()){
//     console.log(v)
// }


// map.forEach((k,v)=> {
// console.log("key",k,"value",v)
// })

// let val=[["a",1],["b",2]]
// let val2=new Map(val)
// console.log(...val2)


// let one=[22,21,1]
// let two=[11,33,4]
// let final=one.concat(two)
// console.log(...final)


// let user={
//     name:"Raju",
//     age:21,
//     password:"k124",
//     login(){
//         console.log("hi",this.name)
//         console.log("password",this.password)
//          console.log("logged in")
//     },
//     logout(){
//         console.log("logout")
//     }

// }
//     user.login()

// class User{
//     static numberOfUser=0;
//     constructor(name,password,age){
// this.name=name;
// this.password=password;
// this.age=age;
// User.numberOfUser++;
//     }
// login(){
//     console.log("hi",this.name)
//     console.log(login)
// }
// logout(){
//     console.log("oi",this.password+this.age)
//     console.log(logout)
// }

// }
// let userOne=new User("kr",2233,22)
// let userTwo=new User('param',2422,32)
// let userThree=new User('marap',2422,21)
// console.log("number of user",User.numberOfUser)




// class PaidUser extends User{

//     constructor(name,age){
// super(name,age)
//     }
//     message(){
//         console.log("you have confident")
      
//     }
//     logout(){
// console.log("hi",this.name)
// return this;
//     }
//     login(){
//         console.log("control all")
//         return this;
//     }


// }
// let oldUser=new PaidUser("aaram",22)
// oldUser.login()
// oldUser.message()
// oldUser.logout().message()




//get and set
// class Temp{
//     constructor(temp){
// this._temp= temp
//     }
//     get temp(){
//        return `${this._temp} deg celcius`
//     }
//     set temp(temp){
// if(temp>100){
//     temp=200
//     this._temp=temp
// }
//     }
// }
// let temper=new Temp(30)
// temper.temp=120
// console.log(temper.temp)
// //
// let ampm=document.getElementById("ampm")

// function displayTime(){
//   let dateTime=new Date();
// let hr=dateTime.getHours();
// let min=dateTime.getMinutes();
// let sec=dateTime.getSeconds();
// if(hr>12){
//     hr=hr-12
//     ampm.innerHTML="PM"
// }

// document.getElementById('hours').innerHTML=padZero(hr)
// document.getElementById('mins').innerHTML=padZero(min)
// document.getElementById('second').innerHTML=padZero(sec)
// }
// function padZero(num){
//  return num<10?"0"+num:num

// }
// setInterval(displayTime,500)
// //timer

// let seconds=00;
// let tens=00;

//  let appendTens=document.getElementById("tens");
//  let appendSeconds=document.getElementById("seconds");
//  let buttonStart=document.getElementById("start")
//  let buttonStop=document.getElementById("stop")
//  let buttonReset=document.getElementById("reset")
// let interval;


// function startTimer(){
//   tens ++;
// if(tens < 9){
//     appendTens.innerHTML= "0"+tens;
// }
// if(tens > 9){
//     appendTens.innerHTML=tens;
// }
// if(tens > 60){
//     seconds++;
//     appendSeconds.innerHTML="0" +seconds;
//     tens=0;
//     appendTens.innerHTML="0"+0;
// }
// if(seconds > 9){
// appendSeconds.innerHTML=seconds;

// }
// }
// buttonStart.onclick = function () {
//     if (interval) {
//       clearInterval(interval);
//     }
//     interval = setInterval(startTimer);
//   };
  
//   buttonStop.onclick = function () {
//     clearInterval(interval);
//   };
  
//   buttonReset.onclick = function () {
//     clearInterval(interval);
//     tens = "00";
//     seconds = "00";
//     appendSeconds.innerHTML = seconds;
//     appendTens.innerHTML = tens;
//   };

//


//To-Do list

// let button=document.getElementById("add")
// let todoList=document.getElementById("todoList")
// let input=document.getElementById("input");


// let todos= [];


// window.onload=()=>{
//     todos=JSON.parse(localStorage.getItem('todos'))||[]
//     todos.array.forEach(todo =>addtodo(todo))
// }
// button.addEventListener("click",()=>{
//     todos.push(input.value)
//     localStorage.setItem("todos",JSON.stringify(todos))
//     console.log(todos)
//     addtodo(input.value)
//     input.value=""
// })
// function addtodo(todo){
// let para=document.createElement("p");
// para.innerText= todo;
// todoList.appendChild(para)

// para.addEventListener('click',()=>{
// para.style.textDecoration="line-through"
// remove(todo)
// })
// para.addEventListener("dblclick",()=>{
//    todoList.removeChild(para)
//    remove(todo)
// })
// }
// function remove(todo){
// let index=todos.indexOf(todo)
// if(index>-1){
//     todos.splice(index,1);
//     localStorage.setItem('todos',JSONstringify(todos))
// }
// }
// Form


const form=document.querySelector("#form")
const username=document.querySelector("#username");
const email=document.querySelector("#email");
const password=document.querySelector("#password");
const cpassword=document.querySelector("#cpassword");




form.addEventListener("submit",(e)=>{
    if(!validateInputs()){
e.preventDefault();
    }
})
function validateInputs(){
    const usernameVal=username.value.trim()
    const emailVal=email.value.trim( )
    const passwordVal=password.value.trim()
    const cpasswordVal=cpassword.value.trim()
    
    let success=true

    if(usernameVal===""){
        success=false;
        setError(username,"username is required")
    }
    else  {
        setSuccess(username)
    }
    if(emailVal===""){
        success=false
        setError(email,"email is required")
    }
    else if(!validateEmail(email)){
        success=false
    setError(email,"email is invalid")
    }
    else {
        setSuccess(email)
    }
    if (passwordVal===""){
        success=false
        setError(password,"password is required")

    }else if(passwordVal.length<6){
        success=false
        setError(password,"password must be 6 characters")

    }
    else{
        setSuccess(password)
    }
    if(passwordVal===""){
        success=false;
        setError(cpassword,"confirm password is required")
    }
    else if(cpasswordVal!==passwordVal){
        success=false;
setError(cpassword,"password does not match")
    }
    else{
        setSuccess(cpassword)
    }
    return success;
}

function setError(element,message){
    const inputGroup=element.parentElement;
    const errorElement=inputGroup.querySelector(".error")
    errorElement.innerText=message;
    inputGroup.classList.add("error")
    inputGroup.classList.remove("success")
}
function setSuccess(element){
    const inputGroup=element.parentElement;
    const errorElement=inputGroup.querySelector(".error")
    errorElement.innerText=" ";
    inputGroup.classList.add("success")
    inputGroup.classList.remove("error")
}
const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
};


