import React, { useState, useEffect } from 'react';
import axios from 'axios';

const initialValues = {
  name: '',
  email: '',
  phone: '',
  message: '',
};

export default function () {
  let [values, setValues] = useState(initialValues);
  let [contactSent, setContactSent] = useState(false);
  let [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    console.log('submit clicked....');
    e.preventDefault();
    const { name, email, phone, message } = values;
    console.log(values);
    if (!name || !email || !phone || !message) {
      console.log('Please enter all fields');
      return;
    }
    const params = { name, email, phone, message };
    console.log(params);
    setContactSent(true);
  };

  useEffect(() => {
    if (!contactSent) {
      return;
    }

    let sendContact = () => {
      axios
        .post(`http://localhost:3000/api/v1/contacts`, values)
        .then((res) => {
          console.log('success');
          console.log(res);
        });
    };
    sendContact();
    setContactSent(true);
    setIsSuccess(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [contactSent]);

  return (
    <section className='contact-section'>
      <div className='container'>
        <div className='contactWrap'>
          <div className='contactInfo'>
            <h3>Contact Us</h3>
            <p>
              Lets make something new, different and more meaningful to make
              this world a better place to live.
            </p>

            <div className='singleInfo'>
              <div className='infoIcon'>
                <img src='images/phone.png' />
              </div>
              <div className='infoText'>
                <h4>Call</h4>
                <p>
                  <a href='tel:+1 7783170000'>+1 778 317 XXXX</a>
                </p>
              </div>
            </div>
            <div className='singleInfo'>
              <div className='infoIcon'>
                <img src='images/email.png' />
              </div>
              <div className='infoText'>
                <h4>Email</h4>
                <p>
                  <a href='mailto:Vanfood@gmail.com'>Vanfood@gmail.com</a>
                </p>
              </div>
            </div>
            <div className='singleInfo'>
              <div className='infoIcon'>
                <img src='images/address.png' />
              </div>
              <div className='infoText'>
                <h4>Address</h4>
                <p>#xxxx E Broadway, Vancouver</p>
              </div>
            </div>
          </div>
          <div className='contactform'>
            <form onSubmit={onSubmit}>
              <div className='contactInputWrap'>
                <div className='inputfield'>
                  <label>Name</label>
                  <input
                    type='text'
                    name='name'
                    value={values.name}
                    onChange={handleChange}
                  />
                </div>
                <div className='inputfield'>
                  <label>Email</label>
                  <input
                    type='email'
                    name='email'
                    value={values.email}
                    onChange={handleChange}
                  />
                </div>
                <div className='inputfield'>
                  <label>Phone</label>
                  <input
                    type='tel'
                    name='phone'
                    value={values.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className='inputfield'>
                <label>Message</label>
                <textarea
                  type='text'
                  name='message'
                  value={values.message}
                  onChange={handleChange}
                  rows='4'
                ></textarea>
              </div>
              {isSuccess && (
                <p style={{ color: 'blue', margin: '20px' }}>
                  Thank you for contacting us! We will get back to you soon.
                </p>
              )}
              <button type='submit' className='btn-primary'>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
