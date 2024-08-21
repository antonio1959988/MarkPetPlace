export const getProducts = async (): Promise<Product[] | undefined> => {

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
    }
}


export type Product = {
    id: string,
    title: string,
    price: number,
    thumbnail: string

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
            thumbnail: data.thumbnail
        }
    return product;
}