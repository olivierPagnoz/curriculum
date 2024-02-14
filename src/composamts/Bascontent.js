import React, { useState} from 'react';
import Informatique from "./Informatique";
import Logistique from "./Logistique";
import PremExperience from "./PremExperience";
import "../styles/bascontent.css"
import Detailserie from "./Detailserie";
import Complogistique from './Complogistique';
import Compinformatique from './Compinformatique';
import Compprem from './Compprem';

function Bascontent() {
  var tableauserie = [
    { id: '1', serie: 'logistique', poste:'Préparateur de commandes', contrat:'contrat CDI toujours d\'actualité', detail:'Préparation des commandes selon process. Maîtrise de toute la chaine retour client remboursement et logistique Gestion des articles hors-gabarit Correction des anomalies logistiques Participation à la mise en place de nouveaux process Formation des nouveaux arrivants', employeur:'VENTE PRIVÉE Logistique', addemployeur:'Site de Lyon 4 - 01 120 La Boisse', duree:'depuis 2018'},
    { id: '2', serie: 'logistique', poste:'Logisticien en pharmacie', contrat:'CDI 3 ans - rupture conventionnelle', detail:'Dans une officine de 20 employés, réception et rangement des commandes de médicaments et parapharmacie. Suivi quotidien d’un robot automate. Inventaire tournant', employeur:'Pharmacie Martin-Pinel', addemployeur:'38 230 Pont de Chéruy', duree:'2015 - 2018'},
    { id: '3', serie: 'informatique', poste:'Développeur Web', contrat:'Entreprise Individuelle - 6ans', detail:'Pour un groupement de pharmacie, création et développement d’une interface en ligne permettant la personnalisation et le téléchargement de documents', employeur:'Entreprise Individuelle', addemployeur:'25000 Besançon', duree:'6ans 2010 - 2016'},
    { id: '4', serie: 'informatique', poste:'Infographiste en imprimerie', contrat:'CDI 5 ans - Licenciement économique', detail:'Vérification et validation des fichiers avant impression offset ou numérique. Mise en page, création graphique, établissement des «BàT»', employeur:'Valent imprimerie', addemployeur:'25000 Besançon', duree:'5ans 2005 - 2010'},
    { id: '5', serie: 'prem', poste:'Conducteur de travaux', contrat:'CDI 8 ans - démission', detail:'Planification et conduite de travaux d’entretien des abords de voies ferrées', employeur:'sarl EVL', addemployeur:'51310 ESTERNAY', duree:'8ans 1997 - 2005'},
   
];
var tableaucompetence = [
  {id:'1', serie:'logistique', bloctexte:'<h1>LOG</h1>'},
  {id:'2', serie:'informatique', bloctexte:'PC MAC'},
  {id:'3', serie:'prem', bloctexte:'Applicateur phyto'}
];
const[seriechange, setSeriechange] = useState([]);
const[tabcompetence, setTabcompetence] = useState();
const clickdetail = (serierecu) => {
  setSeriechange(tableauserie.filter(x => x.serie === serierecu));
  setTabcompetence((serierecu === 'logistique' ? <Complogistique/> : '') || (serierecu === 'informatique' ? <Compinformatique/> : '') || (serierecu === 'prem' ? <Compprem/> : '') );
  console.log(setSeriechange);
  document.getElementById('onglet').style.height='14%';
  document.getElementById('onglet').style.gridTemplateColumns='1fr 1fr 1fr';
  document.getElementById('loggrid').style.height='10vh';
  };    
    return (
      <div className="bascontent">
        <div className='navigation' id='onglet'>
        <div className="loggrid" id='loggrid' onClick={() => clickdetail('logistique')}><Logistique /></div>
        <div className="infgrid" onClick={() => clickdetail('informatique')}><Informatique /></div>
        <div className="premgrid" onClick={() => clickdetail('prem')}><PremExperience /></div>
        </div>
        <Detailserie serie={seriechange} comp={tabcompetence} />
      </div>
    );
  }
  
  export default Bascontent;