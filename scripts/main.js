let galleryImages = document.querySelectorAll(".grid-item");
let getLatestOpenedImg;
let windowWidth = window.innerWidth;

var $grid = $('.grid').imagesLoaded( function() {
  $grid.removeClass('is-invisible');
  $grid.masonry({
    itemSelector: '.grid-item',
    columnWidth: 360,
    fitWidth: true
  });
});


var imageMap = new Map();
imageMap.set("img63.jpg", "Candlelight");
imageMap.set("img62.jpg", "Taking The Plunge");
imageMap.set("img61.jpg", "The Painted City");
imageMap.set("img60.jpg", "Scavenging The Descroyer");
imageMap.set("img59.jpg", "A Weathered Lodging");
imageMap.set("img58.jpg", "Resistance Skimmer");
imageMap.set("img57.jpg", "Inside A Pokeball");
imageMap.set("img56.jpg", "Mountiantop Shrine");
imageMap.set("img55.jpg", "Pink Poison");
imageMap.set("img54.jpg", "Jack And The Beanstalk");
imageMap.set("img53.jpg", "Gingerbread House");
imageMap.set("img52.jpg", "Stag Beatle");
imageMap.set("img51.jpg", "The King Of Diamonds");
imageMap.set("img50.jpg", "Leaving Town");
imageMap.set("img49.jpg", "Unidentified Fluffy Object (UFO)");
imageMap.set("img48.jpg", "Trying To Be Human");
imageMap.set("img47.jpg", "Renaissance Nobleman");
imageMap.set("img46.jpg", "Bunny Basket");
imageMap.set("img45.jpg", "The Calm Before The Storm");
imageMap.set("img44.jpg", "Handleset");
imageMap.set("img43.jpg", "Caged Desk Fan");
imageMap.set("img42.jpg", "Cathedral Daxion");
imageMap.set("img41.jpg", "Sepia Solaris");
imageMap.set("img40.jpg", "Bowling Pins");
imageMap.set("img39.jpg", "Collab: Tropical Shores");
imageMap.set("img38.jpg", "BOXER - Iron Arcade");
imageMap.set("img37.jpg", "Wack-A-Mole - Iron Arcade");
imageMap.set("img36.jpg", "Skull Island - Skara Kikos");
imageMap.set("img35.jpg", "Ninja Training");
imageMap.set("img34.jpg", "Cheesy Island");
imageMap.set("img33.jpg", "Death Ninja");
imageMap.set("img32.jpg", "Helm's Deep Explosion");
imageMap.set("img31.jpg", "The Crypt Keeper");
imageMap.set("img30.jpg", "Ocr Pit");
imageMap.set("img29.jpg", "Sailor Moon");
imageMap.set("img28.jpg", "Mcyrow Cassul");
imageMap.set("img27.jpg", "Desert");
imageMap.set("img26.jpg", "Hibiscus Cannon");
imageMap.set("img25.jpg", "Wizard Tower");
imageMap.set("img24.jpg", "The Ungerground");
imageMap.set("img23.jpg", "Fishing On The Wharf");
imageMap.set("img22.jpg", "Free Fish!");
imageMap.set("img21.jpg", "Seagate Isle - Skara Kikos");
imageMap.set("img20.jpg", "Pirates Paradise");
imageMap.set("img19.jpg", "Undermining");
imageMap.set("img18.jpg", "Monkey Rock - Skara Kikos");
imageMap.set("img17.jpg", "Gator Cove - Skara Kikos");
imageMap.set("img16.jpg", "Mountian Village Raid");
imageMap.set("img15.jpg", "Reka Lagash Monestary");
imageMap.set("img14.jpg", "Castle Geartop");
imageMap.set("img13.jpg", "Cheesy Library");
imageMap.set("img12.jpg", "At Paths End");
imageMap.set("img11.jpg", "The Falls Of Skara Kikos");
imageMap.set("img10.jpg", "Colonial Outpost");
imageMap.set("img9.jpg", "The Cheesy Castle");
imageMap.set("img8.jpg", "Cheesy Chinese Checkers");
imageMap.set("img7.jpg", "Quest For The Golden Cheese ");
imageMap.set("img6.jpg", "Lothlorien");
imageMap.set("img5.jpg", "Thunder Cheese");
imageMap.set("img4.jpg", "Hydro-Cheese Core");
imageMap.set("img3.jpg", "Cheese Planet");
imageMap.set("img2.jpg", "Sword In The Cheese");
imageMap.set("img1.jpg", "Damsel In Distress");



