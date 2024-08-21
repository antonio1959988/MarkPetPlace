import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const IndexPage = lazy(() => import('./views/IndexPage'))
const SectionPage = lazy(() => import('./views/SectionPage'))

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={
                    <Suspense fallback="Cargando">
                        <IndexPage />
                    </Suspense>
                } index />

                <Route path='/perros' element={
                    <Suspense fallback="Cargando">
                        <SectionPage section='Perros' image='/img/seccion_perros/seccionperro_banner.png' />
                    </Suspense>
                } />

                <Route path='/gatos' element={
                    <Suspense fallback="Cargando">
                        <SectionPage section='Gatos' image='/img/seccion_gatos/secciongato_banner.png' />
                    </Suspense>
                } />

                <Route path='/peces' element={
                    <Suspense fallback="Cargando">
                        <SectionPage section='Peces' image='/img/seccion_peces/seccionpez_banner.png'/>
                    </Suspense>
                } />

                <Route path='/conejos' element={
                    <Suspense fallback="Cargando">
                        <SectionPage section='Conejos' image='/img/seccion_conejos/seccionconejo_banner.png' />
                    </Suspense>
                } />
            </Routes>
        </BrowserRouter>
    )
}