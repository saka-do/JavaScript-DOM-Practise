const btn = document.querySelector("#emoji");

const emojis = [
  "😆",
  "😅",
  "🤣",
  "😂",
  "😀",
  "🤑",
  "🤨",
  "🙂",
  "😊",
  "😗",
  "😛",
  "😏",
  "🤥",
  "😴",
  "🥺",
  "😧",
  "😇",
  "😳",
  "🙃",
  "🥴",
  "🧐",
  "🤨",
  "😒",
  "🤔",
  "🤭",
  "🥰",
  "🤐",
  "😄",
  "🤔",
  "🤪",
  "🥲",
  "😃",
  "😁",
  "😬",
];

let emojiIndex = emojis.length/2;

// different ways of implementing eventistiners 

//  best way
btn.addEventListener("mouseover", () => {
  btn.innerText = emojis[Math.floor(Math.random() * emojis.length)];
});


// bad way to implement eventistiners
const emoji = document.getElementById("emoji");
emoji.onmouseout = function(){
  emoji.innerText = emojis[emojis.length - 1];
}


emoji.addEventListener("click", () => {
  emoji.innerText = emojis[emojis.length/2]
  console.log("click event");
})

window.addEventListener("keyd", (event) => {
  emojiIndex +=1;
  console.log(emojiIndex);
  emoji.innerText = emojis[emojiIndex];
})