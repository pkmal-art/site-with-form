'use client';
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup';
import styled from "styled-components";
import { TextField, Button } from '@mui/material';

const FormWrapper = styled.section`
  background: #fefefe;
  padding: 80px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FormTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--primary);
  text-align: center;
  margin-bottom: 40px;

  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`;

const FormStyled = styled.form`
  background: #fff;
  padding: 32px;
  border-radius: 16px;
  box-shadow: 0 10px 32px rgba(0, 0, 0, 0.07);
  width: 100%;
  max-width: 460px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const StyledTextField = styled(TextField)`
  & label {
    font-size: 0.95rem;
    color: #444;
  }

  & .MuiInputBase-root {
    border-radius: 20px;
    background-color: #fff;
  }

  & .MuiOutlinedInput-root {
    &:hover fieldset {
      border-color: #999;
    }

    &.Mui-focused fieldset {
      border-color: var(--primary);
      box-shadow: 0 0 0 3px rgba(100, 100, 255, 0.1);
    }
  }
`;

const Submit = styled(Button)`
  && {
    background: var(--primary);
    color: #fff;
    font-weight: 600;
    padding: 14px;
    font-size: 1rem;
    border-radius: 20px;
    text-transform: none;
    transition: all 0.3s ease;

    &:hover {
      background: var(--accent);
      color: var(--primary);
      transform: scale(1.03);
    }

    &:active {
      transform: scale(0.98);
    }
  }
`;

const Message = styled.div`
  display: flex;
  min-height: 80vh;
  background: #fefefe;
  color: var(--primary);
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
`;

const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  message: yup.string().required('Message is required'),
});

type FormData = {
  name: string;
  email: string;
  message: string;
};

export default function ContactForm() {
  const [submittedMessage, setSubmittedMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok && result.name) {
        setSubmittedMessage(`Thank you for your interest, ${result.name}!`);
      } else {
        console.error('Server error:', result);
      }
    } catch (error) {
      console.error('Submission error:', error);
    }
  };

  return submittedMessage ? (
    <Message>
      <p>{submittedMessage}</p>
    </Message>
  ) : (
    <FormWrapper>
      <FormTitle>Only CTA on the page</FormTitle>
      <FormStyled onSubmit={handleSubmit(onSubmit)} noValidate>
        <StyledTextField
          label="Name"
          variant="outlined"
          fullWidth
          error={!!errors.name}
          helperText={errors.name?.message}
          {...register('name')}
        />
        <StyledTextField
          label="Email"
          type="email"
          variant="outlined"
          fullWidth
          error={!!errors.email}
          helperText={errors.email?.message}
          {...register('email')}
        />
        <StyledTextField
          label="Message"
          variant="outlined"
          fullWidth
          multiline
          rows={5}
          error={!!errors.message}
          helperText={errors.message?.message}
          {...register('message')}
        />
        <Submit type="submit" variant="contained">Send Message</Submit>
      </FormStyled>
    </FormWrapper>
  );
}
