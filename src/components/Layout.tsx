import { ReactNode, useEffect } from "react";
import Header from "./Header";

export default function Layout({ title, children } : { title: string, children: ReactNode }){

    useEffect(() => {
        document.title = title;
    }, [title])

    return(<>
    <Header/>
    <main className="mx-auto px-[15px] lg:px-5 lg:max-w-[940px] max-w-md">
    {children}
    </main>
    </>)
}