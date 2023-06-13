//family member template
class familyMember {
    constructor(name, parents) {
        this.name = name;
        this.parents = parents;
    }
    childOf() {
        return this.parents.map(parent => parent.name).join(' & ') || "unknown";
    }
};

//generate actual members

//gen 0
const KingGeorgeVI = new familyMember(
    "King George VI", 
    []
);

const QueenEliz = new familyMember(
    "Queen Elizabeth I",
    []
);

//gen 1
const QueenElizII = new familyMember(
    "Queen Elizabeth II", 
    [KingGeorgeVI, QueenEliz]
);

const PrincePhil = new familyMember(
    "Prince Philip",
    []
);

//gen 2
const Charles = new familyMember(
    "Prince Charles", 
    [PrincePhil, QueenElizII]
);

const Diana = new familyMember(
    "Princess Diana",
    []
);

//gen 3
const PrinceWill = new familyMember(
    "Prince William", 
    [Charles, Diana]
);

const Catherine = new familyMember(
    "Duchess Catherine",
    []
);

//gen 4
const PrinceGeorge = new familyMember(
    "Prince George (of Cambridge)", 
    [Catherine, PrinceWill]
);

const PrincessCharlotte = new familyMember(
    "Princess Charlotte (of Cambridge)", 
    [Catherine, PrinceWill]
);

const PrinceLouis = new familyMember(
    "Prince Louis (of Cambridge)", 
    [Catherine, PrinceWill]
);

//Array definitions (split into 5 generations)
var gen0 = [KingGeorgeVI, QueenEliz];
var gen1 = [QueenElizII, PrincePhil];
var gen2 = [Charles, Diana];
var gen3 = [PrinceWill, Catherine];
var gen4 = [PrinceGeorge, PrincessCharlotte, PrinceLouis];

module.exports = {gen1, gen2, gen3};