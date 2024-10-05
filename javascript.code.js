var countrieas=["a","b","c","d"];
console.log(countrieas);
var states=new Array("a","b","c");     //this is the second way of writing an array
console.log(states);
console.log(states.length);
console.log(states[0]);
console.log(states.indexOf("a"));
states[0] = "z";
console.log(states);
console.log(states.pop());
console.log(states);
states.unshift("a");
states.unshift("c"); 
states.unshift("d");
console.log(states);
  var result=[2,4,6,8].every((e) => (e%2===0));
  console.log(result);
  var result=[2,4,6,8].every((e) => {
    return e%2===0});
  console.log(result);
var iseven=(element)=>{return element%2===0;};
var result=[2,4,6,8].every(iseven);
console.log(result);
let value = 1;
 var doSomething=(() => {
  value = 2;
});

console.log(value);

var testarray=[1,2,3,4,5,6,7,8,9];
var result=testarray.every((e) => { return e>0;});
console.log(result);
var testarray=[1,2,3,4,5,6,7,8];
testarray.fill(2);
console.log(testarray);
testarray.fill("3",1,5);
console.log(testarray);
testarray.fill("3",1);
console.log(testarray);
 var mynum=testarray.filter((e) =>e===3);
console.log(mynum);
//there are other 2 fns called slice and splice as they have totally different functioning in the arrays 
/*slice function ussually cuts the given array and give the output i.e.,as user.slice(user.length-1); and it also takes 2 parameters for it as starting index 
was inclusively taken and the end index is considered as exclusively and the between index elements are printed as output*/
/*splice function also cuts the given array and give the output i.e.,as user.splice(1,3,"hi"); it cuts the given array from inclusively taken 1 st 
index and exclusively considered 3 rd index and inserts the given elements */


var object={
  a:1,b:2,c:3,d:4,
};
for (const key in object){
  console.log(`${key} : ${object[key]}`);
}

var array=[1,2,3,4,5];
for (const key in array){
  console.log(`a[${key}] : ${array[key]}`);
}
 var object={
     firstname:"harshith",
     age:18,
     loggedinbyfacebook:false,
     lastname:"eedara",
     courselist:[],
    buycourse:function(coursename){this.courselist.push(coursename);},//here surprisingly the callback function is not used as it doesnt work while using the push key word
 };
 console.table(object);
 console.log(object.firstname);
 console.log(object.age);
 object.buycourse("javascript");
 console.log(object.courselist);
 console.log(object.info);
var object={
         firstname:"harshith",
         age:18,
         loggedinbyfacebook:false,
         lastname:"eedara",
         courselist:[],
        buycourse:function(coursename){console.log(this);},//here surprisingly the callback function is not used as it doesnt work while using the push key word
     };
     object.buycourse();
     console.log(this);
 var counter=document.querySelector(".counter");
 var followers=document.querySelector(".followers");
 counter.innerText=1001;
 let count=1;
 setInterval(()=>{
   if(count<1000)
   {
      count++;
counter.innerText=count;
   }
 },1);
 setTimeout(()=>{
   followers.innerText="followers in instagram";
 },10000);



v-36 


 const red=document.querySelector(".red");
    const cyan=document.querySelector(".cyan");
        const violet=document.querySelector(".violet");
        const orange=document.querySelector(".orange");
        const pink=document.querySelector(".pink");
        const center=document.querySelector(".center");

const getbgcolor=(selectedelement)=>{
  return window.getComputedStyle(selectedelement).backgroundColor;
}

console.log(window.getComputedStyle(red).background);
 var color=getComputedStyle(pink).backgroundColor;
pink.addEventListener("mouseenter",(e)=>{
  center.style.backgroundColor=color;
});

const magiccolorchange=(element,color)=>{
  element.addEventListener("mouseenter",(e)=>{
    center.style.backgroundColor=color;
  });
}
magiccolorchange(red,getbgcolor(red));
magiccolorchange(cyan,getbgcolor(cyan));
magiccolorchange(violet,getbgcolor(violet));
magiccolorchange(orange,getbgcolor(orange));
magiccolorchange(pink,getbgcolor(pink));

  v-37
//declaring different types of objects eith the help of new key word
var object = function(firstname,coursecount){
  this.firstname=firstname;
  this.coursecount=coursecount;
  this.getcoursecount=function(){
    console.log(`the course count is ${this.coursecount}`);
  };
};

object.prototype.getfirstname = function(){
  console.log(`the first name is ${this.firstname}`);
}
var harshith=new object("harshith",3);
console.table(harshith);

if(harshith.hasOwnProperty("firstname")){
  harshith.getfirstname
}

var sam=new object("sam",5);
console.table(sam);

const og(obj.firobj={
  name:"sai harshith",
  age:18,
  get firstname(){
    return this.name;
  },
});

