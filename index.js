
const drivers = [
    "John",
    "Alice",
    "Bob",
    "Charlie"
];

function fuzzyMatch(drivers, letters) {
    return drivers.filter(driver => driver.startsWith(letters));
}

function findMatching(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
}


function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name);
}
