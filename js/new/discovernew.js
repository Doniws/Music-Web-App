// * SCRIPT FOR INDEX 

// * Varialbe Java Script 
const wrapper = document.querySelector(".wrapper"),
	musicImg = document.querySelector(".profile-img img"),
	musicName = document.querySelector(".profile-name a"),
	musicArtist = document.querySelector(".profile-name p"),
	mainAudio = document.querySelector(".main-audio-primary"),
	playPauseBtn = document.querySelector(".play-pause-btn"),
	nextBtn = document.querySelector("#next"),
	prevBtn = document.querySelector("#prev"),
	progressBar = document.querySelector(".progress-bar-fill"),
	progressArea = document.querySelector(".progress-bar"),
	shuffleBtn = document.querySelector("#shuffle");

// * ------------------------------------------------------------------- * // 

// * Area Array 

// * Welcome Mobile
const ddTag = wrapper.querySelector("dd.container-all-card-float-flex");
const dlTag = wrapper.querySelector("dl.container-all-card-float-grid");
Object.values(Welcome.splice(5, 9)).forEach((item, index) => {
	let liTag = `
			<dd class="music container-card-float swiper-slide float-flex" li-index-float="${index + 1}">
                    <div class="wrapper-card">
                        <div class="hover-play">
                            <a class="container-img">
								<div class= "wrapper-img" style="border-radius:${item.rds}">
									<img class="swiper-lazy" data-src="${item.img}" alt="${item.name}" style="border-radius:${item.rds}">
								</div>
                            </a>
                            <div class="top">
                                <div class="play-pause">
                                    <a class="material-icons-sharp play">more_vert</a>
                                </div>
                            </div>
                            <div class="bottom">
                                <div class="play-pause ">
                                    <i class="material-icons-sharp play">play_arrow</i>
                                </div>
                            </div>
                        </div>
						<div class="text-card">
                        	<p class="artist">${item.artist}</p>
							<p class="name">${item.name}</p>
						</div>
                    </div>
                    
                </dd>`;
	let luTag = `<div class="container-card-float float-grid" li-index-float="${index + 1}">
                    <img src="${item.img}" alt="${item.name}" title="${item.des}" width="64px">
                    <div class="text-play">
                        <a>${item.name}</a>
                        <div class="right">
                            <a class="play-pause">
                                <i class="material-icons-sharp play">play_arrow</i>
                            </a>
                        </div>
                    </div>
                </div>`;
	Math.random() > 0.5 ? ddTag.insertAdjacentHTML("beforeend", liTag) : ddTag.insertAdjacentHTML("afterbegin", liTag);
	Math.random() > 0.5 ? dlTag.insertAdjacentHTML("beforeend", luTag) : dlTag.insertAdjacentHTML("afterbegin", luTag);
});


// * welcome for dekstop

// Object.values(Welcome.slice(1,9)).forEach((item, index) => {

// 	Math.random() > 0.5 ? dlTag.insertAdjacentHTML("beforeend", liTag) : dlTag.insertAdjacentHTML("afterbegin", liTag);
// });

// * Quick Speed Music Play
// * Mengganti For dan menggantinnya dengan Object.Values
// ! wrap 1 
const doTag = wrapper.querySelector("div.wrapper-content-1");
Object.values(MusicList.splice(1, 4)).forEach((item, index) => {
	let liTag = `<div class="cepat" >
					<div class="hover-play hover-cepat" quick-index=${index + 1}>
						<img class="swiper-lazy" data-src="${item.img}" alt="" width="50px">
						<div class="middle">
							<div class="play-pause">
								<i class="material-icons-sharp play">play_arrow</i>
							</div>
						</div>
					</div>
					<span class="text">
						<p class="name">${item.name}</p>
						<p class="artist">
							<span class="material-icons-sharp">sensors</span>
							<a>${item.artist} • ${item.name}</a>
						</p>
					</span>
					<span class="material-icons-outlined">
						more_vert
					</span>
				</div>`;
	Math.random() > 0.5 ? doTag.insertAdjacentHTML("beforeend", liTag) : doTag.insertAdjacentHTML("afterbegin", liTag);
});
// ! wrap 2 
const dxTag = wrapper.querySelector("div.wrapper-content-2");
Object.values(MusicList.splice(1, 4)).forEach((item, index) => {
	let liTag = `<div class="cepat">
					<div class="hover-play hover-cepat" quick-index=${index + 1}>
						<img class="swiper-lazy" data-src="${item.img}" alt="" width="50px">
						<div class="middle">
							<div class="play-pause">
								<i class="material-icons-sharp play">play_arrow</i>
							</div>
						</div>
					</div>
					<span class="text">
						<p class="name">${item.name}</p>
						<p class="artist">
							<span class="material-icons-sharp">sensors</span>
							<a>${item.artist} • ${item.name}</a>
						</p>
					</span>
					<span class="material-icons-outlined">
						more_vert
					</span>
				</div>`;
	Math.random() > 0.5 ? dxTag.insertAdjacentHTML("beforeend", liTag) : dxTag.insertAdjacentHTML("afterbegin", liTag);
});



