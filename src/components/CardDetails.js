import React, { useState } from "react";
import "./form.css";


function CardDetails() {

    const [inputcardno, setnodetails] = useState('');
    const handlecardno = (e) => {
        setnodetails(e.target.value);
    }
    const [inputcardname, setnamedetails] = useState('');
    const handlecardname = (e) => {
        setnamedetails(e.target.value);
    }
    const [inputcardmm, setmmdetails] = useState('');
    const handlecardmm = (e) => {
        setmmdetails(e.target.value);
    }
    const [inputcardyy, setyydetails] = useState('');
    const handlecardyy = (e) => {

        setyydetails(e.target.value);
    }

    return (

        <>

            <div id="root">
                <div id="left-div">

                </div>
                <div id="root-card">
                    <form id="cardDetails">

                        <label htmlFor="card_name" required className="name">cardholder name</label>
                        <br />
                        <input
                            className="input-no-name"
                            required name="card_name"
                            id="card_name" 
                            onChange={handlecardname}
                            placeholder="Enter name">

                        </input>
                        <br />
                        <label htmlFor="card_no" className="name">card no</label>
                        <br />
                        <input
                            type="tel"
                            required name="card_no"
                            id="card_no"
                            value={inputcardno.replace(/\s/g, "").replace(/(\d{4})/g, "$1 ").trim()}
                            maxLength="19"
                            minLength="19"
                            onChange={handlecardno}
                            className="input-no-name"
                            placeholder="Enter no">

                        </input>
                        <br />
                        <label htmlFor="cvv" className="name">exp date (mm/yy)</label>
                        <label htmlFor="cvv" id="cvvName" className="name">cvv</label>
                        <br />
                        <input
                            name="date_mm"
                            required id="date_mm"
                            value={inputcardmm}
                            onChange={handlecardmm}
                            className="input-date"
                            placeholder="MM">

                        </input>
                        <input
                            name="date_yy"
                            required id="date_yy"
                            value={inputcardyy}
                            onChange={handlecardyy}
                            className="input-date"
                            placeholder="YY">

                        </input>
                        <input

                            name="cvv"
                            required id="cvv"
                            className="input-cvv"
                            placeholder="CVV">

                        </input>
                        <br />
                        <button className="submitbtn" type="submit">CONFIRM</button>


                    </form>
                </div>
            </div>
            <div className="cardFront">
                <img id="ellipse1" i src="Ellipse1.png" alt="no image"></img>
                <img id="ellipse2" src="Ellipse2.png" alt="no image"></img>


                <h2 id="cardNo" >{inputcardno}</h2>

                <h3 id="cardName" >{inputcardname}</h3>
                <h3 id="expdate"  >{inputcardmm}/{inputcardyy}</h3>
            </div>

        </>

    );
}

export default CardDetails;
