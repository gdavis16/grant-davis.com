var popcorn = document.querySelector(".popcorn img");

function load_img(gif_name)
{
  let gif_container = document.querySelector("." + gif_name);
  let gif_div = document.createElement("div");
  gif_container.prepend(gif_div);
  let gif_img = document.createElement("img");
  gif_div.appendChild(gif_img);
  gif_div.setAttribute("class", "gif_container");
  gif_img.setAttribute("src", "gifs/" + gif_name + ".gif");

}

popcorn.onload = function()
{
  load_img("circles");
  var circles = document.querySelector(".circles img");
  circles.onload = function()
  {
    load_img("deskfan");
    var deskfan = document.querySelector(".deskfan img");
    deskfan.onload = function()
    {
      load_img("waterfall");
      var waterfall = document.querySelector(".waterfall img");
      waterfall.onload = function()
      {
        load_img("rising_temple");
        rising_temple = document.querySelector(".rising_temple img");
      }
    }
  }
}
