import { useState } from "react";
import InputField from "./InputField";

function Education({editable}) {
    const [education, setEducation] = useState({ school: "", title: "", date: "" });

    const handleChange = (field) => (value) => {
        setEducation((prevEducation) => ({ ...prevEducation, [field]: value }));
    };
    return (
        <>
            <InputField
                editable={editable}
                onSubmit={handleChange("school")}
                value={education.school}
                label="School"
            />
            <InputField
                editable={editable}
                onSubmit={handleChange("title")}
                value={education.title}
                label="Title"
            />
            <InputField
                editable={editable}
                onSubmit={handleChange("date")}
                value={education.date}
                label="Date"
                type="date"
            />
            <br></br>
        </>
    )
};

export default Education;