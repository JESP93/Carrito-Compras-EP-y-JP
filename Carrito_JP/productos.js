// Estructura editable del catálogo:
// - Productos agrupados por sector
// - Un producto por bloque
// - Mismo orden de campos en todos los registros
// - Total: 935 productos (616 Cat.1 + 319 Cat.2)
function producto(datos){
  return {
    id:'',
    sector:'',
    icono:'📦',
    nombre:'',
    desc:'',
    precio:0,
    tipo:'',
    ciiu:'',
    proceso:'',
    ...datos
  }
}

// Manufactura
const PRODUCTOS_MANUFACTURA=[
  producto({
    id:'P001',
    sector:'manufactura',
    icono:'🧵',
    nombre:'Máquina plana industrial (confección) Función: Costura recta gama genérica',
    desc:'Garantía: 06 meses por kit electrónico y 06 meses por descalibraciones mecánicas Tipo de aguja: Cubo delgado DBX1 o Cubo grueso 135X5 Sistema paso a paso Velocidad: Variable desde 500 hasta 4000 rpm Longitud de puntada (cubo delgado a 5 mm o cubo grueso 7 mm) Posicionador de aguja Luz led integrada Motor direct drive incorporado de 550w Devanador incorporado Mueble importado',
    precio:2973810,
    tipo:'Equipo',
    ciiu:'C (14,16,25) / S (95)',
    proceso:'Producción / Operación'
  }),

  producto({
    id:'P002',
    sector:'manufactura',
    icono:'🧵',
    nombre:'Overlock industrial Overlock con costura overlock de seis hilos para telas ligeras y medianas Fácil cambio para diferent',
    desc:'Sistema de lubricación automática Mejorado - mecanismo de barra de aguja cerrado Tensión óptima del hilo Diseño unico Servomotor integrado en la cabeza, control de velocidad continuo El ahorro de energía Ruido bajo Alto rendimiento',
    precio:5310500,
    tipo:'Insumo/Dotación',
    ciiu:'C (14,16,25) / S (95)',
    proceso:'Producción / Operación'
  }),

  producto({
    id:'P003',
    sector:'manufactura',
    icono:'🧵',
    nombre:'Recubridora industrial TIPO Recubridora - Collarín USO Industrial MOTOR Mecatrónica',
    desc:'MARCA Willcox MODELO W500D PUNTADA Collarin Recubierto  AGUJAS 3 HILOS 5 VOLTAJE 110V POTENCIA 550W',
    precio:4873050,
    tipo:'Insumo/Dotación',
    ciiu:'C (14,16,25) / S (95)',
    proceso:'Producción / Operación'
  }),

  producto({
    id:'P004',
    sector:'manufactura',
    icono:'🧵',
    nombre:'Fileteadora industrial Fabricante Jinthex',
    desc:'Producción Metal Tipo de puntada cadena Tipo de material ligero, medio, pesado Longitud de la puntada, mm 3.6 Rango de avance diferencial 0,7-2 Plataforma bloque Agujas aplicables B-27 (DCx27) Número de hilos cinco Tipo de grasa automático Altura de elevación del prensatelas, mm6 Automatización no Velocidad máxima de costura 6000 Características del motor motor doméstico Distancia entre agujas 3',
    precio:2969829,
    tipo:'Insumo/Dotación',
    ciiu:'C (14,16,25) / S (95)',
    proceso:'Producción / Operación'
  }),

  producto({
    id:'P005',
    sector:'manufactura',
    icono:'🪑',
    nombre:'Mesa de corte textil 120 x 180 cm Nuestra Mesa de Corte para Tela – Diseño Americano está fabricada para trabajos exigen',
    desc:'La mesa tiene una altura fija de 90 cm, ideal para mantener una postura ergonómica durante el corte, evitando dolores de espalda y fatiga en jornadas largas de trabajo.  Disponible en múltiples medidas, es un producto modular y adaptable a distintos espacios de trabajo. Puedes elegir la variante que mejor se acomode a tu taller desde el menú.',
    precio:1160072,
    tipo:'Mobiliario',
    ciiu:'C (14,16,25) / S (95)',
    proceso:'Producción / Operación'
  }),

  producto({
    id:'P006',
    sector:'manufactura',
    icono:'🧵',
    nombre:'Cortadora vertical de tela Motores',
    desc:'110V, 1ph, 50 / 60Hz 220V, 1ph o 3ph, 50 / 60Hz Estándar: velocidad única Opcional: velocidad dual, velocidad variable Caballo de fuerza 2hp, 1ph a 4,000 RPM 2hp, 3ph a 4,000 RPM Peso 41 libras (18.5kg) Cuchillas Estándar: acero al carbono Opcional: acero de alta velocidad, recubierto de PTFE, borde ondulado, ranura ondulada, punta en ángulo Cinturones Estándar: grano medio Opcional: fino, grueso,',
    precio:2322410,
    tipo:'Insumo/Dotación',
    ciiu:'C (14,16,25) / S (95)',
    proceso:'Producción / Operación'
  }),

  producto({
    id:'P007',
    sector:'manufactura',
    icono:'🧵',
    nombre:'Plancha industrial Ancho 6 Alto 4 Largo 4 Especificaciones Tipo Planchas para ropa Tipo plancha Calor Material Acero Col',
    desc:'Cuenta con indicador de llenado No Cuenta con control de temperatura Si Cuenta con antiadherente Si Potencia 110 V Cuenta con apagado automático No',
    precio:738812,
    tipo:'Insumo/Dotación',
    ciiu:'C (14,16,25) / S (95)',
    proceso:'Producción / Operación'
  }),

  producto({
    id:'P008',
    sector:'manufactura',
    icono:'🪑',
    nombre:'Mesa de planchado con aspiración La mesa tiene las siguientes características y se completa de:',
    desc:'* forma inclinada rectangular (1250 x 700 mm.), calentada electricamente y aspirante * aspirador incorporado de 0,56Kw * predisposición para aplicar n°1 brazo para forma * chimenea',
    precio:11600715,
    tipo:'Mobiliario',
    ciiu:'C (14,16,25) / S (95)',
    proceso:'Producción / Operación'
  }),

  producto({
    id:'P009',
    sector:'manufactura',
    icono:'✂️',
    nombre:'Kit de patronaje (reglas/curvas) Kit de Patronaje - 19 Piezas',
    desc:'Este completo kit de patronaje incluye herramientas esenciales para cualquier amante de la costura o profesional del diseño. Está compuesto por:  9 reglas de alta precisión: Fabricadas en plástico duradero, con líneas claras y excelente resistencia, ideales para un uso prolongado. -2 rodajas marca prenda. -1 cinta métrica automática de modistería. -1 tijera de sastre con mango ergonómico de plásti',
    precio:212415,
    tipo:'Insumo/Dotación',
    ciiu:'C (14,16,25) / S (95)',
    proceso:'Producción / Operación'
  }),

  producto({
    id:'P010',
    sector:'manufactura',
    icono:'🪑',
    nombre:'Maniquí de costura graduable en altura',
    desc:'Maniquí de costura con altura graduable. Torso completo. Superficie almohadillada para fijar con alfileres. Para diseño y ajuste de prendas.',
    precio:446250,
    tipo:'Mobiliario',
    ciiu:'C (14,16,25) / S (95)',
    proceso:'Producción / Operación'
  }),

  producto({
    id:'P011',
    sector:'manufactura',
    icono:'🪚',
    nombre:'Sierra circular de mesa Sierra Banco | Diámetro de Disco 10" (254mm) | 1800 Watts | Velocidad 0-4300 RPM | Incluye Disco',
    desc:'Sierra circular de mesa, disco 10" (254mm), 1800W, velocidad 0-4300 RPM. Incluye disco, soporte, guía de ángulo y bastón de empuje. Ideal para cortes rectos, transversales y en ángulo en madera.',
    precio:1897455,
    tipo:'Equipo',
    ciiu:'C (14,16,25) / S (95)',
    proceso:'Producción / Operación'
  }),

  producto({
    id:'P012',
    sector:'manufactura',
    icono:'🪚',
    nombre:'Ingleteadora CARACTERISTICAS',
    desc:'Mayor rango de corte de inglete y bisel para mayor versatilidad. Capacidad de corte hasta 75mm alto x 140mm ancho a 0º x 0º. Corte transversal 48mm alto x 95mm ancho a 45º x 45º en corte compuesto. Bloqueo de interruptor del gatillo para operar con una sola mano. Tope para cortes repetitivos para cortes de una misma longitud. CARACTERISTICAS  Frecuencia: 60 Hz. Potencia: 1,650 W. Diámetro del disc',
    precio:1687360,
    tipo:'Insumo/Dotación',
    ciiu:'C (14,16,25) / S (95)',
    proceso:'Producción / Operación'
  }),

  producto({
    id:'P013',
    sector:'manufactura',
    icono:'🪚',
    nombre:'Sierra sinfín Caracteristicas',
    desc:'- Sierra de mesa inclinable sin límite para realizar cortes oblicuos  - La hoja de la sierra se puede cambiar de forma segura y sin necesidad de herramientas  - Tope paralelo para realizar cortes rectos  - Ajuste de altura para cortes de precisión y uso seguro  - Guía con rodamiento de bolas para cortes precisos  - Conexión para extracción de polvo de 36 mm de diámetro  - Empuje para un uso seguro',
    precio:1581510,
    tipo:'Equipo',
    ciiu:'C (14,16,25) / S (95)',
    proceso:'Producción / Operación'
  }),

  producto({
    id:'P014',
    sector:'manufactura',
    icono:'🪚',
    nombre:'Cepilladora/regruesadora Ancho de vendaje 265 mm',
    desc:'- Longitud del tocador 1.110 mm. - Apósito reductor de sujeción 3 mm - El tope de preparación puede girarse hasta 45° - Diámetro del eje del cepillo 75 mm - cabezal de corte grande de 3 cuchillas - Velocidad 4.000 rpm - Altura máx. de espesor 190 mm. - Ancho de entrada de espesor 265 mm. - Avance de la cepilladora de espesor 5 m/min - Espesor máx. de sujeción espesor cepilladora 2 mm - Motor 2,3 H',
    precio:15095382,
    tipo:'Insumo/Dotación',
    ciiu:'C (14,16,25) / S (95)',
    proceso:'Producción / Operación'
  }),

  producto({
    id:'P015',
    sector:'manufactura',
    icono:'🪚',
    nombre:'Router/tupí Tipo',
    desc:'Rebordeadora Tipo velocidad Fijo Uso de herramienta Profesional Alimentación Eléctrica Inalámbrico No Velocidad 32000 Potencia nominal 530 Voltaje 110',
    precio:460352,
    tipo:'Equipo',
    ciiu:'C (14,16,25) / S (95)',
    proceso:'Producción / Operación'
  }),

  producto({
    id:'P016',
    sector:'manufactura',
    icono:'🪚',
    nombre:'Esmeril de banco Tipo Esmeriles de banco Tipo velocidad Fijo Tipo de trabajo Profesional Uso de herramienta Profesional',
    desc:'Potencia nominal 373 W Grano nº 0 Velocidad 3450 RPM Voltaje 110 V Alimentación Eléctrica Incluye (1) Disco grano grueso y (1) Disco grano medio. Potencia del motor 3450 RPM',
    precio:747736,
    tipo:'Insumo/Dotación',
    ciiu:'C (14,16,25) / S (95)',
    proceso:'Producción / Operación'
  }),

  producto({
    id:'P017',
    sector:'manufactura',
    icono:'🪚',
    nombre:'Taladro de banco Peso 14 kg',
    desc:'Dimensiones 47 × 37 × 23 cm Potencia 1/3 HP / 250 W Broquero 1/2" – 13 mm Tipo de Mandril Con llave Cono de broquero B16 Velocidades (5) 760 – 3,070 rpm Mesa de Trabajo 16 cm x 16 cm Altura de trabajo 20cm Altura total 59cm',
    precio:1240575,
    tipo:'Insumo/Dotación',
    ciiu:'C (14,16,25) / S (95)',
    proceso:'Producción / Operación'
  }),

  producto({
    id:'P018',
    sector:'manufactura',
    icono:'🏭',
    nombre:'Compresor de aire Tipo Compresores de aire',
    desc:'Uso de herramienta Industrial Largo del cable 1.50 Capacidad del estanque 50 Incluye * 1 Botella de aceite monogrado SAE30 • 1 Filtro de aire • 1 Tapón del depósito de aceite • 2 Ruedas • 2 Soportes frontales de hule • 1 Bolsa con tornillería Presión máxima 116 Caudal máximo 3.2 Alimentación Eléctrica Potencia 2.610 Voltaje 120 Motor Con Bobinas de aluminio Flujo de salida 90',
    precio:1913342,
    tipo:'Equipo',
    ciiu:'C (14,16,25) / S (95)',
    proceso:'Producción / Operación'
  }),

  producto({
    id:'P019',
    sector:'manufactura',
    icono:'🔧',
    nombre:'Pistola neumática para clavado Características',
    desc:'Carcasa de aluminio. Capacidad de 100 clavos. Mango ergonómico para mayor comodidad del operador. Gatillo de seguridad. Tipo clavo: Sin cabeza. Gama de clavos (largo): 15/32" a 1.3/16"(12-30 mm). Calibre clavos (espesor): 23" (0,68mm). Presión de trabajo: 75-110 PSI. Consumo nominal: 90 psi. Entrada de aire: 1/4 NPT. Diámetro interno manguera: 3/8" . Nivel de ruido: 90 dB. Ciclo de trabajo: Contin',
    precio:287206,
    tipo:'Insumo/Dotación',
    ciiu:'C (14,16,25) / S (95)',
    proceso:'Producción / Operación'
  }),

  producto({
    id:'P020',
    sector:'manufactura',
    icono:'🔥',
    nombre:'Soldadora MIG/MAG Tipo Soldadoras Tipo de trabajo Industrial Uso de herramienta Profesional',
    desc:'Largo del cable 3 m Incluye Antorcha MIG-MAG, pinza de masa y cable de conexión Ciclo de trabajo 170A - 20% / 90A - 60% / 70A - 100% Frecuencia 50/60 Hz Amperaje 170 A Alimentación Eléctrica Voltaje 230 V Rango de corriente 10 - 170 A Proceso soldadura MIG-MAG / Flux / MMA / TIG DC-Lift Potencia nominal 3.2 kW Rango de temperatura 40°C',
    precio:7680676,
    tipo:'Equipo',
    ciiu:'C (14,16,25) / S (95)',
    proceso:'Producción / Operación'
  }),

  producto({
    id:'P021',
    sector:'manufactura',
    icono:'🔥',
    nombre:'Soldadora TIG Tipo Soldador inversor Tipo de trabajo Profesional Uso de herramienta Profesional',
    desc:'Amperaje 250 A Voltaje 110 V, 220 V Rango de corriente 20 - 250 A Proceso soldadura FLUXCORE , LIFT TIG , MMA ( revestida )Potencia nominal 26.4 kW',
    precio:1995452,
    tipo:'Equipo',
    ciiu:'C (14,16,25) / S (95)',
    proceso:'Producción / Operación'
  }),

  producto({
    id:'P022',
    sector:'manufactura',
    icono:'🔥',
    nombre:'Cortadora plasma Tipo Cortadora de plasma Tipo de trabajo Profesional Tipo de panel de control Digital',
    desc:'Uso de herramienta Profesional Incluye Antorcha de plasma 60A Conjunto pinza de masa Cable de alimentación Manual de usuario Kit consumibles básico Manual de uso Ciclo de trabajo 30%  frecuencia 60 HZ Amperaje 40 A Voltaje 110 V, 220 V Rango de corriente 20 - 40 A Proceso soldadura Corte por plasma Voltaje enchufable Multivoltaje 110/220 Potencia nominal 7480 W Rango de  temperatura 30',
    precio:3569822,
    tipo:'Insumo/Dotación',
    ciiu:'C (14,16,25) / S (95)',
    proceso:'Producción / Operación'
  }),

  producto({
    id:'P023',
    sector:'manufactura',
    icono:'🔧',
    nombre:'Prensa hidráulica Tipo Prensas Diámetro de apertura 65 cm Material Acero Tipo de trabajo',
    desc:'Industrial Tipo de prensa Prensa rápida Tipo de abrazadera Acero',
    precio:1213622,
    tipo:'Equipo',
    ciiu:'C (14,16,25) / S (95)',
    proceso:'Producción / Operación'
  }),

  producto({
    id:'P024',
    sector:'manufactura',
    icono:'🔧',
    nombre:'Dobladora de tubo/perfil La máquina dobladora de ángulos serie ALE-JY dobla diversos perfiles de metal, incluidos ángulo',
    desc:'Su diseño compacto ofrece ventajas como bajo consumo de energía, alta eficiencia y funcionamiento silencioso, perfecto tanto para pequeños talleres como para grandes plantas de fabricación.  Esta máquina es ampliamente utilizada en industrias que requieren doblado de metales para componentes estructurales como bridas, anillos y vigas curvas.',
    precio:12393344,
    tipo:'Equipo',
    ciiu:'C (14,16,25) / S (95)',
    proceso:'Producción / Operación'
  }),

  producto({
    id:'P025',
    sector:'manufactura',
    icono:'🔧',
    nombre:'Cizalla manual/hidráulica HZ-55 Cizalla hidráulica manual (120KN - 13.4 TON) Marca ZAAG Fuerza de corte  120KN - 13.4 TO',
    desc:'Cizalla manual/hidráulica HZ-55 (120KN). Para corte de varillas y perfiles metálicos. Acero reforzado. Para obras civiles y talleres eléctricos.',
    precio:8791646,
    tipo:'Equipo',
    ciiu:'C (14,16,25) / S (95)',
    proceso:'Producción / Operación'
  }),

  producto({
    id:'P026',
    sector:'manufactura',
    icono:'🔧',
    nombre:'Pulidora angular industrial Motor de 1250 W, montado sobre balero de bolas para mayor vida útil y mejor desempeño',
    desc:'Mango ergonómico antiderrapante de 2 posiciones, mejor control para el operador Interruptor con función de uso continuo Uso industrial, para esmerilar y cortar acero, tubos, hierro en ángulo, ladrillos, azulejos, piedra y/o piezas de cerámica Cumple la norma NOM-003-SCFI',
    precio:471135,
    tipo:'Insumo/Dotación',
    ciiu:'C (14,16,25) / S (95)',
    proceso:'Producción / Operación'
  }),

  producto({
    id:'P027',
    sector:'manufactura',
    icono:'🔧',
    nombre:'Juego de brocas industriales 5 Brocas para madera con punta centradora para una perforación más precisa.',
    desc:'11 Brocas HSS para metal con punta tradicional (118°). 3 Brocas de manita con punta guía para perforaciones precisas y zanco hexagonal de cambio rápido. 6 Brocas para concreto con punta de carburo de tungsteno. Estuche plástico con compartimientos laterales para guardar herramienta. Incluye:  19 Puntas Estrella de 1", PHI a PH3 5 Puntas Pala de 1", 3 mm a 12 mm 9 Puntas cuadradas de 1", S1 a S3 10',
    precio:228302,
    tipo:'Insumo/Dotación',
    ciiu:'C (14,16,25) / S (95)',
    proceso:'Producción / Operación'
  }),

  producto({
    id:'P028',
    sector:'manufactura',
    icono:'🔧',
    nombre:'Juego de llaves y dados Juego de Dados, Juego de Llaves de Carraca, Juego de Llaves de Vaso de 46 Piezas de 1/4 con Jueg',
    desc:'El juego de llaves de vaso SOMOZO de 46 piezas es un conjunto completo de herramientas prácticas que se montan para ayudar a los aficionados e incluso a los profesionales en sus proyectos. Cada pieza de metal en este juego fue forjada de acero al carbono de alta calidad, endurecido y templado con un acabado pulido. Las herramientas están hechas para durar años y proporcionar siempre los mismos res',
    precio:896716,
    tipo:'Insumo/Dotación',
    ciiu:'C (14,16,25) / S (95)',
    proceso:'Producción / Operación'
  }),

  producto({
    id:'P029',
    sector:'manufactura',
    icono:'📏',
    nombre:'Calibrador pie de rey Diseñado para el trabajo exigente, este calibrador pie de rey ofrece una medición manual con un ra',
    desc:'Calibrador pie de rey en acero inoxidable. Mide diámetros y profundidades. Precisión 0.02 mm. Esencial para control de calidad en talleres metalmecánicos.',
    precio:97996,
    tipo:'Insumo/Dotación',
    ciiu:'C (14,16,25) / S (95)',
    proceso:'Producción / Operación'
  }),

  producto({
    id:'P030',
    sector:'manufactura',
    icono:'📏',
    nombre:'Micrómetro MICRÓMETRO DE EXTERIORES PROFESIONAL, CAPACIDAD 0- 1", PRECISIÓN 0.001" ASIMETO',
    desc:'Micrómetro de exteriores profesional, capacidad 0-1 pulgada, precisión 0.001 mm. Para medición precisa en metalmecánica y control de calidad.',
    precio:378242,
    tipo:'Insumo/Dotación',
    ciiu:'C (14,16,25) / S (95)',
    proceso:'Producción / Operación'
  }),

  producto({
    id:'P031',
    sector:'manufactura',
    icono:'📏',
    nombre:'Multímetro digital certificado Tipo',
    desc:'Multímetros Uso Profesional Tipo de trabajo Profesional Voltaje 0 V Amperaje 0 A Alimentación Pila Funciones Medidor de voltaje',
    precio:180106,
    tipo:'Insumo/Dotación',
    ciiu:'C (14,16,25) / S (95)',
    proceso:'Producción / Operación'
  }),

  producto({
    id:'P032',
    sector:'manufactura',
    icono:'📏',
    nombre:'Pinza amperimétrica Características Principales',
    desc:'Medición de Corriente AC: Hasta 600A con gran precisión.  True RMS: Mediciones precisas en cualquier condición de señal. NCV (Voltaje Sin Contacto): Detecta presencia de tensión en cables y paredes sin necesidad de contacto eléctrico.  Live Test: Función para identificar cables de fase (línea) de forma rápida.  Pantalla Retroiluminada: Gran tamaño y excelente visibilidad en lugares oscuros.  Prote',
    precio:232050,
    tipo:'Insumo/Dotación',
    ciiu:'C (14,16,25) / S (95)',
    proceso:'Producción / Operación'
  }),

  producto({
    id:'P033',
    sector:'manufactura',
    icono:'⚡',
    nombre:'Detector de voltaje sin contacto Dale seguridad a tus instalaciones eléctricas con el Detector de Voltaje sin Contacto B',
    desc:'Detector de voltaje sin contacto. Detecta tensión sin tocar el cable. Señal luminosa y sonora. Herramienta de seguridad para técnicos eléctricos.',
    precio:126556,
    tipo:'Insumo/Dotación',
    ciiu:'C (14,16,25) / S (95)',
    proceso:'Producción / Operación'
  }),

  producto({
    id:'P034',
    sector:'manufactura',
    icono:'⚡',
    nombre:'Probador de tomas (tester) Ancho',
    desc:'4.1 cm Alto 1.9 cm Largo 7.5 cm Especificaciones  Tipo Tester Potencia máxima 0 W Alimentación Otra',
    precio:83716,
    tipo:'Insumo/Dotación',
    ciiu:'C (14,16,25) / S (95)',
    proceso:'Producción / Operación'
  }),

  producto({
    id:'P035',
    sector:'manufactura',
    icono:'🔧',
    nombre:'Juego de destornilladores aislados Destornilladores diseñados para trabajos eléctricos seguros, fabricados en acero crom',
    desc:'Cada destornillador está aislado para 1000V Mangos ergonómicos para mayor comodidad y agarre. Incluye destornilladores de pala y Phillips en diferentes tamaños. Ideal para reparación y mantenimiento de equipos eléctricos. Cumple con las normas de seguridad y calidad internacionales. Práctico estuche para almacenamiento y transporte fácil.',
    precio:270249,
    tipo:'Insumo/Dotación',
    ciiu:'C (14,16,25) / S (95)',
    proceso:'Producción / Operación'
  }),

  producto({
    id:'P036',
    sector:'manufactura',
    icono:'🔧',
    nombre:'Pelacables profesional Pela Cables Automática 8" Truper',
    desc:'Permite quitar el aislamiento del cable de forma automática Capacidad de: 10 a 22 AWG Incluye cuchillas para corte de cables Tope para medir la longitud del cable a pelar 10 Mordazas para crimpar Medida: 8"',
    precio:187246,
    tipo:'Insumo/Dotación',
    ciiu:'C (14,16,25) / S (95)',
    proceso:'Producción / Operación'
  }),

  producto({
    id:'P037',
    sector:'manufactura',
    icono:'🔧',
    nombre:'Crimpadora terminales Dimensiones',
    desc:'Ancho 11.5 cm Alto 26.5 cm Largo 5.5 cm Especificaciones  Tipo Crimpeadora Tipo de alicate Pelacables Tipo de trabajo Profesional Material del mango Plástico',
    precio:71222,
    tipo:'Insumo/Dotación',
    ciiu:'C (14,16,25) / S (95)',
    proceso:'Producción / Operación'
  }),

  producto({
    id:'P038',
    sector:'manufactura',
    icono:'🔧',
    nombre:'Juego de alicates (punta/corte) Tipo',
    desc:'Set de alicates Incluye 1x Alicate de punta plana 165 mm, 1x Alicate Universal 165 mm, 1x Alicate Universal 190 mm Número de piezas 3 Formato del producto Caja País de Origen China',
    precio:160472,
    tipo:'Insumo/Dotación',
    ciiu:'C (14,16,25) / S (95)',
    proceso:'Producción / Operación'
  }),

  producto({
    id:'P039',
    sector:'manufactura',
    icono:'🔧',
    nombre:'Pistola de calor Dimensiones',
    desc:'Peso 0.8 kg Especificaciones  Tipo Pistolas de calor Uso de herramienta Profesional Cuenta con bloqueo de seguridad No Cuenta con control de temperatura Si Inalámbrico No Potencia nominal 1500 W Alimentación Eléctrica Rango de temperatura 90 a 600 grados cent. Voltaje 110 Incluye Pistola de calor, Boquillas, Mango de herramientas de pastoreo, Herramientas de pastoreo.',
    precio:249722,
    tipo:'Insumo/Dotación',
    ciiu:'C (14,16,25) / S (95)',
    proceso:'Producción / Operación'
  }),

  producto({
    id:'P040',
    sector:'manufactura',
    icono:'🔌',
    nombre:'Estación de soldadura electrónica Pantalla LCD de 3 dígitos.',
    desc:'Construcción antiestática del cuerpo de la estación, cautín y pistola de aire. Control exacto de temperatura (±1 °C) Calentamiento rápido (3-5 seg.)  Voltaje 220 V /  50 Hz Consumo de energía 700 Wt Diapasón de temperaturas 100 °C ~ 450 °C Flujo de aire 120 L/min (max.) Estabilidad de temperatura ±1 °C Peso 2,0 kg',
    precio:498729,
    tipo:'Equipo',
    ciiu:'C (14,16,25) / S (95)',
    proceso:'Producción / Operación'
  }),

  producto({
    id:'P041',
    sector:'manufactura',
    icono:'🌬️',
    nombre:'Extractor de humos de soldadura',
    desc:'Extractor de humos para soldadura con filtros de alta eficiencia. Elimina gases nocivos. Protege la salud del operario. Para talleres de soldadura.',
    precio:4542357,
    tipo:'Equipo',
    ciiu:'C (14,16,25) / S (95)',
    proceso:'Producción / Operación'
  }),

  producto({
    id:'P042',
    sector:'manufactura',
    icono:'🧹',
    nombre:'Aspiradora industrial Especificaciones',
    desc:'Tipo Barril Ancho 30 cm Alto 53 cm Largo 30 cm Peso 5 kg Tipo de aspiradora Barril Tipo de filtro Polvo, Agua Uso de herramienta Industrial Material Acero inoxidable Largo del cable 6 m Largo de la manguera 2.4 m Color Plateado Incluye 1 Manguera de diámetro 1 1/4" (32 mm). 1.9 m (6.2 ft) con seguro de ajuste, 1 Boquilla tipo garra, 1 Boquilla para ranuras, 1 Boquilla 2 en 1 para piso y alfombra,',
    precio:1261816,
    tipo:'Insumo/Dotación',
    ciiu:'C (14,16,25) / S (95)',
    proceso:'Producción / Operación'
  }),

  producto({
    id:'P043',
    sector:'manufactura',
    icono:'🪑',
    nombre:'Banco de trabajo industrial - Banco de trabajo estándar móvil - 2000 x 700 x 840 mm L x A x A WS885N-2000M40-X7000',
    desc:'Banco de trabajo industrial estándar móvil (2000 x 700 mm). Superficie resistente. Ruedas con freno. Ideal para talleres de metalmecánica, carpintería y servicios técnicos.',
    precio:4998000,
    tipo:'Insumo/Dotación',
    ciiu:'C (14,16,25) / S (95)',
    proceso:'Producción / Operación'
  }),

  producto({
    id:'P044',
    sector:'manufactura',
    icono:'🔩',
    nombre:'Tornillo de banco Esta prensa cuenta con una garantía de 10 años, lo que te da la tranquilidad de saber que es una herra',
    desc:'Tornillo de banco industrial con garantía de 10 años. Mandíbulas en acero endurecido. Fija piezas con firmeza. Para tornería y metalmecánica.',
    precio:683476,
    tipo:'Insumo/Dotación',
    ciiu:'C (14,16,25) / S (95)',
    proceso:'Producción / Operación'
  }),

  producto({
    id:'P045',
    sector:'manufactura',
    icono:'🗄️',
    nombre:'Estantería metálica industrial torre 240 x 120 cm',
    desc:'Estantería metálica industrial 240 x 120 cm. Estructura en acero anticorrosivo. Capacidad por nivel hasta 200 kg. Para bodegas, tiendas y talleres.',
    precio:1841852,
    tipo:'Mobiliario',
    ciiu:'C (14,16,25) / S (95)',
    proceso:'Producción / Operación'
  }),

  producto({
    id:'P046',
    sector:'manufactura',
    icono:'💡',
    nombre:'Lámpara de trabajo LED Esta luz de trabajo COB está hecha de material de alta calidad.',
    desc:'Adopta cuentas de luz muy brillantes con brillo constante. Fácil de llevar y de usar. Una gran elección para ti.  Gran Luz De Inundación De Alto Brillo. Carga De Emergencia Del Teléfono Pantalla De Potencia De Carga Interfaz De Carga Micro Usb Baterías 3xaa Marca: Ecoled Modelo: Lámpara De Trabajo Multifuncional  Tipo De Luz: Luz Led Dimensiones: 15cm * 20cm Aprox.',
    precio:75836,
    tipo:'Equipo',
    ciiu:'C (14,16,25) / S (95)',
    proceso:'Producción / Operación'
  }),

  producto({
    id:'P047',
    sector:'manufactura',
    icono:'🦺',
    nombre:'Equipo de protección personal industrial (careta/guantes)',
    desc:'EPP industrial: careta facial y guantes resistentes. Protege de chispas y proyecciones. Cumple normas de seguridad industrial.',
    precio:116025,
    tipo:'Insumo/Dotación',
    ciiu:'C (14,16,25) / S (95)',
    proceso:'Producción / Operación'
  }),

  producto({
    id:'P048',
    sector:'manufactura',
    icono:'🧯',
    nombre:'Extintor multipropósito (taller) abc- 20 libras rdl',
    desc:'Extintor multipropósito ABC 20 libras. Apaga fuegos tipo A, B y C. Certificado con manómetro. Obligatorio en talleres, cocinas y bodegas.',
    precio:196172,
    tipo:'Insumo/Dotación',
    ciiu:'C (14,16,25) / S (95)',
    proceso:'Producción / Operación'
  }),

  producto({
    id:'P049',
    sector:'manufactura',
    icono:'🩹',
    nombre:'Botiquín industrial (taller) Estuche plástico mini cuadrado, medidas 21,5 cm x 11.5 cm x 6 cm compuesto por 13 elementos',
    desc:'Botiquín de primeros auxilios industrial. Incluye vendas, antisépticos, curitas y guantes. Cumple normas de seguridad industrial. Estuche plástico compacto.',
    precio:83716,
    tipo:'Insumo/Dotación',
    ciiu:'C (14,16,25) / S (95)',
    proceso:'Producción / Operación'
  }),

  producto({
    id:'P298',
    sector:'manufactura',
    icono:'🧵',
    nombre:'agujas en precentacion campana , groz beckert, schmetz,singer',
    desc:'Agujas industriales para máquinas de coser (Groz-Beckert, Schmetz, Singer). Presentación en campana. Compatibles con máquinas planas, overlock y recubridoras. Punta precisa para costura limpia.',
    precio:9608,
    tipo:'Equipo',
    ciiu:'C (14,16,25) / S (95)',
    proceso:'Producción / Operación'
  }),

  producto({
    id:'P299',
    sector:'manufactura',
    icono:'🧵',
    nombre:'rematadores en toda su precentacion',
    desc:'Producto de uso industrial o comercial. Consulte con su asesor para más especificaciones técnicas y disponibilidad.',
    precio:2768,
    tipo:'Equipo',
    ciiu:'C (14,16,25) / S (95)',
    proceso:'Producción / Operación'
  }),

  producto({
    id:'P300',
    sector:'manufactura',
    icono:'🧵',
    nombre:'carreteles',
    desc:'Carreteles para máquinas de coser industriales. Almacenan el hilo inferior. Compatibles con máquinas planas y overlock. Resistentes al calor.',
    precio:977,
    tipo:'Equipo',
    ciiu:'C (14,16,25) / S (95)',
    proceso:'Producción / Operación'
  }),

  producto({
    id:'P301',
    sector:'manufactura',
    icono:'🧵',
    nombre:'abreojales en 3 precentaciones',
    desc:'Herramienta para abrir ojales en telas y cuero. Disponible en 3 tamaños. Ideal para confección de ropa, marroquinería y calzado. Fácil de usar y de larga duración.',
    precio:1466,
    tipo:'Equipo',
    ciiu:'C (14,16,25) / S (95)',
    proceso:'Producción / Operación'
  }),

  producto({
    id:'P302',
    sector:'manufactura',
    icono:'🧵',
    nombre:'metro en 3 precentaciones',
    desc:'Metro o cinta métrica para costura en 3 presentaciones. Cinta flexible. Graduada en centímetros y pulgadas. Para patronaje y corte de telas.',
    precio:2851,
    tipo:'Equipo',
    ciiu:'C (14,16,25) / S (95)',
    proceso:'Producción / Operación'
  }),

  producto({
    id:'P303',
    sector:'manufactura',
    icono:'🧵',
    nombre:'ijeras en 5 tamaños',
    desc:'Tijeras de costura en 5 tamaños. Acero inoxidable, filo duradero. Corte preciso en telas. Mangos ergonómicos para largas jornadas de confección.',
    precio:8305,
    tipo:'Equipo',
    ciiu:'C (14,16,25) / S (95)',
    proceso:'Producción / Operación'
  }),

  producto({
    id:'P304',
    sector:'manufactura',
    icono:'⚙️',
    nombre:'pinzas de enhebrar',
    desc:'Pinzas enhebradoras para pasar el hilo fácilmente por la aguja. Ahorran tiempo y esfuerzo. Para máquinas industriales y domésticas.',
    precio:5473,
    tipo:'Equipo',
    ciiu:'C (14,16,25) / S (95)',
    proceso:'Producción / Operación'
  }),

  producto({
    id:'P305',
    sector:'manufactura',
    icono:'🧵',
    nombre:'alfileres rodaja y caja',
    desc:'Alfileres de costura en presentación de rodaja y caja. Punta fina que no daña las telas. Esenciales para fijar y ajustar piezas antes de coser.',
    precio:2066,
    tipo:'Equipo',
    ciiu:'C (14,16,25) / S (95)',
    proceso:'Producción / Operación'
  }),

  producto({
    id:'P306',
    sector:'manufactura',
    icono:'🧵',
    nombre:'guias de iman',
    desc:'Guías magnéticas para máquinas de coser. Adhieren a la placa para guiar la tela a distancia constante. Garantizan costuras rectas.',
    precio:4183,
    tipo:'Equipo',
    ciiu:'C (14,16,25) / S (95)',
    proceso:'Producción / Operación'
  }),

  producto({
    id:'P307',
    sector:'manufactura',
    icono:'🧵',
    nombre:'lamparas',
    desc:'Lámparas para máquinas de coser industriales. Iluminan el área de costura. LED de bajo consumo y larga vida útil.',
    precio:15145,
    tipo:'Equipo',
    ciiu:'C (14,16,25) / S (95)',
    proceso:'Producción / Operación'
  }),

  producto({
    id:'P308',
    sector:'manufactura',
    icono:'🧵',
    nombre:'ganchos para cualquier tipo de maquina',
    desc:'Ganchos accesorios para máquinas de coser industriales. Facilitan el guiado y tensión del hilo. Mejoran la calidad de la costura.',
    precio:34459,
    tipo:'Equipo',
    ciiu:'C (14,16,25) / S (95)',
    proceso:'Producción / Operación'
  }),

  producto({
    id:'P309',
    sector:'manufactura',
    icono:'🧵',
    nombre:'tizas',
    desc:'Tizas de sastre para marcado en telas. Trazo limpio. Fácilmente removible al lavado. Para confección y sastrería.',
    precio:1140,
    tipo:'Equipo',
    ciiu:'C (14,16,25) / S (95)',
    proceso:'Producción / Operación'
  }),

  producto({
    id:'P310',
    sector:'manufactura',
    icono:'🧵',
    nombre:'caja porta carretel',
    desc:'Organizador tipo caja para almacenar carretes e hilos de costura. Mantiene el hilo limpio y ordenado. Fácil acceso durante la confección.',
    precio:8225,
    tipo:'Equipo',
    ciiu:'C (14,16,25) / S (95)',
    proceso:'Producción / Operación'
  }),

  producto({
    id:'P311',
    sector:'manufactura',
    icono:'🧵',
    nombre:'Máquina plana industrial (confección) Función: Costura recta gama genérica',
    desc:'Garantía: 06 meses por kit electrónico y 06 meses por descalibraciones mecánicas Tipo de aguja: Cubo delgado DBX1 o Cubo grueso 135X5 Sistema paso a paso Velocidad: Variable desde 500 hasta 4000 rpm Longitud de puntada (cubo delgado a 5 mm o cubo grueso 7 mm) Posicionador de aguja Luz led integrada Motor direct drive incorporado de 550w Devanador incorporado Mueble importado',
    precio:2053557,
    tipo:'Equipo',
    ciiu:'C (14,16,25) / S (95)',
    proceso:'Producción / Operación'
  }),

  producto({
    id:'P312',
    sector:'manufactura',
    icono:'🧵',
    nombre:'Overlock industrial Overlock con costura overlock de seis hilos para telas ligeras y medianas Fácil cambio para diferent',
    desc:'Sistema de lubricación automática Mejorado - mecanismo de barra de aguja cerrado Tensión óptima del hilo Diseño unico Servomotor integrado en la cabeza, control de velocidad continuo El ahorro de energía Ruido bajo Alto rendimiento',
    precio:2524198,
    tipo:'Insumo/Dotación',
    ciiu:'C (14,16,25) / S (95)',
    proceso:'Producción / Operación'
  }),

  producto({
    id:'P313',
    sector:'manufactura',
    icono:'🧵',
    nombre:'Recubridora industrial TIPO Recubridora - Collarín USO Industrial MOTOR Mecatrónica',
    desc:'MARCA Willcox MODELO W500D PUNTADA Collarin Recubierto  AGUJAS 3 HILOS 5 VOLTAJE 110V POTENCIA 550W',
    precio:3257030,
    tipo:'Insumo/Dotación',
    ciiu:'C (14,16,25) / S (95)',
    proceso:'Producción / Operación'
  }),

  producto({
    id:'P314',
    sector:'manufactura',
    icono:'🧵',
    nombre:'Fileteadora industrial Fabricante Jinthex',
    desc:'Producción Metal Tipo de puntada cadena Tipo de material ligero, medio, pesado Longitud de la puntada, mm 3.6 Rango de avance diferencial 0,7-2 Plataforma bloque Agujas aplicables B-27 (DCx27) Número de hilos cinco Tipo de grasa automático Altura de elevación del prensatelas, mm6 Automatización no Velocidad máxima de costura 6000 Características del motor motor doméstico Distancia entre agujas 3',
    precio:2328776,
    tipo:'Insumo/Dotación',
    ciiu:'C (14,16,25) / S (95)',
    proceso:'Producción / Operación'
  }),

  producto({
    id:'P315',
    sector:'manufactura',
    icono:'🪑',
    nombre:'Mesa de corte textil 120 x 180 cm Nuestra Mesa de Corte para Tela – Diseño Americano está fabricada para trabajos exigen',
    desc:'La mesa tiene una altura fija de 90 cm, ideal para mantener una postura ergonómica durante el corte, evitando dolores de espalda y fatiga en jornadas largas de trabajo.  Disponible en múltiples medidas, es un producto modular y adaptable a distintos espacios de trabajo. Puedes elegir la variante que mejor se acomode a tu taller desde el menú.',
    precio:1369581,
    tipo:'Mobiliario',
    ciiu:'C (14,16,25) / S (95)',
    proceso:'Producción / Operación'
  }),

  producto({
    id:'P316',
    sector:'manufactura',
    icono:'🧵',
    nombre:'Cortadora vertical de tela Motores',
    desc:'110V, 1ph, 50 / 60Hz 220V, 1ph o 3ph, 50 / 60Hz Estándar: velocidad única Opcional: velocidad dual, velocidad variable Caballo de fuerza 2hp, 1ph a 4,000 RPM 2hp, 3ph a 4,000 RPM Peso 41 libras (18.5kg) Cuchillas Estándar: acero al carbono Opcional: acero de alta velocidad, recubierto de PTFE, borde ondulado, ranura ondulada, punta en ángulo Cinturones Estándar: grano medio Opcional: fino, grueso,',
    precio:2500062,
    tipo:'Insumo/Dotación',
    ciiu:'C (14,16,25) / S (95)',
    proceso:'Producción / Operación'
  }),

  producto({
    id:'P317',
    sector:'manufactura',
    icono:'🧵',
    nombre:'AFILADORES PARA CORTADORA',
    desc:'Afiladores para mantener el filo de cuchillas de cortadoras de tela. Garantizan cortes precisos y prolongan la vida útil. Indispensable para talleres de confección.',
    precio:53550,
    tipo:'Insumo/Dotación',
    ciiu:'C (14,16,25) / S (95)',
    proceso:'Producción / Operación'
  }),

  producto({
    id:'P318',
    sector:'manufactura',
    icono:'🧵',
    nombre:'CUCHILLAS',
    desc:'Cuchillas de repuesto para cortadoras de tela industrial. Acero de alta velocidad. Cortes precisos en múltiples capas. Compatibles con cortadoras verticales.',
    precio:101150,
    tipo:'Insumo/Dotación',
    ciiu:'C (14,16,25) / S (95)',
    proceso:'Producción / Operación'
  }),

  producto({
    id:'P319',
    sector:'manufactura',
    icono:'🧵',
    nombre:'Plancha industrial Ancho 6 Alto 4 Largo 4 Especificaciones Tipo Planchas para ropa Tipo plancha Calor Material Acero Col',
    desc:'Cuenta con indicador de llenado No Cuenta con control de temperatura Si Cuenta con antiadherente Si Potencia 110 V Cuenta con apagado automático No',
    precio:553695,
    tipo:'Insumo/Dotación',
    ciiu:'C (14,16,25) / S (95)',
    proceso:'Producción / Operación'
  }),

  producto({
    id:'P320',
    sector:'manufactura',
    icono:'🪑',
    nombre:'Mesa de planchado con aspiración La mesa tiene las siguientes características y se completa de:',
    desc:'* forma inclinada rectangular (1250 x 700 mm.), calentada electricamente y aspirante * aspirador incorporado de 0,56Kw * predisposición para aplicar n°1 brazo para forma * chimenea',
    precio:5457154,
    tipo:'Mobiliario',
    ciiu:'C (14,16,25) / S (95)',
    proceso:'Producción / Operación'
  }),

  producto({
    id:'P321',
    sector:'manufactura',
    icono:'✂️',
    nombre:'Kit de patronaje (reglas/curvas) Kit de Patronaje - 19 Piezas',
    desc:'Este completo kit de patronaje incluye herramientas esenciales para cualquier amante de la costura o profesional del diseño. Está compuesto por:  9 reglas de alta precisión: Fabricadas en plástico duradero, con líneas claras y excelente resistencia, ideales para un uso prolongado. -2 rodajas marca prenda. -1 cinta métrica automática de modistería. -1 tijera de sastre con mango ergonómico de plásti',
    precio:162852,
    tipo:'Insumo/Dotación',
    ciiu:'C (14,16,25) / S (95)',
    proceso:'Producción / Operación'
  }),

  producto({
    id:'P322',
    sector:'manufactura',
    icono:'🪑',
    nombre:'Maniquí de costura graduable en altura',
    desc:'Maniquí de costura con altura graduable. Torso completo. Superficie almohadillada para fijar con alfileres. Para diseño y ajuste de prendas.',
    precio:651406,
    tipo:'Mobiliario',
    ciiu:'C (14,16,25) / S (95)',
    proceso:'Producción / Operación'
  }),

  producto({
    id:'P323',
    sector:'manufactura',
    icono:'🪚',
    nombre:'Sierra circular de mesa Sierra Banco | Diámetro de Disco 10" (254mm) | 1800 Watts | Velocidad 0-4300 RPM | Incluye Disco',
    desc:'Sierra circular de mesa, disco 10" (254mm), 1800W, velocidad 0-4300 RPM. Incluye disco, soporte, guía de ángulo y bastón de empuje. Ideal para cortes rectos, transversales y en ángulo en madera.',
    precio:2320303,
    tipo:'Equipo',
    ciiu:'C (14,16,25) / S (95)',
    proceso:'Producción / Operación'
  }),

  producto({
    id:'P324',
    sector:'manufactura',
    icono:'🪚',
    nombre:'Ingleteadora CARACTERISTICAS',
    desc:'Mayor rango de corte de inglete y bisel para mayor versatilidad. Capacidad de corte hasta 75mm alto x 140mm ancho a 0º x 0º. Corte transversal 48mm alto x 95mm ancho a 45º x 45º en corte compuesto. Bloqueo de interruptor del gatillo para operar con una sola mano. Tope para cortes repetitivos para cortes de una misma longitud. CARACTERISTICAS  Frecuencia: 60 Hz. Potencia: 1,650 W. Diámetro del disc',
    precio:2595565,
    tipo:'Insumo/Dotación',
    ciiu:'C (14,16,25) / S (95)',
    proceso:'Producción / Operación'
  }),

  producto({
    id:'P325',
    sector:'manufactura',
    icono:'🪚',
    nombre:'Sierra sinfín Caracteristicas',
    desc:'- Sierra de mesa inclinable sin límite para realizar cortes oblicuos  - La hoja de la sierra se puede cambiar de forma segura y sin necesidad de herramientas  - Tope paralelo para realizar cortes rectos  - Ajuste de altura para cortes de precisión y uso seguro  - Guía con rodamiento de bolas para cortes precisos  - Conexión para extracción de polvo de 36 mm de diámetro  - Empuje para un uso seguro',
    precio:8474420,
    tipo:'Equipo',
    ciiu:'C (14,16,25) / S (95)',
    proceso:'Producción / Operación'
  }),

  producto({
    id:'P326',
    sector:'manufactura',
    icono:'🪚',
    nombre:'Cepilladora/regruesadora Ancho de vendaje 265 mm',
    desc:'- Longitud del tocador 1.110 mm. - Apósito reductor de sujeción 3 mm - El tope de preparación puede girarse hasta 45° - Diámetro del eje del cepillo 75 mm - cabezal de corte grande de 3 cuchillas - Velocidad 4.000 rpm - Altura máx. de espesor 190 mm. - Ancho de entrada de espesor 265 mm. - Avance de la cepilladora de espesor 5 m/min - Espesor máx. de sujeción espesor cepilladora 2 mm - Motor 2,3 H',
    precio:7523656,
    tipo:'Insumo/Dotación',
    ciiu:'C (14,16,25) / S (95)',
    proceso:'Producción / Operación'
  }),

  producto({
    id:'P327',
    sector:'manufactura',
    icono:'🪚',
    nombre:'Router/tupí Tipo',
    desc:'Rebordeadora Tipo velocidad Fijo Uso de herramienta Profesional Alimentación Eléctrica Inalámbrico No Velocidad 32000 Potencia nominal 530 Voltaje 110',
    precio:3523248,
    tipo:'Equipo',
    ciiu:'C (14,16,25) / S (95)',
    proceso:'Producción / Operación'
  }),

  producto({
    id:'P328',
    sector:'manufactura',
    icono:'🪚',
    nombre:'Esmeril de banco Tipo Esmeriles de banco Tipo velocidad Fijo Tipo de trabajo Profesional Uso de herramienta Profesional',
    desc:'Potencia nominal 373 W Grano nº 0 Velocidad 3450 RPM Voltaje 110 V Alimentación Eléctrica Incluye (1) Disco grano grueso y (1) Disco grano medio. Potencia del motor 3450 RPM',
    precio:1293875,
    tipo:'Insumo/Dotación',
    ciiu:'C (14,16,25) / S (95)',
    proceso:'Producción / Operación'
  }),

  producto({
    id:'P329',
    sector:'manufactura',
    icono:'🪚',
    nombre:'Esmeril de banco Tipo Esmeriles de banco Tipo velocidad Fijo Tipo de trabajo Profesional Uso de herramienta Profesional',
    desc:'Potencia nominal 373 W Grano nº 0 Velocidad 3450 RPM Voltaje 110 V Alimentación Eléctrica Incluye (1) Disco grano grueso y (1) Disco grano medio. Potencia del motor 3450 RPM',
    precio:1946357,
    tipo:'Insumo/Dotación',
    ciiu:'C (14,16,25) / S (95)',
    proceso:'Producción / Operación'
  }),

  producto({
    id:'P330',
    sector:'manufactura',
    icono:'🪚',
    nombre:'Taladro de banco Peso 14 kg',
    desc:'Dimensiones 47 × 37 × 23 cm Potencia 1/3 HP / 250 W Broquero 1/2" – 13 mm Tipo de Mandril Con llave Cono de broquero B16 Velocidades (5) 760 – 3,070 rpm Mesa de Trabajo 16 cm x 16 cm Altura de trabajo 20cm Altura total 59cm',
    precio:838289,
    tipo:'Insumo/Dotación',
    ciiu:'C (14,16,25) / S (95)',
    proceso:'Producción / Operación'
  }),

  producto({
    id:'P331',
    sector:'manufactura',
    icono:'🏭',
    nombre:'Compresor de aire Tipo Compresores de aire',
    desc:'Uso de herramienta Industrial Largo del cable 1.50 Capacidad del estanque 50 Incluye * 1 Botella de aceite monogrado SAE30 • 1 Filtro de aire • 1 Tapón del depósito de aceite • 2 Ruedas • 2 Soportes frontales de hule • 1 Bolsa con tornillería Presión máxima 116 Caudal máximo 3.2 Alimentación Eléctrica Potencia 2.610 Voltaje 120 Motor Con Bobinas de aluminio Flujo de salida 90',
    precio:1011500,
    tipo:'Equipo',
    ciiu:'C (14,16,25) / S (95)',
    proceso:'Producción / Operación'
  }),

  producto({
    id:'P332',
    sector:'manufactura',
    icono:'🔧',
    nombre:'Pistola neumática para clavado Características',
    desc:'Carcasa de aluminio. Capacidad de 100 clavos. Mango ergonómico para mayor comodidad del operador. Gatillo de seguridad. Tipo clavo: Sin cabeza. Gama de clavos (largo): 15/32" a 1.3/16"(12-30 mm). Calibre clavos (espesor): 23" (0,68mm). Presión de trabajo: 75-110 PSI. Consumo nominal: 90 psi. Entrada de aire: 1/4 NPT. Diámetro interno manguera: 3/8" . Nivel de ruido: 90 dB. Ciclo de trabajo: Contin',
    precio:1174717,
    tipo:'Insumo/Dotación',
    ciiu:'C (14,16,25) / S (95)',
    proceso:'Producción / Operación'
  }),

  producto({
    id:'P333',
    sector:'manufactura',
    icono:'🔥',
    nombre:'Soldadora MIG/MAG Tipo Soldadoras Tipo de trabajo Industrial Uso de herramienta Profesional',
    desc:'Largo del cable 3 m Incluye Antorcha MIG-MAG, pinza de masa y cable de conexión Ciclo de trabajo 170A - 20% / 90A - 60% / 70A - 100% Frecuencia 50/60 Hz Amperaje 170 A Alimentación Eléctrica Voltaje 230 V Rango de corriente 10 - 170 A Proceso soldadura MIG-MAG / Flux / MMA / TIG DC-Lift Potencia nominal 3.2 kW Rango de temperatura 40°C',
    precio:5781833,
    tipo:'Equipo',
    ciiu:'C (14,16,25) / S (95)',
    proceso:'Producción / Operación'
  }),

  producto({
    id:'P334',
    sector:'manufactura',
    icono:'🔥',
    nombre:'Soldadora MIG/MAG Tipo Soldadoras Tipo de trabajo Industrial Uso de herramienta Profesional',
    desc:'Largo del cable 3 m Incluye Antorcha MIG-MAG, pinza de masa y cable de conexión Ciclo de trabajo 170A - 20% / 90A - 60% / 70A - 100% Frecuencia 50/60 Hz Amperaje 170 A Alimentación Eléctrica Voltaje 230 V Rango de corriente 10 - 170 A Proceso soldadura MIG-MAG / Flux / MMA / TIG DC-Lift Potencia nominal 3.2 kW Rango de temperatura 40°C',
    precio:10421332,
    tipo:'Insumo/Dotación',
    ciiu:'C (14,16,25) / S (95)',
    proceso:'Producción / Operación'
  }),

  producto({
    id:'P335',
    sector:'manufactura',
    icono:'🔥',
    nombre:'Soldadora MIG/MAG Tipo Soldadoras Tipo de trabajo Industrial Uso de herramienta Profesional',
    desc:'Largo del cable 3 m Incluye Antorcha MIG-MAG, pinza de masa y cable de conexión Ciclo de trabajo 170A - 20% / 90A - 60% / 70A - 100% Frecuencia 50/60 Hz Amperaje 170 A Alimentación Eléctrica Voltaje 230 V Rango de corriente 10 - 170 A Proceso soldadura MIG-MAG / Flux / MMA / TIG DC-Lift Potencia nominal 3.2 kW Rango de temperatura 40°C',
    precio:15153230,
    tipo:'Insumo/Dotación',
    ciiu:'C (14,16,25) / S (95)',
    proceso:'Producción / Operación'
  }),

  producto({
    id:'P336',
    sector:'manufactura',
    icono:'🔥',
    nombre:'Soldadora TIG Tipo Soldador inversor Tipo de trabajo Profesional Uso de herramienta Profesional',
    desc:'Amperaje 250 A Voltaje 110 V, 220 V Rango de corriente 20 - 250 A Proceso soldadura FLUXCORE , LIFT TIG , MMA ( revestida )Potencia nominal 26.4 kW',
    precio:6897737,
    tipo:'Equipo',
    ciiu:'C (14,16,25) / S (95)',
    proceso:'Producción / Operación'
  }),

  producto({
    id:'P337',
    sector:'manufactura',
    icono:'🔥',
    nombre:'Cortadora plasma Tipo Cortadora de plasma Tipo de trabajo Profesional Tipo de panel de control Digital',
    desc:'Uso de herramienta Profesional Incluye Antorcha de plasma 60A Conjunto pinza de masa Cable de alimentación Manual de usuario Kit consumibles básico Manual de uso Ciclo de trabajo 30%  frecuencia 60 HZ Amperaje 40 A Voltaje 110 V, 220 V Rango de corriente 20 - 40 A Proceso soldadura Corte por plasma Voltaje enchufable Multivoltaje 110/220 Potencia nominal 7480 W Rango de  temperatura 30',
    precio:6714013,
    tipo:'Insumo/Dotación',
    ciiu:'C (14,16,25) / S (95)',
    proceso:'Producción / Operación'
  }),

  producto({
    id:'P338',
    sector:'manufactura',
    icono:'🔧',
    nombre:'Prensa hidráulica Tipo Prensas Diámetro de apertura 65 cm Material Acero Tipo de trabajo',
    desc:'Industrial Tipo de prensa Prensa rápida Tipo de abrazadera Acero',
    precio:1428000,
    tipo:'Equipo',
    ciiu:'C (14,16,25) / S (95)',
    proceso:'Producción / Operación'
  }),

  producto({
    id:'P339',
    sector:'manufactura',
    icono:'🔧',
    nombre:'Dobladora de tubo/perfil La máquina dobladora de ángulos serie ALE-JY dobla diversos perfiles de metal, incluidos ángulo',
    desc:'Su diseño compacto ofrece ventajas como bajo consumo de energía, alta eficiencia y funcionamiento silencioso, perfecto tanto para pequeños talleres como para grandes plantas de fabricación.  Esta máquina es ampliamente utilizada en industrias que requieren doblado de metales para componentes estructurales como bridas, anillos y vigas curvas.',
    precio:2975000,
    tipo:'Equipo',
    ciiu:'C (14,16,25) / S (95)',
    proceso:'Producción / Operación'
  }),

  producto({
    id:'P340',
    sector:'manufactura',
    icono:'🔧',
    nombre:'Cizalla manual/hidráulica HZ-55 Cizalla hidráulica manual (120KN - 13.4 TON) Marca ZAAG Fuerza de corte  120KN - 13.4 TO',
    desc:'Cizalla manual/hidráulica HZ-55 (120KN). Para corte de varillas y perfiles metálicos. Acero reforzado. Para obras civiles y talleres eléctricos.',
    precio:14673628,
    tipo:'Equipo',
    ciiu:'C (14,16,25) / S (95)',
    proceso:'Producción / Operación'
  }),

  producto({
    id:'P341',
    sector:'manufactura',
    icono:'🔧',
    nombre:'Pulidora angular industrial Motor de 1250 W, montado sobre balero de bolas para mayor vida útil y mejor desempeño',
    desc:'Mango ergonómico antiderrapante de 2 posiciones, mejor control para el operador Interruptor con función de uso continuo Uso industrial, para esmerilar y cortar acero, tubos, hierro en ángulo, ladrillos, azulejos, piedra y/o piezas de cerámica Cumple la norma NOM-003-SCFI',
    precio:1169751,
    tipo:'Insumo/Dotación',
    ciiu:'C (14,16,25) / S (95)',
    proceso:'Producción / Operación'
  }),

  producto({
    id:'P342',
    sector:'manufactura',
    icono:'🔧',
    nombre:'Juego de brocas industriales 5 Brocas para madera con punta centradora para una perforación más precisa.',
    desc:'11 Brocas HSS para metal con punta tradicional (118°). 3 Brocas de manita con punta guía para perforaciones precisas y zanco hexagonal de cambio rápido. 6 Brocas para concreto con punta de carburo de tungsteno. Estuche plástico con compartimientos laterales para guardar herramienta. Incluye:  19 Puntas Estrella de 1", PHI a PH3 5 Puntas Pala de 1", 3 mm a 12 mm 9 Puntas cuadradas de 1", S1 a S3 10',
    precio:155550,
    tipo:'Insumo/Dotación',
    ciiu:'C (14,16,25) / S (95)',
    proceso:'Producción / Operación'
  }),

  producto({
    id:'P343',
    sector:'manufactura',
    icono:'🔧',
    nombre:'Juego de llaves y dados Juego de Dados, Juego de Llaves de Carraca, Juego de Llaves de Vaso de 46 Piezas de 1/4 con Jueg',
    desc:'El juego de llaves de vaso SOMOZO de 46 piezas es un conjunto completo de herramientas prácticas que se montan para ayudar a los aficionados e incluso a los profesionales en sus proyectos. Cada pieza de metal en este juego fue forjada de acero al carbono de alta calidad, endurecido y templado con un acabado pulido. Las herramientas están hechas para durar años y proporcionar siempre los mismos res',
    precio:220150,
    tipo:'Insumo/Dotación',
    ciiu:'C (14,16,25) / S (95)',
    proceso:'Producción / Operación'
  }),

  producto({
    id:'P344',
    sector:'manufactura',
    icono:'📏',
    nombre:'Calibrador pie de rey Diseñado para el trabajo exigente, este calibrador pie de rey ofrece una medición manual con un ra',
    desc:'Calibrador pie de rey en acero inoxidable. Mide diámetros y profundidades. Precisión 0.02 mm. Esencial para control de calidad en talleres metalmecánicos.',
    precio:266323,
    tipo:'Insumo/Dotación',
    ciiu:'C (14,16,25) / S (95)',
    proceso:'Producción / Operación'
  }),

  producto({
    id:'P345',
    sector:'manufactura',
    icono:'📏',
    nombre:'Micrómetro MICRÓMETRO DE EXTERIORES PROFESIONAL, CAPACIDAD 0- 1", PRECISIÓN 0.001" ASIMETO',
    desc:'Micrómetro de exteriores profesional, capacidad 0-1 pulgada, precisión 0.001 mm. Para medición precisa en metalmecánica y control de calidad.',
    precio:113050,
    tipo:'Insumo/Dotación',
    ciiu:'C (14,16,25) / S (95)',
    proceso:'Producción / Operación'
  }),

  producto({
    id:'P346',
    sector:'manufactura',
    icono:'📏',
    nombre:'Multímetro digital certificado Tipo',
    desc:'Multímetros Uso Profesional Tipo de trabajo Profesional Voltaje 0 V Amperaje 0 A Alimentación Pila Funciones Medidor de voltaje',
    precio:89250,
    tipo:'Insumo/Dotación',
    ciiu:'C (14,16,25) / S (95)',
    proceso:'Producción / Operación'
  }),

  producto({
    id:'P347',
    sector:'manufactura',
    icono:'📏',
    nombre:'Pinza amperimétrica Características Principales',
    desc:'Medición de Corriente AC: Hasta 600A con gran precisión.  True RMS: Mediciones precisas en cualquier condición de señal. NCV (Voltaje Sin Contacto): Detecta presencia de tensión en cables y paredes sin necesidad de contacto eléctrico.  Live Test: Función para identificar cables de fase (línea) de forma rápida.  Pantalla Retroiluminada: Gran tamaño y excelente visibilidad en lugares oscuros.  Prote',
    precio:516556,
    tipo:'Insumo/Dotación',
    ciiu:'C (14,16,25) / S (95)',
    proceso:'Producción / Operación'
  }),

  producto({
    id:'P348',
    sector:'manufactura',
    icono:'⚡',
    nombre:'Detector de voltaje sin contacto Dale seguridad a tus instalaciones eléctricas con el Detector de Voltaje sin Contacto B',
    desc:'Detector de voltaje sin contacto. Detecta tensión sin tocar el cable. Señal luminosa y sonora. Herramienta de seguridad para técnicos eléctricos.',
    precio:80012,
    tipo:'Insumo/Dotación',
    ciiu:'C (14,16,25) / S (95)',
    proceso:'Producción / Operación'
  }),

  producto({
    id:'P349',
    sector:'manufactura',
    icono:'⚡',
    nombre:'Probador de tomas (tester) Ancho',
    desc:'4.1 cm Alto 1.9 cm Largo 7.5 cm Especificaciones  Tipo Tester Potencia máxima 0 W Alimentación Otra',
    precio:221603,
    tipo:'Insumo/Dotación',
    ciiu:'C (14,16,25) / S (95)',
    proceso:'Producción / Operación'
  }),

  producto({
    id:'P350',
    sector:'manufactura',
    icono:'🔧',
    nombre:'Juego de destornilladores aislados Destornilladores diseñados para trabajos eléctricos seguros, fabricados en acero crom',
    desc:'Cada destornillador está aislado para 1000V Mangos ergonómicos para mayor comodidad y agarre. Incluye destornilladores de pala y Phillips en diferentes tamaños. Ideal para reparación y mantenimiento de equipos eléctricos. Cumple con las normas de seguridad y calidad internacionales. Práctico estuche para almacenamiento y transporte fácil.',
    precio:260206,
    tipo:'Insumo/Dotación',
    ciiu:'C (14,16,25) / S (95)',
    proceso:'Producción / Operación'
  }),

  producto({
    id:'P351',
    sector:'manufactura',
    icono:'🔧',
    nombre:'Pelacables profesional Pela Cables Automática 8" Truper',
    desc:'Permite quitar el aislamiento del cable de forma automática Capacidad de: 10 a 22 AWG Incluye cuchillas para corte de cables Tope para medir la longitud del cable a pelar 10 Mordazas para crimpar Medida: 8"',
    precio:58370,
    tipo:'Insumo/Dotación',
    ciiu:'C (14,16,25) / S (95)',
    proceso:'Producción / Operación'
  }),

  producto({
    id:'P352',
    sector:'manufactura',
    icono:'🔧',
    nombre:'Pelacables profesional Pela Cables Automática 8" Truper',
    desc:'Permite quitar el aislamiento del cable de forma automática Capacidad de: 10 a 22 AWG Incluye cuchillas para corte de cables Tope para medir la longitud del cable a pelar 10 Mordazas para crimpar Medida: 8"',
    precio:234772,
    tipo:'Insumo/Dotación',
    ciiu:'C (14,16,25) / S (95)',
    proceso:'Producción / Operación'
  }),

  producto({
    id:'P353',
    sector:'manufactura',
    icono:'🔧',
    nombre:'Crimpadora terminales Dimensiones',
    desc:'Ancho 11.5 cm Alto 26.5 cm Largo 5.5 cm Especificaciones  Tipo Crimpeadora Tipo de alicate Pelacables Tipo de trabajo Profesional Material del mango Plástico',
    precio:97734,
    tipo:'Insumo/Dotación',
    ciiu:'C (14,16,25) / S (95)',
    proceso:'Producción / Operación'
  }),

  producto({
    id:'P354',
    sector:'manufactura',
    icono:'🔧',
    nombre:'Juego de alicates (punta/corte) Tipo',
    desc:'Set de alicates Incluye 1x Alicate de punta plana 165 mm, 1x Alicate Universal 165 mm, 1x Alicate Universal 190 mm Número de piezas 3 Formato del producto Caja País de Origen China',
    precio:160193,
    tipo:'Insumo/Dotación',
    ciiu:'C (14,16,25) / S (95)',
    proceso:'Producción / Operación'
  }),

  producto({
    id:'P355',
    sector:'manufactura',
    icono:'🔧',
    nombre:'Pistola de calor Dimensiones',
    desc:'Peso 0.8 kg Especificaciones  Tipo Pistolas de calor Uso de herramienta Profesional Cuenta con bloqueo de seguridad No Cuenta con control de temperatura Si Inalámbrico No Potencia nominal 1500 W Alimentación Eléctrica Rango de temperatura 90 a 600 grados cent. Voltaje 110 Incluye Pistola de calor, Boquillas, Mango de herramientas de pastoreo, Herramientas de pastoreo.',
    precio:876603,
    tipo:'Insumo/Dotación',
    ciiu:'C (14,16,25) / S (95)',
    proceso:'Producción / Operación'
  }),

  producto({
    id:'P356',
    sector:'manufactura',
    icono:'🔌',
    nombre:'Estación de soldadura electrónica Pantalla LCD de 3 dígitos.',
    desc:'Construcción antiestática del cuerpo de la estación, cautín y pistola de aire. Control exacto de temperatura (±1 °C) Calentamiento rápido (3-5 seg.)  Voltaje 220 V /  50 Hz Consumo de energía 700 Wt Diapasón de temperaturas 100 °C ~ 450 °C Flujo de aire 120 L/min (max.) Estabilidad de temperatura ±1 °C Peso 2,0 kg',
    precio:452200,
    tipo:'Equipo',
    ciiu:'C (14,16,25) / S (95)',
    proceso:'Producción / Operación'
  }),

  producto({
    id:'P357',
    sector:'manufactura',
    icono:'🌬️',
    nombre:'Extractor de humos de soldadura',
    desc:'Extractor de humos para soldadura con filtros de alta eficiencia. Elimina gases nocivos. Protege la salud del operario. Para talleres de soldadura.',
    precio:535500,
    tipo:'Equipo',
    ciiu:'C (14,16,25) / S (95)',
    proceso:'Producción / Operación'
  }),

  producto({
    id:'P358',
    sector:'manufactura',
    icono:'🧹',
    nombre:'Aspiradora industrial Especificaciones',
    desc:'Tipo Barril Ancho 30 cm Alto 53 cm Largo 30 cm Peso 5 kg Tipo de aspiradora Barril Tipo de filtro Polvo, Agua Uso de herramienta Industrial Material Acero inoxidable Largo del cable 6 m Largo de la manguera 2.4 m Color Plateado Incluye 1 Manguera de diámetro 1 1/4" (32 mm). 1.9 m (6.2 ft) con seguro de ajuste, 1 Boquilla tipo garra, 1 Boquilla para ranuras, 1 Boquilla 2 en 1 para piso y alfombra,',
    precio:1823918,
    tipo:'Insumo/Dotación',
    ciiu:'C (14,16,25) / S (95)',
    proceso:'Producción / Operación'
  }),

  producto({
    id:'P359',
    sector:'manufactura',
    icono:'🪑',
    nombre:'Banco de trabajo industrial - Banco de trabajo estándar móvil - 2000 x 700 x 840 mm L x A x A WS885N-2000M40-X7000',
    desc:'Banco de trabajo industrial estándar móvil (2000 x 700 mm). Superficie resistente. Ruedas con freno. Ideal para talleres de metalmecánica, carpintería y servicios técnicos.',
    precio:809200,
    tipo:'Insumo/Dotación',
    ciiu:'C (14,16,25) / S (95)',
    proceso:'Producción / Operación'
  }),

  producto({
    id:'P360',
    sector:'manufactura',
    icono:'🔩',
    nombre:'Tornillo de banco Esta prensa cuenta con una garantía de 10 años, lo que te da la tranquilidad de saber que es una herra',
    desc:'Tornillo de banco industrial con garantía de 10 años. Mandíbulas en acero endurecido. Fija piezas con firmeza. Para tornería y metalmecánica.',
    precio:148750,
    tipo:'Insumo/Dotación',
    ciiu:'C (14,16,25) / S (95)',
    proceso:'Producción / Operación'
  }),

  producto({
    id:'P361',
    sector:'manufactura',
    icono:'🗄️',
    nombre:'Estantería metálica industrial torre 240 x 120 cm',
    desc:'Estantería metálica industrial 240 x 120 cm. Estructura en acero anticorrosivo. Capacidad por nivel hasta 200 kg. Para bodegas, tiendas y talleres.',
    precio:380800,
    tipo:'Mobiliario',
    ciiu:'C (14,16,25) / S (95)',
    proceso:'Producción / Operación'
  }),

  producto({
    id:'P362',
    sector:'manufactura',
    icono:'💡',
    nombre:'Lámpara de trabajo LED Esta luz de trabajo COB está hecha de material de alta calidad.',
    desc:'Adopta cuentas de luz muy brillantes con brillo constante. Fácil de llevar y de usar. Una gran elección para ti.  Gran Luz De Inundación De Alto Brillo. Carga De Emergencia Del Teléfono Pantalla De Potencia De Carga Interfaz De Carga Micro Usb Baterías 3xaa Marca: Ecoled Modelo: Lámpara De Trabajo Multifuncional  Tipo De Luz: Luz Led Dimensiones: 15cm * 20cm Aprox.',
    precio:115554,
    tipo:'Equipo',
    ciiu:'C (14,16,25) / S (95)',
    proceso:'Producción / Operación'
  }),

  producto({
    id:'P363',
    sector:'manufactura',
    icono:'🦺',
    nombre:'Equipo de protección personal industrial (careta/guantes)',
    desc:'EPP industrial: careta facial y guantes resistentes. Protege de chispas y proyecciones. Cumple normas de seguridad industrial.',
    precio:101150,
    tipo:'Insumo/Dotación',
    ciiu:'C (14,16,25) / S (95)',
    proceso:'Producción / Operación'
  }),

  producto({
    id:'P364',
    sector:'manufactura',
    icono:'🧯',
    nombre:'Extintor multipropósito (taller) abc- 20 libras rdl',
    desc:'Extintor multipropósito ABC 20 libras. Apaga fuegos tipo A, B y C. Certificado con manómetro. Obligatorio en talleres, cocinas y bodegas.',
    precio:113050,
    tipo:'Insumo/Dotación',
    ciiu:'C (14,16,25) / S (95)',
    proceso:'Producción / Operación'
  }),

  producto({
    id:'P365',
    sector:'manufactura',
    icono:'🩹',
    nombre:'Botiquín industrial (taller) Estuche plástico mini cuadrado, medidas 21,5 cm x 11.5 cm x 6 cm compuesto por 13 elementos',
    desc:'Botiquín de primeros auxilios industrial. Incluye vendas, antisépticos, curitas y guantes. Cumple normas de seguridad industrial. Estuche plástico compacto.',
    precio:77350,
    tipo:'Insumo/Dotación',
    ciiu:'C (14,16,25) / S (95)',
    proceso:'Producción / Operación'
  }),

  producto({
    id:'CAT2-001',
    sector:'manufactura',
    icono:'🧵',
    nombre:'agujas en precentacion campana , groz beckert, schmetz,singer',
    desc:'Agujas industriales para máquinas de coser (Groz-Beckert, Schmetz, Singer). Presentación en campana. Compatibles con máquinas planas, overlock y recubridoras. Punta precisa para costura limpia.',
    precio:8074,
    tipo:'Equipo',
    ciiu:'C (14,16,25) / S (95)',
    proceso:'Producción / Operación'
  }),

  producto({
    id:'CAT2-002',
    sector:'manufactura',
    icono:'🧵',
    nombre:'rematadores en toda su precentacion',
    desc:'Producto de uso industrial o comercial. Consulte con su asesor para más especificaciones técnicas y disponibilidad.',
    precio:2326,
    tipo:'Equipo',
    ciiu:'C (14,16,25) / S (95)',
    proceso:'Producción / Operación'
  }),

  producto({
    id:'CAT2-003',
    sector:'manufactura',
    icono:'🧵',
    nombre:'carreteles',
    desc:'Carreteles para máquinas de coser industriales. Almacenan el hilo inferior. Compatibles con máquinas planas y overlock. Resistentes al calor.',
    precio:821,
    tipo:'Equipo',
    ciiu:'C (14,16,25) / S (95)',
    proceso:'Producción / Operación'
  }),

  producto({
    id:'CAT2-004',
    sector:'manufactura',
    icono:'🧵',
    nombre:'abreojales en 3 precentaciones',
    desc:'Herramienta para abrir ojales en telas y cuero. Disponible en 3 tamaños. Ideal para confección de ropa, marroquinería y calzado. Fácil de usar y de larga duración.',
    precio:1232,
    tipo:'Equipo',
    ciiu:'C (14,16,25) / S (95)',
    proceso:'Producción / Operación'
  }),

  producto({
    id:'CAT2-005',
    sector:'manufactura',
    icono:'🧵',
    nombre:'metro en 3 precentaciones',
    desc:'Metro o cinta métrica para costura en 3 presentaciones. Cinta flexible. Graduada en centímetros y pulgadas. Para patronaje y corte de telas.',
    precio:2395,
    tipo:'Equipo',
    ciiu:'C (14,16,25) / S (95)',
    proceso:'Producción / Operación'
  }),

  producto({
    id:'CAT2-006',
    sector:'manufactura',
    icono:'🧵',
    nombre:'ijeras en 5 tamaños',
    desc:'Tijeras de costura en 5 tamaños. Acero inoxidable, filo duradero. Corte preciso en telas. Mangos ergonómicos para largas jornadas de confección.',
    precio:6979,
    tipo:'Equipo',
    ciiu:'C (14,16,25) / S (95)',
    proceso:'Producción / Operación'
  }),

  producto({
    id:'CAT2-007',
    sector:'manufactura',
    icono:'⚙️',
    nombre:'pinzas de enhebrar',
    desc:'Pinzas enhebradoras para pasar el hilo fácilmente por la aguja. Ahorran tiempo y esfuerzo. Para máquinas industriales y domésticas.',
    precio:4599,
    tipo:'Equipo',
    ciiu:'C (14,16,25) / S (95)',
    proceso:'Producción / Operación'
  }),

  producto({
    id:'CAT2-008',
    sector:'manufactura',
    icono:'🧵',
    nombre:'alfileres rodaja y caja',
    desc:'Alfileres de costura en presentación de rodaja y caja. Punta fina que no daña las telas. Esenciales para fijar y ajustar piezas antes de coser.',
    precio:1736,
    tipo:'Equipo',
    ciiu:'C (14,16,25) / S (95)',
    proceso:'Producción / Operación'
  }),

  producto({
    id:'CAT2-009',
    sector:'manufactura',
    icono:'🧵',
    nombre:'guias de iman',
    desc:'Guías magnéticas para máquinas de coser. Adhieren a la placa para guiar la tela a distancia constante. Garantizan costuras rectas.',
    precio:3515,
    tipo:'Equipo',
    ciiu:'C (14,16,25) / S (95)',
    proceso:'Producción / Operación'
  }),

  producto({
    id:'CAT2-010',
    sector:'manufactura',
    icono:'🧵',
    nombre:'lamparas',
    desc:'Lámparas para máquinas de coser industriales. Iluminan el área de costura. LED de bajo consumo y larga vida útil.',
    precio:12727,
    tipo:'Equipo',
    ciiu:'C (14,16,25) / S (95)',
    proceso:'Producción / Operación'
  }),

  producto({
    id:'CAT2-011',
    sector:'manufactura',
    icono:'🧵',
    nombre:'ganchos para cualquier tipo de maquina',
    desc:'Ganchos accesorios para máquinas de coser industriales. Facilitan el guiado y tensión del hilo. Mejoran la calidad de la costura.',
    precio:28957,
    tipo:'Equipo',
    ciiu:'C (14,16,25) / S (95)',
    proceso:'Producción / Operación'
  }),

  producto({
    id:'CAT2-012',
    sector:'manufactura',
    icono:'🧵',
    nombre:'tizas',
    desc:'Tizas de sastre para marcado en telas. Trazo limpio. Fácilmente removible al lavado. Para confección y sastrería.',
    precio:958,
    tipo:'Equipo',
    ciiu:'C (14,16,25) / S (95)',
    proceso:'Producción / Operación'
  }),

  producto({
    id:'CAT2-013',
    sector:'manufactura',
    icono:'🧵',
    nombre:'caja porta carretel',
    desc:'Organizador tipo caja para almacenar carretes e hilos de costura. Mantiene el hilo limpio y ordenado. Fácil acceso durante la confección.',
    precio:6912,
    tipo:'Equipo',
    ciiu:'C (14,16,25) / S (95)',
    proceso:'Producción / Operación'
  }),

  producto({
    id:'CAT2-014',
    sector:'manufactura',
    icono:'🧵',
    nombre:'Máquina plana industrial (confección) Función: Costura recta gama genérica',
    desc:'Garantía: 06 meses por kit electrónico y 06 meses por descalibraciones mecánicas Tipo de aguja: Cubo delgado DBX1 o Cubo grueso 135X5 Sistema paso a paso Velocidad: Variable desde 500 hasta 4000 rpm Longitud de puntada (cubo delgado a 5 mm o cubo grueso 7 mm) Posicionador de aguja Luz led integrada Motor direct drive incorporado de 550w Devanador incorporado Mueble importado',
    precio:1725678,
    tipo:'Equipo',
    ciiu:'C (14,16,25) / S (95)',
    proceso:'Producción / Operación'
  }),

  producto({
    id:'CAT2-015',
    sector:'manufactura',
    icono:'🧵',
    nombre:'Overlock industrial Overlock con costura overlock de seis hilos para telas ligeras y medianas Fácil cambio para diferent',
    desc:'Sistema de lubricación automática Mejorado - mecanismo de barra de aguja cerrado Tensión óptima del hilo Diseño unico Servomotor integrado en la cabeza, control de velocidad continuo El ahorro de energía Ruido bajo Alto rendimiento',
    precio:2121175,
    tipo:'Insumo/Dotación',
    ciiu:'C (14,16,25) / S (95)',
    proceso:'Producción / Operación'
  }),

  producto({
    id:'CAT2-016',
    sector:'manufactura',
    icono:'🧵',
    nombre:'Recubridora industrial TIPO Recubridora - Collarín USO Industrial MOTOR Mecatrónica',
    desc:'MARCA Willcox MODELO W500D PUNTADA Collarin Recubierto  AGUJAS 3 HILOS 5 VOLTAJE 110V POTENCIA 550W',
    precio:2737000,
    tipo:'Insumo/Dotación',
    ciiu:'C (14,16,25) / S (95)',
    proceso:'Producción / Operación'
  }),

  producto({
    id:'CAT2-017',
    sector:'manufactura',
    icono:'🧵',
    nombre:'Fileteadora industrial Fabricante Jinthex',
    desc:'Producción Metal Tipo de puntada cadena Tipo de material ligero, medio, pesado Longitud de la puntada, mm 3.6 Rango de avance diferencial 0,7-2 Plataforma bloque Agujas aplicables B-27 (DCx27) Número de hilos cinco Tipo de grasa automático Altura de elevación del prensatelas, mm6 Automatización no Velocidad máxima de costura 6000 Características del motor motor doméstico Distancia entre agujas 3',
    precio:1956955,
    tipo:'Insumo/Dotación',
    ciiu:'C (14,16,25) / S (95)',
    proceso:'Producción / Operación'
  }),

  producto({
    id:'CAT2-018',
    sector:'manufactura',
    icono:'🪑',
    nombre:'Mesa de corte textil 120 x 180 cm Nuestra Mesa de Corte para Tela – Diseño Americano está fabricada para trabajos exigen',
    desc:'La mesa tiene una altura fija de 90 cm, ideal para mantener una postura ergonómica durante el corte, evitando dolores de espalda y fatiga en jornadas largas de trabajo.  Disponible en múltiples medidas, es un producto modular y adaptable a distintos espacios de trabajo. Puedes elegir la variante que mejor se acomode a tu taller desde el menú.',
    precio:1150908,
    tipo:'Mobiliario',
    ciiu:'C (14,16,25) / S (95)',
    proceso:'Producción / Operación'
  }),

  producto({
    id:'CAT2-019',
    sector:'manufactura',
    icono:'🧵',
    nombre:'Cortadora vertical de tela Motores',
    desc:'110V, 1ph, 50 / 60Hz 220V, 1ph o 3ph, 50 / 60Hz Estándar: velocidad única Opcional: velocidad dual, velocidad variable Caballo de fuerza 2hp, 1ph a 4,000 RPM 2hp, 3ph a 4,000 RPM Peso 41 libras (18.5kg) Cuchillas Estándar: acero al carbono Opcional: acero de alta velocidad, recubierto de PTFE, borde ondulado, ranura ondulada, punta en ángulo Cinturones Estándar: grano medio Opcional: fino, grueso,',
    precio:2100893,
    tipo:'Insumo/Dotación',
    ciiu:'C (14,16,25) / S (95)',
    proceso:'Producción / Operación'
  }),

  producto({
    id:'CAT2-020',
    sector:'manufactura',
    icono:'🧵',
    nombre:'AFILADORES PARA CORTADORA',
    desc:'Afiladores para mantener el filo de cuchillas de cortadoras de tela. Garantizan cortes precisos y prolongan la vida útil. Indispensable para talleres de confección.',
    precio:53550,
    tipo:'Insumo/Dotación',
    ciiu:'C (14,16,25) / S (95)',
    proceso:'Producción / Operación'
  }),

  producto({
    id:'CAT2-021',
    sector:'manufactura',
    icono:'🧵',
    nombre:'CUCHILLAS',
    desc:'Cuchillas de repuesto para cortadoras de tela industrial. Acero de alta velocidad. Cortes precisos en múltiples capas. Compatibles con cortadoras verticales.',
    precio:101150,
    tipo:'Insumo/Dotación',
    ciiu:'C (14,16,25) / S (95)',
    proceso:'Producción / Operación'
  }),

  producto({
    id:'CAT2-022',
    sector:'manufactura',
    icono:'🧵',
    nombre:'Plancha industrial Ancho 6 Alto 4 Largo 4 Especificaciones Tipo Planchas para ropa Tipo plancha Calor Material Acero Col',
    desc:'Cuenta con indicador de llenado No Cuenta con control de temperatura Si Cuenta con antiadherente Si Potencia 110 V Cuenta con apagado automático No',
    precio:465290,
    tipo:'Insumo/Dotación',
    ciiu:'C (14,16,25) / S (95)',
    proceso:'Producción / Operación'
  }),

  producto({
    id:'CAT2-023',
    sector:'manufactura',
    icono:'🪑',
    nombre:'Mesa de planchado con aspiración La mesa tiene las siguientes características y se completa de:',
    desc:'* forma inclinada rectangular (1250 x 700 mm.), calentada electricamente y aspirante * aspirador incorporado de 0,56Kw * predisposición para aplicar n°1 brazo para forma * chimenea',
    precio:4585844,
    tipo:'Mobiliario',
    ciiu:'C (14,16,25) / S (95)',
    proceso:'Producción / Operación'
  }),

  producto({
    id:'CAT2-024',
    sector:'manufactura',
    icono:'✂️',
    nombre:'Kit de patronaje (reglas/curvas) Kit de Patronaje - 19 Piezas',
    desc:'Este completo kit de patronaje incluye herramientas esenciales para cualquier amante de la costura o profesional del diseño. Está compuesto por:  9 reglas de alta precisión: Fabricadas en plástico duradero, con líneas claras y excelente resistencia, ideales para un uso prolongado. -2 rodajas marca prenda. -1 cinta métrica automática de modistería. -1 tijera de sastre con mango ergonómico de plásti',
    precio:136850,
    tipo:'Insumo/Dotación',
    ciiu:'C (14,16,25) / S (95)',
    proceso:'Producción / Operación'
  }),

  producto({
    id:'CAT2-025',
    sector:'manufactura',
    icono:'🪑',
    nombre:'Maniquí de costura graduable en altura',
    desc:'Maniquí de costura con altura graduable. Torso completo. Superficie almohadillada para fijar con alfileres. Para diseño y ajuste de prendas.',
    precio:547400,
    tipo:'Mobiliario',
    ciiu:'C (14,16,25) / S (95)',
    proceso:'Producción / Operación'
  }),

  producto({
    id:'CAT2-026',
    sector:'manufactura',
    icono:'🪚',
    nombre:'Sierra circular de mesa Sierra Banco | Diámetro de Disco 10" (254mm) | 1800 Watts | Velocidad 0-4300 RPM | Incluye Disco',
    desc:'Sierra circular de mesa, disco 10" (254mm), 1800W, velocidad 0-4300 RPM. Incluye disco, soporte, guía de ángulo y bastón de empuje. Ideal para cortes rectos, transversales y en ángulo en madera.',
    precio:1949834,
    tipo:'Equipo',
    ciiu:'C (14,16,25) / S (95)',
    proceso:'Producción / Operación'
  }),

  producto({
    id:'CAT2-027',
    sector:'manufactura',
    icono:'🪚',
    nombre:'Ingleteadora CARACTERISTICAS',
    desc:'Mayor rango de corte de inglete y bisel para mayor versatilidad. Capacidad de corte hasta 75mm alto x 140mm ancho a 0º x 0º. Corte transversal 48mm alto x 95mm ancho a 45º x 45º en corte compuesto. Bloqueo de interruptor del gatillo para operar con una sola mano. Tope para cortes repetitivos para cortes de una misma longitud. CARACTERISTICAS  Frecuencia: 60 Hz. Potencia: 1,650 W. Diámetro del disc',
    precio:2181147,
    tipo:'Insumo/Dotación',
    ciiu:'C (14,16,25) / S (95)',
    proceso:'Producción / Operación'
  }),

  producto({
    id:'CAT2-028',
    sector:'manufactura',
    icono:'🪚',
    nombre:'Sierra sinfín Caracteristicas',
    desc:'- Sierra de mesa inclinable sin límite para realizar cortes oblicuos  - La hoja de la sierra se puede cambiar de forma segura y sin necesidad de herramientas  - Tope paralelo para realizar cortes rectos  - Ajuste de altura para cortes de precisión y uso seguro  - Guía con rodamiento de bolas para cortes precisos  - Conexión para extracción de polvo de 36 mm de diámetro  - Empuje para un uso seguro',
    precio:7121361,
    tipo:'Equipo',
    ciiu:'C (14,16,25) / S (95)',
    proceso:'Producción / Operación'
  }),

  producto({
    id:'CAT2-029',
    sector:'manufactura',
    icono:'🪚',
    nombre:'Cepilladora/regruesadora Ancho de vendaje 265 mm',
    desc:'- Longitud del tocador 1.110 mm. - Apósito reductor de sujeción 3 mm - El tope de preparación puede girarse hasta 45° - Diámetro del eje del cepillo 75 mm - cabezal de corte grande de 3 cuchillas - Velocidad 4.000 rpm - Altura máx. de espesor 190 mm. - Ancho de entrada de espesor 265 mm. - Avance de la cepilladora de espesor 5 m/min - Espesor máx. de sujeción espesor cepilladora 2 mm - Motor 2,3 H',
    precio:6322400,
    tipo:'Insumo/Dotación',
    ciiu:'C (14,16,25) / S (95)',
    proceso:'Producción / Operación'
  }),

  producto({
    id:'CAT2-030',
    sector:'manufactura',
    icono:'🪚',
    nombre:'Router/tupí Tipo',
    desc:'Rebordeadora Tipo velocidad Fijo Uso de herramienta Profesional Alimentación Eléctrica Inalámbrico No Velocidad 32000 Potencia nominal 530 Voltaje 110',
    precio:2960713,
    tipo:'Equipo',
    ciiu:'C (14,16,25) / S (95)',
    proceso:'Producción / Operación'
  }),

  producto({
    id:'CAT2-031',
    sector:'manufactura',
    icono:'🪚',
    nombre:'Esmeril de banco Tipo Esmeriles de banco Tipo velocidad Fijo Tipo de trabajo Profesional Uso de herramienta Profesional',
    desc:'Potencia nominal 373 W Grano nº 0 Velocidad 3450 RPM Voltaje 110 V Alimentación Eléctrica Incluye (1) Disco grano grueso y (1) Disco grano medio. Potencia del motor 3450 RPM',
    precio:1087290,
    tipo:'Insumo/Dotación',
    ciiu:'C (14,16,25) / S (95)',
    proceso:'Producción / Operación'
  }),

  producto({
    id:'CAT2-032',
    sector:'manufactura',
    icono:'🪚',
    nombre:'Esmeril de banco Tipo Esmeriles de banco Tipo velocidad Fijo Tipo de trabajo Profesional Uso de herramienta Profesional',
    desc:'Potencia nominal 373 W Grano nº 0 Velocidad 3450 RPM Voltaje 110 V Alimentación Eléctrica Incluye (1) Disco grano grueso y (1) Disco grano medio. Potencia del motor 3450 RPM',
    precio:1635594,
    tipo:'Insumo/Dotación',
    ciiu:'C (14,16,25) / S (95)',
    proceso:'Producción / Operación'
  }),

  producto({
    id:'CAT2-033',
    sector:'manufactura',
    icono:'🪚',
    nombre:'Taladro de banco Peso 14 kg',
    desc:'Dimensiones 47 × 37 × 23 cm Potencia 1/3 HP / 250 W Broquero 1/2" – 13 mm Tipo de Mandril Con llave Cono de broquero B16 Velocidades (5) 760 – 3,070 rpm Mesa de Trabajo 16 cm x 16 cm Altura de trabajo 20cm Altura total 59cm',
    precio:704444,
    tipo:'Insumo/Dotación',
    ciiu:'C (14,16,25) / S (95)',
    proceso:'Producción / Operación'
  }),

  producto({
    id:'CAT2-034',
    sector:'manufactura',
    icono:'🏭',
    nombre:'Compresor de aire Tipo Compresores de aire',
    desc:'Uso de herramienta Industrial Largo del cable 1.50 Capacidad del estanque 50 Incluye * 1 Botella de aceite monogrado SAE30 • 1 Filtro de aire • 1 Tapón del depósito de aceite • 2 Ruedas • 2 Soportes frontales de hule • 1 Bolsa con tornillería Presión máxima 116 Caudal máximo 3.2 Alimentación Eléctrica Potencia 2.610 Voltaje 120 Motor Con Bobinas de aluminio Flujo de salida 90',
    precio:1011500,
    tipo:'Equipo',
    ciiu:'C (14,16,25) / S (95)',
    proceso:'Producción / Operación'
  }),

  producto({
    id:'CAT2-035',
    sector:'manufactura',
    icono:'🔧',
    nombre:'Pistola neumática para clavado Características',
    desc:'Carcasa de aluminio. Capacidad de 100 clavos. Mango ergonómico para mayor comodidad del operador. Gatillo de seguridad. Tipo clavo: Sin cabeza. Gama de clavos (largo): 15/32" a 1.3/16"(12-30 mm). Calibre clavos (espesor): 23" (0,68mm). Presión de trabajo: 75-110 PSI. Consumo nominal: 90 psi. Entrada de aire: 1/4 NPT. Diámetro interno manguera: 3/8" . Nivel de ruido: 90 dB. Ciclo de trabajo: Contin',
    precio:987157,
    tipo:'Insumo/Dotación',
    ciiu:'C (14,16,25) / S (95)',
    proceso:'Producción / Operación'
  }),

  producto({
    id:'CAT2-036',
    sector:'manufactura',
    icono:'🔥',
    nombre:'Soldadora MIG/MAG Tipo Soldadoras Tipo de trabajo Industrial Uso de herramienta Profesional',
    desc:'Largo del cable 3 m Incluye Antorcha MIG-MAG, pinza de masa y cable de conexión Ciclo de trabajo 170A - 20% / 90A - 60% / 70A - 100% Frecuencia 50/60 Hz Amperaje 170 A Alimentación Eléctrica Voltaje 230 V Rango de corriente 10 - 170 A Proceso soldadura MIG-MAG / Flux / MMA / TIG DC-Lift Potencia nominal 3.2 kW Rango de temperatura 40°C',
    precio:4858683,
    tipo:'Equipo',
    ciiu:'C (14,16,25) / S (95)',
    proceso:'Producción / Operación'
  }),

  producto({
    id:'CAT2-037',
    sector:'manufactura',
    icono:'🔥',
    nombre:'Soldadora MIG/MAG Tipo Soldadoras Tipo de trabajo Industrial Uso de herramienta Profesional',
    desc:'Largo del cable 3 m Incluye Antorcha MIG-MAG, pinza de masa y cable de conexión Ciclo de trabajo 170A - 20% / 90A - 60% / 70A - 100% Frecuencia 50/60 Hz Amperaje 170 A Alimentación Eléctrica Voltaje 230 V Rango de corriente 10 - 170 A Proceso soldadura MIG-MAG / Flux / MMA / TIG DC-Lift Potencia nominal 3.2 kW Rango de temperatura 40°C',
    precio:8757422,
    tipo:'Insumo/Dotación',
    ciiu:'C (14,16,25) / S (95)',
    proceso:'Producción / Operación'
  }),

  producto({
    id:'CAT2-038',
    sector:'manufactura',
    icono:'🔥',
    nombre:'Soldadora MIG/MAG Tipo Soldadoras Tipo de trabajo Industrial Uso de herramienta Profesional',
    desc:'Largo del cable 3 m Incluye Antorcha MIG-MAG, pinza de masa y cable de conexión Ciclo de trabajo 170A - 20% / 90A - 60% / 70A - 100% Frecuencia 50/60 Hz Amperaje 170 A Alimentación Eléctrica Voltaje 230 V Rango de corriente 10 - 170 A Proceso soldadura MIG-MAG / Flux / MMA / TIG DC-Lift Potencia nominal 3.2 kW Rango de temperatura 40°C',
    precio:12733807,
    tipo:'Insumo/Dotación',
    ciiu:'C (14,16,25) / S (95)',
    proceso:'Producción / Operación'
  }),

  producto({
    id:'CAT2-039',
    sector:'manufactura',
    icono:'🔥',
    nombre:'Soldadora TIG Tipo Soldador inversor Tipo de trabajo Profesional Uso de herramienta Profesional',
    desc:'Amperaje 250 A Voltaje 110 V, 220 V Rango de corriente 20 - 250 A Proceso soldadura FLUXCORE , LIFT TIG , MMA ( revestida )Potencia nominal 26.4 kW',
    precio:5796417,
    tipo:'Equipo',
    ciiu:'C (14,16,25) / S (95)',
    proceso:'Producción / Operación'
  }),

  producto({
    id:'CAT2-040',
    sector:'manufactura',
    icono:'🔥',
    nombre:'Cortadora plasma Tipo Cortadora de plasma Tipo de trabajo Profesional Tipo de panel de control Digital',
    desc:'Uso de herramienta Profesional Incluye Antorcha de plasma 60A Conjunto pinza de masa Cable de alimentación Manual de usuario Kit consumibles básico Manual de uso Ciclo de trabajo 30%  frecuencia 60 HZ Amperaje 40 A Voltaje 110 V, 220 V Rango de corriente 20 - 40 A Proceso soldadura Corte por plasma Voltaje enchufable Multivoltaje 110/220 Potencia nominal 7480 W Rango de  temperatura 30',
    precio:5642028,
    tipo:'Insumo/Dotación',
    ciiu:'C (14,16,25) / S (95)',
    proceso:'Producción / Operación'
  }),

  producto({
    id:'CAT2-041',
    sector:'manufactura',
    icono:'🔧',
    nombre:'Prensa hidráulica Tipo Prensas Diámetro de apertura 65 cm Material Acero Tipo de trabajo',
    desc:'Industrial Tipo de prensa Prensa rápida Tipo de abrazadera Acero',
    precio:1428000,
    tipo:'Equipo',
    ciiu:'C (14,16,25) / S (95)',
    proceso:'Producción / Operación'
  }),

  producto({
    id:'CAT2-042',
    sector:'manufactura',
    icono:'🔧',
    nombre:'Dobladora de tubo/perfil La máquina dobladora de ángulos serie ALE-JY dobla diversos perfiles de metal, incluidos ángulo',
    desc:'Su diseño compacto ofrece ventajas como bajo consumo de energía, alta eficiencia y funcionamiento silencioso, perfecto tanto para pequeños talleres como para grandes plantas de fabricación.  Esta máquina es ampliamente utilizada en industrias que requieren doblado de metales para componentes estructurales como bridas, anillos y vigas curvas.',
    precio:2975000,
    tipo:'Equipo',
    ciiu:'C (14,16,25) / S (95)',
    proceso:'Producción / Operación'
  }),

  producto({
    id:'CAT2-043',
    sector:'manufactura',
    icono:'🔧',
    nombre:'Cizalla manual/hidráulica HZ-55 Cizalla hidráulica manual (120KN - 13.4 TON) Marca ZAAG Fuerza de corte  120KN - 13.4 TO',
    desc:'Cizalla manual/hidráulica HZ-55 (120KN). Para corte de varillas y perfiles metálicos. Acero reforzado. Para obras civiles y talleres eléctricos.',
    precio:12330780,
    tipo:'Equipo',
    ciiu:'C (14,16,25) / S (95)',
    proceso:'Producción / Operación'
  }),

  producto({
    id:'CAT2-044',
    sector:'manufactura',
    icono:'🔧',
    nombre:'Pulidora angular industrial Motor de 1250 W, montado sobre balero de bolas para mayor vida útil y mejor desempeño',
    desc:'Mango ergonómico antiderrapante de 2 posiciones, mejor control para el operador Interruptor con función de uso continuo Uso industrial, para esmerilar y cortar acero, tubos, hierro en ángulo, ladrillos, azulejos, piedra y/o piezas de cerámica Cumple la norma NOM-003-SCFI',
    precio:982984,
    tipo:'Insumo/Dotación',
    ciiu:'C (14,16,25) / S (95)',
    proceso:'Producción / Operación'
  }),

  producto({
    id:'CAT2-045',
    sector:'manufactura',
    icono:'🔧',
    nombre:'Juego de brocas industriales 5 Brocas para madera con punta centradora para una perforación más precisa.',
    desc:'11 Brocas HSS para metal con punta tradicional (118°). 3 Brocas de manita con punta guía para perforaciones precisas y zanco hexagonal de cambio rápido. 6 Brocas para concreto con punta de carburo de tungsteno. Estuche plástico con compartimientos laterales para guardar herramienta. Incluye:  19 Puntas Estrella de 1", PHI a PH3 5 Puntas Pala de 1", 3 mm a 12 mm 9 Puntas cuadradas de 1", S1 a S3 10',
    precio:130714,
    tipo:'Insumo/Dotación',
    ciiu:'C (14,16,25) / S (95)',
    proceso:'Producción / Operación'
  }),

  producto({
    id:'CAT2-046',
    sector:'manufactura',
    icono:'🔧',
    nombre:'Juego de llaves y dados Juego de Dados, Juego de Llaves de Carraca, Juego de Llaves de Vaso de 46 Piezas de 1/4 con Jueg',
    desc:'El juego de llaves de vaso SOMOZO de 46 piezas es un conjunto completo de herramientas prácticas que se montan para ayudar a los aficionados e incluso a los profesionales en sus proyectos. Cada pieza de metal en este juego fue forjada de acero al carbono de alta calidad, endurecido y templado con un acabado pulido. Las herramientas están hechas para durar años y proporcionar siempre los mismos res',
    precio:220150,
    tipo:'Insumo/Dotación',
    ciiu:'C (14,16,25) / S (95)',
    proceso:'Producción / Operación'
  }),

  producto({
    id:'CAT2-047',
    sector:'manufactura',
    icono:'📏',
    nombre:'Calibrador pie de rey Diseñado para el trabajo exigente, este calibrador pie de rey ofrece una medición manual con un ra',
    desc:'Calibrador pie de rey en acero inoxidable. Mide diámetros y profundidades. Precisión 0.02 mm. Esencial para control de calidad en talleres metalmecánicos.',
    precio:223801,
    tipo:'Insumo/Dotación',
    ciiu:'C (14,16,25) / S (95)',
    proceso:'Producción / Operación'
  }),

  producto({
    id:'CAT2-048',
    sector:'manufactura',
    icono:'📏',
    nombre:'Micrómetro MICRÓMETRO DE EXTERIORES PROFESIONAL, CAPACIDAD 0- 1", PRECISIÓN 0.001" ASIMETO',
    desc:'Micrómetro de exteriores profesional, capacidad 0-1 pulgada, precisión 0.001 mm. Para medición precisa en metalmecánica y control de calidad.',
    precio:113050,
    tipo:'Insumo/Dotación',
    ciiu:'C (14,16,25) / S (95)',
    proceso:'Producción / Operación'
  }),

  producto({
    id:'CAT2-049',
    sector:'manufactura',
    icono:'📏',
    nombre:'Multímetro digital certificado Tipo',
    desc:'Multímetros Uso Profesional Tipo de trabajo Profesional Voltaje 0 V Amperaje 0 A Alimentación Pila Funciones Medidor de voltaje',
    precio:89250,
    tipo:'Insumo/Dotación',
    ciiu:'C (14,16,25) / S (95)',
    proceso:'Producción / Operación'
  }),

  producto({
    id:'CAT2-050',
    sector:'manufactura',
    icono:'📏',
    nombre:'Pinza amperimétrica Características Principales',
    desc:'Medición de Corriente AC: Hasta 600A con gran precisión.  True RMS: Mediciones precisas en cualquier condición de señal. NCV (Voltaje Sin Contacto): Detecta presencia de tensión en cables y paredes sin necesidad de contacto eléctrico.  Live Test: Función para identificar cables de fase (línea) de forma rápida.  Pantalla Retroiluminada: Gran tamaño y excelente visibilidad en lugares oscuros.  Prote',
    precio:434081,
    tipo:'Insumo/Dotación',
    ciiu:'C (14,16,25) / S (95)',
    proceso:'Producción / Operación'
  }),

  producto({
    id:'CAT2-051',
    sector:'manufactura',
    icono:'⚡',
    nombre:'Detector de voltaje sin contacto Dale seguridad a tus instalaciones eléctricas con el Detector de Voltaje sin Contacto B',
    desc:'Detector de voltaje sin contacto. Detecta tensión sin tocar el cable. Señal luminosa y sonora. Herramienta de seguridad para técnicos eléctricos.',
    precio:67237,
    tipo:'Insumo/Dotación',
    ciiu:'C (14,16,25) / S (95)',
    proceso:'Producción / Operación'
  }),

  producto({
    id:'CAT2-052',
    sector:'manufactura',
    icono:'⚡',
    nombre:'Probador de tomas (tester) Ancho',
    desc:'4.1 cm Alto 1.9 cm Largo 7.5 cm Especificaciones  Tipo Tester Potencia máxima 0 W Alimentación Otra',
    precio:186221,
    tipo:'Insumo/Dotación',
    ciiu:'C (14,16,25) / S (95)',
    proceso:'Producción / Operación'
  }),

  producto({
    id:'CAT2-053',
    sector:'manufactura',
    icono:'🔧',
    nombre:'Juego de destornilladores aislados Destornilladores diseñados para trabajos eléctricos seguros, fabricados en acero crom',
    desc:'Cada destornillador está aislado para 1000V Mangos ergonómicos para mayor comodidad y agarre. Incluye destornilladores de pala y Phillips en diferentes tamaños. Ideal para reparación y mantenimiento de equipos eléctricos. Cumple con las normas de seguridad y calidad internacionales. Práctico estuche para almacenamiento y transporte fácil.',
    precio:218660,
    tipo:'Insumo/Dotación',
    ciiu:'C (14,16,25) / S (95)',
    proceso:'Producción / Operación'
  }),

  producto({
    id:'CAT2-054',
    sector:'manufactura',
    icono:'🔧',
    nombre:'Pelacables profesional Pela Cables Automática 8" Truper',
    desc:'Permite quitar el aislamiento del cable de forma automática Capacidad de: 10 a 22 AWG Incluye cuchillas para corte de cables Tope para medir la longitud del cable a pelar 10 Mordazas para crimpar Medida: 8"',
    precio:49051,
    tipo:'Insumo/Dotación',
    ciiu:'C (14,16,25) / S (95)',
    proceso:'Producción / Operación'
  }),

  producto({
    id:'CAT2-055',
    sector:'manufactura',
    icono:'🔧',
    nombre:'Pelacables profesional Pela Cables Automática 8" Truper',
    desc:'Permite quitar el aislamiento del cable de forma automática Capacidad de: 10 a 22 AWG Incluye cuchillas para corte de cables Tope para medir la longitud del cable a pelar 10 Mordazas para crimpar Medida: 8"',
    precio:197288,
    tipo:'Insumo/Dotación',
    ciiu:'C (14,16,25) / S (95)',
    proceso:'Producción / Operación'
  }),

  producto({
    id:'CAT2-056',
    sector:'manufactura',
    icono:'🔧',
    nombre:'Crimpadora terminales Dimensiones',
    desc:'Ancho 11.5 cm Alto 26.5 cm Largo 5.5 cm Especificaciones  Tipo Crimpeadora Tipo de alicate Pelacables Tipo de trabajo Profesional Material del mango Plástico',
    precio:82129,
    tipo:'Insumo/Dotación',
    ciiu:'C (14,16,25) / S (95)',
    proceso:'Producción / Operación'
  }),

  producto({
    id:'CAT2-057',
    sector:'manufactura',
    icono:'🔧',
    nombre:'Juego de alicates (punta/corte) Tipo',
    desc:'Set de alicates Incluye 1x Alicate de punta plana 165 mm, 1x Alicate Universal 165 mm, 1x Alicate Universal 190 mm Número de piezas 3 Formato del producto Caja País de Origen China',
    precio:134616,
    tipo:'Insumo/Dotación',
    ciiu:'C (14,16,25) / S (95)',
    proceso:'Producción / Operación'
  }),

  producto({
    id:'CAT2-058',
    sector:'manufactura',
    icono:'🔧',
    nombre:'Pistola de calor Dimensiones',
    desc:'Peso 0.8 kg Especificaciones  Tipo Pistolas de calor Uso de herramienta Profesional Cuenta con bloqueo de seguridad No Cuenta con control de temperatura Si Inalámbrico No Potencia nominal 1500 W Alimentación Eléctrica Rango de temperatura 90 a 600 grados cent. Voltaje 110 Incluye Pistola de calor, Boquillas, Mango de herramientas de pastoreo, Herramientas de pastoreo.',
    precio:736641,
    tipo:'Insumo/Dotación',
    ciiu:'C (14,16,25) / S (95)',
    proceso:'Producción / Operación'
  }),

  producto({
    id:'CAT2-059',
    sector:'manufactura',
    icono:'🔌',
    nombre:'Estación de soldadura electrónica Pantalla LCD de 3 dígitos.',
    desc:'Construcción antiestática del cuerpo de la estación, cautín y pistola de aire. Control exacto de temperatura (±1 °C) Calentamiento rápido (3-5 seg.)  Voltaje 220 V /  50 Hz Consumo de energía 700 Wt Diapasón de temperaturas 100 °C ~ 450 °C Flujo de aire 120 L/min (max.) Estabilidad de temperatura ±1 °C Peso 2,0 kg',
    precio:452200,
    tipo:'Equipo',
    ciiu:'C (14,16,25) / S (95)',
    proceso:'Producción / Operación'
  }),

  producto({
    id:'CAT2-060',
    sector:'manufactura',
    icono:'🌬️',
    nombre:'Extractor de humos de soldadura',
    desc:'Extractor de humos para soldadura con filtros de alta eficiencia. Elimina gases nocivos. Protege la salud del operario. Para talleres de soldadura.',
    precio:535500,
    tipo:'Equipo',
    ciiu:'C (14,16,25) / S (95)',
    proceso:'Producción / Operación'
  }),

  producto({
    id:'CAT2-061',
    sector:'manufactura',
    icono:'🧹',
    nombre:'Aspiradora industrial Especificaciones',
    desc:'Tipo Barril Ancho 30 cm Alto 53 cm Largo 30 cm Peso 5 kg Tipo de aspiradora Barril Tipo de filtro Polvo, Agua Uso de herramienta Industrial Material Acero inoxidable Largo del cable 6 m Largo de la manguera 2.4 m Color Plateado Incluye 1 Manguera de diámetro 1 1/4" (32 mm). 1.9 m (6.2 ft) con seguro de ajuste, 1 Boquilla tipo garra, 1 Boquilla para ranuras, 1 Boquilla 2 en 1 para piso y alfombra,',
    precio:1532705,
    tipo:'Insumo/Dotación',
    ciiu:'C (14,16,25) / S (95)',
    proceso:'Producción / Operación'
  }),

  producto({
    id:'CAT2-062',
    sector:'manufactura',
    icono:'🪑',
    nombre:'Banco de trabajo industrial - Banco de trabajo estándar móvil - 2000 x 700 x 840 mm L x A x A WS885N-2000M40-X7000',
    desc:'Banco de trabajo industrial estándar móvil (2000 x 700 mm). Superficie resistente. Ruedas con freno. Ideal para talleres de metalmecánica, carpintería y servicios técnicos.',
    precio:809200,
    tipo:'Insumo/Dotación',
    ciiu:'C (14,16,25) / S (95)',
    proceso:'Producción / Operación'
  }),

  producto({
    id:'CAT2-063',
    sector:'manufactura',
    icono:'🔩',
    nombre:'Tornillo de banco Esta prensa cuenta con una garantía de 10 años, lo que te da la tranquilidad de saber que es una herra',
    desc:'Tornillo de banco industrial con garantía de 10 años. Mandíbulas en acero endurecido. Fija piezas con firmeza. Para tornería y metalmecánica.',
    precio:148750,
    tipo:'Insumo/Dotación',
    ciiu:'C (14,16,25) / S (95)',
    proceso:'Producción / Operación'
  }),

  producto({
    id:'CAT2-064',
    sector:'manufactura',
    icono:'🗄️',
    nombre:'Estantería metálica industrial torre 240 x 120 cm',
    desc:'Estantería metálica industrial 240 x 120 cm. Estructura en acero anticorrosivo. Capacidad por nivel hasta 200 kg. Para bodegas, tiendas y talleres.',
    precio:380800,
    tipo:'Mobiliario',
    ciiu:'C (14,16,25) / S (95)',
    proceso:'Producción / Operación'
  }),

  producto({
    id:'CAT2-065',
    sector:'manufactura',
    icono:'💡',
    nombre:'Lámpara de trabajo LED Esta luz de trabajo COB está hecha de material de alta calidad.',
    desc:'Adopta cuentas de luz muy brillantes con brillo constante. Fácil de llevar y de usar. Una gran elección para ti.  Gran Luz De Inundación De Alto Brillo. Carga De Emergencia Del Teléfono Pantalla De Potencia De Carga Interfaz De Carga Micro Usb Baterías 3xaa Marca: Ecoled Modelo: Lámpara De Trabajo Multifuncional  Tipo De Luz: Luz Led Dimensiones: 15cm * 20cm Aprox.',
    precio:97104,
    tipo:'Equipo',
    ciiu:'C (14,16,25) / S (95)',
    proceso:'Producción / Operación'
  }),

  producto({
    id:'CAT2-066',
    sector:'manufactura',
    icono:'🦺',
    nombre:'Equipo de protección personal industrial (careta/guantes)',
    desc:'EPP industrial: careta facial y guantes resistentes. Protege de chispas y proyecciones. Cumple normas de seguridad industrial.',
    precio:101150,
    tipo:'Insumo/Dotación',
    ciiu:'C (14,16,25) / S (95)',
    proceso:'Producción / Operación'
  }),

  producto({
    id:'CAT2-067',
    sector:'manufactura',
    icono:'🧯',
    nombre:'Extintor multipropósito (taller) abc- 20 libras rdl',
    desc:'Extintor multipropósito ABC 20 libras. Apaga fuegos tipo A, B y C. Certificado con manómetro. Obligatorio en talleres, cocinas y bodegas.',
    precio:113050,
    tipo:'Insumo/Dotación',
    ciiu:'C (14,16,25) / S (95)',
    proceso:'Producción / Operación'
  }),

  producto({
    id:'CAT2-068',
    sector:'manufactura',
    icono:'🩹',
    nombre:'Botiquín industrial (taller) Estuche plástico mini cuadrado, medidas 21,5 cm x 11.5 cm x 6 cm compuesto por 13 elementos',
    desc:'Botiquín de primeros auxilios industrial. Incluye vendas, antisépticos, curitas y guantes. Cumple normas de seguridad industrial. Estuche plástico compacto.',
    precio:77350,
    tipo:'Insumo/Dotación',
    ciiu:'C (14,16,25) / S (95)',
    proceso:'Producción / Operación'
  })

];

// Comercio y Servicios
const PRODUCTOS_COMERCIO=[
  producto({
    id:'P050',
    sector:'comercio',
    icono:'🗄️',
    nombre:'Estantería metálica de exhibición Tipo',
    desc:'Estanterías metálica Ancho 90 cm Alto 176 cm Profundidad 40 cm Dimensiones 90 x 176 x 40 cm Peso 15.888 kg Tipo de estantería Estante Material Metal Color Gris Incluye Piezas de Union Cantidad de repisas 5',
    precio:535322,
    tipo:'Mobiliario',
    ciiu:'G (47) / C (10,14) / S (96)',
    proceso:'Comercialización / Transformación / Operación'
  }),

  producto({
    id:'P051',
    sector:'comercio',
    icono:'🗄️',
    nombre:'Góndolas para tienda Estructura: Metálica reforzada, de alta resistencia.',
    desc:'Niveles de Exhibición:  4 repisas metálicas  Ajustables en altura mediante sistema de ranura tipo enganche  Acabado: Pintura electrostática horneada, anticorrosiva y fácil de limpiar.  Base Estable: Repisa inferior amplia con patas metálicas para mayor estabilidad del módulo.  Dimensiones:  Alto: 180 cm  Ancho: 100 cm  Fondo: 46 cm',
    precio:1947435,
    tipo:'Mobiliario',
    ciiu:'G (47) / C (10,14) / S (96)',
    proceso:'Comercialización / Transformación / Operación'
  }),

  producto({
    id:'P052',
    sector:'comercio',
    icono:'❄️',
    nombre:'Nevera exhibidora vertical Tipo Nevera congelador superior o arriba Referencia del Producto en el Certificado/Empaque En',
    desc:'Tipo de panel de control Digital Tipo de  refrigerador - congelador Nevera Capacidad 440 litros Capacidad de refrigeración 440 litros Capacidad del congelador 0 litros',
    precio:6113446,
    tipo:'Insumo/Dotación',
    ciiu:'G (47) / C (10,14) / S (96)',
    proceso:'Comercialización / Transformación / Operación'
  }),

  producto({
    id:'P053',
    sector:'comercio',
    icono:'❄️',
    nombre:'Congelador tipo cofre Tipo Congeladores Referencia del Producto en el Certificado/Empaque CI-299TV Ancho 83.7 cm Alto 11',
    desc:'Blanco Número de gavetas 4 Cantidad de puertas 2 Consumo energético 99 kWh/mes Posición del congelador Freezer horizontal Año de lanzamiento 2025 Voltaje 115 V Garantía detalle 1 año general y 3 años en el compresor',
    precio:3792946,
    tipo:'Equipo',
    ciiu:'G (47) / C (10,14) / S (96)',
    proceso:'Comercialización / Transformación / Operación'
  }),

  producto({
    id:'P054',
    sector:'comercio',
    icono:'⚖️',
    nombre:'Balanza digital con torre Unidad de medida: Kg / lb., División mínima: 5 g (0.18 oz)., Pesada mínima: 100 g (3.5 oz)., M',
    desc:'Balanza digital con torre y pantalla visible para cliente y vendedor. Capacidad 30 kg. Ideal para tiendas, plazas de mercado y empacadoras. Precisa y fácil de calibrar.',
    precio:681692,
    tipo:'Insumo/Dotación',
    ciiu:'G (47) / C (10,14) / S (96)',
    proceso:'Comercialización / Transformación / Operación'
  }),

  producto({
    id:'P055',
    sector:'comercio',
    icono:'💰',
    nombre:'Caja registradora / POS odo en Uno Caja Registradora Profesional para Pequeñas Empresas, Paquete POS Incluye: Monitor Tá',
    desc:'Sistema POS todo en uno. Incluye monitor táctil, cajón de dinero, escáner e impresora térmica. Administra ventas, inventario y cierre de caja.',
    precio:9686324,
    tipo:'Insumo/Dotación',
    ciiu:'G (47) / C (10,14) / S (96)',
    proceso:'Comercialización / Transformación / Operación'
  }),

  producto({
    id:'P056',
    sector:'comercio',
    icono:'📱',
    nombre:'Lector de código de barras escaners',
    desc:'Lector de código de barras USB o inalámbrico. Lee códigos 1D y 2D. Compatible con sistemas POS e inventario. Para tiendas y bodegas.',
    precio:249722,
    tipo:'Insumo/Dotación',
    ciiu:'G (47) / C (10,14) / S (96)',
    proceso:'Comercialización / Transformación / Operación'
  }),

  producto({
    id:'P057',
    sector:'comercio',
    icono:'🖨️',
    nombre:'Impresora térmica de recibos Tipo',
    desc:'Impresoras Referencia del Producto en el Certificado/Empaque 7709281325989 Ancho 11 cm Alto 10 cm Largo 15 cm Tipo de impresora Impresora Tipo de impresión Láser monocromática Color Negra Cuenta con Wifi No Calidad de impresión Alta resolución Compatibilidad Windows, Linux, Android y macOS',
    precio:196172,
    tipo:'Equipo',
    ciiu:'G (47) / C (10,14) / S (96)',
    proceso:'Comercialización / Transformación / Operación'
  }),

  producto({
    id:'P058',
    sector:'comercio',
    icono:'🖨️',
    nombre:'Impresora de etiquetas MÉTODO DE IMPRESIÓN',
    desc:'Térmico directo, Térmico por transferencia ANCHO DE IMPESIÓN 104MM VELOCIIDAD DE IMPESIÓN 127MM/S INTERFAZ Ethernet, USB COMPATIBILIDAD Android, Windows, Linux, Mac OSEMULACIÓN DPL, EPL, TSPL, ZPL',
    precio:1028114,
    tipo:'Equipo',
    ciiu:'G (47) / C (10,14) / S (96)',
    proceso:'Comercialización / Transformación / Operación'
  }),

  producto({
    id:'P059',
    sector:'comercio',
    icono:'📦',
    nombre:'Selladora térmica de bolsas Longitud de sellado: 30cm. ¡Sella bolsas de tamaño considerable para satisfacer todas tus ne',
    desc:'Ancho de sellado: 2mm, el tamaño perfecto para un sellado seguro y confiable. Tiempo de calentamiento ultrarrápido: entre 0.2 y 1.3 segundos, para que puedas trabajar eficientemente. Peso ligero de solo 2.9 kg, lo que facilita su transporte y manejo.',
    precio:355215,
    tipo:'Insumo/Dotación',
    ciiu:'G (47) / C (10,14) / S (96)',
    proceso:'Comercialización / Transformación / Operación'
  }),

  producto({
    id:'P060',
    sector:'comercio',
    icono:'📦',
    nombre:'Dispensador de film stretch (empaque) Material y Diseño: Dispensador de stretch metálico con núcleo adaptable para bobin',
    desc:'Mango Ergonómico: Mango protegido con espuma para un agarre cómodo y seguro durante la aplicación del film stretch. Base en Aluminio: La base fabricada en aluminio proporciona estabilidad y durabilidad al dispensador. Tensión Ajustable: Cuenta con un sistema de tensión ajustable, permitiendo adaptar la fuerza según las necesidades de envoltura. Peso: 1,6 KG.',
    precio:624821,
    tipo:'Insumo/Dotación',
    ciiu:'G (47) / C (10,14) / S (96)',
    proceso:'Comercialización / Transformación / Operación'
  }),

  producto({
    id:'P061',
    sector:'comercio',
    icono:'🛒',
    nombre:'Carrito de mercado (uso interno) el carro para autoservicio metálico va más allá de las expectativas convencionales. Es',
    desc:'➣ Alto: 99 cm cm ➣ Fondo: 90 cm cm ➣ Colores: zincado ➣ Desarmable: No',
    precio:1111073,
    tipo:'Insumo/Dotación',
    ciiu:'G (47) / C (10,14) / S (96)',
    proceso:'Comercialización / Transformación / Operación'
  }),

  producto({
    id:'P062',
    sector:'comercio',
    icono:'📦',
    nombre:'Canastillas plásticas para surtido Canastilla plastica fondo rombo pared rombo 60x40x25',
    desc:'Canastillas plásticas rígidas para almacenamiento y transporte. Apilables. Ideales para frutas, verduras, panadería, carnicería y logística.',
    precio:54978,
    tipo:'Insumo/Dotación',
    ciiu:'G (47) / C (10,14) / S (96)',
    proceso:'Comercialización / Transformación / Operación'
  }),

  producto({
    id:'P063',
    sector:'comercio',
    icono:'📦',
    nombre:'Contenedores grado alimentario Contenedor Portátil Scepter de Grado Alimenticio ? 19 L con Boquilla Reversible',
    desc:'Contenedores portátiles de grado alimentario. Material libre de BPA. Herméticos y apilables. Para almacenamiento de líquidos y alimentos en restaurantes.',
    precio:160472,
    tipo:'Insumo/Dotación',
    ciiu:'G (47) / C (10,14) / S (96)',
    proceso:'Comercialización / Transformación / Operación'
  }),

  producto({
    id:'P064',
    sector:'comercio',
    icono:'🪑',
    nombre:'Mesa inoxidable de preparación Mesas Acero 90 x 150 x 50 Con Entrepaño',
    desc:'Mesa de preparación en acero inoxidable (90 x 150 x 50 cm) con entrepaño. Resistente a la corrosión. Cumple normas sanitarias.',
    precio:3212822,
    tipo:'Mobiliario',
    ciiu:'G (47) / C (10,14) / S (96)',
    proceso:'Comercialización / Transformación / Operación'
  }),

  producto({
    id:'P065',
    sector:'comercio',
    icono:'🚰',
    nombre:'Lavamanos en acero inoxidable (operación) Grifería institucional kit válvula de pedal con lavamanos de 28x30',
    desc:'Lavamanos en acero inoxidable con grifería institucional de válvula de pedal o palanca. Cumple normas sanitarias. Para cocinas industriales y áreas de manipulación de alimentos.',
    precio:588872,
    tipo:'Insumo/Dotación',
    ciiu:'G (47) / C (10,14) / S (96)',
    proceso:'Comercialización / Transformación / Operación'
  }),

  producto({
    id:'P066',
    sector:'comercio',
    icono:'⚖️',
    nombre:'Gramera/báscula de precisión BASCULA  DIGITAL PARA COCINA CAPACIDAD 5 KG TRUPER, SENSOR DE ALTA PRESICION, PANTALLA LCD,',
    desc:'Báscula digital de precisión para cocina, capacidad 5 kg. Plataforma en acero inoxidable. Función tara. Para panadería y restaurantes.',
    precio:47128,
    tipo:'Insumo/Dotación',
    ciiu:'G (47) / C (10,14) / S (96)',
    proceso:'Comercialización / Transformación / Operación'
  }),

  producto({
    id:'P067',
    sector:'comercio',
    icono:'🔪',
    nombre:'Rebanadora de embutidos Tajadora de carnes frias EXH: Robusta estructura en aluminio anodizado disco de 30 centimetros d',
    desc:'Tajadora de carnes frías y embutidos en acero inoxidable. Hoja ajustable. Para supermercados y plazas de mercado.',
    precio:6017235,
    tipo:'Insumo/Dotación',
    ciiu:'G (47) / C (10,14) / S (96)',
    proceso:'Comercialización / Transformación / Operación'
  }),

  producto({
    id:'P068',
    sector:'comercio',
    icono:'🗄️',
    nombre:'Vitrina mostrador Estructura en Lámina Cold Rolled Calibre 24; Entrepaños en Vidrio 4 mm. con boceleria metálica, Puerta',
    desc:'Vitrina mostrador con vidrio templado y puerta corrediza. Exhibe productos de forma elegante. Para joyerías, tiendas de accesorios y puntos de venta.',
    precio:2274417,
    tipo:'Mobiliario',
    ciiu:'G (47) / C (10,14) / S (96)',
    proceso:'Comercialización / Transformación / Operación'
  }),

  producto({
    id:'P069',
    sector:'comercio',
    icono:'🍳',
    nombre:'l Licuadora Industrial acero inoxidable 25 litros',
    desc:'Licuadora industrial en acero inoxidable de 25 litros. Motor potente para grandes volúmenes. Para juguerías y restaurantes.',
    precio:6009202,
    tipo:'Insumo/Dotación',
    ciiu:'G (47) / C (10,14) / S (96)',
    proceso:'Comercialización / Transformación / Operación'
  }),

  producto({
    id:'P070',
    sector:'comercio',
    icono:'🍳',
    nombre:'Batidora/amasadora industrial 10 litros Capacidad max en harina3 libras',
    desc:'Velocidades2 Voltaje110V 60Hz Potencia370W AccesoriosGancho, Paleta y globo Dimensiones76X43X51cm (alto, ancho y fondo)',
    precio:4034100,
    tipo:'Insumo/Dotación',
    ciiu:'G (47) / C (10,14) / S (96)',
    proceso:'Comercialización / Transformación / Operación'
  }),

  producto({
    id:'P071',
    sector:'comercio',
    icono:'🍳',
    nombre:'Horno semindustrial de convección Horno de convección eléctrico a 220V con espacio para 4 bandejas. Exterior e interior',
    desc:'Horno de convección eléctrico a 220V para uso semindustrial. Calor uniforme. Para panadería, pastelería y restaurantes pequeños.',
    precio:4459653,
    tipo:'Equipo',
    ciiu:'G (47) / C (10,14) / S (96)',
    proceso:'Comercialización / Transformación / Operación'
  }),

  producto({
    id:'P072',
    sector:'comercio',
    icono:'🏭',
    nombre:'Fermentadora/armario de fermentación Camara de fermentación Unox 16 Bandejas 60×40cm – Manual',
    desc:'Armario de fermentación de 16 bandejas. Control preciso de temperatura y humedad. Fermentación uniforme para mayor calidad del pan.',
    precio:37374508,
    tipo:'Insumo/Dotación',
    ciiu:'G (47) / C (10,14) / S (96)',
    proceso:'Comercialización / Transformación / Operación'
  }),

  producto({
    id:'P073',
    sector:'comercio',
    icono:'🍳',
    nombre:'Molino de granos Tipo',
    desc:'Molinos de cocina Año y mes de fabricación Visible en la etiqueta de los productos sujetos a la resolución 1440 del 2021. Referencia del Producto en el Certificado/Empaque L14200 Ancho 14.5 cm Alto 33 cm Largo 15.7 cm Material del utensilio Metal Color Plateado Número de piezas 11',
    precio:249722,
    tipo:'Insumo/Dotación',
    ciiu:'G (47) / C (10,14) / S (96)',
    proceso:'Comercialización / Transformación / Operación'
  }),

  producto({
    id:'P074',
    sector:'comercio',
    icono:'📦',
    nombre:'Selladora al vacío Tipo',
    desc:'Electrodomésticos de cocina modernos Ancho 43.18 cm Alto 25.4 cm Largo 52.5 cm Material PLASTICO Color Negro Potencia nominal 125 W Voltaje 117 V',
    precio:892322,
    tipo:'Insumo/Dotación',
    ciiu:'G (47) / C (10,14) / S (96)',
    proceso:'Comercialización / Transformación / Operación'
  }),

  producto({
    id:'P075',
    sector:'comercio',
    icono:'📦',
    nombre:'Empacadora semiautomática',
    desc:'Empacadora semiautomática para sellado de productos en bolsas. Aumenta la velocidad de empaque. Para procesadoras de alimentos y pequeñas industrias.',
    precio:25168500,
    tipo:'Insumo/Dotación',
    ciiu:'G (47) / C (10,14) / S (96)',
    proceso:'Comercialización / Transformación / Operación'
  }),

  producto({
    id:'P076',
    sector:'comercio',
    icono:'❄️',
    nombre:'Refrigerador productivo Refrigerador vertical de dos puertas. Marco construcción exterior e interior en acero inoxidable',
    desc:'Refrigerador vertical de dos puertas para uso productivo. Gran capacidad, temperatura regulable. Para restaurantes, panaderías y tiendas.',
    precio:15670917,
    tipo:'Equipo',
    ciiu:'G (47) / C (10,14) / S (96)',
    proceso:'Comercialización / Transformación / Operación'
  }),

  producto({
    id:'P077',
    sector:'comercio',
    icono:'🌬️',
    nombre:'extractor de olores Acabado de filtros de grasa Aluminio',
    desc:'Aluminio Alarma de cambio de filtros No No Apagado programable No No Capacidad de Extracción (m3/hr) 250m3/hr 120m3/hr Color Inoxidable Inoxidable Display No No Filtro de carbón activado Si No Indicador de encendido Si No',
    precio:617432,
    tipo:'Equipo',
    ciiu:'G (47) / C (10,14) / S (96)',
    proceso:'Comercialización / Transformación / Operación'
  }),

  producto({
    id:'P078',
    sector:'comercio',
    icono:'🌬️',
    nombre:'Campana extractora Campana CRIP08-60N Inoxidable 3 Velocidades Negra',
    desc:'Opción de ser extractora (accesorio no incluido). • Caudal de aspiración de 210 m³/h. • Motor de 3 velocidades de operación, con controles frontales independientes. • 1 bombillo de 25W. Interruptor independiente para la luz. • Rejilla atrapagrasa removible y lavable. • Filtro de carbón activado para purificar los olores de la cocción.',
    precio:535322,
    tipo:'Equipo',
    ciiu:'G (47) / C (10,14) / S (96)',
    proceso:'Comercialización / Transformación / Operación'
  }),

  producto({
    id:'P079',
    sector:'comercio',
    icono:'🍳',
    nombre:'Freidora industrial Equipo fabricado totalmente en acero.',
    desc:'– Pozuelo en acero 430 – Tres quemadores en hierro fundido indeformables de alto rendimiento – Sistema de seguridad compuesto por termostato, piloto, termopila y válvula Unitrol. – Rodachinas de alto tráfico 3″ en poliuretano – Incluye GRATIS dos canastillas de trabajo pesado – Incluye GRATIS rejilla filtro de impurezas – Posee zona fria para mayor vida útil del aceite. – Obtendrás ahorro de aceit',
    precio:6158250,
    tipo:'Insumo/Dotación',
    ciiu:'G (47) / C (10,14) / S (96)',
    proceso:'Comercialización / Transformación / Operación'
  }),

  producto({
    id:'P080',
    sector:'comercio',
    icono:'🍳',
    nombre:'Plancha para asados Plancha Para Asar 47 Cm X 25 Cm',
    desc:'Plancha para asados 47 x 25 cm en acero inoxidable. Distribución uniforme del calor. Para restaurantes y negocios de comida rápida.',
    precio:410532,
    tipo:'Insumo/Dotación',
    ciiu:'G (47) / C (10,14) / S (96)',
    proceso:'Comercialización / Transformación / Operación'
  }),

  producto({
    id:'P081',
    sector:'comercio',
    icono:'🍽️',
    nombre:'Dispensador de salsas y topping (operación) ste dispensador de salsa comercial puede almacenar 1 tanque de salsa a su gu',
    desc:'Alto: 25 cm Profundo: 18 cm',
    precio:2163598,
    tipo:'Insumo/Dotación',
    ciiu:'G (47) / C (10,14) / S (96)',
    proceso:'Comercialización / Transformación / Operación'
  }),

  producto({
    id:'P082',
    sector:'comercio',
    icono:'🍽️',
    nombre:'Set gastronorm (bandejas)',
    desc:'Set de bandejas Gastronorm en acero inoxidable. Medidas estándar. Compatibles con hornos y refrigeradores. Para cocinas profesionales.',
    precio:3480750,
    tipo:'Insumo/Dotación',
    ciiu:'G (47) / C (10,14) / S (96)',
    proceso:'Comercialización / Transformación / Operación'
  }),

  producto({
    id:'P083',
    sector:'comercio',
    icono:'🪑',
    nombre:'Carro bandejero CARRO RACK PARA BANDEJA 521*661*1780',
    desc:'Carro rack metálico para bandejas de panadería. Ruedas para desplazamiento en cocina. Permite transportar y almacenar múltiples bandejas.',
    precio:4994516,
    tipo:'Mobiliario',
    ciiu:'G (47) / C (10,14) / S (96)',
    proceso:'Comercialización / Transformación / Operación'
  }),

  producto({
    id:'P084',
    sector:'comercio',
    icono:'☕',
    nombre:'Máquina de café semiautomática Potencia',
    desc:'1450 Watts  Voltaje Rango entre 110 V y 120 V  Tipo de Producto Cafetera Expresso  Tipo de Filtro No Necesita  Capacidad 2  Tazas',
    precio:5354822,
    tipo:'Equipo',
    ciiu:'G (47) / C (10,14) / S (96)',
    proceso:'Comercialización / Transformación / Operación'
  }),

  producto({
    id:'P085',
    sector:'comercio',
    icono:'🧵',
    nombre:'Máquina plana industrial (confección) Función: Costura recta gama genérica',
    desc:'Garantía: 06 meses por kit electrónico y 06 meses por descalibraciones mecánicas Tipo de aguja: Cubo delgado DBX1 o Cubo grueso 135X5 Sistema paso a paso Velocidad: Variable desde 500 hasta 4000 rpm Longitud de puntada (cubo delgado a 5 mm o cubo grueso 7 mm) Posicionador de aguja Luz led integrada Motor direct drive incorporado de 550w Devanador incorporado Mueble importado',
    precio:2973810,
    tipo:'Equipo',
    ciiu:'G (47) / C (10,14) / S (96)',
    proceso:'Comercialización / Transformación / Operación'
  }),

  producto({
    id:'P086',
    sector:'comercio',
    icono:'🧵',
    nombre:'Overlock industrial Overlock con costura overlock de seis hilos para telas ligeras y medianas Fácil cambio para diferent',
    desc:'Sistema de lubricación automática Mejorado - mecanismo de barra de aguja cerrado Tensión óptima del hilo Diseño unico Servomotor integrado en la cabeza, control de velocidad continuo El ahorro de energía Ruido bajo Alto rendimiento',
    precio:5310500,
    tipo:'Insumo/Dotación',
    ciiu:'G (47) / C (10,14) / S (96)',
    proceso:'Comercialización / Transformación / Operación'
  }),

  producto({
    id:'P087',
    sector:'comercio',
    icono:'🪑',
    nombre:'Mesa de corte textil 120 x 180 cm Nuestra Mesa de Corte para Tela – Diseño Americano está fabricada para trabajos exigen',
    desc:'La mesa tiene una altura fija de 90 cm, ideal para mantener una postura ergonómica durante el corte, evitando dolores de espalda y fatiga en jornadas largas de trabajo.  Disponible en múltiples medidas, es un producto modular y adaptable a distintos espacios de trabajo. Puedes elegir la variante que mejor se acomode a tu taller desde el menú.',
    precio:1160072,
    tipo:'Mobiliario',
    ciiu:'G (47) / C (10,14) / S (96)',
    proceso:'Comercialización / Transformación / Operación'
  }),

  producto({
    id:'P088',
    sector:'comercio',
    icono:'🧵',
    nombre:'Cortadora vertical de tela Motores',
    desc:'110V, 1ph, 50 / 60Hz 220V, 1ph o 3ph, 50 / 60Hz Estándar: velocidad única Opcional: velocidad dual, velocidad variable Caballo de fuerza 2hp, 1ph a 4,000 RPM 2hp, 3ph a 4,000 RPM Peso 41 libras (18.5kg) Cuchillas Estándar: acero al carbono Opcional: acero de alta velocidad, recubierto de PTFE, borde ondulado, ranura ondulada, punta en ángulo Cinturones Estándar: grano medio Opcional: fino, grueso,',
    precio:2322410,
    tipo:'Insumo/Dotación',
    ciiu:'G (47) / C (10,14) / S (96)',
    proceso:'Comercialización / Transformación / Operación'
  }),

  producto({
    id:'P089',
    sector:'comercio',
    icono:'🧵',
    nombre:'Plancha industrial Ancho 6 Alto 4 Largo 4 Especificaciones Tipo Planchas para ropa Tipo plancha Calor Material Acero Col',
    desc:'Cuenta con indicador de llenado No Cuenta con control de temperatura Si Cuenta con antiadherente Si Potencia 110 V Cuenta con apagado automático No',
    precio:738812,
    tipo:'Insumo/Dotación',
    ciiu:'G (47) / C (10,14) / S (96)',
    proceso:'Comercialización / Transformación / Operación'
  }),

  producto({
    id:'P090',
    sector:'comercio',
    icono:'💇',
    nombre:'Silla hidráulica profesional (peluquería) Silla de Barbería y Peluquería Reclinable Hidráulica y Giratoria Stetik Negro',
    desc:'Silla hidráulica profesional para peluquería y barbería. Giratoria y reclinable. Tapizado en cuero sintético. Comodidad al cliente y facilidad al estilista.',
    precio:3694772,
    tipo:'Mobiliario',
    ciiu:'G (47) / C (10,14) / S (96)',
    proceso:'Comercialización / Transformación / Operación'
  }),

  producto({
    id:'P091',
    sector:'comercio',
    icono:'🚿',
    nombre:'Lavacabezas portátil Cuenta con dos contenedores de 2 galones cada uno (≈7.5 L):',
    desc:'🔵 1 para agua limpia  ⚫ 1 para agua residual  Esto garantiza un lavado continuo, higiénico y sin necesidad de conexiones fijas o plomería.',
    precio:1338750,
    tipo:'Insumo/Dotación',
    ciiu:'G (47) / C (10,14) / S (96)',
    proceso:'Comercialización / Transformación / Operación'
  }),

  producto({
    id:'P092',
    sector:'comercio',
    icono:'💨',
    nombre:'Secador tipo casco Su potencia es de 1000W.',
    desc:'Contiene pedestal y casco. Voluminizá tu cabello.',
    precio:3386627,
    tipo:'Insumo/Dotación',
    ciiu:'G (47) / C (10,14) / S (96)',
    proceso:'Comercialización / Transformación / Operación'
  }),

  producto({
    id:'P093',
    sector:'comercio',
    icono:'✂️',
    nombre:'Máquina corta cabello profesional Tipo : Máquinas cortapelo',
    desc:'•Modelo : GR4  •Inalámbrico : Si  •Potencia nominal : 7 W  •Garantía : 3 meses',
    precio:217592,
    tipo:'Equipo',
    ciiu:'G (47) / C (10,14) / S (96)',
    proceso:'Comercialización / Transformación / Operación'
  }),

  producto({
    id:'P094',
    sector:'comercio',
    icono:'💰',
    nombre:'Esterilizador UV para herramientas La caja de desinfección UV + Ozono es un dispositivo compacto diseñado para eliminar',
    desc:'Esterilizador UV + Ozono para herramientas de peluquería. Elimina bacterias y virus. Compacto y silencioso. Para cumplir normas sanitarias en establecimientos de belleza.',
    precio:2623950,
    tipo:'Insumo/Dotación',
    ciiu:'G (47) / C (10,14) / S (96)',
    proceso:'Comercialización / Transformación / Operación'
  }),

  producto({
    id:'P095',
    sector:'comercio',
    icono:'💇',
    nombre:'Toalla/Capas de barbería (dotación)',
    desc:'Set de toallas y capas para barbería, 10 unidades. Material resistente al lavado. Protegen al cliente durante el servicio. Higiene para establecimientos de belleza.',
    precio:62475,
    tipo:'Insumo/Dotación',
    ciiu:'G (47) / C (10,14) / S (96)',
    proceso:'Comercialización / Transformación / Operación'
  }),

  producto({
    id:'P096',
    sector:'comercio',
    icono:'🪞',
    nombre:'Espejo profesional con iluminación Espejo de tocador Hollywood M MIVONDA con 18 bombillas, espejo de maquillaje grande i',
    desc:'Espejo de tocador con 18 bombillas LED. Tres modos de iluminación. Puerto USB de carga. Para salones de belleza y maquillaje profesional.',
    precio:1227709,
    tipo:'Equipo',
    ciiu:'G (47) / C (10,14) / S (96)',
    proceso:'Comercialización / Transformación / Operación'
  }),

  producto({
    id:'P097',
    sector:'comercio',
    icono:'💇',
    nombre:'Carro auxiliar de peluquería Alto',
    desc:'82 cm Ancho 32 cm Cantidad de cajones 4 Color Negro Fondo 35 cm Material Plástico',
    precio:712036,
    tipo:'Mobiliario',
    ciiu:'G (47) / C (10,14) / S (96)',
    proceso:'Comercialización / Transformación / Operación'
  }),

  producto({
    id:'P098',
    sector:'comercio',
    icono:'🩹',
    nombre:'Botiquín industrial (taller) Estuche plástico mini cuadrado, medidas 21,5 cm x 11.5 cm x 6 cm compuesto por 13 elementos',
    desc:'Botiquín de primeros auxilios industrial. Incluye vendas, antisépticos, curitas y guantes. Cumple normas de seguridad industrial. Estuche plástico compacto.',
    precio:83716,
    tipo:'Insumo/Dotación',
    ciiu:'G (47) / C (10,14) / S (96)',
    proceso:'Comercialización / Transformación / Operación'
  }),

  producto({
    id:'P099',
    sector:'comercio',
    icono:'🧯',
    nombre:'Extintor multipropósito (taller) abc- 20 libras rdl',
    desc:'Extintor multipropósito ABC 20 libras. Apaga fuegos tipo A, B y C. Certificado con manómetro. Obligatorio en talleres, cocinas y bodegas.',
    precio:196172,
    tipo:'Insumo/Dotación',
    ciiu:'G (47) / C (10,14) / S (96)',
    proceso:'Comercialización / Transformación / Operación'
  }),

  producto({
    id:'P366',
    sector:'comercio',
    icono:'🗄️',
    nombre:'Estantería metálica de exhibición Tipo',
    desc:'Estanterías metálica Ancho 90 cm Alto 176 cm Profundidad 40 cm Dimensiones 90 x 176 x 40 cm Peso 15.888 kg Tipo de estantería Estante Material Metal Color Gris Incluye Piezas de Union Cantidad de repisas 5',
    precio:333200,
    tipo:'Mobiliario',
    ciiu:'G (47) / C (10,14) / S (96)',
    proceso:'Comercialización / Transformación / Operación'
  }),

  producto({
    id:'P367',
    sector:'comercio',
    icono:'🗄️',
    nombre:'Góndolas para tienda Estructura: Metálica reforzada, de alta resistencia.',
    desc:'Niveles de Exhibición:  4 repisas metálicas  Ajustables en altura mediante sistema de ranura tipo enganche  Acabado: Pintura electrostática horneada, anticorrosiva y fácil de limpiar.  Base Estable: Repisa inferior amplia con patas metálicas para mayor estabilidad del módulo.  Dimensiones:  Alto: 180 cm  Ancho: 100 cm  Fondo: 46 cm',
    precio:535500,
    tipo:'Mobiliario',
    ciiu:'G (47) / C (10,14) / S (96)',
    proceso:'Comercialización / Transformación / Operación'
  }),

  producto({
    id:'P368',
    sector:'comercio',
    icono:'❄️',
    nombre:'Nevera exhibidora vertical Tipo Nevera congelador superior o arriba Referencia del Producto en el Certificado/Empaque En',
    desc:'Tipo de panel de control Digital Tipo de  refrigerador - congelador Nevera Capacidad 440 litros Capacidad de refrigeración 440 litros Capacidad del congelador 0 litros',
    precio:7412660,
    tipo:'Insumo/Dotación',
    ciiu:'G (47) / C (10,14) / S (96)',
    proceso:'Comercialización / Transformación / Operación'
  }),

  producto({
    id:'P369',
    sector:'comercio',
    icono:'❄️',
    nombre:'Congelador tipo cofre Tipo Congeladores Referencia del Producto en el Certificado/Empaque CI-299TV Ancho 83.7 cm Alto 11',
    desc:'Blanco Número de gavetas 4 Cantidad de puertas 2 Consumo energético 99 kWh/mes Posición del congelador Freezer horizontal Año de lanzamiento 2025 Voltaje 115 V Garantía detalle 1 año general y 3 años en el compresor',
    precio:4750466,
    tipo:'Equipo',
    ciiu:'G (47) / C (10,14) / S (96)',
    proceso:'Comercialización / Transformación / Operación'
  }),

  producto({
    id:'P370',
    sector:'comercio',
    icono:'⚖️',
    nombre:'Balanza digital con torre Unidad de medida: Kg / lb., División mínima: 5 g (0.18 oz)., Pesada mínima: 100 g (3.5 oz)., M',
    desc:'Balanza digital con torre y pantalla visible para cliente y vendedor. Capacidad 30 kg. Ideal para tiendas, plazas de mercado y empacadoras. Precisa y fácil de calibrar.',
    precio:214200,
    tipo:'Insumo/Dotación',
    ciiu:'G (47) / C (10,14) / S (96)',
    proceso:'Comercialización / Transformación / Operación'
  }),

  producto({
    id:'P371',
    sector:'comercio',
    icono:'💰',
    nombre:'Caja registradora / POS odo en Uno Caja Registradora Profesional para Pequeñas Empresas, Paquete POS Incluye: Monitor Tá',
    desc:'Sistema POS todo en uno. Incluye monitor táctil, cajón de dinero, escáner e impresora térmica. Administra ventas, inventario y cierre de caja.',
    precio:5256468,
    tipo:'Insumo/Dotación',
    ciiu:'G (47) / C (10,14) / S (96)',
    proceso:'Comercialización / Transformación / Operación'
  }),

  producto({
    id:'P372',
    sector:'comercio',
    icono:'📱',
    nombre:'Lector de código de barras escaners',
    desc:'Lector de código de barras USB o inalámbrico. Lee códigos 1D y 2D. Compatible con sistemas POS e inventario. Para tiendas y bodegas.',
    precio:101150,
    tipo:'Insumo/Dotación',
    ciiu:'G (47) / C (10,14) / S (96)',
    proceso:'Comercialización / Transformación / Operación'
  }),

  producto({
    id:'P373',
    sector:'comercio',
    icono:'🖨️',
    nombre:'Impresora térmica de recibos Tipo',
    desc:'Impresoras Referencia del Producto en el Certificado/Empaque 7709281325989 Ancho 11 cm Alto 10 cm Largo 15 cm Tipo de impresora Impresora Tipo de impresión Láser monocromática Color Negra Cuenta con Wifi No Calidad de impresión Alta resolución Compatibilidad Windows, Linux, Android y macOS',
    precio:214200,
    tipo:'Equipo',
    ciiu:'G (47) / C (10,14) / S (96)',
    proceso:'Comercialización / Transformación / Operación'
  }),

  producto({
    id:'P374',
    sector:'comercio',
    icono:'🖨️',
    nombre:'Impresora de etiquetas MÉTODO DE IMPRESIÓN',
    desc:'Térmico directo, Térmico por transferencia ANCHO DE IMPESIÓN 104MM VELOCIIDAD DE IMPESIÓN 127MM/S INTERFAZ Ethernet, USB COMPATIBILIDAD Android, Windows, Linux, Mac OSEMULACIÓN DPL, EPL, TSPL, ZPL',
    precio:416500,
    tipo:'Equipo',
    ciiu:'G (47) / C (10,14) / S (96)',
    proceso:'Comercialización / Transformación / Operación'
  }),

  producto({
    id:'P375',
    sector:'comercio',
    icono:'📦',
    nombre:'Selladora térmica de bolsas Longitud de sellado: 30cm. ¡Sella bolsas de tamaño considerable para satisfacer todas tus ne',
    desc:'Ancho de sellado: 2mm, el tamaño perfecto para un sellado seguro y confiable. Tiempo de calentamiento ultrarrápido: entre 0.2 y 1.3 segundos, para que puedas trabajar eficientemente. Peso ligero de solo 2.9 kg, lo que facilita su transporte y manejo.',
    precio:455528,
    tipo:'Insumo/Dotación',
    ciiu:'G (47) / C (10,14) / S (96)',
    proceso:'Comercialización / Transformación / Operación'
  }),

  producto({
    id:'P376',
    sector:'comercio',
    icono:'📦',
    nombre:'Dispensador de film stretch (empaque) Material y Diseño: Dispensador de stretch metálico con núcleo adaptable para bobin',
    desc:'Mango Ergonómico: Mango protegido con espuma para un agarre cómodo y seguro durante la aplicación del film stretch. Base en Aluminio: La base fabricada en aluminio proporciona estabilidad y durabilidad al dispensador. Tensión Ajustable: Cuenta con un sistema de tensión ajustable, permitiendo adaptar la fuerza según las necesidades de envoltura. Peso: 1,6 KG.',
    precio:53550,
    tipo:'Insumo/Dotación',
    ciiu:'G (47) / C (10,14) / S (96)',
    proceso:'Comercialización / Transformación / Operación'
  }),

  producto({
    id:'P377',
    sector:'comercio',
    icono:'🛒',
    nombre:'Carrito de mercado (uso interno) el carro para autoservicio metálico va más allá de las expectativas convencionales. Es',
    desc:'➣ Alto: 99 cm cm ➣ Fondo: 90 cm cm ➣ Colores: zincado ➣ Desarmable: No',
    precio:214200,
    tipo:'Insumo/Dotación',
    ciiu:'G (47) / C (10,14) / S (96)',
    proceso:'Comercialización / Transformación / Operación'
  }),

  producto({
    id:'P378',
    sector:'comercio',
    icono:'📦',
    nombre:'Canastillas plásticas para surtido Canastilla plastica fondo rombo pared rombo 60x40x25',
    desc:'Canastillas plásticas rígidas para almacenamiento y transporte. Apilables. Ideales para frutas, verduras, panadería, carnicería y logística.',
    precio:41650,
    tipo:'Insumo/Dotación',
    ciiu:'G (47) / C (10,14) / S (96)',
    proceso:'Comercialización / Transformación / Operación'
  }),

  producto({
    id:'P379',
    sector:'comercio',
    icono:'📦',
    nombre:'Contenedores grado alimentario Contenedor Portátil Scepter de Grado Alimenticio ? 19 L con Boquilla Reversible',
    desc:'Contenedores portátiles de grado alimentario. Material libre de BPA. Herméticos y apilables. Para almacenamiento de líquidos y alimentos en restaurantes.',
    precio:65450,
    tipo:'Insumo/Dotación',
    ciiu:'G (47) / C (10,14) / S (96)',
    proceso:'Comercialización / Transformación / Operación'
  }),

  producto({
    id:'P380',
    sector:'comercio',
    icono:'🪑',
    nombre:'Mesa inoxidable de preparación Mesas Acero 90 x 150 x 50 Con Entrepaño',
    desc:'Mesa de preparación en acero inoxidable (90 x 150 x 50 cm) con entrepaño. Resistente a la corrosión. Cumple normas sanitarias.',
    precio:1011500,
    tipo:'Mobiliario',
    ciiu:'G (47) / C (10,14) / S (96)',
    proceso:'Comercialización / Transformación / Operación'
  }),

  producto({
    id:'P381',
    sector:'comercio',
    icono:'🚰',
    nombre:'Lavamanos en acero inoxidable (operación) Grifería institucional kit válvula de pedal con lavamanos de 28x30',
    desc:'Lavamanos en acero inoxidable con grifería institucional de válvula de pedal o palanca. Cumple normas sanitarias. Para cocinas industriales y áreas de manipulación de alimentos.',
    precio:333200,
    tipo:'Insumo/Dotación',
    ciiu:'G (47) / C (10,14) / S (96)',
    proceso:'Comercialización / Transformación / Operación'
  }),

  producto({
    id:'P382',
    sector:'comercio',
    icono:'⚖️',
    nombre:'Gramera/báscula de precisión BASCULA  DIGITAL PARA COCINA CAPACIDAD 5 KG TRUPER, SENSOR DE ALTA PRESICION, PANTALLA LCD,',
    desc:'Báscula digital de precisión para cocina, capacidad 5 kg. Plataforma en acero inoxidable. Función tara. Para panadería y restaurantes.',
    precio:113050,
    tipo:'Insumo/Dotación',
    ciiu:'G (47) / C (10,14) / S (96)',
    proceso:'Comercialización / Transformación / Operación'
  }),

  producto({
    id:'P383',
    sector:'comercio',
    icono:'🔪',
    nombre:'Rebanadora de embutidos Tajadora de carnes frias EXH: Robusta estructura en aluminio anodizado disco de 30 centimetros d',
    desc:'Tajadora de carnes frías y embutidos en acero inoxidable. Hoja ajustable. Para supermercados y plazas de mercado.',
    precio:2973810,
    tipo:'Insumo/Dotación',
    ciiu:'G (47) / C (10,14) / S (96)',
    proceso:'Comercialización / Transformación / Operación'
  }),

  producto({
    id:'P384',
    sector:'comercio',
    icono:'🗄️',
    nombre:'Vitrina mostrador Estructura en Lámina Cold Rolled Calibre 24; Entrepaños en Vidrio 4 mm. con boceleria metálica, Puerta',
    desc:'Vitrina mostrador con vidrio templado y puerta corrediza. Exhibe productos de forma elegante. Para joyerías, tiendas de accesorios y puntos de venta.',
    precio:809200,
    tipo:'Mobiliario',
    ciiu:'G (47) / C (10,14) / S (96)',
    proceso:'Comercialización / Transformación / Operación'
  }),

  producto({
    id:'P385',
    sector:'comercio',
    icono:'🍳',
    nombre:'l Licuadora Industrial acero inoxidable 25 litros',
    desc:'Licuadora industrial en acero inoxidable de 25 litros. Motor potente para grandes volúmenes. Para juguerías y restaurantes.',
    precio:6015593,
    tipo:'Insumo/Dotación',
    ciiu:'G (47) / C (10,14) / S (96)',
    proceso:'Comercialización / Transformación / Operación'
  }),

  producto({
    id:'P386',
    sector:'comercio',
    icono:'🍳',
    nombre:'Batidora/amasadora industrial 10 litros Capacidad max en harina3 libras',
    desc:'Velocidades2 Voltaje110V 60Hz Potencia370W AccesoriosGancho, Paleta y globo Dimensiones76X43X51cm (alto, ancho y fondo)',
    precio:6083566,
    tipo:'Insumo/Dotación',
    ciiu:'G (47) / C (10,14) / S (96)',
    proceso:'Comercialización / Transformación / Operación'
  }),

  producto({
    id:'P387',
    sector:'comercio',
    icono:'🍳',
    nombre:'Horno semindustrial de convección Horno de convección eléctrico a 220V con espacio para 4 bandejas. Exterior e interior',
    desc:'Horno de convección eléctrico a 220V para uso semindustrial. Calor uniforme. Para panadería, pastelería y restaurantes pequeños.',
    precio:3332000,
    tipo:'Equipo',
    ciiu:'G (47) / C (10,14) / S (96)',
    proceso:'Comercialización / Transformación / Operación'
  }),

  producto({
    id:'P388',
    sector:'comercio',
    icono:'🏭',
    nombre:'Fermentadora/armario de fermentación Camara de fermentación Unox 16 Bandejas 60×40cm – Manual',
    desc:'Armario de fermentación de 16 bandejas. Control preciso de temperatura y humedad. Fermentación uniforme para mayor calidad del pan.',
    precio:4165000,
    tipo:'Insumo/Dotación',
    ciiu:'G (47) / C (10,14) / S (96)',
    proceso:'Comercialización / Transformación / Operación'
  }),

  producto({
    id:'P389',
    sector:'comercio',
    icono:'🍳',
    nombre:'Molino de granos Tipo',
    desc:'Molinos de cocina Año y mes de fabricación Visible en la etiqueta de los productos sujetos a la resolución 1440 del 2021. Referencia del Producto en el Certificado/Empaque L14200 Ancho 14.5 cm Alto 33 cm Largo 15.7 cm Material del utensilio Metal Color Plateado Número de piezas 11',
    precio:499800,
    tipo:'Insumo/Dotación',
    ciiu:'G (47) / C (10,14) / S (96)',
    proceso:'Comercialización / Transformación / Operación'
  }),

  producto({
    id:'P390',
    sector:'comercio',
    icono:'📦',
    nombre:'Selladora al vacío Tipo',
    desc:'Electrodomésticos de cocina modernos Ancho 43.18 cm Alto 25.4 cm Largo 52.5 cm Material PLASTICO Color Negro Potencia nominal 125 W Voltaje 117 V',
    precio:220150,
    tipo:'Insumo/Dotación',
    ciiu:'G (47) / C (10,14) / S (96)',
    proceso:'Comercialización / Transformación / Operación'
  }),

  producto({
    id:'P391',
    sector:'comercio',
    icono:'📦',
    nombre:'Empacadora semiautomática',
    desc:'Empacadora semiautomática para sellado de productos en bolsas. Aumenta la velocidad de empaque. Para procesadoras de alimentos y pequeñas industrias.',
    precio:5421914,
    tipo:'Insumo/Dotación',
    ciiu:'G (47) / C (10,14) / S (96)',
    proceso:'Comercialización / Transformación / Operación'
  }),

  producto({
    id:'P392',
    sector:'comercio',
    icono:'❄️',
    nombre:'Refrigerador productivo Refrigerador vertical de dos puertas. Marco construcción exterior e interior en acero inoxidable',
    desc:'Refrigerador vertical de dos puertas para uso productivo. Gran capacidad, temperatura regulable. Para restaurantes, panaderías y tiendas.',
    precio:2618000,
    tipo:'Equipo',
    ciiu:'G (47) / C (10,14) / S (96)',
    proceso:'Comercialización / Transformación / Operación'
  }),

  producto({
    id:'P393',
    sector:'comercio',
    icono:'🌬️',
    nombre:'extractor de olores Acabado de filtros de grasa Aluminio',
    desc:'Aluminio Alarma de cambio de filtros No No Apagado programable No No Capacidad de Extracción (m3/hr) 250m3/hr 120m3/hr Color Inoxidable Inoxidable Display No No Filtro de carbón activado Si No Indicador de encendido Si No',
    precio:333200,
    tipo:'Equipo',
    ciiu:'G (47) / C (10,14) / S (96)',
    proceso:'Comercialización / Transformación / Operación'
  }),

  producto({
    id:'P394',
    sector:'comercio',
    icono:'🌬️',
    nombre:'Campana extractora Campana CRIP08-60N Inoxidable 3 Velocidades Negra',
    desc:'Opción de ser extractora (accesorio no incluido). • Caudal de aspiración de 210 m³/h. • Motor de 3 velocidades de operación, con controles frontales independientes. • 1 bombillo de 25W. Interruptor independiente para la luz. • Rejilla atrapagrasa removible y lavable. • Filtro de carbón activado para purificar los olores de la cocción.',
    precio:571200,
    tipo:'Equipo',
    ciiu:'G (47) / C (10,14) / S (96)',
    proceso:'Comercialización / Transformación / Operación'
  }),

  producto({
    id:'P395',
    sector:'comercio',
    icono:'🍳',
    nombre:'Freidora industrial Equipo fabricado totalmente en acero.',
    desc:'– Pozuelo en acero 430 – Tres quemadores en hierro fundido indeformables de alto rendimiento – Sistema de seguridad compuesto por termostato, piloto, termopila y válvula Unitrol. – Rodachinas de alto tráfico 3″ en poliuretano – Incluye GRATIS dos canastillas de trabajo pesado – Incluye GRATIS rejilla filtro de impurezas – Posee zona fria para mayor vida útil del aceite. – Obtendrás ahorro de aceit',
    precio:809200,
    tipo:'Insumo/Dotación',
    ciiu:'G (47) / C (10,14) / S (96)',
    proceso:'Comercialización / Transformación / Operación'
  }),

  producto({
    id:'P396',
    sector:'comercio',
    icono:'🍳',
    nombre:'Plancha para asados Plancha Para Asar 47 Cm X 25 Cm',
    desc:'Plancha para asados 47 x 25 cm en acero inoxidable. Distribución uniforme del calor. Para restaurantes y negocios de comida rápida.',
    precio:148750,
    tipo:'Insumo/Dotación',
    ciiu:'G (47) / C (10,14) / S (96)',
    proceso:'Comercialización / Transformación / Operación'
  }),

  producto({
    id:'P397',
    sector:'comercio',
    icono:'🍽️',
    nombre:'Dispensador de salsas y topping (operación) ste dispensador de salsa comercial puede almacenar 1 tanque de salsa a su gu',
    desc:'Alto: 25 cm Profundo: 18 cm',
    precio:77350,
    tipo:'Insumo/Dotación',
    ciiu:'G (47) / C (10,14) / S (96)',
    proceso:'Comercialización / Transformación / Operación'
  }),

  producto({
    id:'P398',
    sector:'comercio',
    icono:'🍽️',
    nombre:'Set gastronorm (bandejas)',
    desc:'Set de bandejas Gastronorm en acero inoxidable. Medidas estándar. Compatibles con hornos y refrigeradores. Para cocinas profesionales.',
    precio:220150,
    tipo:'Insumo/Dotación',
    ciiu:'G (47) / C (10,14) / S (96)',
    proceso:'Comercialización / Transformación / Operación'
  }),

  producto({
    id:'P399',
    sector:'comercio',
    icono:'🪑',
    nombre:'Carro bandejero CARRO RACK PARA BANDEJA 521*661*1780',
    desc:'Carro rack metálico para bandejas de panadería. Ruedas para desplazamiento en cocina. Permite transportar y almacenar múltiples bandejas.',
    precio:571200,
    tipo:'Mobiliario',
    ciiu:'G (47) / C (10,14) / S (96)',
    proceso:'Comercialización / Transformación / Operación'
  }),

  producto({
    id:'P400',
    sector:'comercio',
    icono:'☕',
    nombre:'Máquina de café semiautomática Potencia',
    desc:'1450 Watts  Voltaje Rango entre 110 V y 120 V  Tipo de Producto Cafetera Expresso  Tipo de Filtro No Necesita  Capacidad 2  Tazas',
    precio:2142000,
    tipo:'Equipo',
    ciiu:'G (47) / C (10,14) / S (96)',
    proceso:'Comercialización / Transformación / Operación'
  }),

  producto({
    id:'P401',
    sector:'comercio',
    icono:'🧵',
    nombre:'Máquina plana industrial (confección) Función: Costura recta gama genérica',
    desc:'Garantía: 06 meses por kit electrónico y 06 meses por descalibraciones mecánicas Tipo de aguja: Cubo delgado DBX1 o Cubo grueso 135X5 Sistema paso a paso Velocidad: Variable desde 500 hasta 4000 rpm Longitud de puntada (cubo delgado a 5 mm o cubo grueso 7 mm) Posicionador de aguja Luz led integrada Motor direct drive incorporado de 550w Devanador incorporado Mueble importado',
    precio:2053557,
    tipo:'Equipo',
    ciiu:'G (47) / C (10,14) / S (96)',
    proceso:'Comercialización / Transformación / Operación'
  }),

  producto({
    id:'P402',
    sector:'comercio',
    icono:'🧵',
    nombre:'Overlock industrial Overlock con costura overlock de seis hilos para telas ligeras y medianas Fácil cambio para diferent',
    desc:'Sistema de lubricación automática Mejorado - mecanismo de barra de aguja cerrado Tensión óptima del hilo Diseño unico Servomotor integrado en la cabeza, control de velocidad continuo El ahorro de energía Ruido bajo Alto rendimiento',
    precio:3354741,
    tipo:'Insumo/Dotación',
    ciiu:'G (47) / C (10,14) / S (96)',
    proceso:'Comercialización / Transformación / Operación'
  }),

  producto({
    id:'P403',
    sector:'comercio',
    icono:'🪑',
    nombre:'Mesa de corte textil 120 x 180 cm Nuestra Mesa de Corte para Tela – Diseño Americano está fabricada para trabajos exigen',
    desc:'La mesa tiene una altura fija de 90 cm, ideal para mantener una postura ergonómica durante el corte, evitando dolores de espalda y fatiga en jornadas largas de trabajo.  Disponible en múltiples medidas, es un producto modular y adaptable a distintos espacios de trabajo. Puedes elegir la variante que mejor se acomode a tu taller desde el menú.',
    precio:1628515,
    tipo:'Mobiliario',
    ciiu:'G (47) / C (10,14) / S (96)',
    proceso:'Comercialización / Transformación / Operación'
  }),

  producto({
    id:'P404',
    sector:'comercio',
    icono:'🧵',
    nombre:'Cortadora vertical de tela Motores',
    desc:'110V, 1ph, 50 / 60Hz 220V, 1ph o 3ph, 50 / 60Hz Estándar: velocidad única Opcional: velocidad dual, velocidad variable Caballo de fuerza 2hp, 1ph a 4,000 RPM 2hp, 3ph a 4,000 RPM Peso 41 libras (18.5kg) Cuchillas Estándar: acero al carbono Opcional: acero de alta velocidad, recubierto de PTFE, borde ondulado, ranura ondulada, punta en ángulo Cinturones Estándar: grano medio Opcional: fino, grueso,',
    precio:2895924,
    tipo:'Insumo/Dotación',
    ciiu:'G (47) / C (10,14) / S (96)',
    proceso:'Comercialización / Transformación / Operación'
  }),

  producto({
    id:'P405',
    sector:'comercio',
    icono:'🧵',
    nombre:'Plancha industrial Ancho 6 Alto 4 Largo 4 Especificaciones Tipo Planchas para ropa Tipo plancha Calor Material Acero Col',
    desc:'Cuenta con indicador de llenado No Cuenta con control de temperatura Si Cuenta con antiadherente Si Potencia 110 V Cuenta con apagado automático No',
    precio:814258,
    tipo:'Insumo/Dotación',
    ciiu:'G (47) / C (10,14) / S (96)',
    proceso:'Comercialización / Transformación / Operación'
  }),

  producto({
    id:'P406',
    sector:'comercio',
    icono:'💇',
    nombre:'Silla hidráulica profesional (peluquería) Silla de Barbería y Peluquería Reclinable Hidráulica y Giratoria Stetik Negro',
    desc:'Silla hidráulica profesional para peluquería y barbería. Giratoria y reclinable. Tapizado en cuero sintético. Comodidad al cliente y facilidad al estilista.',
    precio:690200,
    tipo:'Mobiliario',
    ciiu:'G (47) / C (10,14) / S (96)',
    proceso:'Comercialización / Transformación / Operación'
  }),

  producto({
    id:'P407',
    sector:'comercio',
    icono:'🚿',
    nombre:'Lavacabezas portátil Cuenta con dos contenedores de 2 galones cada uno (≈7.5 L):',
    desc:'🔵 1 para agua limpia  ⚫ 1 para agua residual  Esto garantiza un lavado continuo, higiénico y sin necesidad de conexiones fijas o plomería.',
    precio:220150,
    tipo:'Insumo/Dotación',
    ciiu:'G (47) / C (10,14) / S (96)',
    proceso:'Comercialización / Transformación / Operación'
  }),

  producto({
    id:'P408',
    sector:'comercio',
    icono:'💨',
    nombre:'Secador tipo casco Su potencia es de 1000W.',
    desc:'Contiene pedestal y casco. Voluminizá tu cabello.',
    precio:452200,
    tipo:'Insumo/Dotación',
    ciiu:'G (47) / C (10,14) / S (96)',
    proceso:'Comercialización / Transformación / Operación'
  }),

  producto({
    id:'P409',
    sector:'comercio',
    icono:'✂️',
    nombre:'Máquina corta cabello profesional Tipo : Máquinas cortapelo',
    desc:'•Modelo : GR4  •Inalámbrico : Si  •Potencia nominal : 7 W  •Garantía : 3 meses',
    precio:214200,
    tipo:'Equipo',
    ciiu:'G (47) / C (10,14) / S (96)',
    proceso:'Comercialización / Transformación / Operación'
  }),

  producto({
    id:'P410',
    sector:'comercio',
    icono:'💰',
    nombre:'Esterilizador UV para herramientas La caja de desinfección UV + Ozono es un dispositivo compacto diseñado para eliminar',
    desc:'Esterilizador UV + Ozono para herramientas de peluquería. Elimina bacterias y virus. Compacto y silencioso. Para cumplir normas sanitarias en establecimientos de belleza.',
    precio:148750,
    tipo:'Insumo/Dotación',
    ciiu:'G (47) / C (10,14) / S (96)',
    proceso:'Comercialización / Transformación / Operación'
  }),

  producto({
    id:'P411',
    sector:'comercio',
    icono:'💇',
    nombre:'Toalla/Capas de barbería (dotación)',
    desc:'Set de toallas y capas para barbería, 10 unidades. Material resistente al lavado. Protegen al cliente durante el servicio. Higiene para establecimientos de belleza.',
    precio:101150,
    tipo:'Insumo/Dotación',
    ciiu:'G (47) / C (10,14) / S (96)',
    proceso:'Comercialización / Transformación / Operación'
  }),

  producto({
    id:'P412',
    sector:'comercio',
    icono:'🪞',
    nombre:'Espejo profesional con iluminación Espejo de tocador Hollywood M MIVONDA con 18 bombillas, espejo de maquillaje grande i',
    desc:'Espejo de tocador con 18 bombillas LED. Tres modos de iluminación. Puerto USB de carga. Para salones de belleza y maquillaje profesional.',
    precio:333200,
    tipo:'Equipo',
    ciiu:'G (47) / C (10,14) / S (96)',
    proceso:'Comercialización / Transformación / Operación'
  }),

  producto({
    id:'P413',
    sector:'comercio',
    icono:'💇',
    nombre:'Carro auxiliar de peluquería Alto',
    desc:'82 cm Ancho 32 cm Cantidad de cajones 4 Color Negro Fondo 35 cm Material Plástico',
    precio:172550,
    tipo:'Mobiliario',
    ciiu:'G (47) / C (10,14) / S (96)',
    proceso:'Comercialización / Transformación / Operación'
  }),

  producto({
    id:'P414',
    sector:'comercio',
    icono:'🩹',
    nombre:'Botiquín industrial (taller) Estuche plástico mini cuadrado, medidas 21,5 cm x 11.5 cm x 6 cm compuesto por 13 elementos',
    desc:'Botiquín de primeros auxilios industrial. Incluye vendas, antisépticos, curitas y guantes. Cumple normas de seguridad industrial. Estuche plástico compacto.',
    precio:77350,
    tipo:'Insumo/Dotación',
    ciiu:'G (47) / C (10,14) / S (96)',
    proceso:'Comercialización / Transformación / Operación'
  }),

  producto({
    id:'P415',
    sector:'comercio',
    icono:'🧯',
    nombre:'Extintor multipropósito (taller) abc- 20 libras rdl',
    desc:'Extintor multipropósito ABC 20 libras. Apaga fuegos tipo A, B y C. Certificado con manómetro. Obligatorio en talleres, cocinas y bodegas.',
    precio:113050,
    tipo:'Insumo/Dotación',
    ciiu:'G (47) / C (10,14) / S (96)',
    proceso:'Comercialización / Transformación / Operación'
  }),

  producto({
    id:'CAT2-069',
    sector:'comercio',
    icono:'🗄️',
    nombre:'Estantería metálica de exhibición Tipo',
    desc:'Estanterías metálica Ancho 90 cm Alto 176 cm Profundidad 40 cm Dimensiones 90 x 176 x 40 cm Peso 15.888 kg Tipo de estantería Estante Material Metal Color Gris Incluye Piezas de Union Cantidad de repisas 5',
    precio:333200,
    tipo:'Mobiliario',
    ciiu:'G (47) / C (10,14) / S (96)',
    proceso:'Comercialización / Transformación / Operación'
  }),

  producto({
    id:'CAT2-070',
    sector:'comercio',
    icono:'🗄️',
    nombre:'Góndolas para tienda Estructura: Metálica reforzada, de alta resistencia.',
    desc:'Niveles de Exhibición:  4 repisas metálicas  Ajustables en altura mediante sistema de ranura tipo enganche  Acabado: Pintura electrostática horneada, anticorrosiva y fácil de limpiar.  Base Estable: Repisa inferior amplia con patas metálicas para mayor estabilidad del módulo.  Dimensiones:  Alto: 180 cm  Ancho: 100 cm  Fondo: 46 cm',
    precio:535500,
    tipo:'Mobiliario',
    ciiu:'G (47) / C (10,14) / S (96)',
    proceso:'Comercialización / Transformación / Operación'
  }),

  producto({
    id:'CAT2-071',
    sector:'comercio',
    icono:'❄️',
    nombre:'Nevera exhibidora vertical Tipo Nevera congelador superior o arriba Referencia del Producto en el Certificado/Empaque En',
    desc:'Tipo de panel de control Digital Tipo de  refrigerador - congelador Nevera Capacidad 440 litros Capacidad de refrigeración 440 litros Capacidad del congelador 0 litros',
    precio:6229126,
    tipo:'Insumo/Dotación',
    ciiu:'G (47) / C (10,14) / S (96)',
    proceso:'Comercialización / Transformación / Operación'
  }),

  producto({
    id:'CAT2-072',
    sector:'comercio',
    icono:'❄️',
    nombre:'Congelador tipo cofre Tipo Congeladores Referencia del Producto en el Certificado/Empaque CI-299TV Ancho 83.7 cm Alto 11',
    desc:'Blanco Número de gavetas 4 Cantidad de puertas 2 Consumo energético 99 kWh/mes Posición del congelador Freezer horizontal Año de lanzamiento 2025 Voltaje 115 V Garantía detalle 1 año general y 3 años en el compresor',
    precio:3991988,
    tipo:'Equipo',
    ciiu:'G (47) / C (10,14) / S (96)',
    proceso:'Comercialización / Transformación / Operación'
  }),

  producto({
    id:'CAT2-073',
    sector:'comercio',
    icono:'⚖️',
    nombre:'Balanza digital con torre Unidad de medida: Kg / lb., División mínima: 5 g (0.18 oz)., Pesada mínima: 100 g (3.5 oz)., M',
    desc:'Balanza digital con torre y pantalla visible para cliente y vendedor. Capacidad 30 kg. Ideal para tiendas, plazas de mercado y empacadoras. Precisa y fácil de calibrar.',
    precio:214200,
    tipo:'Insumo/Dotación',
    ciiu:'G (47) / C (10,14) / S (96)',
    proceso:'Comercialización / Transformación / Operación'
  }),

  producto({
    id:'CAT2-074',
    sector:'comercio',
    icono:'💰',
    nombre:'Caja registradora / POS odo en Uno Caja Registradora Profesional para Pequeñas Empresas, Paquete POS Incluye: Monitor Tá',
    desc:'Sistema POS todo en uno. Incluye monitor táctil, cajón de dinero, escáner e impresora térmica. Administra ventas, inventario y cierre de caja.',
    precio:5256468,
    tipo:'Insumo/Dotación',
    ciiu:'G (47) / C (10,14) / S (96)',
    proceso:'Comercialización / Transformación / Operación'
  }),

  producto({
    id:'CAT2-075',
    sector:'comercio',
    icono:'📱',
    nombre:'Lector de código de barras escaners',
    desc:'Lector de código de barras USB o inalámbrico. Lee códigos 1D y 2D. Compatible con sistemas POS e inventario. Para tiendas y bodegas.',
    precio:101150,
    tipo:'Insumo/Dotación',
    ciiu:'G (47) / C (10,14) / S (96)',
    proceso:'Comercialización / Transformación / Operación'
  }),

  producto({
    id:'CAT2-076',
    sector:'comercio',
    icono:'🖨️',
    nombre:'Impresora térmica de recibos Tipo',
    desc:'Impresoras Referencia del Producto en el Certificado/Empaque 7709281325989 Ancho 11 cm Alto 10 cm Largo 15 cm Tipo de impresora Impresora Tipo de impresión Láser monocromática Color Negra Cuenta con Wifi No Calidad de impresión Alta resolución Compatibilidad Windows, Linux, Android y macOS',
    precio:214200,
    tipo:'Equipo',
    ciiu:'G (47) / C (10,14) / S (96)',
    proceso:'Comercialización / Transformación / Operación'
  }),

  producto({
    id:'CAT2-077',
    sector:'comercio',
    icono:'🖨️',
    nombre:'Impresora de etiquetas MÉTODO DE IMPRESIÓN',
    desc:'Térmico directo, Térmico por transferencia ANCHO DE IMPESIÓN 104MM VELOCIIDAD DE IMPESIÓN 127MM/S INTERFAZ Ethernet, USB COMPATIBILIDAD Android, Windows, Linux, Mac OSEMULACIÓN DPL, EPL, TSPL, ZPL',
    precio:416500,
    tipo:'Equipo',
    ciiu:'G (47) / C (10,14) / S (96)',
    proceso:'Comercialización / Transformación / Operación'
  }),

  producto({
    id:'CAT2-078',
    sector:'comercio',
    icono:'📦',
    nombre:'Selladora térmica de bolsas Longitud de sellado: 30cm. ¡Sella bolsas de tamaño considerable para satisfacer todas tus ne',
    desc:'Ancho de sellado: 2mm, el tamaño perfecto para un sellado seguro y confiable. Tiempo de calentamiento ultrarrápido: entre 0.2 y 1.3 segundos, para que puedas trabajar eficientemente. Peso ligero de solo 2.9 kg, lo que facilita su transporte y manejo.',
    precio:382797,
    tipo:'Insumo/Dotación',
    ciiu:'G (47) / C (10,14) / S (96)',
    proceso:'Comercialización / Transformación / Operación'
  }),

  producto({
    id:'CAT2-079',
    sector:'comercio',
    icono:'📦',
    nombre:'Dispensador de film stretch (empaque) Material y Diseño: Dispensador de stretch metálico con núcleo adaptable para bobin',
    desc:'Mango Ergonómico: Mango protegido con espuma para un agarre cómodo y seguro durante la aplicación del film stretch. Base en Aluminio: La base fabricada en aluminio proporciona estabilidad y durabilidad al dispensador. Tensión Ajustable: Cuenta con un sistema de tensión ajustable, permitiendo adaptar la fuerza según las necesidades de envoltura. Peso: 1,6 KG.',
    precio:53550,
    tipo:'Insumo/Dotación',
    ciiu:'G (47) / C (10,14) / S (96)',
    proceso:'Comercialización / Transformación / Operación'
  }),

  producto({
    id:'CAT2-080',
    sector:'comercio',
    icono:'🛒',
    nombre:'Carrito de mercado (uso interno) el carro para autoservicio metálico va más allá de las expectativas convencionales. Es',
    desc:'➣ Alto: 99 cm cm ➣ Fondo: 90 cm cm ➣ Colores: zincado ➣ Desarmable: No',
    precio:214200,
    tipo:'Insumo/Dotación',
    ciiu:'G (47) / C (10,14) / S (96)',
    proceso:'Comercialización / Transformación / Operación'
  }),

  producto({
    id:'CAT2-081',
    sector:'comercio',
    icono:'📦',
    nombre:'Canastillas plásticas para surtido Canastilla plastica fondo rombo pared rombo 60x40x25',
    desc:'Canastillas plásticas rígidas para almacenamiento y transporte. Apilables. Ideales para frutas, verduras, panadería, carnicería y logística.',
    precio:41650,
    tipo:'Insumo/Dotación',
    ciiu:'G (47) / C (10,14) / S (96)',
    proceso:'Comercialización / Transformación / Operación'
  }),

  producto({
    id:'CAT2-082',
    sector:'comercio',
    icono:'📦',
    nombre:'Contenedores grado alimentario Contenedor Portátil Scepter de Grado Alimenticio ? 19 L con Boquilla Reversible',
    desc:'Contenedores portátiles de grado alimentario. Material libre de BPA. Herméticos y apilables. Para almacenamiento de líquidos y alimentos en restaurantes.',
    precio:65450,
    tipo:'Insumo/Dotación',
    ciiu:'G (47) / C (10,14) / S (96)',
    proceso:'Comercialización / Transformación / Operación'
  }),

  producto({
    id:'CAT2-083',
    sector:'comercio',
    icono:'🪑',
    nombre:'Mesa inoxidable de preparación Mesas Acero 90 x 150 x 50 Con Entrepaño',
    desc:'Mesa de preparación en acero inoxidable (90 x 150 x 50 cm) con entrepaño. Resistente a la corrosión. Cumple normas sanitarias.',
    precio:1011500,
    tipo:'Mobiliario',
    ciiu:'G (47) / C (10,14) / S (96)',
    proceso:'Comercialización / Transformación / Operación'
  }),

  producto({
    id:'CAT2-084',
    sector:'comercio',
    icono:'🚰',
    nombre:'Lavamanos en acero inoxidable (operación) Grifería institucional kit válvula de pedal con lavamanos de 28x30',
    desc:'Lavamanos en acero inoxidable con grifería institucional de válvula de pedal o palanca. Cumple normas sanitarias. Para cocinas industriales y áreas de manipulación de alimentos.',
    precio:333200,
    tipo:'Insumo/Dotación',
    ciiu:'G (47) / C (10,14) / S (96)',
    proceso:'Comercialización / Transformación / Operación'
  }),

  producto({
    id:'CAT2-085',
    sector:'comercio',
    icono:'⚖️',
    nombre:'Gramera/báscula de precisión BASCULA  DIGITAL PARA COCINA CAPACIDAD 5 KG TRUPER, SENSOR DE ALTA PRESICION, PANTALLA LCD,',
    desc:'Báscula digital de precisión para cocina, capacidad 5 kg. Plataforma en acero inoxidable. Función tara. Para panadería y restaurantes.',
    precio:113050,
    tipo:'Insumo/Dotación',
    ciiu:'G (47) / C (10,14) / S (96)',
    proceso:'Comercialización / Transformación / Operación'
  }),

  producto({
    id:'CAT2-086',
    sector:'comercio',
    icono:'🔪',
    nombre:'Rebanadora de embutidos Tajadora de carnes frias EXH: Robusta estructura en aluminio anodizado disco de 30 centimetros d',
    desc:'Tajadora de carnes frías y embutidos en acero inoxidable. Hoja ajustable. Para supermercados y plazas de mercado.',
    precio:2499000,
    tipo:'Insumo/Dotación',
    ciiu:'G (47) / C (10,14) / S (96)',
    proceso:'Comercialización / Transformación / Operación'
  }),

  producto({
    id:'CAT2-087',
    sector:'comercio',
    icono:'🗄️',
    nombre:'Vitrina mostrador Estructura en Lámina Cold Rolled Calibre 24; Entrepaños en Vidrio 4 mm. con boceleria metálica, Puerta',
    desc:'Vitrina mostrador con vidrio templado y puerta corrediza. Exhibe productos de forma elegante. Para joyerías, tiendas de accesorios y puntos de venta.',
    precio:809200,
    tipo:'Mobiliario',
    ciiu:'G (47) / C (10,14) / S (96)',
    proceso:'Comercialización / Transformación / Operación'
  }),

  producto({
    id:'CAT2-088',
    sector:'comercio',
    icono:'🍳',
    nombre:'l Licuadora Industrial acero inoxidable 25 litros',
    desc:'Licuadora industrial en acero inoxidable de 25 litros. Motor potente para grandes volúmenes. Para juguerías y restaurantes.',
    precio:5055120,
    tipo:'Insumo/Dotación',
    ciiu:'G (47) / C (10,14) / S (96)',
    proceso:'Comercialización / Transformación / Operación'
  }),

  producto({
    id:'CAT2-089',
    sector:'comercio',
    icono:'🍳',
    nombre:'Batidora/amasadora industrial 10 litros Capacidad max en harina3 libras',
    desc:'Velocidades2 Voltaje110V 60Hz Potencia370W AccesoriosGancho, Paleta y globo Dimensiones76X43X51cm (alto, ancho y fondo)',
    precio:5112240,
    tipo:'Insumo/Dotación',
    ciiu:'G (47) / C (10,14) / S (96)',
    proceso:'Comercialización / Transformación / Operación'
  }),

  producto({
    id:'CAT2-090',
    sector:'comercio',
    icono:'🍳',
    nombre:'Horno semindustrial de convección Horno de convección eléctrico a 220V con espacio para 4 bandejas. Exterior e interior',
    desc:'Horno de convección eléctrico a 220V para uso semindustrial. Calor uniforme. Para panadería, pastelería y restaurantes pequeños.',
    precio:3332000,
    tipo:'Equipo',
    ciiu:'G (47) / C (10,14) / S (96)',
    proceso:'Comercialización / Transformación / Operación'
  }),

  producto({
    id:'CAT2-091',
    sector:'comercio',
    icono:'🏭',
    nombre:'Fermentadora/armario de fermentación Camara de fermentación Unox 16 Bandejas 60×40cm – Manual',
    desc:'Armario de fermentación de 16 bandejas. Control preciso de temperatura y humedad. Fermentación uniforme para mayor calidad del pan.',
    precio:4165000,
    tipo:'Insumo/Dotación',
    ciiu:'G (47) / C (10,14) / S (96)',
    proceso:'Comercialización / Transformación / Operación'
  }),

  producto({
    id:'CAT2-092',
    sector:'comercio',
    icono:'🍳',
    nombre:'Molino de granos Tipo',
    desc:'Molinos de cocina Año y mes de fabricación Visible en la etiqueta de los productos sujetos a la resolución 1440 del 2021. Referencia del Producto en el Certificado/Empaque L14200 Ancho 14.5 cm Alto 33 cm Largo 15.7 cm Material del utensilio Metal Color Plateado Número de piezas 11',
    precio:499800,
    tipo:'Insumo/Dotación',
    ciiu:'G (47) / C (10,14) / S (96)',
    proceso:'Comercialización / Transformación / Operación'
  }),

  producto({
    id:'CAT2-093',
    sector:'comercio',
    icono:'📦',
    nombre:'Selladora al vacío Tipo',
    desc:'Electrodomésticos de cocina modernos Ancho 43.18 cm Alto 25.4 cm Largo 52.5 cm Material PLASTICO Color Negro Potencia nominal 125 W Voltaje 117 V',
    precio:220150,
    tipo:'Insumo/Dotación',
    ciiu:'G (47) / C (10,14) / S (96)',
    proceso:'Comercialización / Transformación / Operación'
  }),

  producto({
    id:'CAT2-094',
    sector:'comercio',
    icono:'📦',
    nombre:'Empacadora semiautomática',
    desc:'Empacadora semiautomática para sellado de productos en bolsas. Aumenta la velocidad de empaque. Para procesadoras de alimentos y pequeñas industrias.',
    precio:4556230,
    tipo:'Insumo/Dotación',
    ciiu:'G (47) / C (10,14) / S (96)',
    proceso:'Comercialización / Transformación / Operación'
  }),

  producto({
    id:'CAT2-095',
    sector:'comercio',
    icono:'❄️',
    nombre:'Refrigerador productivo Refrigerador vertical de dos puertas. Marco construcción exterior e interior en acero inoxidable',
    desc:'Refrigerador vertical de dos puertas para uso productivo. Gran capacidad, temperatura regulable. Para restaurantes, panaderías y tiendas.',
    precio:2618000,
    tipo:'Equipo',
    ciiu:'G (47) / C (10,14) / S (96)',
    proceso:'Comercialización / Transformación / Operación'
  }),

  producto({
    id:'CAT2-096',
    sector:'comercio',
    icono:'🌬️',
    nombre:'extractor de olores Acabado de filtros de grasa Aluminio',
    desc:'Aluminio Alarma de cambio de filtros No No Apagado programable No No Capacidad de Extracción (m3/hr) 250m3/hr 120m3/hr Color Inoxidable Inoxidable Display No No Filtro de carbón activado Si No Indicador de encendido Si No',
    precio:333200,
    tipo:'Equipo',
    ciiu:'G (47) / C (10,14) / S (96)',
    proceso:'Comercialización / Transformación / Operación'
  }),

  producto({
    id:'CAT2-097',
    sector:'comercio',
    icono:'🌬️',
    nombre:'Campana extractora Campana CRIP08-60N Inoxidable 3 Velocidades Negra',
    desc:'Opción de ser extractora (accesorio no incluido). • Caudal de aspiración de 210 m³/h. • Motor de 3 velocidades de operación, con controles frontales independientes. • 1 bombillo de 25W. Interruptor independiente para la luz. • Rejilla atrapagrasa removible y lavable. • Filtro de carbón activado para purificar los olores de la cocción.',
    precio:571200,
    tipo:'Equipo',
    ciiu:'G (47) / C (10,14) / S (96)',
    proceso:'Comercialización / Transformación / Operación'
  }),

  producto({
    id:'CAT2-098',
    sector:'comercio',
    icono:'🍳',
    nombre:'Freidora industrial Equipo fabricado totalmente en acero.',
    desc:'– Pozuelo en acero 430 – Tres quemadores en hierro fundido indeformables de alto rendimiento – Sistema de seguridad compuesto por termostato, piloto, termopila y válvula Unitrol. – Rodachinas de alto tráfico 3″ en poliuretano – Incluye GRATIS dos canastillas de trabajo pesado – Incluye GRATIS rejilla filtro de impurezas – Posee zona fria para mayor vida útil del aceite. – Obtendrás ahorro de aceit',
    precio:809200,
    tipo:'Insumo/Dotación',
    ciiu:'G (47) / C (10,14) / S (96)',
    proceso:'Comercialización / Transformación / Operación'
  }),

  producto({
    id:'CAT2-099',
    sector:'comercio',
    icono:'🍳',
    nombre:'Plancha para asados Plancha Para Asar 47 Cm X 25 Cm',
    desc:'Plancha para asados 47 x 25 cm en acero inoxidable. Distribución uniforme del calor. Para restaurantes y negocios de comida rápida.',
    precio:148750,
    tipo:'Insumo/Dotación',
    ciiu:'G (47) / C (10,14) / S (96)',
    proceso:'Comercialización / Transformación / Operación'
  }),

  producto({
    id:'CAT2-100',
    sector:'comercio',
    icono:'🍽️',
    nombre:'Dispensador de salsas y topping (operación) ste dispensador de salsa comercial puede almacenar 1 tanque de salsa a su gu',
    desc:'Alto: 25 cm Profundo: 18 cm',
    precio:77350,
    tipo:'Insumo/Dotación',
    ciiu:'G (47) / C (10,14) / S (96)',
    proceso:'Comercialización / Transformación / Operación'
  }),

  producto({
    id:'CAT2-101',
    sector:'comercio',
    icono:'🍽️',
    nombre:'Set gastronorm (bandejas)',
    desc:'Set de bandejas Gastronorm en acero inoxidable. Medidas estándar. Compatibles con hornos y refrigeradores. Para cocinas profesionales.',
    precio:220150,
    tipo:'Insumo/Dotación',
    ciiu:'G (47) / C (10,14) / S (96)',
    proceso:'Comercialización / Transformación / Operación'
  }),

  producto({
    id:'CAT2-102',
    sector:'comercio',
    icono:'🪑',
    nombre:'Carro bandejero CARRO RACK PARA BANDEJA 521*661*1780',
    desc:'Carro rack metálico para bandejas de panadería. Ruedas para desplazamiento en cocina. Permite transportar y almacenar múltiples bandejas.',
    precio:571200,
    tipo:'Mobiliario',
    ciiu:'G (47) / C (10,14) / S (96)',
    proceso:'Comercialización / Transformación / Operación'
  }),

  producto({
    id:'CAT2-103',
    sector:'comercio',
    icono:'☕',
    nombre:'Máquina de café semiautomática Potencia',
    desc:'1450 Watts  Voltaje Rango entre 110 V y 120 V  Tipo de Producto Cafetera Expresso  Tipo de Filtro No Necesita  Capacidad 2  Tazas',
    precio:2142000,
    tipo:'Equipo',
    ciiu:'G (47) / C (10,14) / S (96)',
    proceso:'Comercialización / Transformación / Operación'
  }),

  producto({
    id:'CAT2-104',
    sector:'comercio',
    icono:'🧵',
    nombre:'Máquina plana industrial (confección) Función: Costura recta gama genérica',
    desc:'Garantía: 06 meses por kit electrónico y 06 meses por descalibraciones mecánicas Tipo de aguja: Cubo delgado DBX1 o Cubo grueso 135X5 Sistema paso a paso Velocidad: Variable desde 500 hasta 4000 rpm Longitud de puntada (cubo delgado a 5 mm o cubo grueso 7 mm) Posicionador de aguja Luz led integrada Motor direct drive incorporado de 550w Devanador incorporado Mueble importado',
    precio:1725678,
    tipo:'Equipo',
    ciiu:'G (47) / C (10,14) / S (96)',
    proceso:'Comercialización / Transformación / Operación'
  }),

  producto({
    id:'CAT2-105',
    sector:'comercio',
    icono:'🧵',
    nombre:'Overlock industrial Overlock con costura overlock de seis hilos para telas ligeras y medianas Fácil cambio para diferent',
    desc:'Sistema de lubricación automática Mejorado - mecanismo de barra de aguja cerrado Tensión óptima del hilo Diseño unico Servomotor integrado en la cabeza, control de velocidad continuo El ahorro de energía Ruido bajo Alto rendimiento',
    precio:2819110,
    tipo:'Insumo/Dotación',
    ciiu:'G (47) / C (10,14) / S (96)',
    proceso:'Comercialización / Transformación / Operación'
  }),

  producto({
    id:'CAT2-106',
    sector:'comercio',
    icono:'🪑',
    nombre:'Mesa de corte textil 120 x 180 cm Nuestra Mesa de Corte para Tela – Diseño Americano está fabricada para trabajos exigen',
    desc:'La mesa tiene una altura fija de 90 cm, ideal para mantener una postura ergonómica durante el corte, evitando dolores de espalda y fatiga en jornadas largas de trabajo.  Disponible en múltiples medidas, es un producto modular y adaptable a distintos espacios de trabajo. Puedes elegir la variante que mejor se acomode a tu taller desde el menú.',
    precio:1368500,
    tipo:'Mobiliario',
    ciiu:'G (47) / C (10,14) / S (96)',
    proceso:'Comercialización / Transformación / Operación'
  }),

  producto({
    id:'CAT2-107',
    sector:'comercio',
    icono:'🧵',
    nombre:'Cortadora vertical de tela Motores',
    desc:'110V, 1ph, 50 / 60Hz 220V, 1ph o 3ph, 50 / 60Hz Estándar: velocidad única Opcional: velocidad dual, velocidad variable Caballo de fuerza 2hp, 1ph a 4,000 RPM 2hp, 3ph a 4,000 RPM Peso 41 libras (18.5kg) Cuchillas Estándar: acero al carbono Opcional: acero de alta velocidad, recubierto de PTFE, borde ondulado, ranura ondulada, punta en ángulo Cinturones Estándar: grano medio Opcional: fino, grueso,',
    precio:2433550,
    tipo:'Insumo/Dotación',
    ciiu:'G (47) / C (10,14) / S (96)',
    proceso:'Comercialización / Transformación / Operación'
  }),

  producto({
    id:'CAT2-108',
    sector:'comercio',
    icono:'🧵',
    nombre:'Plancha industrial Ancho 6 Alto 4 Largo 4 Especificaciones Tipo Planchas para ropa Tipo plancha Calor Material Acero Col',
    desc:'Cuenta con indicador de llenado No Cuenta con control de temperatura Si Cuenta con antiadherente Si Potencia 110 V Cuenta con apagado automático No',
    precio:684250,
    tipo:'Insumo/Dotación',
    ciiu:'G (47) / C (10,14) / S (96)',
    proceso:'Comercialización / Transformación / Operación'
  }),

  producto({
    id:'CAT2-109',
    sector:'comercio',
    icono:'💇',
    nombre:'Silla hidráulica profesional (peluquería) Silla de Barbería y Peluquería Reclinable Hidráulica y Giratoria Stetik Negro',
    desc:'Silla hidráulica profesional para peluquería y barbería. Giratoria y reclinable. Tapizado en cuero sintético. Comodidad al cliente y facilidad al estilista.',
    precio:690200,
    tipo:'Mobiliario',
    ciiu:'G (47) / C (10,14) / S (96)',
    proceso:'Comercialización / Transformación / Operación'
  }),

  producto({
    id:'CAT2-110',
    sector:'comercio',
    icono:'🚿',
    nombre:'Lavacabezas portátil Cuenta con dos contenedores de 2 galones cada uno (≈7.5 L):',
    desc:'🔵 1 para agua limpia  ⚫ 1 para agua residual  Esto garantiza un lavado continuo, higiénico y sin necesidad de conexiones fijas o plomería.',
    precio:220150,
    tipo:'Insumo/Dotación',
    ciiu:'G (47) / C (10,14) / S (96)',
    proceso:'Comercialización / Transformación / Operación'
  }),

  producto({
    id:'CAT2-111',
    sector:'comercio',
    icono:'💨',
    nombre:'Secador tipo casco Su potencia es de 1000W.',
    desc:'Contiene pedestal y casco. Voluminizá tu cabello.',
    precio:452200,
    tipo:'Insumo/Dotación',
    ciiu:'G (47) / C (10,14) / S (96)',
    proceso:'Comercialización / Transformación / Operación'
  }),

  producto({
    id:'CAT2-112',
    sector:'comercio',
    icono:'✂️',
    nombre:'Máquina corta cabello profesional Tipo : Máquinas cortapelo',
    desc:'•Modelo : GR4  •Inalámbrico : Si  •Potencia nominal : 7 W  •Garantía : 3 meses',
    precio:214200,
    tipo:'Equipo',
    ciiu:'G (47) / C (10,14) / S (96)',
    proceso:'Comercialización / Transformación / Operación'
  }),

  producto({
    id:'CAT2-113',
    sector:'comercio',
    icono:'💰',
    nombre:'Esterilizador UV para herramientas La caja de desinfección UV + Ozono es un dispositivo compacto diseñado para eliminar',
    desc:'Esterilizador UV + Ozono para herramientas de peluquería. Elimina bacterias y virus. Compacto y silencioso. Para cumplir normas sanitarias en establecimientos de belleza.',
    precio:148750,
    tipo:'Insumo/Dotación',
    ciiu:'G (47) / C (10,14) / S (96)',
    proceso:'Comercialización / Transformación / Operación'
  }),

  producto({
    id:'CAT2-114',
    sector:'comercio',
    icono:'💇',
    nombre:'Toalla/Capas de barbería (dotación)',
    desc:'Set de toallas y capas para barbería, 10 unidades. Material resistente al lavado. Protegen al cliente durante el servicio. Higiene para establecimientos de belleza.',
    precio:101150,
    tipo:'Insumo/Dotación',
    ciiu:'G (47) / C (10,14) / S (96)',
    proceso:'Comercialización / Transformación / Operación'
  }),

  producto({
    id:'CAT2-115',
    sector:'comercio',
    icono:'🪞',
    nombre:'Espejo profesional con iluminación Espejo de tocador Hollywood M MIVONDA con 18 bombillas, espejo de maquillaje grande i',
    desc:'Espejo de tocador con 18 bombillas LED. Tres modos de iluminación. Puerto USB de carga. Para salones de belleza y maquillaje profesional.',
    precio:333200,
    tipo:'Equipo',
    ciiu:'G (47) / C (10,14) / S (96)',
    proceso:'Comercialización / Transformación / Operación'
  }),

  producto({
    id:'CAT2-116',
    sector:'comercio',
    icono:'💇',
    nombre:'Carro auxiliar de peluquería Alto',
    desc:'82 cm Ancho 32 cm Cantidad de cajones 4 Color Negro Fondo 35 cm Material Plástico',
    precio:172550,
    tipo:'Mobiliario',
    ciiu:'G (47) / C (10,14) / S (96)',
    proceso:'Comercialización / Transformación / Operación'
  }),

  producto({
    id:'CAT2-117',
    sector:'comercio',
    icono:'🩹',
    nombre:'Botiquín industrial (taller) Estuche plástico mini cuadrado, medidas 21,5 cm x 11.5 cm x 6 cm compuesto por 13 elementos',
    desc:'Botiquín de primeros auxilios industrial. Incluye vendas, antisépticos, curitas y guantes. Cumple normas de seguridad industrial. Estuche plástico compacto.',
    precio:77350,
    tipo:'Insumo/Dotación',
    ciiu:'G (47) / C (10,14) / S (96)',
    proceso:'Comercialización / Transformación / Operación'
  }),

  producto({
    id:'CAT2-118',
    sector:'comercio',
    icono:'🧯',
    nombre:'Extintor multipropósito (taller) abc- 20 libras rdl',
    desc:'Extintor multipropósito ABC 20 libras. Apaga fuegos tipo A, B y C. Certificado con manómetro. Obligatorio en talleres, cocinas y bodegas.',
    precio:113050,
    tipo:'Insumo/Dotación',
    ciiu:'G (47) / C (10,14) / S (96)',
    proceso:'Comercialización / Transformación / Operación'
  })

];

// Producción
const PRODUCTOS_PRODUCCION=[
  producto({
    id:'P100',
    sector:'produccion',
    icono:'🪑',
    nombre:'Banco de trabajo industrial - Banco de trabajo estándar móvil - 2000 x 700 x 840 mm L x A x A WS885N-2000M40-X7000',
    desc:'Banco de trabajo industrial estándar móvil (2000 x 700 mm). Superficie resistente. Ruedas con freno. Ideal para talleres de metalmecánica, carpintería y servicios técnicos.',
    precio:4998000,
    tipo:'Insumo/Dotación',
    ciiu:'C (10–33) / R (90)',
    proceso:'Producción / Transformación / Edición'
  }),

  producto({
    id:'P101',
    sector:'produccion',
    icono:'🗄️',
    nombre:'Estantería metálica industrial torre 240 x 120 cm',
    desc:'Estantería metálica industrial 240 x 120 cm. Estructura en acero anticorrosivo. Capacidad por nivel hasta 200 kg. Para bodegas, tiendas y talleres.',
    precio:1841852,
    tipo:'Mobiliario',
    ciiu:'C (10–33) / R (90)',
    proceso:'Producción / Transformación / Edición'
  }),

  producto({
    id:'P102',
    sector:'produccion',
    icono:'🏭',
    nombre:'Compresor de aire Tipo Compresores de aire',
    desc:'Uso de herramienta Industrial Largo del cable 1.50 Capacidad del estanque 50 Incluye * 1 Botella de aceite monogrado SAE30 • 1 Filtro de aire • 1 Tapón del depósito de aceite • 2 Ruedas • 2 Soportes frontales de hule • 1 Bolsa con tornillería Presión máxima 116 Caudal máximo 3.2 Alimentación Eléctrica Potencia 2.610 Voltaje 120 Motor Con Bobinas de aluminio Flujo de salida 90',
    precio:1913342,
    tipo:'Equipo',
    ciiu:'C (10–33) / R (90)',
    proceso:'Producción / Transformación / Edición'
  }),

  producto({
    id:'P103',
    sector:'produccion',
    icono:'🌬️',
    nombre:'Extractor de aire/ventilación industrialExtractor De Aire Para Baño y Cocina Industrial Para Pared 41x41x14.5cm 110 Volt',
    desc:'Extractor de aire para ventilación industrial. Bajo consumo y silencioso. Mejora la calidad del aire. Fácil instalación en paredes y techos.',
    precio:553172,
    tipo:'Equipo',
    ciiu:'C (10–33) / R (90)',
    proceso:'Producción / Transformación / Edición'
  }),

  producto({
    id:'P104',
    sector:'produccion',
    icono:'🧹',
    nombre:'Aspiradora industrial Especificaciones',
    desc:'Tipo Barril Ancho 30 cm Alto 53 cm Largo 30 cm Peso 5 kg Tipo de aspiradora Barril Tipo de filtro Polvo, Agua Uso de herramienta Industrial Material Acero inoxidable Largo del cable 6 m Largo de la manguera 2.4 m Color Plateado Incluye 1 Manguera de diámetro 1 1/4" (32 mm). 1.9 m (6.2 ft) con seguro de ajuste, 1 Boquilla tipo garra, 1 Boquilla para ranuras, 1 Boquilla 2 en 1 para piso y alfombra,',
    precio:1261816,
    tipo:'Insumo/Dotación',
    ciiu:'C (10–33) / R (90)',
    proceso:'Producción / Transformación / Edición'
  }),

  producto({
    id:'P105',
    sector:'produccion',
    icono:'💡',
    nombre:'Iluminación industrial de taller la Lámpara Led Highbay 200W, ideal para interiores industriales. Con 18000 lm, 6500K y',
    desc:'Lámpara LED HighBay 200W para iluminación industrial de talleres. Alta eficiencia, bajo consumo. Vida útil de 50,000 horas. Luz blanca fría.',
    precio:811104,
    tipo:'Equipo',
    ciiu:'C (10–33) / R (90)',
    proceso:'Producción / Transformación / Edición'
  }),

  producto({
    id:'P106',
    sector:'produccion',
    icono:'📏',
    nombre:'Herramientas de control de calidad (calibrador) Tipo : Calibradores y micrómetros',
    desc:'•Ancho : 5 mm  •Alto : 1.5 cm  •Largo : 1.5 cm  •Color : Negro',
    precio:267572,
    tipo:'Insumo/Dotación',
    ciiu:'C (10–33) / R (90)',
    proceso:'Producción / Transformación / Edición'
  }),

  producto({
    id:'P107',
    sector:'produccion',
    icono:'📏',
    nombre:'Micrómetro MICRÓMETRO DE EXTERIORES PROFESIONAL, CAPACIDAD 0- 1", PRECISIÓN 0.001" ASIMETO',
    desc:'Micrómetro de exteriores profesional, capacidad 0-1 pulgada, precisión 0.001 mm. Para medición precisa en metalmecánica y control de calidad.',
    precio:378242,
    tipo:'Insumo/Dotación',
    ciiu:'C (10–33) / R (90)',
    proceso:'Producción / Transformación / Edición'
  }),

  producto({
    id:'P108',
    sector:'produccion',
    icono:'⚖️',
    nombre:'Báscula digital industrial Báscula de piso Industrial 150KG Capacidad: 150kg',
    desc:'División: 20g Unidades de peso: lb y Kg Indicador en ABS de alta resistencia Batería interna recargable de 4V y autonomía de 8horas Dimensión plataforma: 30x40cm Display: LCD Display de tres pantallas con 7 dígitos cada uno Función Indicador: Liquidador Sistema de Tara para disminuir recipientes',
    precio:458745,
    tipo:'Insumo/Dotación',
    ciiu:'C (10–33) / R (90)',
    proceso:'Producción / Transformación / Edición'
  }),

  producto({
    id:'P109',
    sector:'produccion',
    icono:'🪑',
    nombre:'Mesa inoxidable de preparación Mesas Acero 90 x 150 x 50 Con Entrepaño',
    desc:'Mesa de preparación en acero inoxidable (90 x 150 x 50 cm) con entrepaño. Resistente a la corrosión. Cumple normas sanitarias.',
    precio:3212822,
    tipo:'Mobiliario',
    ciiu:'C (10–33) / R (90)',
    proceso:'Producción / Transformación / Edición'
  }),

  producto({
    id:'P110',
    sector:'produccion',
    icono:'🚰',
    nombre:'Lavamanos en acero inoxidable (operación) Grifería institucional kit válvula de pedal con lavamanos de 28x30',
    desc:'Lavamanos en acero inoxidable con grifería institucional de válvula de pedal o palanca. Cumple normas sanitarias. Para cocinas industriales y áreas de manipulación de alimentos.',
    precio:588872,
    tipo:'Insumo/Dotación',
    ciiu:'C (10–33) / R (90)',
    proceso:'Producción / Transformación / Edición'
  }),

  producto({
    id:'P111',
    sector:'produccion',
    icono:'📦',
    nombre:'Selladora térmica de bolsas Longitud de sellado: 30cm. ¡Sella bolsas de tamaño considerable para satisfacer todas tus ne',
    desc:'Ancho de sellado: 2mm, el tamaño perfecto para un sellado seguro y confiable. Tiempo de calentamiento ultrarrápido: entre 0.2 y 1.3 segundos, para que puedas trabajar eficientemente. Peso ligero de solo 2.9 kg, lo que facilita su transporte y manejo.',
    precio:355215,
    tipo:'Insumo/Dotación',
    ciiu:'C (10–33) / R (90)',
    proceso:'Producción / Transformación / Edición'
  }),

  producto({
    id:'P112',
    sector:'produccion',
    icono:'📦',
    nombre:'Selladora al vacío Tipo',
    desc:'Electrodomésticos de cocina modernos Ancho 43.18 cm Alto 25.4 cm Largo 52.5 cm Material PLASTICO Color Negro Potencia nominal 125 W Voltaje 117 V',
    precio:892322,
    tipo:'Insumo/Dotación',
    ciiu:'C (10–33) / R (90)',
    proceso:'Producción / Transformación / Edición'
  }),

  producto({
    id:'P113',
    sector:'produccion',
    icono:'📦',
    nombre:'Empacadora semiautomática',
    desc:'Empacadora semiautomática para sellado de productos en bolsas. Aumenta la velocidad de empaque. Para procesadoras de alimentos y pequeñas industrias.',
    precio:25168500,
    tipo:'Insumo/Dotación',
    ciiu:'C (10–33) / R (90)',
    proceso:'Producción / Transformación / Edición'
  }),

  producto({
    id:'P114',
    sector:'produccion',
    icono:'🏷️',
    nombre:'Etiquetadora manual/semiauto Dimensiones: 27.6cm de ancho, 58cm de alto y 86cm de profundidad.',
    desc:'Velocidad máxima de impresión en blanco y negro: 1ppm. Velocidad máxima de impresión en color: 1ppm. Resolución máxima de impresión en blanco y negro: 0. Resolución máxima de impresión en color: 0. Es electrónico. Es portátil. Capacidad máxima de la tarjeta de memoria: 0MB. Tipo de pilas: No.',
    precio:7924848,
    tipo:'Insumo/Dotación',
    ciiu:'C (10–33) / R (90)',
    proceso:'Producción / Transformación / Edición'
  }),

  producto({
    id:'P115',
    sector:'produccion',
    icono:'🖨️',
    nombre:'Impresora de etiquetas MÉTODO DE IMPRESIÓN',
    desc:'Térmico directo, Térmico por transferencia ANCHO DE IMPESIÓN 104MM VELOCIIDAD DE IMPESIÓN 127MM/S INTERFAZ Ethernet, USB COMPATIBILIDAD Android, Windows, Linux, Mac OSEMULACIÓN DPL, EPL, TSPL, ZPL',
    precio:1028114,
    tipo:'Equipo',
    ciiu:'C (10–33) / R (90)',
    proceso:'Producción / Transformación / Edición'
  }),

  producto({
    id:'P116',
    sector:'produccion',
    icono:'📱',
    nombre:'Lector de código de barras escaners',
    desc:'Lector de código de barras USB o inalámbrico. Lee códigos 1D y 2D. Compatible con sistemas POS e inventario. Para tiendas y bodegas.',
    precio:249722,
    tipo:'Insumo/Dotación',
    ciiu:'C (10–33) / R (90)',
    proceso:'Producción / Transformación / Edición'
  }),

  producto({
    id:'P117',
    sector:'produccion',
    icono:'💻',
    nombre:'Procesador: AMD Ryzen™ 3 7330U 4 núcleos',
    desc:'de CPU, 8 hilos, Frecuencia Base de 2.3 GHz hasta 4.3 GHz Frecuencia Máxima, 10 MB de Cache L2 + L3 Chipset: Integrado en el procesador Sistema Operativo FreeDOS 3.0 en Español. Pantalla Interfaces Certificaciones Seguridad Garantía Gráficos Memoria RAM Almacenamiento Teclado Mouse Audio Cámara Web Conectividad Batería Adaptador AC Peso (2) USB 3.2 Gen 1 (1) USB Tipo C 3.2 Gen1 (Datos) (1) HDMI v1',
    precio:3034500,
    tipo:'Equipo',
    ciiu:'C (10–33) / R (90)',
    proceso:'Producción / Transformación / Edición'
  }),

  producto({
    id:'P118',
    sector:'produccion',
    icono:'🔋',
    nombre:'UPS / regulador de voltaje Ups Hikvision de 1000 Va 600w 6 Tomas Nema 5-15r (4r - 2sr)',
    desc:'UPS Hikvision 1000 VA/600 W con 6 tomas Nema. Protege equipos de apagones y fluctuaciones de voltaje. Autonomía de 10-15 minutos.',
    precio:499622,
    tipo:'Insumo/Dotación',
    ciiu:'C (10–33) / R (90)',
    proceso:'Producción / Transformación / Edición'
  }),

  producto({
    id:'P119',
    sector:'produccion',
    icono:'🏭',
    nombre:'Deshidratador industrial en Acero Inoxidable 10 bandejas Seca las comida por un ventilador que ha sido instalado en la p',
    desc:'El deshidratador se apagara automáticamente cuando la hora fijada anteriormente llegue a su fin. El reloj automático y el termostato, harán que la deshidratación de la comida, sea como un abrir y cerrar de ojos. Instrucciones vienen incluidas. Maquina eléctrica 110 volts. Dimensiones externas aprox: 54 cm de largo, por 42 cm de ancho y 38 cm de alto. Pesa 36 libras aprox. Capacidad de 1.5 metros c',
    precio:4105482,
    tipo:'Insumo/Dotación',
    ciiu:'C (10–33) / R (90)',
    proceso:'Producción / Transformación / Edición'
  }),

  producto({
    id:'P120',
    sector:'produccion',
    icono:'🍳',
    nombre:'Horno industrial de convección Horno de convección a gas con controles eléctricos. Está fabricado en acero inoxidable 43',
    desc:'Horno de convección a gas con controles eléctricos. Distribución uniforme del calor. Alta capacidad. Para panaderías y restaurantes.',
    precio:23906778,
    tipo:'Equipo',
    ciiu:'C (10–33) / R (90)',
    proceso:'Producción / Transformación / Edición'
  }),

  producto({
    id:'P121',
    sector:'produccion',
    icono:'🍳',
    nombre:'Mezcladora industrial ReferenciaBX35A',
    desc:'Voltaje110v Capacidad35Kg Potencia0.75Kw Frecuencia60Hz Dimensiones67x51x110cm',
    precio:15759230,
    tipo:'Insumo/Dotación',
    ciiu:'C (10–33) / R (90)',
    proceso:'Producción / Transformación / Edición'
  }),

  producto({
    id:'P122',
    sector:'produccion',
    icono:'🍳',
    nombre:'Molino/triturador de granos Voltaje110 voltios',
    desc:'Capacidad de molienda800g Potencia2.000 W Velocidad25.000 rpm Capacidad de producción20-40 kg/h Tiempo continuo operación5min - Descanso: 8min Dimensiones22 x 21 x 49.5 cm',
    precio:1635596,
    tipo:'Insumo/Dotación',
    ciiu:'C (10–33) / R (90)',
    proceso:'Producción / Transformación / Edición'
  }),

  producto({
    id:'P123',
    sector:'produccion',
    icono:'🍲',
    nombre:'Marmita/75 litros, a gas en acero inoxidable, sistema para controlar la temperatura del producto',
    desc:'Marmita de 75 litros a gas en acero inoxidable con control de temperatura. Para sopas, salsas y alimentos en gran cantidad.',
    precio:35700000,
    tipo:'Insumo/Dotación',
    ciiu:'C (10–33) / R (90)',
    proceso:'Producción / Transformación / Edición'
  }),

  producto({
    id:'P124',
    sector:'produccion',
    icono:'❄️',
    nombre:'Cámara fría/cuarto frío Cuarto frío de 2.00 x 2.00 x 2.50 mts para carnes, pescado, pollo, mariscos, frutas, verduras, e',
    desc:'Cuarto frío 2.00 x 2.00 x 2.50 m para carnes y productos perecederos. Panel sándwich aislante. Control digital de temperatura.',
    precio:57120000,
    tipo:'Equipo',
    ciiu:'C (10–33) / R (90)',
    proceso:'Producción / Transformación / Edición'
  }),

  producto({
    id:'P125',
    sector:'produccion',
    icono:'❄️',
    nombre:'Refrigerador/congelador productivo Peso199kg',
    desc:'Dimensiones totales132 x 80 x 210 cms (frente, profundo, alto) Maxima Temperatura ambiente26 ° C / 60% HR Potencia300W 1/3 Hp Corriente4 amperios Voltaje110v Capacidad1300L Rango de temperatura+4°C a + 8 ° C',
    precio:26507250,
    tipo:'Equipo',
    ciiu:'C (10–33) / R (90)',
    proceso:'Producción / Transformación / Edición'
  }),

  producto({
    id:'P126',
    sector:'produccion',
    icono:'🪑',
    nombre:'Carro bandejero inoxidable Carro de Servicio para 3 bandejas en Acero Inox.',
    desc:'Es desmontable y cuenta con tubo de acero inoxidable de 25 mm. de diámetro; además sus ruedas llevan freno',
    precio:3027362,
    tipo:'Mobiliario',
    ciiu:'C (10–33) / R (90)',
    proceso:'Producción / Transformación / Edición'
  }),

  producto({
    id:'P127',
    sector:'produccion',
    icono:'📦',
    nombre:'Contenedores grado alimentario Contenedor Portátil Scepter de Grado Alimenticio ? 19 L con Boquilla Reversible',
    desc:'Contenedores portátiles de grado alimentario. Material libre de BPA. Herméticos y apilables. Para almacenamiento de líquidos y alimentos en restaurantes.',
    precio:160472,
    tipo:'Insumo/Dotación',
    ciiu:'C (10–33) / R (90)',
    proceso:'Producción / Transformación / Edición'
  }),

  producto({
    id:'P128',
    sector:'produccion',
    icono:'📦',
    nombre:'Envases grado alimentario (frascos/tarrinas)',
    desc:'Envases de grado alimentario: frascos y tarrinas. Material inocuo. Para mermeladas, salsas, lácteos y miel. Herméticos y apilables.',
    precio:35522,
    tipo:'Insumo/Dotación',
    ciiu:'C (10–33) / R (90)',
    proceso:'Producción / Transformación / Edición'
  }),

  producto({
    id:'P129',
    sector:'produccion',
    icono:'🧵',
    nombre:'Máquina plana industrial (confección) Función: Costura recta gama genérica',
    desc:'Garantía: 06 meses por kit electrónico y 06 meses por descalibraciones mecánicas Tipo de aguja: Cubo delgado DBX1 o Cubo grueso 135X5 Sistema paso a paso Velocidad: Variable desde 500 hasta 4000 rpm Longitud de puntada (cubo delgado a 5 mm o cubo grueso 7 mm) Posicionador de aguja Luz led integrada Motor direct drive incorporado de 550w Devanador incorporado Mueble importado',
    precio:2973810,
    tipo:'Equipo',
    ciiu:'C (10–33) / R (90)',
    proceso:'Producción / Transformación / Edición'
  }),

  producto({
    id:'P130',
    sector:'produccion',
    icono:'🧵',
    nombre:'Overlock industrial Overlock con costura overlock de seis hilos para telas ligeras y medianas Fácil cambio para diferent',
    desc:'Sistema de lubricación automática Mejorado - mecanismo de barra de aguja cerrado Tensión óptima del hilo Diseño unico Servomotor integrado en la cabeza, control de velocidad continuo El ahorro de energía Ruido bajo Alto rendimiento',
    precio:5310500,
    tipo:'Insumo/Dotación',
    ciiu:'C (10–33) / R (90)',
    proceso:'Producción / Transformación / Edición'
  }),

  producto({
    id:'P131',
    sector:'produccion',
    icono:'🧵',
    nombre:'Recubridora industrial TIPO Recubridora - Collarín USO Industrial MOTOR Mecatrónica',
    desc:'MARCA Willcox MODELO W500D PUNTADA Collarin Recubierto  AGUJAS 3 HILOS 5 VOLTAJE 110V POTENCIA 550W',
    precio:4873050,
    tipo:'Insumo/Dotación',
    ciiu:'C (10–33) / R (90)',
    proceso:'Producción / Transformación / Edición'
  }),

  producto({
    id:'P132',
    sector:'produccion',
    icono:'🧵',
    nombre:'Cortadora vertical de tela Motores',
    desc:'110V, 1ph, 50 / 60Hz 220V, 1ph o 3ph, 50 / 60Hz Estándar: velocidad única Opcional: velocidad dual, velocidad variable Caballo de fuerza 2hp, 1ph a 4,000 RPM 2hp, 3ph a 4,000 RPM Peso 41 libras (18.5kg) Cuchillas Estándar: acero al carbono Opcional: acero de alta velocidad, recubierto de PTFE, borde ondulado, ranura ondulada, punta en ángulo Cinturones Estándar: grano medio Opcional: fino, grueso,',
    precio:2322410,
    tipo:'Insumo/Dotación',
    ciiu:'C (10–33) / R (90)',
    proceso:'Producción / Transformación / Edición'
  }),

  producto({
    id:'P133',
    sector:'produccion',
    icono:'🪑',
    nombre:'Mesa de corte textil 120 x 180 cm Nuestra Mesa de Corte para Tela – Diseño Americano está fabricada para trabajos exigen',
    desc:'La mesa tiene una altura fija de 90 cm, ideal para mantener una postura ergonómica durante el corte, evitando dolores de espalda y fatiga en jornadas largas de trabajo.  Disponible en múltiples medidas, es un producto modular y adaptable a distintos espacios de trabajo. Puedes elegir la variante que mejor se acomode a tu taller desde el menú.',
    precio:1160072,
    tipo:'Mobiliario',
    ciiu:'C (10–33) / R (90)',
    proceso:'Producción / Transformación / Edición'
  }),

  producto({
    id:'P134',
    sector:'produccion',
    icono:'🖨️',
    nombre:'Plotter de corte (si aplica a producción gráfica) Dimensiones',
    desc:'97x33x36 Referencia del Producto en el Certificado/Empaque ProCut Plus KI-720AB Composición 60% Acero 30% Plástico 5% Aluminio 5% Electrónica Presentación Unidad Tipo de adorno Otros Material del cuerpo Metal Color Amarillo',
    precio:4408772,
    tipo:'Insumo/Dotación',
    ciiu:'C (10–33) / R (90)',
    proceso:'Producción / Transformación / Edición'
  }),

  producto({
    id:'P135',
    sector:'produccion',
    icono:'🏭',
    nombre:'Laminadora/calandra (producción gráfica) Aplicable a máquinas UV DTF, puede completar las tareas de estampado en oro, el',
    desc:'- Ambos rodillos de presión de la máquina están equipados con funciones de calentamiento. - Alta automatización y fácil de usar.',
    precio:17582250,
    tipo:'Insumo/Dotación',
    ciiu:'C (10–33) / R (90)',
    proceso:'Producción / Transformación / Edición'
  }),

  producto({
    id:'P136',
    sector:'produccion',
    icono:'📷',
    nombre:'Cámara de video semiprofesional Tipo de Camara',
    desc:'Semiprofesional  Tamaño Pantalla 3  Pulgadas Profundida de Inmersion 0  Metro(s) Resolucion de la Foto 24.1  Megapixeles Zoom Digital No Tiene Zoom Digital  Zoom Optico No Tiene Zoom Optico',
    precio:4239196,
    tipo:'Equipo',
    ciiu:'C (10–33) / R (90)',
    proceso:'Producción / Transformación / Edición'
  }),

  producto({
    id:'P137',
    sector:'produccion',
    icono:'📷',
    nombre:'Lentes básicos (kit) Objetivo con montura EF / formato de fotograma completo',
    desc:'Rango de apertura: f / 1.8 a f / 22 Super Spectra Coating Motor paso a paso STM Diafragma redondeado de 7 cuchillas',
    precio:1070982,
    tipo:'Insumo/Dotación',
    ciiu:'C (10–33) / R (90)',
    proceso:'Producción / Transformación / Edición'
  }),

  producto({
    id:'P138',
    sector:'produccion',
    icono:'🧺',
    nombre:'Trípode profesional Capacidad de carga: 34 lb',
    desc:'Trípode extensible de 24 a 77 pulgadas Longitud plegada: 19″ Patas de aleación de aluminio de 4 secciones con sistema de bloqueo abatible Pata y columna convertibles en monopie Rosca macho de 1/4″-20 Giro, inclinación y rotación de 360° Inclinación de 90° Columna central de 2 secciones Peso: 3,5 libras',
    precio:589032,
    tipo:'Insumo/Dotación',
    ciiu:'C (10–33) / R (90)',
    proceso:'Producción / Transformación / Edición'
  }),

  producto({
    id:'P139',
    sector:'produccion',
    icono:'🪞',
    nombre:'Gimbal/estabilizador Para cámaras sin espejo y teléfonos inteligentes',
    desc:'Diseño liviano, carga útil de hasta 4,4 lb Control de cámara mediante Bluetooth/USB-C Funciona con el módulo de seguimiento inteligente Modos horizontales y verticales, ejes de 360° Batería de 3100 mAh, 13 horas de duración Funciones de panorama, time-lapse y seguimiento Puerto NATO para asas y accesorios Incluye agarre extendido/trípode',
    precio:3034482,
    tipo:'Equipo',
    ciiu:'C (10–33) / R (90)',
    proceso:'Producción / Transformación / Edición'
  }),

  producto({
    id:'P140',
    sector:'produccion',
    icono:'💡',
    nombre:'Kit de iluminación LED continua Temperatura de color: 3200-5600 K, CRI: 96',
    desc:'660 LED: 330 luz diurna y 330 tungsteno Tres adaptadores de 100-240 V CA, 50/60 Hz Tres tripodes de iluminación’ Tres estuches de transporte para paneles LED',
    precio:2855982,
    tipo:'Equipo',
    ciiu:'C (10–33) / R (90)',
    proceso:'Producción / Transformación / Edición'
  }),

  producto({
    id:'P141',
    sector:'produccion',
    icono:'🎙️',
    nombre:'Micrófonos inalámbricos Sistema inalámbrico profesional, dos frecuencias, dos antenas, dos micrófonos de mano. 60 metr',
    desc:'Sistema inalámbrico profesional con dos micrófonos y receptor. Para presentaciones, grabaciones y producción de video. Sin cables.',
    precio:942480,
    tipo:'Insumo/Dotación',
    ciiu:'C (10–33) / R (90)',
    proceso:'Producción / Transformación / Edición'
  }),

  producto({
    id:'P142',
    sector:'produccion',
    icono:'🎙️',
    nombre:'Interface de audio La interfaz Sonic Cube II es una interfaz de audio profesional de doble canal que cuenta con un pream',
    desc:'Interfaz de audio profesional para grabación y producción musical. Entradas XLR y jack. Compatible con computador vía USB. Fidelidad profesional.',
    precio:697756,
    tipo:'Equipo',
    ciiu:'C (10–33) / R (90)',
    proceso:'Producción / Transformación / Edición'
  }),

  producto({
    id:'P143',
    sector:'produccion',
    icono:'🎙️',
    nombre:'Grabadora de audio Gracias a un micrófono de alta sensibilidad, una reproducción sencilla y sus más de 159 horas de alma',
    desc:'Grabadora de audio digital portátil con micrófono de alta sensibilidad. Graba en MP3/WAV. Para podcasts, entrevistas y registro de campo.',
    precio:1115446,
    tipo:'Equipo',
    ciiu:'C (10–33) / R (90)',
    proceso:'Producción / Transformación / Edición'
  }),

  producto({
    id:'P144',
    sector:'produccion',
    icono:'💾',
    nombre:'Disco duro externo ssd externo 2 tb',
    desc:'Disco duro externo SSD de 2 TB. Alta velocidad de transferencia. Compacto y resistente. Para respaldo de archivos de fotografía, video y proyectos digitales.',
    precio:1588650,
    tipo:'Insumo/Dotación',
    ciiu:'C (10–33) / R (90)',
    proceso:'Producción / Transformación / Edición'
  }),

  producto({
    id:'P145',
    sector:'produccion',
    icono:'🎙️',
    nombre:'Monitor de referencia Entradas:',
    desc:'"Bluetooth 5.0 1- Estéreo de 1/8"" 2- TRS ¼” balanceada 2- RCA no balanceadas"  Respuesta en frecuencia: 80 Hz – 20 kHz  Frecuencia de Crossover: 2.8 kHz  Potencia del amplificador: 25W/por altavoz  LF Driver: 3.5"',
    precio:1181670,
    tipo:'Insumo/Dotación',
    ciiu:'C (10–33) / R (90)',
    proceso:'Producción / Transformación / Edición'
  }),

  producto({
    id:'P146',
    sector:'produccion',
    icono:'📸',
    nombre:'Fondo croma Fondo perfecto para televisión, producción de video y fotografía.',
    desc:'El telón cuenta con un doblez para colgar en la barra. Bordes reforzados para evitar daños de tela. Hecho de 100% puro algodón muslin.',
    precio:356822,
    tipo:'Insumo/Dotación',
    ciiu:'C (10–33) / R (90)',
    proceso:'Producción / Transformación / Edición'
  }),

  producto({
    id:'P147',
    sector:'produccion',
    icono:'📺',
    nombre:'Teleprompter básico Lectura clara, sin necesidad de memorizar, presentación fluida y natural.',
    desc:'• Fácil de instalar y guardar. • Sin fugas de luz en el lente de la cámara. • Mantiene el nivel de los ojos y la alineación del lente para diferentes dispositivos. • Clip de liberación rápida para smartphone. • Anillo adaptador de lente de cámara: 58/67/72/77/82 mm. • Admite disparos con lente gran angular sin viñeteado. • Cuenta con soportes para zapata fría y una entrada de rosca de 1/4" • Contr',
    precio:713822,
    tipo:'Equipo',
    ciiu:'C (10–33) / R (90)',
    proceso:'Producción / Transformación / Edición'
  }),

  producto({
    id:'P148',
    sector:'produccion',
    icono:'💰',
    nombre:'Case/rack de transporte de equipos Rack de 8 unidades ligero y resistente, fabricado en una mezcla de componentes y polí',
    desc:'Rack de transporte de 8 unidades, liviano y resistente. Protege equipos de audio y video durante el traslado. Para camarógrafos y productores de contenido.',
    precio:1388730,
    tipo:'Insumo/Dotación',
    ciiu:'C (10–33) / R (90)',
    proceso:'Producción / Transformación / Edición'
  }),

  producto({
    id:'P416',
    sector:'produccion',
    icono:'🪑',
    nombre:'Banco de trabajo industrial - Banco de trabajo estándar móvil - 2000 x 700 x 840 mm L x A x A WS885N-2000M40-X7000',
    desc:'Banco de trabajo industrial estándar móvil (2000 x 700 mm). Superficie resistente. Ruedas con freno. Ideal para talleres de metalmecánica, carpintería y servicios técnicos.',
    precio:809200,
    tipo:'Insumo/Dotación',
    ciiu:'C (10–33) / R (90)',
    proceso:'Producción / Transformación / Edición'
  }),

  producto({
    id:'P417',
    sector:'produccion',
    icono:'🗄️',
    nombre:'Estantería metálica industrial torre 240 x 120 cm',
    desc:'Estantería metálica industrial 240 x 120 cm. Estructura en acero anticorrosivo. Capacidad por nivel hasta 200 kg. Para bodegas, tiendas y talleres.',
    precio:380800,
    tipo:'Mobiliario',
    ciiu:'C (10–33) / R (90)',
    proceso:'Producción / Transformación / Edición'
  }),

  producto({
    id:'P418',
    sector:'produccion',
    icono:'🏭',
    nombre:'Compresor de aire Tipo Compresores de aire',
    desc:'Uso de herramienta Industrial Largo del cable 1.50 Capacidad del estanque 50 Incluye * 1 Botella de aceite monogrado SAE30 • 1 Filtro de aire • 1 Tapón del depósito de aceite • 2 Ruedas • 2 Soportes frontales de hule • 1 Bolsa con tornillería Presión máxima 116 Caudal máximo 3.2 Alimentación Eléctrica Potencia 2.610 Voltaje 120 Motor Con Bobinas de aluminio Flujo de salida 90',
    precio:1011500,
    tipo:'Equipo',
    ciiu:'C (10–33) / R (90)',
    proceso:'Producción / Transformación / Edición'
  }),

  producto({
    id:'P419',
    sector:'produccion',
    icono:'🌬️',
    nombre:'Extractor de aire/ventilación industrialExtractor De Aire Para Baño y Cocina Industrial Para Pared 41x41x14.5cm 110 Volt',
    desc:'Extractor de aire para ventilación industrial. Bajo consumo y silencioso. Mejora la calidad del aire. Fácil instalación en paredes y techos.',
    precio:220150,
    tipo:'Equipo',
    ciiu:'C (10–33) / R (90)',
    proceso:'Producción / Transformación / Edición'
  }),

  producto({
    id:'P420',
    sector:'produccion',
    icono:'🧹',
    nombre:'Aspiradora industrial Especificaciones',
    desc:'Tipo Barril Ancho 30 cm Alto 53 cm Largo 30 cm Peso 5 kg Tipo de aspiradora Barril Tipo de filtro Polvo, Agua Uso de herramienta Industrial Material Acero inoxidable Largo del cable 6 m Largo de la manguera 2.4 m Color Plateado Incluye 1 Manguera de diámetro 1 1/4" (32 mm). 1.9 m (6.2 ft) con seguro de ajuste, 1 Boquilla tipo garra, 1 Boquilla para ranuras, 1 Boquilla 2 en 1 para piso y alfombra,',
    precio:809200,
    tipo:'Insumo/Dotación',
    ciiu:'C (10–33) / R (90)',
    proceso:'Producción / Transformación / Edición'
  }),

  producto({
    id:'P421',
    sector:'produccion',
    icono:'💡',
    nombre:'Iluminación industrial de taller la Lámpara Led Highbay 200W, ideal para interiores industriales. Con 18000 lm, 6500K y',
    desc:'Lámpara LED HighBay 200W para iluminación industrial de talleres. Alta eficiencia, bajo consumo. Vida útil de 50,000 horas. Luz blanca fría.',
    precio:148750,
    tipo:'Equipo',
    ciiu:'C (10–33) / R (90)',
    proceso:'Producción / Transformación / Edición'
  }),

  producto({
    id:'P422',
    sector:'produccion',
    icono:'📏',
    nombre:'Herramientas de control de calidad (calibrador) Tipo : Calibradores y micrómetros',
    desc:'•Ancho : 5 mm  •Alto : 1.5 cm  •Largo : 1.5 cm  •Color : Negro',
    precio:113050,
    tipo:'Insumo/Dotación',
    ciiu:'C (10–33) / R (90)',
    proceso:'Producción / Transformación / Edición'
  }),

  producto({
    id:'P423',
    sector:'produccion',
    icono:'📏',
    nombre:'Micrómetro MICRÓMETRO DE EXTERIORES PROFESIONAL, CAPACIDAD 0- 1", PRECISIÓN 0.001" ASIMETO',
    desc:'Micrómetro de exteriores profesional, capacidad 0-1 pulgada, precisión 0.001 mm. Para medición precisa en metalmecánica y control de calidad.',
    precio:113050,
    tipo:'Insumo/Dotación',
    ciiu:'C (10–33) / R (90)',
    proceso:'Producción / Transformación / Edición'
  }),

  producto({
    id:'P424',
    sector:'produccion',
    icono:'⚖️',
    nombre:'Báscula digital industrial Báscula de piso Industrial 150KG Capacidad: 150kg',
    desc:'División: 20g Unidades de peso: lb y Kg Indicador en ABS de alta resistencia Batería interna recargable de 4V y autonomía de 8horas Dimensión plataforma: 30x40cm Display: LCD Display de tres pantallas con 7 dígitos cada uno Función Indicador: Liquidador Sistema de Tara para disminuir recipientes',
    precio:452200,
    tipo:'Insumo/Dotación',
    ciiu:'C (10–33) / R (90)',
    proceso:'Producción / Transformación / Edición'
  }),

  producto({
    id:'P425',
    sector:'produccion',
    icono:'🪑',
    nombre:'Mesa inoxidable de preparación Mesas Acero 90 x 150 x 50 Con Entrepaño',
    desc:'Mesa de preparación en acero inoxidable (90 x 150 x 50 cm) con entrepaño. Resistente a la corrosión. Cumple normas sanitarias.',
    precio:1011500,
    tipo:'Mobiliario',
    ciiu:'C (10–33) / R (90)',
    proceso:'Producción / Transformación / Edición'
  }),

  producto({
    id:'P426',
    sector:'produccion',
    icono:'🚰',
    nombre:'Lavamanos en acero inoxidable (operación) Grifería institucional kit válvula de pedal con lavamanos de 28x30',
    desc:'Lavamanos en acero inoxidable con grifería institucional de válvula de pedal o palanca. Cumple normas sanitarias. Para cocinas industriales y áreas de manipulación de alimentos.',
    precio:333200,
    tipo:'Insumo/Dotación',
    ciiu:'C (10–33) / R (90)',
    proceso:'Producción / Transformación / Edición'
  }),

  producto({
    id:'P427',
    sector:'produccion',
    icono:'📦',
    nombre:'Selladora térmica de bolsas Longitud de sellado: 30cm. ¡Sella bolsas de tamaño considerable para satisfacer todas tus ne',
    desc:'Ancho de sellado: 2mm, el tamaño perfecto para un sellado seguro y confiable. Tiempo de calentamiento ultrarrápido: entre 0.2 y 1.3 segundos, para que puedas trabajar eficientemente. Peso ligero de solo 2.9 kg, lo que facilita su transporte y manejo.',
    precio:101150,
    tipo:'Insumo/Dotación',
    ciiu:'C (10–33) / R (90)',
    proceso:'Producción / Transformación / Edición'
  }),

  producto({
    id:'P428',
    sector:'produccion',
    icono:'📦',
    nombre:'Selladora al vacío Tipo',
    desc:'Electrodomésticos de cocina modernos Ancho 43.18 cm Alto 25.4 cm Largo 52.5 cm Material PLASTICO Color Negro Potencia nominal 125 W Voltaje 117 V',
    precio:220150,
    tipo:'Insumo/Dotación',
    ciiu:'C (10–33) / R (90)',
    proceso:'Producción / Transformación / Edición'
  }),

  producto({
    id:'P429',
    sector:'produccion',
    icono:'📦',
    nombre:'Empacadora semiautomática',
    desc:'Empacadora semiautomática para sellado de productos en bolsas. Aumenta la velocidad de empaque. Para procesadoras de alimentos y pequeñas industrias.',
    precio:1428000,
    tipo:'Insumo/Dotación',
    ciiu:'C (10–33) / R (90)',
    proceso:'Producción / Transformación / Edición'
  }),

  producto({
    id:'P430',
    sector:'produccion',
    icono:'🏷️',
    nombre:'Etiquetadora manual/semiauto Dimensiones: 27.6cm de ancho, 58cm de alto y 86cm de profundidad.',
    desc:'Velocidad máxima de impresión en blanco y negro: 1ppm. Velocidad máxima de impresión en color: 1ppm. Resolución máxima de impresión en blanco y negro: 0. Resolución máxima de impresión en color: 0. Es electrónico. Es portátil. Capacidad máxima de la tarjeta de memoria: 0MB. Tipo de pilas: No.',
    precio:113050,
    tipo:'Insumo/Dotación',
    ciiu:'C (10–33) / R (90)',
    proceso:'Producción / Transformación / Edición'
  }),

  producto({
    id:'P431',
    sector:'produccion',
    icono:'🖨️',
    nombre:'Impresora de etiquetas MÉTODO DE IMPRESIÓN',
    desc:'Térmico directo, Térmico por transferencia ANCHO DE IMPESIÓN 104MM VELOCIIDAD DE IMPESIÓN 127MM/S INTERFAZ Ethernet, USB COMPATIBILIDAD Android, Windows, Linux, Mac OSEMULACIÓN DPL, EPL, TSPL, ZPL',
    precio:416500,
    tipo:'Equipo',
    ciiu:'C (10–33) / R (90)',
    proceso:'Producción / Transformación / Edición'
  }),

  producto({
    id:'P432',
    sector:'produccion',
    icono:'📱',
    nombre:'Lector de código de barras escaners',
    desc:'Lector de código de barras USB o inalámbrico. Lee códigos 1D y 2D. Compatible con sistemas POS e inventario. Para tiendas y bodegas.',
    precio:101150,
    tipo:'Insumo/Dotación',
    ciiu:'C (10–33) / R (90)',
    proceso:'Producción / Transformación / Edición'
  }),

  producto({
    id:'P433',
    sector:'produccion',
    icono:'💻',
    nombre:'Procesador: AMD Ryzen™ 3 7330U 4 núcleos',
    desc:'de CPU, 8 hilos, Frecuencia Base de 2.3 GHz hasta 4.3 GHz Frecuencia Máxima, 10 MB de Cache L2 + L3 Chipset: Integrado en el procesador Sistema Operativo FreeDOS 3.0 en Español. Pantalla Interfaces Certificaciones Seguridad Garantía Gráficos Memoria RAM Almacenamiento Teclado Mouse Audio Cámara Web Conectividad Batería Adaptador AC Peso (2) USB 3.2 Gen 1 (1) USB Tipo C 3.2 Gen1 (Datos) (1) HDMI v1',
    precio:3126749,
    tipo:'Equipo',
    ciiu:'C (10–33) / R (90)',
    proceso:'Producción / Transformación / Edición'
  }),

  producto({
    id:'P434',
    sector:'produccion',
    icono:'🔋',
    nombre:'UPS / regulador de voltaje Ups Hikvision de 1000 Va 600w 6 Tomas Nema 5-15r (4r - 2sr)',
    desc:'UPS Hikvision 1000 VA/600 W con 6 tomas Nema. Protege equipos de apagones y fluctuaciones de voltaje. Autonomía de 10-15 minutos.',
    precio:485531,
    tipo:'Insumo/Dotación',
    ciiu:'C (10–33) / R (90)',
    proceso:'Producción / Transformación / Edición'
  }),

  producto({
    id:'P435',
    sector:'produccion',
    icono:'🏭',
    nombre:'Deshidratador industrial en Acero Inoxidable 10 bandejas Seca las comida por un ventilador que ha sido instalado en la p',
    desc:'El deshidratador se apagara automáticamente cuando la hora fijada anteriormente llegue a su fin. El reloj automático y el termostato, harán que la deshidratación de la comida, sea como un abrir y cerrar de ojos. Instrucciones vienen incluidas. Maquina eléctrica 110 volts. Dimensiones externas aprox: 54 cm de largo, por 42 cm de ancho y 38 cm de alto. Pesa 36 libras aprox. Capacidad de 1.5 metros c',
    precio:2380352,
    tipo:'Insumo/Dotación',
    ciiu:'C (10–33) / R (90)',
    proceso:'Producción / Transformación / Edición'
  }),

  producto({
    id:'P436',
    sector:'produccion',
    icono:'🍳',
    nombre:'Horno industrial de convección Horno de convección a gas con controles eléctricos. Está fabricado en acero inoxidable 43',
    desc:'Horno de convección a gas con controles eléctricos. Distribución uniforme del calor. Alta capacidad. Para panaderías y restaurantes.',
    precio:4522000,
    tipo:'Equipo',
    ciiu:'C (10–33) / R (90)',
    proceso:'Producción / Transformación / Edición'
  }),

  producto({
    id:'P437',
    sector:'produccion',
    icono:'🍳',
    nombre:'Mezcladora industrial ReferenciaBX35A',
    desc:'Voltaje110v Capacidad35Kg Potencia0.75Kw Frecuencia60Hz Dimensiones67x51x110cm',
    precio:3332000,
    tipo:'Insumo/Dotación',
    ciiu:'C (10–33) / R (90)',
    proceso:'Producción / Transformación / Edición'
  }),

  producto({
    id:'P438',
    sector:'produccion',
    icono:'🍳',
    nombre:'Molino/triturador de granos Voltaje110 voltios',
    desc:'Capacidad de molienda800g Potencia2.000 W Velocidad25.000 rpm Capacidad de producción20-40 kg/h Tiempo continuo operación5min - Descanso: 8min Dimensiones22 x 21 x 49.5 cm',
    precio:809200,
    tipo:'Insumo/Dotación',
    ciiu:'C (10–33) / R (90)',
    proceso:'Producción / Transformación / Edición'
  }),

  producto({
    id:'P439',
    sector:'produccion',
    icono:'🍲',
    nombre:'Marmita/75 litros, a gas en acero inoxidable, sistema para controlar la temperatura del producto',
    desc:'Marmita de 75 litros a gas en acero inoxidable con control de temperatura. Para sopas, salsas y alimentos en gran cantidad.',
    precio:2618000,
    tipo:'Insumo/Dotación',
    ciiu:'C (10–33) / R (90)',
    proceso:'Producción / Transformación / Edición'
  }),

  producto({
    id:'P440',
    sector:'produccion',
    icono:'❄️',
    nombre:'Cámara fría/cuarto frío Cuarto frío de 2.00 x 2.00 x 2.50 mts para carnes, pescado, pollo, mariscos, frutas, verduras, e',
    desc:'Cuarto frío 2.00 x 2.00 x 2.50 m para carnes y productos perecederos. Panel sándwich aislante. Control digital de temperatura.',
    precio:14280000,
    tipo:'Equipo',
    ciiu:'C (10–33) / R (90)',
    proceso:'Producción / Transformación / Edición'
  }),

  producto({
    id:'P441',
    sector:'produccion',
    icono:'❄️',
    nombre:'Refrigerador/congelador productivo Peso199kg',
    desc:'Dimensiones totales132 x 80 x 210 cms (frente, profundo, alto) Maxima Temperatura ambiente26 ° C / 60% HR Potencia300W 1/3 Hp Corriente4 amperios Voltaje110v Capacidad1300L Rango de temperatura+4°C a + 8 ° C',
    precio:3808000,
    tipo:'Equipo',
    ciiu:'C (10–33) / R (90)',
    proceso:'Producción / Transformación / Edición'
  }),

  producto({
    id:'P442',
    sector:'produccion',
    icono:'🪑',
    nombre:'Carro bandejero inoxidable Carro de Servicio para 3 bandejas en Acero Inox.',
    desc:'Es desmontable y cuenta con tubo de acero inoxidable de 25 mm. de diámetro; además sus ruedas llevan freno',
    precio:809200,
    tipo:'Mobiliario',
    ciiu:'C (10–33) / R (90)',
    proceso:'Producción / Transformación / Edición'
  }),

  producto({
    id:'P443',
    sector:'produccion',
    icono:'📦',
    nombre:'Contenedores grado alimentario Contenedor Portátil Scepter de Grado Alimenticio ? 19 L con Boquilla Reversible',
    desc:'Contenedores portátiles de grado alimentario. Material libre de BPA. Herméticos y apilables. Para almacenamiento de líquidos y alimentos en restaurantes.',
    precio:65450,
    tipo:'Insumo/Dotación',
    ciiu:'C (10–33) / R (90)',
    proceso:'Producción / Transformación / Edición'
  }),

  producto({
    id:'P444',
    sector:'produccion',
    icono:'📦',
    nombre:'Envases grado alimentario (frascos/tarrinas)',
    desc:'Envases de grado alimentario: frascos y tarrinas. Material inocuo. Para mermeladas, salsas, lácteos y miel. Herméticos y apilables.',
    precio:101150,
    tipo:'Insumo/Dotación',
    ciiu:'C (10–33) / R (90)',
    proceso:'Producción / Transformación / Edición'
  }),

  producto({
    id:'P445',
    sector:'produccion',
    icono:'🧵',
    nombre:'Máquina plana industrial (confección) Función: Costura recta gama genérica',
    desc:'Garantía: 06 meses por kit electrónico y 06 meses por descalibraciones mecánicas Tipo de aguja: Cubo delgado DBX1 o Cubo grueso 135X5 Sistema paso a paso Velocidad: Variable desde 500 hasta 4000 rpm Longitud de puntada (cubo delgado a 5 mm o cubo grueso 7 mm) Posicionador de aguja Luz led integrada Motor direct drive incorporado de 550w Devanador incorporado Mueble importado',
    precio:2117070,
    tipo:'Equipo',
    ciiu:'C (10–33) / R (90)',
    proceso:'Producción / Transformación / Edición'
  }),

  producto({
    id:'P446',
    sector:'produccion',
    icono:'🧵',
    nombre:'Overlock industrial Overlock con costura overlock de seis hilos para telas ligeras y medianas Fácil cambio para diferent',
    desc:'Sistema de lubricación automática Mejorado - mecanismo de barra de aguja cerrado Tensión óptima del hilo Diseño unico Servomotor integrado en la cabeza, control de velocidad continuo El ahorro de energía Ruido bajo Alto rendimiento',
    precio:3354741,
    tipo:'Insumo/Dotación',
    ciiu:'C (10–33) / R (90)',
    proceso:'Producción / Transformación / Edición'
  }),

  producto({
    id:'P447',
    sector:'produccion',
    icono:'🧵',
    nombre:'Recubridora industrial TIPO Recubridora - Collarín USO Industrial MOTOR Mecatrónica',
    desc:'MARCA Willcox MODELO W500D PUNTADA Collarin Recubierto  AGUJAS 3 HILOS 5 VOLTAJE 110V POTENCIA 550W',
    precio:3908436,
    tipo:'Insumo/Dotación',
    ciiu:'C (10–33) / R (90)',
    proceso:'Producción / Transformación / Edición'
  }),

  producto({
    id:'P448',
    sector:'produccion',
    icono:'🧵',
    nombre:'Cortadora vertical de tela Motores',
    desc:'110V, 1ph, 50 / 60Hz 220V, 1ph o 3ph, 50 / 60Hz Estándar: velocidad única Opcional: velocidad dual, velocidad variable Caballo de fuerza 2hp, 1ph a 4,000 RPM 2hp, 3ph a 4,000 RPM Peso 41 libras (18.5kg) Cuchillas Estándar: acero al carbono Opcional: acero de alta velocidad, recubierto de PTFE, borde ondulado, ranura ondulada, punta en ángulo Cinturones Estándar: grano medio Opcional: fino, grueso,',
    precio:1345295,
    tipo:'Insumo/Dotación',
    ciiu:'C (10–33) / R (90)',
    proceso:'Producción / Transformación / Edición'
  }),

  producto({
    id:'P449',
    sector:'produccion',
    icono:'🪑',
    nombre:'Mesa de corte textil 120 x 180 cm Nuestra Mesa de Corte para Tela – Diseño Americano está fabricada para trabajos exigen',
    desc:'La mesa tiene una altura fija de 90 cm, ideal para mantener una postura ergonómica durante el corte, evitando dolores de espalda y fatiga en jornadas largas de trabajo.  Disponible en múltiples medidas, es un producto modular y adaptable a distintos espacios de trabajo. Puedes elegir la variante que mejor se acomode a tu taller desde el menú.',
    precio:1628515,
    tipo:'Mobiliario',
    ciiu:'C (10–33) / R (90)',
    proceso:'Producción / Transformación / Edición'
  }),

  producto({
    id:'P450',
    sector:'produccion',
    icono:'🖨️',
    nombre:'Plotter de corte (si aplica a producción gráfica) Dimensiones',
    desc:'97x33x36 Referencia del Producto en el Certificado/Empaque ProCut Plus KI-720AB Composición 60% Acero 30% Plástico 5% Aluminio 5% Electrónica Presentación Unidad Tipo de adorno Otros Material del cuerpo Metal Color Amarillo',
    precio:19542180,
    tipo:'Insumo/Dotación',
    ciiu:'C (10–33) / R (90)',
    proceso:'Producción / Transformación / Edición'
  }),

  producto({
    id:'P451',
    sector:'produccion',
    icono:'🏭',
    nombre:'Laminadora/calandra (producción gráfica) Aplicable a máquinas UV DTF, puede completar las tareas de estampado en oro, el',
    desc:'- Ambos rodillos de presión de la máquina están equipados con funciones de calentamiento. - Alta automatización y fácil de usar.',
    precio:98560560,
    tipo:'Insumo/Dotación',
    ciiu:'C (10–33) / R (90)',
    proceso:'Producción / Transformación / Edición'
  }),

  producto({
    id:'P452',
    sector:'produccion',
    icono:'🏭',
    nombre:'Laminadora/calandra (producción gráfica) Aplicable a máquinas UV DTF, puede completar las tareas de estampado en oro, el',
    desc:'- Ambos rodillos de presión de la máquina están equipados con funciones de calentamiento. - Alta automatización y fácil de usar.',
    precio:127024170,
    tipo:'Insumo/Dotación',
    ciiu:'C (10–33) / R (90)',
    proceso:'Producción / Transformación / Edición'
  }),

  producto({
    id:'P453',
    sector:'produccion',
    icono:'📷',
    nombre:'Cámara de video semiprofesional Tipo de Camara',
    desc:'Semiprofesional  Tamaño Pantalla 3  Pulgadas Profundida de Inmersion 0  Metro(s) Resolucion de la Foto 24.1  Megapixeles Zoom Digital No Tiene Zoom Digital  Zoom Optico No Tiene Zoom Optico',
    precio:3332000,
    tipo:'Equipo',
    ciiu:'C (10–33) / R (90)',
    proceso:'Producción / Transformación / Edición'
  }),

  producto({
    id:'P454',
    sector:'produccion',
    icono:'📷',
    nombre:'Lentes básicos (kit) Objetivo con montura EF / formato de fotograma completo',
    desc:'Rango de apertura: f / 1.8 a f / 22 Super Spectra Coating Motor paso a paso STM Diafragma redondeado de 7 cuchillas',
    precio:1428000,
    tipo:'Insumo/Dotación',
    ciiu:'C (10–33) / R (90)',
    proceso:'Producción / Transformación / Edición'
  }),

  producto({
    id:'P455',
    sector:'produccion',
    icono:'🧺',
    nombre:'Trípode profesional Capacidad de carga: 34 lb',
    desc:'Trípode extensible de 24 a 77 pulgadas Longitud plegada: 19″ Patas de aleación de aluminio de 4 secciones con sistema de bloqueo abatible Pata y columna convertibles en monopie Rosca macho de 1/4″-20 Giro, inclinación y rotación de 360° Inclinación de 90° Columna central de 2 secciones Peso: 3,5 libras',
    precio:452200,
    tipo:'Insumo/Dotación',
    ciiu:'C (10–33) / R (90)',
    proceso:'Producción / Transformación / Edición'
  }),

  producto({
    id:'P456',
    sector:'produccion',
    icono:'🪞',
    nombre:'Gimbal/estabilizador Para cámaras sin espejo y teléfonos inteligentes',
    desc:'Diseño liviano, carga útil de hasta 4,4 lb Control de cámara mediante Bluetooth/USB-C Funciona con el módulo de seguimiento inteligente Modos horizontales y verticales, ejes de 360° Batería de 3100 mAh, 13 horas de duración Funciones de panorama, time-lapse y seguimiento Puerto NATO para asas y accesorios Incluye agarre extendido/trípode',
    precio:809200,
    tipo:'Equipo',
    ciiu:'C (10–33) / R (90)',
    proceso:'Producción / Transformación / Edición'
  }),

  producto({
    id:'P457',
    sector:'produccion',
    icono:'💡',
    nombre:'Kit de iluminación LED continua Temperatura de color: 3200-5600 K, CRI: 96',
    desc:'660 LED: 330 luz diurna y 330 tungsteno Tres adaptadores de 100-240 V CA, 50/60 Hz Tres tripodes de iluminación’ Tres estuches de transporte para paneles LED',
    precio:1011500,
    tipo:'Equipo',
    ciiu:'C (10–33) / R (90)',
    proceso:'Producción / Transformación / Edición'
  }),

  producto({
    id:'P458',
    sector:'produccion',
    icono:'🎙️',
    nombre:'Micrófonos inalámbricos Sistema inalámbrico profesional, dos frecuencias, dos antenas, dos micrófonos de mano. 60 metr',
    desc:'Sistema inalámbrico profesional con dos micrófonos y receptor. Para presentaciones, grabaciones y producción de video. Sin cables.',
    precio:809200,
    tipo:'Insumo/Dotación',
    ciiu:'C (10–33) / R (90)',
    proceso:'Producción / Transformación / Edición'
  }),

  producto({
    id:'P459',
    sector:'produccion',
    icono:'🎙️',
    nombre:'Interface de audio La interfaz Sonic Cube II es una interfaz de audio profesional de doble canal que cuenta con un pream',
    desc:'Interfaz de audio profesional para grabación y producción musical. Entradas XLR y jack. Compatible con computador vía USB. Fidelidad profesional.',
    precio:571200,
    tipo:'Equipo',
    ciiu:'C (10–33) / R (90)',
    proceso:'Producción / Transformación / Edición'
  }),

  producto({
    id:'P460',
    sector:'produccion',
    icono:'🎙️',
    nombre:'Grabadora de audio Gracias a un micrófono de alta sensibilidad, una reproducción sencilla y sus más de 159 horas de alma',
    desc:'Grabadora de audio digital portátil con micrófono de alta sensibilidad. Graba en MP3/WAV. Para podcasts, entrevistas y registro de campo.',
    precio:452200,
    tipo:'Equipo',
    ciiu:'C (10–33) / R (90)',
    proceso:'Producción / Transformación / Edición'
  }),

  producto({
    id:'P461',
    sector:'produccion',
    icono:'💾',
    nombre:'Disco duro externo ssd externo 2 tb',
    desc:'Disco duro externo SSD de 2 TB. Alta velocidad de transferencia. Compacto y resistente. Para respaldo de archivos de fotografía, video y proyectos digitales.',
    precio:333200,
    tipo:'Insumo/Dotación',
    ciiu:'C (10–33) / R (90)',
    proceso:'Producción / Transformación / Edición'
  }),

  producto({
    id:'P462',
    sector:'produccion',
    icono:'🎙️',
    nombre:'Monitor de referencia Entradas:',
    desc:'"Bluetooth 5.0 1- Estéreo de 1/8"" 2- TRS ¼” balanceada 2- RCA no balanceadas"  Respuesta en frecuencia: 80 Hz – 20 kHz  Frecuencia de Crossover: 2.8 kHz  Potencia del amplificador: 25W/por altavoz  LF Driver: 3.5"',
    precio:809200,
    tipo:'Insumo/Dotación',
    ciiu:'C (10–33) / R (90)',
    proceso:'Producción / Transformación / Edición'
  }),

  producto({
    id:'P463',
    sector:'produccion',
    icono:'📸',
    nombre:'Fondo croma Fondo perfecto para televisión, producción de video y fotografía.',
    desc:'El telón cuenta con un doblez para colgar en la barra. Bordes reforzados para evitar daños de tela. Hecho de 100% puro algodón muslin.',
    precio:101150,
    tipo:'Insumo/Dotación',
    ciiu:'C (10–33) / R (90)',
    proceso:'Producción / Transformación / Edición'
  }),

  producto({
    id:'P464',
    sector:'produccion',
    icono:'📺',
    nombre:'Teleprompter básico Lectura clara, sin necesidad de memorizar, presentación fluida y natural.',
    desc:'• Fácil de instalar y guardar. • Sin fugas de luz en el lente de la cámara. • Mantiene el nivel de los ojos y la alineación del lente para diferentes dispositivos. • Clip de liberación rápida para smartphone. • Anillo adaptador de lente de cámara: 58/67/72/77/82 mm. • Admite disparos con lente gran angular sin viñeteado. • Cuenta con soportes para zapata fría y una entrada de rosca de 1/4" • Contr',
    precio:452200,
    tipo:'Equipo',
    ciiu:'C (10–33) / R (90)',
    proceso:'Producción / Transformación / Edición'
  }),

  producto({
    id:'P465',
    sector:'produccion',
    icono:'💰',
    nombre:'Case/rack de transporte de equipos Rack de 8 unidades ligero y resistente, fabricado en una mezcla de componentes y polí',
    desc:'Rack de transporte de 8 unidades, liviano y resistente. Protege equipos de audio y video durante el traslado. Para camarógrafos y productores de contenido.',
    precio:333200,
    tipo:'Insumo/Dotación',
    ciiu:'C (10–33) / R (90)',
    proceso:'Producción / Transformación / Edición'
  }),

  producto({
    id:'CAT2-119',
    sector:'produccion',
    icono:'🪑',
    nombre:'Banco de trabajo industrial - Banco de trabajo estándar móvil - 2000 x 700 x 840 mm L x A x A WS885N-2000M40-X7000',
    desc:'Banco de trabajo industrial estándar móvil (2000 x 700 mm). Superficie resistente. Ruedas con freno. Ideal para talleres de metalmecánica, carpintería y servicios técnicos.',
    precio:809200,
    tipo:'Insumo/Dotación',
    ciiu:'C (10–33) / R (90)',
    proceso:'Producción / Transformación / Edición'
  }),

  producto({
    id:'CAT2-120',
    sector:'produccion',
    icono:'🗄️',
    nombre:'Estantería metálica industrial torre 240 x 120 cm',
    desc:'Estantería metálica industrial 240 x 120 cm. Estructura en acero anticorrosivo. Capacidad por nivel hasta 200 kg. Para bodegas, tiendas y talleres.',
    precio:380800,
    tipo:'Mobiliario',
    ciiu:'C (10–33) / R (90)',
    proceso:'Producción / Transformación / Edición'
  }),

  producto({
    id:'CAT2-121',
    sector:'produccion',
    icono:'🏭',
    nombre:'Compresor de aire Tipo Compresores de aire',
    desc:'Uso de herramienta Industrial Largo del cable 1.50 Capacidad del estanque 50 Incluye * 1 Botella de aceite monogrado SAE30 • 1 Filtro de aire • 1 Tapón del depósito de aceite • 2 Ruedas • 2 Soportes frontales de hule • 1 Bolsa con tornillería Presión máxima 116 Caudal máximo 3.2 Alimentación Eléctrica Potencia 2.610 Voltaje 120 Motor Con Bobinas de aluminio Flujo de salida 90',
    precio:1011500,
    tipo:'Equipo',
    ciiu:'C (10–33) / R (90)',
    proceso:'Producción / Transformación / Edición'
  }),

  producto({
    id:'CAT2-122',
    sector:'produccion',
    icono:'🌬️',
    nombre:'Extractor de aire/ventilación industrialExtractor De Aire Para Baño y Cocina Industrial Para Pared 41x41x14.5cm 110 Volt',
    desc:'Extractor de aire para ventilación industrial. Bajo consumo y silencioso. Mejora la calidad del aire. Fácil instalación en paredes y techos.',
    precio:220150,
    tipo:'Equipo',
    ciiu:'C (10–33) / R (90)',
    proceso:'Producción / Transformación / Edición'
  }),

  producto({
    id:'CAT2-123',
    sector:'produccion',
    icono:'🧹',
    nombre:'Aspiradora industrial Especificaciones',
    desc:'Tipo Barril Ancho 30 cm Alto 53 cm Largo 30 cm Peso 5 kg Tipo de aspiradora Barril Tipo de filtro Polvo, Agua Uso de herramienta Industrial Material Acero inoxidable Largo del cable 6 m Largo de la manguera 2.4 m Color Plateado Incluye 1 Manguera de diámetro 1 1/4" (32 mm). 1.9 m (6.2 ft) con seguro de ajuste, 1 Boquilla tipo garra, 1 Boquilla para ranuras, 1 Boquilla 2 en 1 para piso y alfombra,',
    precio:809200,
    tipo:'Insumo/Dotación',
    ciiu:'C (10–33) / R (90)',
    proceso:'Producción / Transformación / Edición'
  }),

  producto({
    id:'CAT2-124',
    sector:'produccion',
    icono:'💡',
    nombre:'Iluminación industrial de taller la Lámpara Led Highbay 200W, ideal para interiores industriales. Con 18000 lm, 6500K y',
    desc:'Lámpara LED HighBay 200W para iluminación industrial de talleres. Alta eficiencia, bajo consumo. Vida útil de 50,000 horas. Luz blanca fría.',
    precio:148750,
    tipo:'Equipo',
    ciiu:'C (10–33) / R (90)',
    proceso:'Producción / Transformación / Edición'
  }),

  producto({
    id:'CAT2-125',
    sector:'produccion',
    icono:'📏',
    nombre:'Herramientas de control de calidad (calibrador) Tipo : Calibradores y micrómetros',
    desc:'•Ancho : 5 mm  •Alto : 1.5 cm  •Largo : 1.5 cm  •Color : Negro',
    precio:113050,
    tipo:'Insumo/Dotación',
    ciiu:'C (10–33) / R (90)',
    proceso:'Producción / Transformación / Edición'
  }),

  producto({
    id:'CAT2-126',
    sector:'produccion',
    icono:'📏',
    nombre:'Micrómetro MICRÓMETRO DE EXTERIORES PROFESIONAL, CAPACIDAD 0- 1", PRECISIÓN 0.001" ASIMETO',
    desc:'Micrómetro de exteriores profesional, capacidad 0-1 pulgada, precisión 0.001 mm. Para medición precisa en metalmecánica y control de calidad.',
    precio:113050,
    tipo:'Insumo/Dotación',
    ciiu:'C (10–33) / R (90)',
    proceso:'Producción / Transformación / Edición'
  }),

  producto({
    id:'CAT2-127',
    sector:'produccion',
    icono:'⚖️',
    nombre:'Báscula digital industrial Báscula de piso Industrial 150KG Capacidad: 150kg',
    desc:'División: 20g Unidades de peso: lb y Kg Indicador en ABS de alta resistencia Batería interna recargable de 4V y autonomía de 8horas Dimensión plataforma: 30x40cm Display: LCD Display de tres pantallas con 7 dígitos cada uno Función Indicador: Liquidador Sistema de Tara para disminuir recipientes',
    precio:452200,
    tipo:'Insumo/Dotación',
    ciiu:'C (10–33) / R (90)',
    proceso:'Producción / Transformación / Edición'
  }),

  producto({
    id:'CAT2-128',
    sector:'produccion',
    icono:'🪑',
    nombre:'Mesa inoxidable de preparación Mesas Acero 90 x 150 x 50 Con Entrepaño',
    desc:'Mesa de preparación en acero inoxidable (90 x 150 x 50 cm) con entrepaño. Resistente a la corrosión. Cumple normas sanitarias.',
    precio:1011500,
    tipo:'Mobiliario',
    ciiu:'C (10–33) / R (90)',
    proceso:'Producción / Transformación / Edición'
  }),

  producto({
    id:'CAT2-129',
    sector:'produccion',
    icono:'🚰',
    nombre:'Lavamanos en acero inoxidable (operación) Grifería institucional kit válvula de pedal con lavamanos de 28x30',
    desc:'Lavamanos en acero inoxidable con grifería institucional de válvula de pedal o palanca. Cumple normas sanitarias. Para cocinas industriales y áreas de manipulación de alimentos.',
    precio:333200,
    tipo:'Insumo/Dotación',
    ciiu:'C (10–33) / R (90)',
    proceso:'Producción / Transformación / Edición'
  }),

  producto({
    id:'CAT2-130',
    sector:'produccion',
    icono:'📦',
    nombre:'Selladora térmica de bolsas Longitud de sellado: 30cm. ¡Sella bolsas de tamaño considerable para satisfacer todas tus ne',
    desc:'Ancho de sellado: 2mm, el tamaño perfecto para un sellado seguro y confiable. Tiempo de calentamiento ultrarrápido: entre 0.2 y 1.3 segundos, para que puedas trabajar eficientemente. Peso ligero de solo 2.9 kg, lo que facilita su transporte y manejo.',
    precio:101150,
    tipo:'Insumo/Dotación',
    ciiu:'C (10–33) / R (90)',
    proceso:'Producción / Transformación / Edición'
  }),

  producto({
    id:'CAT2-131',
    sector:'produccion',
    icono:'📦',
    nombre:'Selladora al vacío Tipo',
    desc:'Electrodomésticos de cocina modernos Ancho 43.18 cm Alto 25.4 cm Largo 52.5 cm Material PLASTICO Color Negro Potencia nominal 125 W Voltaje 117 V',
    precio:220150,
    tipo:'Insumo/Dotación',
    ciiu:'C (10–33) / R (90)',
    proceso:'Producción / Transformación / Edición'
  }),

  producto({
    id:'CAT2-132',
    sector:'produccion',
    icono:'📦',
    nombre:'Empacadora semiautomática',
    desc:'Empacadora semiautomática para sellado de productos en bolsas. Aumenta la velocidad de empaque. Para procesadoras de alimentos y pequeñas industrias.',
    precio:1428000,
    tipo:'Insumo/Dotación',
    ciiu:'C (10–33) / R (90)',
    proceso:'Producción / Transformación / Edición'
  }),

  producto({
    id:'CAT2-133',
    sector:'produccion',
    icono:'🏷️',
    nombre:'Etiquetadora manual/semiauto Dimensiones: 27.6cm de ancho, 58cm de alto y 86cm de profundidad.',
    desc:'Velocidad máxima de impresión en blanco y negro: 1ppm. Velocidad máxima de impresión en color: 1ppm. Resolución máxima de impresión en blanco y negro: 0. Resolución máxima de impresión en color: 0. Es electrónico. Es portátil. Capacidad máxima de la tarjeta de memoria: 0MB. Tipo de pilas: No.',
    precio:113050,
    tipo:'Insumo/Dotación',
    ciiu:'C (10–33) / R (90)',
    proceso:'Producción / Transformación / Edición'
  }),

  producto({
    id:'CAT2-134',
    sector:'produccion',
    icono:'🖨️',
    nombre:'Impresora de etiquetas MÉTODO DE IMPRESIÓN',
    desc:'Térmico directo, Térmico por transferencia ANCHO DE IMPESIÓN 104MM VELOCIIDAD DE IMPESIÓN 127MM/S INTERFAZ Ethernet, USB COMPATIBILIDAD Android, Windows, Linux, Mac OSEMULACIÓN DPL, EPL, TSPL, ZPL',
    precio:416500,
    tipo:'Equipo',
    ciiu:'C (10–33) / R (90)',
    proceso:'Producción / Transformación / Edición'
  }),

  producto({
    id:'CAT2-135',
    sector:'produccion',
    icono:'📱',
    nombre:'Lector de código de barras escaners',
    desc:'Lector de código de barras USB o inalámbrico. Lee códigos 1D y 2D. Compatible con sistemas POS e inventario. Para tiendas y bodegas.',
    precio:101150,
    tipo:'Insumo/Dotación',
    ciiu:'C (10–33) / R (90)',
    proceso:'Producción / Transformación / Edición'
  }),

  producto({
    id:'CAT2-136',
    sector:'produccion',
    icono:'💻',
    nombre:'Procesador: AMD Ryzen™ 3 7330U 4 núcleos',
    desc:'de CPU, 8 hilos, Frecuencia Base de 2.3 GHz hasta 4.3 GHz Frecuencia Máxima, 10 MB de Cache L2 + L3 Chipset: Integrado en el procesador Sistema Operativo FreeDOS 3.0 en Español. Pantalla Interfaces Certificaciones Seguridad Garantía Gráficos Memoria RAM Almacenamiento Teclado Mouse Audio Cámara Web Conectividad Batería Adaptador AC Peso (2) USB 3.2 Gen 1 (1) USB Tipo C 3.2 Gen1 (Datos) (1) HDMI v1',
    precio:2627520,
    tipo:'Equipo',
    ciiu:'C (10–33) / R (90)',
    proceso:'Producción / Transformación / Edición'
  }),

  producto({
    id:'CAT2-137',
    sector:'produccion',
    icono:'🔋',
    nombre:'UPS / regulador de voltaje Ups Hikvision de 1000 Va 600w 6 Tomas Nema 5-15r (4r - 2sr)',
    desc:'UPS Hikvision 1000 VA/600 W con 6 tomas Nema. Protege equipos de apagones y fluctuaciones de voltaje. Autonomía de 10-15 minutos.',
    precio:408009,
    tipo:'Insumo/Dotación',
    ciiu:'C (10–33) / R (90)',
    proceso:'Producción / Transformación / Edición'
  }),

  producto({
    id:'CAT2-138',
    sector:'produccion',
    icono:'🏭',
    nombre:'Deshidratador industrial en Acero Inoxidable 10 bandejas Seca las comida por un ventilador que ha sido instalado en la p',
    desc:'El deshidratador se apagara automáticamente cuando la hora fijada anteriormente llegue a su fin. El reloj automático y el termostato, harán que la deshidratación de la comida, sea como un abrir y cerrar de ojos. Instrucciones vienen incluidas. Maquina eléctrica 110 volts. Dimensiones externas aprox: 54 cm de largo, por 42 cm de ancho y 38 cm de alto. Pesa 36 libras aprox. Capacidad de 1.5 metros c',
    precio:2000296,
    tipo:'Insumo/Dotación',
    ciiu:'C (10–33) / R (90)',
    proceso:'Producción / Transformación / Edición'
  }),

  producto({
    id:'CAT2-139',
    sector:'produccion',
    icono:'🍳',
    nombre:'Horno industrial de convección Horno de convección a gas con controles eléctricos. Está fabricado en acero inoxidable 43',
    desc:'Horno de convección a gas con controles eléctricos. Distribución uniforme del calor. Alta capacidad. Para panaderías y restaurantes.',
    precio:4522000,
    tipo:'Equipo',
    ciiu:'C (10–33) / R (90)',
    proceso:'Producción / Transformación / Edición'
  }),

  producto({
    id:'CAT2-140',
    sector:'produccion',
    icono:'🍳',
    nombre:'Mezcladora industrial ReferenciaBX35A',
    desc:'Voltaje110v Capacidad35Kg Potencia0.75Kw Frecuencia60Hz Dimensiones67x51x110cm',
    precio:3332000,
    tipo:'Insumo/Dotación',
    ciiu:'C (10–33) / R (90)',
    proceso:'Producción / Transformación / Edición'
  }),

  producto({
    id:'CAT2-141',
    sector:'produccion',
    icono:'🍳',
    nombre:'Molino/triturador de granos Voltaje110 voltios',
    desc:'Capacidad de molienda800g Potencia2.000 W Velocidad25.000 rpm Capacidad de producción20-40 kg/h Tiempo continuo operación5min - Descanso: 8min Dimensiones22 x 21 x 49.5 cm',
    precio:809200,
    tipo:'Insumo/Dotación',
    ciiu:'C (10–33) / R (90)',
    proceso:'Producción / Transformación / Edición'
  }),

  producto({
    id:'CAT2-142',
    sector:'produccion',
    icono:'🍲',
    nombre:'Marmita/75 litros, a gas en acero inoxidable, sistema para controlar la temperatura del producto',
    desc:'Marmita de 75 litros a gas en acero inoxidable con control de temperatura. Para sopas, salsas y alimentos en gran cantidad.',
    precio:2618000,
    tipo:'Insumo/Dotación',
    ciiu:'C (10–33) / R (90)',
    proceso:'Producción / Transformación / Edición'
  }),

  producto({
    id:'CAT2-143',
    sector:'produccion',
    icono:'❄️',
    nombre:'Cámara fría/cuarto frío Cuarto frío de 2.00 x 2.00 x 2.50 mts para carnes, pescado, pollo, mariscos, frutas, verduras, e',
    desc:'Cuarto frío 2.00 x 2.00 x 2.50 m para carnes y productos perecederos. Panel sándwich aislante. Control digital de temperatura.',
    precio:14280000,
    tipo:'Equipo',
    ciiu:'C (10–33) / R (90)',
    proceso:'Producción / Transformación / Edición'
  }),

  producto({
    id:'CAT2-144',
    sector:'produccion',
    icono:'❄️',
    nombre:'Refrigerador/congelador productivo Peso199kg',
    desc:'Dimensiones totales132 x 80 x 210 cms (frente, profundo, alto) Maxima Temperatura ambiente26 ° C / 60% HR Potencia300W 1/3 Hp Corriente4 amperios Voltaje110v Capacidad1300L Rango de temperatura+4°C a + 8 ° C',
    precio:3808000,
    tipo:'Equipo',
    ciiu:'C (10–33) / R (90)',
    proceso:'Producción / Transformación / Edición'
  }),

  producto({
    id:'CAT2-145',
    sector:'produccion',
    icono:'🪑',
    nombre:'Carro bandejero inoxidable Carro de Servicio para 3 bandejas en Acero Inox.',
    desc:'Es desmontable y cuenta con tubo de acero inoxidable de 25 mm. de diámetro; además sus ruedas llevan freno',
    precio:809200,
    tipo:'Mobiliario',
    ciiu:'C (10–33) / R (90)',
    proceso:'Producción / Transformación / Edición'
  }),

  producto({
    id:'CAT2-146',
    sector:'produccion',
    icono:'📦',
    nombre:'Contenedores grado alimentario Contenedor Portátil Scepter de Grado Alimenticio ? 19 L con Boquilla Reversible',
    desc:'Contenedores portátiles de grado alimentario. Material libre de BPA. Herméticos y apilables. Para almacenamiento de líquidos y alimentos en restaurantes.',
    precio:65450,
    tipo:'Insumo/Dotación',
    ciiu:'C (10–33) / R (90)',
    proceso:'Producción / Transformación / Edición'
  }),

  producto({
    id:'CAT2-147',
    sector:'produccion',
    icono:'📦',
    nombre:'Envases grado alimentario (frascos/tarrinas)',
    desc:'Envases de grado alimentario: frascos y tarrinas. Material inocuo. Para mermeladas, salsas, lácteos y miel. Herméticos y apilables.',
    precio:101150,
    tipo:'Insumo/Dotación',
    ciiu:'C (10–33) / R (90)',
    proceso:'Producción / Transformación / Edición'
  }),

  producto({
    id:'CAT2-148',
    sector:'produccion',
    icono:'🧵',
    nombre:'Máquina plana industrial (confección) Función: Costura recta gama genérica',
    desc:'Garantía: 06 meses por kit electrónico y 06 meses por descalibraciones mecánicas Tipo de aguja: Cubo delgado DBX1 o Cubo grueso 135X5 Sistema paso a paso Velocidad: Variable desde 500 hasta 4000 rpm Longitud de puntada (cubo delgado a 5 mm o cubo grueso 7 mm) Posicionador de aguja Luz led integrada Motor direct drive incorporado de 550w Devanador incorporado Mueble importado',
    precio:1779050,
    tipo:'Equipo',
    ciiu:'C (10–33) / R (90)',
    proceso:'Producción / Transformación / Edición'
  }),

  producto({
    id:'CAT2-149',
    sector:'produccion',
    icono:'🧵',
    nombre:'Overlock industrial Overlock con costura overlock de seis hilos para telas ligeras y medianas Fácil cambio para diferent',
    desc:'Sistema de lubricación automática Mejorado - mecanismo de barra de aguja cerrado Tensión óptima del hilo Diseño unico Servomotor integrado en la cabeza, control de velocidad continuo El ahorro de energía Ruido bajo Alto rendimiento',
    precio:2819110,
    tipo:'Insumo/Dotación',
    ciiu:'C (10–33) / R (90)',
    proceso:'Producción / Transformación / Edición'
  }),

  producto({
    id:'CAT2-150',
    sector:'produccion',
    icono:'🧵',
    nombre:'Recubridora industrial TIPO Recubridora - Collarín USO Industrial MOTOR Mecatrónica',
    desc:'MARCA Willcox MODELO W500D PUNTADA Collarin Recubierto  AGUJAS 3 HILOS 5 VOLTAJE 110V POTENCIA 550W',
    precio:3284400,
    tipo:'Insumo/Dotación',
    ciiu:'C (10–33) / R (90)',
    proceso:'Producción / Transformación / Edición'
  }),

  producto({
    id:'CAT2-151',
    sector:'produccion',
    icono:'🧵',
    nombre:'Cortadora vertical de tela Motores',
    desc:'110V, 1ph, 50 / 60Hz 220V, 1ph o 3ph, 50 / 60Hz Estándar: velocidad única Opcional: velocidad dual, velocidad variable Caballo de fuerza 2hp, 1ph a 4,000 RPM 2hp, 3ph a 4,000 RPM Peso 41 libras (18.5kg) Cuchillas Estándar: acero al carbono Opcional: acero de alta velocidad, recubierto de PTFE, borde ondulado, ranura ondulada, punta en ángulo Cinturones Estándar: grano medio Opcional: fino, grueso,',
    precio:1130500,
    tipo:'Insumo/Dotación',
    ciiu:'C (10–33) / R (90)',
    proceso:'Producción / Transformación / Edición'
  }),

  producto({
    id:'CAT2-152',
    sector:'produccion',
    icono:'🪑',
    nombre:'Mesa de corte textil 120 x 180 cm Nuestra Mesa de Corte para Tela – Diseño Americano está fabricada para trabajos exigen',
    desc:'La mesa tiene una altura fija de 90 cm, ideal para mantener una postura ergonómica durante el corte, evitando dolores de espalda y fatiga en jornadas largas de trabajo.  Disponible en múltiples medidas, es un producto modular y adaptable a distintos espacios de trabajo. Puedes elegir la variante que mejor se acomode a tu taller desde el menú.',
    precio:1368500,
    tipo:'Mobiliario',
    ciiu:'C (10–33) / R (90)',
    proceso:'Producción / Transformación / Edición'
  }),

  producto({
    id:'CAT2-153',
    sector:'produccion',
    icono:'🖨️',
    nombre:'Plotter de corte (si aplica a producción gráfica) Dimensiones',
    desc:'97x33x36 Referencia del Producto en el Certificado/Empaque ProCut Plus KI-720AB Composición 60% Acero 30% Plástico 5% Aluminio 5% Electrónica Presentación Unidad Tipo de adorno Otros Material del cuerpo Metal Color Amarillo',
    precio:16422000,
    tipo:'Insumo/Dotación',
    ciiu:'C (10–33) / R (90)',
    proceso:'Producción / Transformación / Edición'
  }),

  producto({
    id:'CAT2-154',
    sector:'produccion',
    icono:'🏭',
    nombre:'Laminadora/calandra (producción gráfica) Aplicable a máquinas UV DTF, puede completar las tareas de estampado en oro, el',
    desc:'- Ambos rodillos de presión de la máquina están equipados con funciones de calentamiento. - Alta automatización y fácil de usar.',
    precio:82824000,
    tipo:'Insumo/Dotación',
    ciiu:'C (10–33) / R (90)',
    proceso:'Producción / Transformación / Edición'
  }),

  producto({
    id:'CAT2-155',
    sector:'produccion',
    icono:'🏭',
    nombre:'Laminadora/calandra (producción gráfica) Aplicable a máquinas UV DTF, puede completar las tareas de estampado en oro, el',
    desc:'- Ambos rodillos de presión de la máquina están equipados con funciones de calentamiento. - Alta automatización y fácil de usar.',
    precio:106743000,
    tipo:'Insumo/Dotación',
    ciiu:'C (10–33) / R (90)',
    proceso:'Producción / Transformación / Edición'
  }),

  producto({
    id:'CAT2-156',
    sector:'produccion',
    icono:'📷',
    nombre:'Cámara de video semiprofesional Tipo de Camara',
    desc:'Semiprofesional  Tamaño Pantalla 3  Pulgadas Profundida de Inmersion 0  Metro(s) Resolucion de la Foto 24.1  Megapixeles Zoom Digital No Tiene Zoom Digital  Zoom Optico No Tiene Zoom Optico',
    precio:3332000,
    tipo:'Equipo',
    ciiu:'C (10–33) / R (90)',
    proceso:'Producción / Transformación / Edición'
  }),

  producto({
    id:'CAT2-157',
    sector:'produccion',
    icono:'📷',
    nombre:'Lentes básicos (kit) Objetivo con montura EF / formato de fotograma completo',
    desc:'Rango de apertura: f / 1.8 a f / 22 Super Spectra Coating Motor paso a paso STM Diafragma redondeado de 7 cuchillas',
    precio:1428000,
    tipo:'Insumo/Dotación',
    ciiu:'C (10–33) / R (90)',
    proceso:'Producción / Transformación / Edición'
  }),

  producto({
    id:'CAT2-158',
    sector:'produccion',
    icono:'🧺',
    nombre:'Trípode profesional Capacidad de carga: 34 lb',
    desc:'Trípode extensible de 24 a 77 pulgadas Longitud plegada: 19″ Patas de aleación de aluminio de 4 secciones con sistema de bloqueo abatible Pata y columna convertibles en monopie Rosca macho de 1/4″-20 Giro, inclinación y rotación de 360° Inclinación de 90° Columna central de 2 secciones Peso: 3,5 libras',
    precio:452200,
    tipo:'Insumo/Dotación',
    ciiu:'C (10–33) / R (90)',
    proceso:'Producción / Transformación / Edición'
  }),

  producto({
    id:'CAT2-159',
    sector:'produccion',
    icono:'🪞',
    nombre:'Gimbal/estabilizador Para cámaras sin espejo y teléfonos inteligentes',
    desc:'Diseño liviano, carga útil de hasta 4,4 lb Control de cámara mediante Bluetooth/USB-C Funciona con el módulo de seguimiento inteligente Modos horizontales y verticales, ejes de 360° Batería de 3100 mAh, 13 horas de duración Funciones de panorama, time-lapse y seguimiento Puerto NATO para asas y accesorios Incluye agarre extendido/trípode',
    precio:809200,
    tipo:'Equipo',
    ciiu:'C (10–33) / R (90)',
    proceso:'Producción / Transformación / Edición'
  }),

  producto({
    id:'CAT2-160',
    sector:'produccion',
    icono:'💡',
    nombre:'Kit de iluminación LED continua Temperatura de color: 3200-5600 K, CRI: 96',
    desc:'660 LED: 330 luz diurna y 330 tungsteno Tres adaptadores de 100-240 V CA, 50/60 Hz Tres tripodes de iluminación’ Tres estuches de transporte para paneles LED',
    precio:1011500,
    tipo:'Equipo',
    ciiu:'C (10–33) / R (90)',
    proceso:'Producción / Transformación / Edición'
  }),

  producto({
    id:'CAT2-161',
    sector:'produccion',
    icono:'🎙️',
    nombre:'Micrófonos inalámbricos Sistema inalámbrico profesional, dos frecuencias, dos antenas, dos micrófonos de mano. 60 metr',
    desc:'Sistema inalámbrico profesional con dos micrófonos y receptor. Para presentaciones, grabaciones y producción de video. Sin cables.',
    precio:809200,
    tipo:'Insumo/Dotación',
    ciiu:'C (10–33) / R (90)',
    proceso:'Producción / Transformación / Edición'
  }),

  producto({
    id:'CAT2-162',
    sector:'produccion',
    icono:'🎙️',
    nombre:'Interface de audio La interfaz Sonic Cube II es una interfaz de audio profesional de doble canal que cuenta con un pream',
    desc:'Interfaz de audio profesional para grabación y producción musical. Entradas XLR y jack. Compatible con computador vía USB. Fidelidad profesional.',
    precio:571200,
    tipo:'Equipo',
    ciiu:'C (10–33) / R (90)',
    proceso:'Producción / Transformación / Edición'
  }),

  producto({
    id:'CAT2-163',
    sector:'produccion',
    icono:'🎙️',
    nombre:'Grabadora de audio Gracias a un micrófono de alta sensibilidad, una reproducción sencilla y sus más de 159 horas de alma',
    desc:'Grabadora de audio digital portátil con micrófono de alta sensibilidad. Graba en MP3/WAV. Para podcasts, entrevistas y registro de campo.',
    precio:452200,
    tipo:'Equipo',
    ciiu:'C (10–33) / R (90)',
    proceso:'Producción / Transformación / Edición'
  }),

  producto({
    id:'CAT2-164',
    sector:'produccion',
    icono:'💾',
    nombre:'Disco duro externo ssd externo 2 tb',
    desc:'Disco duro externo SSD de 2 TB. Alta velocidad de transferencia. Compacto y resistente. Para respaldo de archivos de fotografía, video y proyectos digitales.',
    precio:333200,
    tipo:'Insumo/Dotación',
    ciiu:'C (10–33) / R (90)',
    proceso:'Producción / Transformación / Edición'
  }),

  producto({
    id:'CAT2-165',
    sector:'produccion',
    icono:'🎙️',
    nombre:'Monitor de referencia Entradas:',
    desc:'"Bluetooth 5.0 1- Estéreo de 1/8"" 2- TRS ¼” balanceada 2- RCA no balanceadas"  Respuesta en frecuencia: 80 Hz – 20 kHz  Frecuencia de Crossover: 2.8 kHz  Potencia del amplificador: 25W/por altavoz  LF Driver: 3.5"',
    precio:809200,
    tipo:'Insumo/Dotación',
    ciiu:'C (10–33) / R (90)',
    proceso:'Producción / Transformación / Edición'
  }),

  producto({
    id:'CAT2-166',
    sector:'produccion',
    icono:'📸',
    nombre:'Fondo croma Fondo perfecto para televisión, producción de video y fotografía.',
    desc:'El telón cuenta con un doblez para colgar en la barra. Bordes reforzados para evitar daños de tela. Hecho de 100% puro algodón muslin.',
    precio:101150,
    tipo:'Insumo/Dotación',
    ciiu:'C (10–33) / R (90)',
    proceso:'Producción / Transformación / Edición'
  }),

  producto({
    id:'CAT2-167',
    sector:'produccion',
    icono:'📺',
    nombre:'Teleprompter básico Lectura clara, sin necesidad de memorizar, presentación fluida y natural.',
    desc:'• Fácil de instalar y guardar. • Sin fugas de luz en el lente de la cámara. • Mantiene el nivel de los ojos y la alineación del lente para diferentes dispositivos. • Clip de liberación rápida para smartphone. • Anillo adaptador de lente de cámara: 58/67/72/77/82 mm. • Admite disparos con lente gran angular sin viñeteado. • Cuenta con soportes para zapata fría y una entrada de rosca de 1/4" • Contr',
    precio:452200,
    tipo:'Equipo',
    ciiu:'C (10–33) / R (90)',
    proceso:'Producción / Transformación / Edición'
  }),

  producto({
    id:'CAT2-168',
    sector:'produccion',
    icono:'💰',
    nombre:'Case/rack de transporte de equipos Rack de 8 unidades ligero y resistente, fabricado en una mezcla de componentes y polí',
    desc:'Rack de transporte de 8 unidades, liviano y resistente. Protege equipos de audio y video durante el traslado. Para camarógrafos y productores de contenido.',
    precio:333200,
    tipo:'Insumo/Dotación',
    ciiu:'C (10–33) / R (90)',
    proceso:'Producción / Transformación / Edición'
  })

];

// Agropecuario
const PRODUCTOS_AGRO=[
  producto({
    id:'P149',
    sector:'agro',
    icono:'🌱',
    nombre:'Semillas certificadas (granos y hortalizas) 10 gramos',
    desc:'Semillas certificadas de granos y hortalizas, 10 gramos. Alta tasa de germinación. Resistentes a enfermedades. Adaptadas al clima colombiano.',
    precio:55335,
    tipo:'Insumo/Dotación',
    ciiu:'A (01–03) / C (10–12)',
    proceso:'Producción / Poscosecha / Conservación'
  }),

  producto({
    id:'P150',
    sector:'agro',
    icono:'🌱',
    nombre:'Plántulas/almácigos',
    desc:'Plántulas listas para trasplante producidas en condiciones controladas. Mayor uniformidad y menor tiempo a la primera cosecha.',
    precio:32398,
    tipo:'Insumo/Dotación',
    ciiu:'A (01–03) / C (10–12)',
    proceso:'Producción / Poscosecha / Conservación'
  }),

  producto({
    id:'P151',
    sector:'agro',
    icono:'🌱',
    nombre:'Bolsas para vivero',
    desc:'Bolsas plásticas negras para vivero. Resistentes a la intemperie. Ideales para germinación, trasplante y producción de plántulas. Buen drenaje y desarrollo radicular.',
    precio:13388,
    tipo:'Insumo/Dotación',
    ciiu:'A (01–03) / C (10–12)',
    proceso:'Producción / Poscosecha / Conservación'
  }),

  producto({
    id:'P152',
    sector:'agro',
    icono:'🧪',
    nombre:'Sustrato agrícola (coco/turba) 25 litros',
    desc:'Sustrato agrícola de coco/turba, 25 litros. Excelente retención de humedad y aireación. Libre de patógenos. Para germinación y plantas en maceta.',
    precio:49980,
    tipo:'Insumo/Dotación',
    ciiu:'A (01–03) / C (10–12)',
    proceso:'Producción / Poscosecha / Conservación'
  }),

  producto({
    id:'P153',
    sector:'agro',
    icono:'💰',
    nombre:'Compost/abono orgánico 50 kilos',
    desc:'Compost y abono orgánico de alta calidad, 50 kilos. Mejora la fertilidad del suelo. Aporta materia orgánica y microorganismos benéficos.',
    precio:30791,
    tipo:'Insumo/Dotación',
    ciiu:'A (01–03) / C (10–12)',
    proceso:'Producción / Poscosecha / Conservación'
  }),

  producto({
    id:'P154',
    sector:'agro',
    icono:'🧪',
    nombre:'Fertilizante NPK 50 kg',
    desc:'Fertilizante NPK (Nitrógeno-Fósforo-Potasio), presentación 50 kg. Estimula crecimiento, floración y producción de frutos. Para todo tipo de cultivos agrícolas.',
    precio:273105,
    tipo:'Insumo/Dotación',
    ciiu:'A (01–03) / C (10–12)',
    proceso:'Producción / Poscosecha / Conservación'
  }),

  producto({
    id:'P155',
    sector:'agro',
    icono:'🧪',
    nombre:'Cal dolomita/Enmiendas 50 kg',
    desc:'Cal dolomita para corrección de acidez del suelo, 50 kg. Aporta calcio y magnesio. Mejora la estructura del suelo y disponibilidad de nutrientes.',
    precio:106922,
    tipo:'Insumo/Dotación',
    ciiu:'A (01–03) / C (10–12)',
    proceso:'Producción / Poscosecha / Conservación'
  }),

  producto({
    id:'P156',
    sector:'agro',
    icono:'🧪',
    nombre:'Bioinsumos (Trichoderma/Micorrizas) 150 gr',
    desc:'Bioinsumos de Trichoderma y Micorrizas (150 gr). Mejoran salud del suelo y protegen raíces. Aumentan la absorción de nutrientes. 100% orgánico.',
    precio:91392,
    tipo:'Insumo/Dotación',
    ciiu:'A (01–03) / C (10–12)',
    proceso:'Producción / Poscosecha / Conservación'
  }),

  producto({
    id:'P157',
    sector:'agro',
    icono:'🌿',
    nombre:'Trampas cromáticas',
    desc:'Trampas cromáticas para captura de insectos plaga. Adhesivo de larga duración. Método ecológico. Para control de mosca blanca, trips y minadores.',
    precio:31594,
    tipo:'Insumo/Dotación',
    ciiu:'A (01–03) / C (10–12)',
    proceso:'Producción / Poscosecha / Conservación'
  }),

  producto({
    id:'P158',
    sector:'agro',
    icono:'🌿',
    nombre:'Feromonas para monitoreo',
    desc:'Feromonas para monitoreo y control de plagas en cultivos. Método ecológico. Reduce el uso de pesticidas. Para cultivos y invernaderos.',
    precio:107100,
    tipo:'Insumo/Dotación',
    ciiu:'A (01–03) / C (10–12)',
    proceso:'Producción / Poscosecha / Conservación'
  }),

  producto({
    id:'P159',
    sector:'agro',
    icono:'🌿',
    nombre:'Malla anti-insectos 2x2 x 1,20',
    desc:'Malla anti-insectos 2x2 m, ancho 1.20 m. Protege cultivos de plagas sin pesticidas. Resistente a la intemperie. Para invernaderos y huertas orgánicas.',
    precio:431529,
    tipo:'Insumo/Dotación',
    ciiu:'A (01–03) / C (10–12)',
    proceso:'Producción / Poscosecha / Conservación'
  }),

  producto({
    id:'P160',
    sector:'agro',
    icono:'💰',
    nombre:'Malla sombra MALLA SOMBRA MULTIPROPOSITO 4X100 METROS MACHO® (65%)',
    desc:'Malla sombra multipropósito 65%, 4x100 m. Reduce la radiación solar. Para viveros, invernaderos y jardines.',
    precio:1002454,
    tipo:'Insumo/Dotación',
    ciiu:'A (01–03) / C (10–12)',
    proceso:'Producción / Poscosecha / Conservación'
  }),

  producto({
    id:'P161',
    sector:'agro',
    icono:'🌿',
    nombre:'Tutores y cintas de amarre',
    desc:'Tutores y cintas de amarre para soporte de plantas. Para crecimiento vertical de cultivos como tomate y frijol. Reutilizables.',
    precio:624750,
    tipo:'Insumo/Dotación',
    ciiu:'A (01–03) / C (10–12)',
    proceso:'Producción / Poscosecha / Conservación'
  }),

  producto({
    id:'P162',
    sector:'agro',
    icono:'🧑‍🌾',
    nombre:'Palas y azadones',
    desc:'Producto de uso industrial o comercial. Consulte con su asesor para más especificaciones técnicas y disponibilidad.',
    precio:71222,
    tipo:'Insumo/Dotación',
    ciiu:'A (01–03) / C (10–12)',
    proceso:'Producción / Poscosecha / Conservación'
  }),

  producto({
    id:'P163',
    sector:'agro',
    icono:'🧑‍🌾',
    nombre:'Rastrillos y picas',
    desc:'Set de rastrillo y pica con cabo de madera para labores agrícolas. Herramientas básicas para preparar suelos, airear camas de siembra y romper terrones.',
    precio:160472,
    tipo:'Insumo/Dotación',
    ciiu:'A (01–03) / C (10–12)',
    proceso:'Producción / Poscosecha / Conservación'
  }),

  producto({
    id:'P164',
    sector:'agro',
    icono:'🧑‍🌾',
    nombre:'Tijeras de poda Tipo : Tijeras de podar',
    desc:'•Ancho : 28 cm  •Alto : 4 cm  •Largo : 80 cm  •Color : Negro/Gris/rojo',
    precio:267572,
    tipo:'Insumo/Dotación',
    ciiu:'A (01–03) / C (10–12)',
    proceso:'Producción / Poscosecha / Conservación'
  }),

  producto({
    id:'P165',
    sector:'agro',
    icono:'🧑‍🌾',
    nombre:'Serrucho de poda Serrucho Cortador de Ramas O de Poda Plegable Cuchilla 10\'\'',
    desc:'Serrucho plegable para poda de ramas. Hoja de acero con dientes endurecidos. Corte limpio y preciso. Para frutales y jardines.',
    precio:81932,
    tipo:'Insumo/Dotación',
    ciiu:'A (01–03) / C (10–12)',
    proceso:'Producción / Poscosecha / Conservación'
  }),

  producto({
    id:'P166',
    sector:'agro',
    icono:'🧑‍🌾',
    nombre:'Carretilla de carga Carretilla Negra Plastica Cachaca 169 Litros 6ft Imsa',
    desc:'Carretilla plástica de 169 litros para transporte de materiales. Liviana y resistente. Rueda grande para terrenos irregulares. Para finca y talleres.',
    precio:579946,
    tipo:'Insumo/Dotación',
    ciiu:'A (01–03) / C (10–12)',
    proceso:'Producción / Poscosecha / Conservación'
  }),

  producto({
    id:'P167',
    sector:'agro',
    icono:'💧',
    nombre:'Bomba de espalda (aspersión) Pulverizador Manual 16 Lt  Tipo : Fumigadoras manuales de espalda',
    desc:'•Ancho : 610 mm  •Alto : 185 mm  •Largo : 410 mm  •Diámetro : 1 cm',
    precio:142622,
    tipo:'Insumo/Dotación',
    ciiu:'A (01–03) / C (10–12)',
    proceso:'Producción / Poscosecha / Conservación'
  }),

  producto({
    id:'P168',
    sector:'agro',
    icono:'💧',
    nombre:'Motobomba para riego Motobomba  Gasolina Twp80sx 3\'\'x3\'\' 6.5hp / 196cc Caudal 35mca y 60m3/h',
    desc:'Motobomba a gasolina 3x3 pulgadas, 6.5 HP. Para riego de cultivos y vaciado de pozos. Fácil arranque y bajo consumo de combustible.',
    precio:1206482,
    tipo:'Equipo',
    ciiu:'A (01–03) / C (10–12)',
    proceso:'Producción / Poscosecha / Conservación'
  }),

  producto({
    id:'P169',
    sector:'agro',
    icono:'💧',
    nombre:'Kit riego por goteo (manguera/cinta/goteros) Incluye:',
    desc:'Adaptador de manguera de 1 x 3/4 a 1/4 pulgadas. 10 conectores de 1/4 pulgadas con bloqueo en T. 2 adaptadores de manguera de 3/4 a 1/2 pulgadas. 3 conectores de 1/2 a 4 vías de 1/4 pulgadas. 2 conectores de 1/2 a 2 vías de 1/4 pulgadas. 4 estacas de soporte de goteo de 1/2 pulgadas. 6 clavijas de extremo acoplado de 1/4 pulgadas. 2 enchufes de extremo bloqueado de 1/2 pulgadas. Tubo de 98 pies de',
    precio:642600,
    tipo:'Insumo/Dotación',
    ciiu:'A (01–03) / C (10–12)',
    proceso:'Producción / Poscosecha / Conservación'
  }),

  producto({
    id:'P170',
    sector:'agro',
    icono:'💧',
    nombre:'Aspersores y microaspersores',
    desc:'Aspersores y microaspersores para riego agrícola. Distribución uniforme del agua. Ahorro de hasta 40% comparado con riego por inundación. Fácil instalación.',
    precio:107100,
    tipo:'Insumo/Dotación',
    ciiu:'A (01–03) / C (10–12)',
    proceso:'Producción / Poscosecha / Conservación'
  }),

  producto({
    id:'P171',
    sector:'agro',
    icono:'💧',
    nombre:'Tanque de almacenamiento de agua •Tipo : Tanque 500 Litros',
    desc:'•Uso : Residencial, institucional e industrial  •Normas de Fabricación : RAS 0330  •Ancho : 105 cm  •Alto : 103 cm',
    precio:414120,
    tipo:'Insumo/Dotación',
    ciiu:'A (01–03) / C (10–12)',
    proceso:'Producción / Poscosecha / Conservación'
  }),

  producto({
    id:'P172',
    sector:'agro',
    icono:'💧',
    nombre:'Filtros y válvulas de riego **DIMENSIONES**:',
    desc:'- ALTO: 5 pulgadas - ANCHO: 4 pulgadas - LARGO: 3 pulgadas  **MATERIALES**: PVC resistente a la corrosión  **USO**: Ideal para sistemas de riego agrícola, jardinería o pesaje industrial',
    precio:190692,
    tipo:'Insumo/Dotación',
    ciiu:'A (01–03) / C (10–12)',
    proceso:'Producción / Poscosecha / Conservación'
  }),

  producto({
    id:'P173',
    sector:'agro',
    icono:'🌡️',
    nombre:'Medidor de pH de suelo/agua Especializado con electrodo para la medida de pH del suelo.',
    desc:'Pantalla LCD multi-nivel. Operación amigable con el usuario con sólo dos botones. Mensajes tutoriales sobre la pantalla. Calibración automática de uno o dos puntos. BEPS: El Sistema de prevención en el error de batería alerta al usuario en caso de que el poder de la batería se encuentre bajo y pueda afectar adversamente las lecturas. Muestra porcentaje de batería. Compacto, para trabajo exigente y',
    precio:6467055,
    tipo:'Insumo/Dotación',
    ciiu:'A (01–03) / C (10–12)',
    proceso:'Producción / Poscosecha / Conservación'
  }),

  producto({
    id:'P174',
    sector:'agro',
    icono:'🌡️',
    nombre:'Medidor de conductividad (EC) ESPECIFICACIONES',
    desc:'Distancia 0 a 1999 µS / cm 1 µS / cm Resolución 1 µS / cm Exactitud ± 2% de escala completa Soluciones de calibración (incluidas) 1413 µS / cm (M10031B) Sonda de conductividad SE510 (incluido) Compensación de temperatura automático, de 5 a 50 ° C Ambiente 0 a 50 ° C / 32 a 122 ° F; HR máx. 95% Tipo de Batería: 1 x 9V (incluido) Duración de la batería: aprox. 300 horas de uso continuo Dimensiones:',
    precio:1327862,
    tipo:'Insumo/Dotación',
    ciiu:'A (01–03) / C (10–12)',
    proceso:'Producción / Poscosecha / Conservación'
  }),

  producto({
    id:'P175',
    sector:'agro',
    icono:'🌡️',
    nombre:'Termohigrómetro Caracteristicas generales',
    desc:'Poder  Batería de 1.5V (R03) x 1  Monitor  92.5mm x 60mm  Color del producto  Blanco  Peso neto del producto  110g  Tamaño del producto  130 mm x 22 mm x 78 mm  Accesorios estandar  Baterías, sonda de temperatura externa  Embalaje individual standard  Caja de regalo, bolso de burbujas, manual en inglés.',
    precio:123165,
    tipo:'Insumo/Dotación',
    ciiu:'A (01–03) / C (10–12)',
    proceso:'Producción / Poscosecha / Conservación'
  }),

  producto({
    id:'P176',
    sector:'agro',
    icono:'🌡️',
    nombre:'Estación climática básica Caracaterísticas:',
    desc:'Con 3 sensores Terminal de lectura portátil Lectura de datos en tiempo real Almacenamiento de datos de hasta 200000 mediciones Soporta carga de datos en la nube Señal estable y de alta precisión Larga distancia de transmisión Resistencia al agua Soporta la integración de más sensores Fácil de instalar y transportar Contiene:  Terminal portátil Sensor integrado de humedad, tempertura y presión atmo',
    precio:6854400,
    tipo:'Equipo',
    ciiu:'A (01–03) / C (10–12)',
    proceso:'Producción / Poscosecha / Conservación'
  }),

  producto({
    id:'P177',
    sector:'agro',
    icono:'⚖️',
    nombre:'Báscula de plataforma Acero inoxidable 304',
    desc:'4 celdas de carga tipo viga Caja de empalme ABS Báscula 1 x 1  programación 500KG',
    precio:6691965,
    tipo:'Insumo/Dotación',
    ciiu:'A (01–03) / C (10–12)',
    proceso:'Producción / Poscosecha / Conservación'
  }),

  producto({
    id:'P178',
    sector:'agro',
    icono:'🏭',
    nombre:'Lavadora de frutas/verduras',
    desc:'Lavadora industrial de frutas y verduras. Limpieza por inmersión y agitación. Acero inoxidable de grado alimentario. Garantiza higiene.',
    precio:28051793,
    tipo:'Insumo/Dotación',
    ciiu:'A (01–03) / C (10–12)',
    proceso:'Producción / Poscosecha / Conservación'
  }),

  producto({
    id:'P179',
    sector:'agro',
    icono:'🏭',
    nombre:'Centrífuga/secadora de hojas Tipo',
    desc:'Equipo de secado rotativo Método de calefacción Libre de pirógenos Material SUS304, SUS304L Voltaje 220V, 110V Clave de puntos de venta Fácil de operar, Alta productividad, Larga vida de servicio, Multifuncional Los campos de aplicación Vegetal planta de procesamiento, Catering comercial, De procesamiento de fruta planta',
    precio:8032500,
    tipo:'Insumo/Dotación',
    ciiu:'A (01–03) / C (10–12)',
    proceso:'Producción / Poscosecha / Conservación'
  }),

  producto({
    id:'P180',
    sector:'agro',
    icono:'🏭',
    nombre:'Deshidratador industrial en Acero Inoxidable 10 bandejas Seca las comida por un ventilador que ha sido instalado en la p',
    desc:'El deshidratador se apagara automáticamente cuando la hora fijada anteriormente llegue a su fin. El reloj automático y el termostato, harán que la deshidratación de la comida, sea como un abrir y cerrar de ojos. Instrucciones vienen incluidas. Maquina eléctrica 110 volts. Dimensiones externas aprox: 54 cm de largo, por 42 cm de ancho y 38 cm de alto. Pesa 36 libras aprox. Capacidad de 1.5 metros c',
    precio:4105482,
    tipo:'Insumo/Dotación',
    ciiu:'A (01–03) / C (10–12)',
    proceso:'Producción / Poscosecha / Conservación'
  }),

  producto({
    id:'P181',
    sector:'agro',
    icono:'📦',
    nombre:'Selladora térmica de bolsas Longitud de sellado: 30cm. ¡Sella bolsas de tamaño considerable para satisfacer todas tus ne',
    desc:'Ancho de sellado: 2mm, el tamaño perfecto para un sellado seguro y confiable. Tiempo de calentamiento ultrarrápido: entre 0.2 y 1.3 segundos, para que puedas trabajar eficientemente. Peso ligero de solo 2.9 kg, lo que facilita su transporte y manejo.',
    precio:355215,
    tipo:'Insumo/Dotación',
    ciiu:'A (01–03) / C (10–12)',
    proceso:'Producción / Poscosecha / Conservación'
  }),

  producto({
    id:'P182',
    sector:'agro',
    icono:'📦',
    nombre:'Selladora al vacío Tipo',
    desc:'Electrodomésticos de cocina modernos Ancho 43.18 cm Alto 25.4 cm Largo 52.5 cm Material PLASTICO Color Negro Potencia nominal 125 W Voltaje 117 V',
    precio:892322,
    tipo:'Insumo/Dotación',
    ciiu:'A (01–03) / C (10–12)',
    proceso:'Producción / Poscosecha / Conservación'
  }),

  producto({
    id:'P183',
    sector:'agro',
    icono:'📦',
    nombre:'Empacadora semiautomática',
    desc:'Empacadora semiautomática para sellado de productos en bolsas. Aumenta la velocidad de empaque. Para procesadoras de alimentos y pequeñas industrias.',
    precio:25168500,
    tipo:'Insumo/Dotación',
    ciiu:'A (01–03) / C (10–12)',
    proceso:'Producción / Poscosecha / Conservación'
  }),

  producto({
    id:'P184',
    sector:'agro',
    icono:'🍳',
    nombre:'Molino/triturador de granos Voltaje110 voltios',
    desc:'Capacidad de molienda800g Potencia2.000 W Velocidad25.000 rpm Capacidad de producción20-40 kg/h Tiempo continuo operación5min - Descanso: 8min Dimensiones22 x 21 x 49.5 cm',
    precio:1635596,
    tipo:'Insumo/Dotación',
    ciiu:'A (01–03) / C (10–12)',
    proceso:'Producción / Poscosecha / Conservación'
  }),

  producto({
    id:'P185',
    sector:'agro',
    icono:'🍳',
    nombre:'Batidora/amasadora industrial 10 litros Capacidad max en harina3 libras',
    desc:'Velocidades2 Voltaje110V 60Hz Potencia370W AccesoriosGancho, Paleta y globo Dimensiones76X43X51cm (alto, ancho y fondo)',
    precio:4034100,
    tipo:'Insumo/Dotación',
    ciiu:'A (01–03) / C (10–12)',
    proceso:'Producción / Poscosecha / Conservación'
  }),

  producto({
    id:'P186',
    sector:'agro',
    icono:'🍲',
    nombre:'Marmita/75 litros, a gas en acero inoxidable, sistema para controlar la temperatura del producto',
    desc:'Marmita de 75 litros a gas en acero inoxidable con control de temperatura. Para sopas, salsas y alimentos en gran cantidad.',
    precio:35700000,
    tipo:'Insumo/Dotación',
    ciiu:'A (01–03) / C (10–12)',
    proceso:'Producción / Poscosecha / Conservación'
  }),

  producto({
    id:'P187',
    sector:'agro',
    icono:'🍳',
    nombre:'Horno industrial de convección Horno de convección a gas con controles eléctricos. Está fabricado en acero inoxidable 43',
    desc:'Horno de convección a gas con controles eléctricos. Distribución uniforme del calor. Alta capacidad. Para panaderías y restaurantes.',
    precio:23906778,
    tipo:'Equipo',
    ciiu:'A (01–03) / C (10–12)',
    proceso:'Producción / Poscosecha / Conservación'
  }),

  producto({
    id:'P188',
    sector:'agro',
    icono:'❄️',
    nombre:'Refrigerador/congelador productivo Peso199kg',
    desc:'Dimensiones totales132 x 80 x 210 cms (frente, profundo, alto) Maxima Temperatura ambiente26 ° C / 60% HR Potencia300W 1/3 Hp Corriente4 amperios Voltaje110v Capacidad1300L Rango de temperatura+4°C a + 8 ° C',
    precio:26507250,
    tipo:'Equipo',
    ciiu:'A (01–03) / C (10–12)',
    proceso:'Producción / Poscosecha / Conservación'
  }),

  producto({
    id:'P189',
    sector:'agro',
    icono:'❄️',
    nombre:'Cámara fría/cuarto frío Cuarto frío de 2.00 x 2.00 x 2.50 mts para carnes, pescado, pollo, mariscos, frutas, verduras, e',
    desc:'Cuarto frío 2.00 x 2.00 x 2.50 m para carnes y productos perecederos. Panel sándwich aislante. Control digital de temperatura.',
    precio:57120000,
    tipo:'Equipo',
    ciiu:'A (01–03) / C (10–12)',
    proceso:'Producción / Poscosecha / Conservación'
  }),

  producto({
    id:'P190',
    sector:'agro',
    icono:'🗄️',
    nombre:'Estantería metálica industrial torre 240 x 120 cm',
    desc:'Estantería metálica industrial 240 x 120 cm. Estructura en acero anticorrosivo. Capacidad por nivel hasta 200 kg. Para bodegas, tiendas y talleres.',
    precio:1841852,
    tipo:'Mobiliario',
    ciiu:'A (01–03) / C (10–12)',
    proceso:'Producción / Poscosecha / Conservación'
  }),

  producto({
    id:'P191',
    sector:'agro',
    icono:'📦',
    nombre:'Canastillas plásticas para surtido Canastilla plastica fondo rombo pared rombo 60x40x25',
    desc:'Canastillas plásticas rígidas para almacenamiento y transporte. Apilables. Ideales para frutas, verduras, panadería, carnicería y logística.',
    precio:54978,
    tipo:'Insumo/Dotación',
    ciiu:'A (01–03) / C (10–12)',
    proceso:'Producción / Poscosecha / Conservación'
  }),

  producto({
    id:'P192',
    sector:'agro',
    icono:'📦',
    nombre:'Envases grado alimentario (frascos/tarrinas)',
    desc:'Envases de grado alimentario: frascos y tarrinas. Material inocuo. Para mermeladas, salsas, lácteos y miel. Herméticos y apilables.',
    precio:35522,
    tipo:'Insumo/Dotación',
    ciiu:'A (01–03) / C (10–12)',
    proceso:'Producción / Poscosecha / Conservación'
  }),

  producto({
    id:'P193',
    sector:'agro',
    icono:'🐔',
    nombre:'Bebederos automáticos (pecuaria menor) 6.5 LITROS',
    desc:'Bebederos automáticos para aves y animales menores, capacidad 6.5 litros. Dispensan agua continua sin desperdicio. Fáciles de limpiar. Ideales para pollos, gallinas y conejos.',
    precio:55335,
    tipo:'Insumo/Dotación',
    ciiu:'A (01–03) / C (10–12)',
    proceso:'Producción / Poscosecha / Conservación'
  }),

  producto({
    id:'P194',
    sector:'agro',
    icono:'🐔',
    nombre:'Comederos automáticos (pecuaria menor) 6.5 LITROS',
    desc:'Comederos automáticos para aves y animales menores, capacidad 6.5 litros. Dispensan alimento gradualmente. Fáciles de limpiar. Para pollos y codornices.',
    precio:55335,
    tipo:'Insumo/Dotación',
    ciiu:'A (01–03) / C (10–12)',
    proceso:'Producción / Poscosecha / Conservación'
  }),

  producto({
    id:'P195',
    sector:'agro',
    icono:'🐔',
    nombre:'Incubadora avícola Incubadora De 400 Huevos Inteligente industrial Automática',
    desc:'Incubadora avícola automática para 400 huevos. Volteo automático, control de temperatura y humedad. Alta tasa de eclosión. Para productores avícolas.',
    precio:5265750,
    tipo:'Insumo/Dotación',
    ciiu:'A (01–03) / C (10–12)',
    proceso:'Producción / Poscosecha / Conservación'
  }),

  producto({
    id:'P196',
    sector:'agro',
    icono:'🐔',
    nombre:'Criadora avícola caperuza estandar',
    desc:'Criadora avícola a gas. Proporciona calor uniforme para pollitos recién nacidos. Control de temperatura. Reduce la mortalidad en la etapa inicial de cría.',
    precio:522291,
    tipo:'Insumo/Dotación',
    ciiu:'A (01–03) / C (10–12)',
    proceso:'Producción / Poscosecha / Conservación'
  }),

  producto({
    id:'P197',
    sector:'agro',
    icono:'🐟',
    nombre:'Aireador para estanque Sumergible Tipo Fuente de 1 a 2 Hp,',
    desc:'Aireador sumergible de 1 a 2 HP para estanques piscícolas. Oxigena el agua para mantener sanos los peces. Bajo consumo energético. Ideal para cultivo de tilapia y cachama.',
    precio:1617210,
    tipo:'Equipo',
    ciiu:'A (01–03) / C (10–12)',
    proceso:'Producción / Poscosecha / Conservación'
  }),

  producto({
    id:'P466',
    sector:'agro',
    icono:'🌱',
    nombre:'Semillas certificadas (granos y hortalizas) 10 gramos',
    desc:'Semillas certificadas de granos y hortalizas, 10 gramos. Alta tasa de germinación. Resistentes a enfermedades. Adaptadas al clima colombiano.',
    precio:17850,
    tipo:'Insumo/Dotación',
    ciiu:'A (01–03) / C (10–12)',
    proceso:'Producción / Poscosecha / Conservación'
  }),

  producto({
    id:'P467',
    sector:'agro',
    icono:'🌱',
    nombre:'Plántulas/almácigos',
    desc:'Plántulas listas para trasplante producidas en condiciones controladas. Mayor uniformidad y menor tiempo a la primera cosecha.',
    precio:10115,
    tipo:'Insumo/Dotación',
    ciiu:'A (01–03) / C (10–12)',
    proceso:'Producción / Poscosecha / Conservación'
  }),

  producto({
    id:'P468',
    sector:'agro',
    icono:'🌱',
    nombre:'Bolsas para vivero',
    desc:'Bolsas plásticas negras para vivero. Resistentes a la intemperie. Ideales para germinación, trasplante y producción de plántulas. Buen drenaje y desarrollo radicular.',
    precio:14280,
    tipo:'Insumo/Dotación',
    ciiu:'A (01–03) / C (10–12)',
    proceso:'Producción / Poscosecha / Conservación'
  }),

  producto({
    id:'P469',
    sector:'agro',
    icono:'🧪',
    nombre:'Sustrato agrícola (coco/turba) 25 litros',
    desc:'Sustrato agrícola de coco/turba, 25 litros. Excelente retención de humedad y aireación. Libre de patógenos. Para germinación y plantas en maceta.',
    precio:33320,
    tipo:'Insumo/Dotación',
    ciiu:'A (01–03) / C (10–12)',
    proceso:'Producción / Poscosecha / Conservación'
  }),

  producto({
    id:'P470',
    sector:'agro',
    icono:'💰',
    nombre:'Compost/abono orgánico 50 kilos',
    desc:'Compost y abono orgánico de alta calidad, 50 kilos. Mejora la fertilidad del suelo. Aporta materia orgánica y microorganismos benéficos.',
    precio:53550,
    tipo:'Insumo/Dotación',
    ciiu:'A (01–03) / C (10–12)',
    proceso:'Producción / Poscosecha / Conservación'
  }),

  producto({
    id:'P471',
    sector:'agro',
    icono:'🧪',
    nombre:'Fertilizante NPK 50 kg',
    desc:'Fertilizante NPK (Nitrógeno-Fósforo-Potasio), presentación 50 kg. Estimula crecimiento, floración y producción de frutos. Para todo tipo de cultivos agrícolas.',
    precio:101150,
    tipo:'Insumo/Dotación',
    ciiu:'A (01–03) / C (10–12)',
    proceso:'Producción / Poscosecha / Conservación'
  }),

  producto({
    id:'P472',
    sector:'agro',
    icono:'🧪',
    nombre:'Cal dolomita/Enmiendas 50 kg',
    desc:'Cal dolomita para corrección de acidez del suelo, 50 kg. Aporta calcio y magnesio. Mejora la estructura del suelo y disponibilidad de nutrientes.',
    precio:33320,
    tipo:'Insumo/Dotación',
    ciiu:'A (01–03) / C (10–12)',
    proceso:'Producción / Poscosecha / Conservación'
  }),

  producto({
    id:'P473',
    sector:'agro',
    icono:'🧪',
    nombre:'Bioinsumos (Trichoderma/Micorrizas) 150 gr',
    desc:'Bioinsumos de Trichoderma y Micorrizas (150 gr). Mejoran salud del suelo y protegen raíces. Aumentan la absorción de nutrientes. 100% orgánico.',
    precio:53550,
    tipo:'Insumo/Dotación',
    ciiu:'A (01–03) / C (10–12)',
    proceso:'Producción / Poscosecha / Conservación'
  }),

  producto({
    id:'P474',
    sector:'agro',
    icono:'🌿',
    nombre:'Trampas cromáticas',
    desc:'Trampas cromáticas para captura de insectos plaga. Adhesivo de larga duración. Método ecológico. Para control de mosca blanca, trips y minadores.',
    precio:21420,
    tipo:'Insumo/Dotación',
    ciiu:'A (01–03) / C (10–12)',
    proceso:'Producción / Poscosecha / Conservación'
  }),

  producto({
    id:'P475',
    sector:'agro',
    icono:'🌿',
    nombre:'Feromonas para monitoreo',
    desc:'Feromonas para monitoreo y control de plagas en cultivos. Método ecológico. Reduce el uso de pesticidas. Para cultivos y invernaderos.',
    precio:41650,
    tipo:'Insumo/Dotación',
    ciiu:'A (01–03) / C (10–12)',
    proceso:'Producción / Poscosecha / Conservación'
  }),

  producto({
    id:'P476',
    sector:'agro',
    icono:'🌿',
    nombre:'Malla anti-insectos 2x2 x 1,20',
    desc:'Malla anti-insectos 2x2 m, ancho 1.20 m. Protege cultivos de plagas sin pesticidas. Resistente a la intemperie. Para invernaderos y huertas orgánicas.',
    precio:101150,
    tipo:'Insumo/Dotación',
    ciiu:'A (01–03) / C (10–12)',
    proceso:'Producción / Poscosecha / Conservación'
  }),

  producto({
    id:'P477',
    sector:'agro',
    icono:'💰',
    nombre:'Malla sombra MALLA SOMBRA MULTIPROPOSITO 4X100 METROS MACHO® (65%)',
    desc:'Malla sombra multipropósito 65%, 4x100 m. Reduce la radiación solar. Para viveros, invernaderos y jardines.',
    precio:339150,
    tipo:'Insumo/Dotación',
    ciiu:'A (01–03) / C (10–12)',
    proceso:'Producción / Poscosecha / Conservación'
  }),

  producto({
    id:'P478',
    sector:'agro',
    icono:'🌿',
    nombre:'Tutores y cintas de amarre',
    desc:'Tutores y cintas de amarre para soporte de plantas. Para crecimiento vertical de cultivos como tomate y frijol. Reutilizables.',
    precio:29750,
    tipo:'Insumo/Dotación',
    ciiu:'A (01–03) / C (10–12)',
    proceso:'Producción / Poscosecha / Conservación'
  }),

  producto({
    id:'P479',
    sector:'agro',
    icono:'🧑‍🌾',
    nombre:'Palas con cabo',
    desc:'Pala con cabo de madera reforzado. Hoja en acero templado. Para labores agrícolas: siembra, trasplante y preparación del suelo.',
    precio:40005,
    tipo:'Insumo/Dotación',
    ciiu:'A (01–03) / C (10–12)',
    proceso:'Producción / Poscosecha / Conservación'
  }),

  producto({
    id:'P480',
    sector:'agro',
    icono:'🧑‍🌾',
    nombre:'azadon con cabo',
    desc:'Azadón con cabo de madera reforzado. Hoja en acero templado. Ideal para preparación de suelos, deshierbe y cultivo de hortalizas. Mango ergonómico.',
    precio:41650,
    tipo:'Insumo/Dotación',
    ciiu:'A (01–03) / C (10–12)',
    proceso:'Producción / Poscosecha / Conservación'
  }),

  producto({
    id:'P481',
    sector:'agro',
    icono:'🧑‍🌾',
    nombre:'Rastrillos con cabo',
    desc:'Rastrillo con cabo de madera. Dientes en acero resistente. Para nivelar, airear y limpiar el suelo en huertas y jardines.',
    precio:32570,
    tipo:'Insumo/Dotación',
    ciiu:'A (01–03) / C (10–12)',
    proceso:'Producción / Poscosecha / Conservación'
  }),

  producto({
    id:'P482',
    sector:'agro',
    icono:'🧑‍🌾',
    nombre:'pica con cabo',
    desc:'Pica agrícola con cabo de madera. Hoja de acero de alta resistencia. Para preparación del suelo y labores de campo en terrenos duros.',
    precio:92011,
    tipo:'Insumo/Dotación',
    ciiu:'A (01–03) / C (10–12)',
    proceso:'Producción / Poscosecha / Conservación'
  }),

  producto({
    id:'P483',
    sector:'agro',
    icono:'🧑‍🌾',
    nombre:'Tijeras de poda Tipo : Tijeras de podar',
    desc:'•Ancho : 28 cm  •Alto : 4 cm  •Largo : 80 cm  •Color : Negro/Gris/rojo',
    precio:67583,
    tipo:'Insumo/Dotación',
    ciiu:'A (01–03) / C (10–12)',
    proceso:'Producción / Poscosecha / Conservación'
  }),

  producto({
    id:'P484',
    sector:'agro',
    icono:'🧑‍🌾',
    nombre:'Serrucho de poda Serrucho Cortador de Ramas O de Poda Plegable Cuchilla 10\'\'',
    desc:'Serrucho plegable para poda de ramas. Hoja de acero con dientes endurecidos. Corte limpio y preciso. Para frutales y jardines.',
    precio:179462,
    tipo:'Insumo/Dotación',
    ciiu:'A (01–03) / C (10–12)',
    proceso:'Producción / Poscosecha / Conservación'
  }),

  producto({
    id:'P485',
    sector:'agro',
    icono:'🧑‍🌾',
    nombre:'Carretilla de carga Carretilla Negra Plastica Cachaca 169 Litros 6ft Imsa',
    desc:'Carretilla plástica de 169 litros para transporte de materiales. Liviana y resistente. Rueda grande para terrenos irregulares. Para finca y talleres.',
    precio:390844,
    tipo:'Insumo/Dotación',
    ciiu:'A (01–03) / C (10–12)',
    proceso:'Producción / Poscosecha / Conservación'
  }),

  producto({
    id:'P486',
    sector:'agro',
    icono:'💧',
    nombre:'Bomba de espalda (aspersión) Pulverizador Manual 16 Lt  Tipo : Fumigadoras manuales de espalda',
    desc:'•Ancho : 610 mm  •Alto : 185 mm  •Largo : 410 mm  •Diámetro : 1 cm',
    precio:204379,
    tipo:'Insumo/Dotación',
    ciiu:'A (01–03) / C (10–12)',
    proceso:'Producción / Poscosecha / Conservación'
  }),

  producto({
    id:'P487',
    sector:'agro',
    icono:'💧',
    nombre:'Motobomba para riego Motobomba  Gasolina Twp80sx 3\'\'x3\'\' 6.5hp / 196cc Caudal 35mca y 60m3/h',
    desc:'Motobomba a gasolina 3x3 pulgadas, 6.5 HP. Para riego de cultivos y vaciado de pozos. Fácil arranque y bajo consumo de combustible.',
    precio:809200,
    tipo:'Equipo',
    ciiu:'A (01–03) / C (10–12)',
    proceso:'Producción / Poscosecha / Conservación'
  }),

  producto({
    id:'P488',
    sector:'agro',
    icono:'💧',
    nombre:'Kit riego por goteo (manguera/cinta/goteros) Incluye:',
    desc:'Adaptador de manguera de 1 x 3/4 a 1/4 pulgadas. 10 conectores de 1/4 pulgadas con bloqueo en T. 2 adaptadores de manguera de 3/4 a 1/2 pulgadas. 3 conectores de 1/2 a 4 vías de 1/4 pulgadas. 2 conectores de 1/2 a 2 vías de 1/4 pulgadas. 4 estacas de soporte de goteo de 1/2 pulgadas. 6 clavijas de extremo acoplado de 1/4 pulgadas. 2 enchufes de extremo bloqueado de 1/2 pulgadas. Tubo de 98 pies de',
    precio:220150,
    tipo:'Insumo/Dotación',
    ciiu:'A (01–03) / C (10–12)',
    proceso:'Producción / Poscosecha / Conservación'
  }),

  producto({
    id:'P489',
    sector:'agro',
    icono:'💧',
    nombre:'Aspersores y microaspersores',
    desc:'Aspersores y microaspersores para riego agrícola. Distribución uniforme del agua. Ahorro de hasta 40% comparado con riego por inundación. Fácil instalación.',
    precio:113050,
    tipo:'Insumo/Dotación',
    ciiu:'A (01–03) / C (10–12)',
    proceso:'Producción / Poscosecha / Conservación'
  }),

  producto({
    id:'P490',
    sector:'agro',
    icono:'💧',
    nombre:'Tanque de almacenamiento de agua •Tipo : Tanque 500 Litros',
    desc:'•Uso : Residencial, institucional e industrial  •Normas de Fabricación : RAS 0330  •Ancho : 105 cm  •Alto : 103 cm',
    precio:361530,
    tipo:'Insumo/Dotación',
    ciiu:'A (01–03) / C (10–12)',
    proceso:'Producción / Poscosecha / Conservación'
  }),

  producto({
    id:'P491',
    sector:'agro',
    icono:'💧',
    nombre:'Filtros y válvulas de riego **DIMENSIONES**:',
    desc:'- ALTO: 5 pulgadas - ANCHO: 4 pulgadas - LARGO: 3 pulgadas  **MATERIALES**: PVC resistente a la corrosión  **USO**: Ideal para sistemas de riego agrícola, jardinería o pesaje industrial',
    precio:101150,
    tipo:'Insumo/Dotación',
    ciiu:'A (01–03) / C (10–12)',
    proceso:'Producción / Poscosecha / Conservación'
  }),

  producto({
    id:'P492',
    sector:'agro',
    icono:'🌡️',
    nombre:'Medidor de pH de suelo/agua Especializado con electrodo para la medida de pH del suelo.',
    desc:'Pantalla LCD multi-nivel. Operación amigable con el usuario con sólo dos botones. Mensajes tutoriales sobre la pantalla. Calibración automática de uno o dos puntos. BEPS: El Sistema de prevención en el error de batería alerta al usuario en caso de que el poder de la batería se encuentre bajo y pueda afectar adversamente las lecturas. Muestra porcentaje de batería. Compacto, para trabajo exigente y',
    precio:113050,
    tipo:'Insumo/Dotación',
    ciiu:'A (01–03) / C (10–12)',
    proceso:'Producción / Poscosecha / Conservación'
  }),

  producto({
    id:'P493',
    sector:'agro',
    icono:'🌡️',
    nombre:'Medidor de conductividad (EC) ESPECIFICACIONES',
    desc:'Distancia 0 a 1999 µS / cm 1 µS / cm Resolución 1 µS / cm Exactitud ± 2% de escala completa Soluciones de calibración (incluidas) 1413 µS / cm (M10031B) Sonda de conductividad SE510 (incluido) Compensación de temperatura automático, de 5 a 50 ° C Ambiente 0 a 50 ° C / 32 a 122 ° F; HR máx. 95% Tipo de Batería: 1 x 9V (incluido) Duración de la batería: aprox. 300 horas de uso continuo Dimensiones:',
    precio:101150,
    tipo:'Insumo/Dotación',
    ciiu:'A (01–03) / C (10–12)',
    proceso:'Producción / Poscosecha / Conservación'
  }),

  producto({
    id:'P494',
    sector:'agro',
    icono:'🌡️',
    nombre:'Termohigrómetro Caracteristicas generales',
    desc:'Poder  Batería de 1.5V (R03) x 1  Monitor  92.5mm x 60mm  Color del producto  Blanco  Peso neto del producto  110g  Tamaño del producto  130 mm x 22 mm x 78 mm  Accesorios estandar  Baterías, sonda de temperatura externa  Embalaje individual standard  Caja de regalo, bolso de burbujas, manual en inglés.',
    precio:77350,
    tipo:'Insumo/Dotación',
    ciiu:'A (01–03) / C (10–12)',
    proceso:'Producción / Poscosecha / Conservación'
  }),

  producto({
    id:'P495',
    sector:'agro',
    icono:'🌡️',
    nombre:'Estación climática básica Caracaterísticas:',
    desc:'Con 3 sensores Terminal de lectura portátil Lectura de datos en tiempo real Almacenamiento de datos de hasta 200000 mediciones Soporta carga de datos en la nube Señal estable y de alta precisión Larga distancia de transmisión Resistencia al agua Soporta la integración de más sensores Fácil de instalar y transportar Contiene:  Terminal portátil Sensor integrado de humedad, tempertura y presión atmo',
    precio:452200,
    tipo:'Equipo',
    ciiu:'A (01–03) / C (10–12)',
    proceso:'Producción / Poscosecha / Conservación'
  }),

  producto({
    id:'P496',
    sector:'agro',
    icono:'⚖️',
    nombre:'Báscula de plataforma Acero inoxidable 304',
    desc:'4 celdas de carga tipo viga Caja de empalme ABS Báscula 1 x 1  programación 500KG',
    precio:452200,
    tipo:'Insumo/Dotación',
    ciiu:'A (01–03) / C (10–12)',
    proceso:'Producción / Poscosecha / Conservación'
  }),

  producto({
    id:'P497',
    sector:'agro',
    icono:'🏭',
    nombre:'Lavadora de frutas/verduras',
    desc:'Lavadora industrial de frutas y verduras. Limpieza por inmersión y agitación. Acero inoxidable de grado alimentario. Garantiza higiene.',
    precio:1011500,
    tipo:'Insumo/Dotación',
    ciiu:'A (01–03) / C (10–12)',
    proceso:'Producción / Poscosecha / Conservación'
  }),

  producto({
    id:'P498',
    sector:'agro',
    icono:'🏭',
    nombre:'Centrífuga/secadora de hojas Tipo',
    desc:'Equipo de secado rotativo Método de calefacción Libre de pirógenos Material SUS304, SUS304L Voltaje 220V, 110V Clave de puntos de venta Fácil de operar, Alta productividad, Larga vida de servicio, Multifuncional Los campos de aplicación Vegetal planta de procesamiento, Catering comercial, De procesamiento de fruta planta',
    precio:809200,
    tipo:'Insumo/Dotación',
    ciiu:'A (01–03) / C (10–12)',
    proceso:'Producción / Poscosecha / Conservación'
  }),

  producto({
    id:'P499',
    sector:'agro',
    icono:'🏭',
    nombre:'Deshidratador industrial en Acero Inoxidable 10 bandejas Seca las comida por un ventilador que ha sido instalado en la p',
    desc:'El deshidratador se apagara automáticamente cuando la hora fijada anteriormente llegue a su fin. El reloj automático y el termostato, harán que la deshidratación de la comida, sea como un abrir y cerrar de ojos. Instrucciones vienen incluidas. Maquina eléctrica 110 volts. Dimensiones externas aprox: 54 cm de largo, por 42 cm de ancho y 38 cm de alto. Pesa 36 libras aprox. Capacidad de 1.5 metros c',
    precio:1011500,
    tipo:'Insumo/Dotación',
    ciiu:'A (01–03) / C (10–12)',
    proceso:'Producción / Poscosecha / Conservación'
  }),

  producto({
    id:'P500',
    sector:'agro',
    icono:'📦',
    nombre:'Selladora térmica de bolsas Longitud de sellado: 30cm. ¡Sella bolsas de tamaño considerable para satisfacer todas tus ne',
    desc:'Ancho de sellado: 2mm, el tamaño perfecto para un sellado seguro y confiable. Tiempo de calentamiento ultrarrápido: entre 0.2 y 1.3 segundos, para que puedas trabajar eficientemente. Peso ligero de solo 2.9 kg, lo que facilita su transporte y manejo.',
    precio:101150,
    tipo:'Insumo/Dotación',
    ciiu:'A (01–03) / C (10–12)',
    proceso:'Producción / Poscosecha / Conservación'
  }),

  producto({
    id:'P501',
    sector:'agro',
    icono:'📦',
    nombre:'Selladora al vacío Tipo',
    desc:'Electrodomésticos de cocina modernos Ancho 43.18 cm Alto 25.4 cm Largo 52.5 cm Material PLASTICO Color Negro Potencia nominal 125 W Voltaje 117 V',
    precio:220150,
    tipo:'Insumo/Dotación',
    ciiu:'A (01–03) / C (10–12)',
    proceso:'Producción / Poscosecha / Conservación'
  }),

  producto({
    id:'P502',
    sector:'agro',
    icono:'📦',
    nombre:'Empacadora semiautomática',
    desc:'Empacadora semiautomática para sellado de productos en bolsas. Aumenta la velocidad de empaque. Para procesadoras de alimentos y pequeñas industrias.',
    precio:1428000,
    tipo:'Insumo/Dotación',
    ciiu:'A (01–03) / C (10–12)',
    proceso:'Producción / Poscosecha / Conservación'
  }),

  producto({
    id:'P503',
    sector:'agro',
    icono:'🍳',
    nombre:'Molino/triturador de granos Voltaje110 voltios',
    desc:'Capacidad de molienda800g Potencia2.000 W Velocidad25.000 rpm Capacidad de producción20-40 kg/h Tiempo continuo operación5min - Descanso: 8min Dimensiones22 x 21 x 49.5 cm',
    precio:809200,
    tipo:'Insumo/Dotación',
    ciiu:'A (01–03) / C (10–12)',
    proceso:'Producción / Poscosecha / Conservación'
  }),

  producto({
    id:'P504',
    sector:'agro',
    icono:'🍳',
    nombre:'Batidora/amasadora industrial 10 litros Capacidad max en harina3 libras',
    desc:'Velocidades2 Voltaje110V 60Hz Potencia370W AccesoriosGancho, Paleta y globo Dimensiones76X43X51cm (alto, ancho y fondo)',
    precio:809200,
    tipo:'Insumo/Dotación',
    ciiu:'A (01–03) / C (10–12)',
    proceso:'Producción / Poscosecha / Conservación'
  }),

  producto({
    id:'P505',
    sector:'agro',
    icono:'🍲',
    nombre:'Marmita/75 litros, a gas en acero inoxidable, sistema para controlar la temperatura del producto',
    desc:'Marmita de 75 litros a gas en acero inoxidable con control de temperatura. Para sopas, salsas y alimentos en gran cantidad.',
    precio:2618000,
    tipo:'Insumo/Dotación',
    ciiu:'A (01–03) / C (10–12)',
    proceso:'Producción / Poscosecha / Conservación'
  }),

  producto({
    id:'P506',
    sector:'agro',
    icono:'🍳',
    nombre:'Horno industrial de convección Horno de convección a gas con controles eléctricos. Está fabricado en acero inoxidable 43',
    desc:'Horno de convección a gas con controles eléctricos. Distribución uniforme del calor. Alta capacidad. Para panaderías y restaurantes.',
    precio:4522000,
    tipo:'Equipo',
    ciiu:'A (01–03) / C (10–12)',
    proceso:'Producción / Poscosecha / Conservación'
  }),

  producto({
    id:'P507',
    sector:'agro',
    icono:'❄️',
    nombre:'Refrigerador/congelador productivo Peso199kg',
    desc:'Dimensiones totales132 x 80 x 210 cms (frente, profundo, alto) Maxima Temperatura ambiente26 ° C / 60% HR Potencia300W 1/3 Hp Corriente4 amperios Voltaje110v Capacidad1300L Rango de temperatura+4°C a + 8 ° C',
    precio:3808000,
    tipo:'Equipo',
    ciiu:'A (01–03) / C (10–12)',
    proceso:'Producción / Poscosecha / Conservación'
  }),

  producto({
    id:'P508',
    sector:'agro',
    icono:'❄️',
    nombre:'Cámara fría/cuarto frío Cuarto frío de 2.00 x 2.00 x 2.50 mts para carnes, pescado, pollo, mariscos, frutas, verduras, e',
    desc:'Cuarto frío 2.00 x 2.00 x 2.50 m para carnes y productos perecederos. Panel sándwich aislante. Control digital de temperatura.',
    precio:14280000,
    tipo:'Equipo',
    ciiu:'A (01–03) / C (10–12)',
    proceso:'Producción / Poscosecha / Conservación'
  }),

  producto({
    id:'P509',
    sector:'agro',
    icono:'🗄️',
    nombre:'Estantería metálica industrial torre 240 x 120 cm',
    desc:'Estantería metálica industrial 240 x 120 cm. Estructura en acero anticorrosivo. Capacidad por nivel hasta 200 kg. Para bodegas, tiendas y talleres.',
    precio:380800,
    tipo:'Mobiliario',
    ciiu:'A (01–03) / C (10–12)',
    proceso:'Producción / Poscosecha / Conservación'
  }),

  producto({
    id:'P510',
    sector:'agro',
    icono:'📦',
    nombre:'Canastillas plásticas para surtido Canastilla plastica fondo rombo pared rombo 60x40x25',
    desc:'Canastillas plásticas rígidas para almacenamiento y transporte. Apilables. Ideales para frutas, verduras, panadería, carnicería y logística.',
    precio:41650,
    tipo:'Insumo/Dotación',
    ciiu:'A (01–03) / C (10–12)',
    proceso:'Producción / Poscosecha / Conservación'
  }),

  producto({
    id:'P511',
    sector:'agro',
    icono:'📦',
    nombre:'Envases grado alimentario (frascos/tarrinas)',
    desc:'Envases de grado alimentario: frascos y tarrinas. Material inocuo. Para mermeladas, salsas, lácteos y miel. Herméticos y apilables.',
    precio:101150,
    tipo:'Insumo/Dotación',
    ciiu:'A (01–03) / C (10–12)',
    proceso:'Producción / Poscosecha / Conservación'
  }),

  producto({
    id:'P512',
    sector:'agro',
    icono:'🐔',
    nombre:'Bebederos automáticos (pecuaria menor) 6.5 LITROS',
    desc:'Bebederos automáticos para aves y animales menores, capacidad 6.5 litros. Dispensan agua continua sin desperdicio. Fáciles de limpiar. Ideales para pollos, gallinas y conejos.',
    precio:41650,
    tipo:'Insumo/Dotación',
    ciiu:'A (01–03) / C (10–12)',
    proceso:'Producción / Poscosecha / Conservación'
  }),

  producto({
    id:'P513',
    sector:'agro',
    icono:'🐔',
    nombre:'Comederos automáticos (pecuaria menor) 6.5 LITROS',
    desc:'Comederos automáticos para aves y animales menores, capacidad 6.5 litros. Dispensan alimento gradualmente. Fáciles de limpiar. Para pollos y codornices.',
    precio:41650,
    tipo:'Insumo/Dotación',
    ciiu:'A (01–03) / C (10–12)',
    proceso:'Producción / Poscosecha / Conservación'
  }),

  producto({
    id:'P514',
    sector:'agro',
    icono:'🐔',
    nombre:'Incubadora avícola Incubadora De 400 Huevos Inteligente industrial Automática',
    desc:'Incubadora avícola automática para 400 huevos. Volteo automático, control de temperatura y humedad. Alta tasa de eclosión. Para productores avícolas.',
    precio:571200,
    tipo:'Insumo/Dotación',
    ciiu:'A (01–03) / C (10–12)',
    proceso:'Producción / Poscosecha / Conservación'
  }),

  producto({
    id:'P515',
    sector:'agro',
    icono:'🐔',
    nombre:'Criadora avícola caperuza estandar',
    desc:'Criadora avícola a gas. Proporciona calor uniforme para pollitos recién nacidos. Control de temperatura. Reduce la mortalidad en la etapa inicial de cría.',
    precio:220150,
    tipo:'Insumo/Dotación',
    ciiu:'A (01–03) / C (10–12)',
    proceso:'Producción / Poscosecha / Conservación'
  }),

  producto({
    id:'P516',
    sector:'agro',
    icono:'🐟',
    nombre:'Aireador para estanque Sumergible Tipo Fuente de 1 a 2 Hp,',
    desc:'Aireador sumergible de 1 a 2 HP para estanques piscícolas. Oxigena el agua para mantener sanos los peces. Bajo consumo energético. Ideal para cultivo de tilapia y cachama.',
    precio:214200,
    tipo:'Equipo',
    ciiu:'A (01–03) / C (10–12)',
    proceso:'Producción / Poscosecha / Conservación'
  }),

  producto({
    id:'CAT2-169',
    sector:'agro',
    icono:'🌱',
    nombre:'Semillas certificadas (granos y hortalizas) 10 gramos',
    desc:'Semillas certificadas de granos y hortalizas, 10 gramos. Alta tasa de germinación. Resistentes a enfermedades. Adaptadas al clima colombiano.',
    precio:17850,
    tipo:'Insumo/Dotación',
    ciiu:'A (01–03) / C (10–12)',
    proceso:'Producción / Poscosecha / Conservación'
  }),

  producto({
    id:'CAT2-170',
    sector:'agro',
    icono:'🌱',
    nombre:'Plántulas/almácigos',
    desc:'Plántulas listas para trasplante producidas en condiciones controladas. Mayor uniformidad y menor tiempo a la primera cosecha.',
    precio:10115,
    tipo:'Insumo/Dotación',
    ciiu:'A (01–03) / C (10–12)',
    proceso:'Producción / Poscosecha / Conservación'
  }),

  producto({
    id:'CAT2-171',
    sector:'agro',
    icono:'🌱',
    nombre:'Bolsas para vivero',
    desc:'Bolsas plásticas negras para vivero. Resistentes a la intemperie. Ideales para germinación, trasplante y producción de plántulas. Buen drenaje y desarrollo radicular.',
    precio:14280,
    tipo:'Insumo/Dotación',
    ciiu:'A (01–03) / C (10–12)',
    proceso:'Producción / Poscosecha / Conservación'
  }),

  producto({
    id:'CAT2-172',
    sector:'agro',
    icono:'🧪',
    nombre:'Sustrato agrícola (coco/turba) 25 litros',
    desc:'Sustrato agrícola de coco/turba, 25 litros. Excelente retención de humedad y aireación. Libre de patógenos. Para germinación y plantas en maceta.',
    precio:33320,
    tipo:'Insumo/Dotación',
    ciiu:'A (01–03) / C (10–12)',
    proceso:'Producción / Poscosecha / Conservación'
  }),

  producto({
    id:'CAT2-173',
    sector:'agro',
    icono:'💰',
    nombre:'Compost/abono orgánico 50 kilos',
    desc:'Compost y abono orgánico de alta calidad, 50 kilos. Mejora la fertilidad del suelo. Aporta materia orgánica y microorganismos benéficos.',
    precio:53550,
    tipo:'Insumo/Dotación',
    ciiu:'A (01–03) / C (10–12)',
    proceso:'Producción / Poscosecha / Conservación'
  }),

  producto({
    id:'CAT2-174',
    sector:'agro',
    icono:'🧪',
    nombre:'Fertilizante NPK 50 kg',
    desc:'Fertilizante NPK (Nitrógeno-Fósforo-Potasio), presentación 50 kg. Estimula crecimiento, floración y producción de frutos. Para todo tipo de cultivos agrícolas.',
    precio:101150,
    tipo:'Insumo/Dotación',
    ciiu:'A (01–03) / C (10–12)',
    proceso:'Producción / Poscosecha / Conservación'
  }),

  producto({
    id:'CAT2-175',
    sector:'agro',
    icono:'🧪',
    nombre:'Cal dolomita/Enmiendas 50 kg',
    desc:'Cal dolomita para corrección de acidez del suelo, 50 kg. Aporta calcio y magnesio. Mejora la estructura del suelo y disponibilidad de nutrientes.',
    precio:33320,
    tipo:'Insumo/Dotación',
    ciiu:'A (01–03) / C (10–12)',
    proceso:'Producción / Poscosecha / Conservación'
  }),

  producto({
    id:'CAT2-176',
    sector:'agro',
    icono:'🧪',
    nombre:'Bioinsumos (Trichoderma/Micorrizas) 150 gr',
    desc:'Bioinsumos de Trichoderma y Micorrizas (150 gr). Mejoran salud del suelo y protegen raíces. Aumentan la absorción de nutrientes. 100% orgánico.',
    precio:53550,
    tipo:'Insumo/Dotación',
    ciiu:'A (01–03) / C (10–12)',
    proceso:'Producción / Poscosecha / Conservación'
  }),

  producto({
    id:'CAT2-177',
    sector:'agro',
    icono:'🌿',
    nombre:'Trampas cromáticas',
    desc:'Trampas cromáticas para captura de insectos plaga. Adhesivo de larga duración. Método ecológico. Para control de mosca blanca, trips y minadores.',
    precio:21420,
    tipo:'Insumo/Dotación',
    ciiu:'A (01–03) / C (10–12)',
    proceso:'Producción / Poscosecha / Conservación'
  }),

  producto({
    id:'CAT2-178',
    sector:'agro',
    icono:'🌿',
    nombre:'Feromonas para monitoreo',
    desc:'Feromonas para monitoreo y control de plagas en cultivos. Método ecológico. Reduce el uso de pesticidas. Para cultivos y invernaderos.',
    precio:41650,
    tipo:'Insumo/Dotación',
    ciiu:'A (01–03) / C (10–12)',
    proceso:'Producción / Poscosecha / Conservación'
  }),

  producto({
    id:'CAT2-179',
    sector:'agro',
    icono:'🌿',
    nombre:'Malla anti-insectos 2x2 x 1,20',
    desc:'Malla anti-insectos 2x2 m, ancho 1.20 m. Protege cultivos de plagas sin pesticidas. Resistente a la intemperie. Para invernaderos y huertas orgánicas.',
    precio:101150,
    tipo:'Insumo/Dotación',
    ciiu:'A (01–03) / C (10–12)',
    proceso:'Producción / Poscosecha / Conservación'
  }),

  producto({
    id:'CAT2-180',
    sector:'agro',
    icono:'💰',
    nombre:'Malla sombra MALLA SOMBRA MULTIPROPOSITO 4X100 METROS MACHO® (65%)',
    desc:'Malla sombra multipropósito 65%, 4x100 m. Reduce la radiación solar. Para viveros, invernaderos y jardines.',
    precio:339150,
    tipo:'Insumo/Dotación',
    ciiu:'A (01–03) / C (10–12)',
    proceso:'Producción / Poscosecha / Conservación'
  }),

  producto({
    id:'CAT2-181',
    sector:'agro',
    icono:'🌿',
    nombre:'Tutores y cintas de amarre',
    desc:'Tutores y cintas de amarre para soporte de plantas. Para crecimiento vertical de cultivos como tomate y frijol. Reutilizables.',
    precio:29750,
    tipo:'Insumo/Dotación',
    ciiu:'A (01–03) / C (10–12)',
    proceso:'Producción / Poscosecha / Conservación'
  }),

  producto({
    id:'CAT2-182',
    sector:'agro',
    icono:'🧑‍🌾',
    nombre:'Palas con cabo',
    desc:'Pala con cabo de madera reforzado. Hoja en acero templado. Para labores agrícolas: siembra, trasplante y preparación del suelo.',
    precio:33618,
    tipo:'Insumo/Dotación',
    ciiu:'A (01–03) / C (10–12)',
    proceso:'Producción / Poscosecha / Conservación'
  }),

  producto({
    id:'CAT2-183',
    sector:'agro',
    icono:'🧑‍🌾',
    nombre:'azadon con cabo',
    desc:'Azadón con cabo de madera reforzado. Hoja en acero templado. Ideal para preparación de suelos, deshierbe y cultivo de hortalizas. Mango ergonómico.',
    precio:41650,
    tipo:'Insumo/Dotación',
    ciiu:'A (01–03) / C (10–12)',
    proceso:'Producción / Poscosecha / Conservación'
  }),

  producto({
    id:'CAT2-184',
    sector:'agro',
    icono:'🧑‍🌾',
    nombre:'Rastrillos con cabo',
    desc:'Rastrillo con cabo de madera. Dientes en acero resistente. Para nivelar, airear y limpiar el suelo en huertas y jardines.',
    precio:27370,
    tipo:'Insumo/Dotación',
    ciiu:'A (01–03) / C (10–12)',
    proceso:'Producción / Poscosecha / Conservación'
  }),

  producto({
    id:'CAT2-185',
    sector:'agro',
    icono:'🧑‍🌾',
    nombre:'pica con cabo',
    desc:'Pica agrícola con cabo de madera. Hoja de acero de alta resistencia. Para preparación del suelo y labores de campo en terrenos duros.',
    precio:77320,
    tipo:'Insumo/Dotación',
    ciiu:'A (01–03) / C (10–12)',
    proceso:'Producción / Poscosecha / Conservación'
  }),

  producto({
    id:'CAT2-186',
    sector:'agro',
    icono:'🧑‍🌾',
    nombre:'Tijeras de poda Tipo : Tijeras de podar',
    desc:'•Ancho : 28 cm  •Alto : 4 cm  •Largo : 80 cm  •Color : Negro/Gris/rojo',
    precio:56793,
    tipo:'Insumo/Dotación',
    ciiu:'A (01–03) / C (10–12)',
    proceso:'Producción / Poscosecha / Conservación'
  }),

  producto({
    id:'CAT2-187',
    sector:'agro',
    icono:'🧑‍🌾',
    nombre:'Serrucho de poda Serrucho Cortador de Ramas O de Poda Plegable Cuchilla 10\'\'',
    desc:'Serrucho plegable para poda de ramas. Hoja de acero con dientes endurecidos. Corte limpio y preciso. Para frutales y jardines.',
    precio:150809,
    tipo:'Insumo/Dotación',
    ciiu:'A (01–03) / C (10–12)',
    proceso:'Producción / Poscosecha / Conservación'
  }),

  producto({
    id:'CAT2-188',
    sector:'agro',
    icono:'🧑‍🌾',
    nombre:'Carretilla de carga Carretilla Negra Plastica Cachaca 169 Litros 6ft Imsa',
    desc:'Carretilla plástica de 169 litros para transporte de materiales. Liviana y resistente. Rueda grande para terrenos irregulares. Para finca y talleres.',
    precio:328440,
    tipo:'Insumo/Dotación',
    ciiu:'A (01–03) / C (10–12)',
    proceso:'Producción / Poscosecha / Conservación'
  }),

  producto({
    id:'CAT2-189',
    sector:'agro',
    icono:'💧',
    nombre:'Bomba de espalda (aspersión) Pulverizador Manual 16 Lt  Tipo : Fumigadoras manuales de espalda',
    desc:'•Ancho : 610 mm  •Alto : 185 mm  •Largo : 410 mm  •Diámetro : 1 cm',
    precio:171747,
    tipo:'Insumo/Dotación',
    ciiu:'A (01–03) / C (10–12)',
    proceso:'Producción / Poscosecha / Conservación'
  }),

  producto({
    id:'CAT2-190',
    sector:'agro',
    icono:'💧',
    nombre:'Motobomba para riego Motobomba  Gasolina Twp80sx 3\'\'x3\'\' 6.5hp / 196cc Caudal 35mca y 60m3/h',
    desc:'Motobomba a gasolina 3x3 pulgadas, 6.5 HP. Para riego de cultivos y vaciado de pozos. Fácil arranque y bajo consumo de combustible.',
    precio:809200,
    tipo:'Equipo',
    ciiu:'A (01–03) / C (10–12)',
    proceso:'Producción / Poscosecha / Conservación'
  }),

  producto({
    id:'CAT2-191',
    sector:'agro',
    icono:'💧',
    nombre:'Kit riego por goteo (manguera/cinta/goteros) Incluye:',
    desc:'Adaptador de manguera de 1 x 3/4 a 1/4 pulgadas. 10 conectores de 1/4 pulgadas con bloqueo en T. 2 adaptadores de manguera de 3/4 a 1/2 pulgadas. 3 conectores de 1/2 a 4 vías de 1/4 pulgadas. 2 conectores de 1/2 a 2 vías de 1/4 pulgadas. 4 estacas de soporte de goteo de 1/2 pulgadas. 6 clavijas de extremo acoplado de 1/4 pulgadas. 2 enchufes de extremo bloqueado de 1/2 pulgadas. Tubo de 98 pies de',
    precio:220150,
    tipo:'Insumo/Dotación',
    ciiu:'A (01–03) / C (10–12)',
    proceso:'Producción / Poscosecha / Conservación'
  }),

  producto({
    id:'CAT2-192',
    sector:'agro',
    icono:'💧',
    nombre:'Aspersores y microaspersores',
    desc:'Aspersores y microaspersores para riego agrícola. Distribución uniforme del agua. Ahorro de hasta 40% comparado con riego por inundación. Fácil instalación.',
    precio:113050,
    tipo:'Insumo/Dotación',
    ciiu:'A (01–03) / C (10–12)',
    proceso:'Producción / Poscosecha / Conservación'
  }),

  producto({
    id:'CAT2-193',
    sector:'agro',
    icono:'💧',
    nombre:'Tanque de almacenamiento de agua •Tipo : Tanque 500 Litros',
    desc:'•Uso : Residencial, institucional e industrial  •Normas de Fabricación : RAS 0330  •Ancho : 105 cm  •Alto : 103 cm',
    precio:303807,
    tipo:'Insumo/Dotación',
    ciiu:'A (01–03) / C (10–12)',
    proceso:'Producción / Poscosecha / Conservación'
  }),

  producto({
    id:'CAT2-194',
    sector:'agro',
    icono:'💧',
    nombre:'Filtros y válvulas de riego **DIMENSIONES**:',
    desc:'- ALTO: 5 pulgadas - ANCHO: 4 pulgadas - LARGO: 3 pulgadas  **MATERIALES**: PVC resistente a la corrosión  **USO**: Ideal para sistemas de riego agrícola, jardinería o pesaje industrial',
    precio:101150,
    tipo:'Insumo/Dotación',
    ciiu:'A (01–03) / C (10–12)',
    proceso:'Producción / Poscosecha / Conservación'
  }),

  producto({
    id:'CAT2-195',
    sector:'agro',
    icono:'🌡️',
    nombre:'Medidor de pH de suelo/agua Especializado con electrodo para la medida de pH del suelo.',
    desc:'Pantalla LCD multi-nivel. Operación amigable con el usuario con sólo dos botones. Mensajes tutoriales sobre la pantalla. Calibración automática de uno o dos puntos. BEPS: El Sistema de prevención en el error de batería alerta al usuario en caso de que el poder de la batería se encuentre bajo y pueda afectar adversamente las lecturas. Muestra porcentaje de batería. Compacto, para trabajo exigente y',
    precio:113050,
    tipo:'Insumo/Dotación',
    ciiu:'A (01–03) / C (10–12)',
    proceso:'Producción / Poscosecha / Conservación'
  }),

  producto({
    id:'CAT2-196',
    sector:'agro',
    icono:'🌡️',
    nombre:'Medidor de conductividad (EC) ESPECIFICACIONES',
    desc:'Distancia 0 a 1999 µS / cm 1 µS / cm Resolución 1 µS / cm Exactitud ± 2% de escala completa Soluciones de calibración (incluidas) 1413 µS / cm (M10031B) Sonda de conductividad SE510 (incluido) Compensación de temperatura automático, de 5 a 50 ° C Ambiente 0 a 50 ° C / 32 a 122 ° F; HR máx. 95% Tipo de Batería: 1 x 9V (incluido) Duración de la batería: aprox. 300 horas de uso continuo Dimensiones:',
    precio:101150,
    tipo:'Insumo/Dotación',
    ciiu:'A (01–03) / C (10–12)',
    proceso:'Producción / Poscosecha / Conservación'
  }),

  producto({
    id:'CAT2-197',
    sector:'agro',
    icono:'🌡️',
    nombre:'Termohigrómetro Caracteristicas generales',
    desc:'Poder  Batería de 1.5V (R03) x 1  Monitor  92.5mm x 60mm  Color del producto  Blanco  Peso neto del producto  110g  Tamaño del producto  130 mm x 22 mm x 78 mm  Accesorios estandar  Baterías, sonda de temperatura externa  Embalaje individual standard  Caja de regalo, bolso de burbujas, manual en inglés.',
    precio:77350,
    tipo:'Insumo/Dotación',
    ciiu:'A (01–03) / C (10–12)',
    proceso:'Producción / Poscosecha / Conservación'
  }),

  producto({
    id:'CAT2-198',
    sector:'agro',
    icono:'🌡️',
    nombre:'Estación climática básica Caracaterísticas:',
    desc:'Con 3 sensores Terminal de lectura portátil Lectura de datos en tiempo real Almacenamiento de datos de hasta 200000 mediciones Soporta carga de datos en la nube Señal estable y de alta precisión Larga distancia de transmisión Resistencia al agua Soporta la integración de más sensores Fácil de instalar y transportar Contiene:  Terminal portátil Sensor integrado de humedad, tempertura y presión atmo',
    precio:452200,
    tipo:'Equipo',
    ciiu:'A (01–03) / C (10–12)',
    proceso:'Producción / Poscosecha / Conservación'
  }),

  producto({
    id:'CAT2-199',
    sector:'agro',
    icono:'⚖️',
    nombre:'Báscula de plataforma Acero inoxidable 304',
    desc:'4 celdas de carga tipo viga Caja de empalme ABS Báscula 1 x 1  programación 500KG',
    precio:452200,
    tipo:'Insumo/Dotación',
    ciiu:'A (01–03) / C (10–12)',
    proceso:'Producción / Poscosecha / Conservación'
  }),

  producto({
    id:'CAT2-200',
    sector:'agro',
    icono:'🏭',
    nombre:'Lavadora de frutas/verduras',
    desc:'Lavadora industrial de frutas y verduras. Limpieza por inmersión y agitación. Acero inoxidable de grado alimentario. Garantiza higiene.',
    precio:1011500,
    tipo:'Insumo/Dotación',
    ciiu:'A (01–03) / C (10–12)',
    proceso:'Producción / Poscosecha / Conservación'
  }),

  producto({
    id:'CAT2-201',
    sector:'agro',
    icono:'🏭',
    nombre:'Centrífuga/secadora de hojas Tipo',
    desc:'Equipo de secado rotativo Método de calefacción Libre de pirógenos Material SUS304, SUS304L Voltaje 220V, 110V Clave de puntos de venta Fácil de operar, Alta productividad, Larga vida de servicio, Multifuncional Los campos de aplicación Vegetal planta de procesamiento, Catering comercial, De procesamiento de fruta planta',
    precio:809200,
    tipo:'Insumo/Dotación',
    ciiu:'A (01–03) / C (10–12)',
    proceso:'Producción / Poscosecha / Conservación'
  }),

  producto({
    id:'CAT2-202',
    sector:'agro',
    icono:'🏭',
    nombre:'Deshidratador industrial en Acero Inoxidable 10 bandejas Seca las comida por un ventilador que ha sido instalado en la p',
    desc:'El deshidratador se apagara automáticamente cuando la hora fijada anteriormente llegue a su fin. El reloj automático y el termostato, harán que la deshidratación de la comida, sea como un abrir y cerrar de ojos. Instrucciones vienen incluidas. Maquina eléctrica 110 volts. Dimensiones externas aprox: 54 cm de largo, por 42 cm de ancho y 38 cm de alto. Pesa 36 libras aprox. Capacidad de 1.5 metros c',
    precio:1011500,
    tipo:'Insumo/Dotación',
    ciiu:'A (01–03) / C (10–12)',
    proceso:'Producción / Poscosecha / Conservación'
  }),

  producto({
    id:'CAT2-203',
    sector:'agro',
    icono:'📦',
    nombre:'Selladora térmica de bolsas Longitud de sellado: 30cm. ¡Sella bolsas de tamaño considerable para satisfacer todas tus ne',
    desc:'Ancho de sellado: 2mm, el tamaño perfecto para un sellado seguro y confiable. Tiempo de calentamiento ultrarrápido: entre 0.2 y 1.3 segundos, para que puedas trabajar eficientemente. Peso ligero de solo 2.9 kg, lo que facilita su transporte y manejo.',
    precio:101150,
    tipo:'Insumo/Dotación',
    ciiu:'A (01–03) / C (10–12)',
    proceso:'Producción / Poscosecha / Conservación'
  }),

  producto({
    id:'CAT2-204',
    sector:'agro',
    icono:'📦',
    nombre:'Selladora al vacío Tipo',
    desc:'Electrodomésticos de cocina modernos Ancho 43.18 cm Alto 25.4 cm Largo 52.5 cm Material PLASTICO Color Negro Potencia nominal 125 W Voltaje 117 V',
    precio:220150,
    tipo:'Insumo/Dotación',
    ciiu:'A (01–03) / C (10–12)',
    proceso:'Producción / Poscosecha / Conservación'
  }),

  producto({
    id:'CAT2-205',
    sector:'agro',
    icono:'📦',
    nombre:'Empacadora semiautomática',
    desc:'Empacadora semiautomática para sellado de productos en bolsas. Aumenta la velocidad de empaque. Para procesadoras de alimentos y pequeñas industrias.',
    precio:1428000,
    tipo:'Insumo/Dotación',
    ciiu:'A (01–03) / C (10–12)',
    proceso:'Producción / Poscosecha / Conservación'
  }),

  producto({
    id:'CAT2-206',
    sector:'agro',
    icono:'🍳',
    nombre:'Molino/triturador de granos Voltaje110 voltios',
    desc:'Capacidad de molienda800g Potencia2.000 W Velocidad25.000 rpm Capacidad de producción20-40 kg/h Tiempo continuo operación5min - Descanso: 8min Dimensiones22 x 21 x 49.5 cm',
    precio:809200,
    tipo:'Insumo/Dotación',
    ciiu:'A (01–03) / C (10–12)',
    proceso:'Producción / Poscosecha / Conservación'
  }),

  producto({
    id:'CAT2-207',
    sector:'agro',
    icono:'🍳',
    nombre:'Batidora/amasadora industrial 10 litros Capacidad max en harina3 libras',
    desc:'Velocidades2 Voltaje110V 60Hz Potencia370W AccesoriosGancho, Paleta y globo Dimensiones76X43X51cm (alto, ancho y fondo)',
    precio:809200,
    tipo:'Insumo/Dotación',
    ciiu:'A (01–03) / C (10–12)',
    proceso:'Producción / Poscosecha / Conservación'
  }),

  producto({
    id:'CAT2-208',
    sector:'agro',
    icono:'🍲',
    nombre:'Marmita/75 litros, a gas en acero inoxidable, sistema para controlar la temperatura del producto',
    desc:'Marmita de 75 litros a gas en acero inoxidable con control de temperatura. Para sopas, salsas y alimentos en gran cantidad.',
    precio:2618000,
    tipo:'Insumo/Dotación',
    ciiu:'A (01–03) / C (10–12)',
    proceso:'Producción / Poscosecha / Conservación'
  }),

  producto({
    id:'CAT2-209',
    sector:'agro',
    icono:'🍳',
    nombre:'Horno industrial de convección Horno de convección a gas con controles eléctricos. Está fabricado en acero inoxidable 43',
    desc:'Horno de convección a gas con controles eléctricos. Distribución uniforme del calor. Alta capacidad. Para panaderías y restaurantes.',
    precio:4522000,
    tipo:'Equipo',
    ciiu:'A (01–03) / C (10–12)',
    proceso:'Producción / Poscosecha / Conservación'
  }),

  producto({
    id:'CAT2-210',
    sector:'agro',
    icono:'❄️',
    nombre:'Refrigerador/congelador productivo Peso199kg',
    desc:'Dimensiones totales132 x 80 x 210 cms (frente, profundo, alto) Maxima Temperatura ambiente26 ° C / 60% HR Potencia300W 1/3 Hp Corriente4 amperios Voltaje110v Capacidad1300L Rango de temperatura+4°C a + 8 ° C',
    precio:3808000,
    tipo:'Equipo',
    ciiu:'A (01–03) / C (10–12)',
    proceso:'Producción / Poscosecha / Conservación'
  }),

  producto({
    id:'CAT2-211',
    sector:'agro',
    icono:'❄️',
    nombre:'Cámara fría/cuarto frío Cuarto frío de 2.00 x 2.00 x 2.50 mts para carnes, pescado, pollo, mariscos, frutas, verduras, e',
    desc:'Cuarto frío 2.00 x 2.00 x 2.50 m para carnes y productos perecederos. Panel sándwich aislante. Control digital de temperatura.',
    precio:14280000,
    tipo:'Equipo',
    ciiu:'A (01–03) / C (10–12)',
    proceso:'Producción / Poscosecha / Conservación'
  }),

  producto({
    id:'CAT2-212',
    sector:'agro',
    icono:'🗄️',
    nombre:'Estantería metálica industrial torre 240 x 120 cm',
    desc:'Estantería metálica industrial 240 x 120 cm. Estructura en acero anticorrosivo. Capacidad por nivel hasta 200 kg. Para bodegas, tiendas y talleres.',
    precio:380800,
    tipo:'Mobiliario',
    ciiu:'A (01–03) / C (10–12)',
    proceso:'Producción / Poscosecha / Conservación'
  }),

  producto({
    id:'CAT2-213',
    sector:'agro',
    icono:'📦',
    nombre:'Canastillas plásticas para surtido Canastilla plastica fondo rombo pared rombo 60x40x25',
    desc:'Canastillas plásticas rígidas para almacenamiento y transporte. Apilables. Ideales para frutas, verduras, panadería, carnicería y logística.',
    precio:41650,
    tipo:'Insumo/Dotación',
    ciiu:'A (01–03) / C (10–12)',
    proceso:'Producción / Poscosecha / Conservación'
  }),

  producto({
    id:'CAT2-214',
    sector:'agro',
    icono:'📦',
    nombre:'Envases grado alimentario (frascos/tarrinas)',
    desc:'Envases de grado alimentario: frascos y tarrinas. Material inocuo. Para mermeladas, salsas, lácteos y miel. Herméticos y apilables.',
    precio:101150,
    tipo:'Insumo/Dotación',
    ciiu:'A (01–03) / C (10–12)',
    proceso:'Producción / Poscosecha / Conservación'
  }),

  producto({
    id:'CAT2-215',
    sector:'agro',
    icono:'🐔',
    nombre:'Bebederos automáticos (pecuaria menor) 6.5 LITROS',
    desc:'Bebederos automáticos para aves y animales menores, capacidad 6.5 litros. Dispensan agua continua sin desperdicio. Fáciles de limpiar. Ideales para pollos, gallinas y conejos.',
    precio:41650,
    tipo:'Insumo/Dotación',
    ciiu:'A (01–03) / C (10–12)',
    proceso:'Producción / Poscosecha / Conservación'
  }),

  producto({
    id:'CAT2-216',
    sector:'agro',
    icono:'🐔',
    nombre:'Comederos automáticos (pecuaria menor) 6.5 LITROS',
    desc:'Comederos automáticos para aves y animales menores, capacidad 6.5 litros. Dispensan alimento gradualmente. Fáciles de limpiar. Para pollos y codornices.',
    precio:41650,
    tipo:'Insumo/Dotación',
    ciiu:'A (01–03) / C (10–12)',
    proceso:'Producción / Poscosecha / Conservación'
  }),

  producto({
    id:'CAT2-217',
    sector:'agro',
    icono:'🐔',
    nombre:'Incubadora avícola Incubadora De 400 Huevos Inteligente industrial Automática',
    desc:'Incubadora avícola automática para 400 huevos. Volteo automático, control de temperatura y humedad. Alta tasa de eclosión. Para productores avícolas.',
    precio:571200,
    tipo:'Insumo/Dotación',
    ciiu:'A (01–03) / C (10–12)',
    proceso:'Producción / Poscosecha / Conservación'
  }),

  producto({
    id:'CAT2-218',
    sector:'agro',
    icono:'🐔',
    nombre:'Criadora avícola caperuza estandar',
    desc:'Criadora avícola a gas. Proporciona calor uniforme para pollitos recién nacidos. Control de temperatura. Reduce la mortalidad en la etapa inicial de cría.',
    precio:220150,
    tipo:'Insumo/Dotación',
    ciiu:'A (01–03) / C (10–12)',
    proceso:'Producción / Poscosecha / Conservación'
  }),

  producto({
    id:'CAT2-219',
    sector:'agro',
    icono:'🐟',
    nombre:'Aireador para estanque Sumergible Tipo Fuente de 1 a 2 Hp,',
    desc:'Aireador sumergible de 1 a 2 HP para estanques piscícolas. Oxigena el agua para mantener sanos los peces. Bajo consumo energético. Ideal para cultivo de tilapia y cachama.',
    precio:214200,
    tipo:'Equipo',
    ciiu:'A (01–03) / C (10–12)',
    proceso:'Producción / Poscosecha / Conservación'
  })

];

// Digital y Cultural
const PRODUCTOS_DIGITAL=[
  producto({
    id:'P198',
    sector:'digital',
    icono:'💻',
    nombre:'Procesador: AMD Ryzen™ 3 7330U 4 núcleos',
    desc:'de CPU, 8 hilos, Frecuencia Base de 2.3 GHz hasta 4.3 GHz Frecuencia Máxima, 10 MB de Cache L2 + L3 Chipset: Integrado en el procesador Sistema Operativo FreeDOS 3.0 en Español. Pantalla Interfaces Certificaciones Seguridad Garantía Gráficos Memoria RAM Almacenamiento Teclado Mouse Audio Cámara Web Conectividad Batería Adaptador AC Peso (2) USB 3.2 Gen 1 (1) USB Tipo C 3.2 Gen1 (Datos) (1) HDMI v1',
    precio:3034500,
    tipo:'Equipo',
    ciiu:'G (47) / R (90)',
    proceso:'Comercialización / Producción'
  }),

  producto({
    id:'P199',
    sector:'digital',
    icono:'💻',
    nombre:'Computador de escritorio (software básico) computador todo en uno intel core i5 13420H, 8 gb, 512 gb ssd, 24" - windows',
    desc:'Licencia de software básico de ofimática. Procesador de texto, hoja de cálculo y presentaciones. Para administración del negocio.',
    precio:4460715,
    tipo:'Equipo',
    ciiu:'G (47) / R (90)',
    proceso:'Comercialización / Producción'
  }),

  producto({
    id:'P200',
    sector:'digital',
    icono:'📶',
    nombre:'Router Wi‑Fi Tipo',
    desc:'Router Ancho 10.6 cm Alto 2.4 cm Largo 11.5 cm Color Negro Inalámbrico Si Número de puertos 4 Velocidad de conexión 0 - 1200 Mbps Área de cobertura 40 m2 Alimentación Eléctrica',
    precio:231872,
    tipo:'Equipo',
    ciiu:'G (47) / R (90)',
    proceso:'Comercialización / Producción'
  }),

  producto({
    id:'P201',
    sector:'digital',
    icono:'📶',
    nombre:'Repetidor Wi‑Fi Tipo',
    desc:'Extensor Ancho 7.7 cm Alto 8 cm Largo 7.8 cm Color Blanco Inalámbrico Si Número de puertos 1 Velocidad de conexión 0 - 750 Mbps Área de cobertura 7 m2',
    precio:214022,
    tipo:'Insumo/Dotación',
    ciiu:'G (47) / R (90)',
    proceso:'Comercialización / Producción'
  }),

  producto({
    id:'P202',
    sector:'digital',
    icono:'🔋',
    nombre:'UPS / regulador de voltaje Ups Hikvision de 1000 Va 600w 6 Tomas Nema 5-15r (4r - 2sr)',
    desc:'UPS Hikvision 1000 VA/600 W con 6 tomas Nema. Protege equipos de apagones y fluctuaciones de voltaje. Autonomía de 10-15 minutos.',
    precio:499622,
    tipo:'Insumo/Dotación',
    ciiu:'G (47) / R (90)',
    proceso:'Comercialización / Producción'
  }),

  producto({
    id:'P203',
    sector:'digital',
    icono:'🖨️',
    nombre:'Impresora de etiquetas MÉTODO DE IMPRESIÓN',
    desc:'Térmico directo, Térmico por transferencia ANCHO DE IMPESIÓN 104MM VELOCIIDAD DE IMPESIÓN 127MM/S INTERFAZ Ethernet, USB COMPATIBILIDAD Android, Windows, Linux, Mac OSEMULACIÓN DPL, EPL, TSPL, ZPL',
    precio:1028114,
    tipo:'Equipo',
    ciiu:'G (47) / R (90)',
    proceso:'Comercialización / Producción'
  }),

  producto({
    id:'P204',
    sector:'digital',
    icono:'🏷️',
    nombre:'Etiquetadora manual',
    desc:'Etiquetadora manual para impresión y aplicación de etiquetas de precio. Para tiendas, bodegas y supermercados. Compatible con rollos de etiquetas estándar.',
    precio:64082,
    tipo:'Insumo/Dotación',
    ciiu:'G (47) / R (90)',
    proceso:'Comercialización / Producción'
  }),

  producto({
    id:'P205',
    sector:'digital',
    icono:'⚖️',
    nombre:'Balanza digital para envíos (empaque) Capacidad: 300kg',
    desc:'División: 50g Unidades de peso: lb y Kg Batería interna recargable de 4V y autonomía de 8horas Dimensión plataforma: 40 x 50 cm  Display: LCD Display de tres pantallas con 7 dígitos cada uno Función Indicador: Liquidador Sistema de Tara para disminuir recipientes',
    precio:758625,
    tipo:'Insumo/Dotación',
    ciiu:'G (47) / R (90)',
    proceso:'Comercialización / Producción'
  }),

  producto({
    id:'P206',
    sector:'digital',
    icono:'📦',
    nombre:'Selladora térmica de bolsas Longitud de sellado: 30cm. ¡Sella bolsas de tamaño considerable para satisfacer todas tus ne',
    desc:'Ancho de sellado: 2mm, el tamaño perfecto para un sellado seguro y confiable. Tiempo de calentamiento ultrarrápido: entre 0.2 y 1.3 segundos, para que puedas trabajar eficientemente. Peso ligero de solo 2.9 kg, lo que facilita su transporte y manejo.',
    precio:355215,
    tipo:'Insumo/Dotación',
    ciiu:'G (47) / R (90)',
    proceso:'Comercialización / Producción'
  }),

  producto({
    id:'P207',
    sector:'digital',
    icono:'📦',
    nombre:'Selladora al vacío Tipo',
    desc:'Electrodomésticos de cocina modernos Ancho 43.18 cm Alto 25.4 cm Largo 52.5 cm Material PLASTICO Color Negro Potencia nominal 125 W Voltaje 117 V',
    precio:892322,
    tipo:'Insumo/Dotación',
    ciiu:'G (47) / R (90)',
    proceso:'Comercialización / Producción'
  }),

  producto({
    id:'P208',
    sector:'digital',
    icono:'📦',
    nombre:'Dispensador de cinta / cinta de embalaje',
    desc:'Dispensador de cinta de embalaje. Facilita el sellado rápido de cajas. Mango ergonómico. Aumenta la productividad en el proceso de empaque.',
    precio:85323,
    tipo:'Insumo/Dotación',
    ciiu:'G (47) / R (90)',
    proceso:'Comercialización / Producción'
  }),

  producto({
    id:'P209',
    sector:'digital',
    icono:'📦',
    nombre:'Dispensador de film stretch (empaque) Material y Diseño: Dispensador de stretch metálico con núcleo adaptable para bobin',
    desc:'Mango Ergonómico: Mango protegido con espuma para un agarre cómodo y seguro durante la aplicación del film stretch. Base en Aluminio: La base fabricada en aluminio proporciona estabilidad y durabilidad al dispensador. Tensión Ajustable: Cuenta con un sistema de tensión ajustable, permitiendo adaptar la fuerza según las necesidades de envoltura. Peso: 1,6 KG.',
    precio:624821,
    tipo:'Insumo/Dotación',
    ciiu:'G (47) / R (90)',
    proceso:'Comercialización / Producción'
  }),

  producto({
    id:'P210',
    sector:'digital',
    icono:'📦',
    nombre:'Cajas de cartón nuevas (empaque)',
    desc:'Cajas de cartón corrugado nuevas para empaque y envío. Resistentes a impactos. Para e-commerce, envíos de domicilio y almacenamiento.',
    precio:8746,
    tipo:'Insumo/Dotación',
    ciiu:'G (47) / R (90)',
    proceso:'Comercialización / Producción'
  }),

  producto({
    id:'P211',
    sector:'digital',
    icono:'📦',
    nombre:'Sobres de seguridad  13 x 19 en poliester',
    desc:'Sobres de seguridad en poliéster 13 x 19 cm con cierre adhesivo inviolable. Para envíos de documentos, joyas y productos de e-commerce.',
    precio:32130,
    tipo:'Insumo/Dotación',
    ciiu:'G (47) / R (90)',
    proceso:'Comercialización / Producción'
  }),

  producto({
    id:'P212',
    sector:'digital',
    icono:'📦',
    nombre:'Relleno protector (papel burbuja) - 50 cm x 5 mts',
    desc:'Relleno protector de papel burbuja 50 cm x 5 mts. Protege productos frágiles durante envíos. Para e-commerce y mensajería.',
    precio:28382,
    tipo:'Insumo/Dotación',
    ciiu:'G (47) / R (90)',
    proceso:'Comercialización / Producción'
  }),

  producto({
    id:'P213',
    sector:'digital',
    icono:'📦',
    nombre:'Canastillas plásticas para surtido Canastilla plastica fondo rombo pared rombo 60x40x25',
    desc:'Canastillas plásticas rígidas para almacenamiento y transporte. Apilables. Ideales para frutas, verduras, panadería, carnicería y logística.',
    precio:54978,
    tipo:'Insumo/Dotación',
    ciiu:'G (47) / R (90)',
    proceso:'Comercialización / Producción'
  }),

  producto({
    id:'P214',
    sector:'digital',
    icono:'🪑',
    nombre:'Mesa de empaque Mesa recomendada para logística. Con bandeja de teclado y repisa. Con entrepaño inferior para ubicar mat',
    desc:'Mesa de empaque para logística. Superficie amplia con repisa inferior. Para centros de distribución, bodegas y e-commerce.',
    precio:3195150,
    tipo:'Mobiliario',
    ciiu:'G (47) / R (90)',
    proceso:'Comercialización / Producción'
  }),

  producto({
    id:'P215',
    sector:'digital',
    icono:'🗄️',
    nombre:'Estantería metálica industrial torre 240 x 120 cm',
    desc:'Estantería metálica industrial 240 x 120 cm. Estructura en acero anticorrosivo. Capacidad por nivel hasta 200 kg. Para bodegas, tiendas y talleres.',
    precio:1841852,
    tipo:'Mobiliario',
    ciiu:'G (47) / R (90)',
    proceso:'Comercialización / Producción'
  }),

  producto({
    id:'P216',
    sector:'digital',
    icono:'📱',
    nombre:'Lector de código de barras escaners',
    desc:'Lector de código de barras USB o inalámbrico. Lee códigos 1D y 2D. Compatible con sistemas POS e inventario. Para tiendas y bodegas.',
    precio:249722,
    tipo:'Insumo/Dotación',
    ciiu:'G (47) / R (90)',
    proceso:'Comercialización / Producción'
  }),

  producto({
    id:'P217',
    sector:'digital',
    icono:'🏷️',
    nombre:'Pistola etiquetadora',
    desc:'Pistola etiquetadora de precios. Imprime y aplica etiquetas en una sola pasada. Para supermercados, tiendas y droguerías.',
    precio:62475,
    tipo:'Insumo/Dotación',
    ciiu:'G (47) / R (90)',
    proceso:'Comercialización / Producción'
  }),

  producto({
    id:'P218',
    sector:'digital',
    icono:'📸',
    nombre:'Kit de fotografía de producto (caja de luz)',
    desc:'Kit de fotografía de producto con caja de luz plegable. Fondos blanco y negro, luces LED. Para fotos profesionales de productos en e-commerce.',
    precio:298095,
    tipo:'Insumo/Dotación',
    ciiu:'G (47) / R (90)',
    proceso:'Comercialización / Producción'
  }),

  producto({
    id:'P219',
    sector:'digital',
    icono:'💡',
    nombre:'Iluminación LED para foto Temperatura de color: 3200-5600 K, CRI: 96',
    desc:'660 LED: 330 luz diurna y 330 tungsteno Tres adaptadores de 100-240 V CA, 50/60 Hz Tres tripodes de iluminación’ Tres estuches de transporte para paneles LED',
    precio:2855982,
    tipo:'Equipo',
    ciiu:'G (47) / R (90)',
    proceso:'Comercialización / Producción'
  }),

  producto({
    id:'P220',
    sector:'digital',
    icono:'🧺',
    nombre:'Trípode para fotografía Capacidad de carga: 34 lb',
    desc:'Trípode extensible de 24 a 77 pulgadas Longitud plegada: 19″ Patas de aleación de aluminio de 4 secciones con sistema de bloqueo abatible Pata y columna convertibles en monopie Rosca macho de 1/4″-20 Giro, inclinación y rotación de 360° Inclinación de 90° Columna central de 2 secciones Peso: 3,5 libras',
    precio:589032,
    tipo:'Insumo/Dotación',
    ciiu:'G (47) / R (90)',
    proceso:'Comercialización / Producción'
  }),

  producto({
    id:'P221',
    sector:'digital',
    icono:'📸',
    nombre:'Fondo blanco para fotografía Papel grueso mate de 11 metros de largo',
    desc:'Libre de ácido, libre de lignina y con PH neutro Enrollado en tubo de cartón de diámetro ø5cm',
    precio:713822,
    tipo:'Insumo/Dotación',
    ciiu:'G (47) / R (90)',
    proceso:'Comercialización / Producción'
  }),

  producto({
    id:'P222',
    sector:'digital',
    icono:'📷',
    nombre:'Soporte para celular (foto) Trípode hecho en Aleación de Aluminio.',
    desc:'• Compatible con Cámaras Canon, Nikon, Sony, Panasonic. • Altura máxima de 157 centímetros • Nivelador de burbuja incorporado • Cabeza Giratoria de 360 grados horizontal y 90 grados vertical. • Ajuste de patas con liberación rápida • Pies de gomas antideslizantes. • Base smartphone compatible con todos los Smartphones de hasta 100mm de ancho.',
    precio:196172,
    tipo:'Insumo/Dotación',
    ciiu:'G (47) / R (90)',
    proceso:'Comercialización / Producción'
  }),

  producto({
    id:'P223',
    sector:'digital',
    icono:'💻',
    nombre:'Cámara deportiva para registro El nuevo procesador GP2 hace que esta sea la GoPro más potente hasta la fecha',
    desc:'Impresionantes vídeos a 5,3K60 y 4K120, y fotos de 23 MP Estabilización de vídeo avanzada HyperSmooth 4.0 Resistente y sumergible hasta 10 m Sube automáticamente tu contenido a la nube mientras la cargas TimeWarp 3.0, cámara lenta 8X y mucho más para clavar la toma Compatible con la aplicación Quik',
    precio:1963500,
    tipo:'Equipo',
    ciiu:'G (47) / R (90)',
    proceso:'Comercialización / Producción'
  }),

  producto({
    id:'P224',
    sector:'digital',
    icono:'📷',
    nombre:'Cámara mirrorless básica (si aplica) Cámara Mirrorless Con Lente 16-50mm f/3.5-5.6 + Memoria 64Gb de 100Mb/s + Bolso',
    desc:'Cámara mirrorless básica con lente 16-50mm, sensor de alta resolución, video 4K. Para fotografía de producto y producción de contenido digital.',
    precio:6068982,
    tipo:'Equipo',
    ciiu:'G (47) / R (90)',
    proceso:'Comercialización / Producción'
  }),

  producto({
    id:'P225',
    sector:'digital',
    icono:'🎙️',
    nombre:'Micrófono de condensador DE CONDENSADOR SM4-K-KIT DE SHURE',
    desc:'Micrófono de condensador de alta sensibilidad. Para grabación de voz, instrumentos y producción de podcasts y contenido digital.',
    precio:2400825,
    tipo:'Insumo/Dotación',
    ciiu:'G (47) / R (90)',
    proceso:'Comercialización / Producción'
  }),

  producto({
    id:'P226',
    sector:'digital',
    icono:'🎙️',
    nombre:'Micrófono lavalier Micrófono omnidireccional',
    desc:'Conexión plug-and-play Compatible con cámaras Cable largo de 1.5 m  Construcción resistente Conector TRS de 3.5 mm',
    precio:249882,
    tipo:'Insumo/Dotación',
    ciiu:'G (47) / R (90)',
    proceso:'Comercialización / Producción'
  }),

  producto({
    id:'P227',
    sector:'digital',
    icono:'🎙️',
    nombre:'Interface de audio La interfaz Sonic Cube II es una interfaz de audio profesional de doble canal que cuenta con un pream',
    desc:'Interfaz de audio profesional para grabación y producción musical. Entradas XLR y jack. Compatible con computador vía USB. Fidelidad profesional.',
    precio:697756,
    tipo:'Equipo',
    ciiu:'G (47) / R (90)',
    proceso:'Comercialización / Producción'
  }),

  producto({
    id:'P228',
    sector:'digital',
    icono:'🎙️',
    nombre:'Grabadora de audio Gracias a un micrófono de alta sensibilidad, una reproducción sencilla y sus más de 159 horas de alma',
    desc:'Grabadora de audio digital portátil con micrófono de alta sensibilidad. Graba en MP3/WAV. Para podcasts, entrevistas y registro de campo.',
    precio:1115446,
    tipo:'Equipo',
    ciiu:'G (47) / R (90)',
    proceso:'Comercialización / Producción'
  }),

  producto({
    id:'P229',
    sector:'digital',
    icono:'🎙️',
    nombre:'Audífonos de monitoreo',
    desc:'Audífonos profesionales de monitoreo para producción de audio y video. Respuesta de frecuencia plana. Compatibles con interfaces de audio profesionales.',
    precio:383775,
    tipo:'Insumo/Dotación',
    ciiu:'G (47) / R (90)',
    proceso:'Comercialización / Producción'
  }),

  producto({
    id:'P230',
    sector:'digital',
    icono:'💡',
    nombre:'Kit de iluminación LED continua Temperatura de color: 3200-5600 K, CRI: 96',
    desc:'660 LED: 330 luz diurna y 330 tungsteno Tres adaptadores de 100-240 V CA, 50/60 Hz Tres tripodes de iluminación’ Tres estuches de transporte para paneles LED',
    precio:2855982,
    tipo:'Equipo',
    ciiu:'G (47) / R (90)',
    proceso:'Comercialización / Producción'
  }),

  producto({
    id:'P231',
    sector:'digital',
    icono:'📸',
    nombre:'Fondo croma Fondo perfecto para televisión, producción de video y fotografía.',
    desc:'El telón cuenta con un doblez para colgar en la barra. Bordes reforzados para evitar daños de tela. Hecho de 100% puro algodón muslin.',
    precio:356822,
    tipo:'Insumo/Dotación',
    ciiu:'G (47) / R (90)',
    proceso:'Comercialización / Producción'
  }),

  producto({
    id:'P232',
    sector:'digital',
    icono:'📺',
    nombre:'Teleprompter básico Lectura clara, sin necesidad de memorizar, presentación fluida y natural.',
    desc:'• Fácil de instalar y guardar. • Sin fugas de luz en el lente de la cámara. • Mantiene el nivel de los ojos y la alineación del lente para diferentes dispositivos. • Clip de liberación rápida para smartphone. • Anillo adaptador de lente de cámara: 58/67/72/77/82 mm. • Admite disparos con lente gran angular sin viñeteado. • Cuenta con soportes para zapata fría y una entrada de rosca de 1/4" • Contr',
    precio:713822,
    tipo:'Equipo',
    ciiu:'G (47) / R (90)',
    proceso:'Comercialización / Producción'
  }),

  producto({
    id:'P233',
    sector:'digital',
    icono:'💾',
    nombre:'Disco duro externo ssd externo 2 tb',
    desc:'Disco duro externo SSD de 2 TB. Alta velocidad de transferencia. Compacto y resistente. Para respaldo de archivos de fotografía, video y proyectos digitales.',
    precio:1588650,
    tipo:'Insumo/Dotación',
    ciiu:'G (47) / R (90)',
    proceso:'Comercialización / Producción'
  }),

  producto({
    id:'P234',
    sector:'digital',
    icono:'📦',
    nombre:'Memorias SD clase alta 128 gb, extreme pro',
    desc:'Memorias SD 128 GB clase alta. Alta velocidad de transferencia. Para cámaras, drones y grabadoras de video. Resistentes al agua y polvo.',
    precio:321282,
    tipo:'Insumo/Dotación',
    ciiu:'G (47) / R (90)',
    proceso:'Comercialización / Producción'
  }),

  producto({
    id:'P235',
    sector:'digital',
    icono:'📷',
    nombre:'Soporte brazo articulado (cámara/mic) Tiene una altura mínima de 10cm y máxima de 94cm.',
    desc:'Su ángulo de rotación es de 360°. Está fabricado en aluminio.',
    precio:562096,
    tipo:'Equipo',
    ciiu:'G (47) / R (90)',
    proceso:'Comercialización / Producción'
  }),

  producto({
    id:'P236',
    sector:'digital',
    icono:'🎬',
    nombre:'Estabilizador/gimbal Estabilizador de 3 ejes para vlogs o videos con celular',
    desc:'• Rotación de 360° y modo Vortex integrados • Luz de relleno integrada, seguimiento por IA • Compatible con celulares de 5cm a 8,8cm de ancho • Panel de control todo en uno • Algoritmo de estabilización avanzado • Puntos de montaje magnéticos • Conectividad Bluetooth 5.1',
    precio:1784822,
    tipo:'Equipo',
    ciiu:'G (47) / R (90)',
    proceso:'Comercialización / Producción'
  }),

  producto({
    id:'P237',
    sector:'digital',
    icono:'💿',
    nombre:'Software básico (ofimática)',
    desc:'Licencia de software básico de ofimática. Procesador de texto, hoja de cálculo y presentaciones. Para administración del negocio.',
    precio:1963500,
    tipo:'Insumo/Dotación',
    ciiu:'G (47) / R (90)',
    proceso:'Comercialización / Producción'
  }),

  producto({
    id:'P238',
    sector:'digital',
    icono:'🖨️',
    nombre:'Impresora térmica de recibos Tipo',
    desc:'Impresoras Referencia del Producto en el Certificado/Empaque 7709281325989 Ancho 11 cm Alto 10 cm Largo 15 cm Tipo de impresora Impresora Tipo de impresión Láser monocromática Color Negra Cuenta con Wifi No Calidad de impresión Alta resolución Compatibilidad Windows, Linux, Android y macOS',
    precio:196172,
    tipo:'Equipo',
    ciiu:'G (47) / R (90)',
    proceso:'Comercialización / Producción'
  }),

  producto({
    id:'P239',
    sector:'digital',
    icono:'💰',
    nombre:'Caja registradora / POS odo en Uno Caja Registradora Profesional para Pequeñas Empresas, Paquete POS Incluye: Monitor Tá',
    desc:'Sistema POS todo en uno. Incluye monitor táctil, cajón de dinero, escáner e impresora térmica. Administra ventas, inventario y cierre de caja.',
    precio:9686324,
    tipo:'Insumo/Dotación',
    ciiu:'G (47) / R (90)',
    proceso:'Comercialización / Producción'
  }),

  producto({
    id:'P240',
    sector:'digital',
    icono:'📱',
    nombre:'Lector QR/Pagos Incluye soporte: Sí',
    desc:'Voltaje: 110V Lector fijo. Su tipo de escaneo es omnidireccional. Tiene sensor de tecnología láser. Registra y decodifica un amplio volumen de datos.',
    precio:373600,
    tipo:'Insumo/Dotación',
    ciiu:'G (47) / R (90)',
    proceso:'Comercialización / Producción'
  }),

  producto({
    id:'P241',
    sector:'digital',
    icono:'🗄️',
    nombre:'Mostrador portátil de exhibición en acrilico',
    desc:'Mostrador portátil de exhibición en acrílico transparente. Plegable y liviano. Para ferias, eventos y exposición de accesorios.',
    precio:1088850,
    tipo:'Mobiliario',
    ciiu:'G (47) / R (90)',
    proceso:'Comercialización / Producción'
  }),

  producto({
    id:'P242',
    sector:'digital',
    icono:'🗄️',
    nombre:'Vitrina pequeña de exhibición - vidrio templado puerta corrediza',
    desc:'Vitrina pequeña de exhibición con vidrio templado y puerta corrediza. Para tiendas de tecnología, joyería y farmacia.',
    precio:2868495,
    tipo:'Mobiliario',
    ciiu:'G (47) / R (90)',
    proceso:'Comercialización / Producción'
  }),

  producto({
    id:'P243',
    sector:'digital',
    icono:'🗄️',
    nombre:'Maniquí de exhibición (si vende textiles) cuerpo entero',
    desc:'Maniquí de exhibición de cuerpo entero para venta de ropa. Postura natural. Para vitrinas y tiendas de ropa.',
    precio:1133475,
    tipo:'Mobiliario',
    ciiu:'G (47) / R (90)',
    proceso:'Comercialización / Producción'
  }),

  producto({
    id:'P244',
    sector:'digital',
    icono:'🗄️',
    nombre:'Perchero metálico',
    desc:'Perchero metálico resistente para exhibición y organización de ropa. Para tiendas, boutiques y talleres de confección.',
    precio:212415,
    tipo:'Mobiliario',
    ciiu:'G (47) / R (90)',
    proceso:'Comercialización / Producción'
  }),

  producto({
    id:'P245',
    sector:'digital',
    icono:'🗄️',
    nombre:'Góndola modular Dimensiones:',
    desc:'Altura: 220 cm Ancho: 128 cm Profundidad: 55 cm Peso : 30 kg Contenido del paquete:  1 x Góndola modular',
    precio:6795495,
    tipo:'Mobiliario',
    ciiu:'G (47) / R (90)',
    proceso:'Comercialización / Producción'
  }),

  producto({
    id:'P246',
    sector:'digital',
    icono:'🧯',
    nombre:'Extintor multipropósito (bodega) abc- 20 libras rdl',
    desc:'Extintor multipropósito ABC 20 libras. Apaga fuegos tipo A, B y C. Certificado con manómetro. Obligatorio en talleres, cocinas y bodegas.',
    precio:196172,
    tipo:'Insumo/Dotación',
    ciiu:'G (47) / R (90)',
    proceso:'Comercialización / Producción'
  }),

  producto({
    id:'P247',
    sector:'digital',
    icono:'🩹',
    nombre:'Botiquín industrial (taller) Estuche plástico mini cuadrado, medidas 21,5 cm x 11.5 cm x 6 cm compuesto por 13 elementos',
    desc:'Botiquín de primeros auxilios industrial. Incluye vendas, antisépticos, curitas y guantes. Cumple normas de seguridad industrial. Estuche plástico compacto.',
    precio:83716,
    tipo:'Insumo/Dotación',
    ciiu:'G (47) / R (90)',
    proceso:'Comercialización / Producción'
  }),

  producto({
    id:'P517',
    sector:'digital',
    icono:'💻',
    nombre:'Procesador: AMD Ryzen™ 3 7330U 4 núcleos',
    desc:'de CPU, 8 hilos, Frecuencia Base de 2.3 GHz hasta 4.3 GHz Frecuencia Máxima, 10 MB de Cache L2 + L3 Chipset: Integrado en el procesador Sistema Operativo FreeDOS 3.0 en Español. Pantalla Interfaces Certificaciones Seguridad Garantía Gráficos Memoria RAM Almacenamiento Teclado Mouse Audio Cámara Web Conectividad Batería Adaptador AC Peso (2) USB 3.2 Gen 1 (1) USB Tipo C 3.2 Gen1 (Datos) (1) HDMI v1',
    precio:2142000,
    tipo:'Equipo',
    ciiu:'G (47) / R (90)',
    proceso:'Comercialización / Producción'
  }),

  producto({
    id:'P518',
    sector:'digital',
    icono:'💻',
    nombre:'Computador de escritorio (software básico) computador todo en uno intel core i5 13420H, 8 gb, 512 gb ssd, 24" - windows',
    desc:'Licencia de software básico de ofimática. Procesador de texto, hoja de cálculo y presentaciones. Para administración del negocio.',
    precio:5862654,
    tipo:'Equipo',
    ciiu:'G (47) / R (90)',
    proceso:'Comercialización / Producción'
  }),

  producto({
    id:'P519',
    sector:'digital',
    icono:'📶',
    nombre:'Router Wi‑Fi Tipo',
    desc:'Router Ancho 10.6 cm Alto 2.4 cm Largo 11.5 cm Color Negro Inalámbrico Si Número de puertos 4 Velocidad de conexión 0 - 1200 Mbps Área de cobertura 40 m2 Alimentación Eléctrica',
    precio:101150,
    tipo:'Equipo',
    ciiu:'G (47) / R (90)',
    proceso:'Comercialización / Producción'
  }),

  producto({
    id:'P520',
    sector:'digital',
    icono:'📶',
    nombre:'Repetidor Wi‑Fi Tipo',
    desc:'Extensor Ancho 7.7 cm Alto 8 cm Largo 7.8 cm Color Blanco Inalámbrico Si Número de puertos 1 Velocidad de conexión 0 - 750 Mbps Área de cobertura 7 m2',
    precio:77350,
    tipo:'Insumo/Dotación',
    ciiu:'G (47) / R (90)',
    proceso:'Comercialización / Producción'
  }),

  producto({
    id:'P521',
    sector:'digital',
    icono:'🔋',
    nombre:'UPS / regulador de voltaje Ups Hikvision de 1000 Va 600w 6 Tomas Nema 5-15r (4r - 2sr)',
    desc:'UPS Hikvision 1000 VA/600 W con 6 tomas Nema. Protege equipos de apagones y fluctuaciones de voltaje. Autonomía de 10-15 minutos.',
    precio:333200,
    tipo:'Insumo/Dotación',
    ciiu:'G (47) / R (90)',
    proceso:'Comercialización / Producción'
  }),

  producto({
    id:'P522',
    sector:'digital',
    icono:'🖨️',
    nombre:'Impresora de etiquetas MÉTODO DE IMPRESIÓN',
    desc:'Térmico directo, Térmico por transferencia ANCHO DE IMPESIÓN 104MM VELOCIIDAD DE IMPESIÓN 127MM/S INTERFAZ Ethernet, USB COMPATIBILIDAD Android, Windows, Linux, Mac OSEMULACIÓN DPL, EPL, TSPL, ZPL',
    precio:416500,
    tipo:'Equipo',
    ciiu:'G (47) / R (90)',
    proceso:'Comercialización / Producción'
  }),

  producto({
    id:'P523',
    sector:'digital',
    icono:'🏷️',
    nombre:'Etiquetadora manual',
    desc:'Etiquetadora manual para impresión y aplicación de etiquetas de precio. Para tiendas, bodegas y supermercados. Compatible con rollos de etiquetas estándar.',
    precio:113050,
    tipo:'Insumo/Dotación',
    ciiu:'G (47) / R (90)',
    proceso:'Comercialización / Producción'
  }),

  producto({
    id:'P524',
    sector:'digital',
    icono:'⚖️',
    nombre:'Balanza digital para envíos (empaque) Capacidad: 300kg',
    desc:'División: 50g Unidades de peso: lb y Kg Batería interna recargable de 4V y autonomía de 8horas Dimensión plataforma: 40 x 50 cm  Display: LCD Display de tres pantallas con 7 dígitos cada uno Función Indicador: Liquidador Sistema de Tara para disminuir recipientes',
    precio:475810,
    tipo:'Insumo/Dotación',
    ciiu:'G (47) / R (90)',
    proceso:'Comercialización / Producción'
  }),

  producto({
    id:'P525',
    sector:'digital',
    icono:'📦',
    nombre:'Selladora térmica de bolsas Longitud de sellado: 30cm. ¡Sella bolsas de tamaño considerable para satisfacer todas tus ne',
    desc:'Ancho de sellado: 2mm, el tamaño perfecto para un sellado seguro y confiable. Tiempo de calentamiento ultrarrápido: entre 0.2 y 1.3 segundos, para que puedas trabajar eficientemente. Peso ligero de solo 2.9 kg, lo que facilita su transporte y manejo.',
    precio:101150,
    tipo:'Insumo/Dotación',
    ciiu:'G (47) / R (90)',
    proceso:'Comercialización / Producción'
  }),

  producto({
    id:'P526',
    sector:'digital',
    icono:'📦',
    nombre:'Selladora al vacío Tipo',
    desc:'Electrodomésticos de cocina modernos Ancho 43.18 cm Alto 25.4 cm Largo 52.5 cm Material PLASTICO Color Negro Potencia nominal 125 W Voltaje 117 V',
    precio:220150,
    tipo:'Insumo/Dotación',
    ciiu:'G (47) / R (90)',
    proceso:'Comercialización / Producción'
  }),

  producto({
    id:'P527',
    sector:'digital',
    icono:'📦',
    nombre:'Dispensador de cinta / cinta de embalaje',
    desc:'Dispensador de cinta de embalaje. Facilita el sellado rápido de cajas. Mango ergonómico. Aumenta la productividad en el proceso de empaque.',
    precio:29750,
    tipo:'Insumo/Dotación',
    ciiu:'G (47) / R (90)',
    proceso:'Comercialización / Producción'
  }),

  producto({
    id:'P528',
    sector:'digital',
    icono:'📦',
    nombre:'Dispensador de film stretch (empaque) Material y Diseño: Dispensador de stretch metálico con núcleo adaptable para bobin',
    desc:'Mango Ergonómico: Mango protegido con espuma para un agarre cómodo y seguro durante la aplicación del film stretch. Base en Aluminio: La base fabricada en aluminio proporciona estabilidad y durabilidad al dispensador. Tensión Ajustable: Cuenta con un sistema de tensión ajustable, permitiendo adaptar la fuerza según las necesidades de envoltura. Peso: 1,6 KG.',
    precio:53550,
    tipo:'Insumo/Dotación',
    ciiu:'G (47) / R (90)',
    proceso:'Comercialización / Producción'
  }),

  producto({
    id:'P529',
    sector:'digital',
    icono:'📦',
    nombre:'Cajas de cartón nuevas (empaque)',
    desc:'Cajas de cartón corrugado nuevas para empaque y envío. Resistentes a impactos. Para e-commerce, envíos de domicilio y almacenamiento.',
    precio:53550,
    tipo:'Insumo/Dotación',
    ciiu:'G (47) / R (90)',
    proceso:'Comercialización / Producción'
  }),

  producto({
    id:'P530',
    sector:'digital',
    icono:'📦',
    nombre:'Sobres de seguridad  13 x 19 en poliester',
    desc:'Sobres de seguridad en poliéster 13 x 19 cm con cierre adhesivo inviolable. Para envíos de documentos, joyas y productos de e-commerce.',
    precio:33320,
    tipo:'Insumo/Dotación',
    ciiu:'G (47) / R (90)',
    proceso:'Comercialización / Producción'
  }),

  producto({
    id:'P531',
    sector:'digital',
    icono:'📦',
    nombre:'Relleno protector (papel burbuja) - 50 cm x 5 mts',
    desc:'Relleno protector de papel burbuja 50 cm x 5 mts. Protege productos frágiles durante envíos. Para e-commerce y mensajería.',
    precio:21420,
    tipo:'Insumo/Dotación',
    ciiu:'G (47) / R (90)',
    proceso:'Comercialización / Producción'
  }),

  producto({
    id:'P532',
    sector:'digital',
    icono:'📦',
    nombre:'Canastillas plásticas para surtido Canastilla plastica fondo rombo pared rombo 60x40x25',
    desc:'Canastillas plásticas rígidas para almacenamiento y transporte. Apilables. Ideales para frutas, verduras, panadería, carnicería y logística.',
    precio:41650,
    tipo:'Insumo/Dotación',
    ciiu:'G (47) / R (90)',
    proceso:'Comercialización / Producción'
  }),

  producto({
    id:'P533',
    sector:'digital',
    icono:'🪑',
    nombre:'Mesa de empaque Mesa recomendada para logística. Con bandeja de teclado y repisa. Con entrepaño inferior para ubicar mat',
    desc:'Mesa de empaque para logística. Superficie amplia con repisa inferior. Para centros de distribución, bodegas y e-commerce.',
    precio:571200,
    tipo:'Mobiliario',
    ciiu:'G (47) / R (90)',
    proceso:'Comercialización / Producción'
  }),

  producto({
    id:'P534',
    sector:'digital',
    icono:'🗄️',
    nombre:'Estantería metálica industrial torre 240 x 120 cm',
    desc:'Estantería metálica industrial 240 x 120 cm. Estructura en acero anticorrosivo. Capacidad por nivel hasta 200 kg. Para bodegas, tiendas y talleres.',
    precio:380800,
    tipo:'Mobiliario',
    ciiu:'G (47) / R (90)',
    proceso:'Comercialización / Producción'
  }),

  producto({
    id:'P535',
    sector:'digital',
    icono:'📱',
    nombre:'Lector de código de barras escaners',
    desc:'Lector de código de barras USB o inalámbrico. Lee códigos 1D y 2D. Compatible con sistemas POS e inventario. Para tiendas y bodegas.',
    precio:101150,
    tipo:'Insumo/Dotación',
    ciiu:'G (47) / R (90)',
    proceso:'Comercialización / Producción'
  }),

  producto({
    id:'P536',
    sector:'digital',
    icono:'🏷️',
    nombre:'Pistola etiquetadora',
    desc:'Pistola etiquetadora de precios. Imprime y aplica etiquetas en una sola pasada. Para supermercados, tiendas y droguerías.',
    precio:53550,
    tipo:'Insumo/Dotación',
    ciiu:'G (47) / R (90)',
    proceso:'Comercialización / Producción'
  }),

  producto({
    id:'P537',
    sector:'digital',
    icono:'📸',
    nombre:'Kit de fotografía de producto (caja de luz)',
    desc:'Kit de fotografía de producto con caja de luz plegable. Fondos blanco y negro, luces LED. Para fotos profesionales de productos en e-commerce.',
    precio:220150,
    tipo:'Insumo/Dotación',
    ciiu:'G (47) / R (90)',
    proceso:'Comercialización / Producción'
  }),

  producto({
    id:'P538',
    sector:'digital',
    icono:'💡',
    nombre:'Iluminación LED para foto Temperatura de color: 3200-5600 K, CRI: 96',
    desc:'660 LED: 330 luz diurna y 330 tungsteno Tres adaptadores de 100-240 V CA, 50/60 Hz Tres tripodes de iluminación’ Tres estuches de transporte para paneles LED',
    precio:452200,
    tipo:'Equipo',
    ciiu:'G (47) / R (90)',
    proceso:'Comercialización / Producción'
  }),

  producto({
    id:'P539',
    sector:'digital',
    icono:'🧺',
    nombre:'Trípode para fotografía Capacidad de carga: 34 lb',
    desc:'Trípode extensible de 24 a 77 pulgadas Longitud plegada: 19″ Patas de aleación de aluminio de 4 secciones con sistema de bloqueo abatible Pata y columna convertibles en monopie Rosca macho de 1/4″-20 Giro, inclinación y rotación de 360° Inclinación de 90° Columna central de 2 secciones Peso: 3,5 libras',
    precio:220150,
    tipo:'Insumo/Dotación',
    ciiu:'G (47) / R (90)',
    proceso:'Comercialización / Producción'
  }),

  producto({
    id:'P540',
    sector:'digital',
    icono:'📸',
    nombre:'Fondo blanco para fotografía Papel grueso mate de 11 metros de largo',
    desc:'Libre de ácido, libre de lignina y con PH neutro Enrollado en tubo de cartón de diámetro ø5cm',
    precio:101150,
    tipo:'Insumo/Dotación',
    ciiu:'G (47) / R (90)',
    proceso:'Comercialización / Producción'
  }),

  producto({
    id:'P541',
    sector:'digital',
    icono:'📷',
    nombre:'Soporte para celular (foto) Trípode hecho en Aleación de Aluminio.',
    desc:'• Compatible con Cámaras Canon, Nikon, Sony, Panasonic. • Altura máxima de 157 centímetros • Nivelador de burbuja incorporado • Cabeza Giratoria de 360 grados horizontal y 90 grados vertical. • Ajuste de patas con liberación rápida • Pies de gomas antideslizantes. • Base smartphone compatible con todos los Smartphones de hasta 100mm de ancho.',
    precio:53550,
    tipo:'Insumo/Dotación',
    ciiu:'G (47) / R (90)',
    proceso:'Comercialización / Producción'
  }),

  producto({
    id:'P542',
    sector:'digital',
    icono:'💻',
    nombre:'Cámara deportiva para registro El nuevo procesador GP2 hace que esta sea la GoPro más potente hasta la fecha',
    desc:'Impresionantes vídeos a 5,3K60 y 4K120, y fotos de 23 MP Estabilización de vídeo avanzada HyperSmooth 4.0 Resistente y sumergible hasta 10 m Sube automáticamente tu contenido a la nube mientras la cargas TimeWarp 3.0, cámara lenta 8X y mucho más para clavar la toma Compatible con la aplicación Quik',
    precio:1428000,
    tipo:'Equipo',
    ciiu:'G (47) / R (90)',
    proceso:'Comercialización / Producción'
  }),

  producto({
    id:'P543',
    sector:'digital',
    icono:'📷',
    nombre:'Cámara mirrorless básica (si aplica) Cámara Mirrorless Con Lente 16-50mm f/3.5-5.6 + Memoria 64Gb de 100Mb/s + Bolso',
    desc:'Cámara mirrorless básica con lente 16-50mm, sensor de alta resolución, video 4K. Para fotografía de producto y producción de contenido digital.',
    precio:3332000,
    tipo:'Equipo',
    ciiu:'G (47) / R (90)',
    proceso:'Comercialización / Producción'
  }),

  producto({
    id:'P544',
    sector:'digital',
    icono:'🎙️',
    nombre:'Micrófono de condensador DE CONDENSADOR SM4-K-KIT DE SHURE',
    desc:'Micrófono de condensador de alta sensibilidad. Para grabación de voz, instrumentos y producción de podcasts y contenido digital.',
    precio:809200,
    tipo:'Insumo/Dotación',
    ciiu:'G (47) / R (90)',
    proceso:'Comercialización / Producción'
  }),

  producto({
    id:'P545',
    sector:'digital',
    icono:'🎙️',
    nombre:'Micrófono lavalier Micrófono omnidireccional',
    desc:'Conexión plug-and-play Compatible con cámaras Cable largo de 1.5 m  Construcción resistente Conector TRS de 3.5 mm',
    precio:220150,
    tipo:'Insumo/Dotación',
    ciiu:'G (47) / R (90)',
    proceso:'Comercialización / Producción'
  }),

  producto({
    id:'P546',
    sector:'digital',
    icono:'🎙️',
    nombre:'Interface de audio La interfaz Sonic Cube II es una interfaz de audio profesional de doble canal que cuenta con un pream',
    desc:'Interfaz de audio profesional para grabación y producción musical. Entradas XLR y jack. Compatible con computador vía USB. Fidelidad profesional.',
    precio:571200,
    tipo:'Equipo',
    ciiu:'G (47) / R (90)',
    proceso:'Comercialización / Producción'
  }),

  producto({
    id:'P547',
    sector:'digital',
    icono:'🎙️',
    nombre:'Grabadora de audio Gracias a un micrófono de alta sensibilidad, una reproducción sencilla y sus más de 159 horas de alma',
    desc:'Grabadora de audio digital portátil con micrófono de alta sensibilidad. Graba en MP3/WAV. Para podcasts, entrevistas y registro de campo.',
    precio:452200,
    tipo:'Equipo',
    ciiu:'G (47) / R (90)',
    proceso:'Comercialización / Producción'
  }),

  producto({
    id:'P548',
    sector:'digital',
    icono:'🎙️',
    nombre:'Audífonos de monitoreo',
    desc:'Audífonos profesionales de monitoreo para producción de audio y video. Respuesta de frecuencia plana. Compatibles con interfaces de audio profesionales.',
    precio:333200,
    tipo:'Insumo/Dotación',
    ciiu:'G (47) / R (90)',
    proceso:'Comercialización / Producción'
  }),

  producto({
    id:'P549',
    sector:'digital',
    icono:'💡',
    nombre:'Kit de iluminación LED continua Temperatura de color: 3200-5600 K, CRI: 96',
    desc:'660 LED: 330 luz diurna y 330 tungsteno Tres adaptadores de 100-240 V CA, 50/60 Hz Tres tripodes de iluminación’ Tres estuches de transporte para paneles LED',
    precio:1011500,
    tipo:'Equipo',
    ciiu:'G (47) / R (90)',
    proceso:'Comercialización / Producción'
  }),

  producto({
    id:'P550',
    sector:'digital',
    icono:'📸',
    nombre:'Fondo croma Fondo perfecto para televisión, producción de video y fotografía.',
    desc:'El telón cuenta con un doblez para colgar en la barra. Bordes reforzados para evitar daños de tela. Hecho de 100% puro algodón muslin.',
    precio:101150,
    tipo:'Insumo/Dotación',
    ciiu:'G (47) / R (90)',
    proceso:'Comercialización / Producción'
  }),

  producto({
    id:'P551',
    sector:'digital',
    icono:'📺',
    nombre:'Teleprompter básico Lectura clara, sin necesidad de memorizar, presentación fluida y natural.',
    desc:'• Fácil de instalar y guardar. • Sin fugas de luz en el lente de la cámara. • Mantiene el nivel de los ojos y la alineación del lente para diferentes dispositivos. • Clip de liberación rápida para smartphone. • Anillo adaptador de lente de cámara: 58/67/72/77/82 mm. • Admite disparos con lente gran angular sin viñeteado. • Cuenta con soportes para zapata fría y una entrada de rosca de 1/4" • Contr',
    precio:452200,
    tipo:'Equipo',
    ciiu:'G (47) / R (90)',
    proceso:'Comercialización / Producción'
  }),

  producto({
    id:'P552',
    sector:'digital',
    icono:'💾',
    nombre:'Disco duro externo ssd externo 2 tb',
    desc:'Disco duro externo SSD de 2 TB. Alta velocidad de transferencia. Compacto y resistente. Para respaldo de archivos de fotografía, video y proyectos digitales.',
    precio:333200,
    tipo:'Insumo/Dotación',
    ciiu:'G (47) / R (90)',
    proceso:'Comercialización / Producción'
  }),

  producto({
    id:'P553',
    sector:'digital',
    icono:'📦',
    nombre:'Memorias SD clase alta 128 gb, extreme pro',
    desc:'Memorias SD 128 GB clase alta. Alta velocidad de transferencia. Para cámaras, drones y grabadoras de video. Resistentes al agua y polvo.',
    precio:113050,
    tipo:'Insumo/Dotación',
    ciiu:'G (47) / R (90)',
    proceso:'Comercialización / Producción'
  }),

  producto({
    id:'P554',
    sector:'digital',
    icono:'📷',
    nombre:'Soporte brazo articulado (cámara/mic) Tiene una altura mínima de 10cm y máxima de 94cm.',
    desc:'Su ángulo de rotación es de 360°. Está fabricado en aluminio.',
    precio:220150,
    tipo:'Equipo',
    ciiu:'G (47) / R (90)',
    proceso:'Comercialización / Producción'
  }),

  producto({
    id:'P555',
    sector:'digital',
    icono:'🎬',
    nombre:'Estabilizador/gimbal Estabilizador de 3 ejes para vlogs o videos con celular',
    desc:'• Rotación de 360° y modo Vortex integrados • Luz de relleno integrada, seguimiento por IA • Compatible con celulares de 5cm a 8,8cm de ancho • Panel de control todo en uno • Algoritmo de estabilización avanzado • Puntos de montaje magnéticos • Conectividad Bluetooth 5.1',
    precio:452200,
    tipo:'Equipo',
    ciiu:'G (47) / R (90)',
    proceso:'Comercialización / Producción'
  }),

  producto({
    id:'P556',
    sector:'digital',
    icono:'💿',
    nombre:'Software básico (ofimática)',
    desc:'Licencia de software básico de ofimática. Procesador de texto, hoja de cálculo y presentaciones. Para administración del negocio.',
    precio:220150,
    tipo:'Insumo/Dotación',
    ciiu:'G (47) / R (90)',
    proceso:'Comercialización / Producción'
  }),

  producto({
    id:'P557',
    sector:'digital',
    icono:'🖨️',
    nombre:'Impresora térmica de recibos Tipo',
    desc:'Impresoras Referencia del Producto en el Certificado/Empaque 7709281325989 Ancho 11 cm Alto 10 cm Largo 15 cm Tipo de impresora Impresora Tipo de impresión Láser monocromática Color Negra Cuenta con Wifi No Calidad de impresión Alta resolución Compatibilidad Windows, Linux, Android y macOS',
    precio:214200,
    tipo:'Equipo',
    ciiu:'G (47) / R (90)',
    proceso:'Comercialización / Producción'
  }),

  producto({
    id:'P558',
    sector:'digital',
    icono:'💰',
    nombre:'Caja registradora / POS odo en Uno Caja Registradora Profesional para Pequeñas Empresas, Paquete POS Incluye: Monitor Tá',
    desc:'Sistema POS todo en uno. Incluye monitor táctil, cajón de dinero, escáner e impresora térmica. Administra ventas, inventario y cierre de caja.',
    precio:5256468,
    tipo:'Insumo/Dotación',
    ciiu:'G (47) / R (90)',
    proceso:'Comercialización / Producción'
  }),

  producto({
    id:'P559',
    sector:'digital',
    icono:'📱',
    nombre:'Lector QR/Pagos Incluye soporte: Sí',
    desc:'Voltaje: 110V Lector fijo. Su tipo de escaneo es omnidireccional. Tiene sensor de tecnología láser. Registra y decodifica un amplio volumen de datos.',
    precio:220150,
    tipo:'Insumo/Dotación',
    ciiu:'G (47) / R (90)',
    proceso:'Comercialización / Producción'
  }),

  producto({
    id:'P560',
    sector:'digital',
    icono:'🗄️',
    nombre:'Mostrador portátil de exhibición en acrilico',
    desc:'Mostrador portátil de exhibición en acrílico transparente. Plegable y liviano. Para ferias, eventos y exposición de accesorios.',
    precio:333200,
    tipo:'Mobiliario',
    ciiu:'G (47) / R (90)',
    proceso:'Comercialización / Producción'
  }),

  producto({
    id:'P561',
    sector:'digital',
    icono:'🗄️',
    nombre:'Vitrina pequeña de exhibición - vidrio templado puerta corrediza',
    desc:'Vitrina pequeña de exhibición con vidrio templado y puerta corrediza. Para tiendas de tecnología, joyería y farmacia.',
    precio:809200,
    tipo:'Mobiliario',
    ciiu:'G (47) / R (90)',
    proceso:'Comercialización / Producción'
  }),

  producto({
    id:'P562',
    sector:'digital',
    icono:'🗄️',
    nombre:'Maniquí de exhibición (si vende textiles) cuerpo entero',
    desc:'Maniquí de exhibición de cuerpo entero para venta de ropa. Postura natural. Para vitrinas y tiendas de ropa.',
    precio:339150,
    tipo:'Mobiliario',
    ciiu:'G (47) / R (90)',
    proceso:'Comercialización / Producción'
  }),

  producto({
    id:'P563',
    sector:'digital',
    icono:'🗄️',
    nombre:'Perchero metálico',
    desc:'Perchero metálico resistente para exhibición y organización de ropa. Para tiendas, boutiques y talleres de confección.',
    precio:101150,
    tipo:'Mobiliario',
    ciiu:'G (47) / R (90)',
    proceso:'Comercialización / Producción'
  }),

  producto({
    id:'P564',
    sector:'digital',
    icono:'🗄️',
    nombre:'Góndola modular Dimensiones:',
    desc:'Altura: 220 cm Ancho: 128 cm Profundidad: 55 cm Peso : 30 kg Contenido del paquete:  1 x Góndola modular',
    precio:535500,
    tipo:'Mobiliario',
    ciiu:'G (47) / R (90)',
    proceso:'Comercialización / Producción'
  }),

  producto({
    id:'P565',
    sector:'digital',
    icono:'🧯',
    nombre:'Extintor multipropósito (bodega) abc- 20 libras rdl',
    desc:'Extintor multipropósito ABC 20 libras. Apaga fuegos tipo A, B y C. Certificado con manómetro. Obligatorio en talleres, cocinas y bodegas.',
    precio:113050,
    tipo:'Insumo/Dotación',
    ciiu:'G (47) / R (90)',
    proceso:'Comercialización / Producción'
  }),

  producto({
    id:'P566',
    sector:'digital',
    icono:'🩹',
    nombre:'Botiquín industrial (taller) Estuche plástico mini cuadrado, medidas 21,5 cm x 11.5 cm x 6 cm compuesto por 13 elementos',
    desc:'Botiquín de primeros auxilios industrial. Incluye vendas, antisépticos, curitas y guantes. Cumple normas de seguridad industrial. Estuche plástico compacto.',
    precio:77350,
    tipo:'Insumo/Dotación',
    ciiu:'G (47) / R (90)',
    proceso:'Comercialización / Producción'
  }),

  producto({
    id:'CAT2-220',
    sector:'digital',
    icono:'💻',
    nombre:'Procesador: AMD Ryzen™ 3 7330U 4 núcleos',
    desc:'de CPU, 8 hilos, Frecuencia Base de 2.3 GHz hasta 4.3 GHz Frecuencia Máxima, 10 MB de Cache L2 + L3 Chipset: Integrado en el procesador Sistema Operativo FreeDOS 3.0 en Español. Pantalla Interfaces Certificaciones Seguridad Garantía Gráficos Memoria RAM Almacenamiento Teclado Mouse Audio Cámara Web Conectividad Batería Adaptador AC Peso (2) USB 3.2 Gen 1 (1) USB Tipo C 3.2 Gen1 (Datos) (1) HDMI v1',
    precio:2142000,
    tipo:'Equipo',
    ciiu:'G (47) / R (90)',
    proceso:'Comercialización / Producción'
  }),

  producto({
    id:'CAT2-221',
    sector:'digital',
    icono:'💻',
    nombre:'Computador de escritorio (software básico) computador todo en uno intel core i5 13420H, 8 gb, 512 gb ssd, 24" - windows',
    desc:'Licencia de software básico de ofimática. Procesador de texto, hoja de cálculo y presentaciones. Para administración del negocio.',
    precio:4926600,
    tipo:'Equipo',
    ciiu:'G (47) / R (90)',
    proceso:'Comercialización / Producción'
  }),

  producto({
    id:'CAT2-222',
    sector:'digital',
    icono:'📶',
    nombre:'Router Wi‑Fi Tipo',
    desc:'Router Ancho 10.6 cm Alto 2.4 cm Largo 11.5 cm Color Negro Inalámbrico Si Número de puertos 4 Velocidad de conexión 0 - 1200 Mbps Área de cobertura 40 m2 Alimentación Eléctrica',
    precio:101150,
    tipo:'Equipo',
    ciiu:'G (47) / R (90)',
    proceso:'Comercialización / Producción'
  }),

  producto({
    id:'CAT2-223',
    sector:'digital',
    icono:'📶',
    nombre:'Repetidor Wi‑Fi Tipo',
    desc:'Extensor Ancho 7.7 cm Alto 8 cm Largo 7.8 cm Color Blanco Inalámbrico Si Número de puertos 1 Velocidad de conexión 0 - 750 Mbps Área de cobertura 7 m2',
    precio:77350,
    tipo:'Insumo/Dotación',
    ciiu:'G (47) / R (90)',
    proceso:'Comercialización / Producción'
  }),

  producto({
    id:'CAT2-224',
    sector:'digital',
    icono:'🔋',
    nombre:'UPS / regulador de voltaje Ups Hikvision de 1000 Va 600w 6 Tomas Nema 5-15r (4r - 2sr)',
    desc:'UPS Hikvision 1000 VA/600 W con 6 tomas Nema. Protege equipos de apagones y fluctuaciones de voltaje. Autonomía de 10-15 minutos.',
    precio:333200,
    tipo:'Insumo/Dotación',
    ciiu:'G (47) / R (90)',
    proceso:'Comercialización / Producción'
  }),

  producto({
    id:'CAT2-225',
    sector:'digital',
    icono:'🖨️',
    nombre:'Impresora de etiquetas MÉTODO DE IMPRESIÓN',
    desc:'Térmico directo, Térmico por transferencia ANCHO DE IMPESIÓN 104MM VELOCIIDAD DE IMPESIÓN 127MM/S INTERFAZ Ethernet, USB COMPATIBILIDAD Android, Windows, Linux, Mac OSEMULACIÓN DPL, EPL, TSPL, ZPL',
    precio:416500,
    tipo:'Equipo',
    ciiu:'G (47) / R (90)',
    proceso:'Comercialización / Producción'
  }),

  producto({
    id:'CAT2-226',
    sector:'digital',
    icono:'🏷️',
    nombre:'Etiquetadora manual',
    desc:'Etiquetadora manual para impresión y aplicación de etiquetas de precio. Para tiendas, bodegas y supermercados. Compatible con rollos de etiquetas estándar.',
    precio:113050,
    tipo:'Insumo/Dotación',
    ciiu:'G (47) / R (90)',
    proceso:'Comercialización / Producción'
  }),

  producto({
    id:'CAT2-227',
    sector:'digital',
    icono:'⚖️',
    nombre:'Balanza digital para envíos (empaque) Capacidad: 300kg',
    desc:'División: 50g Unidades de peso: lb y Kg Batería interna recargable de 4V y autonomía de 8horas Dimensión plataforma: 40 x 50 cm  Display: LCD Display de tres pantallas con 7 dígitos cada uno Función Indicador: Liquidador Sistema de Tara para disminuir recipientes',
    precio:399840,
    tipo:'Insumo/Dotación',
    ciiu:'G (47) / R (90)',
    proceso:'Comercialización / Producción'
  }),

  producto({
    id:'CAT2-228',
    sector:'digital',
    icono:'📦',
    nombre:'Selladora térmica de bolsas Longitud de sellado: 30cm. ¡Sella bolsas de tamaño considerable para satisfacer todas tus ne',
    desc:'Ancho de sellado: 2mm, el tamaño perfecto para un sellado seguro y confiable. Tiempo de calentamiento ultrarrápido: entre 0.2 y 1.3 segundos, para que puedas trabajar eficientemente. Peso ligero de solo 2.9 kg, lo que facilita su transporte y manejo.',
    precio:101150,
    tipo:'Insumo/Dotación',
    ciiu:'G (47) / R (90)',
    proceso:'Comercialización / Producción'
  }),

  producto({
    id:'CAT2-229',
    sector:'digital',
    icono:'📦',
    nombre:'Selladora al vacío Tipo',
    desc:'Electrodomésticos de cocina modernos Ancho 43.18 cm Alto 25.4 cm Largo 52.5 cm Material PLASTICO Color Negro Potencia nominal 125 W Voltaje 117 V',
    precio:220150,
    tipo:'Insumo/Dotación',
    ciiu:'G (47) / R (90)',
    proceso:'Comercialización / Producción'
  }),

  producto({
    id:'CAT2-230',
    sector:'digital',
    icono:'📦',
    nombre:'Dispensador de cinta / cinta de embalaje',
    desc:'Dispensador de cinta de embalaje. Facilita el sellado rápido de cajas. Mango ergonómico. Aumenta la productividad en el proceso de empaque.',
    precio:29750,
    tipo:'Insumo/Dotación',
    ciiu:'G (47) / R (90)',
    proceso:'Comercialización / Producción'
  }),

  producto({
    id:'CAT2-231',
    sector:'digital',
    icono:'📦',
    nombre:'Dispensador de film stretch (empaque) Material y Diseño: Dispensador de stretch metálico con núcleo adaptable para bobin',
    desc:'Mango Ergonómico: Mango protegido con espuma para un agarre cómodo y seguro durante la aplicación del film stretch. Base en Aluminio: La base fabricada en aluminio proporciona estabilidad y durabilidad al dispensador. Tensión Ajustable: Cuenta con un sistema de tensión ajustable, permitiendo adaptar la fuerza según las necesidades de envoltura. Peso: 1,6 KG.',
    precio:53550,
    tipo:'Insumo/Dotación',
    ciiu:'G (47) / R (90)',
    proceso:'Comercialización / Producción'
  }),

  producto({
    id:'CAT2-232',
    sector:'digital',
    icono:'📦',
    nombre:'Cajas de cartón nuevas (empaque)',
    desc:'Cajas de cartón corrugado nuevas para empaque y envío. Resistentes a impactos. Para e-commerce, envíos de domicilio y almacenamiento.',
    precio:53550,
    tipo:'Insumo/Dotación',
    ciiu:'G (47) / R (90)',
    proceso:'Comercialización / Producción'
  }),

  producto({
    id:'CAT2-233',
    sector:'digital',
    icono:'📦',
    nombre:'Sobres de seguridad  13 x 19 en poliester',
    desc:'Sobres de seguridad en poliéster 13 x 19 cm con cierre adhesivo inviolable. Para envíos de documentos, joyas y productos de e-commerce.',
    precio:33320,
    tipo:'Insumo/Dotación',
    ciiu:'G (47) / R (90)',
    proceso:'Comercialización / Producción'
  }),

  producto({
    id:'CAT2-234',
    sector:'digital',
    icono:'📦',
    nombre:'Relleno protector (papel burbuja) - 50 cm x 5 mts',
    desc:'Relleno protector de papel burbuja 50 cm x 5 mts. Protege productos frágiles durante envíos. Para e-commerce y mensajería.',
    precio:21420,
    tipo:'Insumo/Dotación',
    ciiu:'G (47) / R (90)',
    proceso:'Comercialización / Producción'
  }),

  producto({
    id:'CAT2-235',
    sector:'digital',
    icono:'📦',
    nombre:'Canastillas plásticas para surtido Canastilla plastica fondo rombo pared rombo 60x40x25',
    desc:'Canastillas plásticas rígidas para almacenamiento y transporte. Apilables. Ideales para frutas, verduras, panadería, carnicería y logística.',
    precio:41650,
    tipo:'Insumo/Dotación',
    ciiu:'G (47) / R (90)',
    proceso:'Comercialización / Producción'
  }),

  producto({
    id:'CAT2-236',
    sector:'digital',
    icono:'🪑',
    nombre:'Mesa de empaque Mesa recomendada para logística. Con bandeja de teclado y repisa. Con entrepaño inferior para ubicar mat',
    desc:'Mesa de empaque para logística. Superficie amplia con repisa inferior. Para centros de distribución, bodegas y e-commerce.',
    precio:571200,
    tipo:'Mobiliario',
    ciiu:'G (47) / R (90)',
    proceso:'Comercialización / Producción'
  }),

  producto({
    id:'CAT2-237',
    sector:'digital',
    icono:'🗄️',
    nombre:'Estantería metálica industrial torre 240 x 120 cm',
    desc:'Estantería metálica industrial 240 x 120 cm. Estructura en acero anticorrosivo. Capacidad por nivel hasta 200 kg. Para bodegas, tiendas y talleres.',
    precio:380800,
    tipo:'Mobiliario',
    ciiu:'G (47) / R (90)',
    proceso:'Comercialización / Producción'
  }),

  producto({
    id:'CAT2-238',
    sector:'digital',
    icono:'📱',
    nombre:'Lector de código de barras escaners',
    desc:'Lector de código de barras USB o inalámbrico. Lee códigos 1D y 2D. Compatible con sistemas POS e inventario. Para tiendas y bodegas.',
    precio:101150,
    tipo:'Insumo/Dotación',
    ciiu:'G (47) / R (90)',
    proceso:'Comercialización / Producción'
  }),

  producto({
    id:'CAT2-239',
    sector:'digital',
    icono:'🏷️',
    nombre:'Pistola etiquetadora',
    desc:'Pistola etiquetadora de precios. Imprime y aplica etiquetas en una sola pasada. Para supermercados, tiendas y droguerías.',
    precio:53550,
    tipo:'Insumo/Dotación',
    ciiu:'G (47) / R (90)',
    proceso:'Comercialización / Producción'
  }),

  producto({
    id:'CAT2-240',
    sector:'digital',
    icono:'📸',
    nombre:'Kit de fotografía de producto (caja de luz)',
    desc:'Kit de fotografía de producto con caja de luz plegable. Fondos blanco y negro, luces LED. Para fotos profesionales de productos en e-commerce.',
    precio:220150,
    tipo:'Insumo/Dotación',
    ciiu:'G (47) / R (90)',
    proceso:'Comercialización / Producción'
  }),

  producto({
    id:'CAT2-241',
    sector:'digital',
    icono:'💡',
    nombre:'Iluminación LED para foto Temperatura de color: 3200-5600 K, CRI: 96',
    desc:'660 LED: 330 luz diurna y 330 tungsteno Tres adaptadores de 100-240 V CA, 50/60 Hz Tres tripodes de iluminación’ Tres estuches de transporte para paneles LED',
    precio:452200,
    tipo:'Equipo',
    ciiu:'G (47) / R (90)',
    proceso:'Comercialización / Producción'
  }),

  producto({
    id:'CAT2-242',
    sector:'digital',
    icono:'🧺',
    nombre:'Trípode para fotografía Capacidad de carga: 34 lb',
    desc:'Trípode extensible de 24 a 77 pulgadas Longitud plegada: 19″ Patas de aleación de aluminio de 4 secciones con sistema de bloqueo abatible Pata y columna convertibles en monopie Rosca macho de 1/4″-20 Giro, inclinación y rotación de 360° Inclinación de 90° Columna central de 2 secciones Peso: 3,5 libras',
    precio:220150,
    tipo:'Insumo/Dotación',
    ciiu:'G (47) / R (90)',
    proceso:'Comercialización / Producción'
  }),

  producto({
    id:'CAT2-243',
    sector:'digital',
    icono:'📸',
    nombre:'Fondo blanco para fotografía Papel grueso mate de 11 metros de largo',
    desc:'Libre de ácido, libre de lignina y con PH neutro Enrollado en tubo de cartón de diámetro ø5cm',
    precio:101150,
    tipo:'Insumo/Dotación',
    ciiu:'G (47) / R (90)',
    proceso:'Comercialización / Producción'
  }),

  producto({
    id:'CAT2-244',
    sector:'digital',
    icono:'📷',
    nombre:'Soporte para celular (foto) Trípode hecho en Aleación de Aluminio.',
    desc:'• Compatible con Cámaras Canon, Nikon, Sony, Panasonic. • Altura máxima de 157 centímetros • Nivelador de burbuja incorporado • Cabeza Giratoria de 360 grados horizontal y 90 grados vertical. • Ajuste de patas con liberación rápida • Pies de gomas antideslizantes. • Base smartphone compatible con todos los Smartphones de hasta 100mm de ancho.',
    precio:53550,
    tipo:'Insumo/Dotación',
    ciiu:'G (47) / R (90)',
    proceso:'Comercialización / Producción'
  }),

  producto({
    id:'CAT2-245',
    sector:'digital',
    icono:'💻',
    nombre:'Cámara deportiva para registro El nuevo procesador GP2 hace que esta sea la GoPro más potente hasta la fecha',
    desc:'Impresionantes vídeos a 5,3K60 y 4K120, y fotos de 23 MP Estabilización de vídeo avanzada HyperSmooth 4.0 Resistente y sumergible hasta 10 m Sube automáticamente tu contenido a la nube mientras la cargas TimeWarp 3.0, cámara lenta 8X y mucho más para clavar la toma Compatible con la aplicación Quik',
    precio:1428000,
    tipo:'Equipo',
    ciiu:'G (47) / R (90)',
    proceso:'Comercialización / Producción'
  }),

  producto({
    id:'CAT2-246',
    sector:'digital',
    icono:'📷',
    nombre:'Cámara mirrorless básica (si aplica) Cámara Mirrorless Con Lente 16-50mm f/3.5-5.6 + Memoria 64Gb de 100Mb/s + Bolso',
    desc:'Cámara mirrorless básica con lente 16-50mm, sensor de alta resolución, video 4K. Para fotografía de producto y producción de contenido digital.',
    precio:3332000,
    tipo:'Equipo',
    ciiu:'G (47) / R (90)',
    proceso:'Comercialización / Producción'
  }),

  producto({
    id:'CAT2-247',
    sector:'digital',
    icono:'🎙️',
    nombre:'Micrófono de condensador DE CONDENSADOR SM4-K-KIT DE SHURE',
    desc:'Micrófono de condensador de alta sensibilidad. Para grabación de voz, instrumentos y producción de podcasts y contenido digital.',
    precio:809200,
    tipo:'Insumo/Dotación',
    ciiu:'G (47) / R (90)',
    proceso:'Comercialización / Producción'
  }),

  producto({
    id:'CAT2-248',
    sector:'digital',
    icono:'🎙️',
    nombre:'Micrófono lavalier Micrófono omnidireccional',
    desc:'Conexión plug-and-play Compatible con cámaras Cable largo de 1.5 m  Construcción resistente Conector TRS de 3.5 mm',
    precio:220150,
    tipo:'Insumo/Dotación',
    ciiu:'G (47) / R (90)',
    proceso:'Comercialización / Producción'
  }),

  producto({
    id:'CAT2-249',
    sector:'digital',
    icono:'🎙️',
    nombre:'Interface de audio La interfaz Sonic Cube II es una interfaz de audio profesional de doble canal que cuenta con un pream',
    desc:'Interfaz de audio profesional para grabación y producción musical. Entradas XLR y jack. Compatible con computador vía USB. Fidelidad profesional.',
    precio:571200,
    tipo:'Equipo',
    ciiu:'G (47) / R (90)',
    proceso:'Comercialización / Producción'
  }),

  producto({
    id:'CAT2-250',
    sector:'digital',
    icono:'🎙️',
    nombre:'Grabadora de audio Gracias a un micrófono de alta sensibilidad, una reproducción sencilla y sus más de 159 horas de alma',
    desc:'Grabadora de audio digital portátil con micrófono de alta sensibilidad. Graba en MP3/WAV. Para podcasts, entrevistas y registro de campo.',
    precio:452200,
    tipo:'Equipo',
    ciiu:'G (47) / R (90)',
    proceso:'Comercialización / Producción'
  }),

  producto({
    id:'CAT2-251',
    sector:'digital',
    icono:'🎙️',
    nombre:'Audífonos de monitoreo',
    desc:'Audífonos profesionales de monitoreo para producción de audio y video. Respuesta de frecuencia plana. Compatibles con interfaces de audio profesionales.',
    precio:333200,
    tipo:'Insumo/Dotación',
    ciiu:'G (47) / R (90)',
    proceso:'Comercialización / Producción'
  }),

  producto({
    id:'CAT2-252',
    sector:'digital',
    icono:'💡',
    nombre:'Kit de iluminación LED continua Temperatura de color: 3200-5600 K, CRI: 96',
    desc:'660 LED: 330 luz diurna y 330 tungsteno Tres adaptadores de 100-240 V CA, 50/60 Hz Tres tripodes de iluminación’ Tres estuches de transporte para paneles LED',
    precio:1011500,
    tipo:'Equipo',
    ciiu:'G (47) / R (90)',
    proceso:'Comercialización / Producción'
  }),

  producto({
    id:'CAT2-253',
    sector:'digital',
    icono:'📸',
    nombre:'Fondo croma Fondo perfecto para televisión, producción de video y fotografía.',
    desc:'El telón cuenta con un doblez para colgar en la barra. Bordes reforzados para evitar daños de tela. Hecho de 100% puro algodón muslin.',
    precio:101150,
    tipo:'Insumo/Dotación',
    ciiu:'G (47) / R (90)',
    proceso:'Comercialización / Producción'
  }),

  producto({
    id:'CAT2-254',
    sector:'digital',
    icono:'📺',
    nombre:'Teleprompter básico Lectura clara, sin necesidad de memorizar, presentación fluida y natural.',
    desc:'• Fácil de instalar y guardar. • Sin fugas de luz en el lente de la cámara. • Mantiene el nivel de los ojos y la alineación del lente para diferentes dispositivos. • Clip de liberación rápida para smartphone. • Anillo adaptador de lente de cámara: 58/67/72/77/82 mm. • Admite disparos con lente gran angular sin viñeteado. • Cuenta con soportes para zapata fría y una entrada de rosca de 1/4" • Contr',
    precio:452200,
    tipo:'Equipo',
    ciiu:'G (47) / R (90)',
    proceso:'Comercialización / Producción'
  }),

  producto({
    id:'CAT2-255',
    sector:'digital',
    icono:'💾',
    nombre:'Disco duro externo ssd externo 2 tb',
    desc:'Disco duro externo SSD de 2 TB. Alta velocidad de transferencia. Compacto y resistente. Para respaldo de archivos de fotografía, video y proyectos digitales.',
    precio:333200,
    tipo:'Insumo/Dotación',
    ciiu:'G (47) / R (90)',
    proceso:'Comercialización / Producción'
  }),

  producto({
    id:'CAT2-256',
    sector:'digital',
    icono:'📦',
    nombre:'Memorias SD clase alta 128 gb, extreme pro',
    desc:'Memorias SD 128 GB clase alta. Alta velocidad de transferencia. Para cámaras, drones y grabadoras de video. Resistentes al agua y polvo.',
    precio:113050,
    tipo:'Insumo/Dotación',
    ciiu:'G (47) / R (90)',
    proceso:'Comercialización / Producción'
  }),

  producto({
    id:'CAT2-257',
    sector:'digital',
    icono:'📷',
    nombre:'Soporte brazo articulado (cámara/mic) Tiene una altura mínima de 10cm y máxima de 94cm.',
    desc:'Su ángulo de rotación es de 360°. Está fabricado en aluminio.',
    precio:220150,
    tipo:'Equipo',
    ciiu:'G (47) / R (90)',
    proceso:'Comercialización / Producción'
  }),

  producto({
    id:'CAT2-258',
    sector:'digital',
    icono:'🎬',
    nombre:'Estabilizador/gimbal Estabilizador de 3 ejes para vlogs o videos con celular',
    desc:'• Rotación de 360° y modo Vortex integrados • Luz de relleno integrada, seguimiento por IA • Compatible con celulares de 5cm a 8,8cm de ancho • Panel de control todo en uno • Algoritmo de estabilización avanzado • Puntos de montaje magnéticos • Conectividad Bluetooth 5.1',
    precio:452200,
    tipo:'Equipo',
    ciiu:'G (47) / R (90)',
    proceso:'Comercialización / Producción'
  }),

  producto({
    id:'CAT2-259',
    sector:'digital',
    icono:'💿',
    nombre:'Software básico (ofimática)',
    desc:'Licencia de software básico de ofimática. Procesador de texto, hoja de cálculo y presentaciones. Para administración del negocio.',
    precio:220150,
    tipo:'Insumo/Dotación',
    ciiu:'G (47) / R (90)',
    proceso:'Comercialización / Producción'
  }),

  producto({
    id:'CAT2-260',
    sector:'digital',
    icono:'🖨️',
    nombre:'Impresora térmica de recibos Tipo',
    desc:'Impresoras Referencia del Producto en el Certificado/Empaque 7709281325989 Ancho 11 cm Alto 10 cm Largo 15 cm Tipo de impresora Impresora Tipo de impresión Láser monocromática Color Negra Cuenta con Wifi No Calidad de impresión Alta resolución Compatibilidad Windows, Linux, Android y macOS',
    precio:214200,
    tipo:'Equipo',
    ciiu:'G (47) / R (90)',
    proceso:'Comercialización / Producción'
  }),

  producto({
    id:'CAT2-261',
    sector:'digital',
    icono:'💰',
    nombre:'Caja registradora / POS odo en Uno Caja Registradora Profesional para Pequeñas Empresas, Paquete POS Incluye: Monitor Tá',
    desc:'Sistema POS todo en uno. Incluye monitor táctil, cajón de dinero, escáner e impresora térmica. Administra ventas, inventario y cierre de caja.',
    precio:5256468,
    tipo:'Insumo/Dotación',
    ciiu:'G (47) / R (90)',
    proceso:'Comercialización / Producción'
  }),

  producto({
    id:'CAT2-262',
    sector:'digital',
    icono:'📱',
    nombre:'Lector QR/Pagos Incluye soporte: Sí',
    desc:'Voltaje: 110V Lector fijo. Su tipo de escaneo es omnidireccional. Tiene sensor de tecnología láser. Registra y decodifica un amplio volumen de datos.',
    precio:220150,
    tipo:'Insumo/Dotación',
    ciiu:'G (47) / R (90)',
    proceso:'Comercialización / Producción'
  }),

  producto({
    id:'CAT2-263',
    sector:'digital',
    icono:'🗄️',
    nombre:'Mostrador portátil de exhibición en acrilico',
    desc:'Mostrador portátil de exhibición en acrílico transparente. Plegable y liviano. Para ferias, eventos y exposición de accesorios.',
    precio:333200,
    tipo:'Mobiliario',
    ciiu:'G (47) / R (90)',
    proceso:'Comercialización / Producción'
  }),

  producto({
    id:'CAT2-264',
    sector:'digital',
    icono:'🗄️',
    nombre:'Vitrina pequeña de exhibición - vidrio templado puerta corrediza',
    desc:'Vitrina pequeña de exhibición con vidrio templado y puerta corrediza. Para tiendas de tecnología, joyería y farmacia.',
    precio:809200,
    tipo:'Mobiliario',
    ciiu:'G (47) / R (90)',
    proceso:'Comercialización / Producción'
  }),

  producto({
    id:'CAT2-265',
    sector:'digital',
    icono:'🗄️',
    nombre:'Maniquí de exhibición (si vende textiles) cuerpo entero',
    desc:'Maniquí de exhibición de cuerpo entero para venta de ropa. Postura natural. Para vitrinas y tiendas de ropa.',
    precio:339150,
    tipo:'Mobiliario',
    ciiu:'G (47) / R (90)',
    proceso:'Comercialización / Producción'
  }),

  producto({
    id:'CAT2-266',
    sector:'digital',
    icono:'🗄️',
    nombre:'Perchero metálico',
    desc:'Perchero metálico resistente para exhibición y organización de ropa. Para tiendas, boutiques y talleres de confección.',
    precio:101150,
    tipo:'Mobiliario',
    ciiu:'G (47) / R (90)',
    proceso:'Comercialización / Producción'
  }),

  producto({
    id:'CAT2-267',
    sector:'digital',
    icono:'🗄️',
    nombre:'Góndola modular Dimensiones:',
    desc:'Altura: 220 cm Ancho: 128 cm Profundidad: 55 cm Peso : 30 kg Contenido del paquete:  1 x Góndola modular',
    precio:535500,
    tipo:'Mobiliario',
    ciiu:'G (47) / R (90)',
    proceso:'Comercialización / Producción'
  }),

  producto({
    id:'CAT2-268',
    sector:'digital',
    icono:'🧯',
    nombre:'Extintor multipropósito (bodega) abc- 20 libras rdl',
    desc:'Extintor multipropósito ABC 20 libras. Apaga fuegos tipo A, B y C. Certificado con manómetro. Obligatorio en talleres, cocinas y bodegas.',
    precio:113050,
    tipo:'Insumo/Dotación',
    ciiu:'G (47) / R (90)',
    proceso:'Comercialización / Producción'
  }),

  producto({
    id:'CAT2-269',
    sector:'digital',
    icono:'🩹',
    nombre:'Botiquín industrial (taller) Estuche plástico mini cuadrado, medidas 21,5 cm x 11.5 cm x 6 cm compuesto por 13 elementos',
    desc:'Botiquín de primeros auxilios industrial. Incluye vendas, antisépticos, curitas y guantes. Cumple normas de seguridad industrial. Estuche plástico compacto.',
    precio:77350,
    tipo:'Insumo/Dotación',
    ciiu:'G (47) / R (90)',
    proceso:'Comercialización / Producción'
  })

];

// Alimentos y Oficios
const PRODUCTOS_ALIMENTOS=[
  producto({
    id:'P248',
    sector:'alimentos',
    icono:'🔥',
    nombre:'Estufa semindustrial Estufa a gas de 4 quemadores, fabricada en acero inoxidable 201, válvula de gas Alpha Brass, regula',
    desc:'Estufa a gas de 4 quemadores en acero inoxidable. Alta resistencia al calor y uso continuo. Para restaurantes, cafeterías y negocios de comida.',
    precio:4770736,
    tipo:'Insumo/Dotación',
    ciiu:'I (56) / S (95–96)',
    proceso:'Operación / Transformación'
  }),

  producto({
    id:'P249',
    sector:'alimentos',
    icono:'🍳',
    nombre:'Freidora industrial Equipo fabricado totalmente en acero.',
    desc:'– Pozuelo en acero 430 – Tres quemadores en hierro fundido indeformables de alto rendimiento – Sistema de seguridad compuesto por termostato, piloto, termopila y válvula Unitrol. – Rodachinas de alto tráfico 3″ en poliuretano – Incluye GRATIS dos canastillas de trabajo pesado – Incluye GRATIS rejilla filtro de impurezas – Posee zona fria para mayor vida útil del aceite. – Obtendrás ahorro de aceit',
    precio:6158250,
    tipo:'Insumo/Dotación',
    ciiu:'I (56) / S (95–96)',
    proceso:'Operación / Transformación'
  }),

  producto({
    id:'P250',
    sector:'alimentos',
    icono:'🍳',
    nombre:'Plancha para asados Plancha Para Asar 47 Cm X 25 Cm',
    desc:'Plancha para asados 47 x 25 cm en acero inoxidable. Distribución uniforme del calor. Para restaurantes y negocios de comida rápida.',
    precio:410532,
    tipo:'Insumo/Dotación',
    ciiu:'I (56) / S (95–96)',
    proceso:'Operación / Transformación'
  }),

  producto({
    id:'P251',
    sector:'alimentos',
    icono:'🍳',
    nombre:'Horno eléctrico (operación) Horno Eléctrico Gratinador 25 Litros Negro',
    desc:'(0)',
    precio:446072,
    tipo:'Equipo',
    ciiu:'I (56) / S (95–96)',
    proceso:'Operación / Transformación'
  }),

  producto({
    id:'P252',
    sector:'alimentos',
    icono:'❄️',
    nombre:'Refrigerador productivo Refrigerador vertical de dos puertas. Marco construcción exterior e interior en acero inoxidable',
    desc:'Refrigerador vertical de dos puertas para uso productivo. Gran capacidad, temperatura regulable. Para restaurantes, panaderías y tiendas.',
    precio:15670917,
    tipo:'Equipo',
    ciiu:'I (56) / S (95–96)',
    proceso:'Operación / Transformación'
  }),

  producto({
    id:'P253',
    sector:'alimentos',
    icono:'❄️',
    nombre:'Congelador tipo cofre Tipo Congeladores Referencia del Producto en el Certificado/Empaque CI-299TV Ancho 83.7 cm Alto 11',
    desc:'Blanco Número de gavetas 4 Cantidad de puertas 2 Consumo energético 99 kWh/mes Posición del congelador Freezer horizontal Año de lanzamiento 2025 Voltaje 115 V Garantía detalle 1 año general y 3 años en el compresor',
    precio:3792946,
    tipo:'Equipo',
    ciiu:'I (56) / S (95–96)',
    proceso:'Operación / Transformación'
  }),

  producto({
    id:'P254',
    sector:'alimentos',
    icono:'🪑',
    nombre:'Mesa inoxidable de preparación Mesas Acero 90 x 150 x 50 Con Entrepaño',
    desc:'Mesa de preparación en acero inoxidable (90 x 150 x 50 cm) con entrepaño. Resistente a la corrosión. Cumple normas sanitarias.',
    precio:3212822,
    tipo:'Mobiliario',
    ciiu:'I (56) / S (95–96)',
    proceso:'Operación / Transformación'
  }),

  producto({
    id:'P255',
    sector:'alimentos',
    icono:'🚰',
    nombre:'Lavamanos en acero inoxidable (operación) Grifería institucional kit válvula de pedal con lavamanos de 28x30',
    desc:'Lavamanos en acero inoxidable con grifería institucional de válvula de pedal o palanca. Cumple normas sanitarias. Para cocinas industriales y áreas de manipulación de alimentos.',
    precio:588872,
    tipo:'Insumo/Dotación',
    ciiu:'I (56) / S (95–96)',
    proceso:'Operación / Transformación'
  }),

  producto({
    id:'P256',
    sector:'alimentos',
    icono:'🌬️',
    nombre:'Campana extractora Campana CRIP08-60N Inoxidable 3 Velocidades Negra',
    desc:'Opción de ser extractora (accesorio no incluido). • Caudal de aspiración de 210 m³/h. • Motor de 3 velocidades de operación, con controles frontales independientes. • 1 bombillo de 25W. Interruptor independiente para la luz. • Rejilla atrapagrasa removible y lavable. • Filtro de carbón activado para purificar los olores de la cocción.',
    precio:535322,
    tipo:'Equipo',
    ciiu:'I (56) / S (95–96)',
    proceso:'Operación / Transformación'
  }),

  producto({
    id:'P257',
    sector:'alimentos',
    icono:'🌬️',
    nombre:'Extractor de aire/ventilación industrialExtractor De Aire Para Baño y Cocina Industrial Para Pared 41x41x14.5cm 110 Volt',
    desc:'Extractor de aire para ventilación industrial. Bajo consumo y silencioso. Mejora la calidad del aire. Fácil instalación en paredes y techos.',
    precio:553172,
    tipo:'Equipo',
    ciiu:'I (56) / S (95–96)',
    proceso:'Operación / Transformación'
  }),

  producto({
    id:'P258',
    sector:'alimentos',
    icono:'🍳',
    nombre:'l Licuadora Industrial acero inoxidable 25 litros',
    desc:'Licuadora industrial en acero inoxidable de 25 litros. Motor potente para grandes volúmenes. Para juguerías y restaurantes.',
    precio:6009202,
    tipo:'Insumo/Dotación',
    ciiu:'I (56) / S (95–96)',
    proceso:'Operación / Transformación'
  }),

  producto({
    id:'P259',
    sector:'alimentos',
    icono:'🍳',
    nombre:'Batidora/amasadora industrial 10 litros Capacidad max en harina3 libras',
    desc:'Velocidades2 Voltaje110V 60Hz Potencia370W AccesoriosGancho, Paleta y globo Dimensiones76X43X51cm (alto, ancho y fondo)',
    precio:4034100,
    tipo:'Insumo/Dotación',
    ciiu:'I (56) / S (95–96)',
    proceso:'Operación / Transformación'
  }),

  producto({
    id:'P260',
    sector:'alimentos',
    icono:'🍽️',
    nombre:'Dispensador térmico/termo 3 litros',
    desc:'Dispensador térmico de 3 litros para bebidas calientes. Mantiene temperatura hasta 12 horas. Para cafeterías y restaurantes.',
    precio:185640,
    tipo:'Insumo/Dotación',
    ciiu:'I (56) / S (95–96)',
    proceso:'Operación / Transformación'
  }),

  producto({
    id:'P261',
    sector:'alimentos',
    icono:'🍽️',
    nombre:'Vajilla y utensilios comerciales',
    desc:'Set de vajilla y utensilios para cocina comercial. Material resistente al uso intensivo. Para restaurantes, cafeterías y negocios de comida.',
    precio:624750,
    tipo:'Insumo/Dotación',
    ciiu:'I (56) / S (95–96)',
    proceso:'Operación / Transformación'
  }),

  producto({
    id:'P262',
    sector:'alimentos',
    icono:'📦',
    nombre:'Contenedores grado alimentario Contenedor Portátil Scepter de Grado Alimenticio ? 19 L con Boquilla Reversible',
    desc:'Contenedores portátiles de grado alimentario. Material libre de BPA. Herméticos y apilables. Para almacenamiento de líquidos y alimentos en restaurantes.',
    precio:160472,
    tipo:'Insumo/Dotación',
    ciiu:'I (56) / S (95–96)',
    proceso:'Operación / Transformación'
  }),

  producto({
    id:'P263',
    sector:'alimentos',
    icono:'⚖️',
    nombre:'Báscula de cocina Bascula De Cocina Digital 5 kg',
    desc:'Báscula digital de cocina, capacidad 5 kg. Pantalla LCD. Función tara. Ideal para panaderías y restaurantes. Precisión de 1 gramo.',
    precio:137266,
    tipo:'Insumo/Dotación',
    ciiu:'I (56) / S (95–96)',
    proceso:'Operación / Transformación'
  }),

  producto({
    id:'P264',
    sector:'alimentos',
    icono:'📦',
    nombre:'Selladora térmica de bolsas Longitud de sellado: 30cm. ¡Sella bolsas de tamaño considerable para satisfacer todas tus ne',
    desc:'Ancho de sellado: 2mm, el tamaño perfecto para un sellado seguro y confiable. Tiempo de calentamiento ultrarrápido: entre 0.2 y 1.3 segundos, para que puedas trabajar eficientemente. Peso ligero de solo 2.9 kg, lo que facilita su transporte y manejo.',
    precio:355215,
    tipo:'Insumo/Dotación',
    ciiu:'I (56) / S (95–96)',
    proceso:'Operación / Transformación'
  }),

  producto({
    id:'P265',
    sector:'alimentos',
    icono:'📦',
    nombre:'Selladora al vacío Tipo',
    desc:'Electrodomésticos de cocina modernos Ancho 43.18 cm Alto 25.4 cm Largo 52.5 cm Material PLASTICO Color Negro Potencia nominal 125 W Voltaje 117 V',
    precio:892322,
    tipo:'Insumo/Dotación',
    ciiu:'I (56) / S (95–96)',
    proceso:'Operación / Transformación'
  }),

  producto({
    id:'P266',
    sector:'alimentos',
    icono:'🗄️',
    nombre:'Vitrina mostrador Vitrina Mostrador 112 x 120 x 45 cms',
    desc:'Vitrina mostrador con vidrio templado y puerta corrediza. Exhibe productos de forma elegante. Para joyerías, tiendas de accesorios y puntos de venta.',
    precio:2274417,
    tipo:'Mobiliario',
    ciiu:'I (56) / S (95–96)',
    proceso:'Operación / Transformación'
  }),

  producto({
    id:'P267',
    sector:'alimentos',
    icono:'🪑',
    nombre:'Carro bandejero CARRO RACK PARA BANDEJA 521*661*1780',
    desc:'Carro rack metálico para bandejas de panadería. Ruedas para desplazamiento en cocina. Permite transportar y almacenar múltiples bandejas.',
    precio:4994516,
    tipo:'Mobiliario',
    ciiu:'I (56) / S (95–96)',
    proceso:'Operación / Transformación'
  }),

  producto({
    id:'P268',
    sector:'alimentos',
    icono:'🧯',
    nombre:'Extintor multipropósito abc- 20 libras rdl',
    desc:'Extintor multipropósito ABC 20 libras. Apaga fuegos tipo A, B y C. Certificado con manómetro. Obligatorio en talleres, cocinas y bodegas.',
    precio:196172,
    tipo:'Insumo/Dotación',
    ciiu:'I (56) / S (95–96)',
    proceso:'Operación / Transformación'
  }),

  producto({
    id:'P269',
    sector:'alimentos',
    icono:'⚠️',
    nombre:'Señalización de seguridad',
    desc:'Kit de señalización de seguridad industrial. Salidas de emergencia, rutas de evacuación y áreas de riesgo. Material resistente en PVC.',
    precio:133875,
    tipo:'Insumo/Dotación',
    ciiu:'I (56) / S (95–96)',
    proceso:'Operación / Transformación'
  }),

  producto({
    id:'P270',
    sector:'alimentos',
    icono:'🩹',
    nombre:'Botiquín industrial (taller) Estuche plástico mini cuadrado, medidas 21,5 cm x 11.5 cm x 6 cm compuesto por 13 elementos',
    desc:'Botiquín de primeros auxilios industrial. Incluye vendas, antisépticos, curitas y guantes. Cumple normas de seguridad industrial. Estuche plástico compacto.',
    precio:83716,
    tipo:'Insumo/Dotación',
    ciiu:'I (56) / S (95–96)',
    proceso:'Operación / Transformación'
  }),

  producto({
    id:'P271',
    sector:'alimentos',
    icono:'👔',
    nombre:'Uniformes de trabajo (dotación) antifluido.',
    desc:'Uniformes de trabajo antifluido para dotación laboral. Material resistente y fácil de limpiar. Protege al trabajador. Para cocinas, talleres y servicios.',
    precio:276675,
    tipo:'Insumo/Dotación',
    ciiu:'I (56) / S (95–96)',
    proceso:'Operación / Transformación'
  }),

  producto({
    id:'P272',
    sector:'alimentos',
    icono:'🦺',
    nombre:'Guantes y mallas para cabello (dotación)',
    desc:'Guantes de nitrilo y mallas para cabello en dotación. Protección e higiene. Para peluquerías, cocinas y laboratorios.',
    precio:32130,
    tipo:'Insumo/Dotación',
    ciiu:'I (56) / S (95–96)',
    proceso:'Operación / Transformación'
  }),

  producto({
    id:'P273',
    sector:'alimentos',
    icono:'🧵',
    nombre:'Máquina de coser para cuero (calzado) Tipo de puntada lanzadera',
    desc:'Tipo de material piel, mediana, pesada Longitud de la puntada, mm cuatro Tipo de promoción prensatelas rodillo de alimentación inferior y superior Plataforma de columna Espesor de la aguja No. 90-140 Agujas aplicables DPx5 Número de agujas uno Número de hilos 2 Tipo de grasa goteo',
    precio:3318440,
    tipo:'Equipo',
    ciiu:'I (56) / S (95–96)',
    proceso:'Operación / Transformación'
  }),

  producto({
    id:'P274',
    sector:'alimentos',
    icono:'👞',
    nombre:'Prensa para calzado Modelo',
    desc:'SR-YHJ Voltaje 220v 50hz Presión de laminación 0,3-0,5Mpa Tiempo de laminación 0-30s Capacidad 150pair/h Tamaño 450*820*1130mm Peso 140kg',
    precio:6597896,
    tipo:'Equipo',
    ciiu:'I (56) / S (95–96)',
    proceso:'Operación / Transformación'
  }),

  producto({
    id:'P275',
    sector:'alimentos',
    icono:'👞',
    nombre:'Hormas para calzado (juego)',
    desc:'Juego completo de hormas para calzado en diferentes tallas. Para fabricación y reparación de zapatos. Dan forma y estructura al calzado.',
    precio:177072,
    tipo:'Insumo/Dotación',
    ciiu:'I (56) / S (95–96)',
    proceso:'Operación / Transformación'
  }),

  producto({
    id:'P276',
    sector:'alimentos',
    icono:'👞',
    nombre:'Lijadora/pulidora para calzado Máquina pulidora de calzado para un acabado profesional. Potente motor de 1KW, 380V/50Hz,',
    desc:'Máquina pulidora y lijadora para calzado. Acabado fino en suelas y cueros. Motor potente, bajo ruido. Para talleres de calzado.',
    precio:12163936,
    tipo:'Insumo/Dotación',
    ciiu:'I (56) / S (95–96)',
    proceso:'Operación / Transformación'
  }),

  producto({
    id:'P277',
    sector:'alimentos',
    icono:'👞',
    nombre:'Pegadora/dispensador de adhesivo',
    desc:'Pegadora y dispensador de adhesivo para calzado. Aplica pegante de forma uniforme. Para talleres de zapatería y marroquinería.',
    precio:390092,
    tipo:'Insumo/Dotación',
    ciiu:'I (56) / S (95–96)',
    proceso:'Operación / Transformación'
  }),

  producto({
    id:'P278',
    sector:'alimentos',
    icono:'👞',
    nombre:'Kit de suelas nuevas',
    desc:'Kit de suelas para calzado, 5 unidades. Para reparación de zapatos formales, deportivos y de seguridad industrial.',
    precio:80325,
    tipo:'Insumo/Dotación',
    ciiu:'I (56) / S (95–96)',
    proceso:'Operación / Transformación'
  }),

  producto({
    id:'P279',
    sector:'alimentos',
    icono:'👞',
    nombre:'Kit de cordones y ojales',
    desc:'Kit de cordones y ojales para calzado, 5 unidades. Para reparación de calzado deportivo, casual y de trabajo.',
    precio:116025,
    tipo:'Insumo/Dotación',
    ciiu:'I (56) / S (95–96)',
    proceso:'Operación / Transformación'
  }),

  producto({
    id:'P280',
    sector:'alimentos',
    icono:'👞',
    nombre:'Herramientas de reparación (martillo/lezna)',
    desc:'Set de herramientas para calzado: martillo de zapatero y lezna. Acero de alta resistencia. Para talabartería y arreglo de suelas.',
    precio:571200,
    tipo:'Insumo/Dotación',
    ciiu:'I (56) / S (95–96)',
    proceso:'Operación / Transformación'
  }),

  producto({
    id:'P281',
    sector:'alimentos',
    icono:'💇',
    nombre:'Silla hidráulica profesional (peluquería) Silla de Barbería y Peluquería Reclinable Hidráulica y Giratoria Stetik Negro',
    desc:'Silla hidráulica profesional para peluquería y barbería. Giratoria y reclinable. Tapizado en cuero sintético. Comodidad al cliente y facilidad al estilista.',
    precio:3694772,
    tipo:'Mobiliario',
    ciiu:'I (56) / S (95–96)',
    proceso:'Operación / Transformación'
  }),

  producto({
    id:'P282',
    sector:'alimentos',
    icono:'🚿',
    nombre:'Lavacabezas portátil Cuenta con dos contenedores de 2 galones cada uno (≈7.5 L):',
    desc:'🔵 1 para agua limpia  ⚫ 1 para agua residual  Esto garantiza un lavado continuo, higiénico y sin necesidad de conexiones fijas o plomería.',
    precio:1338750,
    tipo:'Insumo/Dotación',
    ciiu:'I (56) / S (95–96)',
    proceso:'Operación / Transformación'
  }),

  producto({
    id:'P283',
    sector:'alimentos',
    icono:'💨',
    nombre:'Secador tipo casco Su potencia es de 1000W.',
    desc:'Contiene pedestal y casco. Voluminizá tu cabello.',
    precio:3386627,
    tipo:'Insumo/Dotación',
    ciiu:'I (56) / S (95–96)',
    proceso:'Operación / Transformación'
  }),

  producto({
    id:'P284',
    sector:'alimentos',
    icono:'💨',
    nombre:'Secador de mano profesional Secador Super Mega Turbo Profesional 2400W',
    desc:'Secador de mano profesional 2400W con tecnología turbo. Múltiples velocidades y temperaturas. Secado rápido y uniforme. Para peluquerías y salones de estética.',
    precio:339148,
    tipo:'Insumo/Dotación',
    ciiu:'I (56) / S (95–96)',
    proceso:'Operación / Transformación'
  }),

  producto({
    id:'P285',
    sector:'alimentos',
    icono:'✂️',
    nombre:'Máquina corta cabello profesional Tipo : Máquinas cortapelo',
    desc:'•Modelo : GR4  •Inalámbrico : Si  •Potencia nominal : 7 W  •Garantía : 3 meses',
    precio:217592,
    tipo:'Equipo',
    ciiu:'I (56) / S (95–96)',
    proceso:'Operación / Transformación'
  }),

  producto({
    id:'P286',
    sector:'alimentos',
    icono:'✂️',
    nombre:'Tijeras profesionales',
    desc:'Tijeras profesionales de peluquería en acero inoxidable. Filo preciso para corte de cabello. Ergonómicas. Presentación de 3 unidades para dotación.',
    precio:75148,
    tipo:'Insumo/Dotación',
    ciiu:'I (56) / S (95–96)',
    proceso:'Operación / Transformación'
  }),

  producto({
    id:'P287',
    sector:'alimentos',
    icono:'💰',
    nombre:'Esterilizador UV para herramientas La caja de desinfección UV + Ozono es un dispositivo compacto diseñado para eliminar',
    desc:'Esterilizador UV + Ozono para herramientas de peluquería. Elimina bacterias y virus. Compacto y silencioso. Para cumplir normas sanitarias en establecimientos de belleza.',
    precio:2623950,
    tipo:'Insumo/Dotación',
    ciiu:'I (56) / S (95–96)',
    proceso:'Operación / Transformación'
  }),

  producto({
    id:'P288',
    sector:'alimentos',
    icono:'💇',
    nombre:'Carro auxiliar de peluquería Alto',
    desc:'82 cm Ancho 32 cm Cantidad de cajones 4 Color Negro Fondo 35 cm Material Plástico',
    precio:712036,
    tipo:'Mobiliario',
    ciiu:'I (56) / S (95–96)',
    proceso:'Operación / Transformación'
  }),

  producto({
    id:'P289',
    sector:'alimentos',
    icono:'🪞',
    nombre:'Espejo profesional con iluminación Espejo de tocador Hollywood M MIVONDA con 18 bombillas, espejo de maquillaje grande i',
    desc:'Espejo de tocador con 18 bombillas LED. Tres modos de iluminación. Puerto USB de carga. Para salones de belleza y maquillaje profesional.',
    precio:1227709,
    tipo:'Equipo',
    ciiu:'I (56) / S (95–96)',
    proceso:'Operación / Transformación'
  }),

  producto({
    id:'P290',
    sector:'alimentos',
    icono:'💇',
    nombre:'Silla hidráulica profesional (peluquería) Silla de Barbería y Peluquería Reclinable Hidráulica y Giratoria Stetik Negro',
    desc:'Silla hidráulica profesional para peluquería y barbería. Giratoria y reclinable. Tapizado en cuero sintético. Comodidad al cliente y facilidad al estilista.',
    precio:3694772,
    tipo:'Insumo/Dotación',
    ciiu:'I (56) / S (95–96)',
    proceso:'Operación / Transformación'
  }),

  producto({
    id:'P291',
    sector:'alimentos',
    icono:'🧹',
    nombre:'Aspiradora industrial (limpieza operativa) Aspiradora de Sólidos y Líquidos 60 L con Cepillo Trabajo Pesado',
    desc:'Aspiradora industrial para sólidos y líquidos, capacidad 60 litros. Motor potente para uso continuo. Ideal para talleres, salones de belleza y locales comerciales.',
    precio:2464906,
    tipo:'Insumo/Dotación',
    ciiu:'I (56) / S (95–96)',
    proceso:'Operación / Transformación'
  }),

  producto({
    id:'P292',
    sector:'alimentos',
    icono:'🗄️',
    nombre:'Estantería metálica industrial torre 240 x 120 cm',
    desc:'Estantería metálica industrial 240 x 120 cm. Estructura en acero anticorrosivo. Capacidad por nivel hasta 200 kg. Para bodegas, tiendas y talleres.',
    precio:1841852,
    tipo:'Mobiliario',
    ciiu:'I (56) / S (95–96)',
    proceso:'Operación / Transformación'
  }),

  producto({
    id:'P293',
    sector:'alimentos',
    icono:'💰',
    nombre:'Caja registradora / POS odo en Uno Caja Registradora Profesional para Pequeñas Empresas, Paquete POS Incluye: Monitor Tá',
    desc:'Sistema POS todo en uno. Incluye monitor táctil, cajón de dinero, escáner e impresora térmica. Administra ventas, inventario y cierre de caja.',
    precio:9686324,
    tipo:'Insumo/Dotación',
    ciiu:'I (56) / S (95–96)',
    proceso:'Operación / Transformación'
  }),

  producto({
    id:'P294',
    sector:'alimentos',
    icono:'📱',
    nombre:'Lector QR/Pagos Incluye soporte: Sí',
    desc:'Voltaje: 110V Lector fijo. Su tipo de escaneo es omnidireccional. Tiene sensor de tecnología láser. Registra y decodifica un amplio volumen de datos.',
    precio:373600,
    tipo:'Insumo/Dotación',
    ciiu:'I (56) / S (95–96)',
    proceso:'Operación / Transformación'
  }),

  producto({
    id:'P295',
    sector:'alimentos',
    icono:'🖨️',
    nombre:'Impresora térmica de recibos Tipo',
    desc:'Impresoras Referencia del Producto en el Certificado/Empaque 7709281325989 Ancho 11 cm Alto 10 cm Largo 15 cm Tipo de impresora Impresora Tipo de impresión Láser monocromática Color Negra Cuenta con Wifi No Calidad de impresión Alta resolución Compatibilidad Windows, Linux, Android y macOS',
    precio:196172,
    tipo:'Equipo',
    ciiu:'I (56) / S (95–96)',
    proceso:'Operación / Transformación'
  }),

  producto({
    id:'P296',
    sector:'alimentos',
    icono:'💡',
    nombre:'Iluminación LED de local Luminaria lineal LED 36W en elegante chasis negro, ideal para iluminación profesional y decorat',
    desc:'Luminaria lineal LED 36W. Tecnología 3CCT para luz cálida, neutra o blanca. Para locales comerciales, oficinas y salas de exhibición.',
    precio:464816,
    tipo:'Equipo',
    ciiu:'I (56) / S (95–96)',
    proceso:'Operación / Transformación'
  }),

  producto({
    id:'P297',
    sector:'alimentos',
    icono:'🔒',
    nombre:'Cerraduras/elementos de seguridad (operación) Tipo : Cerraduras',
    desc:'•Alto : 31 cm •Largo : 13.5 cm •Uso Cerradura : Acceso',
    precio:89072,
    tipo:'Insumo/Dotación',
    ciiu:'I (56) / S (95–96)',
    proceso:'Operación / Transformación'
  }),

  producto({
    id:'P567',
    sector:'alimentos',
    icono:'🔥',
    nombre:'Estufa semindustrial Estufa a gas de 4 quemadores, fabricada en acero inoxidable 201, válvula de gas Alpha Brass, regula',
    desc:'Estufa a gas de 4 quemadores en acero inoxidable. Alta resistencia al calor y uso continuo. Para restaurantes, cafeterías y negocios de comida.',
    precio:809200,
    tipo:'Insumo/Dotación',
    ciiu:'I (56) / S (95–96)',
    proceso:'Operación / Transformación'
  }),

  producto({
    id:'P568',
    sector:'alimentos',
    icono:'🍳',
    nombre:'Freidora industrial Equipo fabricado totalmente en acero.',
    desc:'– Pozuelo en acero 430 – Tres quemadores en hierro fundido indeformables de alto rendimiento – Sistema de seguridad compuesto por termostato, piloto, termopila y válvula Unitrol. – Rodachinas de alto tráfico 3″ en poliuretano – Incluye GRATIS dos canastillas de trabajo pesado – Incluye GRATIS rejilla filtro de impurezas – Posee zona fria para mayor vida útil del aceite. – Obtendrás ahorro de aceit',
    precio:809200,
    tipo:'Insumo/Dotación',
    ciiu:'I (56) / S (95–96)',
    proceso:'Operación / Transformación'
  }),

  producto({
    id:'P569',
    sector:'alimentos',
    icono:'🍳',
    nombre:'Plancha para asados Plancha Para Asar 47 Cm X 25 Cm',
    desc:'Plancha para asados 47 x 25 cm en acero inoxidable. Distribución uniforme del calor. Para restaurantes y negocios de comida rápida.',
    precio:148750,
    tipo:'Insumo/Dotación',
    ciiu:'I (56) / S (95–96)',
    proceso:'Operación / Transformación'
  }),

  producto({
    id:'P570',
    sector:'alimentos',
    icono:'🍳',
    nombre:'Horno eléctrico (operación) Horno Eléctrico Gratinador 25 Litros Negro',
    desc:'(0)',
    precio:339150,
    tipo:'Equipo',
    ciiu:'I (56) / S (95–96)',
    proceso:'Operación / Transformación'
  }),

  producto({
    id:'P571',
    sector:'alimentos',
    icono:'❄️',
    nombre:'Refrigerador productivo Refrigerador vertical de dos puertas. Marco construcción exterior e interior en acero inoxidable',
    desc:'Refrigerador vertical de dos puertas para uso productivo. Gran capacidad, temperatura regulable. Para restaurantes, panaderías y tiendas.',
    precio:2618000,
    tipo:'Equipo',
    ciiu:'I (56) / S (95–96)',
    proceso:'Operación / Transformación'
  }),

  producto({
    id:'P572',
    sector:'alimentos',
    icono:'❄️',
    nombre:'Congelador tipo cofre Tipo Congeladores Referencia del Producto en el Certificado/Empaque CI-299TV Ancho 83.7 cm Alto 11',
    desc:'Blanco Número de gavetas 4 Cantidad de puertas 2 Consumo energético 99 kWh/mes Posición del congelador Freezer horizontal Año de lanzamiento 2025 Voltaje 115 V Garantía detalle 1 año general y 3 años en el compresor',
    precio:1428000,
    tipo:'Equipo',
    ciiu:'I (56) / S (95–96)',
    proceso:'Operación / Transformación'
  }),

  producto({
    id:'P573',
    sector:'alimentos',
    icono:'🪑',
    nombre:'Mesa inoxidable de preparación Mesas Acero 90 x 150 x 50 Con Entrepaño',
    desc:'Mesa de preparación en acero inoxidable (90 x 150 x 50 cm) con entrepaño. Resistente a la corrosión. Cumple normas sanitarias.',
    precio:1011500,
    tipo:'Mobiliario',
    ciiu:'I (56) / S (95–96)',
    proceso:'Operación / Transformación'
  }),

  producto({
    id:'P574',
    sector:'alimentos',
    icono:'🚰',
    nombre:'Lavamanos en acero inoxidable (operación) Grifería institucional kit válvula de pedal con lavamanos de 28x30',
    desc:'Lavamanos en acero inoxidable con grifería institucional de válvula de pedal o palanca. Cumple normas sanitarias. Para cocinas industriales y áreas de manipulación de alimentos.',
    precio:333200,
    tipo:'Insumo/Dotación',
    ciiu:'I (56) / S (95–96)',
    proceso:'Operación / Transformación'
  }),

  producto({
    id:'P575',
    sector:'alimentos',
    icono:'🌬️',
    nombre:'Campana extractora Campana CRIP08-60N Inoxidable 3 Velocidades Negra',
    desc:'Opción de ser extractora (accesorio no incluido). • Caudal de aspiración de 210 m³/h. • Motor de 3 velocidades de operación, con controles frontales independientes. • 1 bombillo de 25W. Interruptor independiente para la luz. • Rejilla atrapagrasa removible y lavable. • Filtro de carbón activado para purificar los olores de la cocción.',
    precio:571200,
    tipo:'Equipo',
    ciiu:'I (56) / S (95–96)',
    proceso:'Operación / Transformación'
  }),

  producto({
    id:'P576',
    sector:'alimentos',
    icono:'🌬️',
    nombre:'Extractor de aire/ventilación industrialExtractor De Aire Para Baño y Cocina Industrial Para Pared 41x41x14.5cm 110 Volt',
    desc:'Extractor de aire para ventilación industrial. Bajo consumo y silencioso. Mejora la calidad del aire. Fácil instalación en paredes y techos.',
    precio:220150,
    tipo:'Equipo',
    ciiu:'I (56) / S (95–96)',
    proceso:'Operación / Transformación'
  }),

  producto({
    id:'P577',
    sector:'alimentos',
    icono:'🍳',
    nombre:'l Licuadora Industrial acero inoxidable 25 litros',
    desc:'Licuadora industrial en acero inoxidable de 25 litros. Motor potente para grandes volúmenes. Para juguerías y restaurantes.',
    precio:1011500,
    tipo:'Insumo/Dotación',
    ciiu:'I (56) / S (95–96)',
    proceso:'Operación / Transformación'
  }),

  producto({
    id:'P578',
    sector:'alimentos',
    icono:'🍳',
    nombre:'Batidora/amasadora industrial 10 litros Capacidad max en harina3 libras',
    desc:'Velocidades2 Voltaje110V 60Hz Potencia370W AccesoriosGancho, Paleta y globo Dimensiones76X43X51cm (alto, ancho y fondo)',
    precio:809200,
    tipo:'Insumo/Dotación',
    ciiu:'I (56) / S (95–96)',
    proceso:'Operación / Transformación'
  }),

  producto({
    id:'P579',
    sector:'alimentos',
    icono:'🍽️',
    nombre:'Dispensador térmico/termo 3 litros',
    desc:'Dispensador térmico de 3 litros para bebidas calientes. Mantiene temperatura hasta 12 horas. Para cafeterías y restaurantes.',
    precio:101150,
    tipo:'Insumo/Dotación',
    ciiu:'I (56) / S (95–96)',
    proceso:'Operación / Transformación'
  }),

  producto({
    id:'P580',
    sector:'alimentos',
    icono:'🍽️',
    nombre:'Vajilla y utensilios comerciales',
    desc:'Set de vajilla y utensilios para cocina comercial. Material resistente al uso intensivo. Para restaurantes, cafeterías y negocios de comida.',
    precio:220150,
    tipo:'Insumo/Dotación',
    ciiu:'I (56) / S (95–96)',
    proceso:'Operación / Transformación'
  }),

  producto({
    id:'P581',
    sector:'alimentos',
    icono:'📦',
    nombre:'Contenedores grado alimentario Contenedor Portátil Scepter de Grado Alimenticio ? 19 L con Boquilla Reversible',
    desc:'Contenedores portátiles de grado alimentario. Material libre de BPA. Herméticos y apilables. Para almacenamiento de líquidos y alimentos en restaurantes.',
    precio:65450,
    tipo:'Insumo/Dotación',
    ciiu:'I (56) / S (95–96)',
    proceso:'Operación / Transformación'
  }),

  producto({
    id:'P582',
    sector:'alimentos',
    icono:'⚖️',
    nombre:'Báscula de cocina Bascula De Cocina Digital 5 kg',
    desc:'Báscula digital de cocina, capacidad 5 kg. Pantalla LCD. Función tara. Ideal para panaderías y restaurantes. Precisión de 1 gramo.',
    precio:77350,
    tipo:'Insumo/Dotación',
    ciiu:'I (56) / S (95–96)',
    proceso:'Operación / Transformación'
  }),

  producto({
    id:'P583',
    sector:'alimentos',
    icono:'📦',
    nombre:'Selladora térmica de bolsas Longitud de sellado: 30cm. ¡Sella bolsas de tamaño considerable para satisfacer todas tus ne',
    desc:'Ancho de sellado: 2mm, el tamaño perfecto para un sellado seguro y confiable. Tiempo de calentamiento ultrarrápido: entre 0.2 y 1.3 segundos, para que puedas trabajar eficientemente. Peso ligero de solo 2.9 kg, lo que facilita su transporte y manejo.',
    precio:101150,
    tipo:'Insumo/Dotación',
    ciiu:'I (56) / S (95–96)',
    proceso:'Operación / Transformación'
  }),

  producto({
    id:'P584',
    sector:'alimentos',
    icono:'📦',
    nombre:'Selladora al vacío Tipo',
    desc:'Electrodomésticos de cocina modernos Ancho 43.18 cm Alto 25.4 cm Largo 52.5 cm Material PLASTICO Color Negro Potencia nominal 125 W Voltaje 117 V',
    precio:220150,
    tipo:'Insumo/Dotación',
    ciiu:'I (56) / S (95–96)',
    proceso:'Operación / Transformación'
  }),

  producto({
    id:'P585',
    sector:'alimentos',
    icono:'🗄️',
    nombre:'Vitrina mostrador Vitrina Mostrador 112 x 120 x 45 cms',
    desc:'Vitrina mostrador con vidrio templado y puerta corrediza. Exhibe productos de forma elegante. Para joyerías, tiendas de accesorios y puntos de venta.',
    precio:809200,
    tipo:'Mobiliario',
    ciiu:'I (56) / S (95–96)',
    proceso:'Operación / Transformación'
  }),

  producto({
    id:'P586',
    sector:'alimentos',
    icono:'🪑',
    nombre:'Carro bandejero CARRO RACK PARA BANDEJA 521*661*1780',
    desc:'Carro rack metálico para bandejas de panadería. Ruedas para desplazamiento en cocina. Permite transportar y almacenar múltiples bandejas.',
    precio:571200,
    tipo:'Mobiliario',
    ciiu:'I (56) / S (95–96)',
    proceso:'Operación / Transformación'
  }),

  producto({
    id:'P587',
    sector:'alimentos',
    icono:'🧯',
    nombre:'Extintor multipropósito abc- 20 libras rdl',
    desc:'Extintor multipropósito ABC 20 libras. Apaga fuegos tipo A, B y C. Certificado con manómetro. Obligatorio en talleres, cocinas y bodegas.',
    precio:113050,
    tipo:'Insumo/Dotación',
    ciiu:'I (56) / S (95–96)',
    proceso:'Operación / Transformación'
  }),

  producto({
    id:'P588',
    sector:'alimentos',
    icono:'⚠️',
    nombre:'Señalización de seguridad',
    desc:'Kit de señalización de seguridad industrial. Salidas de emergencia, rutas de evacuación y áreas de riesgo. Material resistente en PVC.',
    precio:41650,
    tipo:'Insumo/Dotación',
    ciiu:'I (56) / S (95–96)',
    proceso:'Operación / Transformación'
  }),

  producto({
    id:'P589',
    sector:'alimentos',
    icono:'🩹',
    nombre:'Botiquín industrial (taller) Estuche plástico mini cuadrado, medidas 21,5 cm x 11.5 cm x 6 cm compuesto por 13 elementos',
    desc:'Botiquín de primeros auxilios industrial. Incluye vendas, antisépticos, curitas y guantes. Cumple normas de seguridad industrial. Estuche plástico compacto.',
    precio:77350,
    tipo:'Insumo/Dotación',
    ciiu:'I (56) / S (95–96)',
    proceso:'Operación / Transformación'
  }),

  producto({
    id:'P590',
    sector:'alimentos',
    icono:'👔',
    nombre:'Uniformes de trabajo (dotación) antifluido.',
    desc:'Uniformes de trabajo antifluido para dotación laboral. Material resistente y fácil de limpiar. Protege al trabajador. Para cocinas, talleres y servicios.',
    precio:101150,
    tipo:'Insumo/Dotación',
    ciiu:'I (56) / S (95–96)',
    proceso:'Operación / Transformación'
  }),

  producto({
    id:'P591',
    sector:'alimentos',
    icono:'🦺',
    nombre:'Guantes y mallas para cabello (dotación)',
    desc:'Guantes de nitrilo y mallas para cabello en dotación. Protección e higiene. Para peluquerías, cocinas y laboratorios.',
    precio:41650,
    tipo:'Insumo/Dotación',
    ciiu:'I (56) / S (95–96)',
    proceso:'Operación / Transformación'
  }),

  producto({
    id:'P592',
    sector:'alimentos',
    icono:'🧵',
    nombre:'Máquina de coser para cuero (calzado) Tipo de puntada lanzadera',
    desc:'Tipo de material piel, mediana, pesada Longitud de la puntada, mm cuatro Tipo de promoción prensatelas rodillo de alimentación inferior y superior Plataforma de columna Espesor de la aguja No. 90-140 Agujas aplicables DPx5 Número de agujas uno Número de hilos 2 Tipo de grasa goteo',
    precio:2142000,
    tipo:'Equipo',
    ciiu:'I (56) / S (95–96)',
    proceso:'Operación / Transformación'
  }),

  producto({
    id:'P593',
    sector:'alimentos',
    icono:'👞',
    nombre:'Prensa para calzado Modelo',
    desc:'SR-YHJ Voltaje 220v 50hz Presión de laminación 0,3-0,5Mpa Tiempo de laminación 0-30s Capacidad 150pair/h Tamaño 450*820*1130mm Peso 140kg',
    precio:809200,
    tipo:'Equipo',
    ciiu:'I (56) / S (95–96)',
    proceso:'Operación / Transformación'
  }),

  producto({
    id:'P594',
    sector:'alimentos',
    icono:'👞',
    nombre:'Hormas para calzado (juego)',
    desc:'Juego completo de hormas para calzado en diferentes tallas. Para fabricación y reparación de zapatos. Dan forma y estructura al calzado.',
    precio:220150,
    tipo:'Insumo/Dotación',
    ciiu:'I (56) / S (95–96)',
    proceso:'Operación / Transformación'
  }),

  producto({
    id:'P595',
    sector:'alimentos',
    icono:'👞',
    nombre:'Lijadora/pulidora para calzado Máquina pulidora de calzado para un acabado profesional. Potente motor de 1KW, 380V/50Hz,',
    desc:'Máquina pulidora y lijadora para calzado. Acabado fino en suelas y cueros. Motor potente, bajo ruido. Para talleres de calzado.',
    precio:452200,
    tipo:'Insumo/Dotación',
    ciiu:'I (56) / S (95–96)',
    proceso:'Operación / Transformación'
  }),

  producto({
    id:'P596',
    sector:'alimentos',
    icono:'👞',
    nombre:'Pegadora/dispensador de adhesivo',
    desc:'Pegadora y dispensador de adhesivo para calzado. Aplica pegante de forma uniforme. Para talleres de zapatería y marroquinería.',
    precio:220150,
    tipo:'Insumo/Dotación',
    ciiu:'I (56) / S (95–96)',
    proceso:'Operación / Transformación'
  }),

  producto({
    id:'P597',
    sector:'alimentos',
    icono:'👞',
    nombre:'Kit de suelas nuevas',
    desc:'Kit de suelas para calzado, 5 unidades. Para reparación de zapatos formales, deportivos y de seguridad industrial.',
    precio:148750,
    tipo:'Insumo/Dotación',
    ciiu:'I (56) / S (95–96)',
    proceso:'Operación / Transformación'
  }),

  producto({
    id:'P598',
    sector:'alimentos',
    icono:'👞',
    nombre:'Kit de cordones y ojales',
    desc:'Kit de cordones y ojales para calzado, 5 unidades. Para reparación de calzado deportivo, casual y de trabajo.',
    precio:77350,
    tipo:'Insumo/Dotación',
    ciiu:'I (56) / S (95–96)',
    proceso:'Operación / Transformación'
  }),

  producto({
    id:'P599',
    sector:'alimentos',
    icono:'👞',
    nombre:'Herramientas de reparación (martillo/lezna)',
    desc:'Set de herramientas para calzado: martillo de zapatero y lezna. Acero de alta resistencia. Para talabartería y arreglo de suelas.',
    precio:101150,
    tipo:'Insumo/Dotación',
    ciiu:'I (56) / S (95–96)',
    proceso:'Operación / Transformación'
  }),

  producto({
    id:'P600',
    sector:'alimentos',
    icono:'💇',
    nombre:'Silla hidráulica profesional (peluquería) Silla de Barbería y Peluquería Reclinable Hidráulica y Giratoria Stetik Negro',
    desc:'Silla hidráulica profesional para peluquería y barbería. Giratoria y reclinable. Tapizado en cuero sintético. Comodidad al cliente y facilidad al estilista.',
    precio:1325470,
    tipo:'Mobiliario',
    ciiu:'I (56) / S (95–96)',
    proceso:'Operación / Transformación'
  }),

  producto({
    id:'P601',
    sector:'alimentos',
    icono:'🚿',
    nombre:'Lavacabezas portátil Cuenta con dos contenedores de 2 galones cada uno (≈7.5 L):',
    desc:'🔵 1 para agua limpia  ⚫ 1 para agua residual  Esto garantiza un lavado continuo, higiénico y sin necesidad de conexiones fijas o plomería.',
    precio:1206517,
    tipo:'Insumo/Dotación',
    ciiu:'I (56) / S (95–96)',
    proceso:'Operación / Transformación'
  }),

  producto({
    id:'P602',
    sector:'alimentos',
    icono:'💨',
    nombre:'Secador tipo casco Su potencia es de 1000W.',
    desc:'Contiene pedestal y casco. Voluminizá tu cabello.',
    precio:452200,
    tipo:'Insumo/Dotación',
    ciiu:'I (56) / S (95–96)',
    proceso:'Operación / Transformación'
  }),

  producto({
    id:'P603',
    sector:'alimentos',
    icono:'💨',
    nombre:'Secador de mano profesional Secador Super Mega Turbo Profesional 2400W',
    desc:'Secador de mano profesional 2400W con tecnología turbo. Múltiples velocidades y temperaturas. Secado rápido y uniforme. Para peluquerías y salones de estética.',
    precio:220150,
    tipo:'Insumo/Dotación',
    ciiu:'I (56) / S (95–96)',
    proceso:'Operación / Transformación'
  }),

  producto({
    id:'P604',
    sector:'alimentos',
    icono:'✂️',
    nombre:'Máquina corta cabello profesional Tipo : Máquinas cortapelo',
    desc:'•Modelo : GR4  •Inalámbrico : Si  •Potencia nominal : 7 W  •Garantía : 3 meses',
    precio:214200,
    tipo:'Equipo',
    ciiu:'I (56) / S (95–96)',
    proceso:'Operación / Transformación'
  }),

  producto({
    id:'P605',
    sector:'alimentos',
    icono:'✂️',
    nombre:'Tijeras profesionales',
    desc:'Tijeras profesionales de peluquería en acero inoxidable. Filo preciso para corte de cabello. Ergonómicas. Presentación de 3 unidades para dotación.',
    precio:101150,
    tipo:'Insumo/Dotación',
    ciiu:'I (56) / S (95–96)',
    proceso:'Operación / Transformación'
  }),

  producto({
    id:'P606',
    sector:'alimentos',
    icono:'💰',
    nombre:'Esterilizador UV para herramientas La caja de desinfección UV + Ozono es un dispositivo compacto diseñado para eliminar',
    desc:'Esterilizador UV + Ozono para herramientas de peluquería. Elimina bacterias y virus. Compacto y silencioso. Para cumplir normas sanitarias en establecimientos de belleza.',
    precio:148750,
    tipo:'Insumo/Dotación',
    ciiu:'I (56) / S (95–96)',
    proceso:'Operación / Transformación'
  }),

  producto({
    id:'P607',
    sector:'alimentos',
    icono:'💇',
    nombre:'Carro auxiliar de peluquería Alto',
    desc:'82 cm Ancho 32 cm Cantidad de cajones 4 Color Negro Fondo 35 cm Material Plástico',
    precio:172550,
    tipo:'Mobiliario',
    ciiu:'I (56) / S (95–96)',
    proceso:'Operación / Transformación'
  }),

  producto({
    id:'P608',
    sector:'alimentos',
    icono:'🪞',
    nombre:'Espejo profesional con iluminación Espejo de tocador Hollywood M MIVONDA con 18 bombillas, espejo de maquillaje grande i',
    desc:'Espejo de tocador con 18 bombillas LED. Tres modos de iluminación. Puerto USB de carga. Para salones de belleza y maquillaje profesional.',
    precio:333200,
    tipo:'Equipo',
    ciiu:'I (56) / S (95–96)',
    proceso:'Operación / Transformación'
  }),

  producto({
    id:'P609',
    sector:'alimentos',
    icono:'💇',
    nombre:'Silla hidráulica profesional (peluquería) Silla de Barbería y Peluquería Reclinable Hidráulica y Giratoria Stetik Negro',
    desc:'Silla hidráulica profesional para peluquería y barbería. Giratoria y reclinable. Tapizado en cuero sintético. Comodidad al cliente y facilidad al estilista.',
    precio:690200,
    tipo:'Insumo/Dotación',
    ciiu:'I (56) / S (95–96)',
    proceso:'Operación / Transformación'
  }),

  producto({
    id:'P610',
    sector:'alimentos',
    icono:'🧹',
    nombre:'Aspiradora industrial (limpieza operativa) Aspiradora de Sólidos y Líquidos 60 L con Cepillo Trabajo Pesado',
    desc:'Aspiradora industrial para sólidos y líquidos, capacidad 60 litros. Motor potente para uso continuo. Ideal para talleres, salones de belleza y locales comerciales.',
    precio:809200,
    tipo:'Insumo/Dotación',
    ciiu:'I (56) / S (95–96)',
    proceso:'Operación / Transformación'
  }),

  producto({
    id:'P611',
    sector:'alimentos',
    icono:'🗄️',
    nombre:'Estantería metálica industrial torre 240 x 120 cm',
    desc:'Estantería metálica industrial 240 x 120 cm. Estructura en acero anticorrosivo. Capacidad por nivel hasta 200 kg. Para bodegas, tiendas y talleres.',
    precio:380800,
    tipo:'Mobiliario',
    ciiu:'I (56) / S (95–96)',
    proceso:'Operación / Transformación'
  }),

  producto({
    id:'P612',
    sector:'alimentos',
    icono:'💰',
    nombre:'Caja registradora / POS odo en Uno Caja Registradora Profesional para Pequeñas Empresas, Paquete POS Incluye: Monitor Tá',
    desc:'Sistema POS todo en uno. Incluye monitor táctil, cajón de dinero, escáner e impresora térmica. Administra ventas, inventario y cierre de caja.',
    precio:6255197,
    tipo:'Insumo/Dotación',
    ciiu:'I (56) / S (95–96)',
    proceso:'Operación / Transformación'
  }),

  producto({
    id:'P613',
    sector:'alimentos',
    icono:'📱',
    nombre:'Lector QR/Pagos Incluye soporte: Sí',
    desc:'Voltaje: 110V Lector fijo. Su tipo de escaneo es omnidireccional. Tiene sensor de tecnología láser. Registra y decodifica un amplio volumen de datos.',
    precio:220150,
    tipo:'Insumo/Dotación',
    ciiu:'I (56) / S (95–96)',
    proceso:'Operación / Transformación'
  }),

  producto({
    id:'P614',
    sector:'alimentos',
    icono:'🖨️',
    nombre:'Impresora térmica de recibos Tipo',
    desc:'Impresoras Referencia del Producto en el Certificado/Empaque 7709281325989 Ancho 11 cm Alto 10 cm Largo 15 cm Tipo de impresora Impresora Tipo de impresión Láser monocromática Color Negra Cuenta con Wifi No Calidad de impresión Alta resolución Compatibilidad Windows, Linux, Android y macOS',
    precio:214200,
    tipo:'Equipo',
    ciiu:'I (56) / S (95–96)',
    proceso:'Operación / Transformación'
  }),

  producto({
    id:'P615',
    sector:'alimentos',
    icono:'💡',
    nombre:'Iluminación LED de local Luminaria lineal LED 36W en elegante chasis negro, ideal para iluminación profesional y decorat',
    desc:'Luminaria lineal LED 36W. Tecnología 3CCT para luz cálida, neutra o blanca. Para locales comerciales, oficinas y salas de exhibición.',
    precio:230200,
    tipo:'Equipo',
    ciiu:'I (56) / S (95–96)',
    proceso:'Operación / Transformación'
  }),

  producto({
    id:'P616',
    sector:'alimentos',
    icono:'🔒',
    nombre:'Cerraduras/elementos de seguridad (operación) Tipo : Cerraduras',
    desc:'•Alto : 31 cm  •Largo : 13.5 cm  •Uso Cerradura : Acceso',
    precio:101150,
    tipo:'Insumo/Dotación',
    ciiu:'I (56) / S (95–96)',
    proceso:'Operación / Transformación'
  }),

  producto({
    id:'CAT2-270',
    sector:'alimentos',
    icono:'🔥',
    nombre:'Estufa semindustrial Estufa a gas de 4 quemadores, fabricada en acero inoxidable 201, válvula de gas Alpha Brass, regula',
    desc:'Estufa a gas de 4 quemadores en acero inoxidable. Alta resistencia al calor y uso continuo. Para restaurantes, cafeterías y negocios de comida.',
    precio:809200,
    tipo:'Insumo/Dotación',
    ciiu:'I (56) / S (95–96)',
    proceso:'Operación / Transformación'
  }),

  producto({
    id:'CAT2-271',
    sector:'alimentos',
    icono:'🍳',
    nombre:'Freidora industrial Equipo fabricado totalmente en acero.',
    desc:'– Pozuelo en acero 430 – Tres quemadores en hierro fundido indeformables de alto rendimiento – Sistema de seguridad compuesto por termostato, piloto, termopila y válvula Unitrol. – Rodachinas de alto tráfico 3″ en poliuretano – Incluye GRATIS dos canastillas de trabajo pesado – Incluye GRATIS rejilla filtro de impurezas – Posee zona fria para mayor vida útil del aceite. – Obtendrás ahorro de aceit',
    precio:809200,
    tipo:'Insumo/Dotación',
    ciiu:'I (56) / S (95–96)',
    proceso:'Operación / Transformación'
  }),

  producto({
    id:'CAT2-272',
    sector:'alimentos',
    icono:'🍳',
    nombre:'Plancha para asados Plancha Para Asar 47 Cm X 25 Cm',
    desc:'Plancha para asados 47 x 25 cm en acero inoxidable. Distribución uniforme del calor. Para restaurantes y negocios de comida rápida.',
    precio:148750,
    tipo:'Insumo/Dotación',
    ciiu:'I (56) / S (95–96)',
    proceso:'Operación / Transformación'
  }),

  producto({
    id:'CAT2-273',
    sector:'alimentos',
    icono:'🍳',
    nombre:'Horno eléctrico (operación) Horno Eléctrico Gratinador 25 Litros Negro',
    desc:'(0)',
    precio:339150,
    tipo:'Equipo',
    ciiu:'I (56) / S (95–96)',
    proceso:'Operación / Transformación'
  }),

  producto({
    id:'CAT2-274',
    sector:'alimentos',
    icono:'❄️',
    nombre:'Refrigerador productivo Refrigerador vertical de dos puertas. Marco construcción exterior e interior en acero inoxidable',
    desc:'Refrigerador vertical de dos puertas para uso productivo. Gran capacidad, temperatura regulable. Para restaurantes, panaderías y tiendas.',
    precio:2618000,
    tipo:'Equipo',
    ciiu:'I (56) / S (95–96)',
    proceso:'Operación / Transformación'
  }),

  producto({
    id:'CAT2-275',
    sector:'alimentos',
    icono:'❄️',
    nombre:'Congelador tipo cofre Tipo Congeladores Referencia del Producto en el Certificado/Empaque CI-299TV Ancho 83.7 cm Alto 11',
    desc:'Blanco Número de gavetas 4 Cantidad de puertas 2 Consumo energético 99 kWh/mes Posición del congelador Freezer horizontal Año de lanzamiento 2025 Voltaje 115 V Garantía detalle 1 año general y 3 años en el compresor',
    precio:1428000,
    tipo:'Equipo',
    ciiu:'I (56) / S (95–96)',
    proceso:'Operación / Transformación'
  }),

  producto({
    id:'CAT2-276',
    sector:'alimentos',
    icono:'🪑',
    nombre:'Mesa inoxidable de preparación Mesas Acero 90 x 150 x 50 Con Entrepaño',
    desc:'Mesa de preparación en acero inoxidable (90 x 150 x 50 cm) con entrepaño. Resistente a la corrosión. Cumple normas sanitarias.',
    precio:1011500,
    tipo:'Mobiliario',
    ciiu:'I (56) / S (95–96)',
    proceso:'Operación / Transformación'
  }),

  producto({
    id:'CAT2-277',
    sector:'alimentos',
    icono:'🚰',
    nombre:'Lavamanos en acero inoxidable (operación) Grifería institucional kit válvula de pedal con lavamanos de 28x30',
    desc:'Lavamanos en acero inoxidable con grifería institucional de válvula de pedal o palanca. Cumple normas sanitarias. Para cocinas industriales y áreas de manipulación de alimentos.',
    precio:333200,
    tipo:'Insumo/Dotación',
    ciiu:'I (56) / S (95–96)',
    proceso:'Operación / Transformación'
  }),

  producto({
    id:'CAT2-278',
    sector:'alimentos',
    icono:'🌬️',
    nombre:'Campana extractora Campana CRIP08-60N Inoxidable 3 Velocidades Negra',
    desc:'Opción de ser extractora (accesorio no incluido). • Caudal de aspiración de 210 m³/h. • Motor de 3 velocidades de operación, con controles frontales independientes. • 1 bombillo de 25W. Interruptor independiente para la luz. • Rejilla atrapagrasa removible y lavable. • Filtro de carbón activado para purificar los olores de la cocción.',
    precio:571200,
    tipo:'Equipo',
    ciiu:'I (56) / S (95–96)',
    proceso:'Operación / Transformación'
  }),

  producto({
    id:'CAT2-279',
    sector:'alimentos',
    icono:'🌬️',
    nombre:'Extractor de aire/ventilación industrialExtractor De Aire Para Baño y Cocina Industrial Para Pared 41x41x14.5cm 110 Volt',
    desc:'Extractor de aire para ventilación industrial. Bajo consumo y silencioso. Mejora la calidad del aire. Fácil instalación en paredes y techos.',
    precio:220150,
    tipo:'Equipo',
    ciiu:'I (56) / S (95–96)',
    proceso:'Operación / Transformación'
  }),

  producto({
    id:'CAT2-280',
    sector:'alimentos',
    icono:'🍳',
    nombre:'l Licuadora Industrial acero inoxidable 25 litros',
    desc:'Licuadora industrial en acero inoxidable de 25 litros. Motor potente para grandes volúmenes. Para juguerías y restaurantes.',
    precio:1011500,
    tipo:'Insumo/Dotación',
    ciiu:'I (56) / S (95–96)',
    proceso:'Operación / Transformación'
  }),

  producto({
    id:'CAT2-281',
    sector:'alimentos',
    icono:'🍳',
    nombre:'Batidora/amasadora industrial 10 litros Capacidad max en harina3 libras',
    desc:'Velocidades2 Voltaje110V 60Hz Potencia370W AccesoriosGancho, Paleta y globo Dimensiones76X43X51cm (alto, ancho y fondo)',
    precio:809200,
    tipo:'Insumo/Dotación',
    ciiu:'I (56) / S (95–96)',
    proceso:'Operación / Transformación'
  }),

  producto({
    id:'CAT2-282',
    sector:'alimentos',
    icono:'🍽️',
    nombre:'Dispensador térmico/termo 3 litros',
    desc:'Dispensador térmico de 3 litros para bebidas calientes. Mantiene temperatura hasta 12 horas. Para cafeterías y restaurantes.',
    precio:101150,
    tipo:'Insumo/Dotación',
    ciiu:'I (56) / S (95–96)',
    proceso:'Operación / Transformación'
  }),

  producto({
    id:'CAT2-283',
    sector:'alimentos',
    icono:'🍽️',
    nombre:'Vajilla y utensilios comerciales',
    desc:'Set de vajilla y utensilios para cocina comercial. Material resistente al uso intensivo. Para restaurantes, cafeterías y negocios de comida.',
    precio:220150,
    tipo:'Insumo/Dotación',
    ciiu:'I (56) / S (95–96)',
    proceso:'Operación / Transformación'
  }),

  producto({
    id:'CAT2-284',
    sector:'alimentos',
    icono:'📦',
    nombre:'Contenedores grado alimentario Contenedor Portátil Scepter de Grado Alimenticio ? 19 L con Boquilla Reversible',
    desc:'Contenedores portátiles de grado alimentario. Material libre de BPA. Herméticos y apilables. Para almacenamiento de líquidos y alimentos en restaurantes.',
    precio:65450,
    tipo:'Insumo/Dotación',
    ciiu:'I (56) / S (95–96)',
    proceso:'Operación / Transformación'
  }),

  producto({
    id:'CAT2-285',
    sector:'alimentos',
    icono:'⚖️',
    nombre:'Báscula de cocina Bascula De Cocina Digital 5 kg',
    desc:'Báscula digital de cocina, capacidad 5 kg. Pantalla LCD. Función tara. Ideal para panaderías y restaurantes. Precisión de 1 gramo.',
    precio:77350,
    tipo:'Insumo/Dotación',
    ciiu:'I (56) / S (95–96)',
    proceso:'Operación / Transformación'
  }),

  producto({
    id:'CAT2-286',
    sector:'alimentos',
    icono:'📦',
    nombre:'Selladora térmica de bolsas Longitud de sellado: 30cm. ¡Sella bolsas de tamaño considerable para satisfacer todas tus ne',
    desc:'Ancho de sellado: 2mm, el tamaño perfecto para un sellado seguro y confiable. Tiempo de calentamiento ultrarrápido: entre 0.2 y 1.3 segundos, para que puedas trabajar eficientemente. Peso ligero de solo 2.9 kg, lo que facilita su transporte y manejo.',
    precio:101150,
    tipo:'Insumo/Dotación',
    ciiu:'I (56) / S (95–96)',
    proceso:'Operación / Transformación'
  }),

  producto({
    id:'CAT2-287',
    sector:'alimentos',
    icono:'📦',
    nombre:'Selladora al vacío Tipo',
    desc:'Electrodomésticos de cocina modernos Ancho 43.18 cm Alto 25.4 cm Largo 52.5 cm Material PLASTICO Color Negro Potencia nominal 125 W Voltaje 117 V',
    precio:220150,
    tipo:'Insumo/Dotación',
    ciiu:'I (56) / S (95–96)',
    proceso:'Operación / Transformación'
  }),

  producto({
    id:'CAT2-288',
    sector:'alimentos',
    icono:'🗄️',
    nombre:'Vitrina mostrador Vitrina Mostrador 112 x 120 x 45 cms',
    desc:'Vitrina mostrador con vidrio templado y puerta corrediza. Exhibe productos de forma elegante. Para joyerías, tiendas de accesorios y puntos de venta.',
    precio:809200,
    tipo:'Mobiliario',
    ciiu:'I (56) / S (95–96)',
    proceso:'Operación / Transformación'
  }),

  producto({
    id:'CAT2-289',
    sector:'alimentos',
    icono:'🪑',
    nombre:'Carro bandejero CARRO RACK PARA BANDEJA 521*661*1780',
    desc:'Carro rack metálico para bandejas de panadería. Ruedas para desplazamiento en cocina. Permite transportar y almacenar múltiples bandejas.',
    precio:571200,
    tipo:'Mobiliario',
    ciiu:'I (56) / S (95–96)',
    proceso:'Operación / Transformación'
  }),

  producto({
    id:'CAT2-290',
    sector:'alimentos',
    icono:'🧯',
    nombre:'Extintor multipropósito abc- 20 libras rdl',
    desc:'Extintor multipropósito ABC 20 libras. Apaga fuegos tipo A, B y C. Certificado con manómetro. Obligatorio en talleres, cocinas y bodegas.',
    precio:113050,
    tipo:'Insumo/Dotación',
    ciiu:'I (56) / S (95–96)',
    proceso:'Operación / Transformación'
  }),

  producto({
    id:'CAT2-291',
    sector:'alimentos',
    icono:'⚠️',
    nombre:'Señalización de seguridad',
    desc:'Kit de señalización de seguridad industrial. Salidas de emergencia, rutas de evacuación y áreas de riesgo. Material resistente en PVC.',
    precio:41650,
    tipo:'Insumo/Dotación',
    ciiu:'I (56) / S (95–96)',
    proceso:'Operación / Transformación'
  }),

  producto({
    id:'CAT2-292',
    sector:'alimentos',
    icono:'🩹',
    nombre:'Botiquín industrial (taller) Estuche plástico mini cuadrado, medidas 21,5 cm x 11.5 cm x 6 cm compuesto por 13 elementos',
    desc:'Botiquín de primeros auxilios industrial. Incluye vendas, antisépticos, curitas y guantes. Cumple normas de seguridad industrial. Estuche plástico compacto.',
    precio:77350,
    tipo:'Insumo/Dotación',
    ciiu:'I (56) / S (95–96)',
    proceso:'Operación / Transformación'
  }),

  producto({
    id:'CAT2-293',
    sector:'alimentos',
    icono:'👔',
    nombre:'Uniformes de trabajo (dotación) antifluido.',
    desc:'Uniformes de trabajo antifluido para dotación laboral. Material resistente y fácil de limpiar. Protege al trabajador. Para cocinas, talleres y servicios.',
    precio:101150,
    tipo:'Insumo/Dotación',
    ciiu:'I (56) / S (95–96)',
    proceso:'Operación / Transformación'
  }),

  producto({
    id:'CAT2-294',
    sector:'alimentos',
    icono:'🦺',
    nombre:'Guantes y mallas para cabello (dotación)',
    desc:'Guantes de nitrilo y mallas para cabello en dotación. Protección e higiene. Para peluquerías, cocinas y laboratorios.',
    precio:41650,
    tipo:'Insumo/Dotación',
    ciiu:'I (56) / S (95–96)',
    proceso:'Operación / Transformación'
  }),

  producto({
    id:'CAT2-295',
    sector:'alimentos',
    icono:'🧵',
    nombre:'Máquina de coser para cuero (calzado) Tipo de puntada lanzadera',
    desc:'Tipo de material piel, mediana, pesada Longitud de la puntada, mm cuatro Tipo de promoción prensatelas rodillo de alimentación inferior y superior Plataforma de columna Espesor de la aguja No. 90-140 Agujas aplicables DPx5 Número de agujas uno Número de hilos 2 Tipo de grasa goteo',
    precio:2142000,
    tipo:'Equipo',
    ciiu:'I (56) / S (95–96)',
    proceso:'Operación / Transformación'
  }),

  producto({
    id:'CAT2-296',
    sector:'alimentos',
    icono:'👞',
    nombre:'Prensa para calzado Modelo',
    desc:'SR-YHJ Voltaje 220v 50hz Presión de laminación 0,3-0,5Mpa Tiempo de laminación 0-30s Capacidad 150pair/h Tamaño 450*820*1130mm Peso 140kg',
    precio:809200,
    tipo:'Equipo',
    ciiu:'I (56) / S (95–96)',
    proceso:'Operación / Transformación'
  }),

  producto({
    id:'CAT2-297',
    sector:'alimentos',
    icono:'👞',
    nombre:'Hormas para calzado (juego)',
    desc:'Juego completo de hormas para calzado en diferentes tallas. Para fabricación y reparación de zapatos. Dan forma y estructura al calzado.',
    precio:220150,
    tipo:'Insumo/Dotación',
    ciiu:'I (56) / S (95–96)',
    proceso:'Operación / Transformación'
  }),

  producto({
    id:'CAT2-298',
    sector:'alimentos',
    icono:'👞',
    nombre:'Lijadora/pulidora para calzado Máquina pulidora de calzado para un acabado profesional. Potente motor de 1KW, 380V/50Hz,',
    desc:'Máquina pulidora y lijadora para calzado. Acabado fino en suelas y cueros. Motor potente, bajo ruido. Para talleres de calzado.',
    precio:452200,
    tipo:'Insumo/Dotación',
    ciiu:'I (56) / S (95–96)',
    proceso:'Operación / Transformación'
  }),

  producto({
    id:'CAT2-299',
    sector:'alimentos',
    icono:'👞',
    nombre:'Pegadora/dispensador de adhesivo',
    desc:'Pegadora y dispensador de adhesivo para calzado. Aplica pegante de forma uniforme. Para talleres de zapatería y marroquinería.',
    precio:220150,
    tipo:'Insumo/Dotación',
    ciiu:'I (56) / S (95–96)',
    proceso:'Operación / Transformación'
  }),

  producto({
    id:'CAT2-300',
    sector:'alimentos',
    icono:'👞',
    nombre:'Kit de suelas nuevas',
    desc:'Kit de suelas para calzado, 5 unidades. Para reparación de zapatos formales, deportivos y de seguridad industrial.',
    precio:148750,
    tipo:'Insumo/Dotación',
    ciiu:'I (56) / S (95–96)',
    proceso:'Operación / Transformación'
  }),

  producto({
    id:'CAT2-301',
    sector:'alimentos',
    icono:'👞',
    nombre:'Kit de cordones y ojales',
    desc:'Kit de cordones y ojales para calzado, 5 unidades. Para reparación de calzado deportivo, casual y de trabajo.',
    precio:77350,
    tipo:'Insumo/Dotación',
    ciiu:'I (56) / S (95–96)',
    proceso:'Operación / Transformación'
  }),

  producto({
    id:'CAT2-302',
    sector:'alimentos',
    icono:'👞',
    nombre:'Herramientas de reparación (martillo/lezna)',
    desc:'Set de herramientas para calzado: martillo de zapatero y lezna. Acero de alta resistencia. Para talabartería y arreglo de suelas.',
    precio:101150,
    tipo:'Insumo/Dotación',
    ciiu:'I (56) / S (95–96)',
    proceso:'Operación / Transformación'
  }),

  producto({
    id:'CAT2-303',
    sector:'alimentos',
    icono:'💇',
    nombre:'Silla hidráulica profesional (peluquería) Silla de Barbería y Peluquería Reclinable Hidráulica y Giratoria Stetik Negro',
    desc:'Silla hidráulica profesional para peluquería y barbería. Giratoria y reclinable. Tapizado en cuero sintético. Comodidad al cliente y facilidad al estilista.',
    precio:1113840,
    tipo:'Mobiliario',
    ciiu:'I (56) / S (95–96)',
    proceso:'Operación / Transformación'
  }),

  producto({
    id:'CAT2-304',
    sector:'alimentos',
    icono:'🚿',
    nombre:'Lavacabezas portátil Cuenta con dos contenedores de 2 galones cada uno (≈7.5 L):',
    desc:'🔵 1 para agua limpia  ⚫ 1 para agua residual  Esto garantiza un lavado continuo, higiénico y sin necesidad de conexiones fijas o plomería.',
    precio:1013880,
    tipo:'Insumo/Dotación',
    ciiu:'I (56) / S (95–96)',
    proceso:'Operación / Transformación'
  }),

  producto({
    id:'CAT2-305',
    sector:'alimentos',
    icono:'💨',
    nombre:'Secador tipo casco Su potencia es de 1000W.',
    desc:'Contiene pedestal y casco. Voluminizá tu cabello.',
    precio:452200,
    tipo:'Insumo/Dotación',
    ciiu:'I (56) / S (95–96)',
    proceso:'Operación / Transformación'
  }),

  producto({
    id:'CAT2-306',
    sector:'alimentos',
    icono:'💨',
    nombre:'Secador de mano profesional Secador Super Mega Turbo Profesional 2400W',
    desc:'Secador de mano profesional 2400W con tecnología turbo. Múltiples velocidades y temperaturas. Secado rápido y uniforme. Para peluquerías y salones de estética.',
    precio:220150,
    tipo:'Insumo/Dotación',
    ciiu:'I (56) / S (95–96)',
    proceso:'Operación / Transformación'
  }),

  producto({
    id:'CAT2-307',
    sector:'alimentos',
    icono:'✂️',
    nombre:'Máquina corta cabello profesional Tipo : Máquinas cortapelo',
    desc:'•Modelo : GR4  •Inalámbrico : Si  •Potencia nominal : 7 W  •Garantía : 3 meses',
    precio:214200,
    tipo:'Equipo',
    ciiu:'I (56) / S (95–96)',
    proceso:'Operación / Transformación'
  }),

  producto({
    id:'CAT2-308',
    sector:'alimentos',
    icono:'✂️',
    nombre:'Tijeras profesionales',
    desc:'Tijeras profesionales de peluquería en acero inoxidable. Filo preciso para corte de cabello. Ergonómicas. Presentación de 3 unidades para dotación.',
    precio:101150,
    tipo:'Insumo/Dotación',
    ciiu:'I (56) / S (95–96)',
    proceso:'Operación / Transformación'
  }),

  producto({
    id:'CAT2-309',
    sector:'alimentos',
    icono:'💰',
    nombre:'Esterilizador UV para herramientas La caja de desinfección UV + Ozono es un dispositivo compacto diseñado para eliminar',
    desc:'Esterilizador UV + Ozono para herramientas de peluquería. Elimina bacterias y virus. Compacto y silencioso. Para cumplir normas sanitarias en establecimientos de belleza.',
    precio:148750,
    tipo:'Insumo/Dotación',
    ciiu:'I (56) / S (95–96)',
    proceso:'Operación / Transformación'
  }),

  producto({
    id:'CAT2-310',
    sector:'alimentos',
    icono:'💇',
    nombre:'Carro auxiliar de peluquería Alto',
    desc:'82 cm Ancho 32 cm Cantidad de cajones 4 Color Negro Fondo 35 cm Material Plástico',
    precio:172550,
    tipo:'Mobiliario',
    ciiu:'I (56) / S (95–96)',
    proceso:'Operación / Transformación'
  }),

  producto({
    id:'CAT2-311',
    sector:'alimentos',
    icono:'🪞',
    nombre:'Espejo profesional con iluminación Espejo de tocador Hollywood M MIVONDA con 18 bombillas, espejo de maquillaje grande i',
    desc:'Espejo de tocador con 18 bombillas LED. Tres modos de iluminación. Puerto USB de carga. Para salones de belleza y maquillaje profesional.',
    precio:333200,
    tipo:'Equipo',
    ciiu:'I (56) / S (95–96)',
    proceso:'Operación / Transformación'
  }),

  producto({
    id:'CAT2-312',
    sector:'alimentos',
    icono:'💇',
    nombre:'Silla hidráulica profesional (peluquería) Silla de Barbería y Peluquería Reclinable Hidráulica y Giratoria Stetik Negro',
    desc:'Silla hidráulica profesional para peluquería y barbería. Giratoria y reclinable. Tapizado en cuero sintético. Comodidad al cliente y facilidad al estilista.',
    precio:690200,
    tipo:'Insumo/Dotación',
    ciiu:'I (56) / S (95–96)',
    proceso:'Operación / Transformación'
  }),

  producto({
    id:'CAT2-313',
    sector:'alimentos',
    icono:'🧹',
    nombre:'Aspiradora industrial (limpieza operativa) Aspiradora de Sólidos y Líquidos 60 L con Cepillo Trabajo Pesado',
    desc:'Aspiradora industrial para sólidos y líquidos, capacidad 60 litros. Motor potente para uso continuo. Ideal para talleres, salones de belleza y locales comerciales.',
    precio:809200,
    tipo:'Insumo/Dotación',
    ciiu:'I (56) / S (95–96)',
    proceso:'Operación / Transformación'
  }),

  producto({
    id:'CAT2-314',
    sector:'alimentos',
    icono:'🗄️',
    nombre:'Estantería metálica industrial torre 240 x 120 cm',
    desc:'Estantería metálica industrial 240 x 120 cm. Estructura en acero anticorrosivo. Capacidad por nivel hasta 200 kg. Para bodegas, tiendas y talleres.',
    precio:380800,
    tipo:'Mobiliario',
    ciiu:'I (56) / S (95–96)',
    proceso:'Operación / Transformación'
  }),

  producto({
    id:'CAT2-315',
    sector:'alimentos',
    icono:'💰',
    nombre:'Caja registradora / POS odo en Uno Caja Registradora Profesional para Pequeñas Empresas, Paquete POS Incluye: Monitor Tá',
    desc:'Sistema POS todo en uno. Incluye monitor táctil, cajón de dinero, escáner e impresora térmica. Administra ventas, inventario y cierre de caja.',
    precio:5256468,
    tipo:'Insumo/Dotación',
    ciiu:'I (56) / S (95–96)',
    proceso:'Operación / Transformación'
  }),

  producto({
    id:'CAT2-316',
    sector:'alimentos',
    icono:'📱',
    nombre:'Lector QR/Pagos Incluye soporte: Sí',
    desc:'Voltaje: 110V Lector fijo. Su tipo de escaneo es omnidireccional. Tiene sensor de tecnología láser. Registra y decodifica un amplio volumen de datos.',
    precio:220150,
    tipo:'Insumo/Dotación',
    ciiu:'I (56) / S (95–96)',
    proceso:'Operación / Transformación'
  }),

  producto({
    id:'CAT2-317',
    sector:'alimentos',
    icono:'🖨️',
    nombre:'Impresora térmica de recibos Tipo',
    desc:'Impresoras Referencia del Producto en el Certificado/Empaque 7709281325989 Ancho 11 cm Alto 10 cm Largo 15 cm Tipo de impresora Impresora Tipo de impresión Láser monocromática Color Negra Cuenta con Wifi No Calidad de impresión Alta resolución Compatibilidad Windows, Linux, Android y macOS',
    precio:214200,
    tipo:'Equipo',
    ciiu:'I (56) / S (95–96)',
    proceso:'Operación / Transformación'
  }),

  producto({
    id:'CAT2-318',
    sector:'alimentos',
    icono:'💡',
    nombre:'Iluminación LED de local Luminaria lineal LED 36W en elegante chasis negro, ideal para iluminación profesional y decorat',
    desc:'Luminaria lineal LED 36W. Tecnología 3CCT para luz cálida, neutra o blanca. Para locales comerciales, oficinas y salas de exhibición.',
    precio:193445,
    tipo:'Equipo',
    ciiu:'I (56) / S (95–96)',
    proceso:'Operación / Transformación'
  }),

  producto({
    id:'CAT2-319',
    sector:'alimentos',
    icono:'🔒',
    nombre:'Cerraduras/elementos de seguridad (operación) Tipo : Cerraduras',
    desc:'•Alto : 31 cm  •Largo : 13.5 cm  •Uso Cerradura : Acceso',
    precio:101150,
    tipo:'Insumo/Dotación',
    ciiu:'I (56) / S (95–96)',
    proceso:'Operación / Transformación'
  })

];

const PRODUCTOS=[
  ...PRODUCTOS_MANUFACTURA,
  ...PRODUCTOS_COMERCIO,
  ...PRODUCTOS_PRODUCCION,
  ...PRODUCTOS_AGRO,
  ...PRODUCTOS_DIGITAL,
  ...PRODUCTOS_ALIMENTOS
];

window.PRODUCTOS = PRODUCTOS;