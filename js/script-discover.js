const wrapper = document.querySelector('.wrapper'),
	musicImg = document.querySelector('.profile-img img'),
	musicName = document.querySelector('.profile-name a'),
	musicArtist = document.querySelector('.profile-name p'),
	mainAudio = document.querySelector('.main-audio-primary'),
	musicImg2 = document.querySelector('.profile-img2 img'),
	musicName2 = document.querySelector('.profile-name2 a'),
	musicArtist2 = document.querySelector('.profile-name2 p'),
	mainAudio2 = document.querySelector('.main-audio-secondary'),
	playPauseBtn = document.querySelector('.play-pause-btn'),
	nextBtn = document.querySelector('#next'),
	prevBtn = document.querySelector('#prev'),
	progressBar = document.querySelector('.progress-bar-fill'),
	progressArea = document.querySelector('.progress-bar'),
	shuffleBtn = document.querySelector('#shuffle');

// Loop Area for
// Lagu Favorite
const ulTag = wrapper.querySelector('ul.card');
// let create li tags according to array length for list
for (let j = 0; j < FavoriteMusic.length; j++) {
	//let's pass the song name, artist from the array j + 1
	let liTag = `<li class="music swiper-slide" li-index="${j + 1}">
                    <div class="wrapper-card">
                        <div class="hover-play">
                            <a class="container-img">
								<div class= "wrapper-img">
									<img src="images/${FavoriteMusic[j].src}.webp" alt="${FavoriteMusic[j].name}">
								</div>
                            </a>
                            <div class="top">
                                <div class="play-pause">
                                    <a class="material-icons-sharp play">more_vert</a>
                                </div>
                            </div>
                            <div class="bottom">
                                <div class="play-pause "  >
                                    <i  playing-click="${j + 1}" class="material-icons-sharp play">play_arrow</i>
                                </div>
                            </div>
                        </div>
						<div class="text-card">
                        	<p class="name">${FavoriteMusic[j].name}</p>
                        	<p class="artist">${FavoriteMusic[j].artist}</p>
						</div>
                    </div>
                    
                </li>`;
	ulTag.insertAdjacentHTML('beforeend', liTag);
}

// click to play a card
//play particular song from the list onclick of li tag
function playingSong() {
	const allLiTag = ulTag.querySelectorAll('li');

	for (let j = 0; j < allLiTag.length; j++) {
		allLiTag[j].setAttribute('onclick', 'clicked(this)');
	}
}

function playingSong2() {
	const allLiTag2 = dlTag.querySelectorAll('div');

	for (let i = 0; i < allLiTag2.length; i++) {
		allLiTag2[i].setAttribute('onclick', 'clicked2(this)');
	}
}

//particular li clicked function
function clicked(element) {
	let getLiIndex = element.getAttribute('li-index');
	musicIndex = getLiIndex; //updating current song index with clicked li index
	loadMusic(musicIndex);
	playMusic();
	playingSong();
	var hide = document.querySelector('.container-play-bottom');

	if (hide.style.display === 'none') {
		hide.style.display = 'block';
	} else {
		hide.style.display = 'block';
	}
}
//particular li clicked function
function clicked2(element2) {
	let getLiIndex = element2.getAttribute('li-index-float');
	musicIndex = getLiIndex; //updating current song index with clicked li index
	loadMusic2(musicIndex2);
	playMusic2();
	playingSong2();
	var hide = document.querySelector('.container-play-bottom');

	if (hide.style.display === 'none') {
		hide.style.display = 'block';
	} else {
		hide.style.display = 'block';
	}
}

const olTag = wrapper.querySelector('ol');
// let create li tags according to array length for list
for (let i = 0; i < BestArtist.length; i++) {
	//let's pass the song name, artist from the array
	let liTag = `<li class="music swiper-slide" li-index-2="${i + 1}">
                    <div class="wrapper-card">
                        <div class="hover-play">
                            <a class="container-img">
								<div class= "wrapper-img circle-shadow">
                                	<img src="images/${BestArtist[i].src}.webp" alt="" style="border-radius:${BestArtist[i].rds}">
								</div>
                            </a>
                            <div class="bottom">
                                <div class="play-pause">
                                    <i class="material-icons-sharp play">play_arrow</i>
                                </div>
                            </div>
                        </div>
						<div class="text-card">
                        	<p class="artist" style="text-align:center;">${BestArtist[i].artist}</p>
                        	<p class="name" style="text-align:center;">Artist</p>
						</div>
                    </div>
                </li>`;
	olTag.insertAdjacentHTML('beforeend', liTag);
}

