import React from "react";
import "./form.css";

function CardDetails() {
    return (
        <>
            <div id="root">
                <div id="left-div">
                    
                </div>
                <div id="root-card">
                    <form id="cardDetails">
                     
                            <label className="name">cardholder name</label>
                            <br />
                            <input className="input-no-name" placeholder="Enter name"></input>
                            <br />
                            <label className="name">card no</label>
                            <br />
                            <input className="input-no-name" placeholder="Enter no"></input>
                            <br />
                            <label className="name">exp date (mm/yy)</label>
                            <label id="cvvName" className="name">cvv</label>
                            <br />
                            <input className="input-date" placeholder="MM"></input>
                            <input className="input-date" placeholder="YY"></input>
                            <input className="input-cvv" placeholder="CVV"></input>

                    </form>
                </div>
            </div>

        </>

    );
}

export default CardDetails;
