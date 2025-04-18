const userName = window.prompt("คุณชื่อะไร");

if (userName !== null || userName !== "") {
    document.getElementById("show-name").innerText = "สวัสดี" + userName;
};

function showUserAgent() {
    const userAgent = navigator.userAgent;
    window.alert("User Agent:"+userAgent);
}

function goToYoutube() {
    window.open("https://www.youtube.com/")
}