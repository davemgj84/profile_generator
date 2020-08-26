const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const profile = {};

rl.question("What's your name? => ", (answer1) => {
  profile[1] = answer1;
  rl.question("What's your hero class? (Wizard, Barbarian, Ranger, Thief, Knight, Battle Mage, Scholar, Rogue, Coder) => ", (answer2) => {
    profile[2] = answer2;
    rl.question("Where are you from?", (answer3) => {
      profile[3] = answer3;
      rl.question("What is your weapon of choice? (wand, axe, bow, dagger, sword, orb, grimoire, crossbow, mechanical keyboard) => ", (answer4) => {
        profile[4] = answer4;
        rl.question("Do you fight against good or evil", (answer5) => {
          profile[5] = answer5;
          rl.question("How do you approach a problem or challenge? (boldly, cautiously, sneakily, bravely, creatively, methodically, magically) => ", (answer6) => {
            profile[6] = answer6;
            rl.question("What is your superpower? => ", (answer7) => {
              profile[7] = answer7;
              console.log(`${profile[1]} the ${profile[2]}, hailsfrom the far distant lands of ${profile[3]}. \nBrandishing a powerful ${profile[4]}, fighting against the reign of ${profile[5]}. \n${profile[1]} ${profile[6]}, overcomes the powers of ${profile[5]} using the immense power of ${profile[7]} to triumph.`);
              rl.close();
            });
          });
        });
      });
    });
  });
});