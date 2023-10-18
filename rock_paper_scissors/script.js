let score= JSON.parse(localStorage.getItem('score'));
        if(score === null){
            score  ={
                wins: 0,
                losses: 0,
                ties: 0
            };
        }
        
        function PrintScore(){
            document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}  Losses: ${score.losses}  Ties: ${score.ties}`;

        }

        //console.log(score);
        // score = {
        //         wins: 0,
        //         losses: 0,
        //         ties: 0
        //     }
        
        function move(){
            let movedone = '';
            const numb = Math.random();
            if(numb>0 && numb<1/3){
                movedone = 'rock';
            }
            else if(numb>1/3 && numb<2/3){
                movedone = 'paper';
            }
            else if(numb>2/3 && numb<1){
                movedone = 'scissor';
            }
            return movedone;
        }

        function play(playerMove){
            let computerMove = move();
            let result = '';
            if(playerMove === 'rock'){
               if(computerMove === 'rock'){
                    result = 'Tie.';
                    score.ties++;
               }
               else if(computerMove === 'paper'){
                    result = 'You lose.';
                    score.losses++;
               }
               else{
                    result = 'You win.'
                    score.wins++;
               }
            }
            else if(playerMove === 'paper'){
                if(computerMove === 'paper'){
                    result = 'Tie.';
                    score.ties++;
               }
               else if(computerMove === 'scissor'){
                    result = 'You lose.';
                    score.losses++;
               }
               else{
                    result = 'You win.'
                    score.wins++;
               }
            }
            else{
                if(computerMove === 'scissor'){
                    result = 'Tie.';
                    score.ties++;
               }
               else if(computerMove === 'rock'){
                    result = 'You lose.';
                    score.losses++;
               }
               else{
                    result = 'You win.'
                    score.wins++;
               }

            }
            document.querySelector('.js-move').innerHTML = `You played ${playerMove}. The computer played ${computerMove}.`;
            PrintScore();
            document.querySelector('.js-result').innerHTML = `${result}`;
            localStorage.setItem('score',JSON.stringify(score));
        }