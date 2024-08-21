import ProductSection from "../components/ProductSection";
import Layout from "../layouts/Layout";


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Categories from "../layouts/Categories";

export default function SectionPage({section, image} : {section: string, image: string}){

    return (
    <Layout title={section}>
        <Categories/>
        <img src={image} alt="" />
        <div className="mx-auto min-h-screen px-[15px] lg:px-5 lg:max-w-[940px] max-w-md">
        <div className="w-full text-center lg:mt-6 mt-3 border-b border-primary-500"><h1 className="lg:text-4xl text-3xl font-black text-primary-600 mb-2">{section}</h1></div>
        <ProductSection title="Alimento" section={section}/>
            <ProductSection title="Accesorios" section={section}/>
            <ProductSection title="Cuidado e Higiene" section={section}/>
            <ProductSection title="Salud y Bienestar" section={section}/>
            {(section == "Perros" || section == "Gatos") && <>
                <ProductSection title="Ropa y Moda" section={section}/>
                <ProductSection title="Entrenamiento" section={section}/>
            </>}
        </div>
    </Layout>
    )
}