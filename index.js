// Challenge #1
function createMagicPotion(potions, target) {
  // Logs
  console.log("Potions:", potions);
  console.log("Target:", target);

  // Result
  let result = [];

  // Sort the potions
  for (let i = 0; i < potions.length; i++) {
    // Get potion 1
    let potion1 = potions[i];

    // Loop through the potions
    for (let j = i + 1; j < potions.length; j++) {
      // Get potion 2
      let potion2 = potions[j];

      // Check if the sum of the potions is equal to the target and the second potion is less than the second potion
      if (potion1 + potion2 === target) {
        // Get the result
        result = result[1] < j ? result : [i, j];
      }
    }
  }

  // Return the result
  return result.length > 0 ? result : undefined;
}

// Function to handle the challenge #1
function handleChallenge1() {
  // Potions
  const potions = [10, 5, 2, 3, 7, 5];

  // Target
  const target = 10;

  // Result
  const result = createMagicPotion(potions, target);

  // Result log
  console.log("Result:", result);

  // Show alert
  alert(`Result: ${result}`);
}

// Challenge #2
function battleHorde(zombies, humans) {
  // Logs
  console.log("Zombies:", zombies);
  console.log("Humans:", humans);

  // Aditional power humans
  let additionalPowerHumans = 0;

  // Aditional power zombies
  let additionalPowerZombies = 0;

  // Final score humans
  let scoreHumans = 0;

  // Final score zombies
  let scoreZombies = 0;

  // Result
  let result = "";

  // Check the battle result
  for (i = 0; i < zombies.length; i++) {
    console.log(
      "Zombie:",
      parseInt(zombies[i]) + additionalPowerZombies,
      "Human:",
      parseInt(humans[i]) + additionalPowerHumans
    );
    // Check if the zombie is greater than the human
    if (
      parseInt(zombies[i]) + additionalPowerZombies >
      parseInt(humans[i]) + additionalPowerHumans
    ) {
      // Add the additional power
      additionalPowerZombies += parseInt(zombies[i]) - parseInt(humans[i]);

      // Add point to the final score
      scoreZombies++;
    } else if (
      parseInt(zombies[i]) + additionalPowerZombies <
      parseInt(humans[i]) + additionalPowerHumans
    ) {
      // Add the additional power
      additionalPowerHumans += parseInt(humans[i]) - parseInt(zombies[i]);

      // Add point to the final score
      scoreHumans++;
    } else {
      additionalPowerHumans = 0;
      additionalPowerZombies = 0;
    }
  }

  // Results
  if (scoreHumans > scoreZombies) {
    result = `${scoreHumans}h`;
  } else if (scoreHumans < scoreZombies) {
    result = `${scoreZombies}z`;
  } else if (scoreHumans === scoreZombies) {
    result = "x";
  } else {
    result = "x";
  }

  // Return
  return result;
}

// Function to handle the challenge #2
function handleChallenge2() {
  // Zombies
  const zombies = "321";

  // Humans
  const humans = "123";

  // Result
  const result = battleHorde(zombies, humans);

  // Result log
  console.log("Result:", result);

  // Show alert
  alert(`Result: ${result}`);
}
