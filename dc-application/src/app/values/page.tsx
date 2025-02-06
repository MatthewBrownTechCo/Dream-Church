"use client";

import Logo from "../components/logos";
import Footer from "../components/footer";
import { useRouter } from "next/navigation";
import NavBar from "../components/navbar";

export default function Values() {
  const router = useRouter();

  const teamNavigate = () => router.push("/team");

  return (
    <>
      <Logo />
      <NavBar />
      <header className="text-center mt-[70px]">
        <h1 className="text-4xl font-bold">About Dream Church</h1>
        <br />
        <h2 className="text-2xl font-bold mx-[20%]">
          Dream Church is a family being formed in the love of Jesus and the
          ways of his Kingdom
        </h2>
      </header>
      <section className="text-center mt-[50px] mx-[20%] space-y-4">
        <h2 className="text-2xl font-bold">Values</h2>
        <ol className="text-xl font-bold list-decimal list-inside space-y-6">
          <li>Communion with God</li>
          <p>
            We believe that communion with God is everything. When we see
            ourselves as intiminately loved by God, then we can view the rest of
            our lives and the world around us through a God-loving lens and not
            a broken one.
          </p>
          <li>Formative Community</li>
          <p>
            We are a community formed by Christ, committed to discipleship and
            deep relationships. Together, we celebrate life's joys, carry one
            another's burdens, and actively participate in the mission of the
            church. Rooted in faith, we embrace the call to shape and be shaped
            for God's purposes, leaving a legacy of love and transformation for
            future generations.
          </p>
          <li>Liturgy</li>
          <p>
            We are a people devoted to the sacred rhythms of worship, where
            teaching, prayer, Scripture reading, and the Eucharist draw us
            closer to God and one another. Through these shared practices, we
            honor Christ, grow in faith, and live out our calling as a community
            formed in His image.
          </p>
          <li>The Institution of the Church</li>
          <p>
            We honor the Church as God's instrument in the world, cherishing its
            role in shaping society and guiding hearts to Christ. Rooted in the
            richness of church history, we seek to carry forward its legacy with
            reverence, faithfulness, and a commitment to being a light in our
            communities.
          </p>
        </ol>
      </section>
      <div className="text-center mt-[50px]">
        <button
          className="bg-transparent border border-black py-[20px] w-[200px] hover:bg-gray-100"
          onClick={teamNavigate}
        >
          Meet the Team!
        </button>
      </div>
      <Footer />
    </>
  );
}
