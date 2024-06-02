import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

const Cart = () => {
    const cartItems = useSelector(state => state.cart.cart)
    const dispatch = useDispatch()

    return (
        // <div style={{width: 400, position: 'sticky', borderLeft: '1px solid black'}}>
        //     <h2 style={{marginLeft: 70}}>Cart items:</h2>
        //     {
        //         cartItems.map(item => (
        //             <div className="d-flex-col" style={{borderRadius:15, marginTop: 20, marginLeft:10, marginRight:10, border: '1px solid black', justifyContent: 'center', alignItems:'center'}}>
        //                 <img width={'100%'} height={180} style={{borderRadius:15}} src={item.img} alt=""/>
        //                 <div>
        //                     <h4>
        //                         {item.destination}
        //                     </h4>
        //                     <h5>
        //                         {item.price}
        //                     </h5>
        //                     <Button onClick={() => dispatch(removefromCart({id: item.id}))} variant='danger' style={{marginLeft:90}}>Remove</Button>
        //                 </div>
        //             </div>
        //         ))
        //     }
        // </div>
        <div>ilias</div>
    );
};

export default Cart;

