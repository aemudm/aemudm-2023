import React from 'react'
import './Members.scss'

import Card from '../Activities/components/Card/Card';

import { IoMdInformationCircleOutline } from 'react-icons/io';
import membres from '../../../assets/membres.png'
import volunteers from '../../../assets/volunteers.png'
import Button from '../../Landing/components/Button/Button';

const infoIcon = <IoMdInformationCircleOutline size={'28px'} color='rgb(255, 255, 255)' />

const Members = () => {
    return (
        <div className='members' id='members'>
            <div className="container">
                <div className="title">
                    <h1>Les rôles</h1>
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
                        <p>L'association est administrée par un président, des vices-présidents, un/une secrétaire, un trésorier, un VP administration et un VP externe. Ces rôles assurent le bon fonctionnement de l'association afin de continuer de la faire briller de manière perpétuelle et organisée. Cependant, ce ne sont pas les seuls rôles dont l'association a besoin. Faites le pas et devenez un membre actif ou encore un bénévole, nous vous accueillerons à bras grands ouverts.</p>

                    </div>

                    <div className="cards">
                        <Card title='Membre actif' image={membres} description="Chaque membre actif est lié à un comité respectif et a comme responsabilité de participer aux divers rencontres de son comité et de contribuer à l'avancement de ses projets et de ses activités." />
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