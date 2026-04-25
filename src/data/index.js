export const HERO_SLIDES = [
  {
    img: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1800&auto=format&fit=crop&q=80',
    title: 'Alma',
    italic: 'Café',
    sub: 'Donde cada taza es una historia que merece ser contada con calma.',
  },
  {
    img: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=1800&auto=format&fit=crop&q=80',
    title: 'Origen',
    italic: 'y Ritual',
    sub: 'Granos de especialidad, tostado artesanal. El sabor empieza mucho antes de la primera sorba.',
  },
  {
    img: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=1800&auto=format&fit=crop&q=80',
    title: 'Un Lugar',
    italic: 'para Volver',
    sub: 'Ambiente cálido, buen café y personas que aman lo que hacen.',
  },
]

export const MENU_CATEGORIES = ['Cafés', 'Fríos', 'Pastelería', 'Brunch']

export const MENU_ITEMS = {
  Cafés: [
    { id: 1, name: 'Flat White', tag: 'Signature', desc: 'Doble ristretto con leche vaporizada de micro-espuma. Intenso y sedoso.', price: '$3.200', img: 'https://images.unsplash.com/photo-1561882468-9110e03e0f78?w=600&auto=format&fit=crop&q=80' },
    { id: 2, name: 'Cortado de Avellana', tag: 'Favorito', desc: 'Espresso cortado con leche de avellanas y una nota caramelizada.', price: '$3.800', img: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&auto=format&fit=crop&q=80' },
    { id: 3, name: 'Pour Over Etiopía', tag: 'Origen Único', desc: 'Notas frutales de arándano y flor de jazmín. Perfil claro y brillante.', price: '$4.500', img: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=600&auto=format&fit=crop&q=80' },
    { id: 4, name: 'Espresso Clásico', tag: 'Base', desc: 'Blend house de tostado medio-oscuro. Cuerpo pleno, crema dorada.', price: '$1.900', img: 'https://images.unsplash.com/photo-1520831861-9e2a50ab8bdd?w=600&auto=format&fit=crop&q=80' },
  ],
  Fríos: [
    { id: 5, name: 'Cold Brew 24h', tag: 'Refrescante', desc: 'Extracción en frío por 24 horas. Suave, sin amargor, con notas de chocolate.', price: '$3.500', img: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&auto=format&fit=crop&q=80' },
    { id: 6, name: 'Latte Tostado', tag: 'Seasonal', desc: 'Espresso sobre leche fría y jarabe de avena tostada. Irresistible.', price: '$4.200', img: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=600&auto=format&fit=crop&q=80' },
    { id: 7, name: 'Matcha Latte', tag: 'Sin Cafeína', desc: 'Matcha ceremonial japonés con leche de almendras y miel de abeja.', price: '$4.800', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&auto=format&fit=crop&q=80' },
    { id: 8, name: 'Agua Tónica de Café', tag: 'Único', desc: 'Espresso sobre agua tónica artesanal con cítricos. Refrescante y complejo.', price: '$4.500', img: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=600&auto=format&fit=crop&q=80' },
  ],
  Pastelería: [
    { id: 9, name: 'Roll de Canela', tag: 'Horneado hoy', desc: 'Masa brioche hojaldrada, canela mexicana, glasé de queso crema.', price: '$2.900', img: 'https://images.unsplash.com/photo-1509365465985-25d11c17e812?w=600&auto=format&fit=crop&q=80' },
    { id: 10, name: 'Croissant de Almendras', tag: 'Artesanal', desc: '72 capas de mantequilla francesa, crema frangipane, almendras tostadas.', price: '$2.700', img: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=600&auto=format&fit=crop&q=80' },
    { id: 11, name: 'Cheesecake de Miso', tag: "Chef's Pick", desc: 'Base de galleta de sésamo, crema de queso con miso blanco y caramelo.', price: '$3.400', img: 'https://images.unsplash.com/photo-1524351199678-941a58a3df50?w=600&auto=format&fit=crop&q=80' },
    { id: 12, name: 'Tostada de Banana', tag: 'Dulce', desc: 'Pan de masa madre, mantequilla de nuez, plátano caramelizado y tahini.', price: '$3.100', img: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=600&auto=format&fit=crop&q=80' },
  ],
  Brunch: [
    { id: 13, name: 'Eggs Benedict', tag: 'Clásico', desc: 'Huevos poché sobre English muffin, jamón serrano y salsa holandesa.', price: '$7.800', img: 'https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=600&auto=format&fit=crop&q=80' },
    { id: 14, name: 'Tostada de Aguacate', tag: 'Vegano', desc: 'Masa madre, guacamole, pepitas tostadas, chile y limón de pica.', price: '$6.500', img: 'https://images.unsplash.com/photo-1603046891744-1f15eb825b96?w=600&auto=format&fit=crop&q=80' },
    { id: 15, name: 'Bowl de Granola', tag: 'Ligero', desc: 'Granola artesanal, yogur de cabra, frutas de temporada y miel.', price: '$5.900', img: 'https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?w=600&auto=format&fit=crop&q=80' },
    { id: 16, name: 'Pancakes de Ricotta', tag: 'Signature', desc: 'Esponjosos, con mantequilla café y maple real de Vermont.', price: '$7.500', img: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&auto=format&fit=crop&q=80' },
  ],
}

export const GALLERY_IMGS = [
  'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=500&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?w=500&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=500&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1507914997625-5eace7c85c80?w=500&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?w=500&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1463797221720-6b07e6426c24?w=500&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1511081692775-05d0f180a065?w=500&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1575386619241-b6b4f21d4d01?w=500&auto=format&fit=crop&q=80',
]

export const TESTIMONIALS = [
  {
    name: 'Sofía M.',
    loc: 'Cliente habitual',
    text: 'El mejor flat white de la ciudad, sin duda. El ambiente es mágico y el equipo siempre está dispuesto a recomendar algo nuevo.',
    stars: 5,
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&auto=format&fit=crop&q=80',
  },
  {
    name: 'Rodrigo K.',
    loc: 'Foodie & Blogger',
    text: 'Vine por el café, me quedé por la pastelería. El croissant de almendras es un pecado capital que vale cada caloría.',
    stars: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&auto=format&fit=crop&q=80',
  },
  {
    name: 'Valentina C.',
    loc: 'Trabaja desde aquí',
    text: 'Oficina alternativa y café de especialidad. El pour over etiopía me hace arrancar el día de la mejor forma posible.',
    stars: 5,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&auto=format&fit=crop&q=80',
  },
]

export const WA_URL = 'https://wa.me/56912345678?text=Hola!%20Quiero%20hacer%20un%20pedido%20en%20Alma%20Caf%C3%A9'
