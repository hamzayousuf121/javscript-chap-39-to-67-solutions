// Chap 39 to 42 Start
// task 1
// Write a custom function power ( a, b ), to calculate the value of
// a raised to b.

function power(a, b) {
	var result = 1;
	if (b == undefined) {
		b = 2;
	}
	for (var i = 1; i <= b; i++) {
		result = result * a;
	}
	return result;
}

console.log(power(2, 4));
console.log(power(5));

// task 2
//Any year is entered through the keyboard. Write a function to
//determine whether the year is a leap year or not
//leap year  = 2016, 2020, 2012

var leapyear = year => year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;

var checkleapyear = leapyear('2016');

var checkleapyear = leapyear('2014');

if (checkleapyear) {
	document.write('It is a leap year it has 366 days days in a year');
}
else {
	document.write('It is not  a leap year it has 365 days days in a year');
}

//Task 3
// If the lengths of the sides of a triangle are denoted by a, b, and
// c, then area of triangle is given by
// area = S(S − a)(S − b)(S − c)
// where, S = ( a + b + c ) / 2
// Calculate area of triangle using  function
function areaOfTraingle(a, b, c) {
	var S = (a + b + c) / 2;
	// Math.sqrt() method to find the square root of a number.
	var area = Math.sqrt(S * (S - a) * (S - b) * (S - c));
	return area;
}
console.log(areaOfTraingle(2, 4, 3.5))
console.log(areaOfTraingle(11, 9, 9))

// Task 4
// Write a function that receives marks received by a student in 3
// subjects and returns the average and percentage of these
// marks. there should be 3 functions one is the mainFunction
// and other are for average and percentage. Call those functions
// from mainFunction and display result in mainFunction
function average(EnglishMarks, UrduMarks, MathMarks) {
	var total = EnglishMarks + UrduMarks + MathMarks;
	var avg = (total / 3).toFixed(2);
	return {
		totalNumber : total,
		avg : avg
	}
}

function percentage(totalMarks, obtainedMarks) {
	return (( obtainedMarks * 100 ) / totalMarks).toFixed(2)
}
function mainFunction(){
	var avergaeResult = average(55, 68, 77);
	console.log(`Average of 3 subjects is ${avergaeResult.avg}`)

	var percentResult = percentage(300, avergaeResult.totalNumber);
	console.log(`Percentage is ${percentResult}`)

}
console.log(mainFunction())
// Task 5
// You have learned the function indexOf. Code your own custom
// function that will perform the same functionality. You can code
// for single character as of now.

Array.prototype.myIndexOf = function (f) {
	for (var i = 0; i < this.length; ++i) {
		if (f(this[i]))
			return i;
	}
	return -1;
};


// Task 6
// Write a function to delete all vowels from a sentence. Assume
// that the sentence is not more than 25 characters long.

var strings = 'my name is hamza yousuf i am becoming a Mern Stack Developer';

string = strings.replace(/[aeiou]/g, '');

console.log(string);


// Task 7
// Write a function with switch statement to count the number of
// occurrences of any two vowels in succession in a line of text.
// For example, in the sentence
// “Pleases read this application and give me gratuity”
// Such occurrences are ea, ea, ui.

function findOccurrences() {
	var str = "Pleases read this application and give me gratuity";
	var count = 0;
	let haveSeenVowel = false;
  
	for (var i = 0; i < str.toLowerCase().length; i++) {
	  switch (str[i]) {
		case 'a':
		case 'e':
		case 'i':
		case 'o':
		case 'u':
		  {
			if (haveSeenVowel) {
			  count++;
			  haveSeenVowel = false;
			} else {
			  haveSeenVowel = true;
			}
			break;
		  }
		default:
		  haveSeenVowel = false
	  }
	}
  
	return count
  }
  
  console.log(findOccurrences());

// Task 8
// The distance between two cities (in km.) is input through the
// keyboard. Write four functions to convert and print this
// distance in meters, feet, inches and centimeters

function meters(km) {
	return km * 1000;
}
function feet(km) {
	return km * 3280.84;
}
function inches(km) {
	return km * 39370.1;
}
function centimeters(km) {
	return km * 100000;
}
console.log(meters(100))
console.log(feet(100))
console.log(inches(100))
console.log(centimeters(100))
// task 9
// Write a program to calculate overtime pay of employees.
// Overtime is paid at the rate of Rs. 12.00 per hour for every hour
// worked above 40 hours. Assume that employees do not work
// for fractional part of an hour.
	function overtimePay(workingHours){
		var hourlyPay = 12;
		var hours = workingHours - 40;
		var result = hourlyPay * hours;
		return result;
	}
	var overtimeMoney = overtimePay(55);
	console.log('You earn ' + overtimeMoney + ' Overtime  rupess in a month')
