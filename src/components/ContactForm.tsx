import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup';
import styled from "styled-components";

const Wrapper = styled.div`
  background: #f4f4f4;
  min-height: 100vh;
  padding: 4rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Title = styled.h1`
  font-size: 2.2rem;
  font-style: italic;
  font-weight: 700;
  text-align: center;
  margin-bottom: 2.5rem;

  @media (max-width: 480px) {
    font-size: 1.6rem;
  }
`

const FormContainer = styled.form`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  box-sizing: border-box;
`

const Label = styled.label`
  display: block;
  margin-bottom: 1.2rem;
  font-size: 0.9rem;
  color: #333;
`

const Input = styled.input`
  width: 100%;
  padding: 0.6rem;
  margin-top: 0.4rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  transition: border-color 0.3s, box-shadow 0.3s;

  &:hover {
    border-color: #999;
  }

  &:focus {
    border-color: #333;
    outline: none;
    box-shadow: 0 0 0 2px rgba(51, 51, 51, 0.1);
  }
`

const Textarea = styled.textarea`
  width: 100%;
  padding: 0.6rem;
  margin-top: 0.4rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  resize: none;
  transition: border-color 0.3s, box-shadow 0.3s;

  &:hover {
    border-color: #999;
  }

  &:focus {
    border-color: #333;
    outline: none;
    box-shadow: 0 0 0 2px rgba(51, 51, 51, 0.1);
  }
`

const Submit = styled.button`
  width: 100%;
  padding: 0.7rem;
  background: #1a1a1a;
  color: white;
  border: none;
  border-radius: 4px;
  font-weight: 500;
  font-size: 1rem;
  cursor: pointer;
  

  &:hover {
    background: #333;
  }

  &:active {
    transform: scale(0.98);
    background: #000;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(51, 51, 51, 0.2);
  }
`

const Error = styled.p`
  color: red;
  font-size: 0.75rem;
  margin-top: 0.3rem;
`;

const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  message: yup.string().required('Message id required'),
});

type FormData = {
  name: string
  email: string
  message: string
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
    console.log(data)
  };

  return (
    <Wrapper>
      <Title>Only CTA on the page</Title>
      <FormContainer onSubmit={handleSubmit(onSubmit)}>
        <Label>
          Name
          <Input {...register('name')} />
          {errors.name && <Error>{errors.name.message}</Error>}
        </Label>

        <Label>
          Email
          <Input {...register('email')} />
          {errors.email && <Error>{errors.email.message}</Error>}
        </Label>

        <Label>
          Message
          <Textarea rows={4} {...register('message')} />
          {errors.message && <Error>{errors.message.message}</Error>}
        </Label>

        <Submit type="submit">Submit</Submit>
      </FormContainer>
    </Wrapper>
  )
}