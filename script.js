const btnEl = document.getElementById("btn")
const emojiNameEl = document.getElementById("emoji-name");

const emoji = [];

async function getEmoji(){
    let response = await fetch("https://emoji-api.com/emojis?access_key=eecb69261dc85ea5b8cde63f99f85d7aff128ad1");

    data = await response.json();
    for(let i = 0; i < 1500; i++){
        emoji.push({
               emojiName : data[i].character,
               emojiCode : data[i].unicodeName   
            })
    }
}

console.log(emoji);

getEmoji();

function addEmoji(){
    const randomNum = Math.floor(Math.random()*emoji.length);
    btnEl.innerText = emoji[randomNum].emojiName;
    emojiNameEl.innerText = emoji[randomNum].emojiCode;
    getEmoji();
}

btnEl.addEventListener("click", addEmoji);