// Task 10
// A cashier has currency notes of denominations 10, 50 and
// 100. If the amount to be withdrawn is input through the
// keyboard in hundreds, find the total number of currency notes
// of each denomination the cashier will have to give to the
// withdrawer.
var withDrowAmount = 50610;
var notesofHundred = withDrowAmount / 100;
var notesoffifty = (withDrowAmount % 100) / 50;
var notesoften = (((withDrowAmount % 100) % 50) / 10);
var notesofothers = (((withDrowAmount % 100) % 50) % 10);
console.log("Required notes of Rs. 100  :  ", notesofHundred.toFixed());
console.log("Required notes of Rs. 50   :  ", notesoffifty.toFixed());
console.log("Required notes of Rs. 10   :  ", notesoften.toFixed());
console.log("with Drow Amount still remaining Rs. :  ", notesofothers.toFixed());
// end Chap 42

// Start Chap 43 to 48
// Task 11
// Show an alert box on click on a link.

const alertfunc = () => alert('Link clicked');

// Task 12
// Display some Mobile images in browser. On click on an
// image Show the message in alert to user
let thankYou = () => alert('Thank you for purchasing a phone from us');

// Task 13
// Display 10 student records in table and each row should contain a delete
// button. If you click on a button to delete a record, entire row should be
// deleted.

const deleterow = (e) => {
	var parnetsNode = e.parentElement.parentElement;
	parnetsNode.style.display = 'none';
};

// Task 14
// Display an image in browser. Change the picture on mouseover and set the
// first picture on mouseout.
var Img = document.querySelector('#Carimg');

function mouseOver() {
	Img.src = './images/car2.jpg';
}

function mouseOut() {
	Img.src = './images/car1.jpg';
}

// Task 15
// Show a counter in browser. Counter should increase on click on increase
// button and decrease on click on decrease button. And show updated counter
// value in browser.

var increment = document.getElementById('increment');
var counter = document.querySelector('#counterValue');
var decrement = document.querySelector('#decrement');
var count = 0;

increment.addEventListener('click', () => {
	count++;
	counter.innerHTML = count;
});

decrement.addEventListener('click', () => {
	count--;
	counter.innerHTML = count;
});

// End chap 48
// Task 16
// Start chap 49 to 52
// Create a signup form and display form data in your web
// page on submission.
var submitForm = document.querySelector('#submitForm');
var formData = document.querySelector('#formData');
submitForm.addEventListener('submit', (e) => {
	e.preventDefault();
	var firstName = document.getElementById('first_name')
	var lastName = document.getElementById('last_name')
	var email = document.getElementById('email')
	var password = document.getElementById('password')

	formData.innerHTML = `
	<h1>First Name : ${firstName.value}</h1>
	<h1>Last Name : ${lastName.value}</h1>
	<h1>Email : ${email.value}</h1>
	<h1>Password : ${password.value}</h1>`;
	firstName.value = '';
	lastName.value = '';
	email.value = '';
	password.value = '';
})

// Task 17
//Suppose in your webpage there is content area in which you have entered your item details, but user can only see
//some details on first look. When user clicks on “Read more” button, full detail of that particular item will be displayed

function readMore() {
	var para = document.getElementById('readpara');
	var readmoretext = document.getElementById('readmoretext');
	readmoretext.style.display = 'none';
	para.innerHTML += `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, maiores quo ipsa, error quos delectus magni iste odio molestiae est vel deserunt ducimus necessitatibus? Delectus veniam debitis dicta itaque voluptatum?`;
}


//Task 18 
//  In previous assignment you have created a tabular data using javascript. Let’s modify that. Create a form which
// takes student’s details and show each student detail in  table. Each row of table must contain a delete button and
// an edit button. On click on delete button entire row should be deleted. On click on edit button, a hidden form will
// appear with the values of that row.

var submitForm2 = document.querySelector('#todoAppForm');
var formData = document.querySelector('#formData');
submitForm2.addEventListener('submit', (e) => {
	e.preventDefault();
	var fname = document.getElementById('fname')
	var lname = document.getElementById('lname')
	var emailnew = document.getElementById('emailnew')

	fname.value = '';
	lname.value = '';
	emailnew.value = '';
})


//End Chap 49 to 52

//Start 53 to 57

