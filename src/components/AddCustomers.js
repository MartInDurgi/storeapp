import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddCustomers = ({ handleAddCustomer }) => {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    handleAddCustomer(name);
    navigate("/customers");
  };
  return (
    <form onSubmit={handleOnSubmit}>
      <label>Name</label>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddCustomers;
