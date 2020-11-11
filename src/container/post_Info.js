import React from "react"
import logo from '../Images/logo.png'
import { FiArrowLeft } from "react-icons/fi";


class AdDetails extends React.Component{
    render(){
        return(
            <div>
                <div className="adHeader">
                    <FiArrowLeft style={{fontSize: "24px",fontweight: 400,verticalAlign: "middle",cursor: 'pointer'}} onClick={()=> this.props.history.push('/post')}/>
                    <img src={logo} style={{width:"55px",verticalAlign: "middle",marginLeft:"18px",cursor: 'pointer'}} onClick={()=> this.props.history.push('/')}/> 
                </div>
                <h1 style={{textAlign:"center",fontSize: "24px",fontWeight: 700,color: "#002f34",marginTop:"10px"}} >POST YOUR AD</h1>
                <div className="caticontainer">

                </div>

            </div>
        );
    }
}

export default AdDetails;