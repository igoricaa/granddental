'use client';

import { Controller, useForm } from 'react-hook-form';
import { useState } from 'react';
import Button from './UI/Button';
import 'react-international-phone/style.css';
import { PhoneInput } from 'react-international-phone';

type FormData = {
  access_key: string;
  subject: string;
  from_name: string;
  name: string;
  email: string;
  phone: string;
  message: string;
};

const ContactForm = () => {
  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();
  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMessage] = useState('');

  const onSubmit = async (formData: FormData) => {
    await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(formData, null, 2),
    })
      .then(async (response) => {
        const result = await response.json();
        if (result.success) {
          setIsSuccess(true);
          reset();
          setMessage('Poruka je uspešno poslata');
        } else {
          setIsSuccess(false);
          setMessage('Došlo je do greške');
        }
      })
      .catch((error) => {
        setIsSuccess(false);
        setMessage('Došlo je do greške');
      });
  };

  return (
    <div className='py-16'>
      <h2 className='text-4xl underlined'>Kontaktirajte nas</h2>
      <form onSubmit={handleSubmit(onSubmit)} className='mt-12'>
        <input
          type='hidden'
          value='8344aabe-a316-41f3-a400-bbdf245526d9'
          {...register('access_key')}
        />
        <input
          type='hidden'
          value='Kontakt forma sa granddental.rs'
          {...register('subject')}
        />
        <input
          type='hidden'
          value='Kontakt forma granddental.rs'
          {...register('from_name')}
        />
        <div className='relative'>
          <input
            id='name'
            className={`${
              errors.name ? 'border-red-500' : 'border-white'
            } w-full bg-transparent border-b pb-2 px-2 outline-none placeholder:text-white/60`}
            type='text'
            placeholder='Ime i prezime'
            {...register('name', {
              required: { value: true, message: 'Obavezno polje' },
              maxLength: { value: 50, message: 'Maksimalno 50 karaktera' },
            })}
            autoComplete='name'
          />
          {errors.name && (
            <p className='text-xs absolute left-2 -bottom-6 text-red-500'>
              {errors.name.message}
            </p>
          )}
        </div>
        <div className='mt-8 relative'>
          <input
            id='email'
            className={`${
              errors.email ? 'border-red-500' : 'border-white'
            } w-full bg-transparent border-b pb-2 px-2 outline-none placeholder:text-white/60`}
            type='email'
            placeholder='Email'
            {...register('email', {
              required: { value: true, message: 'Obavezno polje' },
              pattern: {
                value: /^\S+@\S+$/i,
                message: 'Email adresa nije validna',
              },
            })}
            autoComplete='email'
          />
          {errors.email && (
            <p className='text-xs absolute left-2 -bottom-6 text-red-500'>
              {errors.email.message}
            </p>
          )}
        </div>
        <div className='mt-8 relative'>
          <Controller
            name='phone'
            control={control}
            rules={{
              required: {
                value: true,
                message: 'Obavezno polje',
              },
              validate: {
                pattern: (value) =>
                  /^\+\d{11,25}$/.test(value.replace(/\s+/g, '')) ||
                  'Broj telefona nije ispravan',
                minLength: (value) =>
                  value.replace(/\s+/g, '').length >= 11 ||
                  'Broj telefona je prekratak',
                maxLength: (value) =>
                  value.replace(/\s+/g, '').length <= 25 ||
                  'Broj telefona je predugačak',
              },
            }}
            render={({ field: { onChange, value } }) => (
              <PhoneInput
                defaultCountry='rs'
                value={value}
                onChange={(phone) => {
                  onChange(phone);
                }}
                className='w-full'
                inputClassName={`
                  !w-full 
                  !text-white
                  !text-base
                  !bg-transparent 
                  !border-0
                  !border-b 
                  !rounded-none
                  !pb-0
                  !px-2 
                  !outline-none 
                  !placeholder:text-white/60
                  ${errors.phone ? '!border-red-500' : '!border-white'}
                `}
                countrySelectorStyleProps={{
                  buttonClassName:
                    '!bg-transparent !border-0 !border-b !rounded-none',
                }}
                placeholder='Telefon'
              />
            )}
          />
          {errors.phone && (
            <p className='text-xs absolute left-2 -bottom-6 text-red-500'>
              {errors.phone.message}
            </p>
          )}
        </div>

        <div className='mt-8 relative'>
          <textarea
            id='message'
            className={`${
              errors.message ? 'border-red-500' : 'border-white'
            } w-full bg-transparent border py-2 px-2 outline-none resize-none placeholder:text-white/60`}
            placeholder='Poruka'
            rows={9}
            {...register('message', {
              required: { value: true, message: 'Obavezno polje' },
              minLength: { value: 10, message: 'Minimalno 10 karaktera' },
              maxLength: { value: 1000, message: 'Maksimalno 1000 karaktera' },
            })}
          />
          {errors.message && (
            <p className='text-xs absolute left-2 -bottom-6 text-red-500'>
              {errors.message.message}
            </p>
          )}
          {message && (
            <p className={isSuccess ? 'text-green-500' : 'text-red-500'}>
              {message}
            </p>
          )}
        </div>

        <Button type='submit' className='mt-8'>
          <span>Pošaljite poruku</span>
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
