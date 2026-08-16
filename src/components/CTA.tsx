import { Camera, Compass } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useInView } from '../hooks/use-in-view';

export default function CTA() {
  const { ref, isInView } = useInView<HTMLDivElement>();

  return (
    <section className="px-4 sm:px-8 md:px-16 py-14 sm:py-20 bg-background">
      <div
        ref={ref}
        className={`relative overflow-hidden rounded-2xl px-6 sm:px-10 py-10 sm:py-14
          bg-gradient-to-br from-primary-800 via-primary-700 to-teal-700
          transition-all duration-500 motion-reduce:transition-none
          ${isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-[0.98]'}`}
      >
        <div className="relative z-10 max-w-xl">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
            Conhece um lugar especial em Guarapuava?
          </h2>
          <p className="text-sm sm:text-base text-white/85 mb-6">
            Contribua com o portal enviando novos pontos turísticos e fotos —
            nossa equipe avalia cada envio.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              to="/enviar-ponto"
              className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-md bg-white text-primary-800 text-sm font-semibold hover:bg-white/90 active:scale-[0.98] transition-all"
            >
              <Camera size={16} />
              Enviar ponto turístico
            </Link>
            <Link
              to="/explorar"
              className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-md border border-white/40 text-white text-sm font-semibold hover:bg-white/10 active:scale-[0.98] transition-all"
            >
              <Compass size={16} />
              Explorar todos os pontos
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}