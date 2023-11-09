export const printStrongNess = (input_string) => {
  if (input_string.length <= 0) {
    console.log("No password Available");
  } else {
    const n = input_string.length;
    // Checking lower alphabet in string
    let hasLower = false;
    let hasUpper = false;
    let hasDigit = false;
    let specialChar = false;
    let sequence = false;
    const normalChars =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890 ";

    for (let i = 0; i < n; i++) {
      if (input_string[i] >= "a" && input_string[i] <= "z") {
        hasLower = true;
      }
      if (input_string[i] >= "A" && input_string[i] <= "Z") {
        hasUpper = true;
      }
      if (input_string[i] >= "0" && input_string[i] <= "9") {
        hasDigit = true;
      }
      if (!normalChars.includes(input_string[i])) {
        specialChar = true;
      }
    }

    // Strength of password
    let strength = "Weak";
    let color = "red";
    if (hasLower && hasUpper && hasDigit && specialChar && n >= 8) {
      strength = "Strong";
      color = "green";
    } else if ((hasLower || hasUpper) && specialChar && n >= 6) {
      strength = "Moderate";
      color = "yellow";
    }

    console.log(`Strength of password: ${strength}`);
    return strength;
  }
};
