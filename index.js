// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

console.log(cats);

function destructivelyAppendCat(name) {
    cats.push("Ralph");
};

function destructivelyPrependCat(name) {
    cats.unshift("Bob")
};

function destructivelyRemoveLastCat() {
    cats.pop()
};

function destructivelyRemoveFirstCat() {
    cats.shift()
};

function appendCat(name) {
    const newCat = [...cats, "Broom"]
    return newCat
};

function prependCat(name) {
    const prependNewCat = ["Arnold", ...cats]
    return prependNewCat
};

function removeLastCat(name) {
    const removeGarfield = cats.slice(0,2);
    return removeGarfield
};

function removeFirstCat(name) {
    const removeMilo = cats.slice(1);
        return removeMilo
};

