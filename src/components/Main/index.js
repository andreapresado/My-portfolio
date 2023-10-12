import img from '../../assets/img/img.jpg'
import SimplonProjet from '../../assets/img/pjet_simplon.gif'

const Main = () => {

    return (
        <>
            <main className='main '>


                <div class="background-container">
                    <h1 className='main main_Title'>Bienvenue sur mon portfolio!</h1>
                    <div className='main main_box'>
                        <div className='main main_card'>

                            <img className='main main_cardTitle unselectable' src={img} alt="moi"></img>
                            <div class="stars"></div>
                            <div class="twinkling"></div>
                            <div class="clouds"></div>
                        </div>

                        <div className='main main_desc'>
                            <p className='main main_card-info unselectable'>Intéressé depuis toujours par la technologie,
                                mon initiative de reconversion se fit suite à ma première formation avec :</p>
                            <p className='main main_card-info unselectable'><em> Simplon en collaboration avec l' Apple Foundation Program.</em></p>
                            <p className='main main_card-info unselectable'> 4 semaines intensives _ initiation au Développement mobile iOS.</p>
                            <p className='main main_card-info unselectable'>Un travail d'équipe que j'ai trouvé épanouissant,<br />
                                Et la meilleure raison de me lever le matin, faire ce que j'aime !!</p>


                            <img className='main main_projetSimplon unselectable' src={SimplonProjet} alt="projet Simplon"></img>

                        </div>
                    </div >
                </div >

            </main >
        </>
    )
}
export default Main;
