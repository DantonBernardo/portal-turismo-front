import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';
import { FacebookIcon, InstagramIcon, YoutubeIcon } from './icons/SocialIcons';

const institucional = [
    { label: 'Sobre o portal', href: '/sobre' },
    { label: 'Explorar pontos', href: '/explorar' },
    { label: 'Mapa turístico', href: '/mapa' },
    { label: 'Enviar ponto turístico', href: '/enviar-ponto' },
];

const suporte = [
    { label: 'Acessibilidade', href: '/acessibilidade' },
    { label: 'Perguntas frequentes', href: '/faq' },
    { label: 'Termos de uso', href: '/termos' },
    { label: 'Política de privacidade', href: '/privacidade' },
];

const social = [
  { Icon: FacebookIcon, href: 'https://facebook.com', label: 'Facebook' },
  { Icon: InstagramIcon, href: 'https://instagram.com', label: 'Instagram' },
  { Icon: YoutubeIcon, href: 'https://youtube.com', label: 'YouTube' },
];

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-border">
      <div className="px-4 sm:px-8 md:px-16 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {/* Coluna 1 */}
          <div>
            <h3 className="text-sm font-bold text-text-primary mb-2">
              Portal do Turismo · Guarapuava 2026
            </h3>
            <p className="text-xs text-text-muted leading-relaxed mb-4">
              Sistema desenvolvido pela{' '}
              <strong className="text-text-secondary">
                Secretaria de Ciência, Tecnologia e Inovação de Guarapuava
              </strong>{' '}
              em parceria com a{' '}
              <strong className="text-text-secondary">Secretaria de Turismo</strong>.
            </p>
            <div className="flex gap-2">
              {/* TODO: trocar pelos brasões oficiais reais */}
              <div className="w-9 h-9 rounded-full bg-primary-100 border border-border flex items-center justify-center text-[10px] font-bold text-primary-700">
                PM
              </div>
              <div className="w-9 h-9 rounded-full bg-primary-100 border border-border flex items-center justify-center text-[10px] font-bold text-primary-700">
                SC
              </div>
            </div>
          </div>

          {/* Coluna 2 */}
          <div>
            <h4 className="text-sm font-bold text-text-primary mb-3">Institucional</h4>
            <ul className="space-y-2">
              {institucional.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.href}
                    className="text-xs text-text-muted hover:text-primary-700 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 3 */}
          <div>
            <h4 className="text-sm font-bold text-text-primary mb-3">Suporte</h4>
            <ul className="space-y-2">
              {suporte.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.href}
                    className="text-xs text-text-muted hover:text-primary-700 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 4 */}
          <div>
            <h4 className="text-sm font-bold text-text-primary mb-3">Contato</h4>
            <ul className="space-y-3 mb-4">
              <li className="flex items-start gap-2 text-xs text-text-muted">
                <MapPin size={14} className="shrink-0 mt-0.5 text-primary-600" />
                Rua Brigadeiro Rocha, 2777 — Centro, Guarapuava/PR
              </li>
              <li className="flex items-center gap-2 text-xs text-text-muted">
                <Phone size={14} className="shrink-0 text-primary-600" />
                (42) 3623-8000
              </li>
              <li className="flex items-center gap-2 text-xs text-text-muted">
                <Mail size={14} className="shrink-0 text-primary-600" />
                turismo@guarapuava.pr.gov.br
              </li>
            </ul>
            <div className="flex gap-2">
              {social.map(({ Icon, href, label }) => (
            <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="p-2 rounded-md bg-surface-alt text-text-secondary hover:bg-primary-600 hover:text-white transition-colors"
            >
                <Icon size={14} />
            </a>
            ))}
            </div>
          </div>
        </div>
      </div>

      {/* Barra inferior */}
      <div className="border-t border-border px-4 sm:px-8 md:px-16 py-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-text-muted">
          <p>© 2026 Prefeitura Municipal de Guarapuava — Todos os direitos reservados.</p>
          <p>Secretaria de Ciência, Tecnologia e Inovação</p>
        </div>
      </div>
    </footer>
  );
}