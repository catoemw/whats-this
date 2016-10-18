/**
 * Set-up
 */

if (typeof window === 'undefined') {
    global.whatsThis = whatsThis;
} else {
    global = window;
}

var obj = {
    id: 'object',
    whatsThis: whatsThis,
    inner: {
        id: 'inner-object',
        whatsThis: whatsThis
    }
};

var location = {
    state: 'Alaska',
    city: 'Anchorage'
};

function whatsThis() {
    console.log('This is...', this);
    return this;
}

function Ctor() {
    this.ownProperty = 'blah';
    console.log('This is...', this);
}

Ctor.prototype.whatsThis = whatsThis;



/**
 * Exercises
 */

var ex;

// Exercise 1

ex = whatsThis();
// 'this' === global.
// Nothing to the left of the dot. 

console.assert(ex === global);



// Exercise 2

ex = global.whatsThis();
// 'this' === global.
// global is left of the dot/function is applied to global

console.assert(ex === global);



// Exercise 3

ex = obj.whatsThis();
// 'this' === obj.
// function is applied to obj

console.assert(ex === obj);



// Exercise 4

ex = obj.inner.whatsThis();
// 'this' === obj.inner.
// obj.inner calls its whatsThis method

console.assert(ex === obj.inner);



// Exercise 5

ex = whatsThis.call(null);
// 'this' === global.
// call method takes null argument but as null is nothing,
// defaults to global

console.assert(ex === global);



// Exercise 6

ex = whatsThis.call(location);
// 'this' === location.
// call takes location argument. Sets location as 'this'

console.assert(ex === location);



// Exercise 7

ex = whatsThis.apply(location);
// 'this' === location.
// apply takes location argument. Sets location as 'this'

console.assert(ex === location);



// Exercise 8

ex = Ctor();
// 'this' === global.
// nothing to left of function

console.assert(global.hasOwnProperty('ownProperty') === true);



// Exercise 9

ex = Ctor.prototype.whatsThis();
// 'this' === Ctor.prototype.
// method is called from Ctor.prototype

console.assert(ex === Ctor.prototype); 



// Exercise 10

var ctorInstance = ex = new Ctor();
// 'this' === ctorInstance.
// a new Ctor() object is created that inherits whatsThis
// can't test because ex is being assigned the same new object



// Exercise 11

ex = ctorInstance.whatsThis();
// 'this' === ctorInstance.
// calls ctorInstance's whatsThis method

console.assert(ex === ctorInstance);


// Exercise 12

ex = obj.whatsThis.call(ctorInstance);
// 'this' === ctorInstance.
// call takes ctorInstance argument. sets ctorInstance to 'this'

console.assert(ex === ctorInstance);



// Exercise 13

ex = whatsThis.bind(obj.inner).call(location);
// 'this' === obj.inner.
// call takes location argument, however obj.inner has already
// been permanently bound to function

console.assert(ex === obj.inner);


