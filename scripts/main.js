

let galleryImages = document.querySelectorAll(".grid-item");
let getLatestOpenedImg;
let windowWidth = window.innerWidth;



var imageMap = new Map();
imageMap.set("img1.jpg", "Learning To Be Human");
imageMap.set("img2.jpg", "Leaving Town");
imageMap.set("img3.jpg", "The King Of Diamonds");
imageMap.set("img4.jpg", "Renaissance Nobelman");
imageMap.set("img5.jpg", "Gingerbread House");
imageMap.set("img6.jpg", "Unidentified Fluffy Object (UFO)");
imageMap.set("img7.jpg", "Taking The Plunge");
imageMap.set("img8.jpg", "Candlelight");

var downloadMap = new Map();
downloadMap.set("img1.jpg", "https://www.flickr.com/photos/93970753@N05/49949382071/sizes/l/");
downloadMap.set("img2.jpg", "https://www.flickr.com/photos/93970753@N05/50177838897/sizes/l/");
downloadMap.set("img3.jpg", "https://www.flickr.com/photos/93970753@N05/50211450191/sizes/l/");
downloadMap.set("img4.jpg", "https://www.flickr.com/photos/93970753@N05/50217837356/sizes/l/");
downloadMap.set("img5.jpg", "https://www.flickr.com/photos/93970753@N05/50228768458/sizes/l/");
downloadMap.set("img6.jpg", "https://www.flickr.com/photos/93970753@N05/50232473182/sizes/l/");
downloadMap.set("img7.jpg", "https://www.flickr.com/photos/93970753@N05/50246012981/sizes/l/");
downloadMap.set("img8.jpg", "https://www.flickr.com/photos/93970753@N05/50247625651/sizes/l/");

var linkMap = new Map();
linkMap.set("img1.jpg", "https://www.flickr.com/photos/93970753@N05/49949382071/in/dateposted-public/");
linkMap.set("img2.jpg", "https://www.flickr.com/photos/93970753@N05/50177838897/in/dateposted-public/");
linkMap.set("img3.jpg", "https://www.flickr.com/photos/93970753@N05/50211450191/in/dateposted-public/");
linkMap.set("img4.jpg", "https://www.flickr.com/photos/93970753@N05/50217837356/in/dateposted-public/");
linkMap.set("img5.jpg", "https://www.flickr.com/photos/93970753@N05/50228768458/in/dateposted-public/");
linkMap.set("img6.jpg", "https://www.flickr.com/photos/93970753@N05/50232473182/in/dateposted-public/");
linkMap.set("img7.jpg", "https://www.flickr.com/photos/93970753@N05/50246012981/in/dateposted-public/");
linkMap.set("img8.jpg", "https://www.flickr.com/photos/93970753@N05/50247625651/in/dateposted-public/");



if(galleryImages) {
  galleryImages.forEach(function(image, index){
      image.onclick = function() {
        let imageFileName = image.id;
        let imageTitle = imageMap.get(imageFileName);

        getLatestOpenedImg = index + 1;

        let container = document.body;
        let newImgWindow = document.createElement("div");
        container.appendChild(newImgWindow);
        newImgWindow.setAttribute("class", "img-window");
        newImgWindow.setAttribute("onclick", "closeImg()");

        let newImg = document.createElement("img");
        let newImgText = document.createElement("div");

        let newDownloadA = document.createElement("a");
        let newDownloadIcon = document.createElement("img");
        newDownloadA.appendChild(newDownloadIcon);
        container.appendChild(newDownloadA);
        newDownloadA.setAttribute("href", downloadMap.get(imageFileName));
        newDownloadIcon.setAttribute("src", "images/download.png");
        newDownloadIcon.setAttribute("id", "download-icon");

        let newlinkA = document.createElement("a");
        let newlinkIcon = document.createElement("img");
        newlinkA.appendChild(newlinkIcon);
        container.appendChild(newlinkA);
        newlinkA.setAttribute("href", linkMap.get(imageFileName));
        newlinkIcon.setAttribute("src", "images/external_link.png");
        newlinkIcon.setAttribute("id", "link-icon");

        let newFullscreenA = document.createElement("a");
        let newFullscreenIcon = document.createElement("img");
        newFullscreenA.appendChild(newFullscreenIcon);
        container.appendChild(newFullscreenA);
        newFullscreenIcon.setAttribute("onclick", "fullscreen_enter()");
        newFullscreenIcon.setAttribute("src", "images/fullscreen_enter.png");
        newFullscreenIcon.setAttribute("id", "fullscreen-icon");

        newImgWindow.appendChild(newImg);
        newImgWindow.appendChild(newImgText);

        newImgText.innerHTML = imageMap.get(imageFileName);

        newImgText.setAttribute("id", "current-img-text");
        newImg.setAttribute("src", "images/" + imageFileName);
        newImg.setAttribute("id", "current-img");

        newImg.onload = function()
        {
          let imageWidth = this.width;
          let calcImgToEdge = ((windowWidth - imageWidth)/2)+80;

          let newPrevBtn = document.createElement("a");
          let btnPrevText = document.createTextNode("Prev");
          newPrevBtn.appendChild(btnPrevText);
          container.appendChild(newPrevBtn);
          newPrevBtn.setAttribute("class", "img-btn-prev");
          newPrevBtn.setAttribute("onclick", "changeImg(1)");
          newPrevBtn.style.cssText = "left: " + windowWidth / 8 + "px;";

          let newNextBtn = document.createElement("a");
          let btnNextText = document.createTextNode("next");
          newNextBtn.appendChild(btnNextText);
          container.appendChild(newNextBtn);
          newNextBtn.setAttribute("class", "img-btn-next");
          newNextBtn.setAttribute("onclick", "changeImg(0)");
          newNextBtn.style.cssText = "right: " + windowWidth / 8 + "px;";
        }
      }
  });
}

