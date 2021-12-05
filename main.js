const user = document.querySelector('.user');
const modal = document.querySelector('.modal');
const modalContent = document.querySelector('.form')
const checkRadio = document.querySelector('.checkmark')
const inputRadio = document.querySelector('.check-save-info')
const tabItem = Array.from(document.querySelectorAll('.form-tab-item'))
const tabContent = Array.from(document.querySelectorAll('.form-tab-content'))
const socialBtn = document.querySelector('.sign-in-other-btn')
const navItems = Array.from(document.querySelectorAll('.head-body-navigation-item'))
const navSubItems = Array.from(document.querySelectorAll('.head-body-navigation-list'))
const language = document.querySelector('.language')
const megaMenu = document.querySelector('.mega-menu')
const subMenuItem = Array.from(document.querySelectorAll('.head-body-navigation-item-sub-page'))
const imgContainLeft = document.querySelector('.slider-left-contain')
const imgContainRight = document.querySelector('.slider-right-contain')
const sliderTitle = Array.from(document.querySelectorAll('.slider-title-img'))
const controlLeft = document.querySelector('.slider-control-left')
const controlRight = document.querySelector('.slider-control-right')

const imgLeft = [
    {
        path: './assets/img/travel-slide-1.jpg'
    },
    {
        path: './assets/img/travel-slide-3.jpg'
    },
    {
        path: './assets/img/travel-slide-5.jpg'
    }
]

const imgRight = [
    {
        path: './assets/img/travel-slide-2.jpg'
    },
    {
        path: './assets/img/travel-slide-4.jpg'
    },
    {
        path: './assets/img/travel-slide-6.jpg'
    }
]

const imgTitle = [
    {
        path: './assets/img/travel-slide-img-1.png'
    },
    {
        path: './assets/img/travel-slide-img-1.png'
    },
    {
        path: './assets/img/travel-slide-img-2.png'        
    }
]

user.onclick = function() {
    if (!modal.classList.contains('active')) {
        modal.style.display = 'flex'
    }
    modal.classList.toggle('active')
}

modal.onclick = () => {
    if (modal.classList.contains('active')) {
        setTimeout(() => {modal.style.display = 'none'}, 300)
    }
    modal.classList.toggle('active')
}
modalContent.onclick = (e) => {e.stopPropagation()}

checkRadio.onclick = () => {
    inputRadio.checked = !inputRadio.checked;
}

tabItem.forEach((item, index) => {
    item.onclick = () => {
        tabContent.forEach((tab, idx) => {
            if (idx !== index) {
                tab.classList.remove('active')
            }
        })
        tabItem.forEach((tab, idx) => {
            if (idx !== index) tab.classList.remove('active');
        })
        socialBtn.style.display = index > 0 ? 'none' : 'flex'
        item.classList.add('active');
        tabContent[index].classList.add('active');
    }
})

language.onmouseover = () => {
    language.classList.add('active');
}

language.onmouseout = () => {
    language.classList.remove('active');
}

navItems.forEach((navItem, index) => {
    navItem.onmouseover = () => {
        if (index !== 6) {
            navSubItems[index].classList.add('active');
        }
    }
    navItem.onmouseout = () => {
        if (index !== 6) {
            navSubItems[index].classList.remove('active');
        }
    }
    if (index === 6) {
        navItem.onmouseover = () => {
            megaMenu.classList.add('active');
        }
        navItem.onmouseleave = () => {
            megaMenu.classList.remove('active');
        }

        megaMenu.onmouseover = () => {
            megaMenu.classList.add('active');
        }

        megaMenu.onmouseleave = () => {
            megaMenu.classList.remove('active');
        }
    }
})

window.onresize = () => {
    if (document.documentElement.clientWidth>= 1024 && document.documentElement.clientWidth < 1375) {
        subMenuItem.forEach(item => {
            item.style.left = '-100%'
        })
    }
}

let slideIndex = 0;
const n = imgLeft.length;
controlLeft.onclick = () => {
    slideIndex--;
    if (slideIndex < 0) slideIndex = n - 1;
    imgContainLeft.style.background = `center / cover no-repeat url('${imgLeft[slideIndex].path}')`
    imgContainRight.style.background = `center / cover no-repeat url('${imgRight[slideIndex].path}')`
    sliderTitle.forEach((title, idx) => {
        if (idx !== slideIndex) { 
            title.classList.remove('active')
        }
    })
    sliderTitle[slideIndex].classList.add('active')
}

controlRight.onclick = () => {
    slideIndex++;
    if (slideIndex > n - 1) slideIndex = 0;
    imgContainLeft.style.background = `center / cover no-repeat url('${imgLeft[slideIndex].path}')`
    imgContainRight.style.background = `center / cover no-repeat url('${imgRight[slideIndex].path}')`
    sliderTitle.forEach((title, idx) => {
        if (idx !== slideIndex) { 
            title.classList.remove('active')
        }
    })
    sliderTitle[slideIndex].classList.add('active')
}

setInterval(()=> {
    controlRight.click();
},5000)

