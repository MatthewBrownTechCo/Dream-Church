"use client";

import NavBar from "../components/navbar";
import Footer from "../components/footer";

export default function location() {
  return (
    <div>
      <NavBar />
      <div className="relative bg-[url('/images/pastor-study-back.jpg')] bg-cover bg-center px-[7%] py-[10%] text-white">
        <div className="absolute inset-0 bg-black opacity-70 z-0"></div>
        <header className="relative text-center py-[30px] z-10">
          <h1 className="text-7xl font-bold">Location and Times</h1>
        </header>
      </div>
      <div className="flex flex-row justify-between items-center text-center bg-white text-black">
        <div className="flex-1 space-y-6">
          <header className="text-4xl font-bold">Sunday Services</header>
          <p>
            <b>The Pastor's Study:</b> 1633 Main Street, Columbia, SC
          </p>
          <p className="underline underline-offset-2">10 AM EST</p>
          <div className="w-full flex justify-center space-x-4 mt-[75px]">
            <div className="text-center">
              <button className="bg-[rgb(28,28,28)] border border-white p-[15px] w-[200px] hover:bg-gray-700 text-white font-bold">
                <a
                  href="https://maps.apple.com/?address=1633%20Main%20St,%20Columbia,%20SC%20%2029201,%20United%20States&ll=34.007368,-81.036660&q=1633%20Main%20St&t=m"
                  target="_blank"
                >
                  Apple Maps
                </a>
              </button>
            </div>
            <div className="text-center">
              <button className="bg-[rgb(28,28,28)] border border-white p-[15px] w-[200px] hover:bg-gray-700 text-white font-bold">
                <a
                  href="https://maps.app.goo.gl/79jGfKKsBYYwYT8A6"
                  target="_blank"
                >
                  Google Maps
                </a>
              </button>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6614.843219691566!2d-81.03905142407854!3d34.00738727317387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f8a4d47752cafd%3A0x454d3e5c23bf4b13!2s1633%20Main%20St%2C%20Columbia%2C%20SC%2029201!5e0!3m2!1sen!2sus!4v1740184103522!5m2!1sen!2sus"
            className="border-none grayscale w-full h-[450px]"
            loading="lazy"
          ></iframe>
        </div>
      </div>
      <Footer />
    </div>
  );
}
