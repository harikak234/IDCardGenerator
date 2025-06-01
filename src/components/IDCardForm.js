import React, { useState } from "react";

export default function IDCardForm({ setCardData }) {
  const [formData, setFormData] = useState({
    name: "",
    idNumber: "",
    dob: "",
    gender: "",
    fatherName: "",
    bloodGroup: "",
    institute: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCardData(formData);
  };

  return (
    <div className="container">
      <h1>Enter your details to generate Card</h1>
      <form className="form-box" onSubmit={handleSubmit}>
        <input name="name" type="text" placeholder="Name" className="form-control mb-2" onChange={handleChange} required />
        <input name="idNumber" type="text" placeholder="ID Number" className="form-control mb-2" onChange={handleChange} required />
        <input name="dob" type="date" className="form-control mb-2" onChange={handleChange} required />
        <select name="gender" className="form-control mb-2" onChange={handleChange} required>
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Prefer not to say">Prefer not to say</option>
        </select>

        <input name="fatherName" type="text" placeholder="Father’s Name" className="form-control mb-2" onChange={handleChange} required />
        <input name="bloodGroup" type="text" placeholder="Blood Group" className="form-control mb-2" onChange={handleChange} required />
        <input name="institute" type="text" placeholder="Institute" className="form-control mb-2" onChange={handleChange} required />
        <input type="file" accept="image/*" className="form-control mb-2" onChange={handleImageUpload} required />
        <button type="submit" className="btn btn-primary w-100">Generate ID Card</button>
      </form>
    </div>
  );
}
