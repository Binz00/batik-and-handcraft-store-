import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import emailjs from '@emailjs/browser';

const CardDetailsForm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const totalPayment = location.state?.totalPayment || 0;
  const cartItems = location.state?.cartItems || [];

  const [paymentMethod, setPaymentMethod] = useState('card');
  const [formData, setFormData] = useState({
    cardNumber: "",
    cardHolder: "",
    expiryMonth: "",
    expiryYear: "",
    cvv: "",
    address: "",
    contactNumber: "",
    bankSlipImage: null,
    email: ""
  });

  useEffect(() => {
    if (!location.state) {
      navigate("/cart");
    }
  }, [location.state, navigate]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      bankSlipImage: e.target.files[0]
    });
  };

  const sendOrderEmail = async () => {
    const itemsList = cartItems.map(item => 
      `Product: ${item.p_name}
       Quantity: ${item.qty}
       ${item.size ? `Size: ${item.size}` : ''}
       Price: LKR ${item.old_price - item.new_price}.00`
    ).join('\n');

    const templateParams = {
      to_email: 'senavirathnabh@gmail.com',
      from_name: formData.cardHolder || formData.email,
      customer_email: formData.email,
      address: formData.address,
      contact_number: formData.contactNumber,
      order_details: itemsList,
      total_amount: `LKR ${totalPayment}.00`,
      payment_method: paymentMethod === 'card' ? 'Credit/Debit Card' : 'Bank Transfer'
    };

    try {
      await emailjs.send(
        'service_5cw69k1',    //service ID
        'template_oycp6s8',   //template ID
        templateParams,
        'pspIL1tY0jI9kFRi6'  //public key
      );
      alert('Order submitted successfully! You will receive a confirmation email shortly.');
      navigate('/');
    } catch (error) {
      console.error('Submission failed:', error);
      alert('Order submission failed. Please try again.');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await sendOrderEmail();
  };

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "20px",
      border: "1px solid #ccc",
      borderRadius: "10px",
      backgroundColor: "#f9f9f9",
      width: "800px",
      margin: "20px auto",
    }}>
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
        marginBottom: "20px",
      }}>
        <h2 style={{ margin: "0" }}>Payment Details</h2>
        <h3 style={{ margin: "0", color: "#0A2E41" }}>
          Total Payment: LKR {totalPayment}.00
        </h3>
      </div>

      <div style={{ marginBottom: "20px", width: "100%" }}>
        <select 
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value)}
          style={{
            width: "100%",
            padding: "8px",
            marginBottom: "20px",
            border: "1px solid #ccc",
            borderRadius: "4px"
          }}
        >
          <option value="card">Credit/Debit Card</option>
          <option value="bankSlip">Bank Slip/Online Bank Transfer Receipt</option>
        </select>
      </div>

      <form onSubmit={handleSubmit} style={{ width: "100%" }}>
        {paymentMethod === 'card' ? (
          <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                style={{
                  width: "100%",
                  padding: "8px",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                }}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="cardNumber">Card Number</label>
              <input
                type="text"
                id="cardNumber"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleInputChange}
                placeholder="1234 5678 9012 3456"
                maxLength="16"
                style={{
                  width: "100%",
                  padding: "8px",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                }}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="cardHolder">Card Holder Name</label>
              <input
                type="text"
                id="cardHolder"
                name="cardHolder"
                value={formData.cardHolder}
                onChange={handleInputChange}
                placeholder="John Doe"
                style={{
                  width: "100%",
                  padding: "8px",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                }}
                required
              />
            </div>

            <div style={{ display: "flex", gap: "20px" }}>
              <div className="form-group" style={{ flex: 2 }}>
                <label>Expiry Date</label>
                <div style={{ display: "flex", gap: "10px" }}>
                  <select
                    name="expiryMonth"
                    value={formData.expiryMonth}
                    onChange={handleInputChange}
                    style={{
                      padding: "8px",
                      border: "1px solid #ccc",
                      borderRadius: "4px",
                      flex: 1,
                    }}
                    required
                  >
                    <option value="">Month</option>
                    {Array.from({ length: 12 }, (_, i) => {
                      const month = i + 1;
                      return (
                        <option key={month} value={month.toString().padStart(2, "0")}>
                          {month.toString().padStart(2, "0")}
                        </option>
                      );
                    })}
                  </select>
                  <select
                    name="expiryYear"
                    value={formData.expiryYear}
                    onChange={handleInputChange}
                    style={{
                      padding: "8px",
                      border: "1px solid #ccc",
                      borderRadius: "4px",
                      flex: 1,
                    }}
                    required
                  >
                    <option value="">Year</option>
                    {Array.from({ length: 10 }, (_, i) => {
                      const year = new Date().getFullYear() + i;
                      return (
                        <option key={year} value={year}>
                          {year}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>

              <div className="form-group" style={{ flex: 1 }}>
                <label htmlFor="cvv">CVV</label>
                <input
                  type="password"
                  id="cvv"
                  name="cvv"
                  value={formData.cvv}
                  onChange={handleInputChange}
                  placeholder="123"
                  maxLength="3"
                  style={{
                    width: "100%",
                    padding: "8px",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                  }}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="address">Delivery Address</label>
              <textarea
                id="address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                style={{
                  width: "100%",
                  padding: "8px",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                  minHeight: "100px"
                }}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="contactNumber">Contact Number</label>
              <input
                type="tel"
                id="contactNumber"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleInputChange}
                style={{
                  width: "100%",
                  padding: "8px",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                }}
                required
              />
            </div>
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                style={{
                  width: "100%",
                  padding: "8px",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                }}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="address">Delivery Address</label>
              <textarea
                id="address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                style={{
                  width: "100%",
                  padding: "8px",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                  minHeight: "100px"
                }}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="contactNumber">Contact Number</label>
              <input
                type="tel"
                id="contactNumber"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleInputChange}
                style={{
                  width: "100%",
                  padding: "8px",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                }}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="bankSlipImage">Upload Bank Slip/Receipt</label>
              <input
                type="file"
                id="bankSlipImage"
                onChange={handleFileChange}
                style={{
                  width: "100%",
                  padding: "8px",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                }}
                required
              />
            </div>
          </div>
        )}

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "#053B5D",
            color: "white",
            border: "none",
            borderRadius: "5px",
            fontSize: "16px",
            cursor: "pointer",
            marginTop: "20px",
          }}
        >
          Submit Order
        </button>
      </form>
    </div>
  );
};

export default CardDetailsForm;
