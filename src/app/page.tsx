import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full flex flex-col items-center justify-center text-center px-6 py-16">
      {/* Top: Powered by */}
      <div className="flex items-center gap-2 text-[20px] text-gray-500">
        <span>Powered by</span>
        <Image src="/icons/tawi.svg" alt="Tawi" width={70} height={20} />
      </div>

      {/* Main Headline */}
      <h1 className="mt-6 text-[40px] font-bold text-[var(--foreground)] leading-tight max-w-3xl">
        Don’t scroll blind <br /> Take back your power.
      </h1>

      {/* Subtext */}
      <p className="mt-4 text-[14px] text-gray-400 max-w-md">
        Your all-in-one tool for government and MIL information
      </p>
    
     {/* Stats Section */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
        {/* Box 1 */}
        <div className="flex flex-col items-center justify-center p-6 rounded-xl shadow-sm bg-[var(--background)]">
          <Image src="/icons/Volunteer.svg" alt="Volunteers" width={150} height={200} />
          <p className="mt-4 font-semibold text-[20px] bg-gradient-to-r from-[#FFC757] to-[#EB5E55] bg-clip-text text-transparent">
            4 Volunteers in Action
          </p>

        </div>

        {/* Box 2 */}
        <div className="flex flex-col items-center justify-center p-6 rounded-xl shadow-sm bg-[var(--background)]">
          <Image src="/icons/UniqueUser.svg" alt="Unique Users" width={190} height={200} />
          <p className="mt-4 font-semibold text-[20px] bg-gradient-to-r from-[#FFC757] to-[#EB5E55] bg-clip-text text-transparent">
            1M+ Unique User Reached
          </p>
        </div>

        {/* Box 3 */}
        <div className="flex flex-col items-center justify-center p-6 rounded-xl shadow-sm bg-[var(--background)]">
          <Image src="/icons/SessionTime.svg" alt="Session Time" width={190} height={200} />
          <p className="mt-4 font-semibold text-[20px] bg-gradient-to-r from-[#FFC757] to-[#EB5E55] bg-clip-text text-transparent">
            5Min Avg. Session time
          </p>
        </div>
      </div>

      {/* About 
      
      <div className="mt-20 w-full max-w-3xl text-center">
         Heading 
        <h2 className="mt-6 text-[40px] font-bold leading-tight">
          <span className="text-[var(--foreground)]">About </span>
          <span className="gradient-text">TanawPH</span>
        </h2>

        Paragraph
        <p className="mt-6 text-[16px] text-gray-500">
          <span className="gradient-text font-semibold">TanawPH</span> is a youth-led platform that helps Filipinos stay
          informed and safe online. We provide verified civic information, tools, and
          resources that strengthen Media and Information Literacy (MIL) to fight
          misinformation and digital dangers.
        </p>
      </div>
      */}
      {/* What We Offer */}
      <div className="mt-20 w-full max-w-5xl">
        {/* Heading 
        <h2 className="text-[32px] font-bold text-[var(--foreground)] text-center mb-12">
          What we offer
        </h2>
        */}
       <div className="flex flex-col gap-16">
        {[
          {
            title: "Government & Country information",
            desc: "Verified profiles of public officials, and updates on current national issues and political happenings, all in one trusted space.",
            src: "/icons/Offer1.svg",
          },
          {
            title: "MIL Resources",
            desc: "Ready to share and print infographics, History of digital dangers and play interactive MIL games to help youth spot fake news and understand media better online and offline.",
            src: "/icons/Offer2.svg",
          },
          {
            title: "Fact Check Tools",
            desc: "Easy to digest fact-checks on viral misinformation, plus tools to verify images, videos, and text.",
            src: "/icons/Offer3.svg",
          },
          {
            title: "Youth Empowerment",
            desc: "A safe discussion space where youth share thoughts and experiences. And a process to make their voice heard, recognized, and supported.",
            src: "/icons/Offer4.svg",
          },
          {
            title: "Tawi",
            desc: "An AI assistant that helps you navigate the platform, read content aloud, customize your experience, and a bot you can to talk to for help in MIL.",
            src: "/icons/Offer5.svg",
          },
        ].map((item, index) => {
          const isEven = index % 2 === 0;
          return (
            <div
              key={index}
              className={`flex flex-col items-center text-center gap-6 
              md:flex-row md:items-center md:gap-12 
              ${isEven ? "md:flex-row" : "md:flex-row-reverse"}`}
            >

            {/* Text Section */}
            <div
              className={`max-w-xl 
                ${isEven ? "md:text-left" : "md:text-right"} text-center md:text-inherit`}
            >
              <h3 className="font-semibold text-2xl md:text-3xl gradient-text leading-snug">
                {item.title}
              </h3>
              <p className="text-lg md:text-xl text-gray-600 mt-4 leading-relaxed">
                {item.desc}
              </p>
            </div>

            {/* Image Section */}
            <div className="flex-shrink-0">
              <Image
                src={item.src}
                alt={item.title}
                width={300}
                height={300}
                className="w-40 h-40 md:w-80 md:h-80"
              />
            </div>
          </div>
          );
        })}
      </div>
      </div>

      {/* How We Keep It 100% Verified Section */}
        <div className="mt-20 w-full max-w-5xl text-left">
          <h2 className="text-[32px] font-bold text-[var(--foreground)] text-center mb-12">
            How We Keep It <br /> 100% Verified
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Box 1 */}
            <div className="gradient-box flex items-start gap-4">
              <Image src="/icons/Research.svg" alt="Research" width={60} height={60} />
              <div>
                <h3 className="font-semibold text-lg drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)]">
                  Research
                </h3>
                <p className="text-sm mt-1 drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)]">
                  Our team gathers information only from credible sources like government sites, news, and public records.
                </p>
              </div>
            </div>

            {/* Box 2 */}
            <div className="gradient-box flex items-start gap-4">
              <Image src="/icons/Verification.svg" alt="Verification" width={100} height={100} />
              <div>
                <h3 className="font-semibold text-lg drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)]">
                  Verification
                </h3>
                <p className="text-sm mt-1 drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)]">
                  Every fact is double-checked by our head researchers to confirm accuracy.
                </p>
              </div>
            </div>

            {/* Box 3 */}
            <div className="gradient-box flex items-start gap-4">
              <Image src="/icons/Simplified.svg" alt="Simplified" width={100} height={100} />
              <div>
                <h3 className="font-semibold text-lg drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)]">
                  Simplified for You
                </h3>
                <p className="text-sm mt-1 drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)]">
                  We rewrite complex data into clear, easy-to-read summaries without losing accuracy.
                </p>
              </div>
            </div>

            {/* Box 4 */}
            <div className="gradient-box flex items-start gap-4">
              <Image src="/icons/Citation.svg" alt="Citation" width={100} height={100} />
              <div>
                <h3 className="font-semibold text-lg drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)]">
                  Citation
                </h3>
                <p className="text-sm mt-1 drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)]">
                  Each piece of information comes with a source link so you can check it yourself.
                </p>
              </div>
            </div>

            {/* Box 5 */}
            <div className="gradient-box flex items-start gap-4">
              <Image src="/icons/Updates.svg" alt="Regular Updates" width={100} height={100} />
              <div>
                <h3 className="font-semibold text-lg drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)]">
                  Regular Updates
                </h3>
                <p className="text-sm mt-1 drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)]">
                  We keep track of changes and update the platform so you’re always looking at the latest information.
                </p>
              </div>
            </div>
          </div>
        </div>

      {/* Volunteer Section */}
      <div className="mt-32 w-full max-w-5xl mx-auto px-4 text-center">
        {/* Heading */}
        <h2 className="text-[32px] font-bold mb-4">
          <span className="text-[#212429]">Be a </span>
          <span className="text-transparent bg-clip-text gradient-text">TanawPH</span>
          <span className="text-[#212429]"> Volunteer</span>
        </h2>

        {/* Subtext */}
        <p className="text-gray-600 text-lg mb-6">
          Join us in the fight against misinformation and digital dangers. As a volunteer, you’ll help create resources, share verified information, and empower fellow youth to think critically.
        </p>

        {/* CTA */}
        <p className="text-[20px] font-semibold text-transparent bg-clip-text gradient-text mb-6">
          Stand with us—be part of the change today!
        </p>

        {/* Button */}
        <button className="bg-white text-transparent bg-clip-text gradient-text rounded-full shadow-lg px-8 py-3 font-semibold hover:scale-105 transition-transform">
          Become a Volunteer
        </button>
      </div>



    </main>
  );
}
