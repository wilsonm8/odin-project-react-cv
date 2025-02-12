import { useState } from "react";
import InputField from "./InputField";


function Experience({ editable }) {
    const [experience, setExperience] = useState({ company: "", position: "", responsibilities: "", startDate: "", endDate: "" });

    const handleChange = (field) => (value) => {
        setExperience((prevExperience) => ({ ...prevExperience, [field]: value }));
    };
    return (
        <>
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
            <br></br>
        </>
    );
};

export default Experience;