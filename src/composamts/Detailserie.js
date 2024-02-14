import '../styles/detailserie.css';
 function Detailserie(props) {
    console.log(props);
    return (
      <div className="detailserie">
                <div className='competencehaut'>
                    {props.comp}
                </div>
            
            <div className='containerdetail' >
                {props.serie.map((atome) =>
                (
                    <div key={atome.id} style={{position:'relative'}} >
                        <li><div className='premligne'>
                                <div className='titreposte'>{atome.poste}</div>
                                <div className='contratposte'>{atome.contrat}</div>
                            </div></li>
                        
                        <li><div className='detailposte'>{atome.detail}</div></li>
                        <li><div className='detailemployeur'>{atome.employeur}</div></li>
                        
                    </div>  
                ))}
                <div className='competencebas'>
                    {props.comp}
                </div>
                <br></br>        
            </div>
            
        </div>
    );
  }
  
  export default Detailserie;