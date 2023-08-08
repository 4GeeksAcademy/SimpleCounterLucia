import React from "react";

const SecondsCounter=({digito, digito2, digito3, digito4, digito5, digito6})=> {
    return ( 
        <div>
            <h1 className="text-center mt-5 d-inline">{digito6}</h1>
            <h1 className="text-center mt-5 d-inline">{digito5}</h1>
            <h1 className="text-center mt-5 d-inline">{digito4}</h1>
            <h1 className="text-center mt-5 d-inline">{digito3}</h1>
            <h1 className="text-center mt-5 d-inline">{digito2}</h1>
            <h1 className="text-center mt-5 d-inline">{digito}</h1>
        </div>
    )
}

export default SecondsCounter;