const ASESOR_CONFIG = {
  nombre: "Facundo Schilling",
  cargo: "Asesor Comercial Oficial",
  concesionario: "BAIC Olavarría",
  ciudad: "Olavarría, Buenos Aires",
  zonaCobertura: "Olavarría, Azul, Tandil, Bolívar, Laprida, General La Madrid, Benito Juárez, Tapalqué y todo el centro de la Provincia de Buenos Aires",
  whatsapp: `5492284600624`,
  telefonoVisible: `2284 60-0624`,
  email: "facuschilling@gmail.com",
  web3formsKey: `f4e2f775-cb1a-4d50-a6d3-12f0c2e37c94`,
  logos: {
    baicLocal: "assets/img/logos/Logo-Web-Baic-Jun2024.webp",
    baicFallback: "assets/img/logos/Logo-Web-Baic-Jun2024.webp",
    arcfoxLocal: "assets/img/logos/Arcfox_Argentina_Logo_Oficial.webp",
    arcfoxFallback: "assets/img/logos/Arcfox_Argentina_Logo_Oficial.webp"
  }
};

const VEHICULOS = [
  {
    slug: `bj30-4x4`,
    marca: "BAIC",
    nombre: `BAIC BJ30 Hybrid 4x4`,
    version: "HEV 4WD Todo Terreno",
    categoria: `SUV Híbrido 4x4`,
    propulsion: "Híbrido HEV",
    filtro: ["baic", "hibrido", "suv"],
    tagline: "Potencia híbrida inteligente de 404 HP con tracción 4WD en tiempo real y Sistema Todo Terreno (ATS).",
    imagenPrincipal: "",
    imagenLocal: "assets/img/modelos/bj30-4x4/principal.webp",
    tiene360: true,
    usarLocal360: true,
    frames360: 36,
    baseUrl360Remota: "",
    colores: [
      { nombre: "Verde Pistacho", hex: "#8fb399", img: "assets/img/modelos/bj30-4x2/verde_pistacho.png" },
      { nombre: "Gris Oscuro", hex: "#4b5563", img: "assets/img/modelos/bj30-4x2/gris_oscuro.png" },
      { nombre: "Blanco Perla", hex: "#f3f4f6", img: "assets/img/modelos/bj30-4x2/blanco_perla.png" },
      { nombre: "Azul Cielo", hex: "#3b82f6", img: "assets/img/modelos/bj30-4x2/azul_cielo.png" },
      { nombre: "Negro Jet", hex: "#111827", img: "assets/img/modelos/bj30-4x2/negro_jet.png" },
      { nombre: "Gris Mate", hex: "#9ca3af", img: "assets/img/modelos/bj30-4x2/gris_mate.png" },
      { nombre: "Gris Claro", hex: "#d1d5db", img: "assets/img/modelos/bj30-4x2/gris_claro.png" }
    ],
    destacados: [
      { label: "Potencia", value: "404 HP" },
      { label: "Torque", value: "685 Nm" },
      { label: "Consumo", value: "6,45 L/100km" }
    ],
    motorizacion: [
      ["Sistema de propulsión", "Híbrido HEV (Motor A156T2H-H1)"],
      ["Transmisión", "DHT dedicada híbrida"],
      ["Potencia máxima", "404 HP"],
      ["Par máximo", "685 Nm"],
      ["Tracción", "4WD en tiempo real"],
      ["Consumo combinado", "6,45 L / 100 km"],
      ["Combustible", "Nafta 92 octanos"]
    ],
    dimensiones: [
      ["Largo x Ancho x Alto", "4.730 x 1.910 x 1.790 mm"],
      ["Distancia entre ejes", "2.820 mm"],
      ["Despeje mínimo al suelo", "215 mm"],
      ["Ángulo entrada / salida", "30° / 21°"],
      ["Suspensión Del. / Tras.", "MacPherson / Independiente Multibrazo"],
      ["Neumáticos / Llantas", "235/60 R19 Aluminio Bitono"]
    ],
    seguridadADAS: [
      "6 Airbags + Control electrónico de estabilidad (ESP) y tracción (TCS)",
      "Sistema Todo Terreno ATS: Nieve, Arena, Pantano y Anfibio",
      "Control de crucero adaptativo inteligente (IACC) e integrado (ICA)",
      "Frenado autónomo de emergencia (AEB) vehículos y peatones",
      "Cámara 3D panorámica 360° HD con cobertura de 200 metros",
      "Alerta de punto ciego (BSD), cambio de carril (LDW/LKA) y tráfico cruzado (RCTA/RCTB)"
    ],
    confortTecnologia: [
      `Instrumental LCD de 10,25" + Pantalla central táctil de 14,6" con CarPlay y Wi-Fi`,
      "Asientos de cuero calefaccionados y ventilados con ajuste eléctrico",
      "Volante multifunción de cuero calefaccionado",
      "Climatizador automático bizona con calidad de aire AQS y apoyabrazos refrigerado",
      "Alimentación 220V + 12V (delantera y baúl) y cargador inalámbrico rápido"
    ]
  },
  {
    slug: `bj30-4x2`,
    marca: "BAIC",
    nombre: `BAIC BJ30 Hybrid 4x2`,
    version: "HEV FF",
    categoria: "SUV Híbrido",
    propulsion: "Híbrido HEV",
    filtro: ["baic", "hibrido", "suv"],
    tagline: "Eficiencia híbrida de 330 HP y 5,85 L/100 km con el diseño robusto y tecnológico de la familia BJ.",
    imagenPrincipal: "assets/img/modelos/bj30-4x2/principal.png",
    imagenLocal: "assets/img/modelos/bj30-4x2/principal.png",
    tiene360: true,
    usarLocal360: true,
    frames360: 36,
    baseUrl360Remota: "",
    colores: [
      { nombre: "Verde Pistacho", hex: "#8fb399", img: "assets/img/modelos/bj30-4x2/verde_pistacho.png" },
      { nombre: "Gris Oscuro", hex: "#4b5563", img: "assets/img/modelos/bj30-4x2/gris_oscuro.png" },
      { nombre: "Blanco Perla", hex: "#f3f4f6", img: "assets/img/modelos/bj30-4x2/blanco_perla.png" },
      { nombre: "Azul Cielo", hex: "#3b82f6", img: "assets/img/modelos/bj30-4x2/azul_cielo.png" },
      { nombre: "Negro Jet", hex: "#111827", img: "assets/img/modelos/bj30-4x2/negro_jet.png" },
      { nombre: "Gris Mate", hex: "#9ca3af", img: "assets/img/modelos/bj30-4x2/gris_mate.png" },
      { nombre: "Gris Claro", hex: "#d1d5db", img: "assets/img/modelos/bj30-4x2/gris_claro.png" }

    ],
    destacados: [
      { label: "Potencia", value: "330 HP" },
      { label: "Torque", value: "550 Nm" },
      { label: "Consumo", value: "5,85 L/100km" }
    ],
    motorizacion: [
      ["Sistema de propulsión", "Híbrido HEV (Motor A156T2H-H1)"],
      ["Transmisión", "DHT"],
      ["Potencia máxima", "330 HP"],
      ["Par máximo", "550 Nm"],
      ["Tracción", "Delantera (FF)"],
      ["Consumo combinado", "5,85 L / 100 km"],
      ["Combustible", "Nafta 92 octanos"]
    ],
    dimensiones: [
      ["Largo x Ancho x Alto", "4.730 x 1.910 x 1.790 mm"],
      ["Distancia entre ejes", "2.820 mm"],
      ["Despeje mínimo al suelo", "215 mm"],
      ["Ángulo entrada / salida", "30° / 21°"],
      ["Suspensión Del. / Tras.", "MacPherson / Independiente Multibrazo"],
      ["Neumáticos / Llantas", "235/60 R19 Aluminio Bitono"]
    ],
    seguridadADAS: [
      "6 Airbags + ABS, EBD, BAS, EBA, ESP, TCS y asistencia antivuelco RMI",
      "Control de crucero adaptativo inteligente (IACC) + Asistente en atascos (TJA)",
      "Frenado autónomo de emergencia (AEB) para vehículos y peatones",
      "Cámara 3D panorámica 360° HD con cobertura de 200 m",
      "Detección de punto ciego (BSD), alerta de apertura de puerta (DOW) y RCTA/RCTB"
    ],
    confortTecnologia: [
      `Pantalla central LCD de 14,6" + tablero digital LCD de 10,25" con CarPlay y Wi-Fi`,
      "Asientos de cuero calefaccionados con ajuste eléctrico (lumbar 4 modos en 2da fila)",
      "Climatizador automático bizona con salidas traseras y box refrigerado/calefaccionado",
      "Alimentación 220V + 12V en consola delantera y baúl",
      "Faros LED automáticos regulables + Acceso y arranque sin llave Keyless"
    ]
  },
  {
    slug: "x55-ii-hibrida",
    marca: "BAIC",
    nombre: "BAIC X55 II Hybrid",
    version: "REHEV Híbrido",
    categoria: "SUV Híbrido",
    propulsion: "Híbrido REHEV",
    filtro: ["baic", "hibrido", "suv"],
    tagline: "Más de 900 km de autonomía total con tecnología híbrida REHEV de 215 HP y diseño futurista.",
    imagenPrincipal: "assets/img/modelos/x55-ii-hibrida/principal.jpeg",
    imagenLocal: "assets/img/modelos/x55-ii-hibrida/principal.jpeg",
    tiene360: false,
    usarLocal360: false,
    frames360: 36,
    baseUrl360Remota: "",
    colores: [
      { nombre: "Rojo", hex: "#c81e1e", img: "assets/img/modelos/x55-ii-hibrida/rojo.webp" },
      { nombre: "Blanco", hex: "#f9fafb", img: "assets/img/modelos/x55-ii-hibrida/blanco.webp" },
      { nombre: "Gris Claro", hex: "#9ca3af", img: "assets/img/modelos/x55-ii-hibrida/gris.webp" },
      { nombre: "Gris", hex: "#374151", img: "assets/img/modelos/x55-ii-hibrida/gris_oscuro.webp" },
      { nombre: "Negro", hex: "#111827", img: "assets/img/modelos/x55-ii-hibrida/negro.webp" }
    ],
    destacados: [
      { label: "Potencia", value: "215 HP" },
      { label: "Autonomía", value: "+900 km" },
      { label: "0-100 km/h", value: "8,94 s" }
    ],
    motorizacion: [
      ["Sistema de propulsión", "Híbrido REHEV (1.5L + Motor Eléctrico de Tracción)"],
      ["Potencia pico tracción", "215 HP (160 kW) / Motor térmico 103 HP"],
      ["Torque pico tracción", "310 Nm"],
      ["Batería", "Litio Ternaria 1,83 kWh (352,3 V)"],
      ["Consumo combinado", "5,8 L / 100 km (Tanque 53 L)"],
      ["Aceleración 0-100 km/h", "8,94 segundos"],
      ["Tracción", "Delantera (FF) / Normativa Euro VI"]
    ],
    dimensiones: [
      ["Largo x Ancho x Alto", "4.620 x 1.886 x 1.680 mm"],
      ["Distancia entre ejes", "2.735 mm"],
      ["Capacidad de baúl", "350 L"],
      ["Peso en orden de marcha", "1.646 kg"],
      ["Suspensión Del. / Tras.", "MacPherson / Multi-link independiente"],
      ["Neumáticos", "225/55 R19 Llantas aleación gris"]
    ],
    seguridadADAS: [
      "8 Airbags (frontales, laterales y cortina) + Cámara panorámica 360° HD y vista bajo carrocería",
      "Radar 5ta gen. Bosch + 5 cámaras + 12 sensores ultrasónicos",
      "Control crucero adaptativo (ACC) + Asistente de estacionamiento autónomo (APA)",
      "Frenado autónomo de emergencia (AEB) para autos, motos, bicis y peatones",
      "Asistente en embotellamientos (TJA), punto ciego (BSD) y mantenimiento de carril (LKA/ELKA)"
    ],
    confortTecnologia: [
      `Pantalla central de 12,3" + instrumental LCD de 10,25" + Apple CarPlay & Wi-Fi`,
      "Manijas de puerta ocultas inductivas y portón trasero eléctrico manos libres",
      "Techo solar panorámico con cierre automático por sensor de lluvia",
      "Butacas de cuero eléctricas calefaccionadas y ventiladas con memoria",
      "Apoyabrazos central refrigerado (heladera) y purificación de aire CN95"
    ]
  },
  {
    slug: "x55-plus",
    marca: "BAIC",
    nombre: "BAIC X55 Plus",
    version: "1.5T + 7DCT Exclusive",
    categoria: "SUV Mediano",
    propulsion: "Nafta Turbo",
    filtro: ["baic", "combustion", "suv"],
    tagline: "Mayor espacio y confort ejecutivos con butacas con masaje, reposapiernas y triple interacción de pantallas.",
    imagenPrincipal: "assets/img/modelos/x55-plus/principal.jpg",
    imagenLocal: "assets/img/modelos/x55-plus/principal.jpg",
    tiene360: true,
    usarLocal360: true,
    frames360: 37,
    baseUrl360Remota: "",
    colores: [
      { nombre: "Azul", hex: "#4b5563", img: "assets/img/modelos/x55-plus/azul.webp" },
      { nombre: "Blanco", hex: "#f3f4f6", img: "assets/img/modelos/x55-plus/blanco.webp" },
      { nombre: "Negro", hex: "#111827", img: "assets/img/modelos/x55-plus/negro.webp" },
      { nombre: "Gris", hex: "#9ca3af", img: "assets/img/modelos/x55-plus/gris.webp" },
      { nombre: "Gris Claro", hex: "#d1d5db", img: "assets/img/modelos/x55-plus/gris_claro.webp" },
      { nombre: "Rojo", hex: "#dc2626", img: "assets/img/modelos/x55-plus/rojo.webp" },
    ],
    destacados: [
      { label: "Motor", value: "1.5T 185 HP" },
      { label: "Caja", value: "7DCT" },
      { label: "Torque", value: "305 Nm" }
    ],
    motorizacion: [
      ["Motor", "1.5 Turbo A156T2H (1.498 cc)"],
      ["Potencia máxima", "185 HP"],
      ["Par máximo", "305 Nm (1.500 - 4.250 rpm)"],
      ["Transmisión", "Automática doble embrague DCT380 de 7 marchas"],
      ["Tracción", "Delantera (FWD)"],
      ["Tanque / Combustible", "60 L / Nafta 92 octanos (Euro VI)"]
    ],
    dimensiones: [
      ["Largo x Ancho x Alto", "4.745 x 1.892 x 1.715 mm"],
      ["Distancia entre ejes", "2.800 mm"],
      ["Despeje al suelo", "> 200 mm"],
      ["Peso en vacío", "1.625 kg"],
      ["Suspensión Del. / Tras.", "MacPherson / Independiente Multibrazo"],
      ["Neumáticos", "235/55 R19"]
    ],
    seguridadADAS: [
      "Airbags frontales, laterales y de cortina + ESP, TCS, HHC, HDC y Auto Hold",
      "Imagen panorámica 3D 360° + Detección de objetos en movimiento (MOD)",
      "Control de crucero adaptativo inteligente (IACC) + Asistente en atascos (TJA)",
      "Frenado automático de emergencia (AEB) vehículos y peatones + Asistente de estacionamiento (APA)",
      "Punto ciego (BSD), cambio de carril (LDW/LKA) y advertencia de puerta abierta (DOW)"
    ],
    confortTecnologia: [
      "Asientos delanteros y traseros de cuero con calefacción, ventilación y función masaje",
      "Reposapiernas regulable eléctricamente para acompañante y control trasero de entretenimiento",
      `Pantalla central de 12,3" + instrumental LCD 7" + 8 parlantes HiFi`,
      "Climatizador automático bizona con display de calidad de aire (AQS)",
      "Techo corredizo con apertura remota y baúl eléctrico con antipinzamiento"
    ]
  },
  {
    slug: "x55-ii",
    marca: "BAIC",
    nombre: "BAIC X55 II",
    version: "1.5T + 7DCT Luxury",
    categoria: "SUV Mediano",
    propulsion: "Nafta Turbo",
    filtro: ["baic", "combustion", "suv"],
    tagline: "El SUV éxito en ventas de BAIC: 185 HP, caja 7DCT, chasis transparente 360° y diseño premiado.",
    imagenPrincipal: "assets/img/modelos/x55-ii/principal.webp",
    imagenLocal: "assets/img/modelos/x55-ii/principal.webp",
    tiene360: true,
    usarLocal360: true,
    frames360: 36,
    baseUrl360Remota: "",
    colores: [
      { nombre: "Amarillo", hex: "#c4d600", img: "assets/img/modelos/x55-ii/amarillo.webp" },
      { nombre: "Rojo", hex: "#dc2626", img: "assets/img/modelos/x55-ii/rojo.webp" },
      { nombre: "Gris", hex: "#9ca3af", img: "assets/img/modelos/x55-ii/gris.webp" },
      { nombre: "Platino", hex: "#374151", img: "assets/img/modelos/x55-ii/platino.webp" },
      { nombre: "Blanco", hex: "#f9fafb", img: "assets/img/modelos/x55-ii/blanco.webp" },
      { nombre: "Azul", hex: "#0051ff", img: "assets/img/modelos/x55-ii/azul.webp" }
    ],
    destacados: [
      { label: "Potencia", value: "185 HP" },
      { label: "Caja", value: "7DCT" },
      { label: "Torque", value: "305 Nm" }
    ],
    motorizacion: [
      ["Motor", "1.5TD A156T2H (1.498 cc)"],
      ["Potencia máxima", "185 HP"],
      ["Par máximo", "305 Nm (1.500 - 4.500 rpm)"],
      ["Transmisión", "Automática 7DCT con selector electrónico"],
      ["Modos de conducción", "ECO, Sport, Comfort, Smart"],
      ["Tanque / Combustible", "53 L / Nafta 92 octanos (Euro VI)"]
    ],
    dimensiones: [
      ["Largo x Ancho x Alto", "4.620 x 1.886 x 1.680 mm"],
      ["Distancia entre ejes", "2.735 mm"],
      ["Distancia al suelo", "160 mm"],
      ["Capacidad de baúl", "350 L"],
      ["Suspensión Del. / Tras.", "MacPherson / Independiente Multibrazo"],
      ["Neumáticos", "225/55 R19"]
    ],
    seguridadADAS: [
      "Airbags frontales, laterales y de cortina + ESP, HAC, HDC y BOS",
      "Imagen panorámica 3D 360° + Chasis transparente para puntos ciegos inferiores",
      "Estacionamiento automático de 1 botón (APA) + Sensores delanteros y traseros",
      "Control crucero adaptativo (ACC), frenado autónomo (AEB) y mantenimiento de carril (LKA/ELKA)",
      "Detección de punto ciego (BSD) y aviso de fatiga del conductor"
    ],
    confortTecnologia: [
      `Pantalla central de 10" + tablero digital de 10" + Wi-Fi y carga inalámbrica rápida`,
      "Asientos delanteros de cuero con ajuste eléctrico, memoria, calefacción y ventilación",
      "Consola central trasera refrigerada para bebidas y climatizador bizona con microfiltros",
      "Portón trasero eléctrico con apertura manos libres y memoria de altura",
      "Arranque remoto y apertura sin llave Keyless"
    ]
  },
  {
    slug: `x35`,
    marca: "BAIC",
    nombre: `BAIC X35`,
    version: "1.5T + CVT Luxury",
    categoria: "SUV Compacto",
    propulsion: "Nafta Turbo",
    filtro: ["baic", "combustion", "suv"],
    tagline: "El SUV compacto ideal para ciudad y ruta: motor 1.5 Turbo de 150 HP, caja CVT y completo equipamiento.",
    imagenPrincipal: "",
    imagenLocal: "assets/img/modelos/x35/principal.png",
    tiene360: true,
    usarLocal360: true,
    frames360: 36,
    baseUrl360Remota: "",
    colores: [
      { nombre: "Bronce", hex: "#9a4e34", img: "assets/img/modelos/x35/bronce.webp" },
      { nombre: "Blanco", hex: "#f3f4f6", img: "assets/img/modelos/x35/blanco.webp" },
      { nombre: "Rojo", hex: "#dc2626", img: "assets/img/modelos/x35/rojo.webp" },
      { nombre: "Azul", hex: "#1e40af", img: "assets/img/modelos/x35/azul.webp" }
    ],
    destacados: [
      { label: "Motor", value: "1.5T 150 HP" },
      { label: "Caja", value: "6 CVT" },
      { label: "Baúl", value: "390 L" }
    ],
    motorizacion: [
      ["Motor", "1.5 Turbo A151R2 (1.499 cc)"],
      ["Potencia máxima", "150 HP"],
      ["Par máximo", "210 Nm"],
      ["Transmisión", "Automática 6 CVT"],
      ["Tracción", "Delantera (FWD)"],
      ["Tanque / Combustible", "46 L / Nafta 92 octanos (Euro VI)"]
    ],
    dimensiones: [
      ["Largo x Ancho x Alto", "4.325 x 1.830 x 1.640 mm"],
      ["Distancia entre ejes", "2.570 mm"],
      ["Despeje al suelo", "180 mm"],
      ["Capacidad de baúl", "390 L"],
      ["Suspensión Del. / Tras.", "MacPherson / H-torsion"],
      ["Neumáticos", "215/50 R17"]
    ],
    seguridadADAS: [
      "Control electrónico de estabilidad (ESP), tracción (TCS) y asistencia en pendiente (HHC)",
      "Frenos a disco en las 4 ruedas con ABS + EBD + EBA y freno de mano electrónico (EPB)",
      "Airbags frontales conductor y acompañante",
      "Cámara y radar de marcha atrás + Monitoreo de presión de neumáticos (TPMS)",
      "Control de velocidad crucero"
    ],
    confortTecnologia: [
      `Pantalla central táctil de 8" con Mobile Connect y Bluetooth`,
      "Tapizado mixto cuero + tela con asientos traseros rebatibles 4/6",
      "Apertura sin llave Keyless + Arranque por botón + Arranque remoto",
      "Faros LED regulables con sistema Follow me Home",
      "Volante multifunción, espejos eléctricos y sistema de sonido de 6 parlantes"
    ]
  },
  {
    slug: "u5-plus",
    marca: "BAIC",
    nombre: "BAIC U5 Plus",
    version: "1.5L + CVT Honor",
    categoria: "Sedán Ejecutivo",
    propulsion: "Nafta",
    filtro: ["baic", "combustion", "sedan"],
    tagline: "Elegancia, amplitud interior y tecnología 360° HD en un sedán moderno con baúl de 430 litros.",
    imagenPrincipal: "assets/img/modelos/u5-plus/principal.webp",
    imagenLocal: "assets/img/modelos/u5-plus/principal.webp",
    tiene360: true,
    usarLocal360: true,
    frames360: 37,
    baseUrl360Remota: "",
    colores: [
      { nombre: "Blanco", hex: "#f9fafb", img: "assets/img/modelos/u5-plus/blanco.webp" },
      { nombre: "Gris", hex: "#9ca3af", img: "assets/img/modelos/u5-plus/gris.webp" },
      { nombre: "Negro", hex: "#111827", img: "assets/img/modelos/u5-plus/negro.webp" },
      { nombre: "Rojo", hex: "#dc2626", img: "assets/img/modelos/u5-plus/rojo.webp" }
    ],
    destacados: [
      { label: "Motor", value: "1.5L 111 HP" },
      { label: "Caja", value: "CVT" },
      { label: "Baúl", value: "430 L" }
    ],
    motorizacion: [
      ["Motor", "1.5L A151A1 (1.499 cc)"],
      ["Potencia máxima", "111 HP"],
      ["Par máximo", "142 Nm"],
      ["Transmisión", "Automática CVT"],
      ["Tracción", "Delantera (FWD) / Euro VI"],
      ["Tanque de combustible", "48 L"]
    ],
    dimensiones: [
      ["Largo x Ancho x Alto", "4.660 x 1.820 x 1.480 mm"],
      ["Distancia entre ejes", "2.670 mm"],
      ["Despeje al suelo", "155 mm"],
      ["Capacidad de baúl", "430 L"],
      ["Peso en vacío", "1.255 kg"],
      ["Neumáticos / Llantas", "205/55 R16 o 205/50 R17 Aleación"]
    ],
    seguridadADAS: [
      "Airbags frontales + laterales + ESP, TCS, Auto Hold y retención en pendiente (HHC)",
      "Imagen panorámica 360° HD + Radar de estacionamiento trasero",
      "Monitoreo de puntos ciegos (BSD) y advertencia de cambio de carril (LDW)",
      "Detección de objetos en movimiento (MOD) y TPMS",
      "Control de velocidad crucero"
    ],
    confortTecnologia: [
      `Doble pantalla integrada: central de 12,3" + instrumental LCD de 7"`,
      "Arranque remoto de motor con llave + Apertura y arranque sin llave Keyless",
      "Volante de cuero multifunción y tapizado en cuero + tela",
      "Faros LED regulables y automáticos con señal de frenado ESS",
      "3 puertos USB con carga, Bluetooth y 6 parlantes"
    ]
  },
 {
    slug: "bj40-pro",
    marca: "BAIC",
    nombre: "BAIC BJ40 PRO",
    version: "2.0T + 8AT ZF 4WD",
    categoria: "4x4 Off-Road",
    propulsion: "Nafta Turbo 4WD",
    filtro: ["baic", "combustion", "todoterreno"],
    tagline: `Ícono todoterreno renovado: 245 CV, caja automática ZF de 8 marchas, 386 Nm y doble pantalla de 12,8".`,
    imagenPrincipal: "assets/img/modelos/bj40-pro/principal.jpg",
    imagenLocal: "assets/img/modelos/bj40-pro/principal.jpg",
    tiene360: false,
    usarLocal360: false,
    frames360: 36,
    baseUrl360Remota: "",
    colores: [
      { nombre: "Naranja", hex: "#ea580c", img: "assets/img/modelos/bj40-pro/naranja.png" },
      { nombre: "Gris", hex: "#52525b", img: "assets/img/modelos/bj40-pro/gris.png" },
      { nombre: "Negro", hex: "#111827", img: "assets/img/modelos/bj40-pro/negro.png" },
      { nombre: "Blanco", hex: "#f3f4f6", img: "assets/img/modelos/bj40-pro/blanco.png" }
    ],
    destacados: [
      { label: "Potencia", value: "245 CV" },
      { label: "Caja", value: "8AT ZF" },
      { label: "Despeje", value: "≥ 220 mm" }
    ],
    motorizacion: [
      ["Motor", "2.0 Turbo Nafta"],
      ["Potencia máxima", "245 CV"],
      ["Par máximo", "386 Nm"],
      ["Transmisión", "Automática ZF de 8 velocidades (8AT)"],
      ["Tracción", "4WD con 7 modos de conducción"],
      ["Combustible", "Nafta 92 octanos"]
    ],
    dimensiones: [
      ["Largo x Ancho x Alto", "4.790 x 1.940 x 1.895 mm"],
      ["Distancia entre ejes", "2.760 mm"],
      ["Despeje mínimo al suelo", "≥ 220 mm"],
      ["Ángulo entrada / salida", "≥ 36° / ≥ 31°"],
      ["Suspensión Del. / Tras.", "Independiente doble horquilla / Multi-link"],
      ["Neumáticos", "265/65 R17 Todo Terreno"]
    ],
    seguridadADAS: [
      "6 Airbags + ESP, TCS, BAS, EBA y asistencia antivuelco (RMI)",
      "Control de crucero adaptativo inteligente + Asistencia en pendientes (HAC) y descenso (HDC)",
      "Imagen panorámica 360° HD + 6 radares de estacionamiento",
      "Punto ciego (BSD), cambio de carril (LDW/LKA/LCA), alerta tráfico cruzado y apertura de puerta (DOW)",
      "Advertencia de colisión frontal (FCW) y trasera (RCW)"
    ],
    confortTecnologia: [
      `Triple pantalla: instrumental 10,25" + central 12,8" + pantalla copiloto de 12,8"`,
      "Asientos delanteros eléctricos (8 pos. conductor / 6 pos. pasajero) calefaccionados y ventilados",
      "Volante de cuero calefaccionado + Climatizador bizona con pre-ventilación",
      "Techo solar panorámico y conectividad Apple CarPlay",
      "Tomas 12V delantera y baúl + puertos USB Tipo A y Tipo C"
    ]
  },
  {
    slug: `bj60`,
    marca: "BAIC",
    nombre: "BAIC BJ60",
    version: "2.0T MHEV 48V 7 Asientos",
    categoria: `SUV Grande 4x4`,
    propulsion: "Híbrido MHEV 48V",
    filtro: ["baic", "hibrido", "todoterreno"],
    tagline: "Buque insignia 4x4 de 7 asientos en 3 filas, doble bloqueo de diferencial, vadeo de 750 mm y lujo ejecutivo.",
    imagenPrincipal: "assets/img/modelos/bj60/principal.webp",
    imagenLocal: "assets/img/modelos/bj60/principal.webp",
    tiene360: true,
    usarLocal360: true,
    frames360: 36,
    baseUrl360Remota: "",
    colores: [
      { nombre: "Celeste", hex: "#7ba1b7", img: "assets/img/modelos/bj60/celeste.png" },
      { nombre: "Negro", hex: "#111827", img: "assets/img/modelos/bj60/negro.png" },
      { nombre: "Blanco", hex: "#f3f4f6", img: "assets/img/modelos/bj60/blanca.png" },
      { nombre: "Azul", hex: "#0000ff", img: "assets/img/modelos/bj60/azul.png" },
      { nombre: "Verde", hex: "#008000", img: "assets/img/modelos/bj60/verde.png" },
      { nombre: "Gris Azulado", hex: "#7b8bad", img: "assets/img/modelos/bj60/gris_azulado.png" }
    ],
    destacados: [
      { label: "Potencia", value: "263 HP" },
      { label: "Capacidad", value: "7 Plazas" },
      { label: "Vadeo", value: "750 mm" }
    ],
    motorizacion: [
      ["Motor", "2.0T Híbrido MHEV (Mild Hybrid 48V)"],
      ["Potencia máxima", "263 HP"],
      ["Par máximo", "406 Nm"],
      ["Transmisión", "Automática de 8 velocidades (8AT)"],
      ["Tracción", "2WD o 4WD con doble bloqueo de diferencial electrónico y modo arrastre"],
      ["Tanque de combustible", "85 L (Nafta 92 octanos)"]
    ],
    dimensiones: [
      ["Largo x Ancho x Alto", "5.040 x 1.955 x 1.925 mm"],
      ["Distancia entre ejes", "2.820 mm"],
      ["Despeje mínimo / Vadeo", "215 mm / 750 mm profundidad máx."],
      ["Ángulo entrada / salida", "30° / 24°"],
      ["Suspensión Del. / Tras.", "Independiente doble brazo / Independiente barras múltiples"],
      ["Neumáticos", "275/50 R20-HT"]
    ],
    seguridadADAS: [
      "Airbags frontales, laterales y de cortina + ESP, TCS, RMI, HAC y HDC",
      "Chasis transparente 360° + Asistente de estacionamiento automático (APA) + 12 radares",
      "Crucero adaptativo (ACC), frenado activo de emergencia (AEB) y reconocimiento de señales (TSR)",
      "Punto ciego (BSD), cambio de carril (LCA/LDW/LKA) y alerta puerta abierta (DOW)"
    ],
    confortTecnologia: [
      "7 asientos de cuero en 3 filas con calefacción, ventilación, masaje y soporte lumbar",
      "Sistema de sonido Harman Infinity de 12 parlantes con cancelación activa de ruido",
      `Pantalla central 12,8" + instrumental 10,25" + Head-Up Display (W-HUD) + botón inicio con pantalla`,
      "Climatizador automático de tres zonas y luz ambiental de 256 colores",
      "Alimentación 220V + 12V en maletero y cargador inalámbrico rápido"
    ]
  },
  {
    slug: `eu5`,
    marca: "BAIC",
    nombre: `BAIC EU5`,
    version: "R600 100% Eléctrico",
    categoria: "Sedán Eléctrico",
    propulsion: "100% Eléctrico",
    filtro: ["baic", "electrico", "sedan"],
    tagline: "Movilidad 100% eléctrica probada: hasta 501 km de autonomía NEDC, carga rápida en 30 min y cero emisiones.",
    imagenPrincipal: "assets/img/modelos/eu5/principal.webp",
    imagenLocal: "assets/img/modelos/eu5/principal.webp",
    tiene360: true,
    usarLocal360: true,
    frames360: 36,
    baseUrl360Remota: "",
    colores: [
      { nombre: "Blanco", hex: "#f9fafb", img: "assets/img/modelos/eu5/blanco.webp" },
      { nombre: "Gris Claro", hex: "#9ca3af", img: "assets/img/modelos/eu5/gris_claro.webp" },
      { nombre: "Negro", hex: "#111827", img: "assets/img/modelos/eu5/negro.webp" },
      { nombre: "Gris", hex: "#374151", img: "assets/img/modelos/eu5/gris.webp" },
      { nombre: "Azul", hex: "#3b82f6", img: "assets/img/modelos/eu5/azul.webp" },
      { nombre: "Rojo", hex: "#ef4444", img: "assets/img/modelos/eu5/rojo.webp" }
    ],
    destacados: [
      { label: "Autonomía", value: "501 km" },
      { label: "Potencia", value: "165 HP" },
      { label: "Carga 30-80%", value: "≤ 30 min" }
    ],
    motorizacion: [
      ["Motor", "Síncrono de imanes permanentes 100% eléctrico"],
      ["Potencia máxima", "165 HP"],
      ["Par máximo", "240 Nm"],
      ["Batería", "Litio ternaria con control inteligente de temperatura"],
      ["Autonomía", "501 km (NEDC) / 625 km a 60 km/h constantes"],
      ["Carga rápida / Carga gral.", "30%-80% en ≤ 0,5 hs / ≤ 10 hs"]
    ],
    dimensiones: [
      ["Largo x Ancho x Alto", "4.670 x 1.820 x 1.520 mm"],
      ["Distancia entre ejes", "2.670 mm"],
      ["Peso en vacío", "1.620 kg"],
      ["Velocidad máxima", "150 km/h"]
    ],
    seguridadADAS: [
      "Airbags frontales, laterales y de cortina + ABS, EBD, EBA, ESP, TCS y Auto Hold",
      "Monitor de visión periférica (AVM) + Detección de objetos en movimiento (MOD)",
      "Control de crucero adaptativo (ACC) + Frenado automático (AEB) vehículos y peatones",
      "Punto ciego (BSD), salida de carril (LDW) y alerta de colisión frontal (FCW/PCW)"
    ],
    confortTecnologia: [
      `Instrumental digital LCD de 12,3" + Pantalla central de 12,3"`,
      "Asientos delanteros calefaccionados y ventilados con ajuste eléctrico y memoria",
      "Aire acondicionado automático con display de calidad del aire interior",
      "Carga inalámbrica rápida de celular, Bluetooth y puertos USB delanteros y traseros"
    ]
  },
  {
    slug: `arcfox-t5`,
    marca: "ARCFOX",
    nombre: `ARCFOX T5`,
    version: "SUV Crossover 100% Eléctrico",
    categoria: "SUV Eléctrico Premium",
    propulsion: "100% Eléctrico",
    filtro: ["arcfox", "electrico", "suv"],
    tagline: "520 km de autonomía, 250 CV, plataforma de carga rápida y cabina saludable libre de alérgenos.",
    imagenPrincipal: "assets/img/modelos/arcfox-t5/principal.webp",
    imagenLocal: "assets/img/modelos/arcfox-t5/principal.webp",
    tiene360: false,
    usarLocal360: false,
    frames360: 36,
    baseUrl360Remota: "",
    colores: [
      { nombre: "Blanco", hex: "#f9fafb", img: "assets/img/modelos/arcfox-t5/blanco.webp" },
      { nombre: "Negro", hex: "#111827", img: "assets/img/modelos/arcfox-t5/negro.webp" },
    ],
    destacados: [
      { label: "Autonomía", value: "520 km" },
      { label: "Potencia", value: "250 CV" },
      { label: "0-100 km/h", value: "7,5 s" }
    ],
    motorizacion: [
      ["Motor", "Síncrono de imanes permanentes (185 kW / 250 CV)"],
      ["Par máximo", "360 Nm"],
      ["Aceleración 0-100 km/h", "7,5 segundos"],
      ["Batería", "LFP 65 kWh (IP68) con gestión térmica inteligente"],
      ["Autonomía CLTC", "520 km (Consumo 14,7 kWh/100 km)"],
      ["Carga rápida CC (30-80%)", "≤ 30 min (+100 km en 10 min) / Lenta 7 kW: 11,5 hs"]
    ],
    dimensiones: [
      ["Largo x Ancho x Alto", "4.690 x 1.936 x 1.650 mm"],
      ["Distancia entre ejes", "2.845 mm"],
      ["Despeje mínimo al suelo", "166 mm"],
      ["Capacidad de carga", "Hasta 1.546 L (asientos abatidos) + caja térmica 8 L"],
      ["Suspensión Del. / Tras.", "MacPherson / Multi-link"],
      ["Neumáticos / Aerodinámica", "245/45 R19 / Coeficiente Cd 0,245"]
    ],
    seguridadADAS: [
      "5 Estrellas C-NCAP + 24 funciones ADAS Nivel L2.5 con 22 sensores",
      "Visión integral AVM 540° 'Ojo de Águila' + Estacionamiento inteligente y reversa por ruta",
      "Crucero adaptativo (ACC/ICA), atascos (TJA) y mantenimiento de carril (LKA)",
      "Frenado autónomo (AEB) + Tráfico cruzado delantero y trasero con frenado (FCTA/RCTA/FCTB/RCTB)"
    ],
    confortTecnologia: [
      `Chipset Qualcomm Snapdragon 8155 + Pantalla táctil de 15,6" + HUD Realidad Aumentada 22,8"`,
      "Cabina de grado infantil libre de alérgenos, formaldehído y benceno",
      "Techo panorámico fijo Low-E con 99% de aislamiento térmico y UV",
      "Asientos deportivos veganos calefaccionados (delanteros y traseros) y volante calefaccionado",
      "Salida 220V para cabina y portón trasero eléctrico"
    ]
  },
  {
    slug: `arcfox-t1`,
    marca: "ARCFOX",
    nombre: `ARCFOX T1`,
    version: "SUV Subcompacto 100% Eléctrico",
    categoria: "SUV Urbano Eléctrico",
    propulsion: "100% Eléctrico",
    filtro: ["arcfox", "electrico", "suv"],
    tagline: `Agilidad urbana eléctrica con consumo ultrabajo de 11,2 kWh/100 km, función V2L/V2V y pantalla de 15,6".`,
    imagenPrincipal: "assets/img/modelos/arcfox-t1/principal.webp",
    imagenLocal: "assets/img/modelos/arcfox-t1/principal.webp",
    tiene360: false,
    usarLocal360: false,
    frames360: 36,
    baseUrl360Remota: "",
    colores: [
      { nombre: "Azul", hex: "#7aa2c4", img: "assets/img/modelos/arcfox-t1/azul.webp" },
      { nombre: "Purpura", hex: "#b89bb8", img: "assets/img/modelos/arcfox-t1/purpura.webp" },
      { nombre: "Plata", hex: "#cbd5e1", img: "assets/img/modelos/arcfox-t1/plata.webp" },
      { nombre: "Gris", hex: "#64748b", img: "assets/img/modelos/arcfox-t1/gris.webp" },
      { nombre: "Blanco", hex: "#f8fafc", img: "assets/img/modelos/arcfox-t1/blanco.webp" }
    ],
    destacados: [
      { label: "Autonomía", value: "≥ 310 km" },
      { label: "Carga 30-80%", value: "≤ 25 min" },
      { label: "Radio giro", value: "5,2 m" }
    ],
    motorizacion: [
      ["Motor", "Síncrono de imanes permanentes (70 kW / 95 CV)"],
      ["Par máximo", "176 Nm"],
      ["Batería", "LFP con precalentamiento automático (94% retención a -7°C)"],
      ["Autonomía", "≥ 310 km (WCLT) / 320 km (CLTC)"],
      ["Carga rápida (30-80%)", "≤ 25 minutos (Conector CCS2)"],
      ["Suministro externo", "Función bidireccional V2L y V2V"]
    ],
    dimensiones: [
      ["Largo x Ancho x Alto", "4.337 x 1.860 x 1.572 mm"],
      ["Distancia entre ejes", "2.770 mm"],
      ["Peso en orden de marcha", "1.420 kg"],
      ["Radio de giro mínimo", "5,2 metros"],
      ["Neumáticos / Llantas", "215/55 R18 Aleación Bitono"]
    ],
    seguridadADAS: [
      "18 sistemas ADAS Nivel L2 + Visión 360° y chasis transparente de 180° (AVM 540°)",
      "Estacionamiento automático (APA) en 58 escenarios + Retroceso en misma trayectoria",
      "Control de crucero adaptativo (ACC/ICA), atascos (TJA) y salida de carril (LDW)",
      "Frenado automático de emergencia (AEB) + Alerta peatonal (PCW)"
    ],
    confortTecnologia: [
      `Pantalla central flotante LCD de 15,6" + Instrumental LCD de 8,8" + CarPlay`,
      "Asientos delanteros eléctricos con calefacción, ventilación y modo descanso 180° Lie-Flat",
      "Techo panorámico de cristal con cortina solar eléctrica y 99,9% protección UV",
      "Portón trasero eléctrico y carga rápida de celular de 66W"
    ]
  },
  {
    slug: "arcfox-kaola-s",
    marca: "ARCFOX",
    nombre: "ARCFOX Kaola S",
    version: "Minivan Compacta 100% Eléctrica",
    categoria: "Familiar Eléctrico",
    propulsion: "100% Eléctrico",
    filtro: ["arcfox", "electrico", "suv"],
    tagline: "Puerta lateral corrediza eléctrica, piso trasero plano, batería CATL de 500 km y cabina saludable familiar.",
    imagenPrincipal: "assets/img/modelos/arcfox-kaola-s/principal.webp",
    imagenLocal: "assets/img/modelos/arcfox-kaola-s/principal.webp",
    tiene360: false,
    usarLocal360: false,
    frames360: 36,
    baseUrl360Remota: "",
    colores: [
      { nombre: "Gris", hex: "#94a3b8", img: "assets/img/modelos/arcfox-kaola-s/gris.webp" },
      { nombre: "Blanco", hex: "#f8fafc", img: "assets/img/modelos/arcfox-kaola-s/blanco.webp" },
      { nombre: "Purpura", hex: "#a78bfa", img: "assets/img/modelos/arcfox-kaola-s/purpura.webp" }
    ],
    destacados: [
      { label: "Autonomía", value: "500 km" },
      { label: "Potencia", value: "160 CV" },
      { label: "Carga 30-80%", value: "26 min" }
    ],
    motorizacion: [
      ["Motor", "Imanes permanentes (120 kW / 160 CV)"],
      ["Par máximo", "240 Nm"],
      ["Batería", "CATL LFP de 58,8 kWh con precalentamiento automático"],
      ["Autonomía CLTC", "500 km"],
      ["Carga rápida CC (30-80%)", "26 minutos"],
      ["Suministro externo", "V2L (220V para campamento/aparatos) y V2V"]
    ],
    dimensiones: [
      ["Largo x Ancho x Alto", "4.500 x 1.870 x 1.655 mm"],
      ["Distancia entre ejes", "2.820 mm (Piso trasero completamente plano)"],
      ["Acceso", "Puerta lateral derecha corrediza eléctrica (340 mm altura umbral)"],
      ["Plazas / Peso", "5 plazas / 1.830 kg"],
      ["Neumáticos", "215/50 R17 Aleación"]
    ],
    seguridadADAS: [
      "21 sistemas ADAS Nivel L2 + Cámara periférica AVM 540°",
      "Control de crucero adaptativo (ACC/ICA) + Asistente en atascos (TJA)",
      "Frenado autónomo con detección de peatones (AEB-P), FCW y PCW",
      "Mantenimiento de carril de emergencia (ELK/LKA/LDW) y seguro electrónico para niños"
    ],
    confortTecnologia: [
      `Procesador Qualcomm Snapdragon 8155 + Pantalla HD 14,6" + Instrumental 10,25"`,
      "Cabina libre de formaldehído y benceno (< 0%) con materiales veganos skin-friendly",
      "Cúpula panorámica con 99% de aislamiento térmico y UV + cortinas solares traseras",
      "Asiento conductor eléctrico 6 vías calefaccionado y ventilado + Climatizador bizona con autosecado"
    ]
  },
  {
    slug: `arcfox-s5`,
    marca: "ARCFOX",
    nombre: `ARCFOX S5`,
    version: "High Performance Sedán Eléctrico",
    categoria: "Sedán Deportivo Eléctrico",
    propulsion: "100% Eléctrico",
    filtro: ["arcfox", "electrico", "sedan"],
    tagline: "Aerodinámica récord mundial (Cd 0,1925), 250 CV, 560 km de autonomía y AR-HUD de 68 pulgadas.",
    imagenPrincipal: "assets/img/modelos/arcfox-s5/principal.webp",
    imagenLocal: "assets/img/modelos/arcfox-s5/principal.webp",
    tiene360: false,
    usarLocal360: false,
    frames360: 36,
    baseUrl360Remota: "",
    colores: [
      { nombre: "Gris", hex: "#64748b", img: "assets/img/modelos/arcfox-s5/gris.webp" },
      { nombre: "Negro", hex: "#0f172a", img: "assets/img/modelos/arcfox-s5/negro.webp" },
      { nombre: "Blanco", hex: "#f8fafc", img: "assets/img/modelos/arcfox-s5/blanco.webp" }
    ],
    destacados: [
      { label: "Autonomía", value: "560 km" },
      { label: "Potencia", value: "250 CV" },
      { label: "Aero Cd", value: "0,1925" }
    ],
    motorizacion: [
      ["Motor", "Imán permanente (185 kW / 250 CV)"],
      ["Par máximo", "360 Nm"],
      ["Aceleración 0-100 km/h", "7,0 segundos"],
      ["Batería", "LFP 65 kWh (IP68) plataforma 400V"],
      ["Autonomía CLTC", "560 km"],
      ["Carga rápida CC (30-80%)", "≤ 30 min / Carga 7 kW: 11,5 hs"]
    ],
    dimensiones: [
      ["Largo x Ancho x Alto", "4.820 x 1.930 x 1.480 mm"],
      ["Distancia entre ejes", "2.900 mm"],
      ["Coeficiente aerodinámico", "Cd 0,1925 (récord en producción en serie)"],
      ["Baúl / Frenado", "430 L / 100-0 km/h en 33,5 m (Michelin Pilot Sport 4)"],
      ["Neumáticos", "245/45 R19"]
    ],
    seguridadADAS: [
      "ADAS Nivel L2+ con 20 sensores, radar ultrasónico AK2 y cámara HD 3 MP",
      "Cámara periférica 540° (AVM) + Estacionamiento inteligente TDA",
      "Control crucero adaptativo (ACC/ICA), atascos (TJA) y mantenimiento de carril (LKA/ELK)",
      "Frenado autónomo (AEB), tráfico cruzado delantero/trasero (RCTA/RCTB) y apertura puertas (DOW)"
    ],
    confortTecnologia: [
      `Chipset Qualcomm 8155 + Pantalla touch 15,6" + Proyección AR-HUD de 68" con Realidad Aumentada`,
      "Sistema de sonido 7.1 de 15 parlantes + subwoofer + reconocimiento facial",
      "Climatizador bizona con bomba de calor y 4 lámparas UV-C esterilizadoras",
      "Ventanas sin marco, manijas retráctiles, portón trasero eléctrico manos libres y carga inalámbrica 50W"
    ]
  }
];
