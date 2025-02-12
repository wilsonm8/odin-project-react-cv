import { useState } from "react";

function InputField({ editable, onSubmit, value, label, type = "text" }) {
    const [inputValue, setInputValue] = useState(value);
    const handleChange = (event) => {
        setInputValue(event.target.value);
        onSubmit(event.target.value);
    };

    if (!editable) {
        return (
            <div className="formGroup">
                <label className="formLabel">{label}: </label>
                <span>{value}</span>
            </div>
        );

    };
    return (
        <div className="formGroup">
            <label className="formLabel">{label}: </label>
            <input
                type={type}
                onChange={handleChange}
                value={inputValue}>
            </input>
        </div>
    );
};

function Experience({ editable }) {
    const [experience, setExperience] = useState({ company: "", position: "", responsibilities: "", startDate: "", endDate: "" });

    const handleChange = (field) => (value) => {
        setExperience((prevExperience) => ({ ...prevExperience, [field]: value }));
    };
    return (
        <>
            <h2>Experience:</h2>
            <InputField
                editable={editable}
                onSubmit={handleChange("company")}
                value={experience.company}
                label="Company"
            />
            <InputField
                editable={editable}
                onSubmit={handleChange("position")}
                value={experience.position}
                label="Position"
            />
            <InputField
                editable={editable}
                onSubmit={handleChange("responsibilities")}
                value={experience.responsibilities}
                label="Responsibilities"
            />
            <InputField
                editable={editable}
                onSubmit={handleChange("startDate")}
                value={experience.startDate}
                label="Start Date"
                type="date"
            />
            <InputField
                editable={editable}
                onSubmit={handleChange("endDate")}
                value={experience.endDate}
                label="End Date"
                type="date"
            />
        </>
    );
};

export default Experience;