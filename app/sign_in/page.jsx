"use client";

import { useState } from 'react'
import { Box, useToast } from '@chakra-ui/react'
import CustomButton from '@components/general/CustomButton'
import CustomInput from '@components/general/CustomInput'
import { FormControl } from '@chakra-ui/react'
import LoadingButton from '@components/general/LoadingButton'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { toastProps } from '@utils/toastHelper'
import { useUserPhoneNumberStore } from '@utils/zustand/Store';
import AuthServices from '@utils/services/AuthServices';

const SignIn = () => {

  const router = useRouter();
  const toast = useToast();
  const setStorePhoneNumber = useUserPhoneNumberStore((state) => state.setStorePhoneNumber)

  const [isSubmitting, setSubmitting] = useState(false);
  const [mobileNumber, setMobileNumber] = useState("");
  const [current, setCurrent] = useState("tz");

  const handleCurrent = (country) => {
    setCurrent(country)
  }

  // Handle input validation
  const handleValidation = () => {
    if (mobileNumber === "") {
      toast({
        ...toastProps,
        title: "Error!",
        description: "Your registered phone number is required",
        status: "error",
      });

      return false;
    }
    else if (mobileNumber.length > 9 || mobileNumber.length < 9) {
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


  const handleSubmit = async (e) => {
    e.preventDefault();

    const isValid = handleValidation();

    // Verify validation before submitting
    if (!isValid) return;

    setSubmitting(true);

    const phoneNumber = current === "tz" ? "+255".concat(mobileNumber) : current === "ke" && "+254".concat(mobileNumber);

    setStorePhoneNumber(phoneNumber);

    await AuthServices.login({ phoneNumber }).then((response) => {
      toast({
        ...toastProps,
        title: "Success",
        description: response,
        status: "success",
      });
      setSubmitting(false);
      router.push('/sign_in/verify_otp');
    })
      .catch((error) => {
        toast({
          ...toastProps,
          title: "Success",
          description: error?.response?.data?.message,
          status: "success",
        });
        setSubmitting(false);
      })
  }

  return (
    <div>
      <form className="relative">
        <FormControl display={"flex"} flexDirection={"column"} gap={4}>
          <h3 className='text-black'>Enter your phone number to sign in</h3>
          <CustomInput
            type="number"
            label="Phone Number"
            name="mobileNumber"
            placeholder='742000797'
            option={<CountryCodeSelect handleCurrent={handleCurrent} current={current} />}
            width="full"
            handleChange={(e) => setMobileNumber(e.target.value)}
          />
          {isSubmitting ? <LoadingButton /> : <CustomButton handleClick={handleSubmit} type="submit" text="Next" variant={"solid"} />}
        </FormControl>
      </form>

    </div>
  )
}

const CountryCodeSelect = (
  {
    handleCurrent,
    current
  }) => {

  const [showSelect, setShowSelect] = useState(false);

  const handleShowSelect = () => {
    setShowSelect((prev) => !prev);
  }

  const selectedStyling = "flex items-center gap-3";

  return (
    <Box>
      <Box
        cursor={"pointer"}
        bg="white"
        px={1}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Box onClick={handleShowSelect}>
          <Box className={current === "tz" ? `${selectedStyling} block` : `${selectedStyling} hidden`}>
            <Image src="/assets/images/Tz_flag.svg" alt="flag" width={6} height={18} className='rounded-sm w-6 h-18' />
            <span className="text-secondary_color font-semibold">+255</span>
          </Box>
          <Box className={current === "ke" ? `${selectedStyling} block` : `${selectedStyling} hidden`}>
            <Image src="/assets/images/Ke_flag.svg" alt="flag" width={6} height={18} className='rounded-sm w-6 h-18' />
            <span className="text-secondary_color font-semibold">+254</span>
          </Box>
        </Box>
      </Box>
      {showSelect &&
        <Box bg={"gray.50"} width={"fit-content"} className="absolute bottom-[4px]">
          <Box
            className={"flex items-center gap-2 hover:bg-gray-200 p-1 cursor-pointer"}
            onClick={() => {
              handleCurrent("tz")
              setShowSelect(false)
            }}
          >
            <Image src="/assets/images/Tz_flag.svg" alt="flag" width={6} height={18} className='rounded-sm w-6 h-18' />
            <span className="text-secondary_color font-semibold">+255</span>
            <span className="text-gray-400 font-light text-sm">(Tz)</span>
          </Box>
          <Box
            className={"flex items-center gap-2 hover:bg-gray-200 p-1 cursor-pointer"}
            onClick={() => {
              handleCurrent("ke")
              setShowSelect(false)
            }}
          >
            <Image src="/assets/images/Ke_flag.svg" alt="flag" width={6} height={18} className='rounded-sm w-6 h-18' />
            <span className="text-secondary_color font-semibold">+254</span>
            <span className="text-gray-400 font-light text-sm">(Ke)</span>
          </Box>
        </Box>
      }
    </Box>
  )

}

export default SignIn