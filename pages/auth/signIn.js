import React, { useState } from "react";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import Router from "next/router";

export default function Home() {
  const { data, status } = useSession();
  const { data: session } = useSession();
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  if (status === "loading") return <h1> loading... please wait</h1>;
  const handleGoogle = async () => {
    const firstName = data.user.name
    const email = data.user.email
    const profileImage = data.user.image
    const body = { firstName, email, profileImage }
    try {
      const response = await fetch('/api/db/users/createuser', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      })
      if (response.status !== 200) {
        console.log('something went wrong')
        //set an error banner here
      } else {
        console.log('form submitted successfully !!!')
        //set a success banner here
      }
      //check response, if success is false, dont take them to success page
    } catch (error) {
      console.log('there was an error submitting', error)
    }
  }
  
  if (status === "authenticated") {
    handleGoogle()
    Router.push("/otp")
  }

  const submit = async(e)=>{
    e.preventDefault()
    const res = await signIn("credentials", {
      email: email,
      password: password,
      redirect: false,
    });

    console.log(res);
  }
  return (
    <div className="body h-screen">
      {/* header */}
      <div className="mx-auto max-w-8xl px-6 pt-5 lg:px-8">
        <img className="h-5 w-auto" src="/images/logo2.svg" alt="" />
        <div className="justify-center flex mt-10 md:mt-28">
          <div className="w-5/5  md:w-[28%] border border-gray-200 bg-white rounded-lg md:px-8 px-4">
            <div className="my-16 md:my-16">
              <h2 className="text-2xl font-bold">Login to your account</h2>
              <div className="flex justify-center mt-10">
                <input
                  type="text"
                  value={email}
                  onChange={(e)=>{setEmail(e.target.value)}}
                  className="w-full py-2.5 border border-gray-200  rounded-lg outline-none pl-2"
                  placeholder="Username"
                />
              </div>
              <div className="flex justify-center pt-4">
                <input
                  type="text"
                  value={password}
                  onChange={(e)=>{setPassword(e.target.value)}}
                  className="w-full py-2.5 border border-gray-200 rounded-lg outline-none pl-2"
                  placeholder="Password"
                />
              </div>
              <div className="flex justify-between pt-4">
                <div className="flex">
                  <input
                    type="radio"
                    name="remember"
                    id="remember"
                    className="border border-gray-200 outline-none pl-2 mr-2 "
                  />
                  <label htmlFor="remember">Remember Me</label>
                </div>
                <span className="text-green-700">
                  <Link href="/recoverPassword">Forgot Password?</Link>
                </span>
              </div>
              
                <div className="flex justify-center mt-4">
                  <button onClick={submit} className="w-full py-2.5 border text-white bg-black border-gray-200 rounded-lg outline-none pl-2">
                    Sign In with Email{" "}
                  </button>
                </div>
               
              <div className="px-4 mt-5">
                <div className="flex items-center py-4">
                  <div className="flex-grow h-px bg-gray-200"></div>

                  <span className="px-2 text-sm -mt-0.5">Or login with</span>

                  <div className="flex-grow h-px bg-gray-200"></div>
                </div>
              </div>
              <div className="flex justify-between mt-2 w-full">
                <div className="flex justify-center h-12 mr-0.5 w-[50%]">
                  <button
                    onClick={() => signIn("google")}
                    className="w-full py-2 border   bg-white-600 border-gray-200 rounded-sm outline-none px-10 flex justify-center"
                  >
                    <div className="flex">
                      <img
                        src="/images/google.svg"
                        className="h-4 w-4 mt-2"
                        alt=""
                      />
                      <span className="ml-2  mt-1.5  text-sm">Google</span>{" "}
                    </div>
                  </button>
                </div>
                <div className="flex justify-center h-12 ml-0.5  w-[50%]">
                  <button onClick={() => signIn("facebook")} className="w-full py-2 border   bg-white-600 border-gray-200 rounded-sm outline-none px-10 flex justify-center">
                    <div className="flex mt-0.5">
                      <i className="ri-facebook-fill ml-2 text-blue-600"></i>
                      <span className="ml-2 mt-1  text-sm">facebook</span>{" "}
                    </div>
                  </button>
                </div>
              </div>
              <div className="mt-8">
                <span className="text-sm">
                  Don&lsquo;t have an account ?{" "}
                  <a className="text-green-700" href="">
                    Get started
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
