import getRandomElemArray from "../utils/getRandomElemArray"

const BtnQuote = ({ setQuote, phrases, setNumberBg }) => {

  const handleRandomPhrase = () => {
    setQuote(getRandomElemArray(phrases))
    setNumberBg(getRandomElemArray([1, 2, 3, 4, 5, 6, 7]))
  }

  return (
    <button className="container__btn" onClick={handleRandomPhrase}>🍀Other phrase</button>
  )
}

export default BtnQuote