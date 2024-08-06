// // import React, { useState } from 'react';
// // import emailjs from '@emailjs/browser';
// // import './App.css';


// // const FeedbackForm = () => {
// //     const [formData, setFormData] = useState({
// //         mentorName: '',
// //         menteeName: '',
// //         feedback: '',
// //         highlights: '',
// //         improvement: '',
// //         email: ''
// //     });

// //     const handleChange = (e) => {
// //         const { name, value } = e.target;
// //         setFormData(prevData => ({
// //             ...prevData,
// //             [name]: value
// //         }));
// //     };

// //     const handleSubmit = (e) => {
// //         e.preventDefault();

// //         // Create an object with the email parameters
// //         const templateParams = {
// //             mentorName: formData.mentorName,
// //             menteeName: formData.menteeName,
// //             feedback: formData.feedback,
// //             highlights: formData.highlights,
// //             improvement: formData.improvement,
// //             to_email: formData.email // Recipient email
// //         };

// //         // Initialize EmailJS with your user ID
// //         emailjs.init("eGy-UDcqa72ECVdE_");

// //         // Send the email using EmailJS
// //         emailjs.send('service_cu5brfc', 'template_y41ekkk', templateParams)
// //             .then((response) => {
// //                 console.log('Success:', response);
// //                 alert('Feedback sent successfully!');
// //             })
// //             .catch((error) => {
// //                 console.log('Failed:', error);
// //                 alert('Failed to send feedback. Please try again.');
// //             });
// //     };

// //     return (
// //         <div>
// //             <h1>Feedback Form</h1>
// //             <form onSubmit={handleSubmit}>
// //                 <label htmlFor="mentorName">Mentor's Name:</label>
// //                 <input
// //                     type="text"
// //                     id="mentorName"
// //                     name="mentorName"
// //                     value={formData.mentorName}
// //                     onChange={handleChange}
// //                     required
// //                 /><br/><br/>

// //                 <label htmlFor="menteeName">Mentee's Name:</label>
// //                 <input
// //                     type="text"
// //                     id="menteeName"
// //                     name="menteeName"
// //                     value={formData.menteeName}
// //                     onChange={handleChange}
// //                     required
// //                 /><br/><br/>

// //                 <label htmlFor="feedback">Feedback:</label>
// //                 <textarea
// //                     id="feedback"
// //                     name="feedback"
// //                     rows="4"
// //                     cols="50"
// //                     value={formData.feedback}
// //                     onChange={handleChange}
// //                     required
// //                 /><br/><br/>

// //                 <label htmlFor="highlights">Highlights:</label>
// //                 <textarea
// //                     id="highlights"
// //                     name="highlights"
// //                     rows="4"
// //                     cols="50"
// //                     value={formData.highlights}
// //                     onChange={handleChange}
// //                     required
// //                 /><br/><br/>

// //                 <label htmlFor="improvement">Areas for Improvement:</label>
// //                 <textarea
// //                     id="improvement"
// //                     name="improvement"
// //                     rows="4"
// //                     cols="50"
// //                     value={formData.improvement}
// //                     onChange={handleChange}
// //                     required
// //                 /><br/><br/>

// //                 <label htmlFor="email">Recipient Email:</label>
// //                 <input
// //                     type="email"
// //                     id="email"
// //                     name="email"
// //                     value={formData.email}
// //                     onChange={handleChange}
// //                     required
// //                 /><br/><br/>

// //                 <button type="submit">Send Feedback</button>
// //             </form>
// //         </div>
// //     );
// // };

// // export default FeedbackForm;


// import React, { useState } from 'react';
// import emailjs from '@emailjs/browser';
// import './FeedbackForm.css'; // Ensure this CSS file is properly referenced

