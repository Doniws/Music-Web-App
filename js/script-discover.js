const wrapper = document.querySelector('.wrapper'),
    musicImg = document.querySelector('.profile-img img'),
    musicName = document.querySelector('.profile-name a'),
    musicArtist = document.querySelector('.profile-name p');
mainAudio = document.querySelector('.main-audio-primary'),
    playPauseBtn = document.querySelector('.play-pause'),
    nextBtn = document.querySelector('#next'),
    prevBtn = document.querySelector('#prev');

// Lagu Favorite
const ulTag = wrapper.querySelector('ul.favorite');
// let create li tags according to array length for list
for (let j = 0; j < FavoriteMusic.length; j++) {
	//let's pass the song name, artist from the array j + 1
    let liTag = `<li class="music swiper-slide" id="favorite-${j + 1}">
   
                    <div class="wrapper-favorite">
                        <div class="hover-play">
                            <a class="container-img">
                                <img src="images/${
																	FavoriteMusic[j].src
																}.webp" alt="">
                            </a>
                            <div class="top">
                                <div class="play-pause">
                                    <a class="material-icons-sharp play">more_vert</a>
                                </div>
                            </div>
                            <div class="bottom">
                                <div class="play-pause  go-play-pause"  >
                                    <i onclick="playpause()" class="material-icons-sharp play">play_arrow</i>
                                </div>
                            </div>
                        </div>
                        <p class="name">${FavoriteMusic[j].name}</p>
                        <p class="artist">${FavoriteMusic[j].artist}</p>
                    </div>
                </li>`;
	ulTag.insertAdjacentHTML('beforeend', liTag);
}

const olTag = wrapper.querySelector('ol');
// let create li tags according to array length for list
for (let i = 0; i < BestArtist.length; i++) {
  //let's pass the song name, artist from the array
    let liTag =`<li class="music swiper-slide" index="band-${i + 1}">
                    <div class="wrapper-favorite">
                        <div class="hover-play">
                            <a class="container-img">
                                <img src="images/${BestArtist[i].src}.webp" alt="" style="border-radius:${BestArtist[i].rds}">
                            </a>
                            <div class="bottom">
                                <div class="play-pause">
                                    <i class="material-icons-sharp play">play_arrow</i>
                                </div>
                            </div>
                        </div>
                        <p class="artist">${BestArtist[i].artist}</p>
                        <p class="name">Artist</p>
                    </div>
                </li>`;
    olTag.insertAdjacentHTML('beforeend', liTag);
}

const dlTag = wrapper.querySelector('dl.container-all-card-float-grid');
for (let x = 0; x < Welcome.length; x++) {
  //let's pass the song name, artist from the array
    let liTag = `<div class="container-card-float">
                    <img src="images/${Welcome[x].src}.webp" alt="" width="64px">
                    <div class="text-play">
                        <a>${Welcome[x].artist}</a>
                        <div class="right">
                            <div class="play-pause">
                                <i class="material-icons-sharp play">play_arrow</i>
                            </div>
                        </div>
                    </div>
                </div>`;
  dlTag.insertAdjacentHTML('beforeend', liTag);
}

const ddTag = wrapper.querySelector('dl.container-all-card-float-flex');
for (let z = 0; z < BestArtist.length; z++) {
  //let's pass the song name, artist from the array
    let liTag = `<li class="music swiper-slide" id="band-${z + 1}">
                    <div class="wrapper-favorite">
                        <div class="hover-play">
                            <img src="images/${BestArtist[z].src}.webp" alt="" style="border-radius:${BestArtist[z].rds}">
                            <div class="bottom">
                                <div class="play-pause">
                                    <i class="material-icons-sharp play">play_arrow</i>
                                </div>
                            </div>
                        </div>
                        <p class="artist">${BestArtist[z].artist}</p>
                        <p class="name">Artist</p>
                    </div>
                </li>`;
    ddTag.insertAdjacentHTML('beforeend', liTag);
}

const doTag = wrapper.querySelector('div.wrapper-content-1');
for (let l = 0; l < 4 && l < FavoriteMusic.length; l++) {
  //let's pass the song name, artist from the array
    let liTag = `<div class="cepat">
                    <div class="hover-play">
                        <img src="images/${FavoriteMusic[l].src}.webp" alt="" width="50px">
                        <div class="middle">
                            <div class="play-pause">
                                <i class="material-icons-sharp play">play_arrow</i>
                            </div>
                        </div>
                    </div>
                    <span class="text">
                        <p class="name">${FavoriteMusic[l].name}</p>
                        <p class="artist"><span class="material-icons-sharp">sensors</span>${FavoriteMusic[l].artist}</p>
                    </span>
                    <span class="material-icons-outlined"> more_vert </span>
                </div>`;
    doTag.insertAdjacentHTML('beforeend', liTag);
}

const dxTag = wrapper.querySelector('div.wrapper-content-2');
for (let p = 0; p < 4 && p < FavoriteMusic.length; p++) {
  //let's pass the song name, artist from the array
  let liTag = `<div class="cepat">
                        <div class="hover-play">
                            <img src="images/${FavoriteMusic[p].src}.webp" alt="" width="50px">
                            <div class="middle">
                                <div class="play-pause">
                                    <i class="material-icons-sharp play">play_arrow</i>
                                </div>
                            </div>
                        </div>
                        <span class="text">
                            <p class="name">${FavoriteMusic[p].name}</p>
                            <p class="artist"><span class="material-icons-sharp">sensors</span>${FavoriteMusic[p].artist}</p>
                        </span>
                        <span class="material-icons-outlined">
                            more_vert
                        </span>
                    </div>`;
  dxTag.insertAdjacentHTML('beforeend', liTag);
}

