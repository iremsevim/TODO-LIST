// import { OnClickButton, OnLoadedWindow } from './Events.js'; 

const button = document.createElement('button');
button.textContent = 'Tıkla';
document.body.appendChild(button);
button.style.position = 'absolute';
button.style.top = '75%';
button.style.left = '50%';
button.style.transform = 'translate(-50%, -50%)'; 
button.style.padding = '10px 20px';
button.style.fontSize = '16px';
button.style.borderRadius = '8px';
button.style.cursor = 'pointer';

// button.addEventListener('butonatıklanınca', (event) => {
  
//     const newWindow = window.open('https://www.youtube.com/watch?v=z8Wzr2yN2Fg&list=PLURN6mxdcwL86Q8tCF1Ef6G6rN2jAg5Ht&index=71', '_blank');
//     console.log("sayfayuklendi");
//     newWindow.onload = () => {
//         button.style.backgroundColor = 'red'; 
//     };
// });

// button.onclick = () => {
//     button.dispatchEvent(OnClickButton);
// };

// window.onload = () => {
//     document.body.dispatchEvent(OnLoadedWindow);
   
// };

// window.addEventListener("DOMContentLoaded", run);

// function run() {
//     console.log("sayfa yüklendiiiiii");
// }

// 3. Herhangi bir tuşa basıldığında özel event tetikleme


console.log(window);