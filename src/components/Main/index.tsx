import React from 'react'
import Image from 'next/image';

import { CiStar } from 'react-icons/ci';

import popular from "../../../public/images/popular-1.jpg";
import popular2 from "../../../public/images/popular-2.jpg";
import popular3 from "../../../public/images/popular-3.jpg";
import packege2 from "../../../public/images/packege-2.jpg";
import packege1 from "../../../public/images/packege-1.jpg";
import packege3 from "../../../public/images/packege-3.jpg";
import gallery1 from "../../../public/images/gallery-1.jpg";
import gallery2 from "../../../public/images/gallery-2.jpg";
import gallery3 from "../../../public/images/gallery-3.jpg";
import gallery4 from "../../../public/images/gallery-4.jpg";
import gallery5 from "../../../public/images/gallery-5.jpg";
import { BiSolidStar } from 'react-icons/bi';
import { places } from '@/mocs/tourPlaces';






const Main = () => {
    const stars = new Array(5).fill(0);

    return (<main>
        <article>
            <section className="hero">
                <div className="container">

                    <h2 className="h1 hero-title">Journey to explore world</h2>

                    <p className="hero-text">
                        Ac mi duis mollis. Sapiente? Scelerisque quae, penatibus? Suscipit className corporis nostra rem quos
                        voluptatibus habitant?
                        Fames, vivamus minim nemo enim, gravida lobortis quasi, eum.
                    </p>

                    <div className="btn-group">
                        <button className="btn btn-primary">Learn more</button>

                        <button className="btn btn-secondary">Book now</button>
                    </div>

                </div>
            </section>


            <section className="popular">
                <div className="container">

                    <p className="section-subtitle">Uncover place</p>

                    <h2 className="h2 section-title">Popular destination</h2>

                    <p className="section-text">
                        Fusce hic augue velit wisi quibusdam pariatur, iusto primis, nec nemo, rutrum. Vestibulum cumque laudantium.
                        Sit ornare
                        mollitia tenetur, aptent.
                    </p>

                    <ul className="popular-list">

                        {
                            places.map((item: any) =>
                                <li>
                                    <div className="popular-card">

                                        <figure className="card-Image">
                                            <Image src={item.image} alt={item.title} loading="lazy"  height={363} width={430} style={{width:'363px',height:'430px'}} />
                                        </figure>

                                        <div className="card-content">

                                            <div className="card-rating">
                                                {stars.map(() => <BiSolidStar />)}
                                            </div>

                                            <p className="card-subtitle">
                                                <a href="#">{item.title}</a>
                                            </p>

                                            <h3 className="h3 card-title">
                                                <a href="#">{item.label}</a>
                                            </h3>

                                            <p className="card-text">
                                                {`${item.content}`}
                                            </p>

                                        </div>

                                    </div>
                                </li>)
                        }


                    </ul>

                    <button className="btn btn-primary">More destintion</button>

                </div>
            </section>

            <section className="package">
                <div className="container">

                    <p className="section-subtitle">Popular Packeges</p>

                    <h2 className="h2 section-title">Checkout Our Packeges</h2>

                    <p className="section-text">
                        Fusce hic augue velit wisi quibusdam pariatur, iusto primis, nec nemo, rutrum. Vestibulum cumque laudantium.
                        Sit ornare
                        mollitia tenetur, aptent.
                    </p>

                    <ul className="package-list">

                        <li>
                            <div className="package-card">

                                <figure className="card-banner">
                                    <Image src={packege1} alt="Experience The Great Holiday On Beach" loading="lazy" />
                                </figure>

                                <div className="card-content">

                                    <h3 className="h3 card-title">Experience The Great Holiday On Beach</h3>

                                    <p className="card-text">
                                        Laoreet, voluptatum nihil dolor esse quaerat mattis explicabo maiores, est aliquet porttitor! Eaque,
                                        cras, aspernatur.
                                    </p>

                                    <ul className="card-meta-list">

                                        <li className="card-meta-item">
                                            <div className="meta-box">
                                                {/* <ion-icon name="time"></ion-icon> */}

                                                <p className="text">7D/6N</p>
                                            </div>
                                        </li>

                                        <li className="card-meta-item">
                                            <div className="meta-box">
                                                {/* <ion-icon name="people"></ion-icon> */}

                                                <p className="text">pax: 10</p>
                                            </div>
                                        </li>

                                        <li className="card-meta-item">
                                            <div className="meta-box">
                                                {/* <ion-icon name="location"></ion-icon> */}

                                                <p className="text">Malaysia</p>
                                            </div>
                                        </li>

                                    </ul>

                                </div>

                                <div className="card-price">

                                    <div className="wrapper">

                                        <p className="reviews">(25 reviews)</p>

                                        <div className="card-rating">
                                            {stars.map(() => <BiSolidStar />)}

                                        </div>

                                    </div>

                                    <p className="price">
                                        $750
                                        <span>/ per person</span>
                                    </p>

                                    <button className="btn btn-secondary">Book Now</button>

                                </div>

                            </div>
                        </li>

                        <li>
                            <div className="package-card">

                                <figure className="card-banner">
                                    <Image src={packege2} alt="Summer Holiday To The Oxolotan River" loading="lazy" />
                                </figure>

                                <div className="card-content">

                                    <h3 className="h3 card-title">Summer Holiday To The Oxolotan River</h3>

                                    <p className="card-text">
                                        Laoreet, voluptatum nihil dolor esse quaerat mattis explicabo maiores, est aliquet porttitor! Eaque,
                                        cras, aspernatur.
                                    </p>

                                    <ul className="card-meta-list">

                                        <li className="card-meta-item">
                                            <div className="meta-box">
                                                {/* <ion-icon name="time"></ion-icon> */}

                                                <p className="text">7D/6N</p>
                                            </div>
                                        </li>

                                        <li className="card-meta-item">
                                            <div className="meta-box">
                                                {/* <ion-icon name="people"></ion-icon> */}

                                                <p className="text">pax: 10</p>
                                            </div>
                                        </li>

                                        <li className="card-meta-item">
                                            <div className="meta-box">
                                                {/* <ion-icon name="location"></ion-icon> */}

                                                <p className="text">Malaysia</p>
                                            </div>
                                        </li>

                                    </ul>

                                </div>

                                <div className="card-price">

                                    <div className="wrapper">

                                        <p className="reviews">(20 reviews)</p>

                                        <div className="card-rating">
                                            {stars.map(() => <BiSolidStar />)}

                                        </div>

                                    </div>

                                    <p className="price">
                                        $520
                                        <span>/ per person</span>
                                    </p>

                                    <button className="btn btn-secondary">Book Now</button>

                                </div>

                            </div>
                        </li>

                        <li>
                            <div className="package-card">

                                <figure className="card-banner">
                                    <Image src={packege3} alt="Santorini Island's Weekend Vacation" loading="lazy" />
                                </figure>

                                <div className="card-content">

                                    <h3 className="h3 card-title">Santorini Island's Weekend Vacation</h3>

                                    <p className="card-text">
                                        Laoreet, voluptatum nihil dolor esse quaerat mattis explicabo maiores, est aliquet porttitor! Eaque,
                                        cras, aspernatur.
                                    </p>

                                    <ul className="card-meta-list">

                                        <li className="card-meta-item">
                                            <div className="meta-box">
                                                {/* <ion-icon name="time"></ion-icon> */}

                                                <p className="text">7D/6N</p>
                                            </div>
                                        </li>

                                        <li className="card-meta-item">
                                            <div className="meta-box">
                                                {/* <ion-icon name="people"></ion-icon> */}

                                                <p className="text">pax: 10</p>
                                            </div>
                                        </li>

                                        <li className="card-meta-item">
                                            <div className="meta-box">
                                                {/* <ion-icon name="location"></ion-icon> */}

                                                <p className="text">Malaysia</p>
                                            </div>
                                        </li>

                                    </ul>

                                </div>

                                <div className="card-price">

                                    <div className="wrapper">

                                        <p className="reviews">(40 reviews)</p>

                                        <div className="card-rating">
                                            {stars.map(() => <BiSolidStar />)}

                                        </div>

                                    </div>

                                    <p className="price">
                                        $660
                                        <span>/ per person</span>
                                    </p>

                                    <button className="btn btn-secondary">Book Now</button>

                                </div>

                            </div>
                        </li>

                    </ul>

                    <button className="btn btn-primary">View All Packages</button>

                </div>
            </section>



            <section className="gallery" id="gallery">
                <div className="container">

                    <p className="section-subtitle">Photo Gallery</p>

                    <h2 className="h2 section-title">Photo's From Travellers</h2>

                    <p className="section-text">
                        Fusce hic augue velit wisi quibusdam pariatur, iusto primis, nec nemo, rutrum. Vestibulum cumque laudantium.
                        Sit ornare
                        mollitia tenetur, aptent.
                    </p>

                    <ul className="gallery-list">

                        <li className="gallery-item">
                            <figure className="gallery-image">
                                <Image src={gallery1} alt="Gallery image" />
                            </figure>
                        </li>

                        <li className="gallery-item">
                            <figure className="gallery-image">
                                <Image src={gallery2} alt="Gallery image" />
                            </figure>
                        </li>

                        <li className="gallery-item">
                            <figure className="gallery-image">
                                <Image src={gallery3} alt="Gallery image" />
                            </figure>
                        </li>

                        <li className="gallery-item">
                            <figure className="gallery-image">
                                <Image src={gallery4} alt="Gallery image" />
                            </figure>
                        </li>

                        <li className="gallery-item">
                            <figure className="gallery-image">
                                <Image src={gallery5} alt="Gallery image" />
                            </figure>
                        </li>

                    </ul>

                </div>
            </section>

            <section className="cta" id="contact">
                <div className="container">

                    <div className="cta-content">
                        <p className="section-subtitle">Call To Action</p>

                        <h2 className="h2 section-title">Ready For Unforgatable Travel. Remember Us!</h2>

                        <p className="section-text">
                            Fusce hic augue velit wisi quibusdam pariatur, iusto primis, nec nemo, rutrum. Vestibulum cumque
                            laudantium. Sit ornare
                            mollitia tenetur, aptent.
                        </p>
                    </div>

                    <button className="btn btn-secondary">Contact Us !</button>

                </div>
            </section>

        </article>
    </main>)
}

export default Main