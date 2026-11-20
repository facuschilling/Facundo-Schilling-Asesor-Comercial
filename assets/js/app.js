(function () {
  const isModelPage = Boolean(document.body.dataset.modelSlug);
  const rootPrefix = isModelPage ? "../" : "";

  function resolveAsset(path) {
    if (!path) return "";
    if (path.startsWith("http://") || path.startsWith("https://")) return path;
    return rootPrefix + path;
  }

  function buildWhatsAppUrl(text) {
    return `https://wa.me/${ASESOR_CONFIG.whatsapp}?text=${encodeURIComponent(text)}`;
  }

  function initBrandLogos() {
    document.querySelectorAll("[data-logo='baic']").forEach((img) => {
      img.src = resolveAsset(ASESOR_CONFIG.logos.baicLocal);
      img.onerror = function () {
        this.onerror = null;
        this.src = ASESOR_CONFIG.logos.baicFallback;
      };
    });
    document.querySelectorAll("[data-logo='arcfox']").forEach((img) => {
      img.src = resolveAsset(ASESOR_CONFIG.logos.arcfoxLocal);
      img.onerror = function () {
        this.onerror = null;
        this.src = ASESOR_CONFIG.logos.arcfoxFallback;
      };
    });
  }

  function populateVehicleSelect(selectedSlug) {
    const select = document.getElementById("campo-modelo");
    if (!select) return;

    const baicModels = VEHICULOS.filter((v) => v.marca === "BAIC");
    const arcfoxModels = VEHICULOS.filter((v) => v.marca === "ARCFOX");

    let html = '<option value="">Seleccioná un modelo...</option>';
    html += '<optgroup label="Línea BAIC">';
    baicModels.forEach((v) => {
      html += `<option value="${v.nombre}" ${v.slug === selectedSlug ? "selected" : ""}>${v.nombre} (${v.propulsion})</option>`;
    });
    html += "</optgroup>";

    html += '<optgroup label="Línea ARCFOX 100% Eléctrica">';
    arcfoxModels.forEach((v) => {
      html += `<option value="${v.nombre}" ${v.slug === selectedSlug ? "selected" : ""}>${v.nombre} (${v.propulsion})</option>`;
    });
    html += "</optgroup>";

    select.innerHTML = html;
  }

  function initCatalog() {
    const grid = document.getElementById("vehicles-grid");
    if (!grid) return;

    function render(filterKey) {
      const filtered =
        filterKey === "todos"
          ? VEHICULOS
          : VEHICULOS.filter((v) => v.filtro.includes(filterKey));

      grid.innerHTML = filtered
        .map((v) => {
          const isArcfox = v.marca === "ARCFOX";
          const imgSrc = resolveAsset(v.imagenLocal);
          const fallbackSrc = v.imagenPrincipal;
          const specsHtml = v.destacados
            .map(
              (s) => `
              <div class="mini-spec">
                <span>${s.label}</span>
                <strong>${s.value}</strong>
              </div>`
            )
            .join("");

          return `
            <article class="vehicle-card">
              <a href="${v.slug}/" class="vehicle-card-media" aria-label="Ver ficha técnica de ${v.nombre}">
                <div class="badge-group">
                  <span class="brand-pill ${isArcfox ? "arcfox" : ""}">${v.marca}</span>
                  <span class="propulsion-pill">${v.propulsion}</span>
                </div>
                <img src="${imgSrc}" onerror="this.onerror=null;this.src='${fallbackSrc}'" alt="${v.nombre} en BAIC Olavarría" loading="lazy">
              </a>
              <div class="vehicle-card-body">
                <div class="vehicle-category">${v.categoria}</div>
                <h3 class="vehicle-title"><a href="${v.slug}/">${v.nombre}</a></h3>
                <p class="vehicle-subtitle">${v.tagline}</p>
                <div class="vehicle-specs-mini">${specsHtml}</div>
                <div class="vehicle-card-footer">
                  <a href="${v.slug}/" class="btn btn-primary">Ver modelo y ficha</a>
                  <button type="button" class="btn btn-outline" data-cotizar-modelo="${v.slug}">Cotizar</button>
                </div>
              </div>
            </article>
          `;
        })
        .join("");

      grid.querySelectorAll("[data-cotizar-modelo]").forEach((btn) => {
        btn.addEventListener("click", () => {
          const slug = btn.dataset.cotizarModelo;
          populateVehicleSelect(slug);
          document.getElementById("cotizador")?.scrollIntoView({ behavior: "smooth" });
        });
      });
    }

    render("todos");

    document.querySelectorAll(".filter-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        document.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        render(btn.dataset.filter);
      });
    });
  }

  function initModelDetail() {
    const slug = document.body.dataset.modelSlug;
    if (!slug) return;

    const v = VEHICULOS.find((item) => item.slug === slug);
    if (!v) return;

    const setEl = (id, text) => {
      const el = document.getElementById(id);
      if (el) el.textContent = text;
    };

    setEl("breadcrumb-model", v.nombre);
    setEl("model-brand-tag", `${v.marca} · ${v.categoria}`);
    setEl("model-title", v.nombre);
    setEl("model-version", v.version);
    setEl("model-tagline", v.tagline);

    const highlightsEl = document.getElementById("model-highlights");
    if (highlightsEl) {
      highlightsEl.innerHTML = v.destacados
        .map(
          (d) => `
          <div class="metric-item">
            <strong>${d.value}</strong>
            <span>${d.label}</span>
          </div>`
        )
        .join("");
    }

    const renderTable = (id, rows) => {
      const el = document.getElementById(id);
      if (!el) return;
      el.innerHTML = rows
        .map(([k, val]) => `<tr><td>${k}</td><td>${val}</td></tr>`)
        .join("");
    };

    const renderList = (id, items) => {
      const el = document.getElementById(id);
      if (!el) return;
      el.innerHTML = items.map((i) => `<li>${i}</li>`).join("");
    };

    renderTable("spec-motor", v.motorizacion);
    renderTable("spec-dimensiones", v.dimensiones);
    renderList("spec-seguridad", v.seguridadADAS);
    renderList("spec-confort", v.confortTecnologia);

    const stageImg = document.getElementById("viewer-image");
    const canvas = document.getElementById("viewer-canvas");
    const hintText = document.getElementById("viewer-hint");
    const btnMode360 = document.getElementById("btn-mode-360");
    const btnModeColor = document.getElementById("btn-mode-color");
    const rotateLeftBtn = document.getElementById("btn-rotate-left");
    const rotateRightBtn = document.getElementById("btn-rotate-right");
    const zoomBtn = document.getElementById("btn-zoom");
    const swatchesContainer = document.getElementById("color-swatches");
    const selectedColorLabel = document.getElementById("selected-color-name");
    const hiddenColorInput = document.getElementById("campo-color");

    let currentFrame = 11;
    let mode = v.tiene360 ? "360" : "color";
    let selectedColor = v.colores[0] ? v.colores[0].nombre : "Estándar";

    function get360FrameUrl(frameNum, extension = "webp") {
      if (v.usarLocal360) {
        return resolveAsset(`assets/img/modelos/${v.slug}/360/${frameNum}.${extension}`);
      }
      if (v.baseUrl360Remota) {
        return `${v.baseUrl360Remota}${frameNum}.${extension}`;
      }
      return v.imagenPrincipal;
    }

    function set360ImageSource(img, frameNum) {
      if (!img) return;
      img.onerror = function () {
        if (this.dataset.triedPng !== "true") {
          this.dataset.triedPng = "true";
          this.src = get360FrameUrl(frameNum, "png");
          return;
        }
        this.onerror = null;
        this.src = v.imagenPrincipal;
      };
      img.dataset.triedPng = "false";
      img.src = get360FrameUrl(frameNum);
    }

    function updateFrame(newFrame) {
      const total = v.frames360 || 36;
      currentFrame = ((newFrame - 1 + total) % total) + 1;
      set360ImageSource(stageImg, currentFrame);
    }

    function setViewerMode(newMode) {
      mode = newMode;
      if (btnMode360) btnMode360.classList.toggle("active", mode === "360");
      if (btnModeColor) btnModeColor.classList.toggle("active", mode === "color");

      if (mode === "360" && v.tiene360) {
        updateFrame(currentFrame);
        if (hintText) hintText.textContent = "Arrastrá hacia los costados para girar 360°";
        if (rotateLeftBtn) rotateLeftBtn.style.display = "inline-block";
        if (rotateRightBtn) rotateRightBtn.style.display = "inline-block";
        for (let i = 1; i <= (v.frames360 || 36); i++) {
          const preload = new Image();
          set360ImageSource(preload, i);
        }
      } else {
        const activeColorObj = v.colores.find((c) => c.nombre === selectedColor) || v.colores[0];
        if (stageImg) {
          const colorImg = activeColorObj && activeColorObj.img ? resolveAsset(activeColorObj.img) : resolveAsset(v.imagenLocal);
          stageImg.src = colorImg;
          stageImg.onerror = function () {
            this.onerror = null;
            this.src = v.imagenPrincipal;
          };
        }
        if (hintText) hintText.textContent = `Vista exterior · Color ${selectedColor}`;
        if (rotateLeftBtn) rotateLeftBtn.style.display = "none";
        if (rotateRightBtn) rotateRightBtn.style.display = "none";
      }
    }

    if (!v.tiene360 && btnMode360) {
      btnMode360.style.display = "none";
    }

    if (btnMode360) btnMode360.addEventListener("click", () => setViewerMode("360"));
    if (btnModeColor) btnModeColor.addEventListener("click", () => setViewerMode("color"));

    let isDragging = false;
    let startX = 0;

    if (canvas) {
      canvas.addEventListener("mousedown", (e) => {
        if (mode !== "360") return;
        isDragging = true;
        startX = e.clientX;
      });

      window.addEventListener("mousemove", (e) => {
        if (!isDragging || mode !== "360") return;
        const deltaX = e.clientX - startX;
        if (Math.abs(deltaX) >= 12) {
          const step = deltaX > 0 ? -1 : 1;
          updateFrame(currentFrame + step);
          startX = e.clientX;
        }
      });

      window.addEventListener("mouseup", () => {
        isDragging = false;
      });

      canvas.addEventListener(
        "touchstart",
        (e) => {
          if (mode !== "360") return;
          isDragging = true;
          startX = e.touches[0].clientX;
        },
        { passive: true }
      );

      canvas.addEventListener(
        "touchmove",
        (e) => {
          if (!isDragging || mode !== "360") return;
          const deltaX = e.touches[0].clientX - startX;
          if (Math.abs(deltaX) >= 10) {
            const step = deltaX > 0 ? -1 : 1;
            updateFrame(currentFrame + step);
            startX = e.touches[0].clientX;
          }
        },
        { passive: true }
      );

      canvas.addEventListener("touchend", () => {
        isDragging = false;
      });
    }

    if (rotateLeftBtn) rotateLeftBtn.addEventListener("click", () => updateFrame(currentFrame - 1));
    if (rotateRightBtn) rotateRightBtn.addEventListener("click", () => updateFrame(currentFrame + 1));
    if (zoomBtn && canvas) {
      zoomBtn.addEventListener("click", () => {
        canvas.classList.toggle("zoomed");
        zoomBtn.textContent = canvas.classList.contains("zoomed") ? "Zoom -" : "Zoom +";
      });
    }

    if (swatchesContainer && v.colores.length) {
      if (selectedColorLabel) selectedColorLabel.textContent = selectedColor;
      if (hiddenColorInput) hiddenColorInput.value = selectedColor;

      swatchesContainer.innerHTML = v.colores
        .map(
          (c, idx) => `
          <button type="button" class="swatch-btn ${idx === 0 ? "active" : ""}" data-color-name="${c.nombre}">
            <span class="swatch-dot" style="background:${c.hex}"></span>
            <span>${c.nombre}</span>
          </button>`
        )
        .join("");

      swatchesContainer.querySelectorAll(".swatch-btn").forEach((btn) => {
        btn.addEventListener("click", () => {
          swatchesContainer.querySelectorAll(".swatch-btn").forEach((b) => b.classList.remove("active"));
          btn.classList.add("active");
          selectedColor = btn.dataset.colorName;
          if (selectedColorLabel) selectedColorLabel.textContent = selectedColor;
          if (hiddenColorInput) hiddenColorInput.value = selectedColor;
          setViewerMode("color");
        });
      });
    }

    setViewerMode(mode);
    populateVehicleSelect(v.slug);

    const directWaBtn = document.getElementById("btn-model-wa");
    if (directWaBtn) {
      directWaBtn.addEventListener("click", () => {
        const msg = `Hola ${ASESOR_CONFIG.nombre}, te consulto desde la web de BAIC Olavarría por el *${v.nombre}* (Color de interés: ${selectedColor}). ¿Me pasás disponibilidad y condiciones?`;
        window.open(buildWhatsAppUrl(msg), "_blank", "noopener");
      });
    }
  }

  function initQuoteForm() {
    const form = document.getElementById("form-cotizacion");
    if (!form) return;

    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      const nombre = document.getElementById("campo-nombre")?.value.trim() || "";
      const telefono = document.getElementById("campo-telefono")?.value.trim() || "";
      const localidad = document.getElementById("campo-localidad")?.value.trim() || "";
      const modelo = document.getElementById("campo-modelo")?.value || "Consulta general";
      const pago = document.getElementById("campo-pago")?.value || "A definir";
      const usado = document.getElementById("campo-usado")?.value.trim() || "No entrega usado";
      const color = document.getElementById("campo-color")?.value || "";
      const comentarios = document.getElementById("campo-comentarios")?.value.trim() || "";
      const statusBox = document.getElementById("form-status");

      const lineas = [
        `Hola *${ASESOR_CONFIG.nombre}*, te consulto desde la web de *BAIC Olavarría*:`,
        `• *Nombre:* ${nombre}`,
        `• *Teléfono:* ${telefono}`,
        `• *Ciudad / Zona:* ${localidad}`,
        `• *Vehículo:* ${modelo}${color ? ` (${color})` : ""}`,
        `• *Modalidad:* ${pago}`,
        `• *Entrega usado:* ${usado}`
      ];
      if (comentarios) lineas.push(`• *Consulta:* ${comentarios}`);

      const whatsappUrl = buildWhatsAppUrl(lineas.join("\n"));

      if (ASESOR_CONFIG.web3formsKey) {
        try {
          await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: { "Content-Type": "application/json", Accept: "application/json" },
            body: JSON.stringify({
              access_key: ASESOR_CONFIG.web3formsKey,
              subject: `Nueva Consulta BAIC Olavarría - ${modelo} (${nombre})`,
              from_name: "Web BAIC Olavarría - Facundo Schilling",
              Nombre: nombre,
              Telefono: telefono,
              Ciudad: localidad,
              Vehiculo: modelo,
              Color: color || "No especificado",
              Modalidad: pago,
              Usado: usado,
              Comentarios: comentarios || "-"
            })
          });
        } catch (err) {
          console.warn("Web3Forms background notice:", err);
        }
      }

      if (statusBox) {
        statusBox.textContent = "Consulta registrada. Abriendo tu WhatsApp con el mensaje listo...";
        statusBox.className = "form-status success";
      }

      window.open(whatsappUrl, "_blank", "noopener");
    });
  }

  function initContactLinks() {
    document.querySelectorAll("[data-wa-general]").forEach((el) => {
      el.href = buildWhatsAppUrl(
        `Hola ${ASESOR_CONFIG.nombre}, me gustaría recibir asesoramiento sobre los vehículos BAIC y ARCFOX en Olavarría y zona.`
      );
    });
    document.querySelectorAll("[data-email-link]").forEach((el) => {
      el.href = `mailto:${ASESOR_CONFIG.email}?subject=${encodeURIComponent("Consulta Comercial - BAIC Olavarría")}`;
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    initBrandLogos();
    initContactLinks();
    if (!isModelPage) {
      populateVehicleSelect("");
      initCatalog();
    } else {
      initModelDetail();
    }
    initQuoteForm();
  });
})();
