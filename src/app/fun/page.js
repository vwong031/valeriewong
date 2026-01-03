import SectionTitle from "../components/SectionTitle";
import Image from "next/image";

export default function Fun() {
  const funSection = [
    {
      title: "Fun Section 1",
      description: "This is the description for fun section 1.",
      images: [
        {
          src: "/haku-flying.gif",
          alt: "Fun Image 1",
        },
        {
          src: "/haku-flying.gif",
          alt: "Fun Image 1",
        },
        {
          src: "/haku-flying.gif",
          alt: "Fun Image 1",
        },
        {
          src: "/haku-flying.gif",
          alt: "Fun Image 1",
        },
      ],
    },
    {
      title: "Fun Section 2",
      description: "This is the description for fun section 2.",
      images: [
        {
          src: "/haku-flying.gif",
          alt: "Fun Image 1",
        },
        {
          src: "/haku-flying.gif",
          alt: "Fun Image 1",
        },
        {
          src: "/haku-flying.gif",
          alt: "Fun Image 1",
        },
        {
          src: "/haku-flying.gif",
          alt: "Fun Image 1",
        },
      ],
    },
    {
      title: "Fun Section 3",
      description: "This is the description for fun section 3.",
      images: [
        {
          src: "/haku-flying.gif",
          alt: "Fun Image 1",
        },
        {
          src: "/haku-flying.gif",
          alt: "Fun Image 1",
        },
        {
          src: "/haku-flying.gif",
          alt: "Fun Image 1",
        },
        {
          src: "/haku-flying.gif",
          alt: "Fun Image 1",
        },
      ],
    },
  ];

  return (
    <div id="fun" className="min-h-screen bg-floralWhite">
      <SectionTitle title="Fun" />
      <div className="mx-auto w-9/12 space-y-32">
        {funSection.map((section, index) => {
          const isEven = index % 2 === 0;

          return (
            <div
              key={index}
              className="grid grid-cols-1 items-center gap-12 md:grid-cols-2"
            >
              <div
                className={`order-2 grid grid-cols-2 gap-4 ${isEven ? "md:order-1" : "md:order-2"}`}
              >
                {section.images.map((img, i) => (
                  <div
                    key={i}
                    className="relative h-48 w-full overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm transition-transform hover:scale-105"
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      width={300}
                      height={300}
                      // fill
                      // className="object-cover"
                    />
                  </div>
                ))}
              </div>
              <div
                className={`flex flex-col ${isEven ? "md:order-2" : "md:order-1"}`}
              >
                <h2 className="mt-4 text-center text-2xl font-bold">
                  {section.title}
                </h2>
                <p className="mt-2 text-center text-gray-700">
                  {section.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      {/* <div className="mx-auto grid w-9/12 grid-cols-1 gap-8 md:grid-cols-2">
        <div className="order-2 grid w-full grid-cols-2 gap-4 transition-all md:order-1">
          <Image
            src="/haku-flying.gif"
            alt="Fun Image 1"
            loading="lazy"
            width={300}
            height={300}
          />
          <Image
            src="/haku-flying.gif"
            alt="Fun Image 1"
            width={500}
            height={500}
          />
          <Image
            src="/haku-flying.gif"
            alt="Fun Image 1"
            width={200}
            height={200}
          />
          <Image
            src="/haku-flying.gif"
            alt="Fun Image 1"
            width={350}
            height={350}
          />
        </div>
        <div className="order-1 flex flex-col items-center justify-center text-center">
          Example Text
        </div>
      </div>
      <div className="mx-auto mt-5 grid w-9/12 grid-cols-1 gap-8 md:grid-cols-2">
        <div className="flex flex-col items-center justify-center text-center">
          Example Text
        </div>
        <div className="grid w-full grid-cols-2 gap-4 transition-all">
          <Image
            src="/haku-flying.gif"
            alt="Fun Image 1"
            loading="lazy"
            width={300}
            height={300}
          />
          <Image
            src="/haku-flying.gif"
            alt="Fun Image 1"
            width={500}
            height={500}
          />
          <Image
            src="/haku-flying.gif"
            alt="Fun Image 1"
            width={200}
            height={200}
          />
          <Image
            src="/haku-flying.gif"
            alt="Fun Image 1"
            width={350}
            height={350}
          />
        </div>
        <div className="mx-auto grid w-9/12 grid-cols-1 gap-8 md:grid-cols-2">
          <div className="order-2 grid w-full grid-cols-2 gap-4 transition-all md:order-1">
            <Image
              src="/haku-flying.gif"
              alt="Fun Image 1"
              loading="lazy"
              width={300}
              height={300}
            />
            <Image
              src="/haku-flying.gif"
              alt="Fun Image 1"
              width={500}
              height={500}
            />
            <Image
              src="/haku-flying.gif"
              alt="Fun Image 1"
              width={200}
              height={200}
            />
            <Image
              src="/haku-flying.gif"
              alt="Fun Image 1"
              width={350}
              height={350}
            />
          </div>
          <div className="order-1 flex flex-col items-center justify-center text-center">
            Example Text
          </div>
        </div>
      </div> */}
    </div>
  );
}