// ! wrap 3 
const dcTag = wrapper.querySelector("div.wrapper-content-3");
Object.values(MusicList.splice(1, 4)).forEach(function (item, index) {
	let liTag = `<div class="cepat">
						<div class="hover-play hover-cepat" quick-index=${index + 1}>
							<img class="swiper-lazy" data-src="${item.img}" alt="" width="50px">
							<div class="middle">
								<div class="play-pause">
									<i class="material-icons-sharp play">play_arrow</i>
								</div>
							</div>
						</div>
						<span class="text">
							<p class="name">${item.name}</p>
							<p class="artist">
								<span class="material-icons-sharp">sensors</span>
								<a>${item.artist} • ${item.name}</a>
							</p>
						</span>
						<span class="material-icons-outlined">
							more_vert
						</span>
					</div>`;
	Math.random() > 0.5 ? dcTag.insertAdjacentHTML("beforeend", liTag) : dcTag.insertAdjacentHTML("afterbegin", liTag);
});
// ! wrap 4 
const dwTag = wrapper.querySelector("div.wrapper-content-4");
Object.values(MusicList.splice(1, 4)).forEach(function (item, index) {
	let liTag = `<div class="cepat">
							<div class="hover-play hover-cepat" quick-index=${index + 1}>
								<img class="swiper-lazy" data-src="${item.img}" alt="" width="50px">
								<div class="middle">
									<div class="play-pause">
										<i class="material-icons-sharp play">play_arrow</i>
									</div>
								</div>
							</div>
							<span class="text">
								<p class="name">${item.name}</p>
								<p class="artist">
									<span class="material-icons-sharp">sensors</span>
									<a>${item.artist} • ${item.name}</a>
								</p>
							</span>
							<span class="material-icons-outlined">
								more_vert
							</span>
						</div>`;
	Math.random() > 0.5 ? dwTag.insertAdjacentHTML("beforeend", liTag) : dwTag.insertAdjacentHTML("afterbegin", liTag);
});

// * Best Artist
// TODO: I Wanna Change This to Artist
const ulTagBestBand = wrapper.querySelector("ul.best-band-list");
Object.values(BestArtist).forEach(function (item, index) {
	let liTag = `<li class="music swiper-slide" li-index-2="${index + 1}">
		<div class="wrapper-card">
			<div class="hover-play">
				<a class="container-img">
					<div class="wrapper-img" style="border-radius:${item.rds};">
						<img class="swiper-lazy" data-src="${item.img}" title="${item.artist}" alt="${item.artist}" style="border-radius:${item.rds}">
					</div>
				</a>
				<div class="bottom">
					<div class="play-pause">
						<i class="material-icons-sharp play">play_arrow</i>
					</div>
				</div>
			</div>
			<div class="text-card">
				<p class="artist" style="text-align:center;">${item.artist}</p>
				<p class="name" style="text-align:center;">Artist</p>
			</div>
		</div>
	</li>`;
	Math.random() > 0.5 ? ulTagBestBand.insertAdjacentHTML("beforeend", liTag) : ulTagBestBand.insertAdjacentHTML("afterbegin", liTag);
});

