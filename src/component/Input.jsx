import React from "react";

const Input = ({
  type,
  label,
  id,
  value,
  placeHolder,
  error,
  onChange,
  require,
  name,
  readOnly,
  disabled,
  onBlur,
}) => {
  return (
    <div className=" flex font-pop flex-col items-start gap-1.5 w-full group font-Nunito">
      { label ?
      <label
      htmlFor={name}
      className="text-sm lg:text-base font-semibold font-pop text-secondary-200"
      >
        {label} {require&& <span className="text-primary-100 font-semibold">*</span>}
      </label>
      :null}
      <input
        disabled={disabled}
        // required={require}
        type={type || "text"}
        name={name}
        value={value}
        readOnly={readOnly || false}
        id={name}
        onChange={onChange}
        onBlur={onBlur}
        className={ ` ${ error ? "border-primary-100 border-[1px] " : "border-[1px]  border-gray-300" }  w-full rounded-sm focus:outline-none focus:ring-0 px-3 py-2 placeholder:text-xs` }
        placeholder={placeHolder}
      />
     
      <p className={ `transition-all duration-300  text-[13px] text-primary-100 ${ error ? "translate-y-0 " : "-z-10 opacity-0 -translate-y-1/2" }` }>{ error }</p>
    
    </div>
  );
};

export default Input;
