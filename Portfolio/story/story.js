
const form = document.getElementById('myForm');

// functions to fill in story
function findgender(gender){
    switch(gender){
        case "male": return "boy";
        case "female": return "girl";
        case "neither": return "person";
        case "both": return "person";
    }
}

function findpronoun(gender){
    switch(gender){
        case "male": return "He";
        case "female": return "She";
        case "neither": return "They";
        case "both": return "They";
    }
}

function findownership(gender){
    switch(gender){
        case "male": return "his";
        case "female": return "her";
        case "neither": return "their";
        case "both": return "their";
    }
}

function findplace(animal){
    switch(animal){
        case "bear": return "mountains";
        case "dolphin": return "beach";
        case "eagle": return "cliffs";
        case "duck": return "park";
    }
  }

function findactivity(animal){
    switch(animal){
        case "bear": return "go on a long hike";
        case "dolphin": return "swim in the ocean";
        case "eagle": return "go hang gliding";
        case "duck": return "take a long walk";
    }
  }

function findrelax(animal){
    switch(animal){
        case "bear": return "under a tree";
        case "dolphin": return "on the sand";
        case "eagle": return "gliding on the wind";
        case "duck": return "on a bench";
    }
  }

function findnumpeople(introextro){
    if (introextro == "introvert"){
        return Math.floor((Math.random() * 5)) + 2;
    }
    else {
        return Math.floor((Math.random() * 50)) + 5;
    }
}

function findparties(introextro){
    if (introextro == "introvert"){
        return " did NOT like ";
    }
    else {
        return " loved ";
    }
}

function findpreference(introextro, animal){
    if (introextro == "introvert"){
        switch(animal){
            case "bear": return '\"Maybe we should go to the lake instead.\"  ';
            case "dolphin": return '\"I know another spot a few miles down.  Let\'s go there insteead.\" ';
            case "eagle": return '\"There are too many people here.  Let\'s go parasailing instead.\"  ';
            case "duck": return '\"I didn\'t really want to walk in the park anyway.  Let\'s go to the lake instead.\"  ';
        }
    }
    else {    
        switch(animal){
            case "bear": return '\"Dibs on that hottie over there!\"  ';
            case "dolphin": return '\"Do you think they\'ll let us join thier volleyball game?\"  ';
            case "eagle": return '\"The more, the merry! Let\'s join in.\"  ';
            case "duck": return '\"Ooh, I love cake! Let\'s introduce ourseves.\"  ';
    }
    }
}

function findsothey(introextro, animal){
    if (introextro == "introvert"){
        switch(animal){
            case "bear": return "left for the lake.  On the way, they found a new trail where there were no people.  They were both very excited to find a beautiful new place to hike.";
            case "dolphin": return "went to a more secluded beach.   They were excited to find some sea turtles napping on the sand. ";
            case "eagle": return "headed for the shore. But on the way, they spotted a sign advertizing parachuting lessons. They agreed to try it with a look, a smile, and a wink. ";
            case "duck": return "went for a swim in the lake.";
        }
    }
    else {    
        switch(animal){
            case "bear": return "introduced themselves to the group and joined in. ";
            case "dolphin": return "kicked some volleyball butt and shared some cake with new friends. ";
            case "eagle": return "grabbed thier hang gliders, introduced themselves to the partygoers and had a great day in the sky.";
            case "duck": return "joined the party and made new friends.";
    }
    }
}

function daysago(dow){
    today = new Date();
    downum = today.getDay();
    let favday = 0
    switch(dow){
        case "Monday": 
            favday = 1;
            break;
        case "Tuesday": 
            favday = 2;
            break;
        case "Wednesday": 
            favday = 3;
            break;
        case "Thursday": 
            favday = 4;
            break;
        case "Friday": 
            favday = 5;
            break;
        case "Saturday": 
            favday = 6;
            break;
    }
    if (downum <= favday){downum += 7}
    numdays = Math.abs(downum - favday);
    //if (numdays == 0){return 7;}
    //else {return numdays;}
    return numdays;

}






form.addEventListener('submit', function (event) {
    event.preventDefault();
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
    
    
    form.style.display = 'none'; //hides the form after submit to make room for the story.
    
    
    // load the DOM


    let para1 = document.getElementById("paragraph1");
    let para2 = document.getElementById("paragraph2");
    let para3 = document.getElementById("paragraph3");
    let para4 = document.getElementById("paragraph4");
    let para5 = document.getElementById("paragraph5");
    let title = document.getElementById("title");

    let name = formData.get("name");
    let gender = formData.get("gender");
    let dow = formData.get("dow");
    let friend = formData.get("friend");
    let animal = formData.get("animal");
    let food = formData.get("food");
    let treat = formData.get("treat");
    let drink = formData.get("drink");
    let introextro = formData.get("introextro");
    let place = findplace(animal);
    




    // Print the story
    title.textContent = name + " and " + friend + "\'s Great Adventure"

    para1.textContent = "Once upon a time, not so very long ago, there was a " + findgender(gender) +" named " + name + ".  " 
        + findpronoun(gender) + " loved going to the " + place + ".";

    para2.textContent = "Last "+ dow + ", " + name + " decided to go to the " + place + ".  "
        + findpronoun(gender) + " planned a fun outing with " + findownership(gender) + " best friend,  " + friend + ".  " 
        + friend + " also loved the " + place + ". "
        + "They were going to " + findactivity(animal) + ", relax " + findrelax(animal) + ", and eat a picnic feast of " + food + " and " + drink + ".";
    
    para3.textContent = "Things didn\’t go as planned, however. When they arrived at the " + place + ", there was already a party going on!  " 
        + "There were " + findnumpeople(introextro) + " people!  "
        + name + findparties(introextro) + "parties.  " 
        + findpronoun(gender) + " looked at " + friend + " and said " + findpreference(introextro,animal) + friend + " agreed, so they " + findsothey(introextro, animal);
    
    para4.textContent = "At the end of the day, as they headed for home, they stopped for " + treat + ", and talked about what a great day they had.";

    para5.textContent = "But that was " + daysago(dow) + " days ago. " + name + " and " + friend + " are already looking forward to next " + dow + "."


});



