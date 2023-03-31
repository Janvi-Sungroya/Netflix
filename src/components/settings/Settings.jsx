import React, { useState } from "react";
import "./settings.scss";

export default function Settings() {
  const [formData, setFormData] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    password: "********",
    language: "English",
    notification: true,
    newsletter: false,
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <div className="whole">
    <div className="settings">
    <div className="back-button">
      <a href='/' className='anchor' style={{color:"black"}}>
        &lt; Back</a>
      </div>
      <h2>Account Settings</h2>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="language">Language</label>
          <select id="language" name="language" value={formData.language} onChange={handleChange}>
            <option value="English">English</option>
            <option value="Spanish">Spanish</option>
            <option value="French">French</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="notification">Enable Notification</label>
          <input
            type="checkbox"
            id="notification"
            name="notification"
            checked={formData.notification}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="newsletter">Subscribe to Newsletter</label>
          <input
            type="checkbox"
            id="newsletter"
            name="newsletter"
            checked={formData.newsletter}
            onChange={handleChange}
          />
        </div>

        <button type="submit">
        <a href="/" className="anchor">Save Changes</a></button>
      </form>

      
    </div></div>
  );
}
