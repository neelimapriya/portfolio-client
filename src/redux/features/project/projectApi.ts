import { baseApi } from "@/redux/api/baseApi";
import { TQueryParam, TResponseRedux } from "@/types/global";
import { TProject } from "@/types/project.type";


const projectApi = baseApi.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    getAllProjects: builder.query({
      query: (args?: TQueryParam[]) => {
        const params = new URLSearchParams();
        args?.forEach((item) => params.append(item.name, String(item.value)));

        return {
          url: `/project?${params.toString()}`,
          method: "GET",
        };
      },
      transformResponse: (response: TResponseRedux<TProject[]>) => ({
        data: response.data,
        meta: response.meta,
      }),
      providesTags: ["Project"],
    }),

    // Fetch a single Project by ID
    getSingleProject: builder.query({
      query: (id: string) => ({
        url: `/project/${id}`,
        method: "GET",
      }),
      transformResponse: (response: TResponseRedux<TProject>) => response.data,
      providesTags: ["Project"],
    }),
  }),
});

export const { useGetAllProjectsQuery, useGetSingleProjectQuery } = projectApi;