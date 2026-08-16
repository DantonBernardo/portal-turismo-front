import { Leaf, Droplet, TreePine, Landmark, Palette, Church, UtensilsCrossed, Wheat } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useInView } from '../hooks/use-in-view';

const categorias = [
  { icon: Leaf, label: 'Natureza', href: '/explorar?categoria=natureza' },
  { icon: Droplet, label: 'Cachoeiras', href: '/explorar?categoria=cachoeiras' },
  { icon: TreePine, label: 'Parques', href: '/explorar?categoria=parques' },
  { icon: Landmark, label: 'Histórico', href: '/explorar?categoria=historico' },
  { icon: Palette, label: 'Cultural', href: '/explorar?categoria=cultural' },
  { icon: Church, label: 'Religioso', href: '/explorar?categoria=religioso' },
  { icon: UtensilsCrossed, label: 'Gastronomia', href: '/explorar?categoria=gastronomia' },
  { icon: Wheat, label: 'Rural', href: '/explorar?categoria=rural' },
];

export default function Categorias() {
  const { ref, isInView } = useInView<HTMLDivElement>();

  return (
    <section className="px-4 sm:px-8 md:px-16 py-14 sm:py-20 bg-primary-50">
      <div
        ref={ref}
        className={`mb-8 transition-all duration-500 motion-reduce:transition-none
          ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}
      >
        <p className="text-xs font-bold tracking-widest text-primary-600 uppercase mb-2">
          Categorias
        </p>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-text-primary">
          Explore por tipo de experiência
        </h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
        {categorias.map(({ icon: Icon, label, href }, index) => {
          const { ref: cardRef, isInView: cardInView } = useInView<HTMLAnchorElement>();
          return (
            <Link
              key={label}
              to={href}
              ref={cardRef}
              style={{ transitionDelay: cardInView ? `${index * 60}ms` : '0ms' }}
              className={`group flex items-center gap-3 p-4 rounded-lg bg-surface border border-border
                hover:border-primary-300 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 motion-reduce:transition-none
                ${cardInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}
                motion-reduce:opacity-100 motion-reduce:translate-y-0`}
            >
              <div className="p-2 rounded-md bg-primary-100 text-primary-700 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                <Icon size={18} />
              </div>
              <div>
                <p className="text-sm font-semibold text-text-primary">{label}</p>
                <p className="text-xs text-text-muted">Ver pontos</p>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}