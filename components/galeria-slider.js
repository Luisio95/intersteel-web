class GaleriaSliderComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
<section class="galeria-section">
          <div class="galeria-header">
            <h2 class="galeria-titulo">Portafolio/<span>Galería</span></h2>
            <a
              href="portafolio.html"
              class="btn px-4 py-2 ver-todo-btn d-inline-flex align-items-center"
            >
              <i class="bi bi-arrow-right me-2"></i> Ver más
            </a>
          </div>

          <div class="galeria-container">
            <div class="galeria-scroll">
              <div class="galeria-item">
                <img src="public/img/galeria/galeria-1.jpg" alt="Proyecto 1" />
                <div class="galeria-info">
                  <div class="galeria-texto-izquierda">
                    <h3>Bodega SJL</h3>
                    <p>Bodega industrial</p>
                  </div>
                  <div class="galeria-texto-derecha">
                    <span>San Juan de los Lagos, Jalisco</span>
                  </div>
                </div>
              </div>

              <div class="galeria-item">
                <img src="public/img/galeria/galeria-2.jpg" alt="Proyecto 2" />
                <div class="galeria-info">
                  <div class="galeria-texto-izquierda">
                    <h3>Almacén CA</h3>
                    <p>Bodega Industrial</p>
                  </div>
                  <div class="galeria-texto-derecha">
                    <span>Tulum, Quintana Roo</span>
                  </div>
                </div>
              </div>

              <div class="galeria-item">
                <img src="public/img/galeria/galeria-3.jpg" alt="Proyecto 3" />
                <div class="galeria-info">
                  <div class="galeria-texto-izquierda">
                    <h3>Bodega 4950</h3>
                    <p>Bodega Industrial</p>
                  </div>
                  <div class="galeria-texto-derecha">
                    <span>Querétaro, Qro</span>
                  </div>
                </div>
              </div>

              <div class="galeria-item">
                <img src="public/img/galeria/galeria-4.jpg" alt="Proyecto 4" />
                <div class="galeria-info">
                  <div class="galeria-texto-izquierda">
                    <h3>Nave Tepezala</h3>
                    <p>Nave industrial</p>
                  </div>
                  <div class="galeria-texto-derecha">
                    <span>Tepezala, Aguascalientes</span>
                  </div>
                </div>
              </div>

              <div class="galeria-item">
                <img src="public/img/galeria/galeria-5.jpg" alt="Proyecto 5" />
                <div class="galeria-info">
                  <div class="galeria-texto-izquierda">
                    <h3>Nave Tepezala</h3>
                    <p>Nave industrial</p>
                  </div>
                  <div class="galeria-texto-derecha">
                    <span>Tepezala, Aguascalientes</span>
                  </div>
                </div>
              </div>
              <div class="galeria-item">
                <img src="public/img/galeria/galeria-6.jpg" alt="Proyecto 5" />
                <div class="galeria-info">
                  <div class="galeria-texto-izquierda">
                    <h3>Plaza de la Industria 499</h3>
                    <p>Complejo Industrial Mixto</p>
                  </div>
                  <div class="galeria-texto-derecha">
                    <span>San Luis Potosi, SLP</span>
                  </div>
                </div>
              </div>
              <div class="galeria-item">
                <img src="public/img/galeria/galeria-7.jpg" alt="Proyecto 5" />
                <div class="galeria-info">
                  <div class="galeria-texto-izquierda">
                    <h3>Plaza de la Industria 499</h3>
                    <p>Complejo Industrial Mixto</p>
                  </div>
                  <div class="galeria-texto-derecha">
                    <span>San Luis Potosi, SLP</span>
                  </div>
                </div>
              </div>
              <div class="galeria-item">
                <img src="public/img/galeria/galeria-8.jpg" alt="Proyecto 5" />
                <div class="galeria-info">
                  <div class="galeria-texto-izquierda">
                    <h3>Nave Realito</h3>
                    <p>Nave industrial</p>
                  </div>
                  <div class="galeria-texto-derecha">
                    <span>Morelia, Michoacan</span>
                  </div>
                </div>
              </div>
              <div class="galeria-item">
                <img src="public/img/galeria/galeria-9.jpg" alt="Proyecto 5" />
                <div class="galeria-info">
                  <div class="galeria-texto-izquierda">
                    <h3>Plaza de la Industria 499</h3>
                    <p>Complejo Industrial Mixto</p>
                  </div>
                  <div class="galeria-texto-derecha">
                    <span>San Luis Potosi, SLP</span>
                  </div>
                </div>
              </div>
              <div class="galeria-item">
                <img src="public/img/galeria/galeria-10.jpg" alt="Proyecto 5" />
                <div class="galeria-info">
                  <div class="galeria-texto-izquierda">
                    <h3>Nave Tepezala</h3>
                    <p>Nave industrial</p>
                  </div>
                  <div class="galeria-texto-derecha">
                    <span>Tepezala, Aguascalientes</span>
                  </div>
                </div>
              </div>
              <div class="galeria-item">
                <img src="public/img/galeria/galeria-11.jpg" alt="Proyecto 5" />
                <div class="galeria-info">
                  <div class="galeria-texto-izquierda">
                    <h3>Bodega SJL</h3>
                    <p>Nave industrial</p>
                  </div>
                  <div class="galeria-texto-derecha">
                    <span>San Juan de los Lagos, Jalisco</span>
                  </div>
                </div>
              </div>
              <div class="galeria-item">
                <img src="public/img/galeria/galeria-12.jpg" alt="Proyecto 5" />
                <div class="galeria-info">
                  <div class="galeria-texto-izquierda">
                    <h3>Nave Pyme</h3>
                    <p>Nave industrial</p>
                  </div>
                  <div class="galeria-texto-derecha">
                    <span>Querétaro, Qro</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    `;
  }
}

customElements.define("galeria-slider-component", GaleriaSliderComponent);