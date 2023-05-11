"use client";

import CustomButton from '@components/general/CustomButton'
import CustomInput from '@components/general/CustomInput'
import { useForm } from 'react-hook-form'
import {
    FormErrorMessage,
    FormControl,
} from '@chakra-ui/react'
import LoadingButton from '@components/general/LoadingButton';
import {useState} from "react";

const VerifyCode = () => {

    const [passwordType, setPasswordType] = useState("password");

    const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting },
    } = useForm();

    const onSubmit = (values) => {
        console.log(values)
        return new Promise((resolve) => {
            setTimeout(() => {
                alert(JSON.stringify(values, null, 2))
                resolve()
            }, 3000)
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormControl isInvalid={errors.name} className='flex flex-col gap-4'>
                    <h3 className='text-black text-sm'>Enter the code that was send to <span className='font-bold'>+255 712345678</span></h3>
                    <CustomInput
                        type={passwordType}
                        label="OTP"
                        name="otp"
                        width="full"
                        handleEyeClick={(type) => setPasswordType(type)}
                        {...register('otp', {
                            required: 'OTP is required',
                            minLength: { value: 5, message: 'Minimum length should be 5' },
                        })}
                    />
                    <FormErrorMessage>
                        {errors.name && errors.name.message}
                    </FormErrorMessage>
                    <p className='text-sm'>Didnt Recieve OTP <span className="text-primary_color underline hover:cursor-pointer">Resend Now</span></p>
                    {isSubmitting ? <LoadingButton /> : <CustomButton type="submit" text="Login" variant={"solid"} />}
                </FormControl>
            </form>

        </div>
    )
}

export default VerifyCode