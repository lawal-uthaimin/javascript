// // string concatenation 'for joining strings together '

// const { default: styled } = require("styled-components");

// // let firstName = "lawal";
// // let lastName = "uthaimin";
// // let fullName = firstName + " " + lastName;

// // console.log(fullName);

// // // //getting characters
// // // console.log(fullName[0]);

// // // //string lenght
// // // console.log(fullName.length);

// // // //string method
// // // console.log(fullName.toUpperCase);

// // // let result =(fullName.toLowerrCase());
// // // console.log(result, fullName);

//  // let index = emmail.indexOf('@');
//  // console.log(index);

//  // // 1 to uppercase */

//   // common string mrthod

//   // let email = 'uthaiminlawal@email';
//   //                            // let result = email.lastIndexOf('l');
//   //                           // let result = email.slice(0,9);
//   //                           // let result = email.substr(2,10)
//    //                          // let result = email.replace('l', 'j')
//   // console.log(result);*/

//  // Numbers

//  // //maths operatots +  - * / **power of  %

//  //console.log(10/2)

//   //let result = radius % 3;

//  // //let result = pi * radius** to power two 2;

//  // order of operation B I D M A S

//  // //let result = 5 *(10-3)**2
// // // //console.log(result)

// // // //let likes = 10;
// // // //likes++

// // // //likes += 10;
// // // //console.log(likes);

// // // // NaN - not a number

// // // //console.log(55 / 'hi');

// // // //let result = 'the page has' + likes + 'likes'
// // // //console.log(result);

// // // // template strings

// // const title = "web master";
// // const author = "lawal uthaimin";
// // const likes = 100000;
// // //concatenation way

// // let result =
// //   "The man called " +
// //   title +
// //   " whose name was " +
// //   author +
// //   " has a webpage with " +
// //   likes +
// //   " followers";
// // console.log(result);
// // // // template way
// // // // let result = `The man called ${title} whose name was ${author} has a webpage with ${likes} followers`;
// // // // console.log(result);
// // // // creating html template

// // // // let html = `
// // // // <h2>${title}</h2>
// // // // <p>whose name was ${author}</p>
// // // // <span> has a webpage with ${likes} followers</span>
// // // // `;

// // // // console.log(html);

// // // // arrays

// // // //  let lawal =["usamah", "faruq", "musab"];
// // // // lawal[1] = 'oao';
// // // // console.log(lawal[1]);

// // // // array methods
// // // // seperation of arrays
// // // // let result = lawal.join(' ');
// // // // finding the position of an array
// // // // let result = lawal.indexOf('usamah');

// // // // let result = lawal.concat(['om', 'er', 'ree']);
// // // // let result = lawal.push('om')

// // // // let age = null;
// // // // console.log(age, age + 3, `the age is ${age}`);

// // // // booleans & comparison

// // // // console.log(true, false, "true", "false");

// // // // // methods of return

// // // // let email = 'lawaluthaimin@gmail.com';
// // // // let names = ['lawal', 'usamah', 'uthaimin']
// // // // // let result = email.includes('@gmail.com');
// // // // let result = names.includes('lawal')
// // // // console.log(result);

// // // // comparison operators

// // // // let age = 30;

// // // // console.log(age == 30);
// // // // console.log(age == 31);
// // // // // != not equal
// // // // console.log(age != 31);

// // // // console.log(age > 35);
// // // // console.log(age < 31);
// // // // console.log(age <= 30);
// // // // console.log(age <= 30);
// // // // let name = 'uthaimin';
// // // // console.log(name == 'uthaimin');
// // // // console.log(name < 'zaid');
// // // // console.log(name > 'mudrik');
// // // // // lower case are grater than upper case
// // // // console.log(name == 'Uthaimin');

// // // // let age = 25;
// // // // // loose comparison (diffrent types can be equal)
// // // // console.log(age == 25);
// // // // // console.log(age == '25');
// // // // console.log(age === 25);
// // // // console.log(age !== '25');

// // // // strict comparison (diffrent type cant be equal)

// // // // type conversion
// // // // let score = '100';
// // // // here converting a string into a number
// // // // score = Number(score);
// // // // // checking data type
// // // // console.log(typeof score);
// // // // console.log(score + 1);

// // // // let result = Number('hello')
// // // // console.log(result);

