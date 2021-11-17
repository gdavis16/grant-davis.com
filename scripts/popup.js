let projectThumbs = document.querySelectorAll(".project-thumbnail");
let projectCurrentIndex = 0;
highlightThumbnailProject(projectCurrentIndex);

if (projectThumbs)
{
  projectThumbs.forEach(function(image, index)
  {
    image.onclick = function()
    {
      highlightThumbnailProject(index);
    }
  }
)}

document.querySelector(".project-prev-button").onclick = function()
{
  projectCurrentIndex = projectCurrentIndex - 1;
  if (projectCurrentIndex < 0)
  {
    projectCurrentIndex = 4;
  }
  highlightThumbnailProject(projectCurrentIndex);
}

document.querySelector(".project-next-button").onclick = function()
{
  projectCurrentIndex = projectCurrentIndex + 1;
  if (projectCurrentIndex > 4)
  {
    projectCurrentIndex = 0;
  }
  highlightThumbnailProject(projectCurrentIndex);
}

function highlightThumbnailProject(index)
{
  projectCurrentIndex = index;
  let mainSlider = document.querySelector(".project-image-container");
  let spacing = -index*0.45*window.innerWidth
  mainSlider.style.left = spacing + "px";

  //1
  if (index + 1 == 1)
  {
    highlightProject(index);
    unhighlightProject(2);
    unhighlightProject(3);
    unhighlightProject(4);
    unhighlightProject(5);
  }
  //2
  else if (index + 1 == 2)
  {
    unhighlightProject(1);
    highlightProject(index);
    unhighlightProject(3);
    unhighlightProject(4);
    unhighlightProject(5);
  }
  //3
  else if (index + 1 == 3)
  {
    unhighlightProject(1);
    unhighlightProject(2);
    highlightProject(index);
    unhighlightProject(4);
    unhighlightProject(5);
  }
  //4
  else if (index + 1 == 4)
  {
    unhighlightProject(1);
    unhighlightProject(2);
    unhighlightProject(3);
    highlightProject(index);
    unhighlightProject(5);
  }
  //5
  else
  {
    unhighlightProject(1);
    unhighlightProject(2);
    unhighlightProject(3);
    unhighlightProject(4);
    highlightProject(index);
  }
}

function highlightProject(index)
{
  let thumbname = ".project-thumb" + (index + 1) + " img";
  //document.querySelector(thumbname).style.transform = "scale(8vw/(8vw - 6px))";
  document.querySelector(thumbname).style.opacity = "100%";
  document.querySelector(thumbname).style.outline = "2px solid black";
}

function unhighlightProject(index)
{
  let thumbname = ".project-thumb" + (index) + " img";
  //document.querySelector(thumbname).style.transform = "scale(1)";
  document.querySelector(thumbname).style.opacity = "50%";
  document.querySelector(thumbname).style.outline = "0px";
}

let setThumbs = document.querySelectorAll(".set-thumbnail");
let setCurrentIndex = 0;
highlightThumbnailset(setCurrentIndex);

if (setThumbs)
{
  setThumbs.forEach(function(image, index)
  {
    image.onclick = function()
    {
      highlightThumbnailset(index);
    }
  }
)}

document.querySelector(".set-prev-button").onclick = function()
{
  setCurrentIndex = setCurrentIndex - 1;
  if (setCurrentIndex < 0)
  {
    setCurrentIndex = 4;
  }
  highlightThumbnailset(setCurrentIndex);
}

document.querySelector(".set-next-button").onclick = function()
{
  setCurrentIndex = setCurrentIndex + 1;
  if (setCurrentIndex > 4)
  {
    setCurrentIndex = 0;
  }
  highlightThumbnailset(setCurrentIndex);
}

function highlightThumbnailset(index)
{
  setCurrentIndex = index;
  let mainSlider = document.querySelector(".set-image-container");
  let spacing = -index*0.45*window.innerWidth
  mainSlider.style.left = spacing + "px";

  //1
  if (index + 1 == 1)
  {
    highlightset(index);
    unhighlightset(2);
    unhighlightset(3);
    unhighlightset(4);
    unhighlightset(5);
  }
  //2
  else if (index + 1 == 2)
  {
    unhighlightset(1);
    highlightset(index);
    unhighlightset(3);
    unhighlightset(4);
    unhighlightset(5);
  }
  //3
  else if (index + 1 == 3)
  {
    unhighlightset(1);
    unhighlightset(2);
    highlightset(index);
    unhighlightset(4);
    unhighlightset(5);
  }
  //4
  else if (index + 1 == 4)
  {
    unhighlightset(1);
    unhighlightset(2);
    unhighlightset(3);
    highlightset(index);
    unhighlightset(5);
  }
  //5
  else
  {
    unhighlightset(1);
    unhighlightset(2);
    unhighlightset(3);
    unhighlightset(4);
    highlightset(index);
  }
}

function highlightset(index)
{
  let thumbname = ".set-thumb" + (index + 1) + " img";
  //document.querySelector(thumbname).style.transform = "scale(8vw/(8vw - 6px))";
  document.querySelector(thumbname).style.opacity = "100%";
  document.querySelector(thumbname).style.outline = "2px solid black";
}

function unhighlightset(index)
{
  let thumbname = ".set-thumb" + (index) + " img";
  //document.querySelector(thumbname).style.transform = "scale(1)";
  document.querySelector(thumbname).style.opacity = "50%";
  document.querySelector(thumbname).style.outline = "0px";
}

$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});
