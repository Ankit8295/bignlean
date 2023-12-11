import { ApiPaths } from "@/constants";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const base_url = process.env.NEXT_PUBLIC_BASE_URL;
const auth = JSON.parse(localStorage.getItem("AUTH")!);

async function giveRating(data: any) {
  return axios({
    method: "POST",
    url: base_url + ApiPaths.RATING,
    data,
  });
}

export function useGiveRating() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: any) => giveRating(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });
}