// const FeedbackForm = () => {
//     const [formData, setFormData] = useState({
//         mentorName: '',
//         menteeName: '',
//         Achievements: '',
//         Strengths: '',
//         improvement: '',
//         email: ''
//     });

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData(prevData => ({
//             ...prevData,
//             [name]: value
//         }));
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         const templateParams = {
//             mentorName: formData.mentorName,
//             menteeName: formData.menteeName,
//             Achievements: formData.Achievements,
//             Strengths: formData.Strengths,
//             improvement: formData.improvement,
//             to_email: formData.email // Recipient email
//         };

//         emailjs.init("eGy-UDcqa72ECVdE_");

//         emailjs.send('service_cu5brfc', 'template_y41ekkk', templateParams)
//             .then((response) => {
//                 console.log('Success:', response);
//                 alert('Feedback sent successfully!');
//             })
//             .catch((error) => {
//                 console.log('Failed:', error);
//                 alert('Failed to send feedback. Please try again.');
//             });
//     };

    
//     return (
//         <div className="feedback-form-container">
//             <div className="feedback-form-box">
//                 <h1>Mentees' Weekly Progress Report</h1>
//                 <form onSubmit={handleSubmit}>
//                     <div className="form-group">
//                         <label htmlFor="mentorName">Mentor's Name:</label>
//                         <input
//                             type="text"
//                             id="mentorName"
//                             name="mentorName"
//                             value={formData.mentorName}
//                             onChange={handleChange}
//                             required
//                         />
//                     </div>

//                     <div className="form-group">
//                         <label htmlFor="menteeName">Mentee's Name:</label>
//                         <input
//                             type="text"
//                             id="menteeName"
//                             name="menteeName"
//                             value={formData.menteeName}
//                             onChange={handleChange}
//                             required
//                         />
//                     </div>

//                     <div className="form-group">
//                         <label htmlFor="Achievements">Achievements:</label>
//                         <textarea
//                             id="Achievements"
//                             name="Achievements"
//                             rows="4"
//                             value={formData.Achievements}
//                             onChange={handleChange}
//                             required
//                         />
//                     </div>

//                     <div className="form-group">
//                         <label htmlFor="Strengths">Strengths:</label>
//                         <textarea
//                             id="Strengths"
//                             name="Strengths"
//                             rows="4"
//                             value={formData.Strengths}
//                             onChange={handleChange}
//                             required
//                         />
//                     </div>

//                     <div className="form-group">
//                         <label htmlFor="improvement">Areas  Improvement:</label>
//                         <textarea
//                             id="improvement"
//                             name="improvement"
//                             rows="4"
//                             value={formData.improvement}
//                             onChange={handleChange}
//                             required
//                         />
//                     </div>

//                     <div className="form-group">
//                         <label htmlFor="email">Recipient Email:</label>
//                         <input
//                             type="email"
//                             id="email"
//                             name="email"
//                             value={formData.email}
//                             onChange={handleChange}
//                             required
//                         />
//                     </div>

//                     <button type="submit">Send Feedback</button>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default FeedbackForm;
import React, { useState } from 'react';
import './FeedbackForm.css'; // Ensure this CSS file is properly referenced
import emailjs from '@emailjs/browser';

const FeedbackForm = () => {
    const [formData, setFormData] = useState({
        mentorName: '',
        menteeName: '',
        Achievements: '',
        Strengths: '',
        improvement: '',
        email: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Send the form data to Google Apps Script
        fetch('https://script.google.com/macros/s/AKfycbxqwciLkUGri67my-u8PkozrbpzZ5V2fE3ll48O2X_7EnOXZ1hsSBo1Ka1BI2utQQaNTQ/exec', {
            mode: 'no-cors',
            method: 'POST',
            
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
        .then(response => response.text())
        .then(data => {
            console.log(data);
            alert('Feedback sent and recorded successfully!');
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Failed to send feedback. Please try again.');
        });

        const templateParams = {
            mentorName: formData.mentorName,
            menteeName: formData.menteeName,
            Achievements: formData.Achievements,
            Strengths: formData.Strengths,
            improvement: formData.improvement,
            to_email: formData.email // Recipient email
        };

        emailjs.init("eGy-UDcqa72ECVdE_");

        emailjs.send('service_cu5brfc', 'template_y41ekkk', templateParams)
            .then((response) => {
                console.log('Success:', response);
                alert('Feedback sent successfully!');
            })
            .catch((error) => {
                console.log('Failed:', error);
                alert('Failed to send feedback. Please try again.');
            });
    };

    return (
        <div className="feedback-form-container">
            <div className="feedback-form-box">
                <h1>Mentees' Weekly Progress Report</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="mentorName">Mentor's Name:</label>
                        <input
                            type="text"
                            id="mentorName"
                            name="mentorName"
                            value={formData.mentorName}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="menteeName">Mentee's Name:</label>
                        <input
                            type="text"
                            id="menteeName"
                            name="menteeName"
                            value={formData.menteeName}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="Achievements">Achievements:</label>
                        <textarea
                            id="Achievements"
                            name="Achievements"
                            rows="4"
                            value={formData.Achievements}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="Strengths">Strengths:</label>
                        <textarea
                            id="Strengths"
                            name="Strengths"
                            rows="4"
                            value={formData.Strengths}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="improvement">Areas of Improvement:</label>
                        <textarea
                            id="improvement"
                            name="improvement"
                            rows="4"
                            value={formData.improvement}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Recipient Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <button type="submit">Send Feedback</button>
                </form>
            </div>
        </div>
    );
};

export default FeedbackForm;
