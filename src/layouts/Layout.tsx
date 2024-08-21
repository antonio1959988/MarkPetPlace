import { ReactNode, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ title, children } : { title: string, children: ReactNode }){

    useEffect(() => {
        document.title = title;
    }, [title])

    return(<>
    <Header/>
    <main>
    {children}
    </main>
    <Footer/>
    </>)
}