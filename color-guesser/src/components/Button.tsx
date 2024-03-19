interface ButtonProps {
	color: string;
	onButtonClick: (color: string) => void;
}

export function Button({ color, onButtonClick }: ButtonProps) {
	return (
			<button
					className="box"
					onClick={() => onButtonClick(color)}
					style={{ backgroundColor: color }}
			></button>
	)
}
