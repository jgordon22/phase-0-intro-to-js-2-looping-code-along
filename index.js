// Code your solutions in this file
//for(let age = 30; age < 40; age ++) {
    //console.log(`I'm ${age} years old. Happy birthday to me!`); 


//const gifts = ["teddy bear", "drone", "doll"];//

//function wrapGifts(gifts) {
  //  for (let i =0; i < gifts.length; i++) {
    //    console.log(`Wrapped ${gifts[i]} and added a bow!`);
        
    //}
    //return gifts;
//}

//wrapGifts(gifts);

//FOR FUNCTION
const name = ['', '', ''];
const event = "";

function writeCards(values, event) {
  let cards = [];
  for (let i =0; i < values.length; i++) {
        console.log(`Thank you, ${values[i]}, for the wonderful ${event} gift!`);
        cards.push(`Thank you, ${values[i]}, for the wonderful ${event} gift!`)
    }
    return cards;
}

//writeCards(name, event);


function countDown(){
  let countMeDown = 10;
  while (countMeDown >= 0) {
    console.log(countMeDown--);
  }
}

countDown();


//WHILE FUNCTION
//const name = [''];
//const event = '';

//function writeCards(name, event) {
  //  let i = 0;
    //while (i < name.length) {
      //  console.log( `Thank you, ${name[i]}, for the wonderful ${event} gift!`);
        //i++;
    //}
    //return name;
    //}


//writeCards(["Guadalupe", "Ollie", "Aki"], "surprise");
