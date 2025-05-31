"use client";

import Footer from "../../components/footer";
import NavBar from "../../components/navbar";

export default function Beliefs() {
  return (
    <>
      <NavBar />
      <div className="relative text-black bg-[url('/images/josh-lh-preach.jpg')] bg-cover bg-[position:0_35%] bg-no-repeat md:px-[70px] py-[120px]">
        <div className="absolute inset-0 bg-white opacity-70 z-0"></div>
        <header className="relative text-center z-10 space-y-10">
          <h1 className="text-8xl font-medium">Beliefs</h1>
          <h2 className="text-xl px-6 md:px-[350px]">
            What <i>the</i> Church believes has been handed down to us
            throughout the generations. Dream Church holds to the Church truths
            in their purest form, as stated in the <b>Nicene Creed</b> and the{" "}
            <b>Apostle&apos;s Creed.</b>
          </h2>
        </header>
      </div>

      <section className="text-center bg-[rgb(28,28,28)] my-[40px] py-4 border border-white mx-4 md:px-0 md:mx-[300px]">
        <h1 className="text-6xl md:text-7xl font-medium">Nicene Creed</h1>
        <br />
        <div className="px-4 py-5">
          {[
            "We believe in one God",
            "the Father, the Almighty",
            "maker of heaven and earth",
            "of all that is, seen and unseen",
            "",
            "We believe in one Lord, Jesus Christ,",
            "the only Son of God",
            "eternally begotten of the Father,",
            "God from God, Light from Light",
            "true God from true God",
            "begotten, not made,",
            "of one Being with the Father.",
            "Through him all things were made.",
            "",
            "For us and for our salvation",
            "he came down from heaven:",
            "by the power of the Holy Spirit",
            "he became incarnate from the Virgin Mary,",
            "and was made man.",
            "For our sake he was crucified under Pontius Pilate;",
            "he suffered death and was buried.",
            "",
            "On the third day, he rose again",
            "in accordance with the Scriptures;",
            "he ascended into heaven",
            "and is seated at the right hand of the Father",
            "",
            "He will come again in glory",
            "to judge the living and the dead,",
            "and his kingdom will have no end.",
            "",
            "We believe in the Holy Spirit, the Lord, the giver of life",
            "who proceeds from the Father and the Son",
            "With the Father and the Son he is worshiped and glorified.",
            "",
            "He has spoken through the Prophets.",
            "We believe in one holy and apostolic Church.",
            "We acknowledge one baptism for the forgiveness of sins.",
            "We look for the resurrection of the dead,",
            "and the life of the world to come. Amen.",
          ].map((line, index) => (
            <p key={index} className={line === "" ? "mb-4" : ""}>
              {line}
            </p>
          ))}
        </div>
      </section>

      <section className="text-center bg-[rgb(28,28,28)] my-[40px] py-4 border border-white mx-4 md:px-0 md:mx-[300px]">
        <h1 className="text-6xl md:text-7xl font-medium">
          Apostle&apos;s Creed
        </h1>
        <br />
        <div className="px-4 py-5">
          {[
            "I believe in God, the Father Almighty",
            "Creator of heaven and earth",
            "I believe in Jesus Christ, his only Son, our Lord",
            "He was conceived by the power of the Holy Spirit",
            "",
            "And born of the Virgin Mary",
            "He suffered under Pontius Pilate",
            "Was crucified, died, and was buried.",
            "He descended to the dead.",
            "On the third day he rose again.",
            "He ascended into heaven,",
            "And is seated at the right hand of the Father.",
            "He will come again to judge the living and the dead.",
            "",
            "I believe in the Holy Spirit,",
            "The holy Church",
            "The communion of saints",
            "The forgiveness of sins",
            "The resurrection of the body",
            "And the life everlasting. Amen.",
          ].map((line, index) => (
            <p key={index} className={line === "" ? "mb-4" : ""}>
              {line}
            </p>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}
