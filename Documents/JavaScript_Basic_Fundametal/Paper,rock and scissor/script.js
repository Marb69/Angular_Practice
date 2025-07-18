
  

  let rockbtn = document.querySelector('#rock');
  let result = document.querySelector('#WinLose');
  let paperbtn = document.querySelector('#paper');
  let scissorbtn = document.querySelector('#scissor');

  let computerp = document.querySelector('#com');

         let computer = '';
        function pickComputer(){

            let computerPick = Math.random();
            
            
            if(computerPick>=0 && computerPick <1/3) {

                computer = 'rock';
            }
            else if(computerPick>=1/3 && computerPick < 2/3){

                computer = 'paper';
            }

              else if(computerPick>=2/3 && computerPick < 1){

                computer = 'scissors';
            }
        }


        function pickRock(){

                pickComputer();

            if(computer==='rock'){

                result.innerHTML = 'tie';
                computerp.innerHTML = computer;
            }

            else if(computer==='paper'){

              
                result.innerHTML = 'You lose';
                 computerp.innerHTML = computer;
            }
            else if(computer==='scissors'){

              
                result.innerHTML = 'you win';
               computerp.innerHTML = computer;
            }
           
        }

            function pickPaper(){

                pickComputer();

            if(computer==='rock'){

                result.innerHTML = 'you win';
                 computerp.innerHTML = computer;
            }

            else if(computer==='paper'){

              
                result.innerHTML = 'tie';
                 computerp.innerHTML = computer;
            }
            else if(computer==='scissors'){

              
                result.innerHTML = 'you lose';
                 computerp.innerHTML = computer;
            }
           
        }
         function pickScissor(){

                pickComputer();

            if(computer==='rock'){

                result.innerHTML = 'you lose';
                 computerp.innerHTML = computer;
            }

            else if(computer==='paper'){

              
                result.innerHTML = 'you win';
                 computerp.innerHTML = computer;
            }
            else if(computer==='scissors'){

              
                result.innerHTML = 'tie';
                 computerp.innerHTML = computer;
            }
           
        }
     

     rockbtn.addEventListener('click',pickRock);
      paperbtn.addEventListener('click',pickPaper);
       scissorbtn.addEventListener('click',pickScissor);
     