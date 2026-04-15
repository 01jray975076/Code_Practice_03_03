
// SECTION 1 — DOM ELEMENTS These lines grab HTML elements so JavaScript can read or change them.js
const passwordInput = document.getElementById("password");
const lengthSlider = document.getElementById("length");
const lengthDisplay = document.getElementById("length-value");
const uppercaseCheckbox = document.getElementById("uppercase");
const lowercaseCheckbox = document.getElementById("lowercase");
const numbersCheckbox = document.getElementById("numbers");
const symbolsCheckbox = document.getElementById("symbols");
const generateButton = document.getElementById("generate-btn");
const copyButton = document.getElementById("copy-btn");
const strengthBar = document.querySelector(".strength-bar");
const strengthText = document.querySelector(".strength-container p");
const strengthLabel = document.getElementById("strength-label");
// SECTION 2 — CHARACTER SETS These strings contain the characters your generator can use.
const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
const numberCharacters = "0123456789";
const symbolCharacters = "!@#$%^&*()-_=+[]{}|;:,.<>?/";
// SECTION 3 — SLIDER EVENT (Updates Length Display) js
lengthSlider.addEventListener("input", () => {
  lengthDisplay.textContent = lengthSlider.value;
});
// SECTION 4 — GENERATE BUTTON CLICK HANDLER
generateButton.addEventListener("click", makePassword);
// SECTION 5 — MAIN PASSWORD GENERATION LOGIC js
// What this section does Reads user settings (length + checkboxes). 
// Makes sure at least one character type is selected. Calls the password generator function. 
// Displays the password. Updates the strength meter. This is the heart of the app.
function makePassword() {
  const length = Number(lengthSlider.value);
  const includeUppercase = uppercaseCheckbox.checked;
  const includeLowercase = lowercaseCheckbox.checked;
  const includeNumbers = numbersCheckbox.checked;
  const includeSymbols = symbolsCheckbox.checked;
  if (!includeUppercase && !includeLowercase && !includeNumbers && !includeSymbols) {
    alert("Please select at least one char type.");
    return;
  }
  const newPassword = createRandomPassword(
    length,
    includeUppercase,
    includeLowercase,
    includeNumbers,
    includeSymbols
  );
  passwordInput.value = newPassword;
  updateStrengthMeter(newPassword);
}
// SECTION 6 — STRENGTH METER LOGIC
// What this section does Tests the password for uppercase, lowercase, numbers, symbols.
// Calculates a score based on length + variety. Updates the strength bar width and color.
// Updates the text label (“Weak”, “Medium”, “Strong”). This is a custom scoring system you can tweak anytime.
function updateStrengthMeter(password) {
  const passwordLength = password.length;
  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasNumbers = /[0-9]/.test(password);
  const hasSymbols = /[!@#$%^&*()-_=+[\]{}|;:,.<>?]/.test(password);
  let strengthScore = 0;
  strengthScore += Math.min(passwordLength * 2, 40);
  if (hasUppercase) strengthScore += 15;
  if (hasLowercase) strengthScore += 15;
  if (hasNumbers) strengthScore += 15;
  if (hasSymbols) strengthScore += 15;
  if (passwordLength < 8) {
    strengthScore = Math.min(strengthScore, 40);
  }
  const safeScore = Math.max(5, Math.min(100, strengthScore));
  strengthBar.style.width = safeScore + "%";
  let strengthLabelText = "";
  let barColor = "";
   if (strengthScore < 40) {
    barColor = "#fc8181";
    strengthLabelText = "Weak";
  } else if (strengthScore < 70) {
    barColor = "#fbd38d";
    strengthLabelText = "Medium";
  } else {
    barColor = "#68d391";
    strengthLabelText = "Strong";
  }
  strengthBar.style.backgroundColor = barColor;
  strengthLabel.textContent = strengthLabelText;
}
// SECTION 7 — RANDOM PASSWORD GENERATOR
// What this section does Builds a pool of allowed characters. 
// Randomly picks characters until the password reaches the chosen length.
// Returns the final password. This is the engine of the generator.
function createRandomPassword(
  length,
  includeUppercase,
  includeLowercase,
  includeNumbers,
  includeSymbols
) {
  let allCharacters = "";
  if (includeUppercase) allCharacters += uppercaseLetters;
  if (includeLowercase) allCharacters += lowercaseLetters;
  if (includeNumbers) allCharacters += numberCharacters;
  if (includeSymbols) allCharacters += symbolCharacters;
  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allCharacters.length);
    password += allCharacters[randomIndex];
  }
  return password;
}
// SECTION 8 — AUTO‑GENERATE ON PAGE LOAD
// Automatically generates a password when the page loads.
// Makes the UI feel “ready to use.”
window.addEventListener("DOMContentLoaded", makePassword);
// SECTION 9 — COPY TO CLIPBOARD js
// What this section does
// Copies the password to the clipboard.
// Shows a success animation.
copyButton.addEventListener("click", () => {
  if (!passwordInput.value) return;
   navigator.clipboard
    .writeText(passwordInput.value)
    .then(() => showCopySuccess())
    .catch((error) => console.log("Could not copy:", error));
});
// SECTION 10 — COPY SUCCESS ANIMATION js
// What this section does
// Temporarily changes the icon to a green checkmark.
// After 1.5 seconds, resets it back to the copy icon.
function showCopySuccess() {
  copyButton.classList.remove("far", "fa-copy");
  copyButton.classList.add("fas", "fa-check");
  copyButton.style.color = "#48bb78";
  setTimeout(() => {
    copyButton.classList.remove("fas", "fa-check");
    copyButton.classList.add("far", "fa-copy");
    copyButton.style.color = "";
  }, 1500);
}




