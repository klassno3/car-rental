import React from 'react'

const Dropdown = ({header,name,onBlur,onChange,data,value,error, required}) => {
  return (
    <div>
           <div className="flex flex-col gap-1.5">
              <label
                htmlFor={name}
                className="text-sm lg:text-base font-semibold font-pop text-secondary-200"
              >
                {header} {required&& <span className="text-primary-100 font-semibold">*</span>}
              </label>
              <select
                id={name}
                name={name}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                className={`${
                  error
                    ? "border-primary-100 "
                    : "border-gray-300"
                } text-Secondary-200 font-Nunito bg-white border focus:outline-none rounded-sm text-sm px-4 py-3 capitalize`}
        >
          { data.map( ( name ) => (
            <option key={name.name} value={ name.value }>{ name.name }</option>
          ) ) }

              </select>
              {error && (
                <p className="transition-all duration-300  text-[13px] text-primary-100">
                  {error}
                </p>
              )}
            </div>
    </div>
  )
}

export default Dropdown
     