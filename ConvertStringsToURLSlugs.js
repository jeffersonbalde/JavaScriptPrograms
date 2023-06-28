// Apply Functional Programming to Convert Strings to URL Slugs

const globalVariable = "Winter is coming";

function urlSlug(title){
    return title.toLowerCase().trim().split(/\s+/).join("-");
}

console.log(urlSlug(globalVariable));