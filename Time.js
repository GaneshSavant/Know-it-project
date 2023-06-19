import React from "react";

class Time extends React.Component
{
render(){
    var time= new Date();
    var hour= time.getHours();
    var year= time.getFullYear();

    return(
        <div>
            <h2>Time:{time.toString()}</h2>
            <h2>Hour: {hour}</h2>
            <h2>Year: {year}</h2>
        </div>
    )

}
}

export default Time;