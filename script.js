// Première fonctionnalité 1

function Footer() {
    const foo = document.querySelector("footer");
    let count = 0;

    foo.addEventListener("click", () => {

      count++
      console.log(`clic numéro ${count}`);

    })
  }
  
  Footer();
  
  // Seconde fonctionnalité
  
  function Hamburger() {
    const nav = document.querySelector("#navbarHeader");
    const btn = document.querySelector("button.navbar-toggler");
    btn.addEventListener("click", () => {

      nav.classList.toggle("collapse");

    });
  }
  
  Hamburger();
  
  // Troisième fonctionnalité
  
  function CardEdit() {
    const card = document.querySelector(".album").querySelector(".row").children[0];
    const editBtn = card.querySelector(".btn-outline-secondary");
    const cardText = card.querySelector("p.card-text");

    editBtn.addEventListener("click", () => {

      cardText.style.color = "red";

    });
  }
  
  CardEdit();
  
  // Fonctionnalité 4
  
  function CardEditGreen() {
    const card = document.querySelector(".album").querySelector(".row").children[1];
    const editBtn = card.querySelector(".btn-outline-secondary");
    const cardText = card.querySelector("p.card-text");

    let status = false;
    editBtn.addEventListener("click", () => {

      if (status == false) {
        cardText.style.color = "green";
        status = true;

      } else if (status == true) {
        cardText.style.color = "black";
        status = false;
      }

    });
  }
  
  CardEditGreen();
  
  // Fonctionnalité 5
  
  function nuclearWeapon() {
    const nav = document.querySelector("header");
    const cdnLink = document.querySelector("head").querySelector("link");
    const url = "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css";

    let status = false;

    nav.addEventListener("dblclick", () => {
      if (status == false) {
        cdnLink.setAttribute("href", "");
        status = true;
        
      } else if (status == true) {
        cdnLink.setAttribute("href", url);
        status = false;
      }
      
    });
  }
  
  nuclearWeapon();