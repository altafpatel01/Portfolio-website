import React, { Fragment, useState } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [submissionStatus, setSubmissionStatus] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("https://getform.io/f/bgdyewxa", {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSubmissionStatus('Message sent successfully!');
                setFormData({ name: '', email: '', message: '' });
            } else {
                setSubmissionStatus('There was an error sending your message.');
            }
        } catch (error) {
            setSubmissionStatus('There was an error sending your message.');
        }
    };

    return (
       <Fragment>
         <div name='contact' className='w-full min-h-screen bg-[#0a192f] flex justify-center items-center p-4'>
            <form onSubmit={handleSubmit} className='flex flex-col max-w-[600px] w-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
                    <p className='text-gray-300 py-4'>Submit the form below or shoot me an email at altafpatel8485@gmail.com</p>
                </div>
                <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' value={formData.name} onChange={handleChange} required />
                <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' value={formData.email} onChange={handleChange} required />
                <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message' value={formData.message} onChange={handleChange} required></textarea>
                <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto'>Let's Collaborate</button>
                {submissionStatus && <p className='text-white text-center'>{submissionStatus}</p>}
            </form>
        </div>
       </Fragment>
    );
};

export default ContactForm;
