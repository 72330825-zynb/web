import React, { useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CommentIcon from "@mui/icons-material/Comment";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import StarIcon from "@mui/icons-material/Star";
import { Offcanvas, Button } from "react-bootstrap";
import Collapse from "react-bootstrap/Collapse";
import "../Style/Restaurant.css";

function RestaurantItem({
  title,
  image,
  favorite: initialFavorite,
  rating,
  comments,
  menu,
}) {
  const [isFavorite, setIsFavorite] = useState(initialFavorite);
  const [showComments, setShowComments] = useState(false);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

  const toggleFavorite = () => setIsFavorite(!isFavorite);
  const handleClose = () => setShowComments(false);

  const openComments = (restaurant) => {
    setSelectedRestaurant(restaurant);
    setShowComments(true);

    
  };

  return (
    <div className="resturant-card">
      <img src={image} alt={title} className="resturant-image" />

      <div className="resturant-info">
        <h3>{title}</h3>

        <div className="resturant-rating-fav">
          <div className="stars">
            {Array.from({ length: rating }).map((_, idx) => (
              <StarIcon key={idx} style={{ color: "#FFD700" }} />
            ))}
          </div>

          <FavoriteIcon
            style={{
              color: isFavorite ? "red" : "gray",
              cursor: "pointer",
            }}
            onClick={toggleFavorite}
          />
        </div>

        {/* মন্তব্য */}
        <div className="resturant-actions">
          <Button
            variant="light"
            className="comment-btn"
            onClick={() =>
              openComments({
                title,
                image,
                favorite: isFavorite,
                rating,
                comments,
                menu,
              })
            }
          >
            <CommentIcon /> Comments
          </Button>

          {/* زر المينو يفتح اللينك بالكروم مباشرة */}
          <Button
            as="a"
            href={menu}
            target="_blank"
            rel="noopener noreferrer"
            className="d-flex align-items-center"
          >
            <RestaurantMenuIcon style={{ marginRight: "5px" }} /> Menu
          </Button>
        </div>
      </div>

      {/* اوف كانفاس التعليقات */}
      <Offcanvas show={showComments} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            {selectedRestaurant?.title} - Comments
          </Offcanvas.Title>
        </Offcanvas.Header>

        <Offcanvas.Body>
          <div className="comments-container">
            {selectedRestaurant?.comments.map((c, index) => (
              <div className="comment-card" key={index}>
                <img src={c.image} alt={c.name} className="comment-img" />
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

export default RestaurantItem;
