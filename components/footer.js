class FooterComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
<footer class="footer">
          <div class="footer-container">
          <div class="footer-column mb-5">
            <h3 class="footer-titulo">
              Contacto <span class="arrow">→</span>
            </h3>
          </div>
            <div class="footer-content">
                    <div class="footer-sitemap">
        <div class="sitemap-column">
          <h4>Mapa de sitio</h4>
          <ul>
            <li><a href="index.html">Home/Nosotros</a></li>
            <li><a href="estructuras.html">Estructuras metálicas</a></li>
            <li><a href="proyectos.html">Proyectos industriales</a></li>
          </ul>
        </div>
        
        <div class="sitemap-column">
          <h4>&nbsp;</h4>
          <ul>
            <li><a href="portafolio.html">Portafolio/Galería</a></li>
            <li><a href="contacto.html">Contacto</a></li>
          </ul>
        </div>
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
                  <li class="mt-4">
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
                    <img src="./public/img/home/fb.png" alt="Facebook" />
                  </a>
                  <a href="#" class="social-icon">
                    <img src="./public/img/home/in.png" alt="LinkedIn" />
                  </a>
                  <a href="#" class="social-icon">
                    <img src="./public/img/home/ins.png" alt="Instagram" />
                  </a>
                  <a href="#" class="social-icon">
                    <img src="./public/img/home/ig.png" alt="X" />
                  </a>
                </div>

                <!-- Newsletter -->
                <div class="newsletter">
                  <a
                    href="https://wa.me/524428693588?text=Hola,%20me%20gustaría%20obtener%20más%20información"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="newsletter-btn"
                    >Chatea con nosotros por WhatsApp →</a
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
                <p>
                    <a href="https://woorx.mx/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      style="color: inherit; text-decoration: none; cursor: pointer;">
                        2025© Woorx. All Right reserved
                    </a>
                </p>
            </div>
          </div>
        </footer>
    `;
  }
}

customElements.define("footer-component", FooterComponent);
