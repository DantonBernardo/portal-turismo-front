import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { navLinks } from '../../constants/nav-links';
import LogoGuaraHub from '../../assets/images/Home/guarahub-logo.png';
import LogoSECTI from '../../assets/images/Home/inovacao-logo.png';

export default function Mobile() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="relative bg-surface border-b border-border overflow-hidden">
      <div className="flex items-center justify-between px-4 py-3">
        {/* Logo + título */}
        <div className="flex items-center gap-2 min-w-0">
          <img src={LogoGuaraHub} alt="Logo Espaço GuaraHub" className="h-9 shrink-0" />
          <img
            src={LogoSECTI}
            alt="Logo Secretaria de Ciência, Tecnologia e Inovação - Guarapuava"
            className="h-9 shrink-0"
          />
          <div className="leading-tight min-w-0">
            <h1 className="text-[13px] font-bold text-text-primary truncate">
              Portal do Turismo
            </h1>
            <h2 className="text-[10px] text-text-muted">Guarapuava · 2026</h2>
          </div>
        </div>

        {/* Botão hambúrguer — morph pra X */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={isOpen}
          className="relative p-2 rounded-sm text-text-secondary hover:bg-surface-alt transition-colors shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600"
        >
          <span className="relative block w-5.5 h-5.5">
            <Menu
              size={22}
              className={`absolute inset-0 transition-all duration-200 motion-reduce:transition-none
                ${isOpen ? 'opacity-0 rotate-90 scale-75' : 'opacity-100 rotate-0 scale-100'}`}
            />
            <X
              size={22}
              className={`absolute inset-0 transition-all duration-200 motion-reduce:transition-none
                ${isOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-75'}`}
            />
          </span>
        </button>
      </div>

      {/* Drawer — slide + fade, altura animada via grid trick */}
      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none
          ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
      >
        <div className="overflow-hidden">
          <div
            className={`border-t border-border transition-all duration-300 motion-reduce:transition-none
              ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}`}
          >
            <nav className="flex flex-col px-4 py-2">
              {navLinks.map((link, index) => {
                const isActive = location.pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={closeMenu}
                    aria-current={isActive ? 'page' : undefined}
                    style={{
                      transitionDelay: isOpen ? `${index * 40}ms` : '0ms',
                    }}
                    className={`flex items-center gap-2 px-3 py-3 rounded-sm text-sm font-medium
                      transition-all duration-200 motion-reduce:transition-none motion-reduce:translate-x-0!
                      ${isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'}
                      ${
                        isActive
                          ? 'bg-primary-100 text-primary-800'
                          : 'text-text-secondary hover:bg-surface-alt active:scale-[0.98]'
                      }`}
                  >
                    {link.icon && <link.icon size={16} />}
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            <div className="flex flex-col gap-2 px-4 pb-4 pt-2 border-t border-border">
              <button
                type="button"
                className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors py-2 text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 rounded-sm"
              >
                Entrar
              </button>
              <button
                type="button"
                className="px-4 py-2 rounded-sm bg-primary-600 text-white text-sm font-semibold hover:bg-primary-700 active:scale-[0.97] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2"
              >
                Cadastrar
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}