import React, { useState } from "react";
import { RestaurantData } from "../Components/RestaurantData";
import RestaurantItem from "../Components/RestaurantItem";
import { Container, Row, Col, Card, Form } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
function Restaurant() {

  const location = useLocation();
  const params = new URLSearchParams(location.search);


 
  const areaFromURL = params.get("area") ;
  const priceFromURL = params.get("price");

  const [area, setArea] = useState(areaFromURL);
  const [selectedPrice, setSelectedPrice] = useState(priceFromURL);

  const restaurants = RestaurantData[area] || [];

  const filteredData = restaurants.filter((item) => {

    if (selectedPrice === "$10 - $50") {
      return item.id >= 1 && item.id <= 5;
    } 
    
    else if (selectedPrice === "$50 - $100") {
      return item.id >= 6;
    } 
    
    else {
      return true;
    }
  });

  return (
     <>
 <Navbar/>
    <Container className="mt-5">
      <h2 className="mb-4">
        {area} / Restaurant
      </h2>

      {/* Dropdown السعر */}
      <Form className="mb-4">
        <Form.Select
          value={selectedPrice}
          onChange={(e) => setSelectedPrice(e.target.value)}
        >
          <option value="">All Prices</option>
          <option value="$10 - $50">$10 - $50</option>
          <option value="$50 - $100">$50 - $100</option>
        </Form.Select>
      </Form>

      {/* عرض المطاعم */}
      <Row className="g-4">
        {filteredData.length > 0 ? (
          filteredData.map((item) => (
            <Col xs={12} md={4} key={item.id}>
              <Card className="resturant-card">
                <RestaurantItem {...item} />
              </Card>
            </Col>
          ))
        ) : (
          <p>No restaurants found for this filter.</p>
        )}
      </Row>
    </Container>
     <Footer/>
        </>
  );
}

export default Restaurant;



