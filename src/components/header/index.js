import rose from '../../assets/img/rose.png';

const Header = () => {
    return (
        <>
            <header>
                <div className="headerBox1">
                    <h1>My portfolio</h1>
                </div>
                <div className="headerBox2">
                    <img className="papillon" src={rose} alt=""></img>
                </div>
            </header>
        </>
    )
}
export default Header;