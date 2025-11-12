let person = {
  name: "Felix",
  age: 28
}

function checkProperty(val) {
  if (val === undefined) return "Property does not exist."
  return "Property exists."
}


console.log(person.hasOwnProperty("name "));