import Layout from "../components/Layout.js";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { getProducts, Product } from "../data/data.ts";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";

export default function IndexPage() {

    const [products, setProducts] = useState<Product[]>();

    const getProductsData = async () => {
        const productsAPI: Product[] | undefined = await getProducts().then((res) => res);
        setProducts(productsAPI)
        console.log(products)
    }

    useEffect(() => {
        getProductsData();
    }, [])
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
            <div className="w-full text-center my-2">
                <h1 className="lg:text-3xl text-2xl font-bold text-primary-600 mb-2">Perros</h1>
                <p className="mb-6 text-lg">Productos destacados</p>

                <Swiper
                    slidesPerView={2}
                    spaceBetween={10}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 20,
                        },
                    }}
                    className="mySwiper"
                >
                    {products?.map(p => <>
                        <SwiperSlide>
                        <a href="/">
                        <div className=" border-primary-400 border overflow-hidden rounded-2xl bg-white text-black">
                            <div className="overflow-hidden">
                            <img className="hover:scale-125 duration-200 transition w-full h-auto" src={p.thumbnail} alt="" />
                            </div>
                            <div className=" border-b border-secondary-50 mx-3 py-2 text-left">
                                <h3 className="uppercase font-semibold leading-6 text-base mb-2.5 line-clamp-3 mt-2">{p.title}</h3>
                                <p className="text-secondary-50 text-sm">CATEGORY</p>
                                <p className="text-secondary-100 text-sm">Author</p>
                            </div>
                            <div className="my-2 flex items-center justify-between px-3 text-primary-400 font-semibold">
                                <span>$000</span>
                                <a href="/" className="rounded-full cursor-pointer border hover:bg-primary-400 hover:text-white transition duration-200 border-primary-400 p-1">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-basket-filled" width="18" height="18" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M12.684 3.27l.084 .09l4.7 5.64h3.532a1 1 0 0 1 .991 1.131l-.02 .112l-1.984 7.918c-.258 1.578 -1.41 2.781 -2.817 2.838l-.17 .001l-10.148 -.002c-1.37 -.053 -2.484 -1.157 -2.787 -2.57l-.035 -.185l-2 -8a1 1 0 0 1 .857 -1.237l.113 -.006h3.53l4.702 -5.64a1 1 0 0 1 1.452 -.09zm-.684 8.73a3 3 0 0 0 -2.98 2.65l-.015 .174l-.005 .176l.005 .176a3 3 0 1 0 2.995 -3.176zm0 -6.438l-2.865 3.438h5.73l-2.865 -3.438z" stroke-width="0" fill="currentColor" />
</svg>
                                </a>
                            </div>
                        </div>
                        </a>
                    </SwiperSlide>
                    </>)}
                </Swiper>
            </div>
        </Layout>
    )
}