const obj = {};
// 1. Using a null prototype: no inherited properties
const descriptor = Object.create(null);
descriptor.value = "static";

// // not enumerable, not configurable, not writable as defaults
// Object.defineProperty(obj, "key", descriptor);

// // 2. Being explicit by using a throw-away object literal with all attributes present
Object.defineProperty(obj, "key2", {
  enumerable: false,
  configurable: false,
  writable: false,
  value: "static",
  
});

// // 3. Recycling same object
function withValue(value) {
  const d =
    withValue.d ||
    (withValue.d = {
      enumerable: false,
      writable: false,
      configurable: false,
      value,
    });

//   // avoiding duplicate operation for assigning value
  if (d.value !== value) d.value = value;

  return d;
}
// // and
// Object.defineProperty(obj, "key2", withValue("static"));

// // if freeze is available, prevents adding or
// // removing the object prototype properties
// // (value, get, set, enumerable, writable, configurable)
(Object.freeze || Object)(Object.prototype);


var user=function(firstname,coursecount){
  this.firstname=firstname;
  this.coursecount=coursecount;
  this.getcoursecount=function(){
    console.log(`${this.firstname} and ${this.coursecount}`);
  };}

  var hitesh=new user("harshith",4);
  console.log(hitesh);
  hitesh.getcoursecount();
  

   var User = function (firstname, coursecount) {
    this.firstnamee = firstname;
    this.coursecount = coursecount;
    this.getcoursecount = function () {
      console.log(`${this.firstname} and ${this.coursecount}`);
    };
  }

User.prototype.grtfirstname=function(){// here the prototype property is used to add an extra property 
  //to the object or function user and it reduces the lines of code as it is called every time when you create an object on the given object or function
  console.log(this.firstname);
}
var hitesh = new User("harshith", 4);
console.log(hitesh);
hitesh.getcoursecount();
if(hitesh.hasOwnProperty("firstname")){
  hitesh.grtfirstname();
}
//object creation from mdn docs
var user={
  firstname:"",
  getuserfirstname:function(){
    console.log(`the user firstname is: ${this.firstname}`);
  },
};
var hitesh=Object.create(user);
hitesh.firstname="harshith";
console.log(hitesh);
hitesh.getuserfirstname();
var sam=Object.create(user);
sam.firstname="harsh";
console.log(sam);
sam.getuserfirstname();

object.defineproperty(object,propertyname,descriptor);
//her ethere are 2 types of descriptor properties as they are 1)data descriptor and 2)accessor descriptor 
//as the data descriptor has 2  mutually exclusive different properties which cant be declared by once using the defineproperty method
//to get rid of this error you need to define both the properties exclusively twice


// (()=>{"use s })();//here the type error is also given as we use strict mode
//for in and object.keys all the properties are enabled for the non ennumerable properties of the object so if we nned to use those properties the propertise should be enumerable

const hitesh={
  firstname: "hitesh",
  coursecount:4,
  getcoursecount:function(){
    console.log(`the user ${this.firstname} has course count of ${this.coursecount}`);
},};
const hites={
  firstname: "hites",
  coursecount:3,
  };
  hitesh.getcoursecount.bind(hites)();
  hitesh.getcoursecount.call(hites); 



const courses=[
  {
    name: "Complete js course",
    price:"2.3",
  },
  {
    name: "Complete react course",
    price:"2.3",
  },
  {
    name: "Complete angular course",
    price:"2.3",
  },
  {
    name: "Complete c course",
    price:"2.3",
  },
  {
    name: "Complete c++ course",
    price:"2.3",
  },
]

function getCourse(){
   courses.forEach(()=>{


   })
}
getCourse();


const map=new Map();
map.set('cours','dsa');
map.set('coure','ds');
map.set('couse','daa');
map.set('corse','phy');
console.log(map);
map.delete('cours');
console.log(map);

console.log(map);
const iterator=map.entries();
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
map.forEach(key => {console.log(key);});
  

function n(){
  return "hello";
}
console.log(getuserrole() );






class user{
  constructor(username,email){
      this.username=username;
      this.email=email;
  }
   #courselist=[];
   setcourselist(course){
    this.#courselist.push(course);
     
   }
   getcourselist(){
    return this.#courselist;
   }
   getinfo(){
    return `name is ${this.username} and email is ${this.email}`;
   }

}
var rock=new user("rock","rock.com");
console.log(rock.getinfo());
console.log(rock.getcourselist());
rock.setcourselist("js");
console.log(rock.getcourselist());
console.log(rock.courselist);


class subadmin extends user {
  getsubadmininfo(){
    return "iam a sub admin";
  }

