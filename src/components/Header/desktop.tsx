import { Link, useLocation } from 'react-router-dom';
import { navLinks } from '../../constants/nav-links';
import LogoGuaraHub from '../../assets/images/Home/guarahub-logo.png';
import LogoSECTI from '../../assets/images/Home/inovacao-logo.png';

export default function Desktop() {
  const location = useLocation();

  return (
    <header className="flex items-center justify-between px-12 py-3 bg-surface border-b border-border">
      {/* Logo + título */}
      <div className="flex items-center gap-3">
        <img src={LogoGuaraHub} alt="Logo Espaço GuaraHub" className="h-12" />
        <div className="w-px h-8 bg-border" />
        <img
          src={LogoSECTI}
          alt="Logo Secretaria de Ciência, Tecnologia e Inovação - Guarapuava"
          className="h-12"
        />
        <div className="w-px h-8 bg-border" />
        <div className="leading-tight ml-1">
          <h1 className="text-[15px] font-bold text-text-primary">
            Portal do Turismo
          </h1>
          <h2 className="text-xs text-text-muted">Guarapuava · 2026</h2>
        </div>
      </div>

      {/* Navegação */}
      <nav className="flex items-center gap-1">
        {navLinks.map((link) => {
          const isActive = location.pathname === link.href;
          return (
            <Link
              key={link.href}
              to={link.href}
              aria-current={isActive ? 'page' : undefined}
              className={`group relative flex items-center gap-2 px-4 py-2 rounded-sm text-sm font-medium
                transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600
                ${
                  isActive
                    ? 'text-primary-800'
                    : 'text-text-secondary hover:text-text-primary'
                }`}
            >
              {link.icon && <link.icon size={16} />}
              {link.label}
              <span
                className={`absolute left-4 right-4 -bottom-px h-0.5 rounded-full bg-primary-600
                  origin-center transition-transform duration-200
                  ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}
              />
            </Link>
          );
        })}
      </nav>

      {/* Ações */}
      <div className="flex items-center gap-3 pl-4">
        <button className="text-sm font-medium cursor-pointer text-text-secondary hover:text-text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 rounded-sm">
          Entrar
        </button>
        <button className="px-4 py-2 rounded-sm cursor-pointer bg-primary-600 text-white text-sm font-semibold hover:bg-primary-700 active:scale-[0.97] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2">
          Cadastrar
        </button>
      </div>
    </header>
  );
}