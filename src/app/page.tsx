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
        Don’t scroll blind. <br /> Take back your power.
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

      {/* How We Keep It 100% Verified Section */}
<div className="mt-20 w-full max-w-5xl text-left">
  <h2 className="text-[32px] font-bold text-[var(--foreground)] text-center mb-12">
    How We Keep It <br /> 100% Verified
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {/* Box 1 */}
    <div className="flex items-start gap-4 p-6 rounded-2xl bg-gradient-to-r from-[#FFC757] to-[#EB5E55] text-[var(--text-white)]">
      <Image src="/icons/Research.svg" alt="Research" width={60} height={60} />
      <div>
        <h3 className="font-semibold text-lg drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)]">Research</h3>
        <p className="text-sm mt-1 drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)]">
          Our team gathers information only from credible sources like government sites, news, and public records.
        </p>
      </div>
    </div>

    {/* Box 2 */}
    <div className="flex items-start gap-4 p-6 rounded-2xl bg-gradient-to-r from-[#FFC757] to-[#EB5E55] text-[var(--text-white)]">
      <Image src="/icons/Verification.svg" alt="Verification" width={60} height={60} />
      <div>
        <h3 className="font-semibold text-lg drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)]">Verification</h3>
        <p className="text-sm mt-1 drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)]">
          Every fact is double-checked by our head researchers to confirm accuracy.
        </p>
      </div>
    </div>

    {/* Box 3 */}
    <div className="flex items-start gap-4 p-6 rounded-2xl bg-gradient-to-r from-[#FFC757] to-[#EB5E55] text-[var(--text-white)]">
      <Image src="/icons/Simplified.svg" alt="Simplified" width={60} height={60} />
      <div>
        <h3 className="font-semibold text-lg drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)]">Simplified for You</h3>
        <p className="text-sm mt-1 drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)]">
          We rewrite complex data into clear, easy-to-read summaries without losing accuracy.
        </p>
      </div>
    </div>

    {/* Box 4 */}
    <div className="flex items-start gap-4 p-6 rounded-2xl bg-gradient-to-r from-[#FFC757] to-[#EB5E55] text-[var(--text-white)]">
      <Image src="/icons/Citation.svg" alt="Citation" width={60} height={60} />
      <div>
        <h3 className="font-semibold text-lg drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)]">Citation</h3>
        <p className="text-sm mt-1 drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)]">
          Each piece of information comes with a source link so you can check it yourself.
        </p>
      </div>
    </div>

    {/* Box 5 */}
    <div className="flex items-start gap-4 p-6 rounded-2xl bg-gradient-to-r from-[#FFC757] to-[#EB5E55] text-[var(--text-white)]">
      <Image src="/icons/Updates.svg" alt="Regular Updates" width={60} height={60} />
      <div>
        <h3 className="font-semibold text-lg drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)]">Regular Updates</h3>
        <p className="text-sm mt-1 drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)]">
          We keep track of changes and update the platform so you’re always looking at the latest information.
        </p>
      </div>
    </div>
  </div>
</div>
    </main>
  );
}
