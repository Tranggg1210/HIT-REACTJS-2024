import './Button.css';
const Button = () => {
    return (
        <button className='btn' onClick={() => alert("Đã thêm vào giỏ hàng")}>
            Add to Card
        </button>
    )
}
export default Button;