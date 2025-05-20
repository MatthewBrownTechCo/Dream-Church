import NavBar from "@/components/navbar";
import Footer from "@/components/footer";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <NavBar />

      <main className="relative bg-[url('/images/matt-drums.jpg')] bg-cover bg-center text-white flex flex-col justify-center text-center py-40">
        <div className="absolute inset-0 bg-black opacity-70 z-0"></div>
        <h1 className="relative text-[100px] md:text-[200px] font-bold py-10 md:py-20">
          404
        </h1>
        <h2 className="relative text-[50px] md:text-[100px] py-5 md:py-10">
          Not Found
        </h2>
        <Link href="/" rel="noopener noreferrer">
          <button className="relative text-black bg-white border border-white p-[15px] w-[50%] md:w-[180px] hover:bg-gray-200 text-2xl font-bold mt-8">
            Home
          </button>
        </Link>
      </main>

      <Footer />
    </>
  );
}
