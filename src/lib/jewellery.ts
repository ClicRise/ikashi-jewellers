import one from '@/assets/1.png';
import two from '@/assets/2.png';
import three from '@/assets/3.png';
import four from '@/assets/4.png';
import five from '@/assets/5.png';
import six from '@/assets/6.png';
import seven from '@/assets/7.png';
import eight from '@/assets/8.png';
import nine from '@/assets/9.png';
import ten from '@/assets/10.png';

export const whatsapp = (message = 'Hello, I would like to enquire about Ikashi Jewels') => `https://wa.me/919989623276?text=${encodeURIComponent(message)}`;
export const instagram = 'https://www.instagram.com/ikashijewels/';
export const categories = ['All Jewellery', 'Necklaces & Sets', 'Earrings & Jhumkas', 'Bangles & Bracelets', 'Bridal Couture'] as const;
export const products = [
  { id: 'emerald-heirloom', name: 'The Emerald Heirloom Set', category: 'Necklaces & Sets', image: two, material: 'Green gemstones · Diamond detailing', description: 'A long, luminous necklace with a striking green centrepiece and matching earrings. An elegant expression of occasion dressing.' },
  { id: 'pearl-gajra', name: 'The Gajra Pearl Bracelet', category: 'Bangles & Bracelets', image: one, material: 'Pearl detailing · Gold-toned elephant motifs', description: 'Sculptural elephant motifs meet lustrous pearls in a piece inspired by the richness of Indian heritage.' },
  { id: 'pearl-jhumkas', name: 'The Chandrika Pearl Jhumkas', category: 'Earrings & Jhumkas', image: three, material: 'Pearl detailing · Openwork gold setting', description: 'Intricate latticework and delicate pearl drops bring graceful movement to a timeless pair of jhumkas.' },
  { id: 'ruby-jhumkas', name: 'The Gulabi Jhumkas', category: 'Earrings & Jhumkas', image: four, material: 'Pink gemstones · Pearl drops · Diamond detailing', description: 'Vivid pink accents and generous pearl drops lend a joyful, celebratory spirit to these ornate earrings.' },
  { id: 'emerald-drops', name: 'The Muse Emerald Drops', category: 'Earrings & Jhumkas', image: five, material: 'Green gemstone drops · Diamond detailing', description: 'Rich green teardrops framed by a delicate halo of sparkle. Understated grandeur, made to be remembered.' },
  { id: 'ruby-bracelet', name: 'The Rosette Tennis Bracelet', category: 'Bangles & Bracelets', image: six, material: 'Pink gemstones · Diamond detailing', description: 'A continuous line of colour and brilliance, designed to add a refined finishing touch to every occasion.' },
  { id: 'diamond-lace', name: 'The Diamond Lace Set', category: 'Necklaces & Sets', image: seven, material: 'Diamond detailing · Ornate necklace & earrings', description: 'An intricate lace-like composition with flowing gemstone drops and matching statement earrings.' },
  { id: 'golden-muse', name: 'The Golden Muse Necklace Set', category: 'Necklaces & Sets', image: eight, material: 'Yellow sapphire / topaz · Diamond detailing', description: 'Warm yellow gemstones are woven into a cascade of floral diamond detailing. A radiant necklace set for your most meaningful celebrations. Exact yellow gemstone identity is available on enquiry.' },
  { id: 'royal-bridal', name: 'The Rajsi Bridal Choker', category: 'Bridal Couture', image: nine, material: 'Green accents · Pearl drops · Heritage gold setting', description: 'An opulent statement choker with heritage-inspired craftsmanship, intricate motifs and cascading pearl details.' },
  { id: 'diamond-rain', name: 'The Diamond Rain Pendant Set', category: 'Necklaces & Sets', image: ten, material: 'Diamond detailing · Tassel pendant & earrings', description: 'A delicate necklace with a cascading pendant and matching earrings. Modern lines meet timeless brilliance.' },
] as const;
export function pageHead(title: string, description: string) {
  return { meta: [{ title: `${title} | Ikashi Jewels` }, { name: 'description', content: description }, { property: 'og:title', content: `${title} | Ikashi Jewels` }, { property: 'og:description', content: description }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' }] };
}