const dcTag = wrapper.querySelector('div.wrapper-content-3');
for (let v = 0; v < 4 && v < FavoriteMusic.length; v++) {
  //let's pass the song name, artist from the array
  let liTag = `<div class="cepat">
                        <div class="hover-play">
                            <img src="images/${FavoriteMusic[v].src}.webp" alt="" width="50px">
                            <div class="middle">
                                <div class="play-pause">
                                    <i class="material-icons-sharp play">play_arrow</i>
                                </div>
                            </div>
                        </div>
                        <span class="text">
                            <p class="name">${FavoriteMusic[v].name}</p>
                            <p class="artist"><span class="material-icons-sharp">sensors</span>${FavoriteMusic[v].artist}</p>
                        </span>
                        <span class="material-icons-outlined">
                            more_vert
                        </span>
                    </div>`;
  dcTag.insertAdjacentHTML('beforeend', liTag);
}

const dwTag = wrapper.querySelector('div.wrapper-content-4');
for (let t = 0; t < 4 && t < FavoriteMusic.length; t++) {
  //let's pass the song name, artist from the array
    let liTag = `<div class="cepat">
                        <div class="hover-play">
                            <img src="images/${FavoriteMusic[t].src}.webp" alt="" width="50px">
                            <div class="middle">
                                <div class="play-pause">
                                    <i class="material-icons-sharp play">play_arrow</i>
                                </div>
                            </div>
                        </div>
                        <span class="text">
                            <p class="name">${FavoriteMusic[t].name}</p>
                            <p class="artist"><span class="material-icons-sharp">sensors</span>${FavoriteMusic[t].artist} • ${FavoriteMusic[t].abm}</p>
                        </span>
                        <span class="material-icons-outlined">
                            more_vert
                        </span>
                    </div>`;
  dwTag.insertAdjacentHTML('beforeend', liTag);
}


// script play js
// (mainAudio1 = wrapper.querySelector('audio.main-audio-1')),
//     (mainAudio2 = wrapper.querySelector('audio.main-audio-2')),
//     (mainAudio3 = wrapper.querySelector('audio.main-audio-3')),
//     (mainAudio4 = wrapper.querySelector('audio.main-audio-4')),
//     (mainAudio5 = wrapper.querySelector('audio.main-audio-5')),
//     (mainAudio6 = wrapper.querySelector('audio.main-audio-6')),
//     (mainAudio7 = wrapper.querySelector('audio.main-audio-7')),
//     (mainAudio8 = wrapper.querySelector('audio.main-audio-8')),
//     (mainAudio9 = wrapper.querySelector('audio.main-audio-9')),
//     (mainAudio10 = wrapper.querySelector('audio.main-audio-10'));
			
    // ini bottom play pause berfungsi 
	// play music function
    function playMusic() {
        wrapper.classList.add('paused');
        playPauseBtn.querySelector('i').innerText = 'pause';
        mainAudio.play();
    }

	//pause music function
	function pauseMusic() {
		wrapper.classList.remove('paused');
		playPauseBtn.querySelector('i').innerText = 'play_arrow';
		mainAudio.pause();
	}

	// play or pause button event
	
    function playpause() {
        isMusicPlay = wrapper.classList.contains('paused');
        isMusicPlay ? pauseMusic() : playMusic();  
        
		
}

function playingSong() {
    mainAudio.src = `audio/${FavoriteMusic[i].src}.mp3`;
    mainAudio.play();         
}

//prev music function
function prevMusic(){
  musicIndex--; //decrement of musicIndex by 1
  //if musicIndex is less than 1 then musicIndex will be the array length so the last music play
  musicIndex < 1 ? musicIndex = allMusic.length : musicIndex = musicIndex;
  loadMusic(musicIndex);
  playMusic();
//   playingSong(); 
}

//next music function
function nextMusic(){
  musicIndex++; //increment of musicIndex by 1
  //if musicIndex is greater than array length then musicIndex will be 1 so the first music play
  musicIndex > allMusic.length ? musicIndex = 1 : musicIndex = musicIndex;
  loadMusic(musicIndex);
  playMusic();
//   playingSong(); 
}

//prev music button event
prevBtn.addEventListener("click", ()=>{
  prevMusic();
});

//next music button event
nextBtn.addEventListener("click", ()=>{
  nextMusic();
});



// navbar bottom 
let musicIndex = Math.floor(Math.random() * allMusic.length + 1);
isMusicPaused = true;

window.addEventListener('load', () => {
	loadMusic(musicIndex);
	// playingSong();
});

function loadMusic(indexNumb) {
	musicName.innerText = allMusic[indexNumb - 1].name;
	musicArtist.innerText = allMusic[indexNumb - 1].artist;
	musicImg.src = `images/${allMusic[indexNumb - 1].src}.webp`;
	mainAudio.src = `songs/${allMusic[indexNumb - 1].src}.mp3`;
}





// volume area

const sound = document.querySelector('span.volume');
		function soundcontrol(){
			var getText = sound.innerText; 
			switch (getText) {
				case 'volume_up':
					sound.innerText = 'volume_up';
                    mainAudio.volume = 1;
                    mainAudio.loop = false;
					break;
				case 'volume_down':
					sound.innerText = 'volume_down';
					mainAudio.volume = 0.5;
					break;
				case 'volume_mute':
					sound.innerText = 'volume_mute';
					mainAudio.volume = 0;
                    break;
			}
};