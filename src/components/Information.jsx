import { useState } from "react";
import InputField from "./InputField";


function Information({ editable }) {
    const [information, setInformation] = useState({ name: "", email: "", phone: "" });

    const handleChange = (field) => (value) => {
        setInformation((prevInformation) => ({ ...prevInformation, [field]: value }));
    };


    return (
        <>
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
            <br></br>
        </>
    );
};

export default Information;