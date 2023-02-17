import React from 'react'
import './Comites.scss'

import Accordion from './components/Accordion/Accordion'

const Comites = () => {
    return (
        <div className='comites'>
            <div className="container">
                <h1>Nos comités</h1>
                <Accordion title='Comité frères' description='Que ça soit une conférence, une fin de semaine au chalet, des séances de foot ou des rencontres hebdomadaires telles que la joumou’a et les 5@7, le comité frères fait de son mieux pour offrir des activités de qualité et aux souvenirs mémorables.'/>
                <Accordion title='Comité soeurs' description='Que ça soit une randonnée pédestre, un tour de cheval, un tournoi de foot ou des rencontres bimensuelles telle que les 5@7, le comité soeurs fait de son mieux pour offrir des activités de qualité et aux souvenirs mémorables.'/>
                <Accordion title='Comité financement' description="Puisque notre association ne reçoit aucune subvention de l'université et ne survit qu'avec ses propres moyens, le comité financement prépare, selon les besoins, des projets de financement et de levée de fonds pour l’association. Grâce à des stratégies de financement créatives et efficaces, l'AEMUDM peut offrir de multiples services et activités à des tarifs abordables."/>
                <Accordion title="Comité da'wah" description="Se donne la vocation de créer un support à la communauté étudiante sur le campus dans sa quête de spiritualité et se donne comme mandat de sensibiliser les gens au message de l'islam. Ainsi, le comité da'wah offre du matériel (livres, corans, pamphlets), des conférences et des ateliers sur divers thèmes islamiques."/>
                <Accordion title='Comité communication' description='Site web, Facebook, Youtube, affiches, dépliants, logos… Le comité communication, comme son nom le suggère, s’occupe principalement de la publicité et de la promotion de nos activités.'/>
            </div>
        </div>
    )
}

export default Comites