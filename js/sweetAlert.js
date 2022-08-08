swal("Tulis namamu disini: ", {
  content: "input",
  closeOnClickOutside: false,
}).then((value) => {
  swal(`Selamat Berkunjung : ${value}`);
});

document.addEventListener("DOMContentLoaded", () => {
  contentNotAvailable();
});

const navLinks = document.getElementsByClassName("nav-menu");

const buttons = document.getElementsByClassName("btn");

const ourChefCards = document.getElementsByClassName("our-chef-card");

function contentNotAvailable(el) {
  for (const navLink of navLinks) {
    navLink.addEventListener("click", () => {
      swal("konten belum ada", {
        icon: "info",
      });
    });
  }

  document.getElementsByClassName("search-button")[0].addEventListener("click", () => {
    swal("konten belum ada", {
      icon: "info",
    });
  });

  for (const button of buttons) {
    button.addEventListener("click", () => {
      swal("konten belum ada", {
        icon: "info",
      });
    });
  }

  document.getElementsByClassName("near-restaurant-location")[0].addEventListener("click", () => {
    swal("konten belum ada", {
      icon: "info",
    });
  });

  for (const ourChefCard of ourChefCards) {
    ourChefCard.addEventListener("click", () => {
      swal("konten belum ada", {
        icon: "info",
      });
    });
  }

  document.getElementsByClassName("chef-button")[0].addEventListener("click", () => {
    swal("konten belum ada", {
      icon: "info",
    });
  });
}
