/*
What we need to change:
Day of Week - day
Coffee Name - name
Coffee Pic - pic
Alt tag - alt
Coffee Description - desc
Color for coffee - color
*/

let myDate = new Date();
let myDay = "";
let today = "";
let coffee = "";
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

if(urlParams.has('day')){//Use querry string
    myDay = urlParams.get('day');
    myDay = parseInt(myDay);
}else{//Use date object
    myDay = myDate.getDay();
}

function coffeeTemplate(coffee){
    let myReturn = "";

    myReturn = `
        <p>
            <img src="${coffee.pic}" alt=" ${coffee.alt}" id="coffee" />
            <strong id="coffee-highlight" class="feature">${coffee.day}'s Coffee Special:</strong> ${coffee.day}'s daily coffee special is <strong>${coffee.name}</strong>, ${coffee.desc}
        </p>
    `;

    return myReturn;

}

switch(myDay){

    case 0:
        today = "Sunday";

        coffee = {
            color: "yellow",
            name: "Caramel Latte",
            pic: "images/caramel-latte.jpg",
            alt: "A pic of caramel latte",
            day: "Sunday",
            desc: `Just a whole latte love!`
        };
    break;

    case 1:
        today = "Monday";

        coffee = {
            color: "lavender",
            name: "Bubble Tea",
            pic: "images/bubble-tea.jpg",
            alt: "Bubble tea image",
            day: "Monday",
            desc: `Best Bubble Tea!`
        };
    break;

    case 2:
        today = "Tuesday";

        coffee = {
            color: "brown",
            name: "Cold Brew",
            pic: "images/cold-brew.jpg",
            alt: "A pic of Cold Brew Coffee",
            day: "Tuesday",
            desc: `For the coffee lovers! A nice glass of cold brew.`
        };
    break;

    case 3:
        today = "Wednesday";

        coffee = {
            color: "black",
            name: "Black Drip Coffee",
            pic: "images/drip.jpg",
            alt: "A pic of a drip coffee",
            day: "Wednesday",
            desc: `Keep it nice & simple!`
        };
    break;

    case 4:
        today = "Thursday";

        coffee = {
            color: "pink",
            name: "Frappaccino",
            pic: "images/frappaccino.jpg",
            alt: "A picture of frappaccino",
            day: "Thursday",
            desc: `For your sweet tooth`
        };
    break;

    case 5:
        today = "Friday";

        coffee = {
            color: "blue",
            name: "Mocha",
            pic: "images/mocha.jpg",
            alt: "A pic of Mocha",
            day: "Friday",
            desc: `A cute cup of mocha`
        };
    break;

    case 6:
        today = "Saturday";

        coffee = {
            color: "orange",
            name: "Pumpkin Spice Latte",
            pic: "images/pumpkin-spice-latte.jpg",
            alt: "A pic of Pumpkin Spice Latte",
            day: "Saturday",
            desc: `Spooky seasons favorite drink!.`
        };
    break;

    
}

//console.log(urlParams);

document.getElementById("coffee-output").innerHTML = coffeeTemplate(coffee);

document.getElementsByTagName("HTML")[0].style.backgroundColor = coffee.color;

document.getElementById("coffee-highlight").style.color = coffee.color;

//alert("Hi, it's " + today)