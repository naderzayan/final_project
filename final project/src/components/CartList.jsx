import { IoMdClose } from "react-icons/io";

export default function CartList({ showCartList, setShowCartList }) {
    return (
        <div className={`cart_list ${showCartList ? "active" : ""}`}>
            <p>Shopping cart</p>
            <IoMdClose onClick={() => setShowCartList(false)} />
        </div>
    );
}
