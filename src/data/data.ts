export const getProducts = async (): Promise<Product[]> => {

    const ids = [
        "MLM2197207340", 
        "MLM1628932965", 
        "MLM2033669597", 
        "MLM1463071463"];

    try {
        const res: Product[] = await Promise.all(ids.map(id => getProductById(id)))
        console.log(res)
            return res;
    } catch (error) { 
        console.log(error);
        return [];
    }
}

export const searchProducts = async (search : string, section?: string): Promise<Product[]> => {
    try {
        let url = `https://api.mercadolibre.com/sites/MLM/search?q&q=para+${search}`;

        if(section){
            url = `https://api.mercadolibre.com/sites/MLM/search?q&q=${search}+para+${section}+mascota`;
        }

        console.log(url)

        const res: Response = await fetch(url).catch(err => {
            console.log(err)
            return new Response(null)
        })

        const products = await res.json();

        const product: Product[] = products.results.map((p) => {
            return {
                id: p.id,
                title: p.title,
                price: p.price,
                thumbnail: `https://http2.mlstatic.com/D_NQ_NP_${p.thumbnail_id}-O.webp`,
                link: p.permalink,
                author: p.official_store_name ?? p.seller.nickname ?? null
            }
        })
        return product;

    } catch (error) {
        console.log(error);
        return [];
    }
}


export type Product = {
    id: string,
    title: string,
    price: number,
    thumbnail: string,
    link: string,
    author: string

};

const getProductById = async (id: string): Promise<Product> => {
    const url = `https://api.mercadolibre.com/items/${id}`;
    const res: Response = await fetch(url).catch(err => {
        console.log(err)
        return new Response(null)
    });

    if(!res){
        console.log("error")
    }

    const data = await res.json().then(res => res).catch(err => console.log(err))
    console.log(data);

    const product: Product = {
            id: data.id,
            title: data.title,
            price: data.price,
            thumbnail: `https://http2.mlstatic.com/D_NQ_NP_${data.thumbnail_id}-O.webp`,
            link: data.permalink,
            author: data.official_store_name ?? data.seller.nickname ?? null
        }
    return product;
}