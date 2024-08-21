import { Swiper, SwiperSlide } from "swiper/react";
import { Product, searchProducts } from "../data/data";
import { useEffect, useState } from "react";

export default function ProductSection({ title } : {title : string}){

    const [products, setProducts] = useState<Product[]>();

    const getProductsData = async () => {

        // Dynamic search products
        const productsAPI: Product[] = await searchProducts(title).then(res => res );

        // CUstom products form array ids
        //const productsAPI: Product[] = await getProducts().then((res) => res);
        setProducts(productsAPI)
        console.log(products)
    }

    useEffect(() => {
        getProductsData();
    }, [])

    return (
        <div className="w-full text-center my-2 mb-10">
                <h1 className="lg:text-3xl text-2xl font-bold text-primary-600 mb-2">{title}</h1>
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
                    {products?.map((p) => <>
                        <SwiperSlide>
                        <a href={p.link} target="_blank" id={p.id} key={p.id}>
                        <div className=" border-primary-400 border overflow-hidden rounded-2xl bg-white text-black">
                            <div className="overflow-hidden block min-h-52">
                            <img className="hover:scale-125 duration-200 transition w-full h-auto" src={p.thumbnail} alt="" />
                            </div>
                            <div className=" border-b border-secondary-50 mx-3 py-2 text-left">
                                <h3 className="uppercase font-semibold leading-6 text-base mb-2.5 mt-2 min-h-[72px] line-clamp-3">{p.title}</h3>
                                <p className="text-secondary-50 text-sm">{title}</p>
                                <p className="text-secondary-100 text-sm line-clamp-1">{p.author ?? "Mercadolibre"}</p>
                            </div>
                            <div className="my-2 flex items-center justify-between px-3 text-primary-400 font-semibold">
                                <span>{new Intl.NumberFormat('es-MX', {
                                    style: 'currency',
                                    currency: 'MXN'
                                }).format(p.price)}</span>
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
    )
}