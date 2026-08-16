import { places } from '../constants/places';
import PlaceCard from './PlaceCard';
import { useInView } from '../hooks/use-in-view';

export default function LugaresHistoricos() {
  const { ref, isInView } = useInView<HTMLDivElement>();

  return (
    <section className="px-4 sm:px-8 md:px-16 py-14 sm:py-20 bg-background">
      <div
        ref={ref}
        className={`mb-8 transition-all duration-500 motion-reduce:transition-none
          ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}
      >
        <p className="text-xs font-bold tracking-widest text-primary-600 uppercase mb-2">
          Pontos turísticos
        </p>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-text-primary">
          Lugares que contam a nossa história
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {places.map((place, index) => (
          <PlaceCard key={place.slug} place={place} index={index % 3} />
        ))}
      </div>
    </section>
  );
}