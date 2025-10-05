import React from "react";

function Input(props) {
    const {
        name,
        id,
        type,
        className,
        placeholder,
        label,
        onChange,
        required,
        defaultValue,
    } = props;
    return (
        <>
            {(type !== "textarea" && (
                <div className={`flex flex-col items-start gap-3 ${className}`}>
                    {label && (
                        <div className="font-IransansWeb-Medium text-sm">
                            {label}{" "}
                            {required && (
                                <span className="text-xs">( اختیاری )</span>
                            )}
                        </div>
                    )}
                    <input
                        {...props}
                        defaultValue={defaultValue}
                        onChange={onChange}
                        className="border border-input-border transition-all focus:shadow-[0_0_4px_0px_var(--color-primary)] duration-500 focus:border-primary font-IransansWeb-Medium placeholder:text-sm w-full outline-none rounded-md px-2 h-10"
                        placeholder={placeholder}
                        type={type}
                        name={name || ""}
                        id={id || ""}
                    />
                </div>
            )) ||
                (type === "textarea" && (
                    <div
                        className={`flex flex-col items-start gap-3 ${className}`}
                    >
                        {label && (
                            <span className="font-IransansWeb-Medium text-sm">
                                {label}
                            </span>
                        )}
                        <textarea
                            defaultValue={defaultValue}
                            {...props}
                            onChange={onChange}
                            placeholder={placeholder || ""}
                            className="border border-input-border transition-all focus:shadow-[0_0_4px_0px_var(--color-primary)] duration-500 focus:border-primary w-full resize-none outline-none rounded-md p-2 h-40"
                            name={name || ""}
                            id={id || ""}
                        ></textarea>
                    </div>
                ))}
        </>
    );
}

export default Input;
