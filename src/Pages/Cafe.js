
import React from "react";
import { useSearchParams } from "react-router-dom";
import { CoffeeData } from "../Components/CoffeData";
import CoffeeItem from "../Components/CoffeItem";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
 <Link to="/home">Home</Link>
function Cafe() {
  const [searchParams] = useSearchParams();
  const area = searchParams.get("area") ; 
  const filteredData = CoffeeData[area] || [];
<Link to="/cafe">Cafe</Link>
  return (
 <>
 <Navbar/>

    <Container className="mt-5">

      <h2 className="mb-4">{area} / Coffee</h2>

      
      <Row className="g-4">
        {filteredData.map((item) => (
          <Col xs={12} md={4} key={item.id}>
            <Card className="coffee-card">
              <CoffeeItem {...item} />
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
    <Footer/>
    </>
  );
}
export default Cafe;