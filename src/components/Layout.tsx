import { ReactNode, useEffect } from "react";
import Header from "./Header";

export default function Layout({ title, children } : { title: string, children: ReactNode }){

    useEffect(() => {
        document.title = title;
    }, [title])

    return(<>
    <Header/>
    <main>
    {children}
    </main>
    </>)
}