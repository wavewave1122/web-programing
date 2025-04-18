function setAlert(){
    alert("กด")
    let intervalid = 0;
    intervalid = setInterval(function(){
    const isBreak = confirm("พักสายตาสักหน่อยไหม")
    if (isBreak){
        clearInterval(intervalid);
        alert("ขอบคุณที่พักสายตา")
    }
    },120*1000)
    }