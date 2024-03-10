
// module.exports = "Namaste JS";
module.exports.getDatee =getDatee ;
// console.log( module); // yeh module nodejs me docs se liye hai iska kaam hai kisi dursi file ko access krne ke way ko ye sorted krta hai
function getDatee(){

let today = new Date();
let options = {
    weekday : "long",
    day : "numeric",
    month : "long"
};
let day = today.toLocaleDateString( "en-US" , options)

return day;

}
// console.log(module.exports);


module.exports.getDayy =getDayy ;
// console.log( module); // yeh module nodejs me docs se liye hai iska kaam hai kisi dursi file ko access krne ke way ko ye sorted krta hai
function getDayy(){

let today = new Date();
let options = {
    weekday : "long",
   
};
let day = today.toLocaleDateString( "en-US" , options)

return day;

}


console.log(module.exports);