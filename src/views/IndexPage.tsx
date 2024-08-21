import Layout from "../layouts/Layout.js";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import ProductSection from "../components/ProductSection.tsx";
import Categories from "../layouts/Categories.tsx";

export default function IndexPage() {


    return (
        <Layout title={"MarkPetPlace"}>
            <div className="mx-auto min-h-screen px-[15px] lg:px-5 lg:max-w-[940px] max-w-md">
            <Categories title={"Selecciona tu mascota 🧡"}/>
            <div className="text-secondary-900 lg:text-white">
                <Swiper
                    centeredSlides={true}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    loop={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="w-full lg:relative lg:flex justify-center">
                            <img src="/img/gato-banner.jpg" alt="placeholder" />
                            <div className="lg:absolute lg:z-20 font-semibold lg:bottom-10 px-2.5 pt-2.5 pb-9 lg:p-0 bg-primary-200 lg:bg-transparent">
                                <p className="lg:text-xl text-lg mb-2.5 line-clamp-2">¿Qué esperar en los primeros tres meses después de adoptar?</p>
                                <div className="bg-primary-400 py-1 rounded-lg px-2 w-28 text-center mx-auto text-white cursor-pointer">Ver más</div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="w-full lg:relative lg:flex justify-center">
                            <img src="/img/perro-banner.jpg" alt="placeholder" />
                            <div className="lg:absolute lg:z-20 font-semibold lg:bottom-10 px-2.5 pt-2.5 pb-9 lg:p-0 bg-primary-200 lg:bg-transparent">
                                <p className="lg:text-xl text-lg mb-2.5 line-clamp-2">Consejos para la seguridad de las mascotas en la casa y en el carro</p>
                                <div className="bg-primary-400 py-1 rounded-lg px-2 w-28 text-center mx-auto text-white cursor-pointer">Ver más</div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="w-full lg:relative lg:flex justify-center">
                            <img src="/img/nemo-banner.jpg" alt="placeholder" />
                            <div className="lg:absolute lg:z-20 font-semibold lg:bottom-10 px-2.5 pt-2.5 pb-9 lg:p-0 bg-primary-200 lg:bg-transparent">
                                <p className="lg:text-xl text-lg mb-2.5 line-clamp-2">Te decimos porque debes elaborar un presupuesto para tu mascota</p>
                                <div className="bg-primary-400 py-1 rounded-lg px-2 w-28 text-center mx-auto text-white cursor-pointer">Ver más</div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="w-full lg:relative lg:flex justify-center">
                            <img src="/img/conejo-banner.jpg" alt="placeholder" />
                            <div className="lg:absolute lg:z-20 font-semibold lg:bottom-10 px-2.5 pt-2.5 pb-9 lg:p-0 bg-primary-200 lg:bg-transparent">
                                <p className="lg:text-xl text-lg mb-2.5 line-clamp-2">Riesgos para mascotas, tanto para la vida cotidiana, viajes y decisiones médicas</p>
                                <div className="bg-primary-400 py-1 rounded-lg px-2 w-28 text-center mx-auto text-white cursor-pointer">Ver más</div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className="w-full text-center lg:mt-6 mt-3 border-b border-primary-500">
                <h1 className="lg:text-4xl text-3xl font-black text-primary-600 mb-2">Mercadito</h1>
            </div>
            <ProductSection title="Perros"/>
            <ProductSection title="Gatos"/>
            <ProductSection title="Peces"/>
            <ProductSection title="Conejos"/>
            </div>
        </Layout>
    )
}