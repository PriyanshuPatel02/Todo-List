
const express = require("express");
const bodyParser = require("body-parser");

const dateModule = require(__dirname + "/date.js"); // yeh locale present h isliyte isko access dirname likh ke kr rhe h
 // what this will do is we're saying we're requiring a moodule nd it's located at the current directory
//  console.log(dateModule());
const app = express();

let itemz = ["write Code", "Eat Healthy", "Enjoy day"];
let workItems = [];

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.set("view engine", "ejs");


app.get("/", function( request, response){  
  
    // var currentDay = today.getDay();

    // var day = "";

    // if( currentDay === 6 || currentDay === 0){
    //     // response.write("<h1> Yayy it's the weekend!! </h1>");
    //     day = "Weeknd!"
    //     // response.render("lists", {kindOfDayy : day});
    // }
    // else{
    //     day = "Weekday!"
    //     //  response.write("<p1> It is not the weekend</p1>");
    //     // response.write("<h2>Boo! I have to work!!</h2>");
       
    //     // response.send();
    //     // response.sendFile(__dirname + "/index.html")
    // }
    // switch(currentDay){
    //     case 0:
    //         day = "Sunday";
    //         break;
    //     case 1:
    //         day = "Monday";
    //         break;  
    //     case 2:
    //         day = "Tuesday";
    //         break;  
    //     case 3:
    //         day = "Wednesday";
    //         break;
    //     case 4 :
    //         day = "Thursday";
    //         break;
    //     case 5 :
    //         day = "Friday";
    //         break; 
    //     case 6 :
    //         day = "Saturday";
    //         break;
    //     default:
    //         console.log("Error : Current day is equal to :" + currentDay);

    // }

    // var options1 = {
    //     weekday : "long",
    //     day : "numeric",
    //     month : "2-digit",
    //     hour : "2-digit"
    // };
    // var day = today.toLocaleDateString( "en-US" , options1)
    let day = dateModule.getDatee(); // humre pass module h dateModule naam ki which binds all of the exports to this const called DateModule 
    // and then down here we call the func. thats bound to tht const. datModule nd we activate our getDatee func. .. and we have result stored inside day

       response.render("lists", {listTitle : day, newListItemzz : itemz});  // variable(key ) : value
});

/// post requests
app.post("/", function(req, res){
    // console.log(req.body)
    // res.sendFile(__dirname + "/lists.ejs")
    // console.log("Yes your to do list is add successfully!!!")
    let item = req.body.newItem; // tap into" req. "and looking through the "body" of the post req.
    // & we search for the value of something called "newItem."
    // console.log(item);
    if ( req.body.listname === "Work List"){
        workItems.push(item) /// workItems array me push kr do item ki value
        res.redirect("/work");  // yeha se redirect ho kr app.get("/work") wali line me pahuch jyenge
    }

    else{
        itemz.push(item);  // then we can append that item to our array called itemz
        res.redirect("/");
    }

});
app.get("/work", function(req, res){
    res.render("lists", {listTitle: "Work List" , newListItemzz : workItems})
})

app.post("/work", function( req, res){
    let item = req.body.newItem;// we push here new item // that user added
    workItems.push(item);  
    res.redirect("/work");  /// we go over to line 89
})

app.get("/about" , function( req, res){
    res.render("about")
})



app.listen( 3001, function(){
    console.log("Port 3001 Server is getting Started"); 
})

                   // *********SUMMARY*********//
// we first load up our homepage app.get('/').. we go through this route and we render our list .ejs(line 72)
// passing in two variables : on called kindofdayy nd another call newListItems 

// Now newListItems is set to equal the items array which starts off containing three StringList,write Code", "Eat Healthy", "Enjoy day 
// and this gets passed into the list.ejs under this variable name newListItems

// over here we have a "for LOOP" that loops through the entire length of the newListItems array  and 
// it renders a new" li" for each item inside the array.

// line 29 in ejs when  a user addds a "newitem "through the text input then that gets saved under the var. name: newItem
// and we trigger a post request method = "post" to the homeroute action="/"
// after that we caught by this block of code 

// app.post("/", function(req, res){
//     var item = req.body.newItem; // tap into" req. "and looking through the "body" of the post req.
//     itemz.push(item);  // then we can append that item to our array called itemz
//     res.redirect("/");
//  so whatever it is that the user typed inside her "req.body.newItem"
//  then we save it to a var. called "item" and we add that item to our array" items" and then
//  redirect to home route app.get()
//  kyuki new item add kr diye hai hum toh 
//  res.render me jaake update kr denge newListItem : items ko.Code


//  this is really fundamental part of templating nd that is passing data through from the server 
//  to our template and populating it with dynamic content
