import React from "react";
import Button from "@material-ui/core/Button";
import "../App.css";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { BsChevronDown } from "react-icons/bs";

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div style={{ display: "flex", height: "20px" }}>
      <div style={{ marginLeft: "185px", marginTop: "5px" }}>
        <Button
          endIcon={<BsChevronDown style={{ width: "24px", height: "24px" }} />}
          style={{
            fontWeight: 700,
            fontSize: "14px",
            color: " #002f34",
          }}
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          ALL CATEGORIES
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <div style={{ display: "flex" }}>
            <div>
              <MenuItem
                style={{
                  fontWeight: "bold",
                  fontSize: "14px",
                  color: " #002f34",
                }}
                onClick={handleClose}
              >
                Vehicles
              </MenuItem>
              <MenuItem style={{ fontSize: "14px" }} onClick={handleClose}>
                Tractors & Trailers
              </MenuItem>
              <MenuItem onClick={handleClose}>
                {" "}
                <span className="menuCat">Boats</span>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                {" "}
                <span className="menuCat">Other Vehicles</span>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                {" "}
                <span className="menuCat">Rickshaw & Chingchi</span>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <span className="menuCat">Buses, Vans & Trucks</span>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <span className="menuCat">Buses, Vans & Trucks</span>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <span className="menuCat">Spare Parts</span>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <span className="menuCat">Cars Accessories</span>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <span className="menuCat">Cars on Installments</span>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <span className="menuCat">Cars</span>
              </MenuItem>
            </div>

            <div style={{ marginLeft: "100px" }}>
              <MenuItem
                style={{
                  fontWeight: "bold",
                  fontSize: "14px",
                  color: " #002f34",
                }}
                onClick={handleClose}
              >
                Animals
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <span className="menuCat">Other Animals</span>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <span className="menuCat">Pet Food & Accessories</span>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <span className="menuCat">Horses</span>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <span className="menuCat">Livestock</span>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <span className="menuCat">Dogs</span>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <span className="menuCat">Cats</span>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <span className="menuCat">Hens & Aseel</span>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <span className="menuCat">Birds</span>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <span className="menuCat">Fish & Aquariums</span>
              </MenuItem>
            </div>
            <div style={{ marginLeft: "100px" }}>
              <MenuItem
                style={{
                  fontWeight: "bold",
                  fontSize: "14px",
                  color: " #002f34",
                }}
                onClick={handleClose}
              >
                Fashion & Beauty
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <span className="menuCat">Other Fashion</span>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <span className="menuCat">Couture</span>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <span className="menuCat">Lawn & Pret</span>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <span className="menuCat">Wedding</span>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <span className="menuCat">Watches</span>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <span className="menuCat">Skin & Hair</span>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <span className="menuCat">Make Up</span>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <span className="menuCat">Jewellery</span>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <span className="menuCat">Footwear</span>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <span className="menuCat">Clothes</span>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <span className="menuCat">Accessories</span>
              </MenuItem>
            </div>

            <div style={{ marginLeft: "100px" }}>
              <MenuItem
                style={{
                  fontWeight: "bold",
                  fontSize: "14px",
                  color: " #002f34",
                }}
                onClick={handleClose}
              >
                Services
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <span className="menuCat">Farm & Fresh Food</span>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <span className="menuCat">Catering & Restaurant</span>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <span className="menuCat">Home & Office Repair</span>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <span className="menuCat">Movers & Packers</span>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <span className="menuCat">Maids & Domestic Help</span>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <span className="menuCat">Health & Beauty</span>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <span className="menuCat">Event Services</span>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <span className="menuCat">Electronics & Computer Repair</span>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <span className="menuCat">Other Services</span>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <span className="menuCat">Web Development</span>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <span className="menuCat">Drivers & Taxi</span>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <span className="menuCat">Car Rental</span>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <span className="menuCat">Travel & Visa</span>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <span className="menuCat">Education & Classes</span>
              </MenuItem>
            </div>
          </div>

          <div style={{ display: "flex" }}>
            <div>
              <MenuItem
                style={{
                  fontWeight: "bold",
                  fontSize: "14px",
                  color: " #002f34",
                }}
                onClick={handleClose}
              >
                Mobiles
              </MenuItem>
              <MenuItem
                style={{ fontSize: "14px", color: " #002f34" }}
                onClick={handleClose}
              >
                Mobile Phones
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <span className="menuCat">Accessories</span>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <span className="menuCat"> Tablets</span>
              </MenuItem>
            </div>

            <div style={{ marginLeft: "100px" }}>
              <MenuItem
                style={{
                  fontWeight: "bold",
                  fontSize: "14px",
                  color: " #002f34",
                }}
                onClick={handleClose}
              >
                Furniture & Home Decor
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <span className="menuCat">Other Household Items</span>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <span className="menuCat">Office Furniture</span>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <span className="menuCat">Curtains & Blinds</span>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <span className="menuCat">Rugs & Carpets</span>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <span className="menuCat">Painting & Mirrors</span>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <span className="menuCat">Garden & Outdoor</span>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <span className="menuCat">Tables & Dining</span>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <span className="menuCat">Home Decoration</span>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <span className="menuCat">Beds & Wardrobes</span>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <span className="menuCat">Beds & Wardrobes</span>
              </MenuItem>
            </div>
            <div style={{ marginLeft: "100px" }}>
              <MenuItem
                style={{
                  fontWeight: "bold",
                  fontSize: "14px",
                  color: " #002f34",
                }}
                onClick={handleClose}
              >
                Property for Rent
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <span className="menuCat">Land & Plots</span>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <span className="menuCat">Vacation Rentals - Guest Houses</span>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <span className="menuCat">Roommates & Paying Guests</span>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <span className="menuCat">Rooms</span>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <span className="menuCat">
                  Shops - Offices - Commercial Space
                </span>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <span className="menuCat">Portions & Floors</span>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <span className="menuCat">Apartments & Flats</span>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <span className="menuCat">Houses</span>
              </MenuItem>
            </div>

            <div style={{ marginLeft: "100px" }}>
              <MenuItem
                style={{
                  fontWeight: "bold",
                  fontSize: "14px",
                  color: " #002f34",
                }}
                onClick={handleClose}
              >
                Books, Sports & Hobbies
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <span className="menuCat">Other Hobbies</span>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <span className="menuCat">Gym & Fitness</span>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <span className="menuCat">Home & Office Repair</span>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <span className="menuCat">Sports Equipment</span>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <span className="menuCat">Musical Instruments</span>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <span className="menuCat">Books & Magazines</span>
              </MenuItem>
            </div>
          </div>
        </Menu>
      </div>

      {/* BREAD */}
      <div>
        <ul className="bread">
          <li>
            <a href="#">Mobile Phones</a>
          </li>
          <li>
            <a href="#">Cars</a>
          </li>
          <li>
            <a href="#">Motorcyles</a>
          </li>
          <li>
            <a href="#">Houses</a>
          </li>
          <li>
            <a href="#">Tv-Video-Audio</a>
          </li>
          <li>
            <a href="#">Tablets</a>
          </li>
          <li>
            <a href="#">Land & Plots</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
