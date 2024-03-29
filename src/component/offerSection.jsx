import { useState } from "react";

export default function Offer() {
  const [offer, setOffer] = useState([
    {
      img: "./Picsart_22-07-29_18-07-06-194 1.png",
      caption: "Content Design",
      isfocus: false,
    },
    {
      img: "./Picsart_22-07-29_18-18-20-134 1.png",
      caption: "Mobile App Design",
      isfocus: true,
    },
    {
      img: "./Picsart_22-07-29_18-24-04-083 1.png",
      caption: "Web Design",
      isfocus: false,
    },
  ]);

  return (
    <div className="h-lvh font-semibold pt-4 container mx-auto px-16">
      <h3 className="text-srGrey text-lg text-center mb-4">What Do I Offer</h3>
      <p className="text-white text-3xl text-balance w-[500px] text-center mx-auto">
        Create Profesional Design That&apos;s Oriented Toward Needs
      </p>
      <div className="flex relative justify-center gap-5 w-10/12 mx-auto p-10 mt-5 rounded-lg outline outline-[rgba(255,255,255,0.1)] outline-1">
        <div className="absolute flex w-full bg-slate-600 h-1 top-2 px-9 justify-end ">
          <div
            className={
              "transition-[width] duration-500 " +
              (indexTrue(offer) == 0 ? "w-0" : "w-full")
            }
          ></div>
          <div className="h-1 w-72 bg-lavender shrink-0"></div>
          <div
            className={
              "transition-[width] duration-500 " +
              (indexTrue(offer) == 2 ? "w-0" : "w-full")
            }
          ></div>
        </div>
        {offer.map((e) => (
          <div
            key={e.img}
            aria-checked={e.isfocus}
            className="relative rounded-lg  scale-75 aria-checked:scale-100  aria-checked:bg-[rgba(116,86,255,0.1)]"
          >
            <div
              aria-checked={e.isfocus}
              className="absolute w-full h-full bg-[rgba(255,255,255,0.05)] backdrop-blur-[2px] rounded-lg aria-checked:hidden"
            ></div>

            <figure className="p-4">
              <img src={e.img} className="h-64" />
              <figcaption
                aria-checked={e.isfocus}
                className="text-[rgba(116,86,255,0.2)] text-lg text-center aria-checked:text-lavender"
              >
                {e.caption}
              </figcaption>
            </figure>
          </div>
        ))}
      </div>

      <div className="flex gap-4 justify-center mt-10">
        <img
          src="./Vector 1.png"
          className={"w-3" + " " + (offer[0].isfocus && "invisible")}
          onClick={() => {
            const index = indexTrue(offer);
            setOffer(
              offer.map((e, i) => {
                if (i === index || i === index - 1) {
                  return { ...e, isfocus: !e.isfocus };
                }
                return e;
              })
            );
          }}
        />

        <div className="flex items-center gap-2">
          {offer.map((e) => (
            <div
              key={e.img}
              aria-checked={e.isfocus}
              className="bg-srGrey aria-checked:bg-lavender w-10 h-2 rounded-full"
            ></div>
          ))}
        </div>

        <img
          src="./Vector2.png"
          className={"w-3" + " " + (offer[2].isfocus && "invisible")}
          onClick={() => {
            const index = indexTrue(offer);
            setOffer(
              offer.map((e, i) => {
                if (i === index || i === index + 1) {
                  return { ...e, isfocus: !e.isfocus };
                }
                return e;
              })
            );
          }}
        />
      </div>
    </div>
  );
}

function indexTrue(array) {
  return array.findIndex((e) => e.isfocus);
}
