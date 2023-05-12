"use client";

import CustomButton from '@components/general/CustomButton'
import CustomInput from '@components/general/CustomInput'
import { useForm } from 'react-hook-form'
import {
  FormErrorMessage,
  FormControl,
} from '@chakra-ui/react'
import LoadingButton from '@components/general/LoadingButton'
import Image from 'next/image';

const SignIn = () => {

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
      <form onSubmit={handleSubmit(onSubmit)} >
        <FormControl isInvalid={errors.name} className='flex flex-col gap-4'>
          <h3 className='text-black'>Enter your phone number to sign in</h3>
          <CustomInput
            type="number"
            label="Phone Number"
            name="phoneNumber"
            icon={<Image src="/assets/images/Tz_flag.svg" alt="flag" width={6} height={18} className='rounded-sm w-6 h-18'/>}
            text="+255"
            width="full"
            {...register('phoneNumber', {
              required: 'Phone number is required',
              minLength: { value: 9, message: 'Minimum length should be 9' },
            })}
          />
          <FormErrorMessage>
            {errors.name && errors.name.message}
          </FormErrorMessage>
          {isSubmitting ? <LoadingButton /> : <CustomButton type="submit" text="Next" variant={"solid"} />}
        </FormControl>
      </form>

    </div>
  )
}

export default SignIn