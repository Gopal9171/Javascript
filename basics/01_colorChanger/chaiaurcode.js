// console.log("hitesh")
// const buttons = document.querySelectorAll('.button');
// const body = document.querySelector('body');

// buttons.forEach(function (button) {
// //   console.log(button);
//   button.addEventListener('click', function (e) {
//     console.log(e);
//     console.log(e.target);
//    if(e.target.id==='grey')
//    {
//       body.style.backgroundColor=e.target.id;
//    }
//    if(e.target.id==='yellow')
//    {
//       body.style.backgroundColor=e.target.id;
//    }
//    if(e.target.id==='blue')
//    {
//       body.style.backgroundColor=e.target.id;
//    }
//    if(e.target.id==='white')
//    {
//       body.style.backgroundColor=e.target.id;
//    }
//    if(e.target.id==='purple')
//    {
//       body.style.backgroundColor=e.target.id;
//    }
//    if(e.target.id==='red')
//    {
//       body.style.backgroundColor=e.target.id;
//    }
//    if(e.target.id==='orange')
//    {
//       body.style.backgroundColor=e.target.id;
//    }
    
//   });
// });

// *************second method*************
console.log("hitesh");
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

// Define a map of button IDs to background colors
const colorMap = {
  'grey': 'grey',
  'yellow': 'yellow',
  'blue': 'blue',
  'white': 'black',
  'purple': 'purple',
  'red': 'red',
  'orange': 'orange'
};

buttons.forEach(function (button) {
  button.addEventListener('click', function (e) {
    const buttonId = e.target.id;
    const color = colorMap[buttonId];
    if (color) {
      body.style.backgroundColor = color;
    }
  });
});
