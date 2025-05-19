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
            rel="noopener noreferrer"
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
            rel="noopener noreferrer"
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
            rel="noopener noreferrer"
            className="hover:text-gray-700"
          >
            &quot;Longings Over Legalism in Your New Year&apos;s
            Aspirations&quot; by Chuck Degroat
          </a>
        </p>
      </div>

      <div className="text-center pt-10 pb-20 space-y-3 bg-white text-black px-8 md:px-0">
        <h2 className="text-3xl md:text-3xl">
          <b>Week 2: Prayer and Scripture</b>
        </h2>
        <br />
        <p>
          <b>Biblical Text: </b>
          <a
            href="https://www.bible.com/bible/2016/PSA.27.NRSV"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-700"
          >
            Psalm 27:1-5 NRSV
          </a>
        </p>
        <p>
          <b>Book: </b>
          <a
            href="https://www.amazon.com/Answering-God-Psalms-Tools-Prayer/dp/0060665122/ref=sr_1_1?crid=351R894EL4W43&dib=eyJ2IjoiMSJ9.m8zgZnpDR1JHU6HgusG20NTuAvoakuNMagFgC-b4DRXQrudIYpOkdfWyrWTOsm0qJYalju-rX_Y4TzoElFly9-AKbwAV_iT7E44uhxsRL3Yzy_saBdXQyu0haLzB4mOEne386OmWXyQWzRnZlShkQBoMpiN_ijlrexuNrKxIqE2Sa2nXTw3AdjDWxKte-50LU5bniBuOneNeCJf7ijgdGImuF9Z6NY-omhbCTAQUG2c.UopjYwCoVWz2OqWOPYEXjZkzhr6Xk7sx3TqwhMKMFBE&dib_tag=se&keywords=eugene+peterson+prayer&qid=1746995330&sprefix=eugene+peterson+prayer%2Caps%2C163&sr=8-1"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-700"
          >
            The Psalms as Tools for Prayer by Eugene Peterson
          </a>
        </p>
        <p>
          <b>
            Article on <i>Lectio Divina</i>:{" "}
          </b>
          <a
            href="/files/overview_LectioDivina.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-700"
          >
            &quot;Overview of Lectio Divina&quot; by J.I. Packer and Carolyn
            Nystrom
          </a>
        </p>
      </div>

      <div className="text-center py-20 space-y-3 bg-white text-black px-8 md:px-0">
        <h2 className="text-3xl md:text-3xl">
          <b>Week 3: Rule of Life</b>
        </h2>

        <p>
          <b>Rule of Life Workbook: </b>
          <a
            href="https://static1.squarespace.com/static/5852ec829f7456cfcc0e1c5a/t/5e17be5d7cba366ace1df6e1/1578614383140/ptw_ruleoflife_workbook_.pdf"
            target="_blank"
            rel="noopener noreferrer"
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
