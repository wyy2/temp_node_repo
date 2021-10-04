// Modules
// ` sitos kabutes padaro kad galime naudoti kintamuosius


// const {john, peter} = require('./4-names')
const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavor')
const obj = require('./7-object-export')
console.log(obj);

// console.log(names);
sayHi('susan')
sayHi(names.john)
sayHi(names.peter)

obj.sayBye();

//require('./7-mind-grenade')