var downloadMap = new Map();
downloadMap.set("img63.jpg", "https://www.flickr.com/photos/93970753@N05/50247625651/sizes/l/");
downloadMap.set("img62.jpg", "https://www.flickr.com/photos/93970753@N05/50246012981/sizes/l/");
downloadMap.set("img61.jpg", "https://www.flickr.com/photos/93970753@N05/49404328886/sizes/l/");
downloadMap.set("img60.jpg", "https://www.flickr.com/photos/93970753@N05/40990215265/sizes/l/");
downloadMap.set("img59.jpg", "https://www.flickr.com/photos/93970753@N05/33878299116/sizes/l/");
downloadMap.set("img58.jpg", "https://www.flickr.com/photos/93970753@N05/34072321881/sizes/l/");
downloadMap.set("img57.jpg", "https://www.flickr.com/photos/93970753@N05/41825769785/sizes/l/");
downloadMap.set("img56.jpg", "https://www.flickr.com/photos/93970753@N05/43790022331/sizes/l/");
downloadMap.set("img55.jpg", "https://www.flickr.com/photos/93970753@N05/34032907674/sizes/l/");
downloadMap.set("img54.jpg", "https://www.flickr.com/photos/93970753@N05/34236054303/sizes/l/");
downloadMap.set("img53.jpg", "https://www.flickr.com/photos/93970753@N05/50228768458/sizes/l/");
downloadMap.set("img52.jpg", "https://www.flickr.com/photos/93970753@N05/34422318133/sizes/l/");
downloadMap.set("img51.jpg", "https://www.flickr.com/photos/93970753@N05/50211450191/sizes/l/");
downloadMap.set("img50.jpg", "https://www.flickr.com/photos/93970753@N05/50177838897/sizes/l/");
downloadMap.set("img49.jpg", "https://www.flickr.com/photos/93970753@N05/50232473182/sizes/l/");
downloadMap.set("img48.jpg", "https://www.flickr.com/photos/93970753@N05/49949382071/sizes/l/");
downloadMap.set("img47.jpg", "https://www.flickr.com/photos/93970753@N05/50217837356/sizes/l/");
downloadMap.set("img46.jpg", "https://www.flickr.com/photos/93970753@N05/34188913733/sizes/l/");
downloadMap.set("img45.jpg", "https://www.flickr.com/photos/93970753@N05/34499721042/sizes/l/");
downloadMap.set("img44.jpg", "https://www.flickr.com/photos/93970753@N05/34756234142/sizes/l/");
downloadMap.set("img43.jpg", "https://www.flickr.com/photos/93970753@N05/34676666331/sizes/l/");
downloadMap.set("img42.jpg", "https://www.flickr.com/photos/93970753@N05/48431612902/sizes/l/");
downloadMap.set("img41.jpg", "https://www.flickr.com/photos/93970753@N05/34915675586/sizes/l/");
downloadMap.set("img40.jpg", "https://www.flickr.com/photos/93970753@N05/33917476113/sizes/l/");
downloadMap.set("img39.jpg", "https://www.flickr.com/photos/93970753@N05/31824127050/sizes/l/");
downloadMap.set("img38.jpg", "https://www.flickr.com/photos/93970753@N05/33940377864/sizes/l/");
downloadMap.set("img37.jpg", "https://www.flickr.com/photos/93970753@N05/33974037703/sizes/l/");
downloadMap.set("img36.jpg", "https://www.flickr.com/photos/93970753@N05/20323951863/sizes/l/");
downloadMap.set("img35.jpg", "https://www.flickr.com/photos/93970753@N05/16327256376/sizes/l/");
downloadMap.set("img34.jpg", "https://www.flickr.com/photos/93970753@N05/20500090229/sizes/l/");
downloadMap.set("img33.jpg", "https://www.flickr.com/photos/93970753@N05/16090910346/sizes/l/");
downloadMap.set("img32.jpg", "https://www.flickr.com/photos/93970753@N05/15984199698/sizes/l/");
downloadMap.set("img31.jpg", "https://www.flickr.com/photos/93970753@N05/15823773557/sizes/l/");
downloadMap.set("img30.jpg", "https://www.flickr.com/photos/93970753@N05/15334446434/sizes/l/");
downloadMap.set("img29.jpg", "https://www.flickr.com/photos/93970753@N05/34615039241/sizes/l/");
downloadMap.set("img28.jpg", "https://www.flickr.com/photos/93970753@N05/29376070702/sizes/l/");
downloadMap.set("img27.jpg", "https://www.flickr.com/photos/93970753@N05/24591769763/sizes/l/");
downloadMap.set("img26.jpg", "https://www.flickr.com/photos/93970753@N05/31251538654/sizes/l/");
downloadMap.set("img25.jpg", "https://www.flickr.com/photos/93970753@N05/23827501402/sizes/l/");
downloadMap.set("img24.jpg", "https://www.flickr.com/photos/93970753@N05/23424559634/sizes/l/");
downloadMap.set("img23.jpg", "https://www.flickr.com/photos/93970753@N05/15535345890/sizes/l/");
downloadMap.set("img22.jpg", "https://www.flickr.com/photos/93970753@N05/15623530749/sizes/l/");
downloadMap.set("img21.jpg", "https://www.flickr.com/photos/93970753@N05/15137675952/sizes/l/");
downloadMap.set("img20.jpg", "https://www.flickr.com/photos/93970753@N05/15016892233/sizes/l/");
downloadMap.set("img19.jpg", "https://www.flickr.com/photos/93970753@N05/14718343841/sizes/l/");
downloadMap.set("img18.jpg", "https://www.flickr.com/photos/93970753@N05/14703913178/sizes/l/");
downloadMap.set("img17.jpg", "https://www.flickr.com/photos/93970753@N05/14857787168/sizes/l/");
downloadMap.set("img16.jpg", "https://www.flickr.com/photos/93970753@N05/14837114371/sizes/l/");
downloadMap.set("img15.jpg", "https://www.flickr.com/photos/93970753@N05/15591177860/sizes/l/");
downloadMap.set("img14.jpg", "https://www.flickr.com/photos/93970753@N05/14765608298/sizes/l/");
downloadMap.set("img13.jpg", "https://www.flickr.com/photos/93970753@N05/14180154405/sizes/l/");
downloadMap.set("img12.jpg", "https://www.flickr.com/photos/93970753@N05/14493217409/sizes/l/");
downloadMap.set("img11.jpg", "https://www.flickr.com/photos/93970753@N05/14639876886/sizes/l/");
downloadMap.set("img10.jpg", "https://www.flickr.com/photos/93970753@N05/14669794236/sizes/l/");
downloadMap.set("img9.jpg", "https://www.flickr.com/photos/93970753@N05/14130236470/sizes/l/");
downloadMap.set("img8.jpg", "https://www.flickr.com/photos/93970753@N05/14301664615/sizes/l/");
downloadMap.set("img7.jpg", "https://www.flickr.com/photos/93970753@N05/14228702583/sizes/l/");
downloadMap.set("img6.jpg", "https://www.flickr.com/photos/93970753@N05/11498977096/sizes/l/");
downloadMap.set("img5.jpg", "https://www.flickr.com/photos/93970753@N05/14101085317/sizes/l/");
downloadMap.set("img4.jpg", "https://www.flickr.com/photos/93970753@N05/14038513430/sizes/l/");
downloadMap.set("img3.jpg", "https://www.flickr.com/photos/93970753@N05/14080006130/sizes/l/");
downloadMap.set("img2.jpg", "https://www.flickr.com/photos/93970753@N05/14068704297/sizes/l/");
downloadMap.set("img1.jpg", "https://www.flickr.com/photos/93970753@N05/9067833050/sizes/l/");

