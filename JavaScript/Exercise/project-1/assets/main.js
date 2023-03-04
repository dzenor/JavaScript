window.onload = function () {
  let navItems = document.querySelectorAll("#navList li");
  let images = [".//assets//img//image1.jpeg", ".//assets//img//image1.jpeg"];
  console.log(navItems);
  navItems.forEach((li) => {
    li.addEventListener("click", function () {
      console.log(this.textContent.toLowerCase());
      let sectionID = this.textContent.toLowerCase();

      if (document.getElementById("gallery") === null) {
        // document.querySelector("main").innerHTML +=
        //   "<section id='gallery'><h2>Gallery</h2></section>";

        document.querySelector("main").innerHTML += `
          <section id='gallery'>
          <h2>${sectionID.charAt(0).toUpperCase() + sectionID.slice(1)}</h2>
          </section>
          `;

        images.forEach((element) => {
          document.querySelector("#galery").innerHTML += `
                <img src = "${element}" alt=""/>
                `;
        });
      }
      document.querySelectorAll("main section").forEach((sec) => {
        if (sec.id === sectionID) {
          sec.classList.remove("d-none");
        } else {
          if (!sec.classList.contains("d-none")) {
            sec.classList.add("d-none");
          }
        }
      });
    });
  });
};
