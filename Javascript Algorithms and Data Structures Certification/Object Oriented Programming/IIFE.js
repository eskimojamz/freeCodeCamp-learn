//Immediately Invoked Function Expressions
//Module and Mixins

let funModule = ( () => {
  return {
    isCuteMixin: (obj) => {
      obj.isCute = () => { true }
    },
    singMixin: (obj) => {
      obj.sing = () => { console.log("Singing to an awesome tune") }
    }
  };
})();

console.log(funModule)
