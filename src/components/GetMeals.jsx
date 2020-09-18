import React, { useEffect } from "react";
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBContainer, MDBIcon, MDBBtn, MDBInput, MDBIframe } from "mdbreact";
import Nav from "./Nav";
import Footer from "./Footer";
import old2 from '../assets/old2.jpg';
import old3 from '../assets/oldladyandwoman.jpg';

const GetMeals = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div>
            <header style={{ marginBottom: '100px' }}>
                <Nav />
            </header>
            <section className="my-5">
                <h2 className="h1-responsive font-weight-bold text-center mdb-color-text my-5">
                    Meal Services
                </h2>
                <p className="text-center w-responsive mx-auto pb-1">
                    Our flagship program, Meal Services, provides nourishing meals to low-income and homebound seniors in Atlanta who are unable to afford or access adequate nutrition. Currently, the meal services program delivers meals every Saturday to frail, homebound and low-income seniors residing in Fulton County. <b>Having trouble finding your local office? <a href='/contact'>Contact us!</a></b>
                </p>
                <MDBRow>
                    <MDBCol lg="12" className="lg-0 mb-4 px-4">
                        <div style={{ width: '100%', height: '775px', position: 'relative', overflow: 'hidden' }}>
                            <iframe title='find your local meals on wheels office' style={{ position: 'absolute', top: '-200px', left: '0px', width: '100%', height: '1000px' }} scrolling='no' src="https://www.mealsonwheelsamerica.org/findmeals"></iframe>
                        </div>
                    </MDBCol>
                </MDBRow>
            </section>
            <section>
                <h2 className="h1-responsive font-weight-bold text-center my-5">
                    Services
                </h2>
                <MDBRow>
                    <MDBCol lg="5" className="text-center text-lg-left">
                        <img
                            className="img-fluid p-2"
                            src={old2}
                            alt=""
                        />
                        <img
                            className="img-fluid p-2"
                            src={old3}
                            alt=""
                        />
                    </MDBCol>
                    <MDBCol lg="7">
                        <MDBRow className="mb-3">
                            <MDBCol size="1">
                                <MDBIcon icon="truck" size="lg" className="blue-text" />
                            </MDBCol>
                            <MDBCol xl="10" md="11" size="10">
                                <h5 className="font-weight-bold mdb-color-text mb-3">Home Deliveries</h5>
                                <p className="text-muted">
                                    Our team, along with our helpful and much needed volunteers, hit the streets every week to deliver nutritious meals to qualifying Atlanta seniors. Check out our volunteers page to get involved!
                                </p>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow className="mb-3">
                            <MDBCol size="1">
                                <MDBIcon icon="users" size="lg" className="blue-text" />
                            </MDBCol>
                            <MDBCol xl="10" md="11" size="10">
                                <h5 className="font-weight-bold mb-3">Congregate Meals</h5>
                                <p className="text-muted">
                                    MOWA also provides meals for congregate settings. As with all of the meals that we serve, our congregate meals are nutritious and well-balanced, but crafted to be enjoyable too!
                                </p>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow className="mb-3">
                            <MDBCol size="1">
                                <MDBIcon icon="carrot" size="lg" className="blue-text" />
                            </MDBCol>
                            <MDBCol xl="10" md="11" size="10">
                                <h5 className="font-weight-bold mb-3">MOWA Fresh Food Partnership</h5>
                                <p className="text-muted">
                                    MOWA partners with farmers markets, local growers, and businesses to provide fresh fruits and vegetables as part of a balanced meal plan to improve the nutrition and health of qualifying seniors.
                                </p>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow className="mb-3">
                            <MDBCol size="1">
                                <MDBIcon icon="shopping-cart" size="lg" className="blue-text" />
                            </MDBCol>
                            <MDBCol xl="10" md="11" size="10">
                                <h5 className="font-weight-bold mb-3">Food Pantry</h5>
                                <p className="text-muted">
                                    MOWA's Pantry Program serves as a critical stop-gap for seniors waiting to receive home-delivered meals. Seniors receive a bag filled with a month-long supply of shelf-stable items.
                                </p>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow className="mb-3">
                            <MDBCol size="1">
                                <MDBIcon icon="dog" size="lg" className="blue-text" />
                            </MDBCol>
                            <MDBCol xl="10" md="11" size="10">
                                <h5 className="font-weight-bold mb-3">Pet Food Program</h5>
                                <p className="text-muted">
                                    For many of our homebound clients, their pets are the only family they have. However, income restrictions create a struggle to provide for their furry friends.
                                </p>
                            </MDBCol>
                        </MDBRow>
                    </MDBCol>
                </MDBRow>
            </section>
            <footer>
                <Footer />
            </footer>
        </div>
    );
}

export default GetMeals;