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

export default InputField;