// // // // let result = String('100')
// // // // console.log(result, typeof result);

// // // // let result = Boolean('100')
// // // // console.log(result)

// // // // for loops

// // // // for(let i = 0; i < 5; i++){
// // // //     console.log('in loop, i');
// // // // }
// // // // console.log('loop finished');

// // // // const names = ['lawal', 'usamah', 'uthaimin'];

// // // // for(let i = 0; i < names.length; i++){
// // // //     // console.log(1);
// // // //     let html = `<div>${names}</div>`;
// // // //     console.log(html);
// // // // }

// // // // let i = 0;
// // // // while(i < names.length){
// // // //     console.log(names[i]);
// // // //     i++;
// // // // }

// // // // let na = ('lawal');
// // // // console.log(na);

// // // // if statement

// // // // const age = 20;

// // // // if(age > 18){
// // // //     console.log('you are above 18 year old');
// // // // }

// // // //  const developers = ['lawal', 'uthaaimin', 'usamah', 'afeez'];

// // // //  if(developers.length > 5){
// // // //     console.log('wow you have a great team');
// // // //  }

// // // // logical operators
// // const password = "ldhmm#kh@";

// // if(password.length >= 8 && password.includes('@')){
// //     console.log('it is good')
// // }

// //  else if (password.length >= 8 || password.includes('@') && password.length >= 5) {
// //  console.log("that a strong password");
// //  } else{
// //    console.log('password is not strong enough');
// //  }

// // // logical not !

// // // let user = false;
// // // if(!user){
// // //     console.log('login to continue')
// // // }

// // // break and continue

// // // const score = [50, 25, 0, 30, 100, 20, 10]

// // // for(let i = 0; i < score.length; i++){

// // //     if(score[i] === 25){
// // //         continue;
// // //     }

// // //     console.log('your score', score[i]);

// // //     if(score[i] === 100){
// // //         console.log('good you got the top sscore');
// // //         break;
// // //     }
// // // }

// // // switch statements
// // // //
// // const grade = "A";

// // switch (grade) {
// //   case "A":
// //     console.log("you got an: A ");
// //     break;
// //   //     case 'B':
// //   //         console.log('you got a B!')
// //   //         break;
// //   //     case 'C':
// //   //         console.log('you got a C!')
// //   //         break;
// //   //     case 'D':
// //   //         console.log('you got a D!')
// //   //         break;
// //   //     case 'E':
// //   //         console.log('you got E!')
// //   //         break;
// //   //     case 'F':
// //   //         console.log('you got a F!')
// //   //         break;
// //   //     default:
// //   //         console.log('not a valid grade')
// // }

// // // // variables & block scope
// // // let age = 30;
// // // let name = 'uthaimin';
// // // if(!false){
// // //     let age = 39;
// // //     console.log("inside code block:", age, name);
// // // }

// // // console.log('outside code block:', age, name);

// // function declaration

// // function greet() {
// //   console.log("welcome home");
// // }

// // function declaration

// // greet();

// // const speak = function(name = 'uthaimin', time = 'night'){
// //     console.log(`good ${time} ${name}`);
// // };

// // speak()

// // const calcArea = function (radius) {
// //   let area = 3.14 * radius ** 2;
// //   console.log(area);
// //   return area;
// // };
// // const area = calcArea(5);
// // console.log(area);

// // let calc = 3.14 ** 2;
// // console.log(calc);

// // arrow function

// // const gredet = function(){
// //   return 'hello friend'
// // }

// // const greet = () => 'hello friend';
// // const result = greet();
// // console.log(result);

// // const bill = function(products, tax){
// //   let total = 0;
// //   for(let i = 0; i < products.length; i++){
// //     total += products[i] + products[i] * tax;
// //   }
// //   return total;
// // }

// // console.log(bill([10,15,30], 0.2));

// // const bill = (products, tax) => {
// //   let total = 0;
// //   for(let i = 0; i < products.length; i++){
// //     total += products[i] + products[i] * tax
// //   }
// //   return total;
// // }

// // console.log(bill([10,15,30], 0.2));

// // callback not a funtion but a way of calling function
// // const myFunc = (callbackFunc) => {
// //   let value = 50;
// //   callbackFunc(value);
// // }

// // myFunc(value => {
// //   console.log(value)
// // });

// // foreach

