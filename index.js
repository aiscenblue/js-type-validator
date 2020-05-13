// In ES6 the new datatype Symbol was added. Nicely enough typeof returns "symbol" for it so no more logic is required.
// returns if a Symbol
function isSymbol(value) {
    return typeof value === 'symbol';
}

// Date isn't really a data type in javascript. But to know if something's a Date object is can be checked with instanceof.
// Returns if value is a date ObjectOf
function isDate(value) {
    return value instanceof Date;
}

// Errors in javascript are the same as "excemptions" in many other programming languages. They come in a couple different forms like for instance Error, TypeError and RangeError. An instanceof statement is enough for them all, but just to be extra sure we also check for the "message" property that occurs have.
// Returns if value is an error object
function isError(value) {
    return value instanceof Error && typeof value.message !== 'undefined';
}

//RegExp's are objects so the only thing needed to check is if the constructor is RegExp.
// Returns if a value is a regexp
function isRegExp(value) {
    return value && typeof value === 'object' && value.constructor === RegExp;
}

// For booleans typeof is enough since it returns "boolean" for both true and false.
// Returns if a value is boolean
function isBoolean(value) {
    return typeof value === 'boolean';
}

// Most times you don't need to check explicitly for null and undefined since they're both falsy values. However to do it below functions does the trick.
// Returns if a value is null
function isNull(value) {
    return value === null;
}

// returns if a value is undefined
function isUndefined(value) {
    return typeof value === 'undefined';
}

// Many things are objects in javascript. To know if a value is an object that can have properties and be looped through, its constructor can be compared to Object. kIt doesn't work for objects created from classes, then the instanceof operator can be used instead.
// Returns if a value is an object.
function isObject(value) {
    return value && typeof value === 'object' && value.constructor === Object;
}

// Functions are functions so here just typeof is enough
// Returns if a value is a function
function isFunction(value) {
    return typeof value === 'function';
}

// Arrays are not tru arrays like in java and in other languages. They're actually objects so typeof will return "object" for them. To know if something's really an array its constructor can be compared to Array.
// Returns if a value is an array
function isArray(value) {
    return value && typeof value === 'object' && value.constructor === Array;
}

// From typeof more things than just an ordinary number will return "number"like NaN and Infinity. To know if a value really is a number the function isFinite is also required.
// Returns if a value is really a number
function isNumber(value) {
    return typeof value === 'number' && isFinite(value);
}

// A string is always a string so this one is easy. Except if called with new (new String) typeof will instead return "object". So to also include those strings instanceof can be used.
// Returns if a value is a string
function isString(value) {
    return typeof value === 'string' || value instanceof String;
}

module.exports = {
    isString,
    isArray,
    isNumber,
    isFunction,
    isUndefined,
    isNull,
    isError,
    isRegExp,
    isSymbol,
    isDate,
}
