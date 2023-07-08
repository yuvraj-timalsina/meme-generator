import {useState} from 'react'
import memesData from '../memesData.js'

function Meme() {

    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })
    const [allMemeImages] = useState(memesData)


    function getMemeImage() {
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))

    }

    return (
        <main>
            <div className="form">
                <input
                    type="text"
                    placeholder="Top Text"
                    className="form-input"
                />
                <input
                    type="text"
                    placeholder="Bottom Text"
                    className="form-input"
                />
                <button
                    onClick={getMemeImage}
                    className="form-button"
                >
                    Get New Meme Image 📸
                </button>
            </div>
            <div className="meme">
                <img className="meme-image" src={meme.randomImage} alt='' />
                <h2 className="meme-text top">One does not simply</h2>
                <h2 className="meme-text bottom">Walk into Mordor</h2>
            </div>
        </main>
    )
}
export default Meme