// * Lagu Favorite
const ulTagFav = wrapper.querySelector("ul.favorite-music-list");
Object.values(FavoriteMusic).forEach(function (item, index) {
	let liTag = `<li class="music swiper-slide" li-index="${index + 1}">
		<div class="wrapper-card">
			<div class="hover-play">
				<a class="container-img">
					<div class="wrapper-img">
						<img class="swiper-lazy" data-src="${item.img}" title="${item.artist}" alt="${item.artist}" style="border-radius:${item.rds}">
					</div>
				</a>
				<div class="bottom">
					<div class="play-pause">
						<i class="material-icons-sharp play">play_arrow</i>
					</div>
				</div>
			</div>
			<div class="text-card">
				<p class="artist">${item.name}</p>
				<p class="name">${item.artist}</p>
			</div>
		</div>
	</li>`;

	Math.random() > 0.5 ? ulTagFav.insertAdjacentHTML("beforeend", liTag) : ulTagFav.insertAdjacentHTML("afterbegin", liTag);
});


// * Lagu Popular
const ulTagPop = document.querySelector("ul.popular-music-list");
Object.values(Popular).forEach(function (item, index) {
	let liTag = `
		<li class="music swiper-slide" li-index2="${index + 1}">
                    <div class="wrapper-card">
                        <div class="hover-play">
                            <a class="container-img">
								<div class= "wrapper-img">
									<img class="swiper-lazy" data-src="${item.img}" alt="${item.name}" title="${item.des}">
								</div>
                            </a>
                            <div class="top">
                                <div class="play-pause">
                                    <a class="material-icons-sharp play">more_vert</a>
                                </div>
                            </div>
                            <div class="bottom">
                                <div class="play-pause "  >
                                    <i class="material-icons-sharp play">play_arrow</i>
                                </div>
                            </div>
                        </div>
						<div class="text-card">
                        	<p class="name">${item.name}</p>
                        	<p class="artist">${item.artist}</p>
						</div>
                    </div>
                    
                </li>`;

	Math.random() > 0.5 ? ulTagPop.insertAdjacentHTML("beforeend", liTag) : ulTagPop.insertAdjacentHTML("afterbegin", liTag);


});

// * Area Untuk Feature Music

// * load assets 
// ? ini akan mengeload aset musik
window.addEventListener("load", () => {
	loadMusic(musicIndex);
	loadMusic2(musicIndex2);
	loadMusic3(musicIndex3);
	loadMusic4(musicIndex4);
	playingSongFav();
	playingSongPop();
	playingSongFloat();
	playingQuick();
});