// Add modal.html style and html codes in your file
// Create an array of all images paths.
// Loop through array and display all images in browser using innerHTML.
// Add onclick function on each image.
// On image Function definition get modal using id and assign it to a variable,
// And on that variable
// Add class 'modal-open'
// Remove class 'modal-close'
// Add style to display block
// Assign image path to src
// On Modal Close Function definition "onClosedImagModal()" get modal using id and assign it to a variable,
// And on that variable
// Add class 'modal-close'
// Remove class 'modal-open'
// Set this line in end of function
// setTimeout(()=>{ modal.style.display = "none"; }, 550)

var images = ['./images/12.jpg', './images/13.jpg', './images/14.png', './images/15.jpg']
var wrapper = document.querySelector('#wrapper');
for (var i = 0; i < images.length; i++) {
	wrapper.innerHTML += `<img src="${images[i]}" alt="img" id="modal${i}" width="25%" onclick='openModel(id)' /><button id="modal${i}" class="btn-model" onclick='onClosedImagModal(id,this)'>X</button>`;
}

var openModel = (modal) => {
	var modal = document.getElementById(modal);
	modal.classList.add('modal-open')
	modal.classList.remove('modal-close');
}

function onClosedImagModal(modal, button) {
	console.log(modal)
	var modal = document.getElementById(modal);
	modal.classList.add('modal-close')
	modal.classList.remove('modal-open');
	setTimeout(() => { modal.style.display = "none"; }, 550)
	setTimeout(() => { button.style.display = "none"; }, 550)

}

//Modal code is available in this assignment file.
// 2. Create a paragraph and two buttons “zoom in ”(+) and “zoom out”(-).
// On each click on “zoom in”(+) , add 10px in font size of paragraph.
// And on each click on “zoom out”(-) , minus 10px in font size of paragraph.
var modalPara = document.getElementById('modalPara');
var px = 'px';
var FontSize = 12;
function zoom_in() {
	FontSize = FontSize + 10;
	modalPara.style.fontSize = FontSize + px;
	console.log(modalPara.style.fontSize = FontSize + px);
}
function zoom_out() {
	FontSize = FontSize - 10;
	modalPara.style.fontSize = FontSize + px;
	console.log(modalPara.style.fontSize = FontSize + px);
}
modalPara.style.fontSize = FontSize + px;
console.log(modalPara.style.fontSize = FontSize + px);

//End 53 to 57

// Start Chap 58 to 67

// i. Get element of id “main-content” and assign them in a variable.
// ii. Display all child elements of “main-content” element.
// iii. Get all elements of class “render” and show their innerHTML
// in browser.
// iv. Fill input value whose element id first-name using javascript.
// v. Repeat part iv for id ”last-name” and “email”.

// i. Get element of id “main-content” and assign them in a variable
var mainContent = document.querySelector('#main-content');
var mainContentData = document.querySelector('#mainContentData');

var c = mainContent.childNodes;
var txt = "";
for (var i = 0; i < c.length; i++) {
	txt += mainContent.childNodes[i].textContent + "<br />";
}
mainContentData.innerHTML = txt;

// iii. Get all elements of class “render” and show their innerHTML in browser.
var renderText = '';
var render = document.querySelectorAll('.render')
var renderData = document.querySelector('#renderData')
for (var i = 0; i < render.length; i++) {
	renderText += render[i].innerHTML + "<br>";
}
renderData.innerHTML = renderText;


// iv. Fill input value whose element id first-name using javascript.
// v. Repeat part iv for id ”last-name” and “email”.

var fName = document.getElementById('first-name');
var lName = document.getElementById('last-name');
var newemail = document.getElementById('email-new');

fName.value = 'Hamza';
lName.value = 'Yousuf';
newemail.value = 'hamzayousuf121@gmail.com';

// i. What is node type of element having id “form-content”
var formContent = document.getElementById('form-content');
var newLastName = document.getElementById('lastName');
console.log(formContent.nodeType)
// Show node type of element having id “lastName” and its child node.
console.log('Show node type of element having id “lastName”', newLastName.nodeType)
console.log('Show node type of element having id “lastName” and its child node', newLastName.childNodes[0].nodeType)
// Update child node of element having id “lastName”
var newElement = document.createElement('p');
var newElement2 = document.createTextNode('This is Update the Child Node')
newElement.appendChild(newElement2)
newLastName.appendChild(newElement);
console.log('Update child node of element having id “lastName”', newLastName.childNodes[1].nodeType)

// Get First and last child of id “main-content”.
console.log('First child of id “main-content”', mainContent.firstChild)
console.log(' last child of id “main-content”', mainContent.lastChild)

//Get next and previous siblings of id “lastName”.
console.log('Next siblings of id “lastName”', newLastName.nextSibling)
console.log('Previous siblings of id “lastName”', newLastName.previousSibling)


// Get parent node and node type of element having id “email”
console.log('Get parent node and node type of element having id “email”', newemail.parentNode)