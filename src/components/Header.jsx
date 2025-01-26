import trollFace from "../images/Trollface.webp"

function Header(){
    return(
        <header className="header">
        <img 
        src={trollFace}
        className="header--image"
        />
        
        <h2 className="header--title">Meme Generator</h2>
        </header>
    )
}

export default Header;