const ddTag = wrapper.querySelector('dl.container-all-card-float-flex');
for (let z = 0; z < Welcome.length; z++) {
	//let's pass the song name, artist from the array
	let liTag = `<li class="music swiper-slide" li-index="${z + 1}">
                    <div class="wrapper-card">
                        <div class="hover-play">
                            <a class="container-img">
								<div class= "wrapper-img  circle-shadow">
									<img src="images/${Welcome[z].src}.webp" alt="${
		Welcome[z].name
	}" style="border-radius:${Welcome[z].rds}">
								</div>
                            </a>
                            <div class="top">
                                <div class="play-pause">
                                    <a class="material-icons-sharp play">more_vert</a>
                                </div>
                            </div>
                            <div class="bottom">
                                <div class="play-pause "  >
                                    <i  playing-click="${
																			z + 1
																		}" class="material-icons-sharp play">play_arrow</i>
                                </div>
                            </div>
                        </div>
						<div class="text-card">
                        	<p class="artist">${Welcome[z].artist}</p>
							<p class="name">${Welcome[z].name}</p>
						</div>
                    </div>
                    
                </li>`;
	ddTag.insertAdjacentHTML('beforeend', liTag);
}

const dlTag = wrapper.querySelector('dl.container-all-card-float-grid');
for (let x = 0; x < Welcome.length; x++) {
	//let's pass the song name, artist from the array
	let liTag = `<div class="container-card-float" li-index-float="${x + 1}">
                    <img src="images/${Welcome[x].src}.webp" alt="" width="64px">
                    <div class="text-play"> 
                        <a>${Welcome[x].artist}</a>
                        <div class="right">
                            <a class="play-pause">
                                <i class="material-icons-sharp play">play_arrow</i>
                            </a>
                        </div>
                    </div>
                </div>`;
	dlTag.insertAdjacentHTML('beforeend', liTag);
}

// Quick Speed Play
const doTag = wrapper.querySelector('div.wrapper-content-1');
for (let l = 0; l < 4 && l < FavoriteMusic.length; l++) {
	//let's pass the song name, artist from the array
	let liTag = `<div class="cepat">
                    <div class="hover-play  hover-cepat">
                        <img src="images/${FavoriteMusic[l].src}.webp" alt="" width="50px">
                        <div class="middle">
                            <div class="play-pause">
                                <i class="material-icons-sharp play">play_arrow</i>
                            </div>
                        </div>
                    </div>
                    <span class="text">
                        <p class="name">${FavoriteMusic[l].name}</p>
                        <p class="artist">
							<span class="material-icons-sharp">sensors</span>
							<a>${FavoriteMusic[l].artist} • ${FavoriteMusic[l].abm}</a>
						</p>
                    </span>
                    <span class="material-icons-outlined"> more_vert </span>
                </div>`;
	doTag.insertAdjacentHTML('beforeend', liTag);
}

const dxTag = wrapper.querySelector('div.wrapper-content-2');
for (let p = 4; p < 8 && p < FavoriteMusic.length; p++) {
	//let's pass the song name, artist from the array
	let liTag = `<div class="cepat">
                        <div class="hover-play hover-cepat">
                            <img src="images/${FavoriteMusic[p].src}.webp" alt="" width="50px">
                            <div class="middle">
                                <div class="play-pause">
                                    <i class="material-icons-sharp play">play_arrow</i>
                                </div>
                            </div>
                        </div>
                        <span class="text">
                            <p class="name">${FavoriteMusic[p].name}</p>
                            <p class="artist">
								<span class="material-icons-sharp">sensors</span>
								<a>${FavoriteMusic[p].artist} • ${FavoriteMusic[p].abm}</a>
							</p>
                        </span>
                        <span class="material-icons-outlined">
                            more_vert
                        </span>
                    </div>`;
	dxTag.insertAdjacentHTML('beforeend', liTag);
}

