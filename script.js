function locomotive() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".wrapper"),
    smooth: true,
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy(".wrapper", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    pinType: document.querySelector(".wrapper").style.transform
      ? "transform"
      : "fixed",
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();
}
locomotive();

function loader() {
  let loaderHeading = document.querySelector(".loader .textbox h3");
  var clutter1 = "";
  loaderHeading.textContent.split("").forEach(function (charc) {
    clutter1 += `<span>${charc}</span>`;
  });
  loaderHeading.innerHTML = clutter1;

  setTimeout(() => {
    document.fonts.ready.then(function () {
      const loader = document.querySelector(".loader");

      let tl1 = gsap.timeline();

      tl1
        .to(".textbox h3 span", {
          stagger: 0.1,
          filter: "blur(0px)",
          duration: 0.8,
          opacity: 1,
          ease: Expo,
        })
        .to(".textbox h3 span", {
          stagger: 0.1,
          filter: "blur(2px)",
          duration: 0.2,
          opacity: 0,
          ease: Expo,
        })
        .to(loader, {
          height: "0vh",
          onComplete: () => {
            loader.style.display = none;
          },
        })
        .to(loader.children[0], {
          display: "none",
        });
    });
  }, 2000);
}

loader();

function cursor() {
  document.addEventListener("mousemove", function (event) {
    gsap.to(".wrapper .cursor", {
      top: event.y,
      left: event.x,
      duration: 0.3,
    });
  });
}
// cursor();

function notch() {
  let iBox = document.querySelector(".notch .iconbox");
  let moon = document.querySelector(".notch .iconbox .moon");
  let sun = document.querySelector(".notch .iconbox .sun");
  let toggle = 0;

  iBox.addEventListener("click", function () {
    if (toggle === 0) {
      gsap.to(moon, {
        top: "-100%",
        left: "-30%",
      });

      gsap.to(sun, {
        top: "0%",
        left: "0%",
      });

      toggle = 1;
    } else {
      gsap.to(moon, {
        top: "0%",
        left: "0%",
      });

      gsap.to(sun, {
        top: "100%",
        left: "-30%",
      });

      toggle = 0;
    }
  });
}
notch();

function sec1() {
  gsap.from(".t1, .t2", {
    y: 1000,
    delay: 5.3,
    duration: 0.8,
    ease: "expo.out",
  });
  gsap.from(".t3, .t4", {
    delay: 5.4,
    y: 1000,
    duration: 0.9,
    ease: "expo.out",
  });
  gsap.from(".t5, .t6", {
    delay: 5.5,
    y: 1000,
    duration: 0.9,
    ease: "expo.out",
  });
  gsap.from(".t7, .t8", {
    delay: 5.6,
    y: 1000,
    duration: 0.9,
    ease: "expo.out",
  });
  gsap.from(".t9, .t10", {
    delay: 5.7,
    y: 1000,
    duration: 0.9,
    ease: "expo.out",
  });
}
sec1();

function sec3() {
  gsap.to(".marqueebox h2", {
    repeat: -1,
    x: "-100%",
    ease: "linear",
    duration: 8,
  });

  gsap.to(".imgbox3D", {
    scrollTrigger: {
      scroller: ".wrapper",
      trigger: ".sec3",
      start: "top top",
      pin: true,
      scrub: 2,
      marker: true,
    },
    top: "-100%",
    onUpdate: () => {
      let img = document.querySelector(".imgbox3D");
      let imgRect = document
        .querySelector(".imgbox3D")
        .getBoundingClientRect().top;
      let val = Math.floor(imgRect * 0.007);
      let scalingRange = gsap.utils.mapRange(10, -10, 1, 2, val);
      img.style.transform = `translate(-50%, 0) scale(${scalingRange}) rotate3d(1,1,0,${
        imgRect * 0.08
      }deg)`;
    },
  });
}

sec3();

function sec4() {
  gsap.to(".imgbox", {
    scrollTrigger: {
      scroller: ".wrapper",
      trigger: ".sec4",
      start: "top top",
      pin: ".sec4",
      scrub: true,
    },
    top: "50%",
  });
}

sec4();

function sec6() {
  document.querySelector(".sec6").addEventListener("click", function (dets) {
    let sb = dets.target.id;
    let stripebox = "#" + sb;
    let gt = sb.split("-")[1];
    let dec = 100 - (4 - gt) * 4;
    let sbelem = ".sb-" + gt + "-elem";
    let number = document.querySelectorAll(".stripebox h5");

    if (window.screen.width < 850) {
      dec = 100 - (4 - gt) * 6;

      gsap.to(stripebox, {
        duration: 1,
        height: dec + "vh",
        ease: "expo.out",
      });

      gsap.to(dets.target.children[0], {
        opacity: 0,
        pointerEvents: "all",
      });

      gsap.to(dets.target.children[1], {
        opacity: 1,
        pointerEvents: "all",
        delay: 1.5,
      });

      gsap.to(dets.target.children[2], {
        opacity: 1,
        pointerEvents: "all",
        delay: 1,
      });

      gsap.to(dets.target.children[3], {
        opacity: 1,
        pointerEvents: "all",
        delay: 0.5,
      });

      document.querySelector(sbelem).addEventListener("click", function (dets) {
        gsap.to(number, {
          opacity: 1,
          delay: 2,
          pointerEvents: "none",
        });

        gsap.to(sbelem, {
          opacity: 0,
          pointerEvents: "none",
          stagger: 0.25,
        });

        gsap.to("#" + sb, {
          height: "6vh",
          delay: 1,
          ease: "expo.out",
          duration: 2,
        });
      });
    } else {
      gsap.to(stripebox, {
        duration: 1,
        width: dec + "%",
        ease: "expo.out",
      });

      gsap.to(dets.target.children[0], {
        opacity: 0,
        pointerEvents: "all",
      });

      gsap.to(dets.target.children[1], {
        opacity: 1,
        pointerEvents: "all",
        delay: 1.5,
      });

      gsap.to(dets.target.children[2], {
        opacity: 1,
        pointerEvents: "all",
        delay: 1,
      });

      gsap.to(dets.target.children[3], {
        opacity: 1,
        pointerEvents: "all",
        delay: 0.5,
      });

      document.querySelector(sbelem).addEventListener("click", function (dets) {
        gsap.to(number, {
          opacity: 1,
          delay: 2,
          pointerEvents: "none",
        });

        gsap.to(sbelem, {
          opacity: 0,
          pointerEvents: "none",
          stagger: 0.25,
        });

        gsap.to("#" + sb, {
          width: "4%",
          delay: 1,
          ease: "expo.out",
          duration: 2,
        });
      });
    }
  });
}

sec6();
