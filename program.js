document.writeln('Hello, world!');

divider(1);

var empty_object = {};

var msThang = {

	"first_name" : "Morgan\u00E9",
	middle_name  : "msThang",
	last_name    : "Burcham"

};

document.writeln(msThang['first_name']);
document.writeln(msThang.first_name);
document.writeln(msThang.last_name);

// for default vals, use ||
// Basically saying undefined or "blah"
document.writeln(msThang.middle_name || "default");
document.writeln(msThang['middle_name'] || "default");

divider('2');

// update

msThang["first-name"] = "Missy";
msThang.last_name = "Elliot";

document.writeln(msThang['first-name']);
document.writeln(msThang.last_name);

divider(3);

// 10_30 (Programming languages example)
document.writeln("a".charCodeAt(0));

function divider(section){

		document.writeln('****************'+ section +'****************');

}

// ASCII code

// Freeze --- just like c++ const
// From the Javascript: the difinitive guide
Object.freeze(msThang);

msThang['first-name'] = 'SomeChange';
document.writeln(msThang['first-name']);
document.writeln('Wow. No change o___o');

//---------------------Floating point test---------------------

var num = 1000000000;
for (var i = 0; i<900000; i++)
	num -= .5;
document.writeln(num);

//---------------------Exceptions--------------------
var try_example = function() {
  try {
    functionNotIsNotDefined("seven");
  }

  catch(e) {
    document.writeln(e.name + ": " + e.message);
  }
}
try_example();
//--------------------Bad Parts---------------------
	if ('' == '0')  // false
	if (0 == '')    // true
	if (0 == '0')   // true
	if (false == 'false')   // false
	if (false == '0')       // true
	if (false == undefined) // false
	if (false == null)      // false
	if (null == undefined)  // true
	if ('\t\r\n' == 0)      // true
	document.writeln('test');

//------------------Compound operator example------------------------
	var number = 5;
	number = number + 1;      
	document.writeln(number); // Writes 6 to HTML DOM
	number += 1;              // Compound operator for addition
	document.writeln(number); // Writes 7 to HTML DOM

//------------------Real numbers-----------------------------------
	// var x = .3 - .2; // thirty cents minus 20 cents
	// var y = .2 - .1; // twenty cents minus 10 cents
	// x == y           // declared false
	// x == .1          // also declared false
	// y == .1          // surprisingly declared true

//	var a = "\u0062";
//	alert(a);

//---------------Ordinal types--------------------------
var array = [];
array[4294967297] = 5;
array[5] = 2;
document.writeln(array[4294967297])

//---------------Hoisted function-----------------------
	hoistedFunction();  // Successful call without previous definition

	function hoistedFunction() 
	{ 
		document.writeln("Test Hoist");
	}

//--------------Closures---------------
var candy = (function () {  // Anonymous function 1

	var flavor = "Lime";

	return {
		changeFlavor: function (newFlavor) { // Anonymous function 2
			flavor = typeof newFlavor === 'string' ? newFlavor : "Lime";
		},
		getFlavor: function () { // Anonymous function 3
			return flavor;
		}
	};
}());

document.writeln(candy.getFlavor()); // Prints "Lime"
candy.changeFlavor("Cherry");
candy.flavor = "Chocolate";
document.writeln(candy.getFlavor()); // Prints "Cherry"

//----------Static Scope--------------
function DiningRoom()
{
	var NumberOfChefs = 5;

	function Kitchen()
	{
		var NumberOfChefs = 1;
		PrintNumberOfChefs(); // Prints 5
	}

	function LivingRoom()
	{
		var number = NumberOfChefs;
		alert(number);
	}
}

//---------Parameter passing----------
// Pass-by-sharing
var person = { lastname:"Center", customGreeting:"Howdy!!!" };

SimpleGreet(person['lastname'], person['customGreeting']);
document.writeln(person['lastname']); // Last name "Center"

CompositeGreet(person);
document.writeln(person['lastname']); // Last name "Changed"

function SimpleGreet(name,phrase) {
	document.writeln("Hello " + name + ". " + phrase);
	name = "Changed";
}

function CompositeGreet(person) {
	document.writeln
	(
		"Hello " + person['lastname'] + ". " + person['customGreeting']
	);
	person['lastname'] = "Changed Name";
}

//---------Exceptions--------------
var try_declareCoffeTime = function () {
	try {
		timeToDrinkingCoffee("Yes!!!");
	} catch (error) {
		document.writeln(error.name + ": " + error.message);
	} finally {
		document.writeln("Nice try!!!");
	}
}

