import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import ContactForm from './ContactForm'

test('renders ContactForm without errors', () => {
    render(<ContactForm />)
})

test('user can fill out & submit form', () => {
    //arrange: render component 
    render(<ContactForm />)

    //act
    //access form fields 
    const firstNameInput = screen.getByPlaceholderText(/edd/i)
    const lastNameInput = screen.getByPlaceholderText(/burke/i)
    const emailInput = screen.getByLabelText(/email/i)
    const messageInput = screen.getByLabelText(/message/i)

    //add text to form fields
    fireEvent.change(firstNameInput, {target: {value: 'mal', name: 'firstName'}})
    expect(firstNameInput).toHaveValue('mal')
    fireEvent.change(lastNameInput, {target: {value: 'rivera', name: 'lastName'}})
    expect(lastNameInput).toHaveValue('rivera')
    fireEvent.change(emailInput, {target: {value: 'mrivera6197@gmail.com', name: 'email'}})
    expect(emailInput).toHaveValue('mrivera6197@gmail.com')
    fireEvent.change(messageInput, {target: {value: 'hi there', name: 'message'}})
    expect(messageInput).toHaveValue('hi there')
   
    //get access and click submit button 
    const button = screen.getByRole('button')
    fireEvent.click(button)

    //assert check that text is on screen 
    const newMessage = screen.getByDisplayValue(/hi there/i)
    expect(newMessage).toBeTruthy()
    const newName = screen.getByDisplayValue(/mal/i)
    expect(newName).toBeTruthy()


})