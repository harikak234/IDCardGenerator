import React, { useState } from "react";
import IDCard from "./components/IDCard";
import IDCardForm from "./components/IDCardForm";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export default function App() {
  const [cardData, setCardData] = useState(null);
  const [cardRef, setCardRef] = useState(null);

  const downloadPDF = () => {
    if (cardRef) {
      html2canvas(cardRef, { scale: 2, useCORS: true }).then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF("p", "mm", "a4");
        pdf.addImage(imgData, "PNG", 30, 10, 150, 200); // Adjust width & height
        pdf.save("id_card.pdf");
      });
    }
  };
  

  return (
    <div className="container d-flex flex-column align-items-center py-5">
      <IDCardForm setCardData={setCardData} />
      {cardData && (
        <>
          <IDCard cardData={cardData} setCardRef={setCardRef} />
          <button onClick={downloadPDF} className="btn btn-success mt-3">
            Download as PDF
          </button>
        </>
      )}
    </div>
  );
}
