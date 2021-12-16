import React from "react"

import data from "../data.js"
import Product from "../components/Product.js";

export default function HomeScreen() {
    return (
        <div>
            <div className="categories">
                <div className="small-container">
                    <div className="row">
                        <div className="col-3">
                            <img src="images/Book 1.jpg" alt="Book 1" />
                        </div>
                        <div className="col-3">
                            <img src="images/Book 2.jpg" alt="Book 2" />
                        </div>
                        <div className="col-3">
                            <img src="images/Book 3.jpg" alt="Book 3" />
                        </div>
                    </div>
                </div>
            </div>


            <div className="small-container">
                <h2 className="title">Help-self</h2>
                <div className="row">
                    {data.products.map((product) => (
                        <Product key={product._id} product={product}></Product>
                    ))}

                </div>
                <h2 className="title">Bestsellers</h2>
                <div className="row">
                    {data.products.map((product) => (
                        <Product key={product._id} product={product}></Product>
                    ))}
                </div>
            </div>


            <div className="offer">
                <div className="small-container">
                    <div className="row">
                        <div className="col-2">
                            <img src="images/offer-Book.jpg" className="offer-img" />
                        </div>
                        <div className="col-2">
                            <p>Available on EbookStore</p>
                            <br />
                            <h2>I Don't Want To Die Poor</h2>
                            <br />
                            <small>
                                Making Michael Arceneaux's I Don't Want to Die Poor required
                                reading in high schools across the country would help a lot of
                                young people think twice about the promise that going to college
                                at any cost is the only path to upward social mobility.
                            </small>
                            <a href="#" className="btn">Buy Now &#8594;</a>
                        </div>
                    </div>
                </div>
            </div>



            <div className="testimonial">
                <div className="small-container">
                    <div div className="row">
                        <div className="col-3">
                            <i className="fa fa-quote-left"></i>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure
                                debitis perferendis, necessitatibus ipsum quia ad sit amet.
                            </p>
                            <div className="rating">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star-o"></i>
                            </div>
                            <img src="images/zeeshan.jpg" alt="zeeshansaeed" />
                            <h3>Your Name</h3>
                        </div>
                        <div className="col-3">
                            <i className="fa fa-quote-left"></i>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure
                                debitis perferendis, necessitatibus ipsum quia ad sit amet.
                            </p>
                            <div className="rating">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star-o"></i>
                            </div>
                            <img src="images/zeeshan.jpg" alt="zeeshansaeed" />
                            <h3>Your Name</h3>
                        </div>
                        <div className="col-3">
                            <i className="fa fa-quote-left"></i>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure
                                debitis perferendis, necessitatibus ipsum quia ad sit amet.
                            </p>
                            <div className="rating">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star-o"></i>
                            </div>
                            <img src="images/zeeshan.jpg" alt="zeeshansaeed" />
                            <h3>Your Name</h3>
                        </div>
                    </div>
                </div>
            </div>



            <div className="publishers">
                <div className="small-container">
                    <div className="row">
                        <div className="col-5">
                            <img src="images/publisher1.jpg" />
                        </div>
                        <div className="col-5">
                            <img src="images/publisher2.png" />
                        </div>
                        <div className="col-5">
                            <img src="images/publisher3.jpeg" />
                        </div>
                        <div className="col-5">
                            <img src="images/publisher4.jpg" />
                        </div>
                        <div className="col-5">
                            <img src="images/publisher5.jpg" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}