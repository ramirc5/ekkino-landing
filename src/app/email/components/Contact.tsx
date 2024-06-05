'use client';

import { FC } from 'react';
import { useForm, FieldErrors } from 'react-hook-form';
import { sendEmail } from './send-email';

export type FormData = {
  name: string;
  email: string;
  budget: string;
  subject: string;
  message: string;
};

const Contact: FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  function onSubmit(data: FormData) {
    sendEmail(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 ">
      <div className="mb-5">
        <input
          type='text'
          placeholder='Name'
          className={`w-full placeholder-[#2E2E2F] rounded-3xl border border-[#2E2E2F] bg-transparent border-[1px] focus:outline-none py-3 px-6 text-base font-medium text-[#2E2E2F] outline-none focus:border-purple-500 focus:shadow-md ${errors.name ? 'border-red-500' : ''}`}
          {...register('name', { 
            required: 'Name is required', 
            minLength: { value: 8, message: 'Name must be at least 8 characters long' },
            maxLength: { value: 50, message: 'Name must be less than 50 characters long' }
          })}
        />
        {errors.name && <p className="text-red-500 mt-1">{errors.name.message}</p>}
      </div>
      <div className="mb-5">
        <input
          type='email'
          placeholder='Email'
          className={`w-full placeholder-[#2E2E2F] rounded-3xl border border-[#2E2E2F] bg-transparent border-[1px] py-3 px-6 text-base font-medium text-[#2E2E2F] outline-none focus:border-purple-500 focus:shadow-md ${errors.email ? 'border-red-500' : ''}`}
          {...register('email', { 
            required: 'Email is required', 
            pattern: { value: /^\S+@\S+$/i, message: 'Invalid email format' }
          })}
        />
        {errors.email && <p className="text-red-500 mt-1">{errors.email.message}</p>}
      </div>
      <div className="flex flex-col gap-[20px] md:gap-[0px] md:flex-row mb-5">
        <input
          type='text'
          placeholder='Subject'
          className={`flex-grow placeholder-[#2E2E2F] rounded-3xl border border-[#2E2E2F] bg-transparent border-[1px] py-3 px-6 text-base font-medium text-[#2E2E2F] outline-none focus:border-purple-500 focus:shadow-md ${errors.subject ? 'border-red-500' : ''}`}
          {...register('subject', { 
            required: 'Subject is required', 
            maxLength: { value: 140, message: 'Subject must be less than 140 characters long' }
          })}
        />
        <input
          type='text'
          placeholder='Budget (e.g $0-1000)'
          className={`flex-grow placeholder-[#2E2E2F] w-full md:w-auto rounded-3xl border border-[#2E2E2F] bg-transparent border-[1px] py-3 px-6 text-base font-medium text-[#2E2E2F] outline-none focus:border-purple-500 focus:shadow-md ${errors.budget ? 'border-red-500' : ''}`}
          {...register('budget', { 
            required: 'Budget is required',
            maxLength: { value: 30, message: 'Budget must be less than 30 characters long' }
          })}
        />
      </div>
      <div className="mb-5">
        <textarea
          rows={4}
          placeholder='Message'
          className={`w-full placeholder-[#2E2E2F] resize-none rounded-3xl border border-[#2E2E2F] bg-transparent border-[1px] py-3 px-6 text-base font-medium text-[#2E2E2F] outline-none focus:border-purple-500 focus:shadow-md ${errors.message ? 'border-red-500' : ''}`}
          {...register('message', { 
            required: 'Message is required', 
            maxLength: { value: 1000, message: 'Message must be less than or equal to 1000 characters' }
          })}
        ></textarea>
        {errors.message && <p className="text-red-500 mt-1">{errors.message.message}</p>}
      </div>
      <div className='flex justify-end'>
        <button className="flex items-center px-4 py-2 border border-[#2E2E2F] rounded-full text-[#2E2E2F] hover:bg-gray-200 focus:outline-none w-[135px]">
          Submit
          <svg
            className="ml-2 w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            ></path>
          </svg>
        </button>
      </div>
    </form>
  );
};

export default Contact;