var timeToDrinkingCoffee = function(boolVal) {
	if (typeof boolVal !== 'boolean') {
		throw {
			name: 'Type error',
			message: 'Do not joke around with coffee time!!!'
		};
	}
	if (boolVal === true){
		document.writeln('It is coffee time!!!');
	} else {
		document.writeln('Too bad! It is still coffee time!!!');
	}
}

try_declareCoffeTime();

//---------Inheritance------------
// inherit() returns a newly created object that inherits properties from the
// prototype object p. It uses the ECMAScript 5 function Object.create() if
// it is defined, and otherwise falls back to an older technique.
function inherit(prototype) {

    // prototype must be a non-null object
    if (prototype == null) throw TypeError();
    
    // If Object.create() is defined
    if (Object.create)
        // then just use it.
        return Object.create(prototype);
    
    // Otherwise do some more type checking
    var type = typeof prototype;
    if (type !== "object" && type !== "function") 
       throw TypeError();
    
    // Define a dummy constructor function.
    function child() {};
    
    // Set its prototype property to prototype passed in.
    child.prototype = property;
    
    return new child();
}

var maleFamilyMember = {};
maleFamilyMember.backspasms = true;

var dad = inherit(maleFamilyMember);
dad.badknees = true;         

var son = inherit(dad);
son.badbreath = true;

maleFamilyMember.backspasms = false;

if (!son.backspasms) {
    document.writeln("He's cured!"); // Printed
} else {                             
    document.writeln("Illigitimate child.");
}


//person inherits object methods from Object.prototype
//person now has an own property of back spasms.
//grandpa inherits properties from person and Object.prototype
//and has an own property of having bad knees.
//the son inherits properties from , o, and Object.prototype
//and has an own property z.
//grandDad back spasms property is changed
// still exists
var secondSon = inherit(dad);

if (son.constructor === secondSon.constructor)
	document.writeln("They are related!!!"); // Definitely prints this
else
	document.writeln("Uh oh.");
//-------------------Concurrency using XHR object--------------------------
function orderPuppyFunction() {

    // Retreive the value of web form
    var ID = document.getElementById("puppyID_textbox").value;

    // start AJAX request
    var xmlhttp = new XMLHttpRequest();

    // create callback function that listens and invokes 
    // the anonymous function with data it has received
    xmlhttp.onreadystatechange = function () {
    	
	  // The xmlhttp request allows messages to be passed from
	  // the program and the object. 
      if ((xmlhttp.readyState === 4) && (xmlhttp.status === 200)) {

        var puppyInfo = xmlhttp.responseText.split(",");
        document.getElementById('breed_field').value = puppyInfo[0];
        document.getElementById('age_field').value = puppyInfo[1];
        document.getElementById('eyeColor_field').value = puppyInfo[2];
        document.getElementById('weight_field').value = puppyInfo[3];
        } 
    };

    xmlhttp.open("GET","lookupPuppyInfo.php?num="+ID,true);
    // this is for "Get" 
    // since parameters are already passed into open()
    xmlhttp.send(null);

}
//-------------------Recursion--------------------------
var tailFactorial = function tailFactorial(number, result) {
	result = result || 1;
	if (number < 2) {
		return result;
	}
	return tailFactorial(number - 1, result * number);
};

var memo = [];
function memoFactorial (number) {
	if (number == 0 || number == 1)
		return 1;
	if (memo[number] > 0)
		return memo[number];
	return memo[number] = memoFactorial(number-1) * number;
}

document.writeln(tailFactorial(5,0));
document.writeln(memoFactorial(5));

//--------------Closures---------------
var candy = (function () {  // Anonymous function 1

	var flavor = "Lime";

	return {
		changeFlavor: function (newFlavor) { // Anonymous function 2
			flavor = typeof newFlavor === 'string' ? newFlavor : "Lime";
		},
		getFlavor: function () { // Anonymous function 3
			return flavor;
		}

	};
}());

document.writeln(candy.getFlavor()); // Prints "Lime"
candy.changeFlavor("Cherry");
candy.flavor = "Chocolate";
document.writeln(candy.getFlavor()); // Prints "Cherry"

function makeAdder (x) {

	return function (y) {

		document.writeln("x is " + x);
		document.writeln("y is " + y);

		return x + y;
	}

}

var add5 = makeAdder(5);
var add10 = makeAdder(10);

document.writeln(add5(20));
document.writeln(add10(25));