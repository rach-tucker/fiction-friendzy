"use client";
import React, { useState } from 'react';
import { Auth } from 'aws-amplify';
import { Amplify } from 'aws-amplify';
import awsmobile from '../../app/aws-exports';

Amplify.configure(awsmobile);

const SignupForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const params = {
        username: email,
        password,
        attributes: {
          email,
          name,
          phone_number: phoneNumber,
        },
      };

      await Auth.signUp(params);
      console.log('Signup successful');
    } catch (error) {
      console.log('Error signing up user:', error);
    }
  };

  return (
    <form onSubmit={handleSignup}>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <label htmlFor="phone">Phone Number:</label>
        <input type="tel" id="phone" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button type="submit">Signup</button>
    </form>
  );
};

export default SignupForm;
