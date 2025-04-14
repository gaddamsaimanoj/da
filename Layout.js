import Head from "next/head"
import Navbar from "./Navbar"
import Footer from "./Footer"

export default function Layout({ children, title = "Modern Website" }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="A modern website built with Next.js" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </>
  )
}
