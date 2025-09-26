import React, { useState } from 'react';
import './RegistrationForm.css';


export default function RegistrationForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    year: '',
    club: ''
  });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name) e.name = 'Name is required';
    if (!form.email) e.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Invalid email';
    if (!form.phone) e.phone = 'Phone is required';
    if (!form.year) e.year = 'Year of Study is required';
    if (!form.club) e.club = 'Club Interest is required';
    return e;
  };

  const handleChange = ev =>
    setForm({ ...form, [ev.target.name]: ev.target.value });

  const handleSubmit = ev => {
    ev.preventDefault();
    const v = validate();
    setErrors(v);

    if (Object.keys(v).length === 0) {
      setSuccess(true);
      setForm({ name: '', email: '', phone: '', year: '', club: '' });
      setTimeout(() => setSuccess(false), 3000); // hide success after 3s
    } else {
      setSuccess(false);
    }
  };

  return (
    <div className="form-container">
      <header className="form-header">
        <img src="/personalogo.jpg" alt="Persona Club" className="logo" />
        <h1>Persona Club Registration</h1>
      </header>


      <form onSubmit={handleSubmit} noValidate>
        <label>
          Name
          <input type="text" name="name" value={form.name} onChange={handleChange} />
          {errors.name && <span className="error">{errors.name}</span>}
        </label>

        <label>
          Email
          <input type="email" name="email" value={form.email} onChange={handleChange} />
          {errors.email && <span className="error">{errors.email}</span>}
        </label>

        <label>
          Phone Number
          <input type="tel" name="phone" value={form.phone} onChange={handleChange} />
          {errors.phone && <span className="error">{errors.phone}</span>}
        </label>

        <label>
          Year of Study
          <select name="year" value={form.year} onChange={handleChange}>
            <option value="">Select Year</option>
            <option value="1">1st Year</option>
            <option value="2">2nd Year</option>
            <option value="3">3rd Year</option>
            <option value="4">4th Year</option>
          </select>
          {errors.year && <span className="error">{errors.year}</span>}
        </label>

        <label>
          Club Interest
          <input type="text" name="club" value={form.club} onChange={handleChange} />
          {errors.club && <span className="error">{errors.club}</span>}
        </label>

        <button type="submit" className="submit-btn">Submit</button>

        {success && (
          <div className="success-message">
            🎉 Registration submitted successfully!
          </div>
        )}
      </form>
    </div>
  );
}
