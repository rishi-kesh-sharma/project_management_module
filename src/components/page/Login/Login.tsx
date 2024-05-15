import TextInput from "@/components/custom/Form/Input/TextInput/TextInput";
import { Button } from "@/components/ui/Button/button";
import LogoEnter from "../../../assets/images/LogoEnter.png";
import { useState } from "react";
import PasswordInput from "@/components/custom/Form/Input/PasswordInput/PasswordInput";
import { Label } from "@/components/ui/Label/label";

const Login: React.FC = () => {
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const key = e.target.id;
    const value = e.target.value;
    setLoginData({ ...loginData, [key]: value });
  };
  return (
    <div className="flex h-screen">
      <div className="w-7/12 bg-gradient-to-r from-primary/30 via-primary/50 to-primary-80 p-16">
        <div className="text-primary-foreground absolute top-12">
          <div style={{ width: "195px", height: "86px", marginTop: "62px" }}>
            <img src={LogoEnter} style={{ width: "100%", height: "100%" }} />
          </div>
        </div>
        <div className="flex items-end text-primary-foreground absolute bottom-12">
          @2024Enterleaf.All right reserved
        </div>
      </div>
      <div className="w-5/12 flex flex-col justify-center items-center ">
        <div className="min-w-[380px] flex flex-col space-y-2">
          <div className="flex flex-col space-y-8">
            <p className="text-4xl font-bold ...">Enter Leaf</p>
            <p className="text-2xl font-semibold ...">Welcome Back!</p>
            <div className="flex flex-col gap-3">
              <Label>Email</Label>
              <TextInput
                id="email"
                name="email"
                size="xl"
                required={true}
                placeholder="Enter Email"
                label=""
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label>Password</Label>
              <PasswordInput
                size={"xl"}
                required={true}
                id="password"
                name="password"
                onChange={handleChange}
                placeholder="Enter Your Password"
              />
            </div>
          </div>
          <div className="flex justify-end">
            <p className="underline text-slate-500 text-sm ...">
              Forgot Password
            </p>
          </div>
          <Button size={"lg"}>Login</Button>
          <div className="flex items-center my-2 w-full">
            <div className="border-t border-gray-300 flex-grow"></div>
            <div className="text-sm text-gray-500">OR</div>
            <div className="border-t border-gray-300 flex-grow"></div>
          </div>
          <div
            style={{
              border: "1px solid #0E84ED",
              padding: "9px",
              borderRadius: "6px",
              boxShadow: "0px 0px 12px rgba(0, 0, 0, 0.1)",
              display: "flex",
              justifyContent: "center",
              gap: "12px",
            }}>
            <svg
              width="23"
              height="24"
              viewBox="0 0 23 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M22.54 12.2615C22.54 11.446 22.4668 10.6619 22.3309 9.90918H11.5V14.3576H17.6891C17.4225 15.7951 16.6123 17.013 15.3943 17.8285V20.714H19.1109C21.2855 18.7119 22.54 15.7637 22.54 12.2615Z"
                fill="#4285F4"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.5 23.4998C14.605 23.4998 17.2081 22.47 19.1109 20.7137L15.3943 17.8282C14.3645 18.5182 13.0472 18.9259 11.5 18.9259C8.50474 18.9259 5.96951 16.903 5.06519 14.1848H1.22314V17.1644C3.11542 20.9228 7.00451 23.4998 11.5 23.4998Z"
                fill="#34A853"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.06523 14.185C4.83523 13.495 4.70455 12.7579 4.70455 12C4.70455 11.242 4.83523 10.505 5.06523 9.81499V6.83545H1.22318C0.444318 8.38795 0 10.1443 0 12C0 13.8557 0.444318 15.612 1.22318 17.1645L5.06523 14.185Z"
                fill="#FBBC05"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.5 5.07386C13.1884 5.07386 14.7043 5.65409 15.8961 6.79364L19.1945 3.49523C17.2029 1.63955 14.5997 0.5 11.5 0.5C7.00451 0.5 3.11542 3.07705 1.22314 6.83545L5.06519 9.815C5.96951 7.09682 8.50474 5.07386 11.5 5.07386Z"
                fill="#EA4335"
              />
            </svg>
            Sign In with Google
          </div>
          <div
            className="w-5/12 flex flex-row justify-center items-center space-y-4 text-muted-foreground"
            style={{ width: "100%" }}>
            Don't have an account ? &nbsp;
            <Button
              variant={"link"}
              className="underline  text-primary-foreground">
              {" "}
              Sign up
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
