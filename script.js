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
    duration: 0.8,
    ease: "expo.out",
  });
  gsap.from(".t3, .t4", {
    delay: 0.1,
    y: 1000,
    duration: 0.9,
    ease: "expo.out",
  });
  gsap.from(".t5, .t6", {
    delay: 0.2,
    y: 1000,
    duration: 0.9,
    ease: "expo.out",
  });
  gsap.from(".t7, .t8", {
    delay: 0.3,
    y: 1000,
    duration: 0.9,
    ease: "expo.out",
  });
  gsap.from(".t9, .t10", {
    delay: 0.4,
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
