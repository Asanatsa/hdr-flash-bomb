let endNoticeE = document.getElementById("end-notice");
let bombNoticeE = document.getElementById("bomb-notice")
let maskEle = document.getElementById("mask");
let sound = new Audio("./audio/audio.mp3");
let fired = false

if (navigator.userAgent.search("Chrome") === -1 || navigator.userAgent.search(/(QQBrowser)|(MicroMessenger)/gi) !== -1 ) {
    alert("推荐使用Chrome、Edge等浏览器打开");
}

function fireBomb() {
    if (fired) {
        alert("刷新本页面后重新引爆");
        return;
    } else if (sound.readyState < 3) {
        return;//音频没加载完直接中断
    }

    sound.play();
    maskEle.style = "animation-duration: 12s;animation-name: flash;"

    maskEle.addEventListener("animationend",() => {
        bombNoticeE.innerText = "(OωO)";
        endNoticeE.style.display = "block";
    })

    fired = true
}