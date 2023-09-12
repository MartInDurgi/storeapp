import AddCustomers from "../components/AddCustomers";
import Headers from "../components/Headers";

const NewCustomer = ({ handleAddCustomer }) => {
    return (
        <>
            <Headers />
            <AddCustomers handleAddCustomer={handleAddCustomer} />
        </>
    );
};

export default NewCustomer;
