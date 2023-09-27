const farmAnimals = 'cow horse sheep pig chicken';

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
};

const nestedMuppet = {
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'
};

// Strings

// 1. Use destructuring to assign appropriate variables based on the sounds animals make.
let animalSplit = farmAnimals.split(' ');
let [moo,neigh,baa,oink,cluck] = animalSplit;
// 2. Bolt the horse wandered off, so just give us four animals, and let's name them bessie, dolly, babe, and little.
let elementToRemove= animalSplit.indexOf("horse");
if(elementToRemove !== -1){
   animalSplit.splice(elementToRemove,1)
}
let [bessie, dolly, babe, little] = animalSplit
// 3. Little the chicken had to go back to the coop, so now we're left with three. Let's use color variables of blackAndWhite, black, and pink.
// Arrays
let removeChicken = animalSplit.indexOf('chicken')
if(removeChicken !== -1){
  animalSplit.splice(removeChicken,1)
}
let[blackAndWhite,black,pink] = animalSplit;
// 4. Use destructuring to assign appropriate variables using the color names.
const [red, orange, yellow, green, blue, indigo, violet] = colors;

// 5. Some people have a really hard time picking out indigo, so let's leave that one out, using the first letter of each color as the variable names.
const[r,o,y,g,b,i,v] = colors
// 6. But wait! Indigo is now feeling *super* left out. Let's only assign indigo using indg. 
const[,,,,,indg,] = colors
// Objects
// 7. Use destructuring to assign all variables using the keys as the variable names

const [muppetName, color, song, job, partner] = muppet;
// 8. Use destructuring to assign songs 2 and 4, and Kermit's job and partner
const [, , song2, , song4, kermitJob, , kermitPartner] = muppet;