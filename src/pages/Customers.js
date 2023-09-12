import AppCustomers from "../components/AppCustomers";
import Headers from "../components/Headers";
import { Link } from "react-router-dom";

const Customers = ({ customers, handleOnDelete }) => {
    return (
        <>
            <Headers />

            <AppCustomers customers={customers} handleOnDelete={handleOnDelete} />
        </>
    );
};

export default Customers;