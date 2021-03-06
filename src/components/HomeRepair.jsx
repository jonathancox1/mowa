import React, { Component } from "react";
import { MDBContainer, MDBCol, MDBRow, MDBCard, MDBCardUp, MDBCardBody, MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBCardImage, MDBRotatingCard, MDBIcon } from "mdbreact";
import butlerbefore from '../assets/HomeRepairs/ButlerBath-before.png';
import butlerafter from '../assets/HomeRepairs/ButlerBath-after.png';
import clarkbefore from '../assets/HomeRepairs/clarkoven-before.png';
import clarkafter from '../assets/HomeRepairs/clarkoven-after.png';
import curtisbefore from '../assets/HomeRepairs/curtisac-before.png';
import curtisafter from '../assets/HomeRepairs/curtisac-after.png';
import dobbinsbefore from '../assets/HomeRepairs/dobbinsrail-before.png';
import dobbinsafter from '../assets/HomeRepairs/dobbinsrail-after.png';
import elderbefore from '../assets/HomeRepairs/elderroof-before.png';
import elderafter from '../assets/HomeRepairs/elderroof-after.png';
import ellisonbefore from '../assets/HomeRepairs/ellisonroof-before.png';
import ellisonafter from '../assets/HomeRepairs/eliisonroof-after.png';
import farmerbefore from '../assets/HomeRepairs/farmerhvac-before.png';
import farmerafter from '../assets/HomeRepairs/farmerhvac-after.png';
import fordbefore from '../assets/HomeRepairs/fordsink-before.png';
import fordafter from '../assets/HomeRepairs/fordsink-after.png';
import harrisbefore from '../assets/HomeRepairs/harrishvac-before.png';
import harrisafter from '../assets/HomeRepairs/harrishvac-after.png';
import home from '../assets/dkhome.jpeg';
import Nav from "./Nav";
import Footer from "./Footer";
import Partners from "./Partners";

class HomeRepairs extends Component {

    state = {
        flipped1: false,
    }

    handleFlipping = id => () => {
        const cardId = `flipped${id}`;
        this.setState({ [cardId]: !this.state[cardId] });
    }

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <div>
                <header style={{ marginBottom: '56px' }}>
                    <Nav />
                </header>
                <div>
                    <MDBCard
                        className="card-image"
                        // style={{
                        //     backgroundImage: "url(" + background + ")"
                        // }}
                    >
                        <div className="pb-5 px-2 text-center">
                            <div className="my-5 px-1 text-center">
                                <h2 className="h1-responsive mdb-color-text font-weight-bold my-5">
                                    MOWA Home Repair Services
                                </h2>
                                <p className="black-text text-justify w-responsive mx-auto mb-3">
                                    Through our Home Repair Services program, we work to ensure our senior clients’ homes are safe, warm, dry, and accessible. Our skilled technicians and licensed general contractors complete rehabilitation and handyman projects on both the interior and exterior of homes, to enable senior and veteran homeowners to maintain their independence and continue living at home as they age.
                                    
                                </p>
                                <h4 className='white-text font-weight-bold mb-5'><a href='https://portal.neighborlysoftware.com/mowa/Participant/Login'>Get Pre-Qualified Now!</a></h4>

