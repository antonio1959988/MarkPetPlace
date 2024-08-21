export default function Header() {

    const toggleMenu = () => {
        const navbarSticky = document.getElementById('navbar-sticky');
        navbarSticky?.classList.toggle('hidden');
    }

    const toggleMenuItem = () => {
        const navbarSticky = document.getElementById('navbar-dropdown');
        navbarSticky?.classList.toggle('hidden');
    }

    const toggleProfile = () => {
        const navbarSticky = document.getElementById('profile-dropdown');
        navbarSticky?.classList.toggle('hidden');
    }

    return (<>
        <header className="text-white relative h-12 ">
            <nav className="justify-between fixed z-20 top-0 text-center w-full bg-primary-500 lg:flex font-semibold px-[10px]">
                <div className="flex relative justify-center items-center ">
                    <button type="button" className="items-center p-2 absolute left-0 justify-center text-white rounded-lg lg:hidden focus:outline-none focus:ring-2 focus:ring-gray-200 my-2" aria-expanded="false" onClick={toggleMenu} id="menu-button">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                    <a href="/" className="my-2.5">
                        <img src="/img/MPP_movil.svg" alt="" className="max-w-[100px] h-auto lg:hidden" />
                        <img src="/img/MarkPetPlace.svg" alt="" className="max-w-[300px] h-auto hidden lg:block" />
                    </a>
                </div>

                <ul id="navbar-sticky" className="lg:flex lg:items-center hidden *:*:py-2 *:*:px-2 *:*:text-nowrap">
                    <a href="/"><li className="hover:text-black hover:underline hover:bg-secondary-300 transition duration-200 lg:hidden">inicio</li></a>
                    <div className="lg:relative">
                        <div className="flex cursor-pointer items-center justify-center fill-white hover:fill-black hover:text-black hover:underline hover:bg-secondary-300 transition duration-200" onClick={toggleMenuItem}>
                            <li className="">Mercadito</li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-caret-down" width="26" height="26" viewBox="0 0 24 24" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M6 10l6 6l6 -6h-12" />
                            </svg>
                        </div>
                        <ul id="navbar-dropdown" className=" *:*:py-2 hidden border-[2px] bg-primary-500 w-full border-secondary-300 lg:absolute">
                            <a href="/perros"><li className="hover:text-black hover:underline hover:bg-secondary-300 transition duration-200">Perros</li></a>
                            <a href="/gatos"><li className="hover:text-black hover:underline hover:bg-secondary-300 transition duration-200">Gatos</li></a>
                            <a href="/peces"><li className="hover:text-black hover:underline hover:bg-secondary-300 transition duration-200">Peces</li></a>
                            <a href="/conejos"><li className="hover:text-black hover:underline hover:bg-secondary-300 transition duration-200">Conejos</li></a>
                        </ul>
                    </div>
                    <a href="/"><li className="hover:text-black hover:underline hover:bg-secondary-300 transition duration-200 lg:hidden">Iniciar Sesión</li></a>
                    <a href="/"><li className="hover:text-black hover:underline hover:bg-secondary-300 transition duration-200 lg:hidden">Insignias</li></a>
                    <a href="/"><li className="hover:text-black hover:underline hover:bg-secondary-300 transition duration-200">Vender</li></a>
                    <a href="/"><li className="hover:text-black hover:underline hover:bg-secondary-300 transition duration-200 lg:hidden">Blog</li></a>
                    <a href="/"><li className="hover:text-black hover:underline hover:bg-secondary-300 transition duration-200">¡Contáctanos!</li></a>
                    <a href="/"><li className="hover:text-black hover:underline hover:bg-secondary-300 transition duration-200">Sobre nosotros</li></a>
                    <a href="/"><li className="hover:text-black hover:underline hover:bg-secondary-300 transition duration-200 lg:hidden">Aporte a la comunidad</li></a>
                    <div className="lg:relative">
                        <div className="cursor-pointer hidden lg:block stroke-white hover:stroke-black hover:text-black transition duration-200" onClick={toggleProfile}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-user-circle" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                                <path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                                <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" />
                            </svg>
                        </div>
                        <ul id="profile-dropdown" className=" *:*:py-2 hidden border-[2px] bg-primary-500 w-[200px] right-0 border-secondary-300 lg:absolute">
                            <a href="/"><li className="hover:text-black hover:underline hover:bg-secondary-300 transition duration-200">Iniciar Sesión</li></a>
                            <a href="/"><li className="hover:text-black hover:underline hover:bg-secondary-300 transition duration-200">Registrarse</li></a>
                        </ul>
                    </div>
                </ul>
            </nav>
        </header>
    </>)
}