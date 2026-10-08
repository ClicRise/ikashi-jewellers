import { Link } from '@tanstack/react-router';
import { ArrowUpRight, MessageCircle, Phone, Instagram, Menu, X, Gem } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { products, whatsapp, instagram } from '@/lib/jewellery';
import logo from '@/assets/Logo.jpg';

const navigation = [{ to: '/', label: 'Home' }, { to: '/collections', label: 'Collections' }, { to: '/about', label: 'Our Story' }, { to: '/consultation', label: 'Bespoke & Bridal' }, { to: '/contact', label: 'Contact' }] as const;
export function ContactLinks() {
  return <><a href={whatsapp()} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp" title="Chat on WhatsApp"><MessageCircle size={18} /></a><a href="tel:+919989623276" aria-label="Call Ikashi Jewels" title="Call Ikashi Jewels"><Phone size={17} /></a><a href={instagram} target="_blank" rel="noreferrer" aria-label="Ikashi on Instagram" title="Instagram"><Instagram size={18} /></a></>;
}
export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return <><div className="announcement">NATURAL DIAMONDS. TIMELESS STORIES. <span>HYDERABAD & MUMBAI</span></div><header className="site-header"><Link to="/" className="brand"><img src={logo} alt="Ikashi Jewels logo" /><span>ikashi<small>JEWELS</small></span></Link><nav className="desktop-nav" aria-label="Main navigation">{navigation.map(item => <Link key={item.to} to={item.to} activeOptions={{ exact: true }} activeProps={{ className: 'nav-active' }}>{item.label}</Link>)}</nav><div className="header-contact"><ContactLinks /></div><Button variant="ghost" size="icon" className="mobile-menu" onClick={() => setOpen(!open)} aria-label={open ? 'Close menu' : 'Open menu'}>{open ? <X /> : <Menu />}</Button></header>{open && <nav className="mobile-nav" aria-label="Mobile navigation">{navigation.map(item => <Link key={item.to} to={item.to} onClick={() => setOpen(false)}>{item.label}</Link>)}</nav>}</>;
}
export function SiteFooter() {
  return <><footer className="site-footer"><div className="footer-main"><div><Link to="/" className="footer-brand">ikashi <span>JEWELS</span></Link><p className="serif">For the Muse in You</p><p>Natural diamonds. Fine gold.<br />Jewellery that becomes your story.</p></div><div><h3>EXPLORE IKASHI</h3>{navigation.slice(1).map(item => <Link key={item.to} to={item.to}>{item.label}</Link>)}</div><div><h3>LET’S CONNECT</h3><a href="tel:+919989623276">+91 99896 23276</a><p>Hyderabad & Mumbai</p><div className="contact-icons"><ContactLinks /></div></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Ikashi Jewels. All rights reserved.</span><span>AUTHENTIC CRAFTSMANSHIP. TRUSTED PURITY.</span></div></footer><aside className="sticky-contact" aria-label="Quick contact"><a href={whatsapp()} target="_blank" rel="noreferrer"><MessageCircle size={18}/><span>WhatsApp</span></a><a href="tel:+919989623276"><Phone size={17}/><span>Call us</span></a><a href={instagram} target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={18}/></a></aside></>;
}
export function EnquiryButton({ name }: { name: string }) {
  return <Button asChild variant="outline" className="enquiry-button"><a href={whatsapp(`Hello, I would like to know the price of ${name}`)} target="_blank" rel="noreferrer"><MessageCircle size={16}/>Ask Price on WhatsApp<ArrowUpRight size={15}/></a></Button>;
}
export function ProductCard({ product }: { product: typeof products[number] }) {
  return <article className="product-card"><Link to="/collections/$productId" params={{ productId: product.id }} className="product-image"><img src={product.image} alt={product.name} loading="lazy"/><span className="image-link"><ArrowUpRight size={20}/></span></Link><div className="product-info"><p className="eyebrow">{product.category}</p><Link to="/collections/$productId" params={{ productId: product.id }}><h3>{product.name}</h3></Link><p className="product-material">{product.material}</p><EnquiryButton name={product.name}/></div></article>;
}
export function TrustStrip() {
  return <div className="trust-strip"><span><Gem size={22}/>GIA & IGI Certified Diamonds</span><span>Natural Diamonds & Fine Gold</span><span>Authentic Craftsmanship</span><span>Hyderabad & Mumbai</span></div>;
}
export function ConsultationBand() {
  return <section className="consultation-band"><div><p className="eyebrow">AS UNIQUE AS YOU</p><h2>A jewel. A memory. <em>A lifetime.</em></h2><p>Let us bring your vision to life, one exquisite detail at a time.</p></div><Button asChild className="gold-button"><Link to="/consultation">Begin Your Bespoke Journey <ArrowUpRight/></Link></Button></section>;
}
