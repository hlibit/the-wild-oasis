import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout as apiLogout } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";

export function useLogout() {
  const navigate = useNavigate();
  const quertClient = useQueryClient();
  const { mutate: logout, isPending: isLoggingOut } = useMutation({
    mutationFn: apiLogout,
    onSuccess: () => {
      quertClient.removeQueries();
      navigate("/login", { replace: true });
    },
  });
  return { logout, isLoggingOut };
}
