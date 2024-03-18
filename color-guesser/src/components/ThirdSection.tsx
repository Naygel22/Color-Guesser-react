import { useState, useEffect } from 'react'

function Button() {
	const [randomColor, setRandomColor] = useState('')
	useEffect(() => {
		function generateRandomColor() {
			let maxVal = 0xffffff // 16777215
			let randomNumber = Math.floor(Math.random() * maxVal)
			let randomColor =
				'#' + randomNumber.toString(16).toUpperCase().padStart(6, '0')
			return randomColor
		}

		setRandomColor(generateRandomColor())
	}, [])

	return (
		<button
			className="box"
			style={{ backgroundColor: randomColor }}
		></button>
	)
}

export function ThirdSection() {
	return (
		<div className="thirdSection">
			<div className="boxes">
				<div className="boxesFirstRow">
					<Button />
					<Button />
					<Button />
				</div>
				<div className="boxesSecondRow">
					<Button />
					<Button />
					<Button />
				</div>
			</div>
		</div>
	)
}