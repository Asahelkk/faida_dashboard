"use client";

import { useState } from 'react'
import { useToast } from '@chakra-ui/react'
import CustomButton from '@components/general/CustomButton'
import CustomInput from '@components/general/CustomInput'
import { FormControl } from '@chakra-ui/react'
import LoadingButton from '@components/general/LoadingButton'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { toastProps } from '@utils/toastHelper'
import { useUserPhoneNumberStore } from '@utils/zustand/Store';

const SignIn = () => {

  const router = useRouter();
  const toast = useToast();
  const setStorePhoneNumber = useUserPhoneNumberStore((state) => state.setStorePhoneNumber)

  const [isSubmitting, setIsubmitting] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");

  // Handle input validation
  const handleValidation = () => {
    if (phoneNumber === "") {
      toast({
        ...toastProps,
        title: "Error!",
        description: "Your registered phone number is required",
        status: "error",
      });

      return false;
    }
    else if (phoneNumber.length > 9 || phoneNumber.length < 9) {
      toast({
        ...toastProps,
        title: "Error!",
        description: "Please confirm the length of your phone number",
        status: "error",
      });

      return false;
    }
    return true;
  }


  const handleSubmit = (e) => {
    e.preventDefault();

    const isValid = handleValidation();

    // Verify validation before submitting
    if (!isValid) return;

    setIsubmitting(true);

    const phone_number = "+255".concat(phoneNumber)

    setStorePhoneNumber(phone_number);

    return new Promise((resolve) => {
      setTimeout(() => {
        alert(JSON.stringify(phone_number))
        router.push('/sign_in/verify_otp');
        resolve()
      }, 2000)
    })
  }

  return (
    <div>
      <form>
        <FormControl display={"flex"} flexDirection={"column"} gap={4}>
          <h3 className='text-black'>Enter your phone number to sign in</h3>
          <CustomInput
            type="number"
            label="Phone Number"
            name="phoneNumber"
            placeholder='742000797'
            icon={<Image src="/assets/images/Tz_flag.svg" alt="flag" width={6} height={18} className='rounded-sm w-6 h-18' />}
            text="+255"
            width="full"
            handleChange={(e) => setPhoneNumber(e.target.value)}
          />
          {isSubmitting ? <LoadingButton /> : <CustomButton handleClick={handleSubmit} type="submit" text="Next" variant={"solid"} />}
        </FormControl>
      </form>

    </div>
  )
}

export default SignIn