const containerId = 'gallerycontainer';

const amountOfImages = 17; //change this if adding new images

const container = document.getElementById(containerId);

let htmlContent = '';

for (let i = 1; i <= amountOfImages; i++) {
  htmlContent += `<div class="grid-item"><img src="https://ik.imagekit.io/64c35uuyg/Portfolio/tr:w-600/${i}.jpg" alt=""></div>`;
}

container.innerHTML = htmlContent;

function showSideBar() {
  const sidebar = document.querySelector('.mobile');
  const close = document.querySelector('.fa-x');
  sidebar.style.display = 'flex';
  close.style.display = 'flex';
}

function closeSideBar() {
  const sidebar = document.querySelector('.mobile');
  const close = document.querySelector('.fa-x');
  sidebar.style.display = 'none';
  close.style.display = 'none';

}

const thresholdWidth = 1090;

// Function to check the window width
function checkWidth() {
    if (window.innerWidth <= thresholdWidth) {
        closeSideBar();
    }
}

// Add event listener for window resize
window.addEventListener('resize', checkWidth);

const gallery = document.querySelector('.gallery');
const about = document.querySelector('.about');
const timeline = document.querySelector('.design-section');

switch(window.location.hash) {
  case '#about':
    gallery.style.display = 'none';
    about.style.display = 'block';
    timeline.style.display = 'none';
    break;
  case '#portfolio':
    gallery.style.display = 'flex';
    about.style.display = 'none';
    timeline.style.display = 'none';
    break;
  case '#experience':
    gallery.style.display = 'none';
    about.style.display = 'none';
    timeline.style.display = 'flex';
    break;
}

window.addEventListener('hashchange', function() {
  switch(window.location.hash) {
    case '#about':
      gallery.style.display = 'none';
      about.style.display = 'block';
      timeline.style.display = 'none';
      break;
    case '#portfolio':
      gallery.style.display = 'flex';
      about.style.display = 'none';
      timeline.style.display = 'none';
      location.reload();
      break;
    case '#experience':
      gallery.style.display = 'none';
      about.style.display = 'none';
      timeline.style.display = 'flex';
      break;
  }
});
