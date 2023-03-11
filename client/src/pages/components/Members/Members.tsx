import React from 'react'
import './Members.scss'

import Card from '../Activities/components/Card/Card.tsx';

import { IoMdInformationCircleOutline } from 'react-icons/io';
import membres from '../../../assets/membres.png'
import volunteers from '../../../assets/volunteers.png'
import Button from '../../Landing/components/Button/Button.tsx';

const infoIcon = <IoMdInformationCircleOutline size={'28px'} color='rgb(255, 255, 255)' />

const Members = () => {
    return (
        <div className='members' id='members'>
            <div className="container">
                <div className="title">
                    <h1>Les membres</h1>
                    <div className="infoButton">
                        {infoIcon}
                        <div className="information">
                            <p>
                                L'attribution des rôles aux applicants ainsi que l'admission
                                de nouveaux membres (autres que bénévoles) est saisonnière
                                et n'est pas active en tout temps.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="implication">

                    <div className="description">
                        <p>Les membres de l’exécutif jouent un rôle crucial dans le bon fonctionnement de l'association en veillant à ce que celle-ci continue de briller de manière organisée et durable. Cependant, leur travail n’est pas complet sans les autres membres. C'est pourquoi nous vous encourageons vivement à vous engager activement dans la vie de l'association en tant que membre actif ou bénévole. Nous serions ravis de vous accueillir à bras ouverts. Votre contribution est précieuse et nous permettra de poursuivre notre mission avec succès.</p>

                    </div>

                    <div className="cards">
                        <Card title='Membre actif' image={membres} description="Un membre actif participie activement aux différentes réunions et aux préparatifs des activités qu’il a choisi. Sa présence et son engagement sont indispensables pour faire avancer nos projets et atteindre nos objectifs communs. Nous comptons sur leur contribution active pour faire de notre association un lieu dynamique et enrichissant pour tous les membres." />
                        <Card title='Bénévole' image={volunteers} description="Le/la bénévole actif(ve) n'est affilié à aucun comité en particulier et est sollicité lorsqu'un VP a besoin de soutien. Il joue tout de même un rôle crucial dans l'associacion et est grandement apprécié et bien accueilli par l'ensemble de l'équipe." />

                        <div className="becomeCard">
                            <h1 className="title">
                                Devenez membre
                            </h1>
                            <div className="buttonsContainer">
                                <div className="buttons">
                                    <Button href='https://docs.google.com/forms/d/e/1FAIpQLSeWySby7gofUAtlFF5AZ9ZgoCFRgtUIJHvmmDjKFsN2XxH5LQ/closedform' content='Appliquer' clickFunction={''}/>
                                    <Button href='https://www.paypal.com/donate/?cmd=_s-xclick&hosted_button_id=PEDJ5XEWXD7VJ&source=url' content='Faire un don' clickFunction={''}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Members