import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ProductCard, ConsultationBand } from '@/components/jewellery';
import { categories, products, pageHead } from '@/lib/jewellery';
export const Route = createFileRoute('/collections/')({ head: () => pageHead('The Collections', 'Discover Ikashi necklaces, earrings, bangles and bridal jewellery. Enquire about your favourite piece on WhatsApp.'), component: Collections });
function Collections() {
  const [category, setCategory] = useState<string>('All Jewellery');
  const visible = products.filter(p => category === 'All Jewellery' || p.category === category);
  return <><section className="page-heading"><p className="eyebrow">THE IKASHI EDIT</p><h1>Objects of <em>affection.</em></h1><p>Extraordinary pieces for the everyday muse and her unforgettable moments.</p></section><section className="section-wrap collection-page"><div className="category-filters" aria-label="Collection categories">{categories.map(c => <Button key={c} variant="ghost" className={category === c ? 'filter-active' : ''} onClick={() => setCategory(c)}>{c}</Button>)}</div><div className="collection-count">{visible.length} curated pieces <span>Prices available on enquiry</span></div><div className="product-grid">{visible.map(p => <ProductCard key={p.id} product={p}/>)}</div><p className="spec-note">GIA / IGI certification, gold purity, gemstone identity and carat weights are confirmed individually on enquiry.</p></section><ConsultationBand/></>;
}