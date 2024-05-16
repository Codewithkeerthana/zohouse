import React, { useRef, useEffect } from 'react';

function Formdata() {
  const nameRef = useRef(null);
  const ageRef = useRef(null);
  const genderRef = useRef(null);
  const cityRef = useRef(null);
  const mailRef = useRef(null);
  const phoneRef = useRef(null);

  useEffect(() => {
    nameRef.current.focus();
  }, []);

  const handleInputChange = (e, nextRef) => {
    const value = e.target.value;
    if (value.length > 0 && nextRef) {
      setTimeout(() => {
        nextRef.current.focus();
      }, 3000);
    }
  };

  return (
    <div style={{ 
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'black', // Set the background of the entire page to black
    }}>
      <div style={{ 
        width: '90%',
        maxWidth: '400px',
        padding: '20px', 
        borderRadius: '10px', 
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#ffffff',
      }}>
        <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Fill the Form</h2>
        <form>
          {[
            { ref: nameRef, type: 'text', placeholder: 'Name', maxLength: '50', nextRef: ageRef },
            { ref: ageRef, type: 'number', placeholder: 'Age', nextRef: genderRef },
            { ref: genderRef, type: 'text', placeholder: 'Gender', maxLength: '10', nextRef: cityRef },
            { ref: cityRef, type: 'text', placeholder: 'City', nextRef: mailRef },
            { ref: mailRef, type: 'email', placeholder: 'Email', nextRef: phoneRef },
            { ref: phoneRef, type: 'tel', placeholder: 'Phone', maxLength: '10' },
          ].map((input, index) => (
            <div key={index} style={{ marginBottom: '20px', display: 'flex', alignItems: 'center' }}>
              <input
                style={{ 
                  flex: 1,
                  padding: '10px', 
                  fontSize: '16px', 
                  border: '1px solid #ccc', 
                  borderRadius: '5px', 
                  transition: 'border-color 0.3s ease' 
                }}
                type={input.type}
                placeholder={input.placeholder}
                maxLength={input.maxLength}
                ref={input.ref}
                onChange={(e) => handleInputChange(e, input.nextRef)}
              />
            </div>
          ))}
        </form>
      </div>
    </div>
  );
}

export default Formdata;
