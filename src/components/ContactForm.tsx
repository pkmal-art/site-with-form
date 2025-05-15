'use client';
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup';
import styled from "styled-components";

const Wrapper = styled.section`
  background: #fefefe;
  padding: 80px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--primary);
  text-align: center;
  margin-bottom: 40px;

  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`;

const Form = styled.form`
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

const Field = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-size: 0.95rem;
  font-weight: 500;
  color: #444;
  margin-bottom: 6px;
`;

const Input = styled.input`
  padding: 12px 14px;
  border-radius: 20px;
  border: 1px solid #ccc;
  font-size: 1rem;
  transition: 0.3s ease;

  &:hover {
    border-color: #999;
  }

  &:focus {
    border-color: var(--primary);
    outline: none;
    box-shadow: 0 0 0 3px rgba(100, 100, 255, 0.1);
  }
`;

const Textarea = styled.textarea`
  padding: 12px 14px;
  border-radius: 20px;
  border: 1px solid #ccc;
  font-size: 1rem;
  resize: vertical;
  min-height: 120px;
  transition: 0.3s ease;

  &:hover {
    border-color: #999;
  }

  &:focus {
    border-color: var(--primary);
    outline: none;
    box-shadow: 0 0 0 3px rgba(100, 100, 255, 0.1);
  }
`;

const Submit = styled.button`
  background: var(--primary);
  color: #fff;
  font-weight: 600;
  padding: 14px;
  font-size: 1rem;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: var(--accent);
    color: var(--primary);
    transform: scale(1.03);
  }

  &:active {
    transform: scale(0.98);
  }
`;

const Error = styled.span`
  color: #d00;
  font-size: 0.75rem;
  margin-top: 4px;
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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <Wrapper>
      <Title>Only CTA on the page</Title>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Field>
          <Label htmlFor="name">Name</Label>
          <Input id="name" {...register('name')} />
          {errors.name && <Error>{errors.name.message}</Error>}
        </Field>

        <Field>
          <Label htmlFor="email">Email</Label>
          <Input id="email" {...register('email')} />
          {errors.email && <Error>{errors.email.message}</Error>}
        </Field>

        <Field>
          <Label htmlFor="message">Message</Label>
          <Textarea id="message" {...register('message')} />
          {errors.message && <Error>{errors.message.message}</Error>}
        </Field>

        <Submit type="submit">Send Message</Submit>
      </Form>
    </Wrapper>
  );
}


