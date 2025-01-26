import { useMutation } from "@tanstack/react-query";
import { signup as apiSignup } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useSignup() {
  const { mutate: signup, isPending: isSigningUp } = useMutation({
    mutationFn: apiSignup,
    onSuccess: (user) => {
      console.log(user);
      toast.success(
        "Account successfully created! Please verify the new user's email adress"
      );
    },
  });

  return { signup, isSigningUp };
}
