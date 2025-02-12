import { useState } from "react";
import InputField from "./InputField";


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