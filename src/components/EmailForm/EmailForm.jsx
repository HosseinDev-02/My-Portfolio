"use client";

import React, { useState } from "react";
import Input from "../Input/Input";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import PaperPlaneIcon from "../icons/PaperPlaneIcon";
import { ToastContainer, toast } from "react-toastify";
import MyCustomToast from "../MyCustomToast/MyCustomToast";
import "react-toastify/dist/ReactToastify.css";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object({
    email: yup
        .string()
        .email("ایمیل معتبر نیست .")
        .required("ایمیل الزامی است ."),
    name: yup.string().min(4, 'نام شما باید حداقل 4 کاراکتر داشته باشد'),
    message: yup.string().min(10, "پیام شما حداقل باید 10 کاراکتر داشته باشد"),
    subject: yup.string().notRequired(),
});

function EmailForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: yupResolver(schema) });

    const displayToast = () => {
        toast(
            <MyCustomToast
                title="موفقیت آمیز !"
                msg="پیام شما ارسال شد"
                type="success"
            />,
            {
                progressClassName: "!bg-primary",
            }
        );
    };
    // console.log(handleSubmit)
    const [formData, setFormData] = useState({
        name: "",
        subject: "",
        message: "",
        email: "",
    });

    const emailSubmitHandler = async () => {
        // const res = await fetch("http://localhost:3000/api/send-email", {
        //     method: "POST",
        //     headers: { "Content-Type": "application/json" },
        //     body: JSON.stringify(formData),
        // });
        // const data = await res.json();
        // console.log(data)
    };

    const inputChangeHandler = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    function onSubmit(data) {
        console.log("submit");
        console.log("اطلاعات فرم:", data);
    }

    return (
        <div className="col-span-7">
            <form onSubmit={handleSubmit(onSubmit)} className="" action="#">
                <div className="sm:grid sm:grid-cols-12 gap-4">
                    <div className="w-full flex flex-col gap-1 sm:col-span-6 mt-4 sm:mt-0">
                        <Input
                            {...register("name")}
                            label="نام :"
                            type="text"
                            placeholder="نام خود را وارد کنید ..."
                        />
                        {errors.name && (
                            <p className="text-red-500 text-sm">
                                {errors.name.message}
                            </p>
                        )}
                    </div>
                    <div className="w-full flex flex-col gap-1 sm:col-span-6 mt-4 sm:mt-0">
                        <Input
                            {...register("email")}
                            label="ایمیل :"
                            type="email"
                            placeholder="ایمیل خود را وارد کنید ..."
                        />
                        {errors.email && (
                            <p className="text-red-500 text-sm">
                                {errors.email.message}
                            </p>
                        )}
                    </div>
                    <div className="w-full flex flex-col gap-1 col-span-12 mt-4 sm:mt-0">
                        <Input
                            {...register("subject")}
                            label="موضوع :"
                            type="text"
                            className=""
                            placeholder="موضوع خود را وارد کنید ..."
                        />
                        {errors.subject && (
                            <p className="text-red-500 text-sm">
                                {errors.subject.message}
                            </p>
                        )}
                    </div>
                    <div className="w-full flex flex-col gap-1 sm:col-span-12 mt-4 sm:mt-0">
                        <Input
                            {...register("message")}
                            label="متن :"
                            type="textarea"
                            className=""
                            placeholder="متن پیام خود را وارد کنید ..."
                        />
                        {errors.message && (
                            <p className="text-red-500 text-sm">
                                {errors.message.message}
                            </p>
                        )}
                    </div>
                </div>
                <PrimaryButton
                    type="submit"
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
            </form>
            {/* My Toast Container */}
            <ToastContainer
                progressClassName={"!bg-primary"}
                toastClassName={"!p-0 !bg-transparent"}
            />
        </div>
    );
}

export default EmailForm;