// //  for(let i = 0; i < names.length; i++){

// //  }
// // let names = ["uthaimin", "usamah", "musab", "abdulrobbi", "afeez"];

// // names.forEach((names, index) => {
// //   console.log(`${index} - hello how are you doing ${names}`);
// //    return names;
// // });

// getting  a refrence to the 'ul'
// const ul = document.querySelector('.people')

// const names = ["uthaimin", "usamah", "musab", "abdulrobbi", "afeez"];

// let html = ``
// names.forEach(person => {

// console.log(html)

// ul.innerHTML = html;
// })

// object laterals

// let user = {
//    name: 'uthaimin',
//    age: 25,
//    email: 'lawaluthaimin@gmail.com',
//    location: 'nigeria',
//    telegramId: 'sandro_martinez'
// };

// methods
// let user = {
//   name: 'uthaimin',
//   age: 25,
//   email: 'lawaluthaimin@gmail.com',
//   location: 'nigeria',
//   telegramId: [
//     {user: 'sandro_martinez has', followers: 958954000 },
//     {user: 'uthaiminin_lawal has', followers: 555552000 },
//     {user: 'lawal_uthaimin has', followers: 2555800 }
//   ],
//   login: function(){
//     console.log('the user loged in');
//   },

//   logout: function(){
//     console.log('the user logged out');
//   },
//   logtelegramId: function(){
//     console.log("this user have the following telegram id's: ");
//     this.telegramId.forEach(telegram => {
//       console.log(telegram.user, telegram.followers, 'followers');
//     });
//   }
// };

// user.login();
// user.logout();
// user.logtelegramId();

// console.log(user);
// console.log(user.name);
// // square calling
// console.log(user['email']);

// user['email'] = 'lawaluthaimin@gmail.co';
// console.log(user['email']);

// // Math object

// const area = 7.7;
// console.log(Math.round(area));

// console.log(Math.floor(area));
// console.log(Math.ceil(area));
// console.log(Math.trunc(area));

// // random numbers

// const random = Math.random();
// console.log(Math.round(random * 10));

// primitive values

// let scoreOne = 50;
// let scoreTwo = scoreOne

// console.log(`scoreOne: ${scoreOne}, scoreTwo: ${scoreTwo}`);

// scoreOne = 100;
// console.log(`scoreOne: ${scoreOne}, scoreTwo: ${scoreTwo}`);

// const userOne = {name: 'uthaimin', age: 25 };
// const userTwo = userOne;

// console.log(userOne, userTwo);

//    interacting with the browser     //

// const para = document.querySelector('div.error');
// console.log(para);

// grabbing multiple element

// const paras = document.querySelectorAll('p')
// console.log(paras);

// get an element by id
// const title = document.getElementById('utha');
// console.log(title);

// // get elements by their class name
// const error = document.getElementsByClassName('error');
// console.log(error);
// get elements by their tagname

// const paras  = document.getElementsByTagName('p');
// console.log(paras[1]);

//  const para = document.querySelector('p');
// // chsnging inner text
// para.innerText = 'uthaimin is doing awesome'

// const paras = document.querySelectorAll('p');

// paras.forEach(para =>{
//   console.log(para.innerText)
//   para.innerText += ' haha you good buudy'
// })
//to append +=
// ovewritting the html
// let content = document.querySelector('.content')
// // content.innerHTML = '<h2>THIS IS A NEW H2</h2>'

// const people = ['uthaimin', 'usamah', 'musab']

// people.forEach(person =>{
//   content.innerHTML += `<p>${person}</p>`
// })

// const link = document.querySelector('a')

// console.log(link.getAttribute('href'));

// link.setAttribute('href', 'https://www.uthaimin.com');
// link.innerText = 'lawal uthaimin website';

// const mssg = document.querySelector('p')
// console.log(mssg.getAttribute('class'))
// mssg.setAttribute('class', 'success');

// const title = document.querySelector('h1')
// console.log(title.style);
// console.log(title.style.color);
// // adding to the css

// title.style.margin = '50px';
// add or remove class
// const content = document.querySelector('p')
// console.log(content.classList);
// content.classList.add('error')
// content.classList.remove('error')
// content.classList.add('success')

// const paras = document.querySelectorAll('p')

