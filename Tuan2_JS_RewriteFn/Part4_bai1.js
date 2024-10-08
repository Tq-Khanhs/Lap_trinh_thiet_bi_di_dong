let secretNum = Math.trunc(Math.random()*20)+1;

let score = 20;

let highScore = 0;

document.querySelector('.again').addEventListener('click',function(){
    score = 20;
    secretNum = Math.trunc(Math.random()*20)+1;

    document.querySelector('.message').textContent = 
    'Start guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = "?";
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});


document.querySelector('.check').addEventListener('click' ,  function(){
    const guess = Number(document.querySelector('.guess').value);

    if(!guess){
        document.querySelector('.message').textContent = '⛔️ No number!';


    }else if(guess == secretNum){
        document.querySelector('.message').textContent = '🎉 Correct Number!';
        document.querySelector('.number').textContent = secretNum;

        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        if(score > highScore){
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
    }else if( guess != secretNum){
        if(score >1){
            document.querySelector('.message').textContent = guess > secretNum ? 'Too high' : 'Too low';
            score--;
            document.querySelector('.score').textContent = score;
        }else{
            document.querySelector('.message').textContent = '💥 You lost the game!';
            document.querySelector('.score') = 0;

        }
    }
    


});