const dcTag = wrapper.querySelector('div.wrapper-content-3');
for (let v = 7; v < 12 && v < FavoriteMusic.length; v++) {
	//let's pass the song name, artist from the array
	let liTag = `<div class="cepat">
                        <div class="hover-play hover-cepat">
                            <img src="images/${FavoriteMusic[v].src}.webp" alt="" width="50px">
                            <div class="middle">
                                <div class="play-pause">
                                    <i class="material-icons-sharp play">play_arrow</i>
                                </div>
                            </div>
                        </div>
                        <span class="text">
                            <p class="name">${FavoriteMusic[v].name}</p>
                            <p class="artist">
								<span class="material-icons-sharp">sensors</span>
								<a>${FavoriteMusic[v].artist} • ${FavoriteMusic[v].abm}</a>
							</p>
                        </span>
                        <span class="material-icons-outlined">
                            more_vert
                        </span>
                    </div>`;
	dcTag.insertAdjacentHTML('beforeend', liTag);
}

const dwTag = wrapper.querySelector('div.wrapper-content-4');
for (let t = 0; t < 4 && t < FavoriteMusic.reverse().length; t++) {
	//let's pass the song name, artist from the array
	let liTag = `<div class="cepat">
                        <div class="hover-play hover-cepat">
                            <img src="images/${FavoriteMusic[t].src}.webp" alt="" width="50px">
                            <div class="middle">
                                <div class="play-pause">
                                    <i class="material-icons-sharp play">play_arrow</i>
                                </div>
                            </div>
                        </div>
                        <span class="text">
                            <p class="name">${FavoriteMusic[t].name}</p>
                            <p class="artist">
								<span class="material-icons-sharp">sensors</span>
								<a>${FavoriteMusic[t].artist} • ${FavoriteMusic[t].abm}</a>
							</p>
                        </span>
                        <span class="material-icons-outlined">
                            more_vert
                        </span>
                    </div>`;
	dwTag.insertAdjacentHTML('beforeend', liTag);
}

// script play pause area
// play music function
function playMusic() {
	wrapper.classList.add('paused');
	playPauseBtn.querySelector('i').innerText = 'pause';
	mainAudio.play();
}

function playMusic2() {
	wrapper.classList.add('paused');
	playPauseBtn.querySelector('i').innerText = 'pause';
	mainAudio2.play();
}

//pause music function
function pauseMusic() {
	wrapper.classList.remove('paused');
	playPauseBtn.querySelector('i').innerText = 'play_arrow';
	mainAudio.pause();
}

// play or pause button event onclick function
playPauseBtn.addEventListener('click', function () {
	isMusicPlay = wrapper.classList.contains('paused');
	isMusicPlay ? pauseMusic() : playMusic();
	playingSong();
});

// funstion for card play pause this off for alternative
var isPlaying = false;

function PlayPauseNow() {
	isPlaying ? mainAudio.pause() : mainAudio.play();
}

mainAudio.onplaying = function () {
	isPlaying = true;
};
mainAudio.onpause = function () {
	isPlaying = false;
};

// next prev music area
//prev music function
function prevMusic() {
	musicIndex--; //decrement of musicIndex by 1
	//if musicIndex is less than 1 then musicIndex will be the array length so the last music play
	musicIndex < 1 ?
		(musicIndex = FavoriteMusic.length) :
		(musicIndex = musicIndex);
	loadMusic(musicIndex);
	playMusic();
	playingSong();
}

//next music function
function nextMusic() {
	musicIndex++; //increment of musicIndex by 1
	//if musicIndex is greater than array length then musicIndex will be 1 so the first music play
	musicIndex > FavoriteMusic.length ?
		(musicIndex = 1) :
		(musicIndex = musicIndex);
	loadMusic(musicIndex);
	playMusic();
	playingSong();
}

//prev music button event
prevBtn.addEventListener('click', () => {
	prevMusic();
});

//next music button event
nextBtn.addEventListener('click', () => {
	nextMusic();
});

// navbar bottom

let musicIndex = Math.floor(Math.random() * FavoriteMusic.length + 1);
let musicIndex2 = Math.floor(Math.random() * Welcome.length + 1);
isMusicPaused = true;

window.addEventListener('load', () => {
	loadMusic(musicIndex);
	playingSong();
});

window.addEventListener('load', () => {
	loadMusic2(musicIndex2);
	playingSong();
});

function loadMusic(indexNumb) {
	musicName.innerText = FavoriteMusic[indexNumb - 1].name;
	musicArtist.innerText = FavoriteMusic[indexNumb - 1].artist;
	musicImg.src = `images/${FavoriteMusic[indexNumb - 1].src}.webp`;
	mainAudio.src = `songs/${FavoriteMusic[indexNumb - 1].src}.mp3`;
}

