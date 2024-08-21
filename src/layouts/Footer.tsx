export default function Footer(){



    return <footer className="bg-secondary-900 text-white">

<svg xmlns="http://www.w3.org/2000/svg" transform="translate(0, -1)" viewBox="0 0 1440 300">
      <path fill="#FFFDF5" fill-opacity="1" d="M0,192L120,202.7C240,213,480,235,720,229.3C960,224,1200,192,1320,176L1440,160L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z">
      </path>
      <g transform="translate(630, 30)"> 
        <image className="w-52 h-auto mx-auto block mt-10 pt-10" id="Mark" xlinkHref="/img/footer/Mark.png"></image>
      </g>
    </svg>
    <img src="/img/Logo_MPP.png" className="mx-auto mb-3 lg:mb-6 max-w-64 lg:max-w-72 h-auto" id="logo" alt="Logo MPP"/>
    <ul className="text-center gap-1 grid lg:grid-cols-4 grid-cols-1 max-w-[940px] mx-auto">
        <a href="/">
            <li>Sobre Nosotros</li>
        </a>
        <a href="/">
            <li>Iniciar Sesión</li>
        </a>
        <a href="/">
            <li>Aporte a la comunidad</li>
        </a>
        <a href="/">
            <li>Obtener insignias</li>
        </a>
        <a href="/">
            <li>¡Contáctanos!</li>
        </a>
        <a href="/">
            <li>Vender</li>
        </a>
        <a href="/">
            <li>Blog</li>
        </a>
        <a href="/">
            <li>Aviso de privacidad</li>
        </a>
    </ul>
    <p className="text-center py-5">Derechos Reservados - MarkPetPlace - 2024</p>
    </footer>
}