import React, { useState } from "react";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";

const Contact = () => {
    const [successMessage, setSuccessMessage] = useState("");
    const { register, handleSubmit, formState: { errors } } = useForm();
   

    const serviceID = "gmail";
    const templateID = "template_ID"
    const userID = "user_PC9mz6NhYscX37T8PB9Ng"

    const onSubmit = (data, r) => {
        sendEmail(
            serviceID,
            templateID,
            {
                name: data.Name,
                email: data.Email,
                subject: data.Subject,
                message: data.Message
            },
            userID
        )
        r.target.reset();
    }

    const sendEmail = (serviceID, templateID, variables, userID) => {
        emailjs.send(serviceID, templateID, variables, userID)
          .then(() => {
            setSuccessMessage("Request has been sent successfully. Thank You!");
          }).catch(err => console.error(`Something went wrong... ${err}`));
    }

    return (
        <div id="contact" className="contact">
            <div className="text-container">
                <h1>Contact Me</h1>
                <p>Please fill out this form and I will reach out ASAP!</p>
                <span className="success-message">{successMessage}</span>
            </div>
            <div className="input-container">
                <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                    <div className="col-md-6 col-xs-12">
                        <div className="text-center">
                            <input 
                            type="text"
                            className="form-control"
                            placeholder="Name"
                            name="name" 
                            {...register("Name", { required: true })} />
                            <div className="underline"></div>
                        </div>
                        <span className="error-msg">{errors.Name?.type === 'required' && "Full name is required"}</span>
                        <div className="text-center">
                            <input 
                            type="email"
                            className="form-control"
                            placeholder="Email"
                            name="email" 
                            {...register("Email", { required: true })} />
                            <div className="underline"></div>
                        </div>
                        <span className="error-msg">{errors.Email?.type === 'required' && "Email address is required"}</span>
                        <div className="text-center">
                            <input 
                            type="text"
                            className="form-control"
                            placeholder="Subject"
                            name="subject" 
                            {...register("Subject", { required: true })} />
                            <div className="underline"></div>
                        </div>
                        <span className="error-msg">{errors.Subject?.type === 'required' && "Subject is required"}</span>
                    </div>
                    <div className="col-md-6 col-xs-12">
                        <div className="text-center">
                            <textarea
                            type="text"
                            className="form-control"
                            placeholder="Message"
                            name="message" 
                            {...register("Message", { required: true })}
                            ></textarea>
                            <div className="underline"></div>
                        </div>
                        <span className="error-msg">{errors.Message?.type === 'required' && "Message is required"}</span>
                        <button className="contact-btn" type="submit">Contact Me</button>
                    </div>
                </div>
                </form>
            </div>
        </div>
    )
}

export default Contact;