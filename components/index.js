// ===================================
// SCROLLBAR PERSONALIZADO PARA TIMELINE
// (Compatible con iOS, macOS y todos los navegadores)
// ===================================

document.addEventListener("DOMContentLoaded", function () {
  const timelineScroll = document.querySelector(".timeline-scroll");
  
  if (!timelineScroll) return;

  // Crear el contenedor del scrollbar personalizado
  const scrollbarContainer = document.createElement("div");
  scrollbarContainer.className = "custom-scrollbar-container";
  
  const scrollbarTrack = document.createElement("div");
  scrollbarTrack.className = "custom-scrollbar-track";
  
  const scrollbarThumb = document.createElement("div");
  scrollbarThumb.className = "custom-scrollbar-thumb";
  
  scrollbarTrack.appendChild(scrollbarThumb);
  scrollbarContainer.appendChild(scrollbarTrack);
  
  // Insertar el scrollbar después del timeline-scroll
  timelineScroll.parentNode.insertBefore(scrollbarContainer, timelineScroll.nextSibling);

  let isDragging = false;
  let startX = 0;
  let scrollLeft = 0;

  // Función para actualizar la posición y tamaño del thumb
  function updateScrollbar() {
    const scrollWidth = timelineScroll.scrollWidth;
    const clientWidth = timelineScroll.clientWidth;
    const scrollLeftPos = timelineScroll.scrollLeft;
    
    // Calcular el ancho del thumb (proporcional al contenido visible)
    const thumbWidth = (clientWidth / scrollWidth) * 100;
    scrollbarThumb.style.width = thumbWidth + "%";
    
    // Calcular la posición del thumb
    const thumbPosition = (scrollLeftPos / scrollWidth) * 100;
    scrollbarThumb.style.left = thumbPosition + "%";
    
    // Ocultar scrollbar si no hay scroll
    if (scrollWidth <= clientWidth) {
      scrollbarContainer.style.display = "none";
    } else {
      scrollbarContainer.style.display = "block";
    }
  }

  // Actualizar scrollbar al hacer scroll
  timelineScroll.addEventListener("scroll", updateScrollbar);

  // Drag del timeline con el mouse
  timelineScroll.addEventListener("mousedown", (e) => {
    isDragging = true;
    timelineScroll.style.cursor = "grabbing";
    startX = e.pageX - timelineScroll.offsetLeft;
    scrollLeft = timelineScroll.scrollLeft;
  });

  timelineScroll.addEventListener("mouseleave", () => {
    isDragging = false;
    timelineScroll.style.cursor = "grab";
  });

  timelineScroll.addEventListener("mouseup", () => {
    isDragging = false;
    timelineScroll.style.cursor = "grab";
  });

  timelineScroll.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - timelineScroll.offsetLeft;
    const walk = (x - startX) * 2;
    timelineScroll.scrollLeft = scrollLeft - walk;
  });

  // Drag del thumb del scrollbar
  let isThumbDragging = false;
  let thumbStartX = 0;

  scrollbarThumb.addEventListener("mousedown", (e) => {
    e.stopPropagation();
    isThumbDragging = true;
    thumbStartX = e.clientX;
    scrollLeft = timelineScroll.scrollLeft;
    document.body.style.userSelect = "none";
  });

  document.addEventListener("mousemove", (e) => {
    if (!isThumbDragging) return;
    
    const deltaX = e.clientX - thumbStartX;
    const scrollWidth = timelineScroll.scrollWidth;
    const clientWidth = timelineScroll.clientWidth;
    const trackWidth = scrollbarTrack.offsetWidth;
    
    // Calcular el nuevo scroll basado en el movimiento del thumb
    const scrollRatio = deltaX / trackWidth;
    const newScroll = scrollLeft + (scrollRatio * scrollWidth);
    
    timelineScroll.scrollLeft = newScroll;
  });

  document.addEventListener("mouseup", () => {
    if (isThumbDragging) {
      isThumbDragging = false;
      document.body.style.userSelect = "";
    }
  });

  // Click en el track para saltar a esa posición
  scrollbarTrack.addEventListener("click", (e) => {
    if (e.target === scrollbarThumb) return;
    
    const rect = scrollbarTrack.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const trackWidth = scrollbarTrack.offsetWidth;
    const scrollWidth = timelineScroll.scrollWidth;
    
    const scrollRatio = clickX / trackWidth;
    timelineScroll.scrollLeft = scrollRatio * scrollWidth;
  });

  // Actualizar al cargar y al redimensionar
  updateScrollbar();
  
  window.addEventListener("resize", updateScrollbar);
  
  // Observar cambios en el contenido
  const resizeObserver = new ResizeObserver(updateScrollbar);
  resizeObserver.observe(timelineScroll);
});