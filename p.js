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