import { SignIn } from '@clerk/clerk-react';
import React from 'react'
import { useForm } from 'react-hook-form';

const SingUp = () => {
   
   const {register,handleSubmit,formState: { errors }} = useForm();
    const onSubmit = (data) => console.log(data) 

    const handalSubmit = (event) => {
     event.preventDefault(), 
     handleSubmit(onSubmit);
      }
    return (

      // <div>
      //   <SignIn />
      // </div>




      <div className="bg-White w-full h-screen  mt-[7.5rem]">
        <div className=" max-w-6xl mx-auto text-White flex justify-center items-center">
          <div className="relative flex h-screen w-screen flex-col md:items-center md:justify-start">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="absolute mt-2 space-y-8 rounded-md bg-[#202844] shadow-md px-6 py-10  md:max-w-md"
            >
              <h1 className="my-6 text-3xl text-center  font-semibold text-White">
                Sing Up
              </h1>
              <label className="inline-block w-full">
                <input
                  {...register("Email", { required: true })}
                  className="w-full rounded-lg bg-[#2C3454] border-[#3C466B] border-2 py-5 text-lg px-2 text-White outline-none"
                  type="email"
                  required
                />
                {errors.Email && (
                  <p className="pt-2 text-sm text-Yellow">
                    This Field Is required
                  </p>
                )}
              </label>
              <label className="inline-block w-full">
                <input
                  {...register("password", { required: true })}
                  className="w-full rounded-lg bg-[#2C3454] border-[#3C466B] border-2  py-5 text-lg px-2 text-White outline-none"
                  type="password"
                  required
                />
                {errors.password && (
                  <p className="pt-2 text-sm text-Yellow">
                    This Field Is required
                  </p>
                )}
              </label>
              <button className="mt-10 w-full rounded-lg bg-primary p-4 ">
                Sing Up
              </button>
            </form>
          </div>
        </div>
      </div>
    );
}

export default SingUp