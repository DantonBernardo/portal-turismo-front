import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { places } from '../constants/places';
import PlaceCard from './PlaceCard';
import { useInView } from '../hooks/use-in-view';

export default function Destaques() {
  const { ref, isInView } = useInView<HTMLDivElement>();
  const destaques = places.slice(0, 3);

  return (
    <section className="px-4 sm:px-8 md:px-16 py-14 sm:py-20 bg-background">
      <div
        ref={ref}
        className={`flex items-end justify-between mb-8 transition-all duration-500 motion-reduce:transition-none
          ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}
      >
        <div>
          <p className="text-xs font-bold tracking-widest text-primary-600 uppercase mb-2">
            Destaques
          </p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-text-primary">
            Não perca ao visitar Guarapuava
          </h2>
        </div>
        <Link
          to="/explorar"
          className="hidden sm:flex items-center gap-1 text-sm font-semibold text-primary-700 hover:text-primary-800 hover:gap-2 transition-all shrink-0"
        >
          Ver todos <ArrowRight size={16} />
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {destaques.map((place, index) => (
          <PlaceCard key={place.slug} place={place} index={index} />
        ))}
      </div>

      <Link
        to="/explorar"
        className="sm:hidden flex items-center justify-center gap-1 text-sm font-semibold text-primary-700 mt-6"
      >
        Ver todos <ArrowRight size={16} />
      </Link>
    </section>
  );
}