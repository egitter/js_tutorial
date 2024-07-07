let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];

// Returns a URL-friendly version of a string.
//   Example: "North Dakota" -> "north-dakota"
function urlify(string) {
  return string.toLowerCase().split(/\s+/).join("-");
}

// urls: Imperative version
function imperativeUrls(elements) {
  let urls = [];
  elements.forEach(function(element) {
    urls.push(urlify(element));
  });
  return urls;
}
console.log(imperativeUrls(states));

// urls: Functional version
function functionalUrls(elements) {
  return elements.map(element => urlify(element));
}
console.log(functionalUrls(states));


// urls: Functional version
function functionalFQUrls(elements) {
  return elements.map(element => "https://example.com/" + urlify(element));
}
console.log(functionalFQUrls(states));



// singles: Imperative version
function imperativeSingles(elements) {
  let singles = [];
  elements.forEach(function(element) {
    if (element.split(/\s+/).length === 1) {
      singles.push(element);
    }
  });
  return singles;
}
console.log(imperativeSingles(states));

// singles: Functional version
function functionalSingles(elements) {
  return elements.filter(element => element.split(/\s+/).length === 1);
}
console.log(functionalSingles(states));

// return the Dakotas: one using String#includes
function filterByStringIncludes(states) {
  return states.filter(state => state.includes("Dakota"));
}
console.log(filterByStringIncludes(states));

// one using a regex that tests for the length of the split array being 2
function filterByTwoTokensSeparatedByWhiteSpace(places){
  return places.filter(place => place.split(/\s+/).length === 2);
}
console.log(filterByTwoTokensSeparatedByWhiteSpace(states));

// lengths: Imperative solution
function imperativeLengths(elements) {
  let lengths = {};
  elements.forEach(function(element) {
    lengths[element] = element.length;
  });
  return lengths;
}
console.log(imperativeLengths(states));

// lengths: Functional solution
function functionalLengths(elements) {
  return elements.reduce((lengths, element) => {
                          lengths[element] = element.length;
                          return lengths;
                        }, {});
}
console.log(functionalLengths(states));

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


// sum: Imperative solution
function imperativeSum(elements) {
  let total = 0;
  elements.forEach(function(n) {
    total += n;
  });
  return total;
}
console.log(imperativeSum(numbers));

// sum: Functional solution
function functionalSum(elements) {
  return elements.reduce((total, n) => { return total += n; });
}
console.log(functionalSum(numbers));

// returns the product of all the elements in an array
function functionalProductOfElements(elements){
  return elements.reduce((product, n) => {return product *= n;});
}
console.log(functionalProductOfElements(numbers));

// one liner
function functionalLengths(elements) {
  return elements.reduce((lengths, element) => { lengths[element] = element.length;  return lengths; }, {});
}
console.log(functionalLengths(states));
