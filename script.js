window.onload = function(){
    var ball = document.getElementById("ball");
    var ballSpeed = 20;
    document.addEventListener('keydown', (event) => {
        var keyName = event.key;
        if(keyName == "w"){
            if(ball.offsetTop < 0){
                ball.style.top = "0px";
                return;
            }
            if(ball.offsetTop == 0){
                return;
            }
            //go up
            ball.style.top = ball.offsetTop - ballSpeed + "px";
            return;
        }
        if(keyName == "a"){
            if(ball.offsetLeft < 0){
                ball.style.left = "0px";
                return;
            }
            if(ball.offsetLeft == 0){
                return;
            }
            //go left
            ball.style.left = ball.offsetLeft - ballSpeed + "px";
            return;
        }
        if(keyName == "s"){
            if(ball.offsetTop + ball.offsetHeight + ballSpeed > window.innerHeight){
                ball.style.top = window.innerHeight - ball.offsetHeight + "px";
                return;
            }
            //go right
            ball.style.top = ball.offsetTop + ballSpeed + "px";
            return;
        }
        if(keyName == "d"){
            if(ball.offsetLeft + ball.offsetWidth + ballSpeed > window.innerWidth){
                ball.style.left = window.innerWidth - ball.offsetWidth + "px";
                return;
            }
            //go down
            ball.style.left = ball.offsetLeft  + ballSpeed + "px";
            return;
        }  
      }, false);
}