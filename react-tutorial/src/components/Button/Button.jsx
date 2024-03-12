import './Button.css';
const Button = (props) => {
    return (
        <button className='btn'>
            {props.children || 'Click me!'}
        </button>
    )
}
export default Button;