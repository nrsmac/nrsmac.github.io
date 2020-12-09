class Visitor {
  constructor(id, firstName, lastName, address, city, state, zip, email, phone, methodFound) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.address = address;
    this.city = city;
    this.state = state;
    this.zip = zip;
    this.email = email;
    this.phone=phone;
    this.methodFound = methodFound;
  }

  getName() {
    return this.firstName + " " + this.lastName;
  }
}

let visitors = [
  new Visitor(0,"Noah","Schill","500m E de Antigua Santa Barbara", "Escazu", "San Jose", "84097", "10819829@my.uvu.edu", "8012516619", "google"),
  new Visitor(1, "Gareth", "Reynolds", "235 Crown St.", "Chicago", "IL", "123455", "gareth@dollop.com", "1234567890", "friend")
]

function modelAddVisitor(visitor) {//adds new visitor object to your array
  newVisitor = new Visitor(generateId(), visitor.firstName, visitor.lastName, visitor.address, visitor.city, visitor.state, visitor.zip, visitor.email, visitor.phone, visitor.methodFound);
  visitors.push(newVisitor);
}
function modelDeleteVisitor(id) {//removes visitor object with given 'id' from array
  let foundVisitor = findVisitor(id);
  if (foundVisitor) {
    visitors.splice(visitors.indexOf(foundVisitor), visitors.indexOf(foundVisitor) + 1);
  }
}
function findVisitor(id) {//returns visitor object with given 'id' from array
  return visitors[id]
}
function findVisitorIndex(id) {//returns index in the array of the visitor object with given 'id'.  Handy when trying to delete an object
  let foundVisitor = findVisitor(id);
  return visitors.indexOf(foundVisitor);
}
function modelUpdateVisitor(visitor) {//finds and updates a visitor object a your array

}   //Only for extra credit 'edit' function

function generateId() { //Generates a unique ID for the model.
  id = 0
  for(var visitor of visitors) {
    if (visitor.id != id) {
      break;
    } else {
      id++;
    }
  }
  return id;
}
