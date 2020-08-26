const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const hero = () => {

  rl.question("What's your name? => ", (name) => {
    rl.question("What's your hero class? (Wizard, Barbarian, Ranger, Thief, Knight, Battle Mage, Scholar, Rogue, Coder) => ", (hero) => {
      rl.question("Where are you from? => ", (from) => {
        rl.question("What is your weapon of choice? (wand, axe, bow, dagger, sword, orb, grimoire, crossbow, mechanical keyboard) => ", (weapon) => {
          rl.question("Do you fight against good or evil => ", (nemesis) => {
            rl.question("How do you approach a problem or challenge? (boldly, cautiously, sneakily, bravely, creatively, methodically, magically) => ", (approach) => {
              rl.question("What is your superpower? => ", (power) => {
                rl.question("If you defeat your enemies, what do you desire most? => ", (desire) => {
                  console.log(`${name} the ${hero}, hails from the far distant lands of ${from}. \nBrandishing a powerful ${weapon}, fighting against the reign of ${nemesis}. \n${name} ${approach} overcomes the powers of ${nemesis} using the immense power of ${power} to triumph. ${name} returns to ${from}, proclaimed a hero to all. \nYou are rewarded with all the ${desire} that you can imagine!`);
                  rl.close();
                });
              });
            });
          });
        });
      });
    });
  });

};

hero();

module.exports = hero;