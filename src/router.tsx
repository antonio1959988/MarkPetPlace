import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const IndexPage = lazy(() => import('./views/IndexPage'))
const TestPage = lazy(() => import('./views/TestPage'))

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                    <Route path='/' element={
                        <Suspense fallback="Cargando">
                            <IndexPage/>
                        </Suspense>
                    } index/>

                    <Route path='/test' element={
                        <Suspense fallback="Cargando">
                            <TestPage/>
                        </Suspense>
                    }/>
            </Routes>
        </BrowserRouter>
    )
}