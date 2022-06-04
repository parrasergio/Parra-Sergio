import './Button.css'

const Button = (props) => {
    return <button onClick={props.handleClick} >{props.label}</button>
}

export default Button