"use client";

import { AuthContextProvider } from "@/context/authContext";
import Navigation from "@/components/navigation";
import Loading from "./loading";
import { Suspense } from "react";
import { Analytics } from "@vercel/analytics/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";
import { ourFileRouter } from "../api/uploadthing/core";

const queryClient = new QueryClient();

export default function Layout({ children }) {
  return (
    <body className="bg-[#000]">
      <NextSSRPlugin routerConfig={extractRouterConfig(ourFileRouter)} />
      <QueryClientProvider client={queryClient}>
        <AuthContextProvider>
          <Navigation />
          <main className="w-full md:w-[70%] max-w-4xl m-auto md:ml-52 lg:ml-60 h-full">
            <Suspense fallback={<Loading />}>
              {children}
              <Analytics />
            </Suspense>
          </main>
        </AuthContextProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </body>
  );
}
