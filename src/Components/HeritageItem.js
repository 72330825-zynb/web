import React, { useState } from "react";
import { Carousel, Accordion, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Style/Heritage.css";

function HeritageItem ({ name, images, story, cost, weather }) {
  const [showStory, setShowStory] = useState(false);

  return (
    <div className="heritage-card">

      {/* Left - Carousel */}
      <div className="heritage-left">
        <Carousel>
          {images.map((img, index) => (
            <Carousel.Item key={index}>
              <img
                className="d-block w-100 heritage-image"
                src={img}
                alt={`slide-${index}`}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>

      {/* Right - Content */}
      <div className="heritage-right" style={{fontFamily:"Lexend"}}>
        <h2 className="her">{name}</h2>

        {/* Story Button */}
        <Button 
          
          onClick={() => setShowStory(!showStory)}
          className=" story-btn mb-3"
          
        >
          Story
        </Button>

        {/* Story Text */}
        {showStory && (
          <p className="story-text">{story}</p>
        )}

        {/* Details Accordion */}
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Cost</Accordion.Header>
            <Accordion.Body>{cost}</Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>Weather</Accordion.Header>
            <Accordion.Body>{weather}</Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>

    </div>
  );
}

export default HeritageItem;