function closeImg()
{
document.querySelector(".img-window").remove();
document.querySelector(".img-btn-next").remove();
document.querySelector(".img-btn-prev").remove();
document.querySelector("#fullscreen-icon").remove();
document.querySelector("#download-icon").remove();
document.querySelector("#link-icon").remove();
}

function changeImg(changeDir)
{
//document.querySelector("#download-icon").remove();
document.querySelector("#current-img-text").remove();
document.querySelector("#current-img").remove();
document.querySelector("#download-icon").remove();
document.querySelector("#link-icon").remove();

let getImgWindow = document.querySelector(".img-window");
let newImgText = document.createElement("div");
let newImg = document.createElement("img");
let newDownloadA = document.createElement("a");
let newDownloadIcon = document.createElement("img");
let newLinkA = document.createElement("a");
let newLinkIcon = document.createElement("img");
newDownloadA.appendChild(newDownloadIcon);
newLinkA.appendChild(newLinkIcon);
getImgWindow.appendChild(newImg);
getImgWindow.appendChild(newImgText);
document.body.appendChild(newDownloadA);
document.body.appendChild(newLinkA);

let calcNewImg;
if (changeDir === 1)
{
  calcNewImg = getLatestOpenedImg + 1;
  if (calcNewImg > galleryImages.length)
  {
    calcNewImg = 1;
  }
}
if (changeDir === 0)
{
  calcNewImg = getLatestOpenedImg - 1;
  if (calcNewImg < 1)
  {
    calcNewImg = galleryImages.length;
  }
}
let imageNameThing = "img" + calcNewImg + ".jpg";
newDownloadIcon.setAttribute("src", "images/download.png");
newDownloadIcon.setAttribute("id", "download-icon");
newDownloadA.setAttribute("href", downloadMap.get(imageNameThing));
newLinkIcon.setAttribute("src", "images/external_link.png");
newLinkIcon.setAttribute("id", "link-icon");
newLinkA.setAttribute("href", linkMap.get(imageNameThing));
newImgText.innerHTML = imageMap.get(imageNameThing);
newImgText.setAttribute("id", "current-img-text");
newImg.setAttribute("src", "images/img" + calcNewImg + ".jpg");
newImg.setAttribute("id","current-img");

getLatestOpenedImg = calcNewImg;


}

window.addEventListener('keydown', function(e)
  {
    if(e.keyCode == 32 && e.target == document.body)
    {
      e.preventDefault();
    }
  }
);

document.onkeydown = checkKey;

function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '37')
    {
      // left arrow
      changeImg(1);
    }
    else if (e.keyCode == '39')
    {
       // right arrow
       changeImg(0);
    }
    else if (e.keyCode == '32')
    {
       // right arrow
       closeImg();
    }
    else if (e.keyCode == '27')
    {
        //Escape
        closeImg();
    }
}

var elem = document.documentElement;

function fullscreen_enter()
{
  if (elem.requestFullscreen)
  {
    elem.requestFullscreen();
  }
  else if (elem.webkitRequestFullscreen)
  { /* Safari */
    elem.webkitRequestFullscreen();
  }
  else if (elem.msRequestFullscreen)
    { /* IE11 */
    elem.msRequestFullscreen();
  }

  document.querySelector("#fullscreen-icon").remove();

  let newFullscreenA = document.createElement("a");
  let newFullscreenIcon = document.createElement("img");
  newFullscreenA.appendChild(newFullscreenIcon);
  document.body.appendChild(newFullscreenA);
  newFullscreenIcon.setAttribute("onclick", "fullscreen_exit()");
  newFullscreenIcon.setAttribute("src", "images/fullscreen_exit.png");
  newFullscreenIcon.setAttribute("id", "fullscreen-icon");
}


function fullscreen_exit()
{
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) { /* Safari */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) { /* IE11 */
    document.msExitFullscreen();
  }

  remove_fullscreen_icon();
}

function remove_fullscreen_icon()
{
  document.querySelector("#fullscreen-icon").remove();

  let newFullscreenA = document.createElement("a");
  let newFullscreenIcon = document.createElement("img");
  newFullscreenA.appendChild(newFullscreenIcon);
  document.body.appendChild(newFullscreenA);
  newFullscreenIcon.setAttribute("onclick", "fullscreen_enter()");
  newFullscreenIcon.setAttribute("src", "images/fullscreen_enter.png");
  newFullscreenIcon.setAttribute("id", "fullscreen-icon");
}
