document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".menu-toggle").addEventListener("click", () => {
    document.querySelector(".nav-links").classList.toggle("active");
    document.getElementById("music-toggle").classList.toggle("active");
  });

  const sections = document.querySelectorAll("section, footer");
  const navItems = document.querySelectorAll(".nav-item");
  const observer = new IntersectionObserver(
    (entries) => {
      let visibleSections = entries.filter((entry) => entry.isIntersecting);
      if (visibleSections.length > 0) {
        let firstVisible = visibleSections[0].target.id;
        navItems.forEach((nav) => nav.classList.remove("active-nav"));
        document
          .querySelector(`.nav-item[href="#${firstVisible}"]`)
          ?.classList.add("active-nav");
      }
    },
    { threshold: 0.7 }
  );

  sections.forEach((section) => observer.observe(section));

  let i = 0;
  function typeWriter() {
    const txt = "Hello, I'm Yongsin Limwilaikul (Oak)";
    const speed = 60;
    if (i < txt.length) {
      document.querySelector(".typewriter").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }
  typeWriter();
  let backgroundSong;
  let hoverSound;
  let skipSound;
  let clickSound;

  document.addEventListener(
    "click",
    () => {
      backgroundSong = new Audio("../assets/sound/background_song.mp3");
      backgroundSong.volume = 0.2;
      backgroundSong.loop = true;

      hoverSound = new Audio("../assets/sound/hover.mp3");
      hoverSound.volume = 0.3;

      skipSound = new Audio("../assets/sound/skip.mp3");
      skipSound.volume = 0.5;

      clickSound = new Audio("../assets/sound/click.mp3");
      clickSound.volume = 0.5;

      backgroundSong.play();
      document.querySelectorAll(".music-toggle").forEach((btn) => {
        btn.innerText = "Mute Song";
      });
    },
    { once: true }
  );

  document.querySelectorAll(".music-toggle").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      if (backgroundSong.muted) {
        backgroundSong.muted = false;
        e.target.innerText = "Mute Song";
      } else {
        backgroundSong.muted = true;
        e.target.innerText = "Unmute Song";
      }
    });
  });

  let navItem = document.querySelectorAll(".nav-item");
  let btn = document.querySelectorAll(".nes-btn");
  navItem.forEach((item) => {
    item.addEventListener("mouseenter", () => {
      if (hoverSound) {
        hoverSound.currentTime = 0;
        hoverSound.play();
      }
    });
  });

  navItem.forEach((item) => {
    item.addEventListener("click", () => {
      if (skipSound) {
        skipSound.currentTime = 0.07;
        skipSound.play();
      }
    });
  });

  btn.forEach((button) => {
    button.addEventListener("click", () => {
      if (clickSound) {
        clickSound.currentTime = 0;
        clickSound.play();
      }
    });
  });
});

const ellipsisText = (btn) => {
  const text = document.querySelector(`#${btn.getAttribute("for")}`);
  text.classList.toggle("ellipsisText");
  btn.innerHTML = btn.innerHTML === "More" ? "Hide" : "More";
};
