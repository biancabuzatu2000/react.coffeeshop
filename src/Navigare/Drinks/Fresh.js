import React, {useState} from 'react'


function Fresh() {
    const [cart, setCart] = useState([]);

    const addToCart = (productName) => {
        setCart([...cart, productName]);
    };
    const products = [
        {
            id: 15,
            name: 'Strawberry Acai Starbucks Refresh',
            price: 19,
            image: 'https://www.starbucksromania.ro/sites/starbucks-ro/files/styles/c04_image_text_grid_600x600/public/2021-11/Strawberry%20Acai%20Starbucks%20Refresha%C2%AE%20Drink_0.jpeg.webp?itok=r7WYyYyy',
        },

        {
            id: 16,
            name: 'Pink Coconut Starbucks Refresh',
            price: 25,
            image: 'https://www.starbucksromania.ro/sites/starbucks-ro/files/styles/c04_image_text_grid_600x600/public/2021-11/Pink%20Coconut%20Starbucks%20Refresha%C2%AE%20Drink.jpeg.webp?itok=_HiHh81x',

        },

        {
            id: 17,
            name: 'Orange Mango Starbucks Refresh',
            price: 40.2,
            image: 'https://www.starbucksromania.ro/sites/starbucks-ro/files/styles/c04_image_text_grid_600x600/public/2022-05/Orange_Mango_Refresha_Slim_GREEN-WOLT.jpg.webp?itok=CCCB7GJ_',
        },

        {
            id: 18,
            name: 'Tropical Coconut Starbucks Refresh',
            price: 20.6,
            image: 'https://www.starbucksromania.ro/sites/starbucks-ro/files/styles/c04_image_text_grid_600x600/public/2022-05/Sunshine_Coconut_Refresha_Slim_GREEN-Just%20Eat.jpg.webp?itok=TgsmSW7-',
        },

        {
            id: 19,
            name: 'Iced Black Tea',
            price: 35.1,
            image: 'https://www.starbucksromania.ro/sites/starbucks-ro/files/styles/c04_image_text_grid_600x600/public/2021-11/Iced%20Black%20Tea.jpeg.webp?itok=ALihvMxi',
        },

        {
            id: 20,
            name: 'Iced Green Tea',
            price: 20,
            image: 'https://www.starbucksromania.ro/sites/starbucks-ro/files/styles/c04_image_text_grid_600x600/public/2021-11/Iced%20Green%20Tea.jpeg.webp?itok=zWTbQyBv',
        },
        {
            id: 21,
            name: 'Iced Matcha Green Tea Latte',
            price: 40,
            image: 'https://www.starbucksromania.ro/sites/starbucks-ro/files/styles/c04_image_text_grid_600x600/public/2021-11/Iced%20Matcha%20Green%20Tea%20Latte.jpeg.webp?itok=18EiFPfH',
        },

    ];

    return (

        <>
            <h1>Fresh Summer Drinks and Iced Tea</h1>
            <div className="FRESH">
                {products.map((product) => (
                    <div className="espresso1" key={product.id}>
                        <img src={product.image} alt={product.name}/>
                        <p> {product.name}</p>
                        <p>{product.price} lei</p>
                        <button onClick={() => addToCart(product)}>Adaugă în coș</button>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Fresh;