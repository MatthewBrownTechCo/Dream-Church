"use client";

import NavBar from "../../components/navbar";
import Footer from "../../components/footer";

export default function Give() {
  return (
    <>
      <NavBar />
      <header className="text-center md:px-[200px] pt-[120px] pb-[80px] bg-white text-black">
        <h1 className="text-6xl md:text-8xl font-medium">Give</h1>
        <br />
        <p className="px-10 md:px-[20%]">
          We believe giving our tithe (10% or more of your pre-tax income) is an
          act of worship and spiritual formation. It is a sacrament sign of
          God&apos;s generosity toward us and allows us to participate in it by
          giving back to him the first and best portion of what has been given
          to us. We also give to support our church and leaders, believing in
          this house&apos;s mission and wanting it to thrive for generations to
          come.
        </p>
        <br />
        <p className="px-10 md:px-[20%]">
          Thank you so much for your generosity! You can give below:
        </p>
      </header>
      <iframe
        src="https://wallet.subsplash.com/ui/embed/KT57XF/ute_mZ0BU5776GsZtKwml4aJepjlIwGhZFx_tnYxT8FjCKKVy6vgbNr7ENcWLfozg233UpdWCu-AenhiFjzEWmUNnWVmJbjKc3PVgwNVlLtV49O5ja0apn5zRKhm-GS2zE1TtzkF3NgHKzu7EtGe6sWs"
        width="100%"
        height="630"
        className="border-0 overflow-hidden"
      ></iframe>
      <p className="text-center bg-white text-black font-bold pb-20">
        <i>All donations are tax-deductible</i>
      </p>
      <Footer />
    </>
  );
}
