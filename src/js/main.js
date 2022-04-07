import icons from "../icons/icons"
import Swup from "swup"
import Swiper from "swiper"
import "swiper/swiper-bundle.css"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import ScrollSmoother from "./gsap/scrollSmoother"
import Headroom from "headroom.js"

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

let smoother = ScrollSmoother.create({
  smooth: 1.5,
  effects: true,
  smoothTouch: 0.1,
})

var options = {
  offset: {
    up: 100,
    down: 50,
  },
  tolerance: {
    up: 5,
    down: 0,
  },
  classes: {
    initial: "header",
    pinned: "header--pinned",
    unpinned: "header--unpinned",
    top: "header--top",
    notTop: "header--not-top",
    bottom: "header--bottom",
    notBottom: "header--not-bottom",
    frozen: "header--frozen",
    pinned: "header--pinned foo bar",
  },
  onPin: function () {},
  onUnpin: function () {},
  // callback when above offset, `this` is headroom object
  onTop: function () {},
  // callback when below offset, `this` is headroom object
  onNotTop: function () {},
  // callback when at bottom of page, `this` is headroom object
  onBottom: function () {},
  // callback when moving away from bottom of page, `this` is headroom object
  onNotBottom: function () {},
}

var element = document.querySelector("header")
var headroom = new Headroom(element, options)
headroom.init()

var app = {
  iconSpriteFn() {
    icons.forEach(iconSpriteFn)
    function iconSpriteFn(item, index) {
      const iconSprite = document.querySelector("#iconSprite")
      if (iconSprite) {
        iconSprite.innerHTML +=
          "<div class='icon-sprite__item'>" +
          "<span class='icon-sprite__number'>" +
          (index + 1) +
          "</span>" +
          "<div class='icon-sprite__preview'>" +
          item.iconSvg +
          "</div>" +
          "<div class='icon-sprite__name'>" +
          item.iconId +
          "</div>" +
          "</div>"
      }

      const icon = document.querySelectorAll(".icon")
      if (icon) {
        Array.prototype.forEach.call(icon, (el) => {
          let dataIconId = el.getAttribute("data-icon-id")
          if (dataIconId == item.iconId) {
            el.innerHTML = item.iconSvg
          }
        })
      }
    }
  },
  load() {
    console.log("load")
  },
  resized() {
    console.log("resized")
  },

  swiperTest() {
    const swiper = new Swiper(".swiper-container", {
      loop: true,
    })
  },

  init: function () {
    app.iconSpriteFn()
    app.load()
    app.swiperTest()
  },
}

function docReadied(fn) {
  window.addEventListener("DOMContentLoaded", fn)
}
function docResized(fn) {
  window.addEventListener("resize", fn)
}
docReadied(() => {
  const swup = new Swup({
    cache: true,
  })
  swup.on("contentReplaced", function () {
    swup.options.containers.forEach(() => {
      app.iconSpriteFn()
      app.swiperTest()
    })
  })
  app.init()
})

docResized(() => {
  app.resized()
})

export default { docResized, docReadied }