function loadMusic2(indexNumb2) {
	musicName.innerText = Welcome[indexNumb2 - 1].name;
	musicArtist.innerText = Welcome[indexNumb2 - 1].artist;
	musicImg.src = `images/${Welcome[indexNumb2 - 1].src}.webp`;
	mainAudio2.aud = `songs/${Welcome[indexNumb2 - 1].src}.mp3`;
}

// Proggress bar update by audio timeupdate event
mainAudio.addEventListener('timeupdate', (e) => {
	const currentTimes = e.target.currentTime;
	const duration = e.target.duration;
	let progressWidth = (currentTimes / duration) * 100;
	progressBar.style.width = `${progressWidth}%`;

	let musicCurrentTime = document.querySelector('.current-time'),
		musicDuartion = document.querySelector('.max-duration');
	mainAudio.addEventListener('loadeddata', () => {
		// update song total duration
		let mainAdDuration = mainAudio.duration;
		let totalMin = Math.floor(mainAdDuration / 60);
		let totalSec = Math.floor(mainAdDuration % 60);
		if (totalSec < 10) {
			//if sec is less than 10 then add 0 before it
			totalSec = `0${totalSec}`;
		}
		musicDuartion.innerText = `${totalMin}:${totalSec}`;
	});
	// update playing song current time
	let currentMin = Math.floor(currentTimes / 60);
	let currentSec = Math.floor(currentTimes % 60);
	if (currentSec < 10) {
		//if sec is less than 10 then add 0 before it
		currentSec = `0${currentSec}`;
	}
	musicCurrentTime.innerText = `${currentMin}:${currentSec}`;
});

// update playing song currentTime on according to the progress bar width
progressArea.addEventListener('click', (e) => {
	let progressWidth = progressArea.clientWidth; //getting width of progress bar
	let clickedOffsetX = e.offsetX; //getting offset x value
	let songDuration = mainAudio.duration; //getting song total duration

	mainAudio.currentTime = (clickedOffsetX / progressWidth) * songDuration;
	playMusic(); //calling playMusic function
	playingSong();
});

// repeat music btn change
const repeatBtn = document.querySelector('#repeat');
repeatBtn.addEventListener('click', () => {
	let getText = repeatBtn.innerText;
	switch (getText) {
		case 'repeat':
			repeatBtn.innerText = 'repeat_one';
			repeatBtn.setAttribute('title', 'Repeat one');
			break;
		case 'repeat_one':
			repeatBtn.innerText = 'repeat';
			repeatBtn.setAttribute('title', 'Repeat');
			break;
	}
});
// ended repeat listener
mainAudio.addEventListener('ended', () => {
	let getText = repeatBtn.innerText;
	switch (getText) {
		case 'repeat':
			nextMusic(); //calling nextMusic function
			break;
		case 'repeat_one':
			mainAudio.currentTime = 0; //setting audio current time to 0
			loadMusic(musicIndex); //calling loadMusic function with argument, in the argument there is a index of current song
			playMusic(); //calling playMusic function
			break;
	}
});
// shuffle playing random array prcs
shuffleBtn.addEventListener('click', () => {
	let randIndex = Math.floor(Math.random() * FavoriteMusic.length + 1); //genereting random index/numb with max range of array length
	do {
		randIndex = Math.floor(Math.random() * FavoriteMusic.length + 1);
	} while (musicIndex == randIndex); //this loop run until the next random number won't be the same of current musicIndex
	musicIndex = randIndex; //passing randomIndex to musicIndex
	loadMusic(musicIndex);
	playMusic();
	playingSong();
});

// volume change button and add listener
const volumeBtn = document.querySelector('#repeat-plist');
volumeBtn.addEventListener('click', () => {
	let getText = volumeBtn.innerText; //getting this tag innerText
	switch (getText) {
		case 'volume_up':
			volumeBtn.innerText = 'volume_down';
			volumeBtn.setAttribute('title', 'Volume 50%');
			mainAudio.volume = 0.7;
			break;
		case 'volume_mute':
			volumeBtn.innerText = 'volume_off';
			volumeBtn.setAttribute('title', 'Muted');
			mainAudio.volume = 0;
			break;
		case 'volume_down':
			volumeBtn.innerText = 'volume_mute';
			volumeBtn.setAttribute('title', 'volume 0%');
			// mainAudio.muted = true;
			mainAudio.volume = 0.3;
			break;
		case 'volume_off':
			volumeBtn.innerText = 'volume_up';
			volumeBtn.setAttribute('title', 'Volume 100%');
			mainAudio.volume = 1;
			break;
	}
});

