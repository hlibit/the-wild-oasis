import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as apiLogin } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useLogin() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate: login, isPending: isLogging } = useMutation({
    mutationFn: ({ email, password }) => apiLogin({ email, password }),
    onSuccess: ({ user }) => {
      console.log("success");
      navigate("/dashboard");
      queryClient.setQueriesData(["user"], user);
    },
    onError: (err) => {
      console.log("Error", err);
      toast.error("Provided email or password are incorrect");
    },
  });

  return { login, isLogging };
}
