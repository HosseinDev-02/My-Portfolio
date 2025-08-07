"use client";

import React, { useState } from "react";
import Input from "../Input/Input";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import PaperPlaneIcon from "../icons/PaperPlaneIcon";

function EmailForm() {
    const [formData, setFormData] = useState({
        name: "",
        subject: "",
        message: "",
        email: "",
    });

    const emailSubmitHandler = async () => {
        const res = await fetch("http://localhost:3000/api/send-email", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });
        const data = await res.json();
        console.log(data)
    };

    const inputChangeHandler = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    return (
        <div className="col-span-7">
            <form className="sm:grid sm:grid-cols-12 gap-4" action="#">
                <Input
                    name={"name"}
                    onChange={(e) => inputChangeHandler(e)}
                    label="نام :"
                    require={true}
                    type="text"
                    className="sm:col-span-6 mt-4 sm:mt-0"
                    placeholder="نام خود را وارد کنید ..."
                />
                <Input
                    name={"email"}
                    onChange={(e) => inputChangeHandler(e)}
                    label="ایمیل :"
                    require={true}
                    type="text"
                    className="sm:col-span-6 mt-4 sm:mt-0"
                    placeholder="ایمیل خود را وارد کنید ..."
                />
                <Input
                    name={"subject"}
                    onChange={(e) => inputChangeHandler(e)}
                    label="موضوع :"
                    require={false}
                    type="text"
                    className="col-span-12 mt-4 sm:mt-0"
                    placeholder="موضوع خود را وارد کنید ..."
                />
                <Input
                    name={"message"}
                    onChange={(e) => inputChangeHandler(e)}
                    label="متن :"
                    require={true}
                    type="textarea"
                    className="sm:col-span-12 mt-4 sm:mt-0"
                    placeholder="متن پیام خود را وارد کنید ..."
                />
            </form>
            <PrimaryButton
                onClick={emailSubmitHandler}
                className="mx-auto mt-4"
                title="ارسال"
                icon={
                    <PaperPlaneIcon
                        className="shrink-0 -rotate-[135deg]"
                        width={24}
                        height={24}
                    />
                }
            />
        </div>
    );
}

export default EmailForm;
