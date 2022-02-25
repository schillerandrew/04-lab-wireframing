function colorQuestion() {
let colorQuestion = prompt("So this page has a brown background -- I dunno, I kinda like it, I think it kind of goes along with the bear theme. Do you want to change the color?");
    
    if (colorQuestion == "yes") {
        alert("Well too bad, I like it the way it is!")
    }
    if (colorQuestion == "no") {
            alert("I agree, the brown background is kinda cool.")
    }
    if (colorQuestion !== "yes" && colorQuestion != "no") {
        colorQuestion = prompt("Sorry, I didn't get that -- do you want to change the color?")
        if (colorQuestion == "yes") {
            alert("Well too bad, I like it the way it is!")
        } 
        if (colorQuestion == "no") {
            alert("I agree, the brown background is kinda cool.")
        }
    }
}

function nameQuestion() {
let nameQuestion = prompt("Also, could you type in your name down there? Everyone likes to be greeted by inanimate objects!");

    if (nameQuestion == "") {
        document.write("Welcome! I'm sorry if this interaction has been awkward -- I hope you like the rest of my site!")
    }
    else {
        document.write("Welcome " + nameQuestion + "! I'm sorry if this interaction has been awkward -- I hope you like the rest of my site!")
    }
}

function catQuestion() {
let catQuestion = prompt("Okay, maybe that color question was a bit out of line. Do you like cats? This page is about bears but it can also be about cats I guess.");
    
    if (catQuestion == "yes") {
    document.write("...and Cats?")
    }
    else {
    alert("Not crazy about cats? Geez you're kind hard to please -- how'd you even end up on my site in the first place?");
    }
}