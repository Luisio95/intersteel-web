class FooterComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
<footer class="footer">
          <div class="footer-container">
            <div class="footer-content">
              <!-- Columna 1: Contacto -->
              <div class="footer-column">
                <h3 class="footer-titulo">
                  Contacto <span class="arrow">→</span>
                </h3>
              </div>

              <!-- Columna 2: Mapa de sitio -->
              <div class="footer-column">
                <h4>Mapa de sitio</h4>
                <ul>
                  <li>
                    <a href="index.html">Home/Nosotros</a>
                  </li>
                  <li><a href="estructuras.html">Estructuras metálicas</a></li>
                  <li><a href="proyectos.html">Proyectos industriales</a></li>
                  <li><a href="portafolio.html">Portafolio/Galería</a></li>
                  <li><a href="contacto.html">Contacto</a></li>
                </ul>
              </div>

              <!-- Columna 3: Atención -->
              <div class="footer-column">
                <h4>Ubicación</h4>
                <ul>
                  <li>
                    <a href="#"
                      >Cerro Blanco 500, Piso 1, Interior 7, Centro Sur, 76090
                      Santiago de Querétaro, Qro.</a
                    >
                  </li>
                  <li>
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=Cerro+Blanco+500,+Piso+1,+Interior+7,+Centro+Sur,+76090+Santiago+de+Querétaro,+Qro."
                      target="_blank"
                      rel="noopener noreferrer"
                      >Ver en mapa</a
                    >
                  </li>
                </ul>
              </div>

              <!-- Columna 4: Síguenos -->
              <div class="footer-column">
                <h4>Síguenos</h4>
                <div class="social-icons">
                  <a href="#" class="social-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      />
                    </svg>
                  </a>
                  <a href="#" class="social-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path
                        d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"
                      />
                    </svg>
                  </a>
                  <a href="#" class="social-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path
                        d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"
                      />
                    </svg>
                  </a>
                  <a href="#" class="social-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path
                        d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73z"
                      />
                    </svg>
                  </a>
                </div>

                <!-- Newsletter -->
                <div class="newsletter">
                  <a
                    href="https://wa.me/524428693588?text=Hola,%20me%20gustaría%20obtener%20más%20información"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="newsletter-btn"
                    >Chatea con nosotros →</a
                  >
                </div>
              </div>

              <!-- Logo -->
              <div class="footer-logo">
                <img src="public/img/home/logo-footer.png" alt="Intersteel" />
              </div>
            </div>

            <!-- Copyright -->
            <div class="footer-bottom">
              <p>2025© Woorx. All Right reserved</p>
            </div>
          </div>
        </footer>
    `;
  }
}

customElements.define("footer-component", FooterComponent);