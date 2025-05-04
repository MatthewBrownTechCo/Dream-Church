"use client";

import Footer from "../../components/footer";
import NavBar from "../../components/navbar";

export default function Resources() {
  return (
    <>
      <NavBar />
      <div className="relative bg-[url('/images/resources-background.jpg')] bg-cover bg-[center_bottom_15%] px-[7%] py-[5%] text-white">
        <div className="absolute inset-0 bg-black opacity-40 z-0"></div>
        <header className="relative text-center py-[80px] z-10">
          <h1 className="text-6xl md:text-8xl font-medium">Resources</h1>
          <br />
          <p className="text-3xl md:text-4xl font-medium">
            For our current series, <b>Into the Silent Land</b>
          </p>
        </header>
      </div>
      <div className="text-center py-20 space-y-3 bg-white text-black px-8 md:px-0">
        <h2 className="text-3xl md:text-3xl">
          <b>Week 1: You Are Blessed</b>
        </h2>
        <br />
        <p>
          <b>Biblical Text: </b>
          <a
            href="https://www.bible.com/bible/97/MAT.5.NIV?parallel=2016"
            target="_blank"
            className="hover:text-gray-700"
          >
            Matthew 5:1-12 MSG, NRSV
          </a>
        </p>
        <p>
          <b>Book: </b>
          <a
            href="https://www.amazon.com/dp/0195307607?ref=cm_sw_r_ffobk_cp_ud_dp_N1A29YDH9DEEFGS7ZKBD&ref_=cm_sw_r_ffobk_cp_ud_dp_N1A29YDH9DEEFGS7ZKBD&social_share=cm_sw_r_ffobk_cp_ud_dp_N1A29YDH9DEEFGS7ZKBD&bestFormat=true&previewDoh=1"
            target="_blank"
            className="hover:text-gray-700"
          >
            Into the Silent Land by Martin Laird
          </a>
        </p>
        <p>
          <b>
            Article on a <i>Rule of Life</i>:{" "}
          </b>
          <a
            href="https://www.chuckdegroat.net/chuck-degroat-blog/longings-over-legalism-in-your-new-years-aspirations"
            target="_blank"
            className="hover:text-gray-700"
          >
            “Longings Over Legalism in Your New Year&apos;s Aspirations” by
            Chuck Degroat
          </a>
        </p>
        <p>
          <b>Rule of Life Workbook: </b>
          <a
            href="https://static1.squarespace.com/static/5852ec829f7456cfcc0e1c5a/t/5e17be5d7cba366ace1df6e1/1578614383140/ptw_ruleoflife_workbook_.pdf"
            target="_blank"
            className="hover:text-gray-700"
          >
            From “Practicing the Way”
          </a>
        </p>
      </div>
      <Footer />
    </>
  );
}
