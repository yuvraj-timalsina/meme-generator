import {useState} from 'react'
import memesData from "../memesData.js"

function Meme() {

    const [memeImage, setMemeImage] = useState('')

    function getMemeImage() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const imgUrl = memesArray[randomNumber].url
        setMemeImage(imgUrl)
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
            <img className='meme-image' src={memeImage} />
        </main>
    )
}
export default Meme