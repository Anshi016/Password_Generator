function generatePassword() {
  const length = document.getElementById("length").value;
  const uppercase = document.getElementById("uppercase").checked;
  const lowercase = document.getElementById("lowercase").checked;
  const numbers = document.getElementById("numbers").checked;
  const special = document.getElementById("special").checked;

  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const numberChars = "0123456789";
  const specialChars = "!@#$%^&*()_+-=[]{}|;:,.<>?";

  let allChars = "";

  if (uppercase) allChars += uppercaseChars;
  if (lowercase) allChars += lowercaseChars;
  if (numbers) allChars += numberChars;
  if (special) allChars += specialChars;

  if (allChars === "") {
    alert("Please select at least one character type!");
    return;
  }

  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allChars.length);
    password += allChars[randomIndex];
  }

  document.getElementById("password").innerText = password;
}

document.getElementById("copy-btn").addEventListener("click", () => {
  const passwordText = document.getElementById("password").innerText;
  if (!passwordText || passwordText === "Click \"Generate\" to start") return;

  navigator.clipboard.writeText(passwordText).then(() => {
    const btn = document.getElementById("copy-btn");
    const original = btn.innerText;
    btn.innerText = "✅";
    setTimeout(() => {
      btn.innerText = original;
    }, 1000);
  });
});
