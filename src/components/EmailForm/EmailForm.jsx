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
    name: yup.string().min(4, "نام شما باید حداقل 4 کاراکتر داشته باشد"),
    message: yup.string().min(10, "پیام شما حداقل باید 10 کاراکتر داشته باشد"),
    subject: yup.string().notRequired(),
});

function EmailForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({ resolver: yupResolver(schema) });

    const displayToast = (title, msg, type) => {
        toast(<MyCustomToast title={title} msg={msg} type={type} />, {
            progressClassName: "!bg-primary",
        });
    };
    // console.log(handleSubmit)
    const [formData, setFormData] = useState({
        name: "",
        subject: "",
        message: "",
        email: "",
    });

    const emailSubmitHandler = async (data) => {
        try {
            const res = await fetch("/api/send-email", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });
            console.log("Response :", res);
            if (res.status !== 200) {
                throw new Error("هنگام ارسال ایمیل خطایی رخ داد !");
            } else {
                displayToast(
                    "ارسال شد !",
                    "پیام شما با موفقیت ارسال شد .",
                    "success"
                );
                reset();
            }
        } catch (err) {
            displayToast(
                "خطایی رخ داد !!",
                "هنگام ارسال پیام مشکلی پیش آمد .",
                "error"
            );
            reset();
        }
    };

    const inputChangeHandler = (e) => {
        const { name, value } = e.target;
        console.log("input :", e);
        console.log("name :", name);
        console.log("value :", value);
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    function onSubmit(data) {
        console.log("submit");
        emailSubmitHandler(data);
        console.log("اطلاعات فرم:", data);
    }

    return (
        <div className="col-span-7">
            <form onSubmit={handleSubmit(onSubmit)} className="" action="#">
                <div className="sm:grid sm:grid-cols-12 gap-4">
                    <div className="w-full flex flex-col gap-1 sm:col-span-6 mt-4 sm:mt-0">
                        <Input
                            onChange={inputChangeHandler}
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
                            onChange={inputChangeHandler}
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
                            onChange={(e) => inputChangeHandler(e)}
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
                            onChange={(e) => inputChangeHandler(e)}
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
                className={"!right-0 md:!right-4"}
                progressClassName={"!bg-primary"}
                toastClassName={"!p-0 !bg-transparent"}
            />
        </div>
    );
}

export default EmailForm;
