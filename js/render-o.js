
// Create the observer
let observer = new IntersectionObserver(
entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      if (entry.target.classList.contains("box-1")) {
        document.querySelector(".one").classList.remove("hidden");
        document.querySelector(".text-wrapper").classList.add("step-1");
      }

      if (entry.target.classList.contains("box-2")) {
        document.querySelector(".two").classList.remove("hidden");
        document.querySelector(".text-wrapper").classList.add("step-2");
      }

      if (entry.target.classList.contains("box-3")) {
        document.querySelector(".three").classList.remove("hidden");
        document.querySelector(".text-wrapper").classList.add("step-3");
      }

      // Add the CSS class that has your animation
      entry.target.classList.add("lime");
      return;
    }

    entry.target.classList.remove("lime");

    if (entry.target.classList.contains("box-3")) {
      document.querySelector(".three").classList.add("hidden");
      document.querySelector(".text-wrapper").classList.remove("step-3");
      return;
    }

    if (entry.target.classList.contains("box-2")) {
      document.querySelector(".two").classList.add("hidden");
      document.querySelector(".text-wrapper").classList.remove("step-2");
      return;
    }
    if (entry.target.classList.contains("box-1")) {
      document.querySelector(".one").classList.add("hidden");
      document.querySelector(".text-wrapper").classList.remove("step-1");
      return;
    }
  });
},
{
  root: document.querySelector(".page"),
  rootMargin: "500000px 0px -40% 0px",
  threshold: 0.5 });



// Observe the element
let boxes = document.querySelectorAll(".box");
boxes.forEach(box => observer.observe(box));
//# sourceURL=pen.js
