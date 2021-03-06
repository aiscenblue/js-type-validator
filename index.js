/**
 * @description In ES6 the new datatype Symbol was added. Nicely enough typeof returns "symbol" for it so no more logic is required.
 * @returns if a Symbol
 *  */
function isSymbol(value) {
    return typeof value === 'symbol';
}

/**
 * @description Date isn't really a data type in javascript. But to know if something's a Date object is can be checked with instanceof.
 * @returns if value is a date ObjectOf
 * */
function isDate(value) {
    return value instanceof Date;
}

/**
 * @description Errors in javascript are the same as "exemptions" in many other programming languages.
 * They come in a couple different forms like for instance Error, TypeError and RangeError. An instanceof statement is enough for them all, but just to be extra sure we also check for the "message" property that occurs have.
 * @returns if value is an error object
 * */
function isError(value) {
    return value instanceof Error && typeof value.message !== 'undefined';
}

/**
 * @description RegExp's are objects so the only thing needed to check is if the constructor is RegExp.
 * @returns if a value is a regexp
 * */
function isRegExp(value) {
    return value && typeof value === 'object' && value.constructor === RegExp;
}

/**
 * @description For booleans typeof is enough since it returns "boolean" for both true and false.
 * @returns if a value is boolean
 * */
function isBoolean(value) {
    return typeof value === 'boolean';
}

/**
 * Most times you don't need to check explicitly for null and undefined since they're both falsy values.
 * However to do it below functions does the trick.
 * @returns if a value is null
 * */
function isNull(value) {
    return value === null;
}

/**
 * @returns if a value is undefined
 * */
function isUndefined(value) {
    return typeof value === 'undefined';
}

/**
 * @description Many things are objects in javascript.
 * To know if a value is an object that can have properties and be looped through,
 * its constructor can be compared to Object. kIt doesn't work for objects created from classes,
 * then the instanceof operator can be used instead.
 * @returns if a value is an object.
 * */
function isObject(value) {
    return value && typeof value === 'object' && value.constructor === Object;
}

/**
 * @description Functions are functions so here just typeof is enough
 * @returns if a value is a function
 * */
function isFunction(value) {
    return typeof value === 'function';
}

/**
 * @description Arrays are not tru arrays like in java and in other languages.
 * They're actually objects so typeof will return "object" for them.
 * To know if something's really an array its constructor can be compared to Array.
 * @returns if a value is an array
 * */
function isArray(value) {
    return value && typeof value === 'object' && value.constructor === Array;
}

/**
 * @description From typeof more things than just an ordinary number will return "number"like NaN and Infinity.
 * To know if a value really is a number the function isFinite is also required.
 * @returns if a value is really a number
 * */
function isNumber(value) {
    return typeof value === 'number' && isFinite(value);
}

/**
 * @description A string is always a string so this one is easy.
 * Except if called with new (new String) typeof will instead return "object".
 * So to also include those strings instanceof can be used.
 * @returns if a value is a string
 * */
function isString(value) {
    return typeof value === 'string' || value instanceof String;
}

/**
 * example: const firstName = "Jeff"
 * typeOf(firstName).is("string")
 * */
function typeOf(value) {
    function patternMatch(primitiveValue) {
        if (!primitiveValue)
            throw new Error("Value must not be undefined");
        else
            switch(primitiveValue.toLowerCase()) {
                case "string":
                    return isString(value);
                case "number":
                    return isNumber(value);
                case "array":
                    return isArray(value);
                case "function":
                    return isFunction(value);
                case "undefined":
                    return isUndefined(value);
                case "null":
                    return isNull(value);
                case "error":
                    return isError(value);
                case "regexp":
                    return isRegExp(value);
                case "symbol":
                    return isSymbol(value);
                case "date":
                    return isDate(value);
                case "boolean":
                    return isBoolean(value);
                case "object":
                    return isObject(value);
            }
    }
    return patternMatch;
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
    isBoolean,
    isObject,
    typeOf,
}
