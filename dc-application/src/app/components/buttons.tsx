"use client";

import { useRouter } from "next/navigation";

// Custom hook without returning navigate
export const useNavigate = (route: string) => {
  const router = useRouter();

  const navigate = () => {
    router.push(route);
  };

  return navigate;
};
