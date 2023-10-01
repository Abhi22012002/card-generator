import React, { useState, useRef, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "./form.css";


function CardDetails() {


    const inputmm = useRef(null);
    const inputyy = useRef(null);
    const inputcvv = useRef(null);
    const inputcard = useRef(null);

    const [cardno, setcardno] = useState('0000 0000 0000 0000');
    const [cardname, setcardname] = useState('Jane Appleseed');
    const [expmm, setexpmm] = useState('MM');
    const [expyy, setexpyy] = useState('YY');
    const [cvv, setcvv] = useState('000');


    const [inputcardname, setnamedetails] = useState('');
    const handlecardname = (e) => {

        setnamedetails(e.target.value);
    }

    const [inputcardno, setnodetails] = useState('');
    const handlecardno = (e) => {
        let input = e.target.value.replace(/[^0-9]/g, "").replace(/\s/g, "").replace(/(\d{4})/g, "$1 ").trim();
        if (input !== e.target.value.replace(/\s/g, "").replace(/(\d{4})/g, "$1 ").trim()) {



                       toast.warning("Only numeric characters are allowed.",{className:"toast-message"});

            


        } else {



            setnodetails(e.target.value);

        }


    }


    const [inputcardmm, setmmdetails] = useState('');

    const handlecardmm = (e) => {
        let input = e.target.value.replace(/[^0-9]/g, "")
        if (input !== e.target.value) {

                       toast.warning("Only numeric characters are allowed.",{className:"toast-message"});

        } else {




            setmmdetails(e.target.value);

        }




    }
    const [inputcardyy, setyydetails] = useState('');
    const handlecardyy = (e) => {
        let input = e.target.value.replace(/[^0-9]/g, "")
        if (input !== e.target.value) {

                       toast.warning("Only numeric characters are allowed.",{className:"toast-message"});

        } else {



            setyydetails(e.target.value);
        }


    }
    const [inputcardcvv, setcardcvv] = useState('');
    const handlecardcvv = (e) => {
        let input = e.target.value.replace(/[^0-9]/g, "")
        if (input !== e.target.value) {
                       toast.warning("Only numeric characters are allowed.",{className:"toast-message"});

        } else {



            setcardcvv(e.target.value);
        }



    }


    useEffect(() => {
        if (inputcardno.length == '19') {

            inputmm.current.focus();
        }

    }, [inputcardno]);

    useEffect(() => {
        if (inputcardmm.length == 2) {
            inputyy.current.focus();
        }


    }, [inputcardmm]);
    useEffect(() => {
        if (inputcardyy.length == 2) {
            inputcvv.current.focus();
        }


    }, [inputcardyy]);

    const sub = (e) => {
        e.preventDefault();
        let regex = /^[a-zA-Z ]+$/;
        if (!regex.test(inputcardname)) {
            toast.warning("Please enter a valid name",{className:"toast-message"});
            return false;
        }
        if (inputcardno.length < 19) {
            toast.warning("Please enter a valid Card No",{className:"toast-message"});
            return false;
        }
        if (inputcardmm > 12 || inputcardmm < 1) {
            toast.warning("Please enter a valid Date Month",{className:"toast-message"});

            return false;
        }
        if (inputcardyy.length < 2) {
            toast.warning("Please enter a valid Date Year",{className:"toast-message"});

            return false;
        }
        if (inputcardcvv.length < 2) {
            toast.warning("Please enter a valid CVV",{className:"toast-message"});

            return false;
        }
        setcardname(inputcardname);
        setcvv(inputcardcvv);
        setexpyy(inputcardyy);
        setexpmm(inputcardmm);
        setcardno(inputcardno);

        toast.success(" Card Details saved Succesfully")

    }



    return (

        <>
        <ToastContainer
         autoClose={2000} 
         position="top-center"
         />

            <div id="root">
                <div id="left-div">

                </div>
                <div id="root-card">
                    <form id="cardDetails" onSubmit={sub}>

                        <label htmlFor="card_name" required className="name">cardholder name</label>
                        <br />
                        <input
                            type="text"
                            className="input-no-name"
                            required title="Please enter your name"
                            name="card_name"

                            id="card_name"
                            onChange={handlecardname}
                            placeholder="e.g Jane Appleseed"
                            autoFocus>

                        </input>
                        <br />
                        <label htmlFor="card_no" className="name">card no</label>
                        <br />
                        <input
                            type="tel"
                            required
                            name="card_no"
                            id="card_no"
                            value={inputcardno.replace(/\s/g, "").replace(/(\d{4})/g, "$1 ").trim()}
                            maxLength="19"

                            onChange={handlecardno}
                            className="input-no-name"
                            placeholder="0000 0000 0000 0000"
                            ref={inputcard}>

                        </input>
                        <br />
                        <label htmlFor="cvv" className="name">exp date (mm/yy)</label>
                        <label htmlFor="cvv" id="cvvName" className="name">cvv</label>
                        <br />
                        <input
                            name="date_mm"
                            required id="date_mm"
                            ref={inputmm}
                            value={inputcardmm}
                            onChange={handlecardmm}
                            className="input-date"
                            placeholder="MM"
                            maxLength="2" >

                        </input>
                        <input
                            name="date_yy"
                            required id="date_yy"
                            ref={inputyy}
                            value={inputcardyy}
                            onChange={handlecardyy}
                            className="input-date"
                            placeholder="YY"
                            maxLength="2"

                        >

                        </input>
                        <input

                            name="cvv"
                            required id="cvv"
                            className="input-cvv"
                            placeholder="CVV"
                            ref={inputcvv}
                            onChange={handlecardcvv}
                            maxLength="3"
                        >

                        </input>
                        <br />
                        <button className="submitbtn" type="submit" >CONFIRM</button>


                    </form>
                </div>
            </div>
            <div className="cardFront">
                <img id="ellipse1" i src="Ellipse1.png" alt="no pic"></img>
                <img id="ellipse2" src="Ellipse2.png" alt="no pic"></img>


                <h2 id="cardNo" >{cardno}</h2>

                <h3 id="cardName" >{cardname}</h3>
                <h3 id="expdate"  >{expmm}/{expyy}</h3>
            </div>
            <div className="cardBack">
                <div className="blackStrip">

                </div>
                <div className="cvvStrip">
                    <h3 className="cvv"> {cvv}</h3>
                </div>
            </div>

        </>

    );
}

export default CardDetails;
