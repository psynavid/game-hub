// import platforms from "../data/platforms";

import apiClient from "../services/api-client";
import { FetchQueryOptions, useQuery } from "@tanstack/react-query";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () =>
  useQuery({
    useQuery: ["platforms"],
    queryFn: () =>
      apiClient
        .get<FetchQueryOptions<Platform>>("/platforms/lists/parents")
        .then((res) => res.data),
    staletime: 24 * 60 * 60 * 1000,
    // initialData: platforms,
  });

export default usePlatforms;
