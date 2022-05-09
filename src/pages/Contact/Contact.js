import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className='contact-section'>
            <h2 className='contact-head'>Contact Us</h2>
            <div className='contact-inner'>
                <div className='contact-info'>
                    <div className='contact-text-item'>
                        <div className='item-img'>
                            <svg className='svg' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                        </div>
                        <div>
                            <p>Phone: +880985345745</p>
                            <p>Mobile: +8801734852860</p>
                        </div>
                    </div>
                    <div className='contact-text-item'>
                        <div className='item-img'>
                            <svg className='svg' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </div>
                        <div>
                            <p>Level-4, 34, Awal Centre, Banani, Dhaka</p>
                        </div>
                    </div>
                    <div className='contact-text-item'>
                        <div className='item-img'>
                            <svg className='svg' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                            </svg>
                        </div>
                        <div>
                            <p>Email: abc@furniturehut.com</p>
                            <p>Web: https://furniturehut-4239e.web.app/</p>
                        </div>
                    </div>
                </div>
                <div className='form-inner'>
                    <form action="">
                        <input type="text" placeholder='Name*' required />
                        <input type="email" placeholder='Email*' required />
                        <input type="text" placeholder='Subject*' required />
                        <textarea name="" id="" placeholder='Message'></textarea>
                    </form>
                    <div className='contact-btn'>
                        <button>Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;