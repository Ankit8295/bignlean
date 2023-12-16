"use client";
import { ApiPaths } from "@/constants";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const base_url = process.env.NEXT_PUBLIC_BASE_URL;

async function giveRating(data: any) {
  const auth = localStorage.AUTH ? JSON.parse(localStorage.AUTH) : null;
  return axios({
    method: "POST",
    url: base_url + ApiPaths.RATING,
    data: { ...data, user: auth?.user?.id },
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

async function deleteRating(ratingId: number) {
  return axios({
    method: "DELETE",
    url: base_url + ApiPaths.RATING + "/" + ratingId,
  });
}

export function useDeleteRating() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (ratingId: number) => deleteRating(ratingId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });
}
