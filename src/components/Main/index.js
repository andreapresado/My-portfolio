import img from '../../assets/img/img.jpg'

const Main = () => {

    return (
        <>
            <main className='main'>
                <h1 className='main main_Title'>Bienvenue sur mon portfolio!</h1>
                <div className='main main_box'>
                    <div className='main main_card'>
                        <img className='main main_cardTitle' src={img} alt="moi"></img>
                    </div>
                    <div className='main main_desc'>
                        <p className='main main_card-info'>Hello, </p>
                    </div>
                </div>
            </main>
        </>
    )
}
export default Main;