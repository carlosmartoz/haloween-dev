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
function handleChallenge() {
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
