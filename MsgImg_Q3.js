import React from "react";
import pic from './supra1.jpg';
class MsgImg extends React.Component
{
    render(){ 
    let w=200,h=200

    {
        return(
        <div>
        <h1>Hello From Class Component</h1>
        <img src={pic} width={w} height={h}/>
        </div>
        )
    }
}
}

export default MsgImg;