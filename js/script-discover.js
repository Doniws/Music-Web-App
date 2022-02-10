const wrapper = document.querySelector('.wrapper'),
  playPauseBtn = wrapper.querySelector('.play-pause'),
  musicImg = wrapper.querySelector('.hover-play img'),
  musicName = wrapper.querySelector('.text .name'),
  musicArtist = wrapper.querySelector('.text .artist');




const ulTag = wrapper.querySelector('ul');
// let create li tags according to array length for list
for (let j = 0; j < FavoriteMusic.length; j++){
    //let's pass the song name, artist from the array
  let liTag = `<li class="music swiper-slide" id="favorite-${j + 1}">  
                  <div class="wrapper-favorite">
                    <div class="hover-play">
                        <img src="images/${FavoriteMusic[j].src}.webp" alt="">
                        <div class="bottom">
                                <div class="play-pause">
                                    <i class="material-icons-sharp play">play_arrow</i>
                                </div>
                        </div>
                    </div>
                          <p class="name">${FavoriteMusic[j].name}</p>
                          <p class="artist">${FavoriteMusic[j].artist}</p>
                    </div>
                </li>`;
  ulTag.insertAdjacentHTML('beforeend', liTag); //inserting the li inside ul tag
};


const olTag = wrapper.querySelector('ol');
// let create li tags according to array length for list
for (let i = 0; i < MusicList.length; i++) {
  //let's pass the song name, artist from the array
  let liTag = `<li class="music swiper-slide" id="band-${i + 1}">  
                  <div class="wrapper-favorite">
                    <div class="hover-play">
                        <img src="images/${BestArtist[i].src}.webp" alt="">
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
  olTag.insertAdjacentHTML('beforeend', liTag); //inserting the li inside ul tag
};

//play music function
function playMusic(){
  wrapper.classList.add("paused");
  playPauseBtn.querySelector("i").innerText = "pause";
};

//pause music function
function pauseMusic(){
  wrapper.classList.remove("paused");
  playPauseBtn.querySelector("i").innerText = "play_arrow";
};

// play or pause button event
playPauseBtn.addEventListener('click', () => {
  const isMusicPlay = wrapper.classList.contains('paused');
  isMusicPlay ? pauseMusic() : playMusic();
});


















// const ulltag = document.querySelector('.wrapper-content-1');
// for (let o = 8; o < MusicWrapper2.length; o++) {
//   let llitag = `<li class="cepat" index1="${o + 1}">
//                         <div class="hover-play">
//                             <img src="images/${
//                               MusicWrapper2[o].src
//                             }.webp" alt="" width="50px">
//                             <div class="middle">
//                                 <div class="play-pause">
//                                     <i class="material-icons-sharp play">play_arrow</i>
//                                 </div>
//                             </div>
//                         </div>
//                         <span class="text">
//                             <p>${MusicWrapper2[o].name}</p>
//                             <p>${MusicWrapper2[o].artist}</p>
//                         </span>
//                         <span class="material-icons-outlined">
//                             more_vert
//                         </span>
//                     </li>`;
//   ulltag.insertAdjacentHTML("beforeend", llitag); //inserting the li inside ul tag
// };

// const ulltag = document.querySelector('.wrapper-content-2');
// for (let d = 8; d < MusicWrapper2.length; d++) {
//   let llitag = `<li class="cepat" index1="${d + 1}">
//                         <div class="hover-play">
//                             <img src="images/${
//                               MusicWrapper2[d].src
//                             }.webp" alt="" width="50px">
//                             <div class="middle">
//                                 <div class="play-pause">
//                                     <i class="material-icons-sharp play">play_arrow</i>
//                                 </div>
//                             </div>
//                         </div>
//                         <span class="text">
//                             <p>${MusicWrapper2[d].name}</p>
//                             <p>${MusicWrapper2[d].artist}</p>
//                         </span>
//                         <span class="material-icons-outlined">
//                             more_vert
//                         </span>
//                     </li>`;
//   ulltag.insertAdjacentHTML("beforeend", llitag); //inserting the li inside ul tag
// };

