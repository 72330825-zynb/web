import mountain from '../Assets/mountain.jpg';// awl sora t3olet overly
import React from "react";
import "../Style/Main.css";
import SearchIcon from '@mui/icons-material/Search';// search icon
import ForestRounded from '@mui/icons-material/ForestRounded';// l8abat
import RestaurantRoundedIcon from '@mui/icons-material/RestaurantRounded';// t3ol l mat3am
import LocalCafeIcon from '@mui/icons-material/LocalCafe';// icon l cafe
import TsunamiIcon from '@mui/icons-material/Tsunami';// icon l ba7er
import CastleIcon from '@mui/icons-material/Castle';//icon l 2thrat
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import Imagecarousel from '../Components/Imagecarousel'; // hyda ll carousel
import c1 from '../Assets/c1.jpg';// beirut
import c2 from '../Assets/c2.jpg';// b3albak
import c3 from '../Assets/c3.jpg';//balo3a bal3a
import { Carousel } from 'react-bootstrap';
import DestinationList from '../Components/DestinationList';
import DestinationItem from '../Components/DestinationItem';
import Cafe from './Cafe';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';


export default function HeroImage() {
  const navigate = useNavigate();

  const handleFilterClick = (page) => {
     const area = document.getElementById("area-select").value;
     const price = document.getElementById("price-select").value;
     navigate(`/${page}?area=${area}&price=${price}`);
  }

  return (
    <>
    <Navbar/>
    <div>
      <div className="hero-container">

        {/* Background Image */}
        <img src={mountain} className="hero-img" />

        {/* Overlay Title */}
        <div className="overlay d-flex flex-column justify-content-center align-items-center">
          <h1 className="text-white text-center" style={{ marginTop: "50px" }}>
            Find Nearby Places & Things
          </h1>

          {/* Search Bar */}
          <div className="search-bar">
            <select id="area-select">
              <option>All Areas</option>
              <option>Beirut</option>
              <option>North Lebanon</option>
              <option>Mount Lebanon</option>
              <option>Tyre</option>
            </select>

            <span className="v-line"></span>

            <input type="text" placeholder="Enter a location" />

            <span className="v-line"></span>

            <select id='price-select'>
              <option>Price Range</option>
              <option>$10 - $50</option>
              <option>$50 - $100</option>
              <option>$200+</option>
            </select>

            <span className="v-line"></span>

            <div className="search-button-area">
              <div className='icon-circle' style={{
                color: 'white',
                boxShadow: "0 4px 10px rgba(219, 210, 210, 0.1)",
                background:"#a3e4bdff"
              }}>
                <SearchIcon />
              </div>
              <button className="search-btn" style={{ fontSize:"14px" }}>
                Search Now
              </button>
            </div>
          </div>

          {/* Filter Icons */}
          <div className="filter-icons">

            <div className="icon-wrapper" onClick={() => handleFilterClick("nature")}>
              <div className="icon-circle"><ForestRounded /></div>
              <p>Nature</p>
            </div>

            <div className="icon-wrapper" onClick={() => handleFilterClick("restaurant")}>
              <div className="icon-circle"><RestaurantRoundedIcon /></div>
              <p>Restaurant</p>
            </div>

            <div className="icon-wrapper" onClick={() => handleFilterClick("Cafe")}>
              <div className="icon-circle"><LocalCafeIcon /></div>
              <p>Cafe</p>
            </div>

            <div className="icon-wrapper" onClick={() => handleFilterClick("heritage")}>
              <div className="icon-circle"><CastleIcon /></div>
              <p>Heritage</p>
            </div>

            <div className="icon-wrapper" onClick={() => handleFilterClick("waters")}>
              <div className="icon-circle"><TsunamiIcon /></div>
              <p>Waters</p>
            </div>

          </div>
        </div>
      </div>
    













<div className="full-width-section">
  <div className="carousel-container">

    <p className="carousel-title">
      YOUR JOURNEY BEGINS HERE —————————————————————————————————————— CHOOSE YOUR FIRST STEP
    </p>

    <Carousel className="custom-carousel">
      <Carousel.Item>
        <img className="d-block w-100" src={c1} alt="slide1" />
        <Carousel.Caption>
          <h3>Rouche</h3>
          <p>The heart of beauty on the coast and every Lebanese heart</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={c2} alt="slide2" />
        <Carousel.Caption>
          <h3>Baalbak</h3>
          <p>The jewel of Lebanon's Heritage</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={c3} alt="slide3" />
        <Carousel.Caption>
          <h3>Bal3a</h3>
          <p>Natures Hidden Gem</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

  </div>
</div>











<div className="red-section"></div> 
<div >
  <h2 style={{fontWeight:"bold" , fontFamily:"Trocchi" , marginTop:"50px" , marginLeft:"30px"}}> Featured destinations </h2>
</div>
<div className="destination-list d-flex gap-2 overflow-auto px-4 py-4">
  {DestinationList.map((dest, idx) => (
    <div className="flex-shrink-0" key={idx}>
      <DestinationItem
        image={dest.image}
        name={dest.name}
        location={dest.location}
        details={dest.details}
      />
    </div>
  ))}
</div>








</div> 
<Footer/>
</>
  );
}

