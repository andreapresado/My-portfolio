import img from '../../assets/img/img.jpg'

const Main = () => {

    return (
        <>
            <main>
                <h1 className='mainTitle'>Bienvenue sur mon portfolio!</h1>
                <div className='mainDiv'>
                    <img src={img} alt="moi"></img>
                    <p className='mainDesc'>hello people</p>
                </div>
            </main>
        </>
    )
}
export default Main;