import { Link } from "react-router-dom";
const Headers = () => {
    return (
        <div>
            <Link to="/">Home Page</Link>
            <Link to="/customers">Customers</Link>
            <Link to="/products">Products</Link>
            <Link to="/addcustomers">Add customer</Link>

        </div>
    );
};

export default Headers;