// show search box and hidden link
var showSrc = document.querySelector('.hidden-input');
showSrc.addEventListener('click', () => {
	var hide = document.getElementById('input');
	if (hide.style.display === 'flex') {
		hide.style.display = 'none';
	} else {
		hide.style.display = 'none';
	}
	var link = document.getElementById('link');
	if (link.style.display === 'none') {
		link.style.display = 'flex';
	} else {
		link.style.display = 'flex';
	}
});

// show search link and hidden box
var hiddenSrc = document.querySelector('.open-input');
hiddenSrc.addEventListener('click', () => {
	var hide = document.getElementById('input');
	if (hide.style.display === 'none') {
		hide.style.display = 'flex';
	} else {
		hide.style.display = 'flex';
	}
	var link = document.getElementById('link');
	if (link.style.display === 'flex') {
		link.style.display = 'none';
	} else {
		link.style.display = 'none';
	}
});

// hidden show logo
var logo1 = document.querySelector('#logo-1');
var logo2 = document.querySelector('#logo-2');
logo1.addEventListener('click', () => {
	logo1.style.display = 'none';
	logo2.style.display = 'block';
});
logo2.addEventListener('click', () => {
	logo1.style.display = 'block';
	logo2.style.display = 'none';
});

// navbar border scroll  var prevScrollpos = window.pageYOffset;
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
	var currentScrollPos = window.pageYOffset;
	if (prevScrollpos > currentScrollPos) {
		document.getElementById('navbar').style.borderBottom = 'none';
	} else {
		document.getElementById('navbar').style.borderBottom =
			'0.5px solid rgb(41, 39, 39)';
	}
	prevScrollpos = currentScrollPos;
};

// Selecting all required elements Network Status
const wrapper_network = document.querySelector('.wrapper-network'),
	toast = wrapper_network.querySelector('.toast-network'),
	title = toast.querySelector('.stats-network'),
	subTitle = toast.querySelector('.description-network'),
	wifiIcon = toast.querySelector('.icon-network i'),
	closeIcon = toast.querySelector('.close-icon');

window.onload = () => {
	function ajax() {
		let xhr = new XMLHttpRequest(); //creating new XML object
		xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true); //sending get request on this URL
		xhr.onload = () => {
			//once ajax loaded
			//if ajax status is equal to 200 or less than 300 that mean user is getting data from that provided url
			//or his/her response status is 200 that means he/she is online
			if (xhr.status == 200 && xhr.status < 300) {
				toast.classList.remove('offline');
				title.innerText = "You're online now";
				subTitle.innerText = 'Hurray! Internet is connected.';
				wifiIcon.innerText = 'wifi';
				closeIcon.onclick = () => {
					//hide toast notification on close icon click
					wrapper_network.classList.add('hide');
				};
				setTimeout(() => {
					//hide the toast notification automatically after 5 seconds
					wrapper_network.classList.add('hide');
				}, 4000);
			} else {
				offline(); //calling offline function if ajax status is not equal to 200 or not less that 300
			}
		};
		xhr.onerror = () => {
			offline(); ////calling offline function if the passed url is not correct or returning 404 or other error
		};
		xhr.send(); //sending get request to the passed url
	}

	function offline() {
		//function for offline
		wrapper_network.classList.remove('hide');
		toast.classList.add('offline');
		title.innerText = "You're offline now";
		subTitle.innerText = 'Opps! Internet is disconnected.';
		wifiIcon.innerText = 'wifi_off';
	}

	setInterval(() => {
		//this setInterval function call ajax frequently after 100ms
		ajax();
	}, 100);
};

// scroll for hide navbar
var lastScrollTop;
navbar = document.querySelector('.top-bar-responsive');
window.addEventListener('scroll', () => {
	var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
	if (scrollTop > lastScrollTop) {
		navbar.style.top = '-80px';
		navbar.style.opacity = '0.7';
	} else {
		navbar.style.top = '0';
		navbar.style.opacity = '1';
	}
	lastScrollTop = scrollTop;
});

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
	var moodNav = document.querySelector('.bullet-mood-container');
	var currentScrollPos = window.pageYOffset;
	if (prevScrollpos > currentScrollPos) {
		moodNav.style.top = '60px';
	} else {
		moodNav.style.top = '0px';
	}
	prevScrollpos = currentScrollPos;
};