import SectionTitle from "../components/SectionTitle";
import Image from "next/image";

export default function Fun() {
  const funSection = [
    {
      title: "Sports",
      description:
        "I grew up as an extremely active kid. I participated in various sports such as swimming, tennis, gymnastics, track and field, volleyball, and basketball. From middle school to high school, I played volleyball and basketball competitively, holding positions as Libero and Point Guard respectively. I enjoyed the teamwork and strategy involved in both sports. After high school, I continued to play basketball and volleyball recreationally with friends in college intramural teams. Now as an adult, I still love to stay active and have picked up other hobbies such as running, pickleball, Muay Thai, Boxing, and Brazilian Jiu-Jitsu. Sports have always been a big part of my life and I enjoy the physical and mental challenges they provide. If I am not playing a sport, you can find me lifting weights at the gym 💪🏼",
      images: [
        {
          src: "/vball-action.jpg",
          alt: "An action shot of me digging a volleyball during a game. I am wearing a pink jersey, navy blue spandex, and white kneepads, ankle braces, and shoes. My black socks peek out from underneath the ankle braces. My hair is in 2 dutch braids and connect to a low ponytail at the base of my head. The hair at the ponytail is curly.",
          class: "pic1",
        },
        {
          src: "/run.jpg",
          alt: "A picture of me hugging my boyfriend, Nikko, in front of Oracle Arena (the baseball stadium in SF). We stopped in the middle of our run to take a picture with the sea lion statue.",
          class: "pic2",
        },
        {
          src: "/bjj.jpg",
          alt: "A picture of me laying on the ground and learning how to do an armbar on my Brazilian Jiu-Jitsu instructor.",
          class: "pic3",
        },
        {
          src: "/gym.jpg",
          alt: "A picture of me and my boyfriend, Nikko, flexing our triceps in front of the gym mirror.",
          class: "pic4",
        },
      ],
    },
    {
      title: "Books",
      description:
        "I love reading books! Some of my favorite genres include fiction, fantasy, and personal development. I used to read more often when I was younger, but I find that I don't have as much time as I used to. In fact. I used to read so much that I received multiple awards for reading 1 million words. When I was in middle school, some of my favorite series included: Harry Potter, Hunger Games, Maze Runner, and Divergent! Some of my recently read books as an adult include: How to Win Friends & Influence People, Boundaries, The Belles #1, and The Night Circus.",
      images: [
        {
          src: "/boundaries.jpg",
          alt: "A picture of the Boundaries book by Dr. Henry Cloud and Dr. John Townsend",
          class: "pic1",
        },
        {
          src: "/night-circus.jpg",
          alt: "Picture of 'The Night Circus' book",
          class: "pic2",
        },
        {
          src: "/harry-potter.jpg",
          alt: "Harry Potter and the Sorcerers Stone Book Cover Art",
          class: "pic3",
        },
        {
          src: "/you-turn.jpg",
          alt: "Picture of the book 'You Turn' by Ashley Stahl.",
          class: "pic4",
        },
      ],
    },
    {
      title: "Shows & Movies",
      description:
        "I love to bond with my community over a good show or movie! I will watch pretty much any genre, but some of my favorites include: comedy, action, coming of age, romance, musicals, and horror. I've recently finished watching the following series: Stranger Things, The Summer I Turned Pretty, Outer Banks, and All of Us Are Dead. A new season of Single's Inferno is coming out soon as well which I am super excited for! As for movies, the last movies I remember watching are Barbie, Wicked, and The Great Flood. Some of my comfort movies include Mean Girls, White Chicks, Legally Blonde, The Conjuring, and Insidious (ironic because the last two movies are not comforting at all 😂).",
      images: [
        {
          src: "/stranger-things.jpg",
          alt: "Stranger Things, a Netflix Series, cover photo",
          class: "pic1",
        },
        {
          src: "/summer-i-turned-pretty.jpg",
          alt: "The Summer I Turned Pretty cover photo",
          class: "pic2",
        },
        {
          src: "/mean-girls.jpg",
          alt: "Mean Girls movie cover photo",
          class: "pic3",
        },
        {
          src: "/the-great-flood.jpg",
          alt: "The Great Flood (Netflix Movie) Cover Photo",
          class: "pic4",
        },
      ],
    },
  ];

  return (
    <div id="fun" className="min-h-screen bg-floralWhite">
      <SectionTitle title="Fun" />
      <div className="mx-auto w-9/12 space-y-32 pb-20">
        {funSection.map((section, index) => {
          const isEven = index % 2 === 0;

          return (
            <div
              key={index}
              className="mx-auto grid grid-cols-1 items-stretch gap-12 md:grid-cols-2"
            >
              <div
                className={`image-grid order-2 h-[600px] w-full gap-4 overflow-hidden transition-all duration-500 ${isEven ? "md:order-1" : "md:order-2"}`}
              >
                {section.images.map((img, i) => (
                  <div
                    key={i}
                    className={`${img.class} relative h-full w-full overflow-hidden rounded-3xl shadow-sm`}
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
                <h2 className="mt-4 text-center text-6xl font-bold">
                  {section.title}
                </h2>
                <p className="mt-2 text-center text-2xl text-gray-700">
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
