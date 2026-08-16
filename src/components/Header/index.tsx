import { useMediaQuery } from '../../hooks/use-media-query';
import Desktop from './desktop';
import Mobile from './mobile';

const DESKTOP_BREAKPOINT = '(min-width: 1040px)'; // md do Tailwind

export default function Header() {
  const isDesktop = useMediaQuery(DESKTOP_BREAKPOINT);

  return <div>{isDesktop ? <Desktop /> : <Mobile />}</div>;
}