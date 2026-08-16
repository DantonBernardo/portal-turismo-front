import { Star, MapPin, ImageIcon } from 'lucide-react';
import type { Place } from '../constants/places';
import { useInView } from '../hooks/use-in-view';

type Props = {
  place: Place;
  index?: number;
};

export default function PlaceCard({ place, index = 0 }: Props) {
  const { ref, isInView } = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      style={{ transitionDelay: isInView ? `${index * 80}ms` : '0ms' }}
      className={`group bg-surface rounded-lg overflow-hidden border border-border shadow-sm
        hover:shadow-lg hover:-translate-y-1 transition-all duration-300 motion-reduce:transition-none
        ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
        motion-reduce:opacity-100 motion-reduce:translate-y-0`}
    >
      {/* Imagem */}
      <div className="relative h-44 sm:h-48 overflow-hidden bg-gradient-to-br from-primary-100 to-primary-200">
        {place.image ? (
          <img
            src={place.image}
            alt={place.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 motion-reduce:transition-none"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-primary-600/40">
            <ImageIcon size={32} />
          </div>
        )}

        <div className="absolute top-3 left-3 flex gap-1.5">
          {place.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 rounded-md bg-white/90 backdrop-blur-sm text-[11px] font-medium text-text-primary"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-1 rounded-md bg-white/90 backdrop-blur-sm text-[11px] font-semibold text-text-primary">
          <Star size={12} className="fill-amber-400 text-amber-400" />
          {place.rating.toFixed(1)}
        </div>
      </div>

      {/* Conteúdo */}
      <div className="p-4">
        <h3 className="text-base font-bold text-text-primary mb-1">
          {place.title}
        </h3>
        <p className="text-sm text-text-muted mb-3 leading-snug">
          {place.description}
        </p>
        <div className="flex items-center gap-1.5 text-xs text-text-muted">
          <MapPin size={13} className="shrink-0 text-primary-600" />
          <span className="truncate">{place.location}</span>
        </div>
      </div>
    </div>
  );
}