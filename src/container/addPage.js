import React from "react"
import { BiMobileAlt } from "react-icons/bi";
import { BiCar } from "react-icons/bi";
import { BiBuildingHouse } from "react-icons/bi";
import { FiMonitor } from "react-icons/fi";
import { BiBed } from "react-icons/bi";
import { RiTShirt2Line } from "react-icons/ri";
import { FiArrowLeft } from "react-icons/fi";
import logo from '../Images/logo.png'

class PostADForm extends React.Component{
    render(){
        console.log("PostAd==>",this.props)
        return(
            <div>
                <div className="adHeader">
                    <FiArrowLeft style={{fontSize: "24px",fontweight: 400,verticalAlign: "middle",cursor: 'pointer'}} onClick={()=> this.props.history.push('/')}/>
                    <img src={logo} style={{width:"55px",verticalAlign: "middle",marginLeft:"18px",cursor: 'pointer'}} onClick={()=> this.props.history.push('/')}/> 
                </div>
                <h1 style={{textAlign:"center",fontSize: "24px",fontWeight: 700,color: "#002f34",marginTop:"10px"}} >POST YOUR AD</h1>
                <div className="caticontainer">
                    <h3>CHOOSE A CATEGORY</h3>
                    <div className="catList" onClick={()=> this.props.history.push('/post/attributes')}>
                        <BiMobileAlt style={{width:"30px" , height:"30px"}} />
                        <p>Mobiles</p>
                    </div>
                    <div className="catList" onClick={()=> this.props.history.push('/post/attributes')}>
                        <BiCar style={{width:"30px" , height:"30px"}} />
                        <p>Vehicles</p>
                    </div>
                    <div className="catList" onClick={()=> this.props.history.push('/post/attributes')}>
                        <BiBuildingHouse style={{width:"30px" , height:"30px"}} />
                        <p>Property For Rent</p>
                    </div>
                    <div className="catList" onClick={()=> this.props.history.push('/post/attributes')}>
                        <FiMonitor style={{width:"30px" , height:"30px"}} />
                        <p>Electronics & Home Appliances</p>
                    </div>
                    <div className="catList" onClick={()=> this.props.history.push('/post/attributes')}>
                        <BiBed style={{width:"30px" , height:"30px"}} />
                        <p>Furniture & Home Decor</p>
                    </div>
                    <div className="catList" onClick={()=> this.props.history.push('/post/attributes')}>
                        <RiTShirt2Line style={{width:"30px" , height:"30px"}} />
                        <p>Fashion & Beauty</p>     
                    </div>
                </div>

            </div>
        );
    }
}

export default PostADForm;