// Examine the document object


// // console.dir(document);
// console.log(document.domain);
// console.log(document.url);
// console.log(document.title);
// // document.title = 123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// // document.all[10].textContent = 'hey bitch';
// console.log(document.forms);
// console.log(document.links);
// console.log(document.images);


// GET ELEMENT BY ID

// console.log(document.getElementById('header-title'));
// var headerTitle = document.getElementById('header-title');
// var header = document.getElementById('main-header');
// console.log(headerTitle);
// headerTitle.textContent = 'hello';
// headerTitle.innerText = 'Goodbye';
// headerTitle.innerHTML =' <h3>Hello Bitch</h3>';
// header.style.borderBottom = 'solid 5px black';

// GET ELEMENT BY CLASS


// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'hello';
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'Yellow';
// items.style.backgroundColor = '#f4f4f4';
// for (var i = 0; i < items.length; i++) {
//     items[i].style.backgroundColor = '#f4f4f4';
// }


// GET ELEMENT BY TAGNAME

// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent = 'hello';
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'Yellow';

// // items.style.backgroundColor = '#f4f4f4';
// for (var i = 0; i < li.length; i++) {
//     [i].style.backgroundColor = '#f4f4f4';
// }


// QUERY SELECTOR 

// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #000';

// var input = document.querySelector('input');
// input.value = 'Hello world';

// var submit = document.querySelector('input[type="submit"]');
// submit.value = 'done';

// var item = document.querySelector('.list-group-item');
// item.style.color = 'red';

// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';

// var nthItem = document.querySelector('.list-group-item:nth-child(2)');
// nthItem.style.color = 'yellow';


// QUERY SELECTOR ALL

// var titles = document.querySelectorAll('.title');
// console.log(titles);
// titles[0].textContent = 'hello';

// var odd = document.querySelectorAll('li:nth-child(odd)');
// var even = document.querySelectorAll('li:nth-child(even)');

// for (var i = 0; i < odd.length; i++) {
//     odd[i].style.backgroundColor = '#f4f4f4';
//     even[i].style.backgroundColor = '#cde';
// }


// TRAVERSING THE DOM

// var itemList = document.querySelector('#items')
//parentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode.parentNode.parentNode);

//parentElement
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentElement.parentElement.parentElement);

// childNodes
// console.log(itemList.childNodes);

// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.background = 'yellow';

// firstChild
// console.log(itemList.firstChild);
// //firstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'hello 1';

// lastChild
// console.log(itemList.lastChild);
// lastElementChild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'hello 4';

// nextSibling
// console.log(itemList.nextSibling);
// nextElementSibling
// console.log(itemList.nextElementSibling);

// previousSibling
// console.log(itemList.previousSibling);
// previousElementSibling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = 'blue';

//createElement

// create a div
var newDiv = document.createElement('div');

//add class
newDiv.className = 'hey';

//add id
newDiv.id = 'hello'; 

//add attribute
newDiv.setAttribute('title', 'hello Div');

//create textNode
var newDivText = document.createTextNode("Hello Bitch");

// add text to div
newDiv.appendChild(newDivText);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');

console.log(newDiv);

newDiv.style.fontSize = '30px';

container.insertBefore(newDiv,h1);



























