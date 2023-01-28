import  throttle from "lodash.throttle";
import Player from '@vimeo/player';



const iframe = document.querySelector('iframe');

const player = new Player(iframe);


const LOCALSTORAGE_KEY = "videoplayer-current-time"

player.on("timeupdate", throttle(setValueOfLocalStorage,1000))




function setValueOfLocalStorage(data){
   
 localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(data.seconds))
//  setCurrentTime(data) 
}
// function setCurrentTime(data){
// const currentTime = localStorage.getItem(LOCALSTORAGE_KEY)
// data.seconds = JSON.parse(currentTime)
// console.log(data.seconds)

// }
const currentTime = localStorage.getItem(LOCALSTORAGE_KEY)
player.setCurrentTime(currentTime).then(function(seconds) {
    
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            
            break;

        default:
         
            break;
    }
});
// Нужно доделать, чтобы сохранялось после перезагрузки время, не понимаю куда тыкнуть