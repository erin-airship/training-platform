'use client';
import LoginForm from "../_components/LoginForm";


const SignIn = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <LoginForm cardTitle="Sign Up" type='signup' />
    </div>
  );
};

export default SignIn;
