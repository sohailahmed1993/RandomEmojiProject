const btnEl = document.getElementById("btn");
const emojiNameEl = document.querySelector("#emoji-name");



let emoji = [];

async function getEmoji(){
    let response = await fetch("https://emoji-api.com/emojis?access_key=eecb69261dc85ea5b8cde63f99f85d7aff128ad1");

    let data = await response.json();
    for(let i = 0; i < 1500; i++){
        emoji.push({
            emojiName : data[i].character,
            emojiCode : data[i].unicodeName
        })
    }   
}
getEmoji()


function addEmoji(){
    let random = Math.floor(Math.random()*emoji.length);
    btnEl.innerText = emoji[random].emojiName;
    emojiNameEl.innerText = emoji[random].emojiCode;
    
    getEmoji()
}
btnEl.addEventListener("click", addEmoji);



