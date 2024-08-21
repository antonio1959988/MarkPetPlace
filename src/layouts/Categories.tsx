export default function Categories({title} : {title?: string}){

    return (<div className="w-full mx-auto max-w-md lg:max-w-[940px] text-center my-3 lg:my-6">
        {title && <h1 className="lg:text-3xl text-2xl font-black text-secondary-900 mb-5">{title}</h1>}
        <div className=" grid grid-cols-2 lg:grid-cols-4 *:my-1 *:lg:my-2.5">
            <a href="/perros">
                <img className="lg:w-24 w-20 mx-auto mb-1 lg:mb-2.5 rounded-full hover:bg-primary-400 transition duration-200 bg-primary-200 p-2" src="/img/iconos/icon_perro.svg" alt="" />
                <span className="lg:text-xl text-lg font-bold text-secondary-900">Perros</span>
            </a>
            <a href="/gatos">
                <img className="lg:w-24 w-20 mx-auto mb-1 lg:mb-2.5 rounded-full hover:bg-primary-400 transition duration-200 bg-primary-200 p-2" src="/img/iconos/icon_gato.svg" alt="" />
                <span className="lg:text-xl text-lg font-bold text-secondary-900">Gatos</span>
            </a>
            <a href="/peces">
                <img className="lg:w-24 w-20 mx-auto mb-1 lg:mb-2.5 rounded-full hover:bg-primary-400 transition duration-200 bg-primary-200 p-2" src="/img/iconos/icon_pez.svg" alt="" />
                <span className="lg:text-xl text-lg font-bold text-secondary-900">Peces</span>
            </a>
            <a href="/conejos">
                <img className="lg:w-24 w-20 mx-auto mb-1 lg:mb-2.5 rounded-full hover:bg-primary-400 transition duration-200 bg-primary-200 p-2" src="/img/iconos/icon_conejo.svg" alt="" />
                <span className="lg:text-xl text-lg font-bold text-secondary-900">Conejos</span>
            </a>
        </div>
    </div>)
}