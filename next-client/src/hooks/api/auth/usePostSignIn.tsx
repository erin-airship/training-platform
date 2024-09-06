"use client";
import axios from "axios";
import { useMutation } from "react-query";
import { useRouter } from "next/navigation";
import { setAuthCookie } from "@/utils/actions";

export const signInUser = async (email: string, password: string) => {
  const response = await axios.post("http://localhost:3001/auth/signin", {
    email,
    password,
  });

  return response.data;
};

interface SignInResponse {
  accessToken: string;
}
export const usePostSignIn = () => {
      const router = useRouter();

  return useMutation({
    mutationKey: ["signIn"],
    mutationFn: async (variables: { email: string; password: string }) => {
      const data = await signInUser(variables.email, variables.password);
      return data as SignInResponse;
    },
    onSuccess: (data) => {
      setAuthCookie(data.accessToken);
      router.push("/dashboard");
    },
  });
};
