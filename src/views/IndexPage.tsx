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

export default function IndexPage() {


    return (
        <Layout title={"MarkPetPlace"}>
            <div className="w-full text-center my-3 lg:my-6">
                <h1 className="lg:text-3xl text-2xl font-black text-secondary-900 mb-5">Selecciona tu mascota 🧡</h1>
                <div className=" grid grid-cols-2 lg:grid-cols-4 *:my-1 *:lg:my-2.5">
                    <div>
                        <img className="lg:w-24 w-20 mx-auto mb-1 lg:mb-2.5 rounded-full hover:bg-primary-400 transition duration-200 bg-primary-200 p-2" src="/img/iconos/icon_perro.svg" alt="" />
                        <span className="lg:text-xl text-lg font-bold text-secondary-900">Perros</span>
                    </div>
                    <div>
                        <img className="lg:w-24 w-20 mx-auto mb-1 lg:mb-2.5 rounded-full hover:bg-primary-400 transition duration-200 bg-primary-200 p-2" src="/img/iconos/icon_gato.svg" alt="" />
                        <span className="lg:text-xl text-lg font-bold text-secondary-900">Gatos</span>
                    </div>
                    <div>
                        <img className="lg:w-24 w-20 mx-auto mb-1 lg:mb-2.5 rounded-full hover:bg-primary-400 transition duration-200 bg-primary-200 p-2" src="/img/iconos/icon_pez.svg" alt="" />
                        <span className="lg:text-xl text-lg font-bold text-secondary-900">Peces</span>
                    </div>
                    <div>
                        <img className="lg:w-24 w-20 mx-auto mb-1 lg:mb-2.5 rounded-full hover:bg-primary-400 transition duration-200 bg-primary-200 p-2" src="/img/iconos/icon_conejo.svg" alt="" />
                        <span className="lg:text-xl text-lg font-bold text-secondary-900">Conejos</span>
                    </div>
                </div>
            </div>
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
                <h1 className="lg:text-3xl text-2xl font-black text-primary-600 mb-2">Mercadito</h1>
            </div>
            <ProductSection title="Perros"/>
            <ProductSection title="Gatos"/>
            <ProductSection title="Peces"/>
            <ProductSection title="Conejos"/>
        </Layout>
    )
}