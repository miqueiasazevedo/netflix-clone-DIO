$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  dots: true,
  responsive: {
    0: {
      items: 1,
    },
    400: {
      items: 2,
    },
    700: {
      items: 3,
    },
    1000: {
      items: 4,
    },
    1200: {
      items: 5,
    },
    1500: {
      items: 6,
    },
  },
});

document.addEventListener("DOMContentLoaded", function () {
  var cursos = document.querySelectorAll(".item .btn");

  console.log(cursos);
  cursos.forEach((curso) => {
    curso.addEventListener("click", function () {
      var targetModal = curso.dataset.target;
      var modal = document.querySelector("[data-modal='" + targetModal + "']");

      modal.classList.add("active");
      document.getElementById("main").classList.add("blurred");

      modal.onclick = function ({ target }) {
        if (!target.closest(".modal") || target.closest(".close")) {
          modal.classList.remove("active");
          document.getElementById("main").classList.remove("blurred");
        }
      };
    });
  });
});
