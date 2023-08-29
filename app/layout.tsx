import "./globals.css";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import { ReactNode } from "react";

export default function ContainerBlock({
  children,
  ...customMeta
}: {
  children: any;
}) {
  const meta = {
    title: "Max Rennie - Digital Creator",
    description: `I've been developing websites for 5 years straight. Get in touch with me to know more.`,
    image: "/avatar.png",
    type: "website",
    date: "01/08/2023",
    ...customMeta,
  };
  return (
    <div>
      <Head>
        <html lang="en" />
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta property="og:url" content={`https://yourwebsite.com`} />
        <link rel="canonical" href={`https://yourwebsite.com`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Max Rennie" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@mannupaaji" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>
      {/* <body className="lg:h-full lg:overflow-hidden"> */}
      <body className="">
        <Navbar />

        {/* <div className="md:h-screen md:overflow-hidden">
          <main className="mx-auto bg-white">
            <div className="container mx-auto bg-white md:px-10 flex flex-col md:flex-row lg:px-32 flex-wrap h-min text-black"> */}
        <div className="pt-24">{children}</div>
        {/* </div> */}
        {/* </main> */}
        {/* </div> */}
        <Footer />
      </body>
    </div>
  );
}
