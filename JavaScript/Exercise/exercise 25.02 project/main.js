window.onload = function () {
  let cardTeam = document.querySelector(".our-team");

  cardTeam.innerHTML += `<div class="card" style="width: 18rem;">
<div class="card-body">
  <h5 class="card-title">Ljupcho Shemov</h5>
  <h6 class="card-subtitle mb-2 text-muted">CEO</h6>
  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  <a href="#" class="card-link">Card link</a>
</div>
</div>`;
  homePage();
  const navLinks = document.querySelectorAll("#navList li");
  navLinks.forEach((obj) => {
    obj.addEventListener("click", pageLoad);
  });
};
function pageLoad() {
  switch (this.textContent) {
    case "Home":
      homePage(this);
      break;
    case "About Us":
      AboutUs(this);
      break;
    case "Our Team":
      ourTeam(this);
      break;
    case "Services":
      services(this);
      break;
    case "Contact US":
      ContactUS(this);
    default:
      break;
  }
}

function homePage() {
  document.getElementById("main").innerHTML = ` <section id="home" class="home">
  <div class="typewriter home-container">
    <h1>WELCOME</h1>
    <span>TO THE FUTURE OF CLEAN ENERGY</span>
  </div>
</section>`;
}

function AboutUs() {
  document.getElementById(
    "main"
  ).innerHTML = `<section id="about" class="about d-none">
  <div>
    <marquee direction="up" class="about-text">
      <h1 class="text-center">We are the Best</h1>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
      eligendi quos quia perferendis odio earum unde nulla pariatur sequi
      nam, accusamus placeat dolor error dolores eum dolorum voluptatum
      delectus sit fugiat voluptatem aliquam, labore facilis laudantium?
      Facere hic nulla facilis molestias provident veritatis, dignissimos
      maxime? Nisi possimus quo vel numquam cumque rerum vero
      exercitationem vitae unde deleniti obcaecati sunt cupiditate harum
      earum maxime, at necessitatibus ipsam quam in illo. Error sunt
      cupiditate similique necessitatibus quis optio voluptatum laborum
      facilis asperiores ullam recusandae corrupti, sed delectus possimus
      accusantium esse. Hic minima dicta at beatae, eum atque recusandae
      repellendus modi aperiam, aliquam dolorem molestias ea molestiae
      alias veniam illo voluptates asperiores doloremque eius dignissimos,
      cumque adipisci harum sint! Culpa debitis reprehenderit tempore
      neque tempora, ducimus placeat eum accusantium exercitationem
      dolores. Voluptate corrupti eligendi ullam temporibus dolorum
      asperiores officiis vitae dolores fuga excepturi, ipsam labore
      assumenda neque voluptas, molestias officia blanditiis.
      Exercitationem temporibus, ipsum soluta perferendis repellat,
      corrupti dicta consectetur dolorem sequi ea ipsam quis molestiae
      eum, deleniti explicabo. Quod laborum eum autem possimus magni totam
      hic sed mollitia est quo odit, quae, deleniti at delectus, beatae
      culpa. Nihil sit expedita adipisci aliquam quibusdam temporibus, eos
      mollitia perferendis sed sequi perspiciatis maiores dolores!
    </marquee>
  </div>
</section>`;
}
