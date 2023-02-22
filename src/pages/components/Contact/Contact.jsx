import React from 'react'
import { useEffect, useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import './Contact.scss'

const Contact = () => {
    const refForm = useRef()

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs.sendForm(
            'service_fux0l5b',
            'template_p7x9fxi',
            refForm.current,
            'YgMY1IPb3JBoMWrfM'
        ).then(
            () => {
                alert('Message envoyé avec succès, merci beaucoup.')
                window.location.reload(false)
            },
            () => {
                alert("Une erreur s'est produite lors de l'envoi du message. Veuillez réessayer.")
            }
        )
    }

    return (
        <div className='contactSection' id='contact'>
            <div className="contactContainer">
                <h1>Envoyez nous un message 👋</h1>
                <p>Si vous avez des questions, des suggestions, des inquiétudes ou bien
                    si vous voulez tout simplement nous envoyer des commentaires, n'hésitez
                    surtout pas à remplir le formulaire ci-dessous. Nous ferons de notre
                    mieux pour vous répondre dans les plus brefs délais. As salam waleikum!
                </p>
                <div className="contactForm">
                    <form ref={refForm} onSubmit={sendEmail}>
                        <ul>
                            <div className="nomCourriel">
                                <li><input type="text" name='user_name' placeholder='Nom' required /></li>
                                <li><input type="email" name='user_email' placeholder='Courriel' required /></li>
                            </div>

                            <li className='objet'><input type="text" placeholder='Objet' name='subject' /></li>
                            <li className='textarea'><textarea placeholder='Message' name='message' required></textarea></li>
                            <li><input type="submit" className='contactButton' value='Envoyer'/></li>
                        </ul>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact