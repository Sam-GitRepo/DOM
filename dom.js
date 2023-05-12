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

var titles = document.querySelectorAll('.title');
console.log(titles);
titles[0].textContent = 'hello';

var odd = document.querySelectorAll('li:nth-child(odd)');
var even = document.querySelectorAll('li:nth-child(even)');

for (var i = 0; i < odd.length; i++) {
    odd[i].style.backgroundColor = '#f4f4f4';
    even[i].style.backgroundColor = '#cde';

}


















