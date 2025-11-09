class HeaderComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <header >
      <!-- NAV SUPERIOR -->
      <nav class="navbar navbar-dark px-3 py-2 custom-navbar">
        <a class="navbar-brand" href="index.html">
          <img
            src="public/img/home/logo-black.png"
            alt="Intersteel"
            class="navbar-logo"
          />
        </a>

        <!-- Botón hamburguesa -->
        <button
          class="navbar-toggler"
          type="button"
          aria-label="Toggle menu"
          id="menuToggle"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
      </nav>

      <!-- MENU DESLIZANTE -->
      <div class="offcanvas-menu" id="offcanvasMenu">
        <div
          class="vh-100 d-flex flex-column flex-lg-row align-items-center justify-content-between main-section"
        >
          <div
            class="left-content d-flex flex-column justify-content-between h-100"
          >
            <div class="logo">
              <img
                src="public/img/menu/logo-menu.png"
                alt="Intersteel Logo"
                class="img-fluid menu-logo"
              />
            </div>

            <div class="menu-container">
              <nav class="menu">
                <ul class="list-unstyled">
                  <li><a href="index.html">Home / Nosotros</a></li>
                  <li><a href="estructuras.html">Estructuras metálicas</a></li>
                  <li><a href="proyectos.html">Proyectos industriales</a></li>
                  <li><a href="portafolio.html">Portafolio / Galería</a></li>
                  <li><a href="contacto.html">Contacto</a></li>
                </ul>
              </nav>
            </div>
          </div>

          <div class="right-content position-relative text-end h-100">
            <div class="whatsapp position-absolute top-0 end-0 p-3 text-end">
              <p class="mb-1">Chatea con nosotros<br />por WhatsApp</p>
              <a
                href="https://wa.me/524428693588"
                target="_blank"
                class="d-inline-flex align-items-center text-decoration-none"
              >
                <img
                  src="public/img/menu/whatsapp.png"
                  alt="WhatsApp"
                  class="me-2"
                  width="22"
                />
                <span>(442) 869 3588</span>
              </a>
            </div>
            <img
              src="public/img/menu/main-menu.png"
              alt="Grúa"
              class="img-fluid crane-image"
            />
          </div>
        </div>

        <!-- Botón de cierre -->
        <button
          class="btn-close btn-close-white position-absolute m-3"
          aria-label="Close menu"
          id="menuClose"
        ></button>
      </div>
    </header>
    `;
  }
}

customElements.define("header-component", HeaderComponent);