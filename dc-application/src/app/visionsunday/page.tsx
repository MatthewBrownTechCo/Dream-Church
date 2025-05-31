"use client";

import Footer from "../../components/footer";
// import Link from "next/link";
import NavBar from "../../components/navbar";
// import { useRouter } from "next/navigation";

export default function VisionSunday() {
  // const router = useRouter();

  // const contactNavigate = () => router.push("/contactus");
  // const giveNavigate = () => router.push("/give");

  return (
    <>
      <NavBar />
      <div className="relative bg-[url('/images/visionsunday.jpeg')] bg-cover bg-top md:bg-fixed px-[7%] py-[20%] md:py-[10%] text-white">
        <div className="absolute inset-0 bg-black opacity-40 z-0"></div>
        <header className="relative text-center py-[80px] z-10">
          <h1 className="text-6xl md:text-8xl font-medium">Vision Sunday</h1>
          <br />
          <p className="text-3xl md:text-4xl font-medium">
            From our Vision Sunday message (06/01/25)
          </p>
        </header>
      </div>

      {/* <div className="relative bg-[url('/images/prayer-hands.jpg')] bg-cover bg-center md:bg-[position:0_10%] text-center py-16 space-y-10 md:px-0">
        <div className="absolute inset-0 bg-black opacity-80 z-0"></div>
        <h2 className="relative text-5xl md:text-5xl">
          <b>21 Days of Prayer</b>
        </h2>
        <p className="relative mx-10 md:mx-[20%]">
          Beginning June 1st, Dream Church is entering into 21 days of prayer.
          We are specifically praying for the following:
        </p>
        <ul className="relative text-left list-outiside list-disc ml-10 md:ml-[30%] md:mr-[13%] pb-10">
          <li>Renewed passion for discipleship in our people.</li>
          <li>God to reveal my next step &quot;in&quot; at Dream.</li>
          <li>
            God to draw families to Dream to experience the good news of Jesus.
          </li>
          <li>
            Financial provision for our budget and building (including a church
            of consistent obedience with tithes and offerings.
          </li>
          <li>The right building be revealed to us and doors opened.</li>
        </ul>
      </div>

      <div className="relative text-center py-10 space-y-3 bg-[url('/images/josh-outside-teach.jpg')] bg-cover bg-[35%_50%] md:bg-center space-y-8 text-black px-4 md:px-[27%]">
        <div className="absolute inset-0 bg-white opacity-70 z-0"></div>
        <h2 className="relative text-5xl md:text-5xl">
          <b>Discipleship Pathway</b>
        </h2>

        <p className="relative">
          We want everyone at Dream to be intentionally formed in thelove of
          Jesus and the ways of his kingdom. Therefore we have established a
          clear discipleship pathway so everyone knows where they are going in
          their participation at Dream and in their work with Christ. That
          pathway is:
        </p>

        <div className="relative space-y-4">
          <b className="text-4xl">Belong</b>
          <p>
            This is where you take an initial step to belong in the community,
            be an active participant in God&apos;s work in our church family,
            and begin the process of deeper discipleship. This primarily takes
            place through Midweek gatherings and Sunday services.
          </p>
        </div>

        <div className="relative space-y-4">
          <b className="text-4xl">Grow</b>
          <p>
            Once you belong, the next step in our discipleship pathway is to
            grow, specifically through a new ministry called{" "}
            <i>Shepherd&apos;s Way</i>. This new ministry is modeled after
            catechumenate, a period of preparation for individuals seeking to
            join the Christian faith through baptism. The purpose of this phase
            is for you to move from participation to formation. For more
            information on Shepherd&apos;s Way, see below.
          </p>
        </div>

        <div className="relative space-y-4">
          <b className="text-4xl">Lead</b>
          <p>
            After going through the growth stage, the next step is for you to
            pour out into someone else. Rather than &apos;one or two cups&apos;
            pouring into our church, &apos;many cups&apos; are pouring into our
            church. Everyone is poured into more intentionally, meaning greater
            communal formation for our church.
          </p>
        </div>

        <div className="relative space-y-4 pb-8">
          <b className="text-4xl">Multiply</b>
          <p>
            Finally, what the Lord has done in you multiplies into other leaders
            who are multiplying disciples. At this point, Dream will see its
            most significant expression of ministry. The more of our family we
            can shepherd through to multiplicaion, the more we can transform our
            lives and city for the kingdom of God.
          </p>
        </div>
      </div>

      <div className="relative text-center pt-10 pb-20 space-y-3 bg-[url('/images/shepherd.jpg')] bg-cover bg-[18%_50%] md:bg-center px-4 md:px-[20%] space-y-8">
        <div className="absolute inset-0 bg-black opacity-70 z-0"></div>
        <div>
          <h2 className="relative text-5xl md:text-5xl">
            <b>Shepherd&apos;s Way</b>
          </h2>
          <h3 className="relative text-2xl">( Launching in August )</h3>
        </div>

        <p className="relative">
          Shepherd&apos;s Way is a new ministry led by our pastor, Joshua Brown.
          It is modeled after the catechumenate, which traditionally is a period
          of preparation for individuals seeking to join the Christian faith
          through baptism. Before joining the Church, individuals would be
          trained in living a spiritual life, knowing their faith tradition and
          the basics of Christian belief. For Dream, Shepherd&apos;s Way will be
          a place for those ready to grow into fully mature disciples of Christ
          to become all the Lord has called them to become.
        </p>
        <p className="relative">
          Shepherd&apos;s Way will meet once a month for a year. In this group,
          you can expect the following:
        </p>

        <ul className="relative list-outside list-disc text-left ml-10 md:ml-[20%] md:mr-[10%]">
          <li>
            Read through{" "}
            <Link
              href="https://a.co/d/iYIu6GQ"
              className="underline underline-offset-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i>Abba&apos;s Child</i> by Brennan Manning
            </Link>{" "}
            together.
          </li>
          <li>Develop a detailed Rule of Life and support in living it out.</li>
          <li>
            Learn what it means to be a faithful disciple in your marriage,
            family life, singleness, vocation, calling, etc.
          </li>
          <li>Learn and practice spiritual disciplines.</li>
          <li>
            Consistent Bible discussion- not on a level that is so deep you
            can&apos;t understand it, but on a common level so that you can live
            it. Most of these discussions will lean on{" "}
            <Link
              href="https://a.co/d/buGNyNC"
              className="underline underline-offset-2"
            >
              Eugene Peterson&apos;s <i>The Message Bible</i>
            </Link>
            {"."}
          </li>
          <li>
            A 2-3 day retreat where we will be with the Lord and solidify what
            he has done in us.
          </li>
        </ul>

        <p className="relative">
          This is the most important and intentional ministry we&apos;ve ever
          done at Dream. We encourage everyone ready to take a step beyond{" "}
          <i>belonging</i> to sign up for Shepherd&apos;s Way! Click the button
          below and in the message field, type &quot;Shepherd&apos;s Way&quot;.
        </p>

        <div className="relative text-center md:text-center mt-[10px] z-10">
          <button
            className="bg-white text-black border border-white py-[20px] w-80 md:w-[300px] text-xl font-bold hover:bg-gray-200"
            onClick={contactNavigate}
          >
            <b>Sign Up Here</b>
          </button>
        </div>
      </div>

      <div className="relative text-center py-10 space-y-10 bg-[url(/images/evangelism.webp)] bg-cover bg-[15%_50%] md:bg-center text-black px-8 md:px-[30%]">
        <div className="absolute inset-0 bg-white opacity-60 z-0"></div>
        <h2 className="relative text-5xl md:text-5xl">
          <b>The One Evangelism</b>
        </h2>
        <p className="relative pb-10">
          One of the things you will hear us talking about frequently is,
          &quot;Who is your one?&quot; We believe the good news is for all, but
          at Dream, we don&apos;t believe in compromising formation for reach.
          It is possible to reach the world and have a deeply formed church. We
          do that through evangelism (as it was always meant to be). You have
          one person-family member, coworking, friend, etc.-to pray over
          consistently and bring to church to experience the good news lived out
          within the community. Our reach will be based on prayer, relationship,
          and intentionality. Ask the Lord, &quot;Who is my one?&quot;
        </p>
      </div>

      <div className="relative text-center py-20 space-y-10 bg-[url('/images/building-project.webp')] bg-cover bg-center px-4 md:px-[20%]">
        <div className="absolute inset-0 bg-black opacity-70 z-0"></div>
        <h2 className="relative text-5xl md:text-5xl">
          <b>Building Project</b>
        </h2>

        <p className="relative">
          We believe it is time for us to move into a permanent facility. We
          want to do so smartly and full of faith. Therefore, our elders have
          agreed to set a goal of praying and believing for <b>$50,000</b> given
          to Dream above our general budget for 2025. That means from June 1 -
          December 31, we are asking people to pray about how they can hep us
          meet this goal. Here are some ways you can help us and be a part of
          answering this prayer:
        </p>

        <ul className="relative list-outside list-disc text-left ml-10 md:ml-[20%] md:mr-[10%]">
          <li>
            <b>
              Determine to give the full tithe (10% of pretax income)
              consistently (every paycheck)
            </b>{" "}
            If everyone who calls Dream Church home consistently tithed the
            basic 10%, we could almost meet our goal.
          </li>
          <li>
            Once you are committed to the tithe,{" "}
            <b>
              pray to see if the Lord is calling you to a higher action of faith
              by going above and byond the tithe.
            </b>{" "}
            This could involve one-time gifts or determining to tithe more than
            10% consistently.
          </li>
          <li>
            Finally, we know some people are incredibly blessed by the Lord
            financially. The Lord has blessed you to be a blessing, and you are
            ready to take a step to cover a large chunk (or all) of this goal.{" "}
            <b>
              Pray and ask boldly, &quot;Lord, what are you asking me to give to
              see the kingdom spread in ways our generation has never seen by
              helping my church family find a permanent home?&quot;
            </b>
          </li>
        </ul>
        <p className="relative">
          Malachi 3:10b NIRV: &quot;&apos;Test me this way,&apos; says the Lord.
          &apos;Then you will see that I will throw open the windows of heaven.
          I will pour out so many blessings that you will not have enough room
          to store them.&apos;
        </p>

        <div className="relative text-center md:text-center mt-[10px] z-10 pb-10">
          <button
            className="bg-white text-black border border-white py-[20px] w-80 md:w-[300px] text-xl font-bold hover:bg-gray-200"
            onClick={giveNavigate}
          >
            <b>Give Here</b>
          </button>
        </div>
      </div> */}

      <Footer />
    </>
  );
}
