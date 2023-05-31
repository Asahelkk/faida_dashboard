"use client";

import { useState } from 'react'
import { useToast } from '@chakra-ui/react'
import CustomButton from '@components/general/CustomButton'
import CustomInput from '@components/general/CustomInput'
import { FormControl } from '@chakra-ui/react'
import LoadingButton from '@components/general/LoadingButton'
import { useRouter } from 'next/navigation'
import { toastProps } from '@utils/toastHelper'
import { useUserPhoneNumberStore, useUserStore } from '@utils/zustand/Store';
import AuthServices from '@utils/services/AuthServices';

const VerifyCode = () => {

    const router = useRouter();
    const toast = useToast();
    const user = useUserPhoneNumberStore((state) => state.user);
    const removePhoneNumber = useUserPhoneNumberStore((state) => state.removePhoneNumber);
    const setUser = useUserStore((state) => state.setUser);

    const [passwordType, setPasswordType] = useState("password");
    const [isSubmitting, setSubmitting] = useState(false);
    const [otp, setOtp] = useState("");

    // Handle input validation
    const handleValidation = () => {
        if (otp === "") {
            toast({
                ...toastProps,
                title: "Error!",
                description: "Please input the otp code send to your phone number to login",
                status: "error",
            });

            return false;
        }

        return true;
    }


    const handleSubmit = async (e) => {
        e.preventDefault();

        const isValid = handleValidation();

        // Verify validation before submitting
        if (!isValid) return;

        setSubmitting(true);

        const data = {
            phoneNumber: user.phoneNumber,
            otp: otp,
        }

        await AuthServices.verifyAccount(data).then((response) => {
            toast({
                ...toastProps,
                title: "Success",
                description: "You have logged in successful",
                status: "success",
            });
            setUser(response);
            setSubmitting(false);
            router.push('/dashboard');
            removePhoneNumber();
        }).catch((error) => {
            toast({
              ...toastProps,
              title: "Error!",
              description: error,
              status: "error",
            });
            setSubmitting(false);
          })
    }

    return (
        <div>
            <form>
                <FormControl display={"flex"} flexDirection={"column"} gap={4}>
                    <h3 className='text-black text-sm'>Enter the code that was send to <span className='font-bold'>{user.phoneNumber}</span></h3>
                    <CustomInput
                        type={passwordType}
                        label="OTP"
                        name="otp"
                        width="full"
                        handleEyeClick={(type) => setPasswordType(type)}
                        handleChange={(e) => setOtp(e.target.value)}
                    />
                    <p className='text-sm'>Didnt Recieve OTP <span className="text-primary_color underline hover:cursor-pointer">Resend Now</span></p>
                    {isSubmitting ? <LoadingButton /> : <CustomButton handleClick={handleSubmit} type="submit" text="Login" variant={"solid"} width={"full"} />}
                </FormControl>
            </form>

        </div>
    )
}

export default VerifyCode