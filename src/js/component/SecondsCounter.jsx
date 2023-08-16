import React from "react";


const SecondsCounter = ({ digito, digito2, digito3, digito4, digito5, digito6 }) => {
    return (
        <div className="container w-75 p-3 justify-content-center">
            <div className="row row-cols-7 w-100 p-3 align-content-center mx-1 px-0 py-0">
                <div className="col mx-0 px-0 bg-dark"><i className="fa fa-clock text-center my-5 text-white" style={{ fontSize: "100px" }}></i></div>
                <div className="col mx-0 px-0 bg-dark"><h1 className="text-center mt-5" style={{ fontSize: "100px", marginRight: "50px", color: "white" }}>{digito6}</h1></div>
                <div className="col mx-0 px-0 bg-dark"><h1 className="text-center mt-5" style={{ fontSize: "100px", marginRight: "50px", color: "white" }}>{digito5}</h1></div>
                <div className="col mx-0 px-0 bg-dark"><h1 className="text-center mt-5" style={{ fontSize: "100px", marginRight: "50px", color: "white" }}>{digito4}</h1></div>
                <div className="col mx-0 px-0 bg-dark"><h1 className="text-center mt-5" style={{ fontSize: "100px", marginRight: "50px", color: "white" }}>{digito3}</h1></div>
                <div className="col mx-0 px-0 bg-dark"><h1 className="text-center mt-5" style={{ fontSize: "100px", marginRight: "50px", color: "white" }}>{digito2}</h1></div>
                <div className="col mx-0 px-0 bg-dark"><h1 className="text-center mt-5" style={{ fontSize: "100px", color: "white" }}>{digito}</h1></div>
            </div>
        </div>
    )
}

export default SecondsCounter;

