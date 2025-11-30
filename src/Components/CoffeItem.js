import React, { useState } from "react";
import FavoriteIcon from '@mui/icons-material/Favorite';
import CommentIcon from '@mui/icons-material/Comment';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import StarIcon from '@mui/icons-material/Star';
import { Offcanvas, Button } from "react-bootstrap";
import "../Style/Coffe.css";

import Collapse from 'react-bootstrap/Collapse';
function CoffeeItem({ title, image, favorite: initialFavorite, rating, comments, menu }) {
  const [isFavorite, setIsFavorite] = useState(initialFavorite);
  const [showComments, setShowComments] = useState(false);
  const [selectedCoffee, setSelectedCoffee] = useState(null);

  const toggleFavorite = () => setIsFavorite(!isFavorite);
  const handleClose = () => setShowComments(false);

  const openComments = (coffee) => {
    setSelectedCoffee(coffee);
    setShowComments(true);
  };

  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="coffee-card">
      <img src={image} alt={title} className="coffee-image" />

      <div className="coffee-info">
        <h3>{title}</h3>

        <div className="coffee-rating-fav">
          <div className="stars">
            {Array.from({ length: rating }).map((_, idx) => (
              <StarIcon key={idx} style={{ color: "#FFD700" }} />
            ))}
          </div>
          <FavoriteIcon 
            style={{ color: isFavorite ? "red" : "gray", cursor: "pointer" }}
            onClick={toggleFavorite}
          />
        </div>

        <div className="coffee-actions">
          <Button 
            variant="light" 
            className="comment-btn" 
            onClick={() => openComments({ title, image, favorite: isFavorite, rating, comments, menu })}
          >
            <CommentIcon /> Comments
          </Button>


<Button
  as="a"
  href={menu}
  target="_blank"
  rel="noopener noreferrer"
  className="d-flex align-items-center"
>
  <RestaurantMenuIcon style={{ marginRight: "5px" }} /> Menu
</Button>

       <Collapse in={openMenu}>
  <div id={`menu-collapse-${title}`} style={{ marginTop: "10px", padding: "8px", backgroundColor: "#f0f0f0", borderRadius: "5px" }}>
    {/* هون نعرض نص أو أي محتوى من CoffeeData */}
    {menu ? (
      <p style={{ margin: 0 }}>{menu}</p>
    ) : (
      <p style={{ margin: 0 }}>No menu available</p>
    )}
  </div>
</Collapse>








        </div>

      </div>




      <Offcanvas show={showComments} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            {selectedCoffee?.title} - Comments
          </Offcanvas.Title>
        </Offcanvas.Header>

        <Offcanvas.Body>
          <div className="comments-container">
            {selectedCoffee?.comments.map((c, index) => (
              <div className="comment-card" key={index}>
                <img src={c.image} alt={c.name} className="comment-img"/>
                <div className="comment-content">
                  <h4>{c.name}</h4>
                  <p className="commented-with">commented with @{c.name}</p>
                  <p>{c.text}</p>
                </div>
              </div>
            ))}
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default CoffeeItem;

