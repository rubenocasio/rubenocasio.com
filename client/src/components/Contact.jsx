import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import ReCAPTCHA from "react-google-recaptcha";

const Contact = () => {
    const onChange = () => {}
    const form = useRef();
    const sendEmail = (e) => {

      e.preventDefault();
        emailjs.sendForm('service_vjmkwjs', 'template_bzvk80a', form.current, '4ofEN82q4311Xmb52')
          .then((result) => {
              e.target.reset()
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
    };

    return (
        <div>
            <div className="flex items-center justify-center bg-black p-4 py-16" id='contact'>                                                                      
                <form ref={form} onSubmit={sendEmail} className="w-full max-w-lg bg-white p-8 rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold mb-6 text-center">Contact Me</h2>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-bold mb-2">Name</label>
                        <input type="text" id="name" name="name" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-bold mb-2">Email</label>
                        <input type="email" id="email" name='email' className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="comment" className="block text-sm font-bold mb-2">Comment</label>
                        <textarea id="comment" rows="4" name="message" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
                    </div>
                    <div className="flex items-center justify-between mb-6 mr-5">
                    <ReCAPTCHA sitekey='6LdKL1UpAAAAAL897jqJihXIwpZBGgSMCR18m0OD' onChange={onChange}/>
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                        Send Message
                    </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact