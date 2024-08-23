import { useAuth } from "@/context/AuthContext";
import storage from "@/utils/storage";
import axios from "axios";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";

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
    const navigate = useNavigate();
    const {setUserToken} = useAuth();
  return useMutation({
    mutationKey: ["signUp"],
    mutationFn: async (variables: { email: string; password: string }) => {
      const data = await signUpUser(variables.email, variables.password);
      return data as SignUpResponse;
    },
    onSuccess: (data) => {
        storage.setToken(data.accessToken)
        setUserToken(data.accessToken)
        navigate('/home')
    }
  });
};
