"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";


type FormValues = {
  department : string,
  why : string,
  salary : string,
  introduction : string,
  dreams : string,
  email : string,
}

export default function Home() {

  const [finalValues , setFinalValues] = useState<FormValues>();
  const { register,handleSubmit,formState : {errors} ,setValue}  = useForm<FormValues>();
  const onValid = (data: FormValues) => { setFinalValues(data) };
  const onInvalid = (data: any) => { console.log(data)};

  return (
    <div className="overflow-hidden flex justify-center my-6">
      <div className="absolute my-10 mx-auto  bg-pink-100 w-[500px] p-10 border-black border-l-2 border-t-2 border-r-8 border-b-8 rounded-3xl" >
        <h1 className="text-center font-extrabold">Job Application Form</h1>
        <form className="m-8" onSubmit={handleSubmit(onValid,onInvalid)}>
          <div>
            <h3 className="font-bold">What department do you want to work for?</h3>
            <div className="mt-2 *:font-medium">
              <div>
                <input {...register('department', {required : 'select please'}) } type="radio" name="department" id="sales" value={'Sales'} />
                <label htmlFor="sales" className="ml-2">Sales</label>
              </div>
              <div>
                <input {...register('department', {required : 'select please'}) } type="radio" name="department" id="market" value={'Market'} />
                <label htmlFor="market" className="ml-2">Market</label>
              </div>
              <div>
                <input {...register('department', {required : 'select please'}) } type="radio" name="department" id="accounting" value={'Accounting'} />
                <label htmlFor="accounting" className="ml-2">Accounting</label>
              </div>
              <div>
                <input {...register('department', {required : 'select please'}) } type="radio" name="department" id="customer" value={'Customer Service'} />
                <label htmlFor="customer" className="ml-2">Customer Service</label>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <h3 className="font-bold">Why do you want to join this company?</h3>
            <div className="mt-2 *:font-medium">
              <div>
                <input type="radio" {...register('why', {required : 'select please'}) } name="why" id="money" value={'money'}  />
                <label htmlFor="money" className="ml-2">I want money!</label>
              </div>
              <div>
                <input type="radio" {...register('why', {required : 'select please'}) } name="why" id="company" value={'company'} />
                <label htmlFor="company" className="ml-2">I love this company</label>
              </div>
              <div>
                <input type="radio" {...register('why', {required : 'select please'}) } name="why" id="learn" value={'learn'} />
                <label htmlFor="learn" className="ml-2">I want to learn</label>
              </div>
              <div>
                <input type="radio" {...register('why', {required : 'select please'}) } name="why" id="why" value={'I don\'t know'} />
                <label htmlFor="why" className="ml-2">I don&apos;t know why</label>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <h3 className="font-bold">Salary</h3>
            <div className="mt-2 *:font-medium">
              <div>
                  <select {...register('salary',{
                                                 required : 'Choose the salary that you want'
                                               })} name="sal" 
                                                   id="sal"
                                                   className="border-black border-2 w-full rounded-md"
                                                   onChange={(event) => setValue('salary',event.target.value) }>
                    <option value={"$50K"} >$50K</option>
                    <option value={"$100K"} >$100K</option>
                    <option value={"$150K"} >$150K</option>
                    <option value={"$200K"} >$200K</option>
                  </select> 
              </div>
              <p className="text-red-600">{errors.salary?.message}</p>
            </div>
          </div>
          <div className="mt-4">
            <h3 className="font-bold">Introduce yourself</h3>
            <div className="mt-2">
              <input type="text" {...register('introduction',{required : 'Please write down your introduction.'})} name="introduction" id="introduction"  className="border-black border-2 w-full rounded-md"/>
              <p className="text-red-600">{errors.introduction?.message}</p>
            </div>
          </div> 

          <div className="mt-4">
            <h3 className="font-bold">Tell us what your dreams are</h3>
            <div className="mt-2">
              <textarea {...register('dreams',
                                      {minLength : {value : 10 
                                                    ,message : 'please write more than 10 characters'} })} 
                        
                        name="dreams"  
                        id="dreams"  
                        className="border-black border-2 w-full rounded-md"/>
              <p className="text-red-600">{errors.dreams?.message}</p>
            </div>
          </div> 
          
          <div className="mt-4">
            <h3 className="font-bold">Email</h3>
            <div className="mt-2">
              {/* unlock 1password */}
              <input {...register('email',{validate : value => value.includes('@naver.com') || 'Only @naver.com is allowed' })} 
                      type="email" 
                      name="email" 
                      id="email"               
                      className="border-black border-2 w-full rounded-md"/>
              <p className="text-red-600">{errors.email?.message}</p>        
            </div>
          </div> 
        
          <div className="mt-10">
            <div className="mt-2 *:font-bold">
              <input type="submit" name="submit" id="submit"  className="border-black border-2 w-full rounded-md p-3 bg-yellow-200" value={"Give me this job"}/>
            </div>
          </div> 
          <div className="w-full break-words mt-3">{JSON.stringify(finalValues)}</div>
        </form>
      </div>
    </div>
  );
}