  getinfo(){
    return `name is ${this.email} and email is ${this.username}`;
   }
}
var rock=new subadmin("tom","tom.com");
console.log(rock.getinfo());
console.log(rock.getcourselist());







  //  ||||||||||||||||    2nd time    ||||||||||||||||||||


//    ||||||||||||||||    2nd time    ||||||||||||||||||||

var f1=getdetails("sai","admin");

console.log(f1);
console.log(getdetails("sai","admin"));




 function getdetails(name,role){
  switch(role){
    case "admin":
      return `${name} is ${role}`;
      break;
  }

}

tipper("5");
function tipper(a){
  var bill=parseInt(a);
  console.log(bill+5);
}


console.log(this);

var states=new Array("ap","assam","mp")
console.log(states.length);
var user=["sai","hitesh",1,"2",true];
user.pop();
console.log(user);

user.shift();

console.log(user);

var iseven=(ele)=>{
  return ele%2===0;
} 
console.log(iseven(2));

var result=[2,4,6,8].every((e)=>
  e%2===0
);
console.log(result);



var result=[2,4,6,8];
console.log(result.fill("sai",0,4));
// same as this it goes with the filter but needed new variable to store the result

var result=[2,4,6,8];
 result.splice(0,2,"hi");
result.slice(1,2);
console.log(result.slice(0,2));


var user={
  fname:"sai",
  lname:"e",
  logincount:1,
  courselist:[],
  buycourse :function(coursename){
     this.courselist.push(coursename);
  },
  getcount:function(){
    console.log(this);
    return `${this.fname} is enrolled in total of  ${this.courselist.length}`;
  },
};


user.buycourse("math");
user.buycourse("sci");
console.log(user.courselist);
console.log(user.getcount());



const o = {}; // Creates a new object

// Example of an object property added
// with defineProperty with a data property descriptor
Object.defineProperty(o, "a", {
  value: 37,
  writable: false,
  enumerable: true,
  configurable: true,
});
// 'a' property exists in the o object and its value is 37

// Example of an object property added
// with defineProperty with an accessor property descriptor
let bValue = 38;
Object.defineProperty(o, "b", {
  get() {
    return bValue;
  },
  set(newValue) {
    bValue = newValue;
  },
  enumerable: true,
  configurable: true,
});
o.a=42;
console.log(o.a);


(() => {
  "use strict";
  const o = {};
  Object.defineProperty(o, "b", {
    value: 2,
    writable: false,
  });
  o.b = 3; // throws TypeError: "b" is read-only
  return o.b; // returns 2 without the line above
})();



function init(){
  var fname="sai";
  console.log("init");
  function sayfname(){
    console.log(fname);

  }  sayfname();
} 
init();

const course=[{
  cousename:"js",
  price:"$ 2.4",

},{
  cousename:"j",
  price:"$ 2.4",

},{
  cousename:"jsa",
  price:"$ 2.4",

},{
  cousename:"jsv",
  price:"$ 2.4",

},];

function getcourses(){
  const ul=document.querySelector(".list-group");
  courses.forEach((course)=>{
    const course=document.querySelector(".")
  
  const li=document.createElement("li");
  li.classList.add("list-group-item");
  const name=document.createTextNode(course.cousename);
  li.appendChild(name);
  
  const span=document.createElement("span");
  span.classList.add("float-right");
  const price=document.createTextNode(course.price);
  span.appendChild(price);

  li.appendChild(span );


  windows.EventListener("load",getcourses);
  });
}



const uno=()=>{
  return "one";
};

const dos=()=>{
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      reject("iam two");
    },3000);
});
}

const tress=()=>{
  return "three";
};



(async()=>{
  let var1=uno();
  console.log(var1);

  let var2=await dos();
  console.log(var2);

  let var3=tress();
  console.log(var3);
})();


let prom=new Promise((resolve,reject)=>{

});


function getdata(data){
  return new Promise((resolve,reject)=>{
    console.log(`data ${data}running`);
    setTimeout(()=>{
       
      resolve("succ");
    },3000);
  });
}

getdata("succ").then((res)=>{
  console.log(res);
  getdata(2).then((res)=>{
    console.log(res);
  });
});

function repeatMessage() {
  console.log("Repeating message");
  setTimeout(repeatMessage, 1000);
}
setTimeout(repeatMessage, 1000);

function repeatMessage() {
    console.log("Repeating message");
    setTimeout(repeatMessage, 1000);
  }
  setTimeout(repeatMessage, 1000);
  
  
  function repeatMessage() {
    console.log("Repeating message");
    setTimeout(repeatMessage, 1000);
  }
  setTimeout(repeatMessage, 1000);
  
  console.log("frontend ends here");
    




//    backend starts      //
console.log("backend starts");

console.log("hello");
function test(a,b){
  return a+b;
}

let result=test(100,200);
console.log(result);



let 