// paras.forEach(p =>{
// console.log(p.textContent);
// if(p.textContent.includes('error')){
//   p.classList.add('error')
// }
// else if(p.textContent.includes('success')){
//   p.classList.add('success')
// }

// });

// const article = document.querySelector('article');
// // console.log(article.children)
// // //converting to array
// Array.from(article.children).forEach(child =>{
//   child.classList.add('success')

// })

// const title = document.querySelector('h2')
// console.log(title.parentElement);

// click events

// const button = document.querySelector('button')
// button.addEventListener('click', () =>{

// })
// e.target get patricilar
// const ul = document.querySelector('ul');
// const button = document.querySelector('button');
// button.addEventListener('click', e =>{
//   const li = document.createElement('li');
//   li.textContent = 'something new to buy';
//   ul.prepend(li);

// })

// ul.addEventListener('click', e =>{
//   console.log(e.target)
//   if(e.target.tagName === 'LI'){
//     e.target.remove();
//   }
// })
// const items = document.querySelectorAll('li');

// items.forEach(item => {
//   item.addEventListener('click', e =>{
//     console.log(e.target);

//     e.target.style.textDecoration = 'line-through'
//     //removing elements from webpage
//     e.target.remove();
//   });
// });

//more dom event

// const copy = document.querySelector('.copy-me');
// copy.addEventListener('copy', () =>{
//   console.log('my content is copyright');
// })

// const box = document.querySelector('.box')
// box.addEventListener('mousemove', e =>{
//   // console.log(e.offsetX, e.offsetY);
//   box.textContent = (`position x -${e.offsetX} poisition y - ${e.offsetY} `)
// });

// document.querySelector('Wheel', e =>{
//   console.log(e);
// })

// building a pop up

// const button = document.querySelector('button');
// const popup = document.querySelector('.popup-wrapper');
// const close = document.querySelector('.popup-close')
// button.addEventListener('click', () =>{
//   popup.style.display = 'block';
// });

// close.addEventListener('click', () =>{
//   popup.style.display = 'none';
// });

// // popup.addEventListener('click', () =>{
// //   popup.style.display = 'none';
// // });

// // form events

// const form = document.querySelector('.signup-form')
// const feedback = document.querySelector('.feedback')
// // const username = document.querySelector('#username')
// // const email = document.querySelector('#email')
// form.addEventListener('submit', e => {
//   e.preventDefault
//   // console.log(form.username.value)
//   // console.log(form.email.value)

//   const username = form.username.value;

//   const usernamePattern = /^[a-zA-Z]{6,10}$/;

//   if(usernamePattern.test(username)){
//     feedback.classList.add('success');
//     feedback.textContent= 'registration form filled succcessfully thannks'
//   } else{
//     feedback.classList.add('error');
//     feedback.textContent = ' the user name can only contain letters and between 6 and 10 characters'
//   }

// });

// // regular expression

// form.username.addEventListener('keyup', e => {
//   console.log(e.target.value, form.username.value);
// })

// array methods

// filter method

// const scores = [10, 20, 30, 40, 50, 60, 70, 80,  90, 100]

// const filtered = scores.filter((score) =>{
//   return score > 60;
// });

// console.log(filtered);

// const users = [
//   {name: 'uthaimin', premium: true},
//   {name: 'uthaimin', premium: false},
//   {name: 'muhsin', premium: true},
//   {name: 'ronald', premium: false},
//   {name: 'muklis', premium: true},
//   {name: 'maryam', premium: true},
// ]

// const premium = users.filter((user) => {
//   return user.premium;
// });

// console.log(premium);

//  const prices = [100, 200, 300, 400, 500, 600, 700, 800,  900, 1000];

//  const sale = prices.map(price => price / 2)

//  console.log(sale);

// const products = [
//   {name: 'flour', price: 20},
//   {name: 'flsaeour', price: 60},
//   {name: 'flghhour', price: 40},
//   {name: 'flojur', price: 10},
//   {name: 'flvhvhour', price: 50},
//   {name: 'flojxur', price: 70}
// ]

// const sale = products.map((product) =>{
//   if(product.price > 30){
//     return { name: product.name, price: product.price / 2}
//   } else{
//     return product;
//   }
// });

// console.log(sale)

// reduce method

//  const scores = [10, 20, 30, 40, 50, 60, 70, 80,  90, 100];

