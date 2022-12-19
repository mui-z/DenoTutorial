const jsonResponse = await fetch("https://api.github.com/users/denoland");
const jsonData = await jsonResponse.json();
console.log(jsonData)

