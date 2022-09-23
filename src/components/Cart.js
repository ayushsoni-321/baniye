import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Cart = () => {
    const cartData = useSelector((state) => state.cartData);
    let amount = cartData.length && cartData.map(item=>item.price).reduce((prev, next)=>Number(prev)+Number(next))
console.warn(amount)

    const submitOrder =(e,payment_mode)=>{
        e.preventDefault();
        var data ={
            payment_mode:payment_mode
        }
        switch (payment_mode){
            case 'cod':
                break;
            case 'razorpay':
                var options = {
                    "key": "rzp_test_WFoCbUuM32ToLG", // Enter the Key ID generated from the Dashboard
                    "amount": (amount*100), // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
                    //  "currency": "INR", 
                    "name": "Ayush Corp",
                    "description": "Thank you for purchasing with us",
                    "image": "https://example.com/your_logo",
                   //hanler function laga k placed order likh dena
                    "callback_url": "https://eneqd3r9zrjok.x.pipedream.net/",
                    "prefill": {
                        "name": "Ayush Soni",
                        "email": "ayushsoni12072000@gmail.com",
                        "contact": "7814958568"
                    },
                    
                    "theme": {
                        "color": "#3399cc"
                    }
                };
                var rzp = new window.Razorpay(options);
                rzp.open();
            default:
                break;
        }
    }
    return (<div>
        <Link to="/" >Go to Products Link</Link>
        <h1>Cart Page</h1>
        <div className="cart-page-container">
            <table>
                <tr>
                    <td>Name</td>
                    <td>Color</td>
                    <td>Price</td>
                    <td>Brand</td>
                    <td>Category</td>
                </tr>
                {
                    cartData.map((item) => <tr key={item.key}>
                        <td>{item.name}</td>
                        <td>{item.color}</td>
                        <td>{item.price}</td>
                        <td>{item.brand}</td>
                        <td>{item.category}</td>
                    </tr>)
                }
            </table>
            <div className="price-details">
                <div className="adjust-price"><span>Amount</span><span>{amount}</span></div>
                <div className="adjust-price"><span>Discount</span><span>{amount/10}</span></div>
                <div className="adjust-price"><span>Tax</span><span>000</span></div>
                <div className="adjust-price"><span>Total</span><span>{amount=amount-(amount/10)}</span></div>
                <button onClick={(e)=>submitOrder(e,'cod')} >COD</button>
                <button onClick={(e)=>submitOrder(e,'razorpay')}>pay Online</button>
            </div>
        </div>
       
    </div>)
}

export default Cart;