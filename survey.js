const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const profile = [];

rl.question("What's your name?", (answer) => {
  profile.push(answer);
  rl.question("What's an activity you like doing?", (answer) => {
    profile.push(answer);
    rl.question("What do you listen to while doing that?", (answer) => {
      profile.push(answer);
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.)", (answer) => {
        profile.push(answer);
        rl.question("What's your favourite thing to eat for that meal?", (answer) => {
          profile.push(answer);
          rl.question("Which sport is your absolute favourite?", (answer) => {
            profile.push(answer);
            rl.question("What is your superpower? In a few words, tell us what you are amazing at!", (answer) => {
              profile.push(answer);
              console.log(profile.join(' '));
              rl.close();
            });
          });
        });
      });
    });
  });
});