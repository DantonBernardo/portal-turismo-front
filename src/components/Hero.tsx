import { useState } from 'react';
import { Sparkles, Search, Map, MapPin, Droplet, Star, Users } from 'lucide-react';
import Background from '../assets/images/Home/hero-background.png';
import { Link } from 'react-router-dom';

const stats = [
  { icon: MapPin, label: 'Pontos turísticos', value: '80+' },
  { icon: Droplet, label: 'Cachoeiras', value: '12' },
  { icon: Star, label: 'Nota média', value: '4.8' },
  { icon: Users, label: 'Visitantes/ano', value: '180k' },
];

export default function Hero() {
  const [query, setQuery] = useState('');

  return (
    <section
      className="relative flex items-center min-h-screen min-h-[100dvh] overflow-hidden"
      aria-label="Apresentação do Portal do Turismo de Guarapuava"
    >
      {/* Background */}
      <img
        src={Background}
        alt=""
        role="presentation"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />

      <main className="relative z-10 w-full px-4 sm:px-8 md:px-16 pb-12 sm:pb-16 md:pb-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-white/95 backdrop-blur-sm text-xs sm:text-sm font-medium text-primary-800 mb-4 sm:mb-6">
            <Sparkles size={14} className="text-primary-600 shrink-0" />
            Portal Oficial · Prefeitura de Guarapuava
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight mb-3 sm:mb-4">
            Descubra Guarapuava — natureza, história e cultura em um só lugar.
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-white/85 mb-6 sm:mb-8 max-w-2xl">
            Explore parques, cachoeiras e patrimônios culturais no coração dos
            Campos Gerais do Paraná.
          </p>

          {/* Busca */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              // TODO: plugar navegação/filtro de busca aqui
            }}
            className="flex flex-col gap-2 bg-white rounded-lg p-2 mb-8 sm:mb-10 max-w-2xl shadow-lg"
          >
            <label htmlFor="hero-search" className="sr-only">
              Buscar pontos turísticos
            </label>
            <div className="flex items-center gap-2 flex-1 px-3">
              <Search size={18} className="text-text-muted shrink-0" />
              <input
                id="hero-search"
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Ex.: cachoeira, parque, museu..."
                className="w-full py-2.5 text-sm text-text-primary placeholder:text-text-muted outline-none bg-transparent"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-2">
              <button
                type="submit"
                className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-md bg-primary-700 text-white text-sm font-semibold hover:bg-primary-800 active:scale-[0.98] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2 sm:flex-1 cursor-pointer"
              >
                <Search size={16} />
                Buscar
              </button>
              <Link
                to="/mapa"
                className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-md bg-surface border border-border text-text-primary text-sm font-semibold hover:bg-surface-alt active:scale-[0.98] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2 sm:flex-1 cursor-pointer"
                >
                <Map size={16} />
                Explorar Mapa
                </Link>
            </div>
          </form>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 max-w-2xl">
            {stats.map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="bg-white/95 backdrop-blur-sm rounded-lg px-3 sm:px-4 py-2.5 sm:py-3"
              >
                <Icon size={16} className="text-primary-600 mb-1 sm:mb-1.5" />
                <p className="text-[11px] sm:text-xs text-text-muted leading-tight">{label}</p>
                <p className="text-base sm:text-lg font-bold text-text-primary">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </section>
  );
}