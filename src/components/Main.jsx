import React, { useEffect } from "react";

const Main= ()=>{
    
    const [meme, setMeme] = React.useState({
        topText: "One does not simply",
        bottomText:"Walk into Mordor",
        imageUrl:"http://i.imgflip.com/1bij.jpg"
    })

    const [allMemes, setAllMemes] = React.useState([])

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes));
    }, []);

    function handleChange(event){
        const {name, value} = event.target;
        setMeme(prevMeme=>({
            ...prevMeme,
            [name]:value
        }))

       
    }

    function getRandomMeme(){
                const randomMeme = allMemes[Math.floor(Math.random() * allMemes.length)];
                setMeme(prevMeme=>({
                    ...prevMeme,
                    imageUrl: randomMeme.url
                }))
    }    




    return(
        <main>
        <div className="form">
        <div className="form--inputs">
        
        <input
        type="text"
        placeholder="Top Text"
        name="topText"
        value={meme.topText}
        onChange={handleChange}
        />

        <input
        type="text"
        placeholder="Bottom Text"
        name="bottomText"
        value={meme.bottomText}
        onChange={handleChange}
        />
        </div>
            <button onClick={getRandomMeme}>Get a new meme</button>

        </div>

        <div className="meme">
            <img
            src={meme.imageUrl}
            alt="Meme"
            className="meme--image"
            />

            <span className="meme--text top">{meme.topText}</span>
            <span className="meme--text bottom">{meme.bottomText}</span>

        </div>

        </main>
    )
}

export default Main;