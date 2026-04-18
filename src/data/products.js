export const PRODUCTS = [
  // Coffee
  {
    id: 'yirgacheffe',
    name: 'Yirgacheffe',
    category: 'Coffee',
    subtitle: 'Single origin · Ethiopia',
    price: 18,
    unit: '250g whole bean',
    notes: ['Jasmine', 'Bergamot', 'Honey'],
    image:
      'https://images.unsplash.com/photo-1442975631115-c4f7b05b6a8c?auto=format&fit=crop&w=1400&q=80',
    story:
      'Washed, sun-dried, and shipped whole bean. From the birthplace of coffee, picked at peak ripeness by the Konga cooperative.',
  },
  {
    id: 'sidamo-cold-brew',
    name: 'Sidamo Cold Brew',
    category: 'Coffee',
    subtitle: '12-hour steep · Ethiopia',
    price: 9,
    unit: '500ml bottle',
    notes: ['Blueberry', 'Dark chocolate'],
    image:
      'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=1400&q=80',
    story: 'Slow-steeped with fresh-ground Sidamo. Served over ice or mixed with oat.',
  },
  {
    id: 'harar-espresso',
    name: 'Harar Espresso',
    category: 'Coffee',
    subtitle: 'Natural process · Ethiopia',
    price: 16,
    unit: '250g espresso grind',
    notes: ['Cocoa', 'Stone fruit', 'Spice'],
    image:
      'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1400&q=80',
    story: 'From the walled city of Harar — rich, winey, unmistakable.',
  },
  {
    id: 'kenya-aa',
    name: 'Kenya AA',
    category: 'Coffee',
    subtitle: 'Single origin · Kenya',
    price: 20,
    unit: '250g whole bean',
    notes: ['Blackcurrant', 'Tomato', 'Brown sugar'],
    image:
      'https://images.unsplash.com/photo-1559525839-d9acfd01b7d6?auto=format&fit=crop&w=1400&q=80',
    story: 'Bright, bold, and unmistakably Kenyan. Sourced from Nyeri smallholders.',
  },

  // Desserts
  {
    id: 'mandazi',
    name: 'Cardamom Mandazi',
    category: 'Desserts',
    subtitle: 'East African donut (4-pack)',
    price: 11,
    unit: '4 pieces',
    notes: ['Cardamom', 'Coconut', 'Vanilla'],
    image:
      'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1400&q=80',
    story: 'Light, airy, spiced. The way your grandmother made them on Sunday mornings.',
  },
  {
    id: 'somali-halwa',
    name: 'Somali Halwa',
    category: 'Desserts',
    subtitle: 'Cardamom · rose water',
    price: 9,
    unit: '200g tin',
    notes: ['Cardamom', 'Rose', 'Ghee'],
    image:
      'https://images.unsplash.com/photo-1568051243851-f9b136146e97?auto=format&fit=crop&w=1400&q=80',
    story: 'A slow-cooked sweet — warm, chewy, unforgettable. Best with tea.',
  },
  {
    id: 'injera-cake',
    name: 'Injera Birthday Cake',
    category: 'Desserts',
    subtitle: 'Fusion · made to order',
    price: 42,
    unit: '8-inch round, serves 10',
    notes: ['Teff', 'Cardamom buttercream', 'Honey'],
    image:
      'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=1400&q=80',
    story:
      'Our signature. Fermented teff layers with cardamom buttercream and Ethiopian honey.',
    featured: true,
  },
  {
    id: 'kashata',
    name: 'Kashata Kenya',
    category: 'Desserts',
    subtitle: 'Coconut & cardamom brittle',
    price: 6,
    unit: '150g box',
    notes: ['Coconut', 'Cardamom', 'Cane sugar'],
    image:
      'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=1400&q=80',
    story: 'Crisp, fragrant, slightly stubborn. Share if you must.',
  },
  {
    id: 'basbousa',
    name: 'Date & Tahini Basbousa',
    category: 'Desserts',
    subtitle: 'Semolina, dates, tahini',
    price: 14,
    unit: '6-piece tray',
    notes: ['Date', 'Tahini', 'Orange blossom'],
    image:
      'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=1400&q=80',
    story: 'Sticky, nutty, and drenched in orange blossom syrup.',
  },
  {
    id: 'berbere-shortbread',
    name: 'Berbere Shortbread',
    category: 'Desserts',
    subtitle: 'Spiced butter cookie',
    price: 7,
    unit: '8-piece box',
    notes: ['Berbere', 'Brown butter'],
    image:
      'https://images.unsplash.com/photo-1600080971135-84ee10ea8002?auto=format&fit=crop&w=1400&q=80',
    story: 'A whisper of heat, a little salt, a lot of butter.',
  },

  // Gift Boxes
  {
    id: 'home-box',
    name: 'Home Box',
    category: 'Gift Boxes',
    subtitle: 'Three origins · tasting flight',
    price: 42,
    unit: '3 × 100g bags',
    notes: ['Yirgacheffe', 'Kenya AA', 'Sidamo'],
    image:
      'https://images.unsplash.com/photo-1559525839-d9acfd01b7d6?auto=format&fit=crop&w=1400&q=80',
    story: 'A guided journey across the Horn. With a map card and brewing notes.',
  },
  {
    id: 'ceremony-set',
    name: 'Buna Ceremony Set',
    category: 'Gift Boxes',
    subtitle: 'Jebena · finjan × 6 · frankincense',
    price: 68,
    unit: 'gift boxed',
    notes: ['Hand-thrown clay', 'Addis-sourced'],
    image:
      'https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=1400&q=80',
    story: 'Everything you need to host a proper buna at home.',
  },
  {
    id: 'sweet-diaspora',
    name: 'Sweet Diaspora',
    category: 'Gift Boxes',
    subtitle: 'Dessert flight',
    price: 38,
    unit: '4 × small tins',
    notes: ['Halwa', 'Kashata', 'Basbousa', 'Shortbread'],
    image:
      'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=1400&q=80',
    story: 'For a housewarming, or a homesick friend.',
  },

  // Merch
  {
    id: 'finjan',
    name: 'Ceramic Finjan (pair)',
    category: 'Merch',
    subtitle: 'Hand-thrown · glazed',
    price: 24,
    unit: '2 cups',
    notes: ['Terracotta body', 'Warm glaze'],
    image:
      'https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?auto=format&fit=crop&w=1400&q=80',
    story: 'Made by Letay in east London, fired slow.',
  },
  {
    id: 'apron',
    name: 'Linen Coffee Apron',
    category: 'Merch',
    subtitle: 'Woven in Portugal',
    price: 38,
    unit: 'One size',
    notes: ['Stonewashed linen', 'Deep pockets'],
    image:
      'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1400&q=80',
    story: 'The one we wear ourselves, with our mark stitched at the hem.',
  },
  {
    id: 'tote',
    name: 'Nomad House Tote',
    category: 'Merch',
    subtitle: 'Organic cotton · screen printed',
    price: 18,
    unit: 'One size',
    notes: ['Heavy canvas', 'Cardamom-printed'],
    image:
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1400&q=80',
    story: 'Big enough for the market and a pastry or two.',
  },
];

export const CATEGORIES = ['All', 'Coffee', 'Desserts', 'Gift Boxes', 'Merch'];
