import axios from "axios";
import { useMutation } from "react-query";
import { useRouter } from "next/navigation";
import { setAuthCookie } from "@/utils/actions";

export const signUpUser = async (email: string, password: string) => {
  const response = await axios.post("http://localhost:3001/auth/signup", {
    email,
    password,
    role: "trainee",
  });

  return response.data;
};

interface SignUpResponse {
    accessToken: string;
}
export const usePostSignUp = () => {
  const router = useRouter();

  return useMutation({
    mutationKey: ["signUp"],
    mutationFn: async (variables: { email: string; password: string }) => {
      const data = await signUpUser(variables.email, variables.password);
      return data as SignUpResponse;
    },
    onSuccess: (data) => {
      setAuthCookie(data.accessToken);
      router.push("/dashboard");
    },
  });
};
