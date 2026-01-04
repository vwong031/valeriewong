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
          class: "pic1",
        },
        {
          src: "/haku-flying.gif",
          alt: "Fun Image 1",
          class: "pic2",
        },
        {
          src: "/haku-flying.gif",
          alt: "Fun Image 1",
          class: "pic3",
        },
        {
          src: "/haku-flying.gif",
          alt: "Fun Image 1",
          class: "pic4",
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
          class: "pic1",
        },
        {
          src: "/haku-flying.gif",
          alt: "Fun Image 1",
          class: "pic2",
        },
        {
          src: "/haku-flying.gif",
          alt: "Fun Image 1",
          class: "pic3",
        },
        {
          src: "/haku-flying.gif",
          alt: "Fun Image 1",
          class: "pic4",
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
          class: "pic1",
        },
        {
          src: "/haku-flying.gif",
          alt: "Fun Image 1",
          class: "pic2",
        },
        {
          src: "/haku-flying.gif",
          alt: "Fun Image 1",
          class: "pic3",
        },
        {
          src: "/haku-flying.gif",
          alt: "Fun Image 1",
          class: "pic4",
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
              className="mx-auto grid grid-cols-1 items-stretch gap-8 md:grid-cols-2"
            >
              <div
                className={`order-2 image-grid h-[600px] w-full gap-4 overflow-hidden transition-all duration-500 ${isEven ? "md:order-1" : "md:order-2"}`}
              >
                {section.images.map((img, i) => (
                  <div
                    key={i}
                    className={`${img.class} relative h-full w-full overflow-hidden shadow-sm rounded-3xl`}
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className={`object-cover`}
                    />
                  </div>
                ))}
              </div>
              <div
                className={`flex flex-col justify-center ${isEven ? "md:order-2" : "md:order-1"}`}
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
     
    </div>
  );
}
