export default function Header() {

    const toggleMenu = () => {
        const navbarSticky = document.getElementById('navbar-sticky');
        navbarSticky?.classList.toggle('hidden');
    }

    return (<>
        <header className="">
            <nav className="justify-between text-center w-full bg-primary-500 lg:flex font-semibold">
                <div className="flex justify-between items-center">
                    <h1 className=" h-full flex">
                        <div className="">
                            <a href="/" className="">
                                <img src="/img/MPP_movil.svg" alt="" className=" max-w-20 md:max-w-[120px]" /></a>
                        </div>
                    </h1>

                    <button type="button" className="items-center p-2 justify-center text-white rounded-lg lg:hidden focus:outline-none focus:ring-2 focus:ring-gray-200 " aria-expanded="false" onClick={toggleMenu} id="menu-button">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>

                </div>

                <ul id="navbar-sticky" className="lg:flex">
                    <a href="/"><li>inicio</li></a>
                    <a href="/"><li>Iniciar Sesión</li></a>
                    <a href="/"><li>Insignias</li></a>
                    <a href="/"><li>Vender</li></a>
                    <a href="/"><li>Blog</li></a>
                    <a href="/"><li>¡Contáctanos!</li></a>
                    <a href="/"><li>Sobre nosotros</li></a>
                    <a href="/"><li>Aporte a la comunidad</li></a>
                </ul>
            </nav>
        </header>
    </>)
}