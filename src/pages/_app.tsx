// import "@/styles/globals.css";
// import type { AppProps } from "next/app";
// import Sidebar from "@/components/Sidebar";
// import { ThemeProvider } from "@/components/ThemeProvider";

// export default function MyApp({ Component, pageProps }: AppProps) {
//   return (
//     <ThemeProvider>
//       <div className="flex p-4 dark:bg-mainDark">
//         <Sidebar />
//         <main className="flex-1 p-6">
//           <Component {...pageProps} />
//         </main>
//       </div>
//     </ThemeProvider>
//   );
// }

import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@/components/ThemeProvider";
import Layout from "@/components/Layout";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
