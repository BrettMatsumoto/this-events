//Secret Menu Challenge
//Add event listeners to the following:

/*1) to the navmenu items (Home, Location, Blog) that will show and hide the contents for that specific navmenu item.*/

var navButtons = document.getElementsByClassName('navi');
// console.log(navButtons)

for(i=0;i<navButtons.length;i++){
    navButtons[i].addEventListener('click', innerSwitch)
}

function innerSwitch(){
    var switchIt = this.querySelectorAll('.inner')[0]
    if(switchIt.style.display === 'block'){
        switchIt.style.display = 'none';
    } else {
        switchIt.style.display = 'block';
    }
}


/*2) to each restaurant name that will show and hide (toggle) the secret menu item for that particular restaurant.*/

var restMenu = document.getElementsByClassName('name');
// console.log(restMenu)

for(i=0;i<restMenu.length;i++){
    restMenu[i].addEventListener('click', daSecret)
}

function daSecret(){
    var showSecret = this.querySelectorAll('.menu')[0]
    if(showSecret.style.display === 'block'){
        showSecret.style.display = 'none';
    } else {
        showSecret.style.display = 'block'
    }
}

/*3) to the thumbs down icon that will add a count (counter) for each time the icon is clicked on.*/

var thumbDown = document.getElementsByClassName('thumb');
// console.log(thumbDown)

for (i=0;i<thumbDown.length;i++){
    thumbDown[i].addEventListener('click', giveThumb);
    var counter = document.createElement('div');
    counter.className = 'dislikes';
    thumbDown[i].appendChild(counter)
}
function giveThumb(){
    var dontLike = this.querySelectorAll('.dislikes')[0]
    dontLike.innerHTML++
}