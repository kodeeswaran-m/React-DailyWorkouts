import React from "react";

const FormField = React.memo(({ label, name, type = "text", value, onChange }) => {
  console.log(`${name} is rendered`);

  return (
    <>
      <div>
        <label htmlFor={name}> {label}</label>
        <input type={type} name={name} value={value} onChange={onChange} />
      </div>
    </>
  );
});
export default FormField;
