const game =()=>{
	let pScore = 0;
	let cScore = 0;

	const startGame =()=>{
		const playbtn = document.querySelector('.intro button');
		const introscreen = document.querySelector('.intro');
		const match = document.querySelector('.match');

		playbtn.addEventListener('click',()=>{
			introscreen.classList.add('fadeOut');
			match.classList.add('fadeIn');

		});
	};

	const playmatch =()=>{
		const options = document.querySelectorAll('.options button');
		const playerhand= document.querySelector('.player_hand');
		const computerhand= document.querySelector('.computer_hand');
		const computeroption =['rock','paper','scissors'];

		options.forEach(option =>{
			option.addEventListener('click',function(){
				const computernumber = Math.floor(Math.random()*3);
				const computerchoise = computeroption[computernumber];
				//console.log(computerchoise);

				comparehands(this.textContent,computerchoise);

				playerhand.src =`${this.textContent}.png`;
				computerhand.src =`${computerchoise}.png`;
			});
		});
	};

	const updatescore =()=>{
		const playerscore =document.querySelector('.playes-score p');
		const computerscore =document.querySelector('.computer-score p');
		playerscore.textContent = pScore;
		computerscore.textContent=cScore;
	}

	const comparehands = (playeschoice,computerchoise)=>{
		const winer = document.querySelector('.winer');
		if(playeschoice === computerchoise){
			winer.textContent ="it is a tia";
			return;
		}
		if(playeschoice ==='rock'){
			if(computerchoise==='scissors') {
				winer.textContent='player win';
				pScore++;
				updatescore();
				return;
			}else{
				winer.textContent= 'computer win';
				cScore++;
				updatescore();
				return;
			}

		}
		if(playeschoice ==='paper'){
			if(computerchoise==='scissors') {
				winer.textContent='computer win';
				cScore++;
				updatescore();
				return;
			}else{
				winer.textContent= 'player win';
				pScore++;
				updatescore();
				return;
			}

		}

		if(playeschoice ==='scissors'){
			if(computerchoise==='rock') {
				winer.textContent='computer win';
				cScore++;
				updatescore();
				return;
			}else{
				winer.textContent= 'player win';
				pScore++;
				updatescore(); 
				return;
			}

		}
	}

	startGame();
	playmatch();
}

game();

