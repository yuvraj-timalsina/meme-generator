function Meme() {
    return (
        <main>
            <form className="form">
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
                    className="form-button"
                >
                    Get New Meme Image 📸
                </button>
            </form>
        </main>
    )
}
export default Meme