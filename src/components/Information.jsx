import { useState } from "react";

function InputField({ editable, onSubmit, value, label, type = "text" }) {
    const [inputValue, setInputValue] = useState(value);
    const handleChange = (event) => {
        setInputValue(event.target.value);
        onSubmit(event.target.value);
    };

    if (!editable) {
        return (
            <div>
                <label>{label}: {value}</label>
            </div>
        );

    };
    return (
        <div>
            <label>{label}: </label>
            <input
                type = {type}
                onChange={handleChange}
                value={inputValue}>
            </input>
        </div>
    );
};

function Information({ editable }) {
    const [information, setInformation] = useState({ name: "", email: "", phone: "" });

    const handleChange = (field) => (value) => {
        setInformation((prevInformation) => ({ ...prevInformation, [field]: value }));
    };
   

    return (
        <>
        <h2>Information: </h2>
            <InputField
                editable={editable}
                onSubmit={handleChange("name")}
                value={information.name}
                label="Name"
            />
             <InputField
                editable={editable}
                onSubmit={handleChange("email")}
                value={information.email}
                label="Email"
                type="email"
            />
            <InputField
                editable={editable}
                onSubmit={handleChange("phone")}
                value={information.phone}
                label="Phone"
                type="tel" 
            />
           
        </>
    );
};

export default Information;