import React, { useEffect, useRef } from "react";

export default function IDCard({ cardData, setCardRef }) {
  const cardRef = useRef();

  useEffect(() => {
    if (setCardRef) setCardRef(cardRef.current);
  }, [setCardRef]);

  return (
    <div ref={cardRef} className="id-card p-3 text-center">
      <div className="header">{cardData.institute}</div>
      <div className="photo">
        {cardData.image ? <img src={cardData.image} alt="ID" className="id-image" /> : "PHOTO"}
      </div>
      <h5 className="mt-2">{cardData.name}</h5>
      <h6>{cardData.idNumber}</h6>
      <p className="text-start">
        <strong>DOB:</strong> {cardData.dob} <br />
        <strong>Gender:</strong> {cardData.gender} <br />
        <strong>Father’s Name:</strong> {cardData.fatherName} <br />
        <strong>Blood Group:</strong> {cardData.bloodGroup}
      </p>
    </div>
  );
}
