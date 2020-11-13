import React from "react";
import logo from "../Images/logo.png";
import { FiArrowLeft } from "react-icons/fi";
import AddAPhotoOutlinedIcon from '@material-ui/icons/AddAPhotoOutlined';
import Button from '@material-ui/core/Button';


class AdDetails extends React.Component {
  render() {
    let boderCol = () => {
      document.getElementById("comp").style.border = "3px solid #209b8e";
    };

    let boderNorm = () => {
      document.getElementById("comp").style.border = "1px solid #002f34";
    };

    let bodColor = () => {
      document.getElementById("title").style.border = "3px solid #209b8e";
    };

    let bodNormal = () => {
      document.getElementById("title").style.border = "1px solid #002f34";
    };
    let bodAdres = () => {
      document.getElementById("addres").style.border = "3px solid #209b8e";
    };

    let bodAdresNor = () => {
      document.getElementById("addres").style.border = "1px solid #002f34";
    };
    let boderMani = () => {
      document.getElementById("mani").style.border = "3px solid #209b8e";
    };

    let boderManiNor = () => {
      document.getElementById("mani").style.border = "1px solid #002f34";
    };
    let boderPrice = () => {
      document.getElementById("price").style.border = "3px solid #209b8e";
    };

    let boderPriceNor = () => {
      document.getElementById("price").style.border = "1px solid #002f34";
    };
    

    return (
      <div>
        <div className="adHeader">
          <FiArrowLeft
            style={{
              fontSize: "24px",
              fontweight: 400,
              verticalAlign: "middle",
              cursor: "pointer",
            }}
            onClick={() => this.props.history.push("/post")}
          />
          <img
            src={logo}
            style={{
              width: "55px",
              verticalAlign: "middle",
              marginLeft: "18px",
              cursor: "pointer",
            }}
            onClick={() => this.props.history.push("/")}
          />
        </div>
        <h1
          style={{
            textAlign: "center",
            fontSize: "24px",
            fontWeight: 700,
            color: "#002f34",
            marginTop: "10px",
          }}
        >
          POST YOUR AD
        </h1>
        <div className="caticontainer" style={{padding:"30px 32px",height:"fit-content"}}>
          <h2 style={{fontSize: "20px",fontWeight: "bold",marginBottom:"50px",color: "#002f34"}}>SELECTED CATEGORY</h2>
          <h2 style={{fontSize: "20px",fontWeight: "bold",marginBottom:"20px",color: "#002f34"}}>INCLUDE SOME DETAILS</h2>
          {/* Manufacture */}
          <div>
            <label className="manufac">Manufacturer *</label>
            <div className="box-2" id="comp">
              <input
                style={{ width: "100%" }}
                className="loctionInput"
                type="text"
                required
                onFocus={() => boderCol()}
                onBlur={() => boderNorm()}
              ></input>
            </div>
          </div>
          {/* Title */}

          <div>
            <label className="manufac">Ad title *</label>
            <div className="box-2" id="title">
              <input
                style={{ width: "100%" }}
                className="loctionInput"
                type="text"
                required
                onFocus={() => bodColor()}
                onBlur={() => bodNormal()}
              ></input>
            </div>
          </div>
          {/* Description */}
          <div>
            <label className="manufac">Description *</label>
            <div className="box-2" id="mani" style={{height:"100px"}}>
              <textarea className="descrip"
              required
              onFocus={() => boderMani()}
              onBlur={() => boderManiNor()}
              >
              </textarea>
            </div>
          </div>
          {/* Description */}

          <div>
              <h2 style={{fontSize: "20px",marginTop: "20px",fontWeight: 700}}>SET A PRICE</h2>
            <label className="manufac">Price *</label>
            <div className="box-2" id="price">
              <input
                style={{ width: "100%" }}
                className="loctionInput"
                type="text"
                required
                onFocus={() => boderPrice()}
                onBlur={() => boderPriceNor()}
              ></input>
            </div>
            </div>
          {/* Description */}
            <div>
                <h4 style={{fontSize: "20px",marginTop: "20px",fontWeight: 700}}    >UPLOAD PHOTO <span><AddAPhotoOutlinedIcon /></span></h4>
                  
                <input type="file" accept="image/*" required>
                </input>
            </div>
          {/* Description */}
            <div style={{marginTop: "20px"}}>
            <label className="manufac">Address *</label>
            <div className="box-2" id="addres">
              <input
                style={{ width: "100%" }}
                className="loctionInput"
                type="text"
                required
                onFocus={() => bodAdres()}
                onBlur={() => bodAdresNor()}
              ></input>
            </div>
          </div>
          {/* Description */}
        <div>
            
        <Button variant="contained" size="large" color="primary" style={{marginTop: "20px"}}>
          Post now
        </Button>
            
        </div>





        </div>
      </div>
    );
  }
}

export default AdDetails;
