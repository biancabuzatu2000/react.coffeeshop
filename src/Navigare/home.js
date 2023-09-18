import React from 'react'


function Home() {
    const backgroundImage = 'https://storage.googleapis.com/mkt-hq-website-prod-eu/be/2017/09/Coffee-POS-Lightspeed.jpeg';

    return (
        <>
            <h1>About us..</h1>
            <div className="about" style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                width: '100%',
                height: '100vh'
            }}>
                <p className="text">
                    At the heart of each product and experience is connection.<br/>
                    To shop at us is to mark a moment, no matter how big or small, and to share that moment with others.<br/>
                    If our products are artful, then their benefits are enjoyment and sharing.<br/>
                    It’s about choosing kindness for yourself and others, in both the good and not so good times.<br/>

                    Our place inspires togetherness. We exist to help people connect.<br/>
                    To celebrate. To console. To remember. To play.<br/>
                    For family, old and new. For friends, neighbours, and co-workers.<br/>
                    Each batch, each bite, is special. Full of beautiful memories.<br/>
                    We are the place our community turns to mark important dates and milestones, or to indulge in a bite
                    of everyday enjoyment.<br/>
                    For moments big and small. For joy, warmth and inclusion.<br/>
                    With skill, care and kindness, we produce quality baking that’s as scrumptious and special as the
                    people who share it.<br/>
                </p>
            </div>


        </>
    )
}

export default Home;