var linkMap = new Map();
linkMap.set("img63.jpg", "https://www.flickr.com/photos/93970753@N05/50247625651/in/dateposted-public/");
linkMap.set("img62.jpg", "https://www.flickr.com/photos/93970753@N05/50246012981/in/dateposted-public/");
linkMap.set("img61.jpg", "https://www.flickr.com/photos/93970753@N05/49404328886/in/dateposted-public/");
linkMap.set("img60.jpg", "https://www.flickr.com/photos/93970753@N05/40990215265/in/dateposted-public/");
linkMap.set("img59.jpg", "https://www.flickr.com/photos/93970753@N05/33878299116/in/dateposted-public/");
linkMap.set("img58.jpg", "https://www.flickr.com/photos/93970753@N05/34072321881/in/dateposted-public/");
linkMap.set("img57.jpg", "https://www.flickr.com/photos/93970753@N05/41825769785/in/dateposted-public/");
linkMap.set("img56.jpg", "https://www.flickr.com/photos/93970753@N05/43790022331/in/dateposted-public/");
linkMap.set("img55.jpg", "https://www.flickr.com/photos/93970753@N05/34032907674/in/dateposted-public/");
linkMap.set("img54.jpg", "https://www.flickr.com/photos/93970753@N05/34236054303/in/dateposted-public/");
linkMap.set("img53.jpg", "https://www.flickr.com/photos/93970753@N05/50228768458/in/dateposted-public/");
linkMap.set("img52.jpg", "https://www.flickr.com/photos/93970753@N05/34422318133/in/dateposted-public/");
linkMap.set("img51.jpg", "https://www.flickr.com/photos/93970753@N05/50211450191/in/dateposted-public/");
linkMap.set("img50.jpg", "https://www.flickr.com/photos/93970753@N05/50177838897/in/dateposted-public/");
linkMap.set("img49.jpg", "https://www.flickr.com/photos/93970753@N05/50232473182/in/dateposted-public/");
linkMap.set("img48.jpg", "https://www.flickr.com/photos/93970753@N05/49949382071/in/dateposted-public/");
linkMap.set("img47.jpg", "https://www.flickr.com/photos/93970753@N05/50217837356/in/dateposted-public/");
linkMap.set("img46.jpg", "https://www.flickr.com/photos/93970753@N05/34188913733/in/dateposted-public/");
linkMap.set("img45.jpg", "https://www.flickr.com/photos/93970753@N05/34499721042/in/dateposted-public/");
linkMap.set("img44.jpg", "https://www.flickr.com/photos/93970753@N05/34756234142/in/dateposted-public/");
linkMap.set("img43.jpg", "https://www.flickr.com/photos/93970753@N05/34676666331/in/dateposted-public/");
linkMap.set("img42.jpg", "https://www.flickr.com/photos/93970753@N05/48431612902/in/dateposted-public/");
linkMap.set("img41.jpg", "https://www.flickr.com/photos/93970753@N05/34915675586/in/dateposted-public/");
linkMap.set("img40.jpg", "https://www.flickr.com/photos/93970753@N05/33917476113/in/dateposted-public/");
linkMap.set("img39.jpg", "https://www.flickr.com/photos/93970753@N05/31824127050/in/dateposted-public/");
linkMap.set("img38.jpg", "https://www.flickr.com/photos/93970753@N05/33940377864/in/dateposted-public/");
linkMap.set("img37.jpg", "https://www.flickr.com/photos/93970753@N05/33974037703/in/dateposted-public/");
linkMap.set("img36.jpg", "https://www.flickr.com/photos/93970753@N05/20323951863/in/dateposted-public/");
linkMap.set("img35.jpg", "https://www.flickr.com/photos/93970753@N05/16327256376/in/dateposted-public/");
linkMap.set("img34.jpg", "https://www.flickr.com/photos/93970753@N05/20500090229/in/dateposted-public/");
linkMap.set("img33.jpg", "https://www.flickr.com/photos/93970753@N05/16090910346/in/dateposted-public/");
linkMap.set("img32.jpg", "https://www.flickr.com/photos/93970753@N05/15984199698/in/dateposted-public/");
linkMap.set("img31.jpg", "https://www.flickr.com/photos/93970753@N05/15823773557/in/dateposted-public/");
linkMap.set("img30.jpg", "https://www.flickr.com/photos/93970753@N05/15334446434/in/dateposted-public/");
linkMap.set("img29.jpg", "https://www.flickr.com/photos/93970753@N05/34615039241/in/dateposted-public/");
linkMap.set("img28.jpg", "https://www.flickr.com/photos/93970753@N05/29376070702/in/dateposted-public/");
linkMap.set("img27.jpg", "https://www.flickr.com/photos/93970753@N05/24591769763/in/dateposted-public/");
linkMap.set("img26.jpg", "https://www.flickr.com/photos/93970753@N05/31251538654/in/dateposted-public/");
linkMap.set("img25.jpg", "https://www.flickr.com/photos/93970753@N05/23827501402/in/dateposted-public/");
linkMap.set("img24.jpg", "https://www.flickr.com/photos/93970753@N05/23424559634/in/dateposted-public/");
linkMap.set("img23.jpg", "https://www.flickr.com/photos/93970753@N05/15535345890/in/dateposted-public/");
linkMap.set("img22.jpg", "https://www.flickr.com/photos/93970753@N05/15623530749/in/dateposted-public/");
linkMap.set("img21.jpg", "https://www.flickr.com/photos/93970753@N05/15137675952/in/dateposted-public/");
linkMap.set("img20.jpg", "https://www.flickr.com/photos/93970753@N05/15016892233/in/dateposted-public/");
linkMap.set("img19.jpg", "https://www.flickr.com/photos/93970753@N05/14718343841/in/dateposted-public/");
linkMap.set("img18.jpg", "https://www.flickr.com/photos/93970753@N05/14703913178/in/dateposted-public/");
linkMap.set("img17.jpg", "https://www.flickr.com/photos/93970753@N05/14857787168/in/dateposted-public/");
linkMap.set("img16.jpg", "https://www.flickr.com/photos/93970753@N05/14837114371/in/dateposted-public/");
linkMap.set("img15.jpg", "https://www.flickr.com/photos/93970753@N05/15591177860/in/dateposted-public/");
linkMap.set("img14.jpg", "https://www.flickr.com/photos/93970753@N05/14765608298/in/dateposted-public/");
linkMap.set("img13.jpg", "https://www.flickr.com/photos/93970753@N05/14180154405/in/dateposted-public/");
linkMap.set("img12.jpg", "https://www.flickr.com/photos/93970753@N05/14493217409/in/dateposted-public/");
linkMap.set("img11.jpg", "https://www.flickr.com/photos/93970753@N05/14639876886/in/dateposted-public/");
linkMap.set("img10.jpg", "https://www.flickr.com/photos/93970753@N05/14669794236/in/dateposted-public/");
linkMap.set("img9.jpg", "https://www.flickr.com/photos/93970753@N05/14130236470/in/dateposted-public/");
linkMap.set("img8.jpg", "https://www.flickr.com/photos/93970753@N05/14301664615/in/dateposted-public/");
linkMap.set("img7.jpg", "https://www.flickr.com/photos/93970753@N05/14228702583/in/dateposted-public/");
linkMap.set("img6.jpg", "https://www.flickr.com/photos/93970753@N05/11498977096/in/dateposted-public/");
linkMap.set("img5.jpg", "https://www.flickr.com/photos/93970753@N05/14101085317/in/dateposted-public/");
linkMap.set("img4.jpg", "https://www.flickr.com/photos/93970753@N05/14038513430/in/dateposted-public/");
linkMap.set("img3.jpg", "https://www.flickr.com/photos/93970753@N05/14080006130/in/dateposted-public/");
linkMap.set("img2.jpg", "https://www.flickr.com/photos/93970753@N05/14068704297/in/dateposted-public/");
linkMap.set("img1.jpg", "https://www.flickr.com/photos/93970753@N05/9067833050/in/dateposted-public/");

