// components/ContactForm.tsx
"use client";
import React from 'react';
import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import emailjs from '@emailjs/browser';

type Inputs = {
  name: string;
  email: string;
  subject: string;
  description: string;
};

const ContactInfo: React.FC = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<Inputs>();
  const [showSuccess, setShowSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit: SubmitHandler<Inputs> = data => {
    console.log("data is",data.name);
    var email_params = {
      name:data.name,
      email:data.email,
      subject:data.subject,
      message:data.description,

    };
    emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!, 
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!, 
      email_params, 
      process.env.NEXT_PUBLIC_EMAILJS_USER_ID!
    ).then((result)=>{
      console.log('Email sent:', result.text);
      setShowSuccess(true);
      reset();
      setTimeout(() => setShowSuccess(false), 3000)
    }).catch((error) => {
      console.error("Error sending email:", error);
      setErrorMessage("Failed to send email. Please try again.");
    });
    
  };
  return (
    <div className='flex flex-col items-center justify-center' id='contactsmain'>
    <h1 className="text-5xl mt-20 max-lg:mt-16 font-semibold text-transparent bg-clip-text bg-[#f3eee8]  max-md:text-4xl max-sm:text-3xl max-[350px]:text-2xl">
        Contact Me!
      </h1>
    <form onSubmit={handleSubmit(onSubmit)} className="w-[30%] mx-auto p-[1.5px] rounded-3xl z-20 mt-8  max-lg:mt-4 max-lg:w-[50%] max-sm:w-[60%] max-[540px]:w-[80%] bg-gradient-to-r from-[#c7b8a6] to-[#f3eee8] shadow-lg sm:shadow-[#b2d0fa7c] shadow-[#b2d0fa7c]">
      <div className='w-full h-full bg-[#080808] p-6 rounded-3xl backdrop-blur-md'>
      <div className="mb-4">
        <div className='flex flex-row gap-2'>
        <label htmlFor="name" className="block text-sm font-medium text-[#c7b8a6] after:content-['*'] after:text-red-800">Name</label>
        </div>
        <input
          id="name"
          type="text"
          placeholder='Enter Your Name'
          required
          {...register('name', { required: true,})}
          className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm sm:text-sm"
        />
      </div>

      <div className="mb-4">
      <div className='flex flex-row gap-2'>        
        <label htmlFor="email" className="block text-sm font-medium text-[#c7b8a6] after:content-['*'] after:text-red-800">Email</label>
      </div>
        <input
          id="email"
          type="email"
          placeholder='Enter Your Email'
          required
          {...register('email', { required: true })}
          className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm sm:text-sm"
        />
      </div>

      <div className="mb-4">
        <div className='flex flex-row gap-2'>    
          <label htmlFor="subject" className="block text-sm font-medium text-[#c7b8a6] after:content-['*'] after:text-red-800">Subject</label>
        </div>
        <input
          id="subject"
          type="text"
          placeholder='Enter Your Subject'
          required
          {...register('subject', { required: true })}
          className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm sm:text-sm"
        />
      </div>

      <div className="mb-4">
        <div className='flex flex-row gap-2'>    
          <label htmlFor="description" className="block text-sm font-medium text-[#c7b8a6] after:content-['*'] after:text-red-800">Description</label>
        </div>
        <textarea
          id="description"
          placeholder='Enter Your Description'
          required
          rows={4}
          {...register('description', { required: true })}
          className="mt-1 p-2 block w-full rounded-md shadow-sm sm:text-sm"
        />
      </div>

      <div className='flex justify-end w-full'>
        <button
          type="submit"
          className="px-4 py-2 bg-[#c7b8a6] text-[#111111] text-sm font-semibold rounded-md shadow-sm hover:bg-[#776e63] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Send &#9658;	
        </button>
      </div>
      </div>
    </form>
        <div className={`fixed top-32 bg-green-500 text-white px-4 py-2 rounded-md shadow-md animate-fade-in-out z-50 duration-500 ${showSuccess? "md:right-20 right-2" : "-right-96"}`}>
          Email has been sent successfully!
        </div>
        
      {errorMessage && (
        <div className="mt-4 text-red-500">
          {errorMessage}
        </div>
      )}
    </div>
  );
};

export default ContactInfo;
