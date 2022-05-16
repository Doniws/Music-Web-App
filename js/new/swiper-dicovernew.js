// * favorite
const swiper1 = new Swiper('.swiper1', {
    lazy: true,
    slidesPerView: 3,
    speed: 200,
    autoplay: {
        delay: 3000,
    },
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next1',
        prevEl: '.swiper-button-prev1',
    },
    freeMode: {
        enabled: true,
        sticky: true,
    },
    scrollbar: {
        el: '.swiper-scrollbar1',
        draggable: true,
    },
    // mousewheel: {
    // invert: true
    // },
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },
    freeModeFluid: true,
    grabCursor: true,
    slidesPerView: 3,
    spaceBetween: 50,
    // Responsive breakpoints
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            freeMode: {
                enabled: false,
                sticky: false,
            },
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 2,
        },
        // when window width is >= 640px
        640: {
            slidesPerView: 1,
            watchOverflow: false,
            freeMode: {
                enabled: true,
                sticky: false,
            },
        },
        935: {
            slidesPerView: 2,
            freeMode: {
                enabled: true,
                sticky: false,
            },
        },
        // when window width is >= 768px
        1200: {
            slidesPerView: 3,
        },
    },
});


// * card favorite
const swiper2 = new Swiper('.swiper2', {
    lazy: true,
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next2',
        prevEl: '.swiper-button-prev2',
    },
    freeMode: {
        enabled: true,
        sticky: true,
    },
    scrollbar: {
        el: '.swiper-scrollbar3',
        draggable: true,
    },
    // mousewheel: {
    //     invert: true
    // },
    freeModeFluid: true,
    grabCursor: true,
    slidesPerView: 1,
    // spaceBetween: 10,
    // loop:true,
    // slideToClickedSlide: true
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 2,
        },
        340: {
            slidesPerView: 2.1,
        },
        380: {
            slidesPerView: 2.2,
            spaceBetween: 0,
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 3,
        },
        // when window width is >= 640px
        640: {
            slidesPerView: 4,
        },
        1024: {
            slidesPerView: 6.25,
        },
    },
});


// card Artist / Band
const swiper3 = new Swiper('.swiper3', {
    lazy: true,
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next3',
        prevEl: '.swiper-button-prev3',
    },
    freeMode: {
        enabled: true,
        sticky: true,
    },
    scrollbar: {
        el: '.swiper-scrollbar3',
        draggable: true,
    },
    // mousewheel: {
    //     invert: true
    // },
    freeModeFluid: true,
    grabCursor: true,
    slidesPerView: 1,
    // spaceBetween: 10,
    // loop:true,
    // slideToClickedSlide: true
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 2,
        },
        340: {
            slidesPerView: 2.1,
        },
        380: {
            slidesPerView: 2.2,
            spaceBetween: 0,
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 3,
        },
        // when window width is >= 640px
        640: {
            slidesPerView: 4,
        },
        1024: {
            slidesPerView: 6.25,
        },
    },
});

// card Welcome
const swiper4 = new Swiper('.swiper4', {
    lazy: true,
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next4',
        prevEl: '.swiper-button-prev4',
    },
    freeMode: {
        enabled: true,
        sticky: true,
    },
    scrollbar: {
        el: '.swiper-scrollbar4',
        draggable: true,
    },
    // mousewheel: {
    //     invert: true
    // },
    freeModeFluid: true,
    grabCursor: true,
    slidesPerView: 1,
    // spaceBetween: 10,
    // loop:true,
    // slideToClickedSlide: true
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 2,
        },
        340: {
            slidesPerView: 2.1,
        },
        380: {
            slidesPerView: 2.2,
            spaceBetween: 0,
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 3,
        },
        // when window width is >= 640px
        640: {
            slidesPerView: 4,
        },
        1024: {
            slidesPerView: 6.25,
        },
    },
});

const swiper5 = new Swiper('.swiper5', {
    lazy: true,
    freeMode: {
        enabled: true,
        sticky: false,
    },
    freeModeFluid: true,
    grabCursor: true,
    slidesPerView: 3.75,
    spaceBetween: 10,
    // loop: true,
});

// card Welcome
const swiper6 = new Swiper('.swiper6', {
    lazy: true,
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next6',
        prevEl: '.swiper-button-prev6',
    },
    freeMode: {
        enabled: true,
        sticky: true,
    },
    scrollbar: {
        el: '.swiper-scrollbar6',
        draggable: true,
    },
    // mousewheel: {
    //     invert: true
    // },
    freeModeFluid: true,
    grabCursor: true,
    slidesPerView: 1,
    // spaceBetween: 10,
    // loop:true,
    // slideToClickedSlide: true
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 2,
        },
        340: {
            slidesPerView: 2.1,
        },
        380: {
            slidesPerView: 2.2,
            spaceBetween: 0,
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 3,
        },
        // when window width is >= 640px
        640: {
            slidesPerView: 4,
        },
        1024: {
            slidesPerView: 6.25,
        },
    },
});