// * Random Music
// ! Memulai Secara Acak di awal 
let musicIndex = Math.floor(Math.random() * FavoriteMusic.length + 1);
let musicIndex2 = Math.floor(Math.random() * Popular.length + 1);
let musicIndex3 = Math.floor(Math.random() * Welcome.length + 1);
let musicIndex4 = Math.floor(Math.random() * MusicList.length + 1);
// * Load Music long card 
// ! Asset untuk long card start ketika di klik
// * Favorite  
function loadMusic(indexNumb) {
	musicName.innerText = FavoriteMusic[indexNumb - 1].name;
	musicArtist.innerText = FavoriteMusic[indexNumb - 1].artist;
	musicImg.src = FavoriteMusic[indexNumb - 1].img;
	mainAudio.src = `audio/${FavoriteMusic[indexNumb - 1].src}.mp3`;
}
// * Popular
function loadMusic2(indexNumb2) {
	musicName.innerText = Popular[indexNumb2 - 1].name;
	musicArtist.innerText = Popular[indexNumb2 - 1].artist;
	musicImg.src = Popular[indexNumb2 - 1].img;
	mainAudio.src = `audio/${Popular[indexNumb2 - 1].src}.mp3`;
}
// * Welcome
function loadMusic3(indexNumb3) {
	musicName.innerText = Welcome[indexNumb3 - 1].name;
	musicArtist.innerText = Welcome[indexNumb3 - 1].artist;
	musicImg.src = Welcome[indexNumb3 - 1].img;
	mainAudio.src = `audio/${Welcome[indexNumb3 - 1].src}.mp3`;
}
// * Quick 
function loadMusic4(indexNumb4) {
	musicName.innerText = MusicList[indexNumb4 - 1].name;
	musicArtist.innerText = MusicList[indexNumb4 - 1].artist;
	musicImg.src = MusicList[indexNumb4 - 1].img;
	mainAudio.src = `audio/${MusicList[indexNumb4 - 1].src}.mp3`;

}
// * TEMPAT UNTUK SEMUA FUNCTION * //
// * @param ini untuk mengeload sesuai card yang di klik 
function playingSongFav() {
	const allLiTag = ulTagFav.querySelectorAll("li");

	for (let j = 0; j < allLiTag.length; j++) {
		allLiTag[j].setAttribute("onclick", "clicked(this)");
	}
}
function playingSongPop() {
	const allLiTag = ulTagPop.querySelectorAll("li");

	for (let j = 0; j < allLiTag.length; j++) {
		allLiTag[j].setAttribute("onclick", "clicked2(this)");
	}
}
function playingSongFloat() {
	const allLiTag = dlTag.querySelectorAll(".container-card-float");
	const allLiTag2 = ddTag.querySelectorAll(".container-card-float");

	for (let j = 0; j < allLiTag.length; j++) {
		allLiTag[j].setAttribute("onclick", "clicked3(this)");
	}

	for (let j = 0; j < allLiTag2.length; j++) {
		allLiTag2[j].setAttribute("onclick", "clicked3(this)");
	}
}
function playingQuick() {
	const allLiTag = doTag.querySelectorAll(".hover-cepat");
	const allLiTag2 = dxTag.querySelectorAll(".hover-cepat");
	const allLiTag3 = dcTag.querySelectorAll(".hover-cepat");
	const allLiTag4 = dwTag.querySelectorAll(".hover-cepat");


	Object.values(allLiTag).forEach((item) => {
		item.setAttribute("onclick", "clicked4(this)");
	});

	Object.values(allLiTag2).forEach((item) => {
		item.setAttribute("onclick", "clicked4(this)");
	});

	Object.values(allLiTag3).forEach((item) => {
		item.setAttribute("onclick", "clicked4(this)");
	});

	Object.values(allLiTag4).forEach((item) => {
		item.setAttribute("onclick", "clicked4(this)");
	});
	// for (let j = 0; j < allLiTag.length; j++) {
	// 	allLiTag[j].setAttribute("onclick", "clicked4(this)");
	// }

	// for (let j = 0; j < allLiTag2.length; j++) {
	// 	allLiTag2[j].setAttribute("onclick", "clicked4(this)");
	// }

	// for (let j = 0; j < allLiTag3.length; j++) {
	// 	allLiTag3[j].setAttribute("onclick", "clicked4(this)");
	// }

	// for (let j = 0; j < allLiTag4.length; j++) {
	// 	allLiTag4[j].setAttribute("onclick", "clicked4(this)");
	// }
}

// * play pause music function
// ! play music function
function playMusic() {
	wrapper.classList.add("paused");
	playPauseBtn.querySelector("i").innerText = "pause";
	mainAudio.play();
}
// ! pause music function
function pauseMusic() {
	wrapper.classList.remove("paused");
	playPauseBtn.querySelector("i").innerText = "play_arrow";
	mainAudio.pause();
}


