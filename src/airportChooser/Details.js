
import React  from "react";



const Details = (props) =>{
    const {closeModal, airportDetails} = props;
    const closeModalHandle = () => {
        closeModal();
    };

    console.log(props)

    return(<div id="modal-details" className="modal">
    <span onClick={closeModalHandle} className="close" title="Close Modal">×</span>
    <div className="modal-content">
      <div className="container">
        <h1>Airport Details</h1>
        <div className='details-container'>
            <ul>
{Object.keys(airportDetails).map((item,i) => <li key={i}><span>{item}</span> -<span>{airportDetails[item]}</span></li>)}
            </ul>
        </div>
      </div>
    </div>
  </div>);
} 

export default Details;

