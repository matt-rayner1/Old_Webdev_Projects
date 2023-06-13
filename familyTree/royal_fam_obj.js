//Object definitions

var KingGeorgeVI = {
  name: "King George VI",
  parents: ["unknown", "unknown"],
  childOf: function() {
    return this.parents.join(' & ');
  }
}

var QueenElizII = {
  name: "Queen Elizabeth II",
  parents: ["King George VI", "Queen Elizabeth I"],
  childOf: function() {
    return this.parents.join(' & ');
  }
}

var Charles = {
  name: "Prince Charles",
  parents: ["Prince Philip", "Queen Elizabeth II"],
  childOf: function() {
    return this.parents.join(' & ');
  }
}

var PrinceWill = {
  name: "Prince William",
  parents: ["Prince Charles", "Princess Diana"],
  childOf: function() {
    return this.parents.join(' & ');
  }
}

var PrinceGeorge = {
  name: "Prince George (of Cambridge)",
  parents: ["Duchess Catherine", "Prince William"],
  childOf: function() {
    return this.parents.join(' & ');
  }
}

var PrincessCharlotte = {
  name: "Princess Charlotte (of Cambridge)",
  parents: ["Duchess Catherine", "Prince William"],
  childOf: function() {
    return this.parents.join(' & ');
  }
}

var PrinceLouis = {
  name: "Prince Louis (of Cambridge)",
  parents: ["Duchess Catherine", "Prince William"],
  childOf: function() {
    return this.parents.join(' & ');
  }
}

//Array definitions (split into 3 generations)

var gen1 = [Charles]
var gen2 = [PrinceWill]
var gen3 = [PrinceGeorge, PrincessCharlotte, PrinceLouis]