import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

const MContact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_w31fd5k', 'template_i6a6bf7', form.current, {
        publicKey: 'odoXwQyncHxovLyll',
      })
      .then(
        () => {
          toast.success('We Recived Your Message, Thank Your');
          e.target.reset();
        },
        (error) => {
          toast.error('We Can`t send this message right now');
        },
      );
  };

  
  return (
    <div>
      <div className="w-full  px-6">
            <form ref={form} onSubmit={sendEmail} className="bg-white p-7 rounded-xl">
          <h4 className="text-3xl font-semibold pb-5">Fill The Contact Form
              </h4>
              <p className="text-blue-800 ">Feel free to contact with us, we don't spam your email

              </p>
              <div className="flex ">
                <div className="w-full md:w-1/2 py-2 px-3">
                  <input name='user_name' type="text"className=" rounded-none outline-none border-b-2 w-full px-2 py-3 focus:border-blue-600/50" placeholder="Your Name" />
                </div>
                <div className="w-full md:w-1/2 py-2 px-3">
                  <input name='phone' type="number"className=" rounded-none outline-none border-b-2 w-full px-2 py-3 focus:border-blue-600/50" placeholder=" Phone Number" />
                </div>
              </div>
              <div className="py-2 px-">
                <input name='email' type="email"className=" rounded-none outline-none border-b-2 w-full px-2 py-3 focus:border-blue-600/50" placeholder=" Your Email" />
              </div>
              <div className="py-2 px-">
                <textarea name='message' type="email"className=" rounded-none outline-none border-b-2 w-full px-2 py-3 focus:border-blue-600/50 h-[150px]" placeholder=" Write your message" />
              </div>

               <div className="py-4 ">
            <button className='btn btn-animation  py-8 w-full  bg-[var(--primary)] text-white text-lg border-0 outline-none hover:bg-[var(--primary)]'>
                      <p className='animation-top2 w-full text-center'>Send Message</p>
                      <p className='animation-bottom2 w-full text-center'>Send Message</p>
            </button></div>
              
            </form>
          </div>
    </div>
  );
};

export default MContact;