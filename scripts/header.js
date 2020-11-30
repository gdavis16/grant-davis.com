window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80)
  {
    document.querySelector(".header").style.height = "6vh";

    document.querySelector(".profile-picture").style.height = "5vh";
    document.querySelector(".profile-picture").style.width = "5vh";
    document.querySelector(".profile-picture").style.top = "0.5vh";

    document.querySelector(".website-link").style.width = "12vw";
    document.querySelector(".website-link").style.height = "6vh";

    document.querySelector(".website-name").style.lineHeight = "2vh";
    document.querySelector(".website-name").style.fontSize = "2vh";
    document.querySelector(".website-name").style.left = "calc(2.5vw + 6vh)";
    document.querySelector(".website-name").style.top = "0.8vh";

    document.querySelector(".website-description").style.lineHeight = "2vh";
    document.querySelector(".website-description").style.fontSize = "2vh";
    document.querySelector(".website-description").style.left = "calc(2.5vw + 6vh)";
    document.querySelector(".website-description").style.top = "3.2vh";

    let navlinkList = document.querySelectorAll(".navlink,.navlink-active");

      navlinkList.forEach(function(link)
      {
          link.style.lineHeight = "2vh";
          link.style.fontSize = "2vh";
          link.style.paddingRight = "1vw";
      })

    document.querySelector(".navlink-list").style.top = "2vh";

  }
  else
  {
    document.querySelector(".header").style.height = "10vh";

    document.querySelector(".profile-picture").style.height = "8vh";
    document.querySelector(".profile-picture").style.width = "8vh";
    document.querySelector(".profile-picture").style.top = "1vh";

    document.querySelector(".website-link").style.width = "15vw";
    document.querySelector(".website-link").style.height = "10vh";

    document.querySelector(".website-name").style.lineHeight = "2.5vh";
    document.querySelector(".website-name").style.fontSize = "2.5vh";
    document.querySelector(".website-name").style.left = "calc(3vw + 8vh)";
    document.querySelector(".website-name").style.top = "2.3vh";

    document.querySelector(".website-description").style.lineHeight = "2.5vh";
    document.querySelector(".website-description").style.fontSize = "2.5vh";
    document.querySelector(".website-description").style.left = "calc(3vw + 8vh)";
    document.querySelector(".website-description").style.top = "5.2vh";


    document.querySelector(".navlink-list").style.top = "3.75vh";

    let navlinkList = document.querySelectorAll(".navlink,.navlink-active");

      navlinkList.forEach(function(link)
      {
          link.style.lineHeight = "2.5vh";
          link.style.fontSize = "2.5vh";
          link.style.paddingRight = "1.5vw";
      })
  }
}
