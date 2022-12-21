
function findMatching(drivers, string) {
    return drivers.filter(function (name) {
        if (name.toLowerCase() === string.toLowerCase()) {
            return name;
        }
    })
}

function fuzzyMatch(drivers, string) {
    return drivers.filter(function (nameBegins) {
        if (nameBegins.startsWith(string)) {
            return nameBegins;
        }
    })
}


function matchName(drivers, string) {
    return drivers.filter(function (name) {
        if (name.name === string) {
            return drivers;
        }
    })
}