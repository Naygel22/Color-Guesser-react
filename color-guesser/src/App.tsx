import { useState } from 'react'
import { Button } from './components/Button'
import './index.css'

function generateRandomColor() {
  let maxVal = 0xffffff // 16777215
  let randomNumber = Math.floor(Math.random() * maxVal)
  let randomColor =
    '#' + randomNumber.toString(16).toUpperCase().padStart(6, '0')
  return randomColor
}
//const RANDOM_COLORS = new Array(6).fill('').map(() => generateRandomColor())
//const randomIndex = Math.floor(Math.random() * RANDOM_COLORS.length);

function App() {
  const [randomColors, setRandomColors] = useState(new Array(6).fill('').map(() => generateRandomColor()))
  const [colorToGuess, setColorToGuess] = useState(randomColors[Math.floor(Math.random() * randomColors.length)])


  function onBtnClick(color: string) {
      if(color === colorToGuess) {
        makeRandomColors()
      }
  }


  function makeRandomColors() {
    const newRandomColors = new Array(6).fill('').map(() => generateRandomColor())
    setRandomColors(newRandomColors)
    setColorToGuess(newRandomColors[Math.floor(Math.random() * newRandomColors.length)])
  }

  return (
    <>

      <div className="firstSection">
        <h1 className="theGreatText">THE GREAT</h1>
        <p className="colorName">{colorToGuess}</p>
        <h1 className="guessingGameText">GUESSING GAME</h1>
      </div>

      <div className="secondSection">
        <button className="newColorsButton" onClick={makeRandomColors}>NEW COLORS</button>
      </div>

      <div className="thirdSection">
        <div className="boxes">

          {randomColors.map((color,index) => {
            return <Button color={color} key={index} onButtonClick={onBtnClick} />
          })}

        </div>
      </div>
    </>
  )
}

export default App
