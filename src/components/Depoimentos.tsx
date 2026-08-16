import { Star } from 'lucide-react';
import { useInView } from '../hooks/use-in-view';

const depoimentos = [
  {
    quote: 'Guarapuava é um tesouro escondido do Paraná! O Parque das Araucárias é simplesmente encantador.',
    name: 'Marina Souza',
    origin: 'Curitiba/PR · sobre Parque das Araucárias',
  },
  {
    quote: 'A cachoeira da Santa Clara vale cada minuto de viagem. Estrutura ótima e paisagem inesquecível.',
    name: 'Carlos Ribeiro',
    origin: 'São Paulo/SP · sobre Cachoeira da Santa Clara',
  },
  {
    quote: 'Adoro caminhar na Lagoa todo fim de tarde. Cartão-postal da nossa cidade.',
    name: 'Ana Beatriz',
    origin: 'Guarapuava/PR · sobre Lagoa das Lágrimas',
  },
];

export default function Depoimentos() {
  const { ref, isInView } = useInView<HTMLDivElement>();

  return (
    <section className="px-4 sm:px-8 md:px-16 py-14 sm:py-20 bg-primary-50">
      <div
        ref={ref}
        className={`mb-8 transition-all duration-500 motion-reduce:transition-none
          ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}
      >
        <p className="text-xs font-bold tracking-widest text-primary-600 uppercase mb-2">
          Depoimentos
        </p>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-text-primary">
          O que dizem os visitantes
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6">
        {depoimentos.map((dep, index) => {
          const { ref: cardRef, isInView: cardInView } = useInView<HTMLDivElement>();
          return (
            <div
              key={dep.name}
              ref={cardRef}
              style={{ transitionDelay: cardInView ? `${index * 100}ms` : '0ms' }}
              className={`bg-surface rounded-lg border border-border p-5 sm:p-6
                transition-all duration-500 motion-reduce:transition-none
                ${cardInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
                motion-reduce:opacity-100 motion-reduce:translate-y-0`}
            >
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-sm text-text-primary leading-relaxed mb-4">
                "{dep.quote}"
              </p>
              <p className="text-sm font-bold text-text-primary">{dep.name}</p>
              <p className="text-xs text-text-muted">{dep.origin}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}