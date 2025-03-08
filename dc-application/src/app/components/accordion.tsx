"use client";

import { useState, useRef } from "react";
import { ChevronDown } from "lucide-react";

interface AccordionItem {
  title: string;
  content: string;
}

const values: AccordionItem[] = [
  {
    title: "Communion with God",
    content: `At the core of all we value is our communion with God. This transcends simple Bible reading, prayer, and personal worship; it embodies a profound life perspective dedicated to pursuing God with all we are. As Brother Lawrence puts it in his book The Practice of the Presence of God, "Think often on God, by day, by night, in your business and even in your diversions. He is always near you and with you; leave him not alone." Or as Tish Harris Warren puts it, "If Christ was a carpenter, all of us who are in Christ find that our work is sanctified and made holy. If Christ spent time in obscurity, then there is infinite worth found in obscurity. If Christ spent most of his life in quotidian ways, then all of life is brought under his lordship. There is no task too small or too routine to reflect God's glory and worth." In summary, communion with God is a value for which we have dedicated our lives to know Him in every way, every day.`,
  },
  {
    title: "Formative Community",
    content: `Formation refers to the process of being shaped and developed in a particular way. At Dream, we are a formative community that comes together as a family, embracing individuals from various backgrounds and stories. We aim to grow together in the ways of Jesus and his kingdom. We place a high value on discipleship for deep, meaningful formation. 

    Through Sunday services, midweek small group, and personal relationships, we are "all com[ing] to the unity of the faith and of the knowledge of the Son of God, to maturity, to the measure of the full stature of Christ." (Ephesians 4:13 NRSV) As Henri Nouwen writes, "Community is the fruit of our capacity to make the interests of others more important than our own."
    
    We celebrate our joyful moments together, support each other's burdens, and engage fully in our family, recognizing that we are all vital and irreplaceable parts of a unified whole.
    
    Being a formative community includes having a heart for the next generations and creating environments where they can be formed on their level.`,
  },
  {
    title: "Liturgy",
    content: `
      <p>Liturgy refers to the specific words, music, and actions used during Christian services. Essentially, it is a way of expressing our beliefs. We value not just what we do but also how we do it. Here are some pieces of the Dream Church liturgy:</p>
      <br />
      <ul class="list-disc pl-[6%]">
        <li><b>Exegetical Teaching:</b> Our sermons and teachings begin and end with scripture. We long to be curious and allow these writings to guide us into truths that will inevitably give us a framework for our lives.</li>
        <li><b>Formational Worship:</b> We intentionally ensure that our worship is in harmony with who we are and what we believe.</li>
        <li><b>Scripture Reading:</b> We value reading scripture as an integral part of our worship expression.</li>
        <li><b>Prayer:</b> Prayer is transformational and deeply forming. Therefore, we value prayer as both a body and as individuals.</li>
        <li><b>Communion (Eucharist):</b> On the first Sunday of every month, we take communion together in our worship service. We do this to remember what Christ has done for us and that we are one with him.</li>
      </ul>
    `,
  },
  {
    title: "The Church",
    content: `Oliver O'Donovan once said, “The Church is simultaneously incarnational and imperfect.” The Church is both sacred and esteemed as the body and bride of Christ. However, it is composed of many individuals from diverse backgrounds. Therefore, we approach the institution of the Church with a sense of honor and reverence for its true identity in Christ, while also maintaining a spirit of grace, recognizing that there will be times when it falls short of our expectations. The Church is not perfect because it is without flaws; it is perfect because it is exactly as it is meant to be.`,
  },
];

export default function Accordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-[70%] mx-auto mt-14">
      {values.map((item, index) => (
        <div key={index} className="border-y border-gray-500">
          <button
            className="flex justify-between w-full p-4 text-left text-white hover:bg-gray-700"
            onClick={() => toggleAccordion(index)}
          >
            <span className="font-bold text-2xl">{item.title}</span>
            <span
              className={`transition-transform duration-300 transform ${
                openIndex === index ? "-rotate-180" : ""
              }`}
            >
              <ChevronDown className="w-5 h-5" />
            </span>
          </button>
          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out`}
            style={{
              maxHeight:
                openIndex === index
                  ? `${contentRefs.current[index]?.scrollHeight}px`
                  : "0",
            }}
          >
            <div
              ref={(el) => {
                contentRefs.current[index] = el;
              }}
              className="p-6 text-left text-white text-xl"
              dangerouslySetInnerHTML={{ __html: item.content }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
