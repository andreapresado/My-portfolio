import img from '../../assets/img/moi.jpg'

const Main = () => {

    return (
        <>
            <main>
                <p>Bienvenue sur mon portfolio!</p>
                <div>
                    <img src={img} alt="moi"></img>
                    <p>hello people</p>
                </div>
            </main>
        </>
    )
}
export default Main;