//  const result = scores.reduce((acc, curr) =>{
//    if(curr > 50){
//     acc++;
//    }
//    return acc
//  }, 0);

//  console.log(result)

// const scores = [
//   {player: 'uthaimin', score: 80},
//   {player: 'muhsin', score: 75},
//   {player: 'muklis', score: 70},
//   {player: 'uthaimin', score: 50},
//   {player: 'abdulrobbi', score: 40},
//   {player: 'uthaimin', score: 80},
//   {player: 'muhsin', score: 75},
//   {player: 'muklis', score: 70},
//   {player: 'uthaimin', score: 50},
//   {player: 'abdulrobbi', score: 40},
//   {player: 'uthaimin', score: 80},
//   {player: 'muhsin', score: 75},
//   {player: 'muklis', score: 70},
//   {player: 'uthaimin', score: 50},
//   {player: 'abdulrobbi', score: 40}
// ];

// const total = scores.reduce((acc, curr) => {
//   if(curr.player === 'uthaimin'){
//     acc += curr.score
//   }
//   return acc;
// }, 0);

// console.log(total);

// find method

// const scores = [10, 5, 45, 18, 78, 20, 10, 70]

// const highScore = scores.find(score =>{
//   return score > 50
// })

// console.log(highScore);

// example 1
const names = ['uthaimin', 'muklis', 'muhsin', 'samad'];

// const newNames = names.sort();

const newNames = names.reverse();

// console.log(newNames);
// // example 2
// const score = [10, 50, 20, 5, 35, 70, 45]

// score.sort((a,b)=> a -b);

// console.log(score)
// // example 3

//  const players = [
//   {name: 'maryam', score: 80},
//   {name: 'muhsin', score: 75},
//   {name: 'muklis', score: 70},
//   {name: 'uthaimin', score: 80},
//   {name: 'abdulrobbi', score: 77},
//  ];


//  players.sort((a,b) =>{
//   if(a.score > b.score){
//     return -1;
//   } else if(b.score > a.score) {
//     return 1;
//   } else{
//     return 0;
//   }
//  })

// //  console.log(players);

// // players.sort((a,b) => a.score - b.score);

// // dates and time

// // daatevconstructor

// const now = new Date();

// // console.log(now)//

// // year //
// console.log('full year:', now.getFullYear());
// // days
// console.log('full day:', now.getDay())
// // moths
// console.log('full month:', now.getMonth())
// // times

// // date

//  console.log('full date:', now.getDate())

// // hours

// console.log('full hour:', now.getHours())

// //minute

// console.log('full minute:', now.getMinutes())

// //
// console.log('full seconds:', now.getSeconds())

// // timestamps

// console.log('timestamp', now.getTime());

// // date string

// console.log(now.toDateString())

// // time string

// console.log(now.toTimeString())

// // local string

// console.log(now.toLocaleString())

// const before = new Date('january 4 2023 2:19:59');

// console.log(before.getTime());

// const now = new Date();

// console.log('before:', before.getTime() ,now.getTime(),);

// const diff =  now.getTime() - before.getTime();

// console.log(diff / 1000 / 60 / 24);

// const min = Math.round(diff / 1000 / 60 / 24);

// console.log(min)

// console.log(`this message was sent ${min} ago `)

// const ll = new Date()

// const lm = ll.getMinutes();

// console.log(`this message was sent ${lm} minutes ago`);


// console.log(1);
// console.log(2);

// setTimeout(() => {
//     console.log('the funtion has been sent');
// }, 3000);
// console.log(3);
// console.log(4);

const getTodos = () =>{
        const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () =>{
        if(request.readyState === 4 && request.status === 200){
            console.log(request.responseText);
        } else if(request.readyState === 4){
            console.log('could not fetch the')
        }
    });    
    request.open('GET', 'https://api-football-v1.p.rapidapi.com/v3/timezone')
    ; 
    request.send();
};

getTodos();

const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
	}
});

xhr.open("GET", "https://api-football-v1.p.rapidapi.com/v3/timezone");
xhr.setRequestHeader("X-RapidAPI-Key", "fbda4f7b3emsh8cca1efd5a02734p17e58cjsnc3a9ec92c899");
xhr.setRequestHeader("X-RapidAPI-Host", "api-football-v1.p.rapidapi.com");

xhr.send(data);