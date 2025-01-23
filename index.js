document.addEventListener("DOMContentLoaded", function () {
  new Glide(".glide", {
    type: "carousel",
    perView: 4,
    gap: 10,
    breakpoints: {
      1280: { perView: 4 }, //for desktop
      1279: { perView: 3 }, // for laptop
      853: { perView: 2 }, //  for tablet
      480: { perView: 1 }, //  for mobile
    },
  }).mount()
})
