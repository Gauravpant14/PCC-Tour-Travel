"use client"
import React from "react";
import Image from "next/image";
import {callHandler} from "../../utils/callHandler";
import { CiStar } from "react-icons/ci";

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
import { BiLocationPlus, BiSolidStar, BiTime } from "react-icons/bi";
import { places, serviceList } from "@/mocs/tourPlaces";
import { AiFillCar } from "react-icons/ai";
// import { AiFillCar } from "react-icons/ai";

const Main = () => {
    const stars = new Array(5).fill(0);
    
    return (
        <main>
            <article>
                <section className="hero">
                    <div className="container">
                        <h2 className="h1 hero-title">Explore Experience Embrace</h2>

                        <h3 className="hero-text">
                            From Dreams to Destinations: Your Ultimate Travel Companion
                        </h3>

                        <div className="btn-group">
                            <button className="btn btn-primary">Learn more</button>

                            <button className="btn btn-secondary" onClick={callHandler}>Book now</button>
                        </div>
                    </div>
                </section>

                <section className="popular">
                    <div className="container">
                        <p className="section-subtitle">Your Next Stop</p>

                        <h2 className="h2 section-title">Explore Popular Destinations</h2>

                        <p className="section-text">
                            Embark on a journey to discover captivating destinations with our
                            taxi services. Whether it's a solo adventure or a group getaway,
                            we have you covered.
                        </p>

                        <ul className="popular-list">
                            {places.map((item: any) => (
                                <li>
                                    <div className="popular-card">
                                        <figure className="card-Image">
                                            <Image
                                                src={item.image}
                                                alt={item.title}
                                                loading="lazy"
                                                height={363}
                                                width={430}
                                                style={{ width: "363px", height: "430px" }}
                                            />
                                        </figure>

                                        <div className="card-content">
                                            <div className="card-rating">
                                                {stars.map(() => (
                                                    <BiSolidStar />
                                                ))}
                                            </div>

                                            <p className="card-subtitle">
                                                <a href="#">{item.title}</a>
                                            </p>

                                            <h3 className="h3 card-title">
                                                <a href="#">{item.label}</a>
                                            </h3>

                                            <p className="card-text">{`${item.content}`}</p>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>

                        <button className="btn btn-primary">More destintion</button>
                    </div>
                </section>

                <section className="package">
                    <div className="container">
                        <p className="section-subtitle">Checkout Our Services</p>

                        <h2 className="h2 section-title">Taxi Services</h2>

                        <p className="section-text">
                            Discover the best destinations with our reliable taxi services.
                            Our experienced drivers ensure a comfortable and unforgettable
                            journey.
                        </p>

                        <ul className="package-list">
                            {serviceList.map((i) => (
                                <li>
                                    <div className="package-card">
                                        <figure className="card-banner">
                                            <Image
                                                src={i.img}
                                                alt="Experience The Great Holiday On Beach"
                                                loading="lazy"
                                                height={290}
                                                width={380}
                                            />
                                        </figure>

                                        <div className="card-content">
                                            <h3 className="h3 card-title">{i.title}</h3>

                                            <p className="card-text">{i.subtitle}</p>

                                            <ul className="card-meta-list">
                                                {i.features.map((ft) => (
                                                    <li className="card-meta-item">
                                                        <div className="meta-box">
                                                            {ft.icon === "BiTime" && <BiTime />}
                                                            {ft.icon === "BiLocationPlus" && (
                                                                <BiLocationPlus />
                                                            )}
                                                            {ft.icon === "AiFillCar" && <AiFillCar />}
                                                            <p className="text">{ft.text}</p>
                                                        </div>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="card-price">
                                            <div className="wrapper">
                                                <p className="reviews">(25 reviews)</p>

                                                <div className="card-rating">
                                                    {stars.map(() => (
                                                        <BiSolidStar />
                                                        ))}
                                                </div>
                                            </div>

                                            {/* <p className="price">
                                                $750
                                                <span>/ per person</span>
                                            </p> */}
                                            <p onClick={callHandler} className="text-1xl font-bold text-green-500 animate-bounce mb-5">Call now for more info</p>
                                            <button className="btn btn-secondary" onClick={callHandler}>Book Now</button>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>

                        <button className="btn btn-primary">View All Packages</button>
                    </div>
                </section>

                <section className="gallery" id="gallery">
                    <div className="container">
                        <p className="section-subtitle">Photo Gallery</p>

                        <h2 className="h2 section-title">Photo's From Travellers</h2>

                        <p className="section-text">
                            Discover the beauty of diverse destinations through the lens of
                            passionate travelers. Each photo tells a unique story, showcasing
                            the wonders of our world.
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

                            <h2 className="h2 section-title">
                                START YOUR MEMORABLE JOURNEY TODAY!
                            </h2>

                            <p className="section-text">
                                Explore tailored adventures in specific regions with our travel booking services. Immerse yourself in exceptional accommodations and create unforgettable memories in limited, extraordinary destinations. Don't miss out on this unique journey! Remember us as your gateway to remarkable local experiences.
                            </p>
                        </div>

                        <button className="btn btn-secondary" onClick={callHandler}>Contact Us !</button>
                    </div>
                </section>
            </article>
        </main>
    );
};

export default Main;
