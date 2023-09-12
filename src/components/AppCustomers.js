import { useState } from "react";
import { Link } from "react-router-dom";
const AppCustomers = ({ customers, handleOnDelete }) => {
    return (
        <div>
            {customers.map((customer, index) => (
                <div key={index}>
                    <span>Name: {customer}</span>
                    <Link to={`/customers/${index}`}>
                        <button>View</button>
                    </Link>
                    <button
                        onClick={() => {
                            handleOnDelete(index);
                        }}
                    >
                        Delete
                    </button>
                </div>
            ))}
        </div>
    );
};

export default AppCustomers;
