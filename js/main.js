const reset=document.getElementById('reset');
let num=document.getElementById('Guess');
const check=document.getElementById('check');
let score=document.getElementById('score');
score.value=99;
let correctnum=Math.floor(Math.random() * 100);
function guess_number(){
    if(num.value <1 || num.value>100){
        num.value=false;
        alert("Number out of Range!! Enter Again")
    }
    else{
        if(num.value==correctnum){
            alert("Guess is correct!!! Your score is: " +score.value)
            if(confirm("Reset Now?")){
                resetpage();
            }
        }
        else if(num.value<correctnum){
            alert("Guessed number is less than Correct Num")
            score.value=score.value-1;
            num.value=false
        }
        else{
            alert("Guessed number is greater than Correct Num")
            score.value=score.value-1
            num.value=false
        }
    }
}

function resetpage(){
    num.value=false
    score.value=99
    correctnum=Math.floor(Math.random() * 100);
}


check.addEventListener('click',guess_number);
reset.addEventListener('click',resetpage);