// * Dan ini juaga untuk memulai card yang di klik
function clicked(element) {
	let getLiIndex = element.getAttribute("li-index");
	musicIndex = getLiIndex; //updating current song index with clicked li index
	loadMusic(musicIndex);
	playMusic();
	playingSongFav();

	// ! card long akan muncul ketika card di klik 
	var hide = document.querySelector(".container-play-bottom");

	if (hide.style.display === "none") {
		hide.style.display = "block";
	} else {
		hide.style.display = "block";
	}
}
function clicked2(element2) {
	let getLiIndex2 = element2.getAttribute("li-index2");
	musicIndex2 = getLiIndex2; //updating current song index with clicked li index
	loadMusic2(musicIndex2);
	playMusic();
	playingSongPop();

	// ! card long akan muncul ketika card di klik 
	var hide = document.querySelector(".container-play-bottom");

	if (hide.style.display === "none") {
		hide.style.display = "block";
	} else {
		hide.style.display = "block";
	}
}
function clicked3(element3) {
	let getLiIndex3 = element3.getAttribute("li-index-float");
	musicIndex3 = getLiIndex3; //updating current song index with clicked li index
	loadMusic3(musicIndex3);
	playMusic();
	playingSongFloat();

	// ! card long akan muncul ketika card di klik 
	var hide = document.querySelector(".container-play-bottom");

	if (hide.style.display === "none") {
		hide.style.display = "block";
	} else {
		hide.style.display = "block";
	}
}
function clicked4(element4) {
	let getLiIndex4 = element4.getAttribute("quick-index");
	musicIndex4 = getLiIndex4; //updating current song index with clicked li index
	loadMusic4(musicIndex4);
	playMusic();
	playingQuick();

	// ! card long akan muncul ketika card di klik 
	var hide = document.querySelector(".container-play-bottom");

	if (hide.style.display === "none") {
		hide.style.display = "block";
	} else {
		hide.style.display = "block";
	}
}

// ! lanjut event ada beberapa yang error
//TODO: funsi prev dan next ada ke erroran sedang diperbaiki
// * prev music function
function prevMusic() {
	musicIndex--; // ! Musik akan mundur atau akan mengurang 1 kali
	//if musicIndex is less than 1 then musicIndex will be the array length so the last music play
	musicIndex < 1 ?
		(musicIndex = FavoriteMusic.length) :
		(musicIndex = musicIndex);
	loadMusic(musicIndex);

	musicIndex2++;
	musicIndex2 = musicIndex;
	loadMusic2(musicIndex2);

	musicIndex3--;
	musicIndex3 = musicIndex;
	loadMusic3(musicIndex3);

	musicIndex4--;
	musicIndex4 = musicIndex;
	loadMusic4(musicIndex4);

	playMusic();
	playingSongFav();
	playingSongPop();
	playingSongFloat();
	playingQuick();
}
// * next music function
function nextMusic() {
	musicIndex++; // ! Musik akan melompal 1 kali atau menambah 1 kali
	//if musicIndex is greater than array length then musicIndex will be 1 so the first music play
	musicIndex > FavoriteMusic.length ?
		(musicIndex = 1) :
		(musicIndex = musicIndex);
	loadMusic(musicIndex);

	musicIndex2++;
	musicIndex2 = musicIndex2;
	loadMusic2(musicIndex2);

	musicIndex3++;
	musicIndex3 = musicIndex3;
	loadMusic3(musicIndex3);

	musicIndex4++;
	musicIndex4 = musicIndex4;
	loadMusic4(musicIndex4);

	playMusic();
	playingSongFav();
	playingSongPop();
	playingSongFloat();
	playingQuick();
}

// ! prev music button event
prevBtn.addEventListener("click", () => {
	prevMusic();
});
// ! param next music button event
nextBtn.addEventListener("click", () => {
	nextMusic();
});