if(galleryImages) {
  galleryImages.forEach(function(image, index){
      image.onclick = function() {
        let imageFileName = image.id;
        let imageTitle = imageMap.get(imageFileName);

        getLatestOpenedImg = galleryImages.length - index;
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

          let newPrevBtn = document.createElement("img");
          container.appendChild(newPrevBtn);
          newPrevBtn.setAttribute("src", "images/prev_btn.png");
          newPrevBtn.setAttribute("class", "img-btn-prev");
          newPrevBtn.setAttribute("onclick", "changeImg(0)");
          //newPrevBtn.style.cssText = "left: " + windowWidth / 8 + "px;";

          let newNextBtn = document.createElement("img");
          container.appendChild(newNextBtn);
          newNextBtn.setAttribute("src", "images/next_btn.png");
          newNextBtn.setAttribute("class", "img-btn-next");
          newNextBtn.setAttribute("onclick", "changeImg(1)");
          //newNextBtn.style.cssText = "right: " + windowWidth / 8 + "px;";
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
if (changeDir === 1) //Next
{
  calcNewImg = getLatestOpenedImg - 1;
  if (calcNewImg < 1)
  {
    calcNewImg = galleryImages.length;
  }
}
if (changeDir === 0) //Previous
{
  calcNewImg = getLatestOpenedImg + 1;
  if (calcNewImg > galleryImages.length)
  {
    calcNewImg = 1;
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

function topFunction() {
  currentYOffset = self.pageYOffset;
  initYOffset = currentYOffset;

  var intervalId = setInterval(function(){
  currentYOffset -= initYOffset*0.025;
  document.body.scrollTop = currentYOffset ;
  document.documentElement.scrollTop = currentYOffset;

    if(self.pageYOffset == 0){
      clearInterval(intervalId);
    }
  }, 20);
}
