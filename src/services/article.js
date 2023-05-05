import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const rapidApiKey = import.meta.env.VITE_RAPID_API_KEY;

export const articleApi = createApi ({
    reducerPath: 'articleApi',
    baseQuery: fetchBaseQuery({
        baseUrl:'https://article-extractor-and-summarizer.p.rapidapi.com/',
        prepareHeaders:(headers) => {
            headers.set('X-RapidAPI-Key', rapidApiKey)
            headers.set('X-RapidAPI-Host', 'article-extractor-and-summarizer.p.rapidapi.com')
        
            return headers;
        
        }
    }),
    endpoints: (builder) => ({
        getSummary: builder.query({
            // special characters in url may cause code to give unexpected response. therefore we wrap the params in encodeURIComponent.
            query: (params) => `summarize?url=${encodeURIComponent(params.articleUrl)}&length=3`        })
    })
})

// "lazy" allows us to fire the api after we enter url and click the button, not as soon as it loads up the site.
export const { useLazyGetSummaryQuery } = articleApi;