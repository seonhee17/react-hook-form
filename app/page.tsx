"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { redirect } from "next/navigation";


/* 
# Prisma
1. Node.js and Typescript ORM(Object Relational Mapping)
=> JS or TS 와 데이터베이스 사이에 다리를 놓아줌 (기본적으로 번역기의 역할을 한다고 생각하면 됨)

2. Prisma를 사용하기 위해서는 먼저 Prisma에게 DB가 어떻게 생겼는지, 데이터의 모양을 설명해줘야 함 => schema.prisma

3. Prisma가 이런 타입에 관한 정보를 알고 있으면 client를 생성해줄 수 있음. client를 이용하면 TS로 DB와 직접 상호작용 가능, 자동완성 제공.

4. Prisma Studio : Visual Database Browser, DB를 위한 관리자 패널같은 것.


#PlanetScale
MySQL과 호환(Compatible)되는 serverless 데이터베이스 플랫폼
https://planetscale.com/

1. brew install planetscale/tap/pscale
2. brew install mysql-client



scaling을 자동으로 해줌 ( + no vacumming, no rebalencing, no query planning, no downtime)

Vitess 오픈소스를 통해 MySQL Scaling

CLI를 통해 쉽게 데이터베이스를 다룰 수 있음

마치 Git처럼 메인 데이터베이스 이외에 Branch 데이터베이스를 사용할 수도 있음

이후 Merge를 하면 자동으로 배포가 됨

Vitess
Vitess는 MySQL을 스케일링하기 위한 데이터베이스 클러스터링 시스템
인터넷에서 가장 큰 사이트를 호스팅하는 강력한 오픈 소스 기술입니다.
https://vitess.io/

Vitess를 사용하는 이유
1. 수평 스케일
2. 고가용성 (Vitess의 기본 복제본 구성은 예기치 않은 이벤트가 발생할 때 기본에서 복제본으로 원활한 장애 조치를 허용합니다.)
3. MySQL 호환
4. 쿠버네티스 네이티브
5. 구체화된 뷰
6. 온라인 스키마 마이그레이션

*/



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
