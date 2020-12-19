const whatIsInAName = (collection, source) =>
  collection
    .filter(item => 
      Object.keys(source)
        .every(key =>
          source[key] === item[key]
      )
  )

console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));
