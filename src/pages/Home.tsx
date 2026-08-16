import Header from '../components/Header';
import Hero from '../components/Hero';
import Destaques from '../components/Destaques';
import Categorias from '../components/Categorias';
import LugaresHistoricos from '../components/LugaresHistoricos';
import Depoimentos from '../components/Depoimentos';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

export default function Home(){
    return(
        <div>
            <Header />            
            <Hero />            
            <Destaques />            
            <Categorias />            
            <LugaresHistoricos />            
            <Depoimentos />            
            <CTA />            
            <Footer />            
        </div>
    );
}