                                <hr className='mx-5'/>
                                <h2 className="h3-responsive black-text font-weight-bold mt-5 mb-3">
                                    Checkout Some of Our Previous Home Repairs!
                                </h2>
                                <div className='d-flex justify-content-center'>
                                    <MDBCarousel activeItem={1} length={3} slide={true} showControls={true} showIndicators={true} multiItem>
                                        <MDBCarouselInner>
                                            <MDBRow between>
                                                <MDBCarouselItem itemId="1">
                                                    <MDBCol md='4' style={{ minHeight: '26rem', width: "22rem" }}>
                                                        <MDBRotatingCard flipped={this.state.flipped1} className="text-center h-100 w-100">
                                                            <MDBCard className="face front">
                                                                <MDBCardUp>
                                                                    <img className="card-img-top" src={butlerbefore} alt="old bathroom" />
                                                                </MDBCardUp>
                                                                <MDBCardBody className='blue-gradient white-text rounded-bottom'>
                                                                    <h4 className="font-weight-bold mb-3">
                                                                        <MDBIcon size='lg' className='mr-2' icon="bath" />New Bath & Toilet
                                                                    </h4>
                                                                    <a href="#!" className="rotate-btn white-text" data-card="card-1" onClick={this.handleFlipping(1)}>
                                                                        See Results! <MDBIcon icon='hand-point-right' />
                                                                </a>
                                                                </MDBCardBody>
                                                            </MDBCard>
                                                            <MDBCard className="face back" style={{ height: "400px" }}>
                                                                <MDBCardImage className="img-fluid" src={butlerafter} alt='new bathroom' waves />
                                                                <MDBCardBody className='blue-gradient white-text rounded-bottom'>
                                                                    <p>
                                                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                                        Maxime quae, dolores dicta. Blanditiis rem amet repellat,
                                                                        dolores nihil quae.
                                                                    </p>
                                                                    <a href="#!" className="rotate-btn white-text" data-card="card-1" onClick={this.handleFlipping(1)}>
                                                                        <MDBIcon icon='hand-point-left' /> See Before
                                                                    </a>
                                                                </MDBCardBody>
                                                            </MDBCard>
                                                        </MDBRotatingCard>
                                                    </MDBCol>
                                                    <MDBCol md='4' style={{ minHeight: '26rem', width: "22rem" }}>
                                                        <MDBRotatingCard flipped={this.state.flipped2} className="text-center h-100 w-100">
                                                            <MDBCard className="face front">
                                                                <MDBCardUp>
                                                                    <img className="card-img-top" src={clarkbefore} alt="old oven" />
                                                                </MDBCardUp>
                                                                <MDBCardBody className='blue-gradient white-text rounded-bottom'>
                                                                    <h4 className="font-weight-bold mb-3">
                                                                        <MDBIcon size='lg' className='mr-2' icon="fire" />New Oven
                                                                    </h4>
                                                                    <a href="#!" className="rotate-btn white-text" data-card="card-1" onClick={this.handleFlipping(2)}>
                                                                        See Results! <MDBIcon icon='hand-point-right' />
                                                                </a>
                                                                </MDBCardBody>
                                                            </MDBCard>
                                                            <MDBCard className="face back" style={{ height: "400px" }}>
                                                                <MDBCardImage className="img-fluid" src={clarkafter} alt="new oven" waves />
                                                                <MDBCardBody className='blue-gradient white-text rounded-bottom'>
                                                                    <p>
                                                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                                        Maxime quae, dolores dicta. Blanditiis rem amet repellat,
                                                                        dolores nihil quae.
                                                                    </p>
                                                                    <a href="#!" className="rotate-btn white-text" data-card="card-1" onClick={this.handleFlipping(2)}>
                                                                        <MDBIcon icon='hand-point-left' /> See Before
                                                                    </a>
                                                                </MDBCardBody>
                                                            </MDBCard>
                                                        </MDBRotatingCard>
                                                    </MDBCol>
                                                    <MDBCol md='4' style={{ minHeight: '26rem', width: "22rem" }}>
                                                        <MDBRotatingCard flipped={this.state.flipped3} className="text-center h-100 w-100">
                                                            <MDBCard className="face front">
                                                                <MDBCardUp>
                                                                    <img className="card-img-top" src={curtisbefore} alt="old ac unit" />
                                                                </MDBCardUp>
                                                                <MDBCardBody className='blue-gradient white-text rounded-bottom'>
                                                                    <h4 className="font-weight-bold mb-3">
                                                                        <MDBIcon size='lg' className='mr-2' icon="fan" />New A/C
                                                                    </h4>
                                                                    <a href="#!" className="rotate-btn white-text" data-card="card-1" onClick={this.handleFlipping(3)}>
                                                                        See Results! <MDBIcon icon='hand-point-right' />
                                                                </a>
                                                                </MDBCardBody>
                                                            </MDBCard>
                                                            <MDBCard className="face back" style={{ height: "400px" }}>
                                                                <MDBCardImage className="img-fluid" src={curtisafter} alt="new ac unit" waves />
                                                                <MDBCardBody className='blue-gradient white-text rounded-bottom'>
                                                                    <p>
                                                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                                        Maxime quae, dolores dicta. Blanditiis rem amet repellat,
                                                                        dolores nihil quae.
                                                                    </p>
                                                                    <a href="#!" className="rotate-btn white-text" data-card="card-1" onClick={this.handleFlipping(3)}>
                                                                        <MDBIcon icon='hand-point-left' /> See Before
                                                                    </a>
                                                                </MDBCardBody>
                                                            </MDBCard>
                                                        </MDBRotatingCard>
                                                    </MDBCol>
                                                </MDBCarouselItem>
                                                <MDBCarouselItem itemId="2">
                                                    <MDBCol md='4' style={{ minHeight: '26rem', width: "22rem" }}>
                                                        <MDBRotatingCard flipped={this.state.flipped4} className="text-center h-100 w-100">
                                                            <MDBCard className="face front">
                                                                <MDBCardUp>
                                                                    <img className="card-img-top" src={dobbinsbefore} alt="old railing" />
                                                                </MDBCardUp>
                                                                <MDBCardBody className='blue-gradient white-text rounded-bottom'>
                                                                    <h4 className="font-weight-bold mb-3">
                                                                        <MDBIcon size='lg' className='mr-2' icon="shoe-prints" />New Railing
                                                                    </h4>
                                                                    <a href="#!" className="rotate-btn white-text" data-card="card-1" onClick={this.handleFlipping(4)}>
                                                                        See Results! <MDBIcon icon='hand-point-right' />
                                                                </a>
                                                                </MDBCardBody>
                                                            </MDBCard>
                                                            <MDBCard className="face back" style={{ height: "400px" }}>
                                                                <MDBCardImage className="img-fluid" src={dobbinsafter} alt="new railing" waves />
                                                                <MDBCardBody className='blue-gradient white-text rounded-bottom'>
                                                                    <p>
                                                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                                        Maxime quae, dolores dicta. Blanditiis rem amet repellat,
                                                                        dolores nihil quae.
                                                                    </p>
                                                                    <a href="#!" className="rotate-btn white-text" data-card="card-1" onClick={this.handleFlipping(4)}>
                                                                        <MDBIcon icon='hand-point-left' /> See Before
                                                                    </a>
                                                                </MDBCardBody>
                                                            </MDBCard>
                                                        </MDBRotatingCard>
                                                    </MDBCol>
                                                    <MDBCol md='4' style={{ minHeight: '26rem', width: "22rem" }}>
                                                        <MDBRotatingCard flipped={this.state.flipped5} className="text-center h-100 w-100">
                                                            <MDBCard className="face front">
                                                                <MDBCardUp>
                                                                    <img className="card-img-top" src={elderbefore} alt="old roof" />
                                                                </MDBCardUp>
                                                                <MDBCardBody className='blue-gradient white-text rounded-bottom'>
                                                                    <h4 className="font-weight-bold mb-3">
                                                                        <MDBIcon size='lg' className='mr-2' icon="home" />New Roof
                                                                    </h4>
                                                                    <a href="#!" className="rotate-btn white-text" data-card="card-1" onClick={this.handleFlipping(5)}>
                                                                        See Results! <MDBIcon icon='hand-point-right' />
                                                                </a>
                                                                </MDBCardBody>
                                                            </MDBCard>
                                                            <MDBCard className="face back" style={{ height: "400px" }}>
                                                                <MDBCardImage className="img-fluid" src={elderafter} alt="new roof" waves />
                                                                <MDBCardBody className='blue-gradient white-text rounded-bottom'>
                                                                    <p>
                                                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                                        Maxime quae, dolores dicta. Blanditiis rem amet repellat,
                                                                        dolores nihil quae.
                                                                    </p>
                                                                    <a href="#!" className="rotate-btn white-text" data-card="card-1" onClick={this.handleFlipping(5)}>
                                                                        <MDBIcon icon='hand-point-left' /> See Before
                                                                    </a>
                                                                </MDBCardBody>
                                                            </MDBCard>
                                                        </MDBRotatingCard>
                                                    </MDBCol>
                                                    <MDBCol md='4' style={{ minHeight: '26rem', width: "22rem" }}>
                                                        <MDBRotatingCard flipped={this.state.flipped6} className="text-center h-100 w-100">
                                                            <MDBCard className="face front">
                                                                <MDBCardUp>
                                                                    <img className="card-img-top" src={ellisonbefore} alt="old roof" />
                                                                </MDBCardUp>
                                                                <MDBCardBody className='blue-gradient white-text rounded-bottom'>
                                                                    <h4 className="font-weight-bold mb-3">
                                                                        <MDBIcon size='lg' className='mr-2' icon="home" />New Roof
                                                                    </h4>
                                                                    <a href="#!" className="rotate-btn white-text" data-card="card-1" onClick={this.handleFlipping(6)}>
                                                                        See Results! <MDBIcon icon='hand-point-right' />
                                                                </a>
                                                                </MDBCardBody>
                                                            </MDBCard>
                                                            <MDBCard className="face back" style={{ height: "400px" }}>
                                                                <MDBCardImage className="img-fluid" src={ellisonafter} alt="new roof" waves />
                                                                <MDBCardBody className='blue-gradient white-text rounded-bottom'>
                                                                    <p>
                                                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                                        Maxime quae, dolores dicta. Blanditiis rem amet repellat,
                                                                        dolores nihil quae.
                                                                    </p>
                                                                    <a href="#!" className="rotate-btn white-text" data-card="card-1" onClick={this.handleFlipping(6)}>
                                                                        <MDBIcon icon='hand-point-left' /> See Before
                                                                    </a>
                                                                </MDBCardBody>
                                                            </MDBCard>
                                                        </MDBRotatingCard>
                                                    </MDBCol>
                                                </MDBCarouselItem>
                                                <MDBCarouselItem itemId="3">
                                                    <MDBCol md='4' style={{ minHeight: '26rem', width: "22rem" }}>
                                                        <MDBRotatingCard flipped={this.state.flipped7} className="text-center h-100 w-100">
                                                            <MDBCard className="face front">
                                                                <MDBCardUp>
                                                                    <img className="card-img-top" src={farmerbefore} alt="old HVAC" />
                                                                </MDBCardUp>
                                                                <MDBCardBody className='blue-gradient white-text rounded-bottom'>
                                                                    <h4 className="font-weight-bold mb-3">
                                                                        <MDBIcon size='lg' className='mr-2' icon="wind" />New HVAC
                                                                    </h4>
                                                                    <a href="#!" className="rotate-btn white-text" data-card="card-1" onClick={this.handleFlipping(7)}>
                                                                        See Results! <MDBIcon icon='hand-point-right' />
                                                                </a>
                                                                </MDBCardBody>
                                                            </MDBCard>
                                                            <MDBCard className="face back" style={{ height: "400px" }}>
                                                                <MDBCardImage className="img-fluid" src={farmerafter} alt="new HVAC" waves />
                                                                <MDBCardBody className='blue-gradient white-text rounded-bottom'>
                                                                    <p>
                                                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                                        Maxime quae, dolores dicta. Blanditiis rem amet repellat,
                                                                        dolores nihil quae.
                                                                    </p>
                                                                    <a href="#!" className="rotate-btn white-text" data-card="card-1" onClick={this.handleFlipping(7)}>
                                                                        <MDBIcon icon='hand-point-left' /> See Before
                                                                    </a>
                                                                </MDBCardBody>
                                                            </MDBCard>
                                                        </MDBRotatingCard>
                                                    </MDBCol>
                                                    <MDBCol md='4' style={{ minHeight: '26rem', width: "22rem" }}>
                                                        <MDBRotatingCard flipped={this.state.flipped8} className="text-center h-100 w-100">
                                                            <MDBCard className="face front">
                                                                <MDBCardUp>
                                                                    <img className="card-img-top" src={fordbefore} alt="old sink" />
                                                                </MDBCardUp>
                                                                <MDBCardBody className='blue-gradient white-text rounded-bottom'>
                                                                    <h4 className="font-weight-bold mb-3">
                                                                        <MDBIcon size='lg' className='mr-2' icon='sink' />New Sink
                                                                    </h4>
                                                                    <a href="#!" className="rotate-btn white-text" data-card="card-1" onClick={this.handleFlipping(8)}>
                                                                        See Results! <MDBIcon icon='hand-point-right' />
                                                                </a>
                                                                </MDBCardBody>
                                                            </MDBCard>
                                                            <MDBCard className="face back" style={{ height: "400px" }}>
                                                                <MDBCardImage className="img-fluid" src={fordafter} alt="new sink" waves />
                                                                <MDBCardBody className='blue-gradient white-text rounded-bottom'>
                                                                    <p>
                                                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                                        Maxime quae, dolores dicta. Blanditiis rem amet repellat,
                                                                        dolores nihil quae.
                                                                    </p>
                                                                    <a href="#!" className="rotate-btn white-text" data-card="card-1" onClick={this.handleFlipping(8)}>
                                                                        <MDBIcon icon='hand-point-left' /> See Before
                                                                    </a>
                                                                </MDBCardBody>
                                                            </MDBCard>
                                                        </MDBRotatingCard>
                                                    </MDBCol>
                                                    <MDBCol md='4' style={{ minHeight: '26rem', width: "22rem" }}>
                                                        <MDBRotatingCard flipped={this.state.flipped9} className="text-center h-100 w-100">
                                                            <MDBCard className="face front">
                                                                <MDBCardUp>
                                                                    <img className="card-img-top" src={harrisbefore} alt="old HVAC" />
                                                                </MDBCardUp>
                                                                <MDBCardBody className='blue-gradient white-text rounded-bottom'>
                                                                    <h4 className="font-weight-bold mb-3">
                                                                        <MDBIcon size='lg' className='mr-2' icon="wind" />New HVAC
                                                                    </h4>
                                                                    <a href="#!" className="rotate-btn white-text" data-card="card-1" onClick={this.handleFlipping(9)}>
                                                                        See Results! <MDBIcon icon='hand-point-right' />
                                                                    </a>
                                                                </MDBCardBody>
                                                            </MDBCard>
                                                            <MDBCard className="face back" style={{ height: "400px" }}>
                                                                <MDBCardImage className="img-fluid" src={harrisafter} alt="new HVAC" waves />
                                                                <MDBCardBody className='blue-gradient white-text rounded-bottom'>
                                                                    <p>
                                                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                                        Maxime quae, dolores dicta. Blanditiis rem amet repellat,
                                                                        dolores nihil quae.
                                                                    </p>
                                                                    <a href="#!" className="rotate-btn white-text" data-card="card-1" onClick={this.handleFlipping(9)}>
                                                                        <MDBIcon icon='hand-point-left' /> See Before
                                                                    </a>
                                                                </MDBCardBody>
                                                            </MDBCard>
                                                        </MDBRotatingCard>
                                                    </MDBCol>
                                                </MDBCarouselItem>
                                            </MDBRow>
                                        </MDBCarouselInner>
                                    </MDBCarousel>
                                </div>
                            </div>
                        </div>
                    </MDBCard>
                    <div>
                        <div className='streak streak-photo streak-long-1' style={{ backgroundImage: "url(" + home + ")" }}>
                            <div className='mask flex-center rgba-black-strong'>
                                <MDBContainer>
                                    <h1 className='text-center white-text my-3 text-uppercase font-weight-bold'>Home Repair Stats</h1>
                                    <MDBRow className='white-text text-center'>
                                        <MDBCol md='3' className='mb-2'>
                                            <MDBIcon icon="blind" size="2x" className="white-text" />
                                            <h1 className='mx-2 font-weight-bold'>73</h1>
                                            <p className='font-weight-bold'>Average Age</p>
                                        </MDBCol>
                                        <MDBCol md='3' className='mb-2'>
                                            <MDBIcon icon="female" size="2x" className="white-text" />
                                            <h1 className='mx-2 font-weight-bold'>91%</h1>
                                            <p className='font-weight-bold'>Single Females</p>
                                        </MDBCol>
                                        <MDBCol md='3' className='mb-2'>
                                            <MDBIcon icon="dollar-sign" size="2x" className="white-text" />
                                            <h1 className='mx-2 font-weight-bold'>1,143</h1>
                                            <p className='font-weight-bold'>Avg. Monthly Income</p>
                                        </MDBCol>
                                        <MDBCol md='3' className='mb-2'>
                                            <MDBIcon icon="home" size="2x" className="white-text" />
                                            <h1 className='mx-2 font-weight-bold'>350</h1>
                                            <p className='font-weight-bold'>Yearly Houses Repaired</p>
                                        </MDBCol>
                                    </MDBRow>
                                    {/* <figcaption className='figure-caption text-center cyan-text mb-2'>**2019 Results</figcaption> */}
                                </MDBContainer>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Partners />
                    </div>
                </div>
                <footer style={{ marginTop: '-25px' }}>
                    <Footer />
                </footer>
            </div>
        );
    }
}

export default HomeRepairs;