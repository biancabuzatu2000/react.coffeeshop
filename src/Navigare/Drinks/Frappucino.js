import React, {useState} from 'react'


function Frappucino() {
    const [cart, setCart] = useState([]);

    const addToCart = (productName) => {
        setCart([...cart, productName]);
    };
    const products = [
        {
            id: 8,
            name: 'Caramel Frappuccino',
            price: 20,
            image: 'https://www.starbucksromania.ro/sites/starbucks-ro/files/styles/c04_image_text_grid_600x600/public/2021-11/Caramel%20Frappuccino%C2%AE%20.jpeg.webp?itok=N37Namuc',
        },

        {
            id: 9,
            name: 'Coffee Frappuccino',
            price: 35,
            image: 'https://www.starbucksromania.ro/sites/starbucks-ro/files/styles/c04_image_text_grid_600x600/public/2021-11/Coffee%20Frappuccino%C2%AE%20.jpeg.webp?itok=S_l48cgS',

        },

        {
            id: 10,
            name: 'Java Chip Frappuccino',
            price: 30,
            image: 'https://www.starbucksromania.ro/sites/starbucks-ro/files/styles/c04_image_text_grid_600x600/public/2021-11/Java%20Chip%20Frappuccino%C2%AE.jpeg.webp?itok=cHQZrAFH',
        },

        {
            id: 11,
            name: 'White Chocolate Mocha Frappuccino',
            price: 29,
            image: 'https://www.starbucksromania.ro/sites/starbucks-ro/files/styles/c04_image_text_grid_600x600/public/2021-11/White%20Chocolate%20Mocha%20Frappuccino%C2%AE%20.jpeg.webp?itok=r263WmNA'
        },

        {
            id: 12,
            name: 'Gingerbread Frappuccino',
            price: 17,
            image: 'https://www.starbucksromania.ro/sites/starbucks-ro/files/styles/c04_image_text_grid_600x600/public/2021-11/Gingerbread%20Frappuccino%C2%AE.jpeg.webp?itok=gXRipNSI',
        },

        {
            id: 13,
            name: 'Strawberries & Cream Frappuccino',
            price: 20,
            image: 'https://www.starbucksromania.ro/sites/starbucks-ro/files/styles/c04_image_text_grid_600x600/public/2021-11/Strawberries%20%26%20Cream%20Frappuccino%C2%AE%20.jpeg.webp?itok=LpM0Tx1U'
        },
        {
            id: 14,
            name: 'Matcha Green Tea Cream Frappuccino',
            price: 30,
            image: 'https://www.starbucksromania.ro/sites/starbucks-ro/files/styles/c04_image_text_grid_600x600/public/2021-11/Matcha%20Green%20Tea%20Cream%20Frappuccino%C2%AE%20.jpeg.webp?itok=ka77kjD4'
        },

    ];


    return (
        <>
            <h1>Frappucino</h1>
            <div className="FRAPPUCINO">
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
    );
}

export default Frappucino;