import React, {useState} from "react";


function Espresso() {


    const [cart, setCart] = useState([]);
    const addToCart = (productName) => {
        setCart([...cart, productName]);
    };

    const products = [
        {
            id: 1,
            name: 'Iced Caffè Latte',
            price: 25,
            image: 'https://www.starbucksromania.ro/sites/starbucks-ro/files/styles/c04_image_text_grid_600x600/public/2021-11/Iced%20Caffe%CC%80%20Latte%20.jpeg.webp?itok=uSyLy0Ao',
        },

        {
            id: 2,
            name: 'Caffè Latte',
            price: 35.8,
            image: 'https://www.starbucksromania.ro/sites/starbucks-ro/files/styles/c04_image_text_grid_600x600/public/2021-11/Caffe%CC%80%20Latte.jpeg.webp?itok=t8BzB4Wv',
        },

        {
            id: 3,
            name: 'Iced Starbucks Blonde Latte',
            price: 22.9,
            image: 'https://www.starbucksromania.ro/sites/starbucks-ro/files/styles/c04_image_text_grid_600x600/public/2021-11/Iced%20Starbucks%20Blonde%C2%AE%20Latte%20.jpeg.webp?itok=3vfTS0DL'
        },

        {
            id: 4,
            name: 'Caffè Mocha',
            price: 30,
            image: 'https://www.starbucksromania.ro/sites/starbucks-ro/files/styles/c04_image_text_grid_600x600/public/2021-11/Caffe%CC%80%20Mocha.jpeg.webp?itok=cfSSVW_F'
        },

        {
            id: 5,
            name: 'Caramel Macchiato',
            price: 15.6,
            image: 'https://www.starbucksromania.ro/sites/starbucks-ro/files/styles/c04_image_text_grid_600x600/public/2021-11/Caramel%20Macchiato.jpeg.webp?itok=dASnde7f',
        },

        {
            id: 6,
            name: 'Iced Caramel Macchiato',
            price: 20,
            image: 'https://www.starbucksromania.ro/sites/starbucks-ro/files/styles/c04_image_text_grid_600x600/public/2021-11/Iced%20Caramel%20Macchiato.jpeg.webp?itok=ZdTC1XfX'
        },
        {
            id: 7,
            name: 'Espresso',
            price: 30,
            image: 'https://www.starbucksromania.ro/sites/starbucks-ro/files/styles/c04_image_text_grid_600x600/public/2021-11/Espresso.jpeg.webp?itok=PnV7wPjS'
        },

    ];
    return (
        <>

            <h1>Băuturi pe bază de espresso</h1>
            <div className="ESPRESSO">
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

export default Espresso;