// * Proggress bar audio akan aktif ketika musik di play
mainAudio.addEventListener("timeupdate", (e) => {
	const currentTimes = e.target.currentTime;
	const duration = e.target.duration;
	let progressWidth = (currentTimes / duration) * 100;
	progressBar.style.width = `${progressWidth}%`;
	let musicCurrentTime = document.querySelector(".current-time"),
		musicDuartion = document.querySelector(".max-duration");
	mainAudio.addEventListener("loadeddata", () => {
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

// * repeat music btn change
const repeatBtn = document.querySelector("#repeat");
repeatBtn.addEventListener("click", () => {
	let getText = repeatBtn.innerText;
	switch (getText) {
		case "repeat":
			repeatBtn.innerText = "repeat_one";
			repeatBtn.setAttribute("title", "Repeat one");
			break;
		case "repeat_one":
			repeatBtn.innerText = "repeat";
			repeatBtn.setAttribute("title", "Repeat");
			break;
	}
});

// * ended repeat listener
// ? musik akan auto mengulang ketika musik selesai
mainAudio.addEventListener("ended", () => {
	let getText = repeatBtn.innerText;
	switch (getText) {
		case "repeat":
			nextMusic(); // ! Memanggil fungsi next music
			break;
		case "repeat_one":
			mainAudio.currentTime = 0; // ! Memulai audio dari 0
			loadMusic(musicIndex); // ! Memanggil loadMusic function
			playMusic(); // ! Memanggil playMusic function
			break;
	}
});

// ! volume change button and add listener
const volumeBtn = document.querySelector("#repeat-plist");
volumeBtn.addEventListener("click", () => {
	let getText = volumeBtn.innerText; //getting this tag innerText
	switch (getText) {
		case "volume_up":
			volumeBtn.innerText = "volume_down";
			volumeBtn.setAttribute("title", "Volume 50%");
			mainAudio.volume = 0.7;
			break;
		case "volume_mute":
			volumeBtn.innerText = "volume_off";
			volumeBtn.setAttribute("title", "Muted");
			mainAudio.volume = 0;
			break;
		case "volume_down":
			volumeBtn.innerText = "volume_mute";
			volumeBtn.setAttribute("title", "volume 0%");
			// mainAudio.muted = true;
			mainAudio.volume = 0.3;
			break;
		case "volume_off":
			volumeBtn.innerText = "volume_up";
			volumeBtn.setAttribute("title", "Volume 100%");
			mainAudio.volume = 1;
			break;
	}
});




// ! inidicator and control music 
playPauseBtn.addEventListener("click", function () {
	isMusicPlay = wrapper.classList.contains("paused");
	isMusicPlay ? pauseMusic() : playMusic();
});

// ! update playing song currentTime on according to the progress bar width
progressArea.addEventListener("click", (e) => {
	let progressWidth = progressArea.clientWidth; // ! Menggunakan width Proses Bar
	let clickedOffsetX = e.offsetX; // ! Value Progress Bar
	let songDuration = mainAudio.duration; // ! Value Duration
	mainAudio.currentTime = (clickedOffsetX / progressWidth) * songDuration;

	playMusic();
	playingSongFav();
	playingSongPop();
});

// * shuffle playing random array prcs
shuffleBtn.addEventListener("click", () => {
	// * Fav
	let randIndex = Math.floor(Math.random() * FavoriteMusic.length + 1); // ! Menggunakan Random Value Sesuai Array
	do {
		randIndex = Math.floor(Math.random() * FavoriteMusic.length + 1);
	} while (musicIndex == randIndex); // ! INI akan Loop dan tidak sama dengan musik indeks

	musicIndex = randIndex; // ! Meggubah musick index ke rand index
	loadMusic(musicIndex);
	playMusic();
	playingSongFav();

	// * Pop
	let randIndexPop = Math.floor(Math.random() * Popular.length + 1); // ! Menggunakan Random Value Sesuai Array
	do {
		randIndexPop = Math.floor(Math.random() * Popular.length + 1);
	} while (musicIndex2 == randIndexPop); // ! INI akan Loop dan tidak sama dengan musik indeks

	musicIndex2 = randIndexPop; // ! Meggubah musick index ke rand index
	loadMusic2(musicIndex2);
	playingSongPop();
});


// * Fitur Lainnya 
// * Show search box and hidden link
var showSrc = document.querySelector(".hidden-input");
showSrc.addEventListener("click", () => {
	var hide = document.getElementById("input");
	if (hide.style.display === "flex") {
		hide.style.display = "none";
	} else {
		hide.style.display = "none";
	}
	var link = document.getElementById("link");
	if (link.style.display === "none") {
		link.style.display = "flex";
	} else {
		link.style.display = "flex";
	}
});

// * Show search link and hidden box
var hiddenSrc = document.querySelector(".open-input");
hiddenSrc.addEventListener("click", () => {
	var hide = document.getElementById("input");
	if (hide.style.display === "none") {
		hide.style.display = "flex";
	} else {
		hide.style.display = "flex";
	}
	var link = document.getElementById("link");
	if (link.style.display === "flex") {
		link.style.display = "none";
	} else {
		link.style.display = "none";
	}
});

// * Hidden show logo
var logo1 = document.querySelector("#logo-1");
var logo2 = document.querySelector("#logo-2");
logo1.addEventListener("click", () => {
	logo1.style.display = "none";
	logo2.style.display = "block";
});
logo2.addEventListener("click", () => {
	logo1.style.display = "block";
	logo2.style.display = "none";
});

// * Navbar scroll , Ketika di scroll navbar akan Muncul dan Hilang otomatis 
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
	var navrpsn = document.querySelector(".top-bar-responsive");
	var moodNav = document.querySelector(".bullet-mood-container");
	var navmain = document.getElementById("navbar");
	var currentScrollPos = window.pageYOffset;
	if (prevScrollpos > currentScrollPos) {
		moodNav.style.top = "60px";
		navmain.style.borderBottom = "none";
		navrpsn.style.top = "0px";
		navrpsn.style.opacity = "1";
	} else {
		moodNav.style.top = "0px";
		navmain.style.borderBottom = "0.5px solid rgb(41, 39, 39)";
		navrpsn.style.top = "-80px";
		navrpsn.style.opacity = ".7";
	}
	prevScrollpos = currentScrollPos;
};

// ! Disable context menu
window.addEventListener(
	"contextmenu",
	function (e) {
		e.preventDefault();
	},
	false
);

// * Indikator Active Navbar Bullet
const navs = document.querySelectorAll(".nav-mood");
navs.forEach((nav) => {
	nav.onclick = () => {
		navs.forEach((n) => n.classList.remove("active-mood"));
		nav.classList.add("active-mood");
	};
});

// * Profile Page 



// * Selecting all required elements Network Status
const wrapper_network = document.querySelector(".wrapper-network"),
	toast = wrapper_network.querySelector(".toast-network"),
	title = toast.querySelector(".stats-network"),
	subTitle = toast.querySelector(".description-network"),
	wifiIcon = toast.querySelector(".icon-network i"),
	closeIcon = toast.querySelector(".close-icon");

// * Network Status
// ? Sedang Tidak di Gunakan
// ! Karena akan menyebabkan peforma website menjadi buruk
// window.onload = () => {
// 	function ajax() {
// 		let xhr = new XMLHttpRequest(); //creating new XML object
// 		var xhrCount = 0;
// 		xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true); //sending get request on this URL
// 		xhr.onload = () => {
// 			//once ajax loaded
// 			//if ajax status is equal to 200 or less than 300 that mean user is getting data from that provided url
// 			//or his/her response status is 200 that means he/she is online
// 			if (xhr.status == 200 && xhr.status < 300 || xhr.status == 304 || xhr.status == 400) {
// 				toast.classList.remove('offline');
// 				title.innerText = "You're online now";
// 				subTitle.innerText = 'Hurray! Internet is connected.';
// 				wifiIcon.innerText = 'wifi';
// 				closeIcon.onclick = () => {
// 					//hide toast notification on close icon click
// 					wrapper_network.classList.add('hide');
// 				};
// 				setTimeout(() => {
// 					xhrCount = ++xhrCount;
// 					//hide the toast notification automatically after 5 seconds
// 					wrapper_network.classList.add('hide');
// 				}, 3000);
// 			} else {
// 				offline(); //calling offline function if ajax status is not equal to 200 or not less that 300
// 			}
// 		};
// 		xhr.onerror = () => {
// 			offline(); ////calling offline function if the passed url is not correct or returning 404 or other error
// 		};
// 		xhr.send(); //sending get request to the passed url
// 	}

// 	function offline() {
// 		//function for offline
// 		wrapper_network.classList.remove('hide');
// 		toast.classList.add('offline');
// 		title.innerText = "You're offline now";
// 		subTitle.innerText = 'Opps! Internet is disconnected.';
// 		wifiIcon.innerText = 'wifi_off';
// 	}

// 	setInterval(() => {
// // this setInterval function call ajax frequently after 100ms
// 		ajax();
// 	},1000);
// };