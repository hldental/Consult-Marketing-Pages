export const metadata = {
  title: "Surgery & Prosthetic Consultation Request",
  description: "A consultation request page for patients exploring missing teeth, extractions, implants, dentures, or full-arch replacement.",
};

const questions = [
  "Are you currently missing 6 or more teeth?",
  "Are you mainly looking for a long-term solution for missing, failing, or severely damaged teeth?",
  "Are you considering removing teeth and replacing them with a full-arch solution?",
  "Do you have a budget in mind for treatment?",
  "Would you like our team to call you to discuss your options and next steps?",
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="text-xs font-semibold uppercase tracking-[0.28em] text-orange-400/80">{children}</p>;
}

function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`rounded-3xl border border-zinc-700 bg-zinc-900 shadow-xl ${className}`}>{children}</div>;
}

export default function SurgeryProstheticConsultLandingPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="border-b border-zinc-700 bg-gradient-to-b from-stone-100 to-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center rounded-full border border-amber-200 bg-amber-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-amber-700">
              Surgery & Prosthetic Consultation
            </div>
            <h1 className="mt-8 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Missing teeth, failing teeth, or wondering if full-arch is right for you?
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
              Answer a few quick questions so our team can understand your situation and call you to discuss whether a surgery/prosthetic consultation is the right next step.
            </p>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-zinc-300">
              This page is designed for patients exploring implants, dentures, extractions, full-arch replacement, or larger restorative solutions.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#consult-form" className="rounded-2xl bg-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5">
                Answer the Questions
              </a>
            </div>
          </div>
          <Card className="p-8 lg:p-10">
            <SectionLabel>What happens next</SectionLabel>
            <div className="mt-5 space-y-5">
              <div><p className="text-sm font-semibold text-white">1. Complete the short form</p><p className="mt-1 text-sm leading-6 text-stone-600">Tell us about missing teeth, full-arch interest, and budget range.</p></div>
              <div><p className="text-sm font-semibold text-white">2. We review your answers</p><p className="mt-1 text-sm leading-6 text-stone-600">Our team looks at your goals and helps determine the right next step.</p></div>
              <div><p className="text-sm font-semibold text-white">3. We call you</p><p className="mt-1 text-sm leading-6 text-stone-600">If it looks like a fit, we will contact you to schedule your consultation.</p></div>
            </div>
          </Card>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8" id="consult-form">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <Card className="p-8 lg:p-10">
            <SectionLabel>Who this page is for</SectionLabel>
            <h2 className="mt-4 text-2xl font-bold">A simple first step for bigger treatment conversations.</h2>
            <p className="mt-4 text-base leading-7 text-zinc-300">This page is intended for patients who may need advanced tooth replacement or surgical care and want to know what options may be available.</p>
          </Card>

          <Card className="p-8 lg:p-10">
            <SectionLabel>Request a call</SectionLabel>
            <h2 className="mt-4 text-2xl font-bold">Answer a few questions below.</h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-300">If it looks like you may be a fit for our surgery/prosthetic clinic, our team will call you to discuss your options and schedule your consultation.</p>

             <form className="mt-8 grid gap-6" action="https://formspree.io/f/YOUR_ID" method="POST">
              <div className="grid gap-6">
                {questions.map((question, index) => (
                  <div key={question} className="rounded-2xl border border-zinc-700 p-5">
                    <p className="text-sm font-semibold text-white">{index + 1}. {question}</p>
                    <div className="mt-4 flex gap-6">
                      <label className="flex items-center gap-2 text-sm text-zinc-300"><input type="radio" name={`q${index + 1}`} value="Yes" required /> Yes</label>
                      <label className="flex items-center gap-2 text-sm text-zinc-300"><input type="radio" name={`q${index + 1}`} value="No" required /> No</label>
                    </div>
                  </div>
                ))}
              </div>

              <label className="grid gap-2 text-sm font-medium text-stone-800">
                If you have a budget in mind, what range feels realistic to you?
                <select name="budget_range" className="rounded-2xl border border-stone-300 px-4 py-3 outline-none transition focus:border-stone-500" defaultValue="">
                  <option value="" disabled>Select one</option>
                  <option value="Under $5,000">Under $5,000</option>
                  <option value="$5,000-$10,000">$5,000-$10,000</option>
                  <option value="$10,000-$20,000">$10,000-$20,000</option>
                  <option value="$20,000+">$20,000+</option>
                  <option value="Need to discuss options">Need to discuss options</option>
                </select>
              </label>

              <div className="grid gap-5 sm:grid-cols-2">
                <label className="grid gap-2 text-sm font-medium text-stone-800">Full Name
                  <input name="name" type="text" required className="rounded-2xl border border-stone-300 px-4 py-3 outline-none transition focus:border-stone-500" placeholder="Jane Smith" />
                </label>
                <label className="grid gap-2 text-sm font-medium text-stone-800">Phone
                  <input name="phone" type="tel" required className="rounded-2xl border border-stone-300 px-4 py-3 outline-none transition focus:border-stone-500" placeholder="(555) 555-5555" />
                </label>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <label className="grid gap-2 text-sm font-medium text-stone-800">Email
                  <input name="email" type="email" className="rounded-2xl border border-stone-300 px-4 py-3 outline-none transition focus:border-stone-500" placeholder="jane@example.com" />
                </label>
                <label className="grid gap-2 text-sm font-medium text-stone-800">Best Time to Call
                  <select name="best_time" className="rounded-2xl border border-stone-300 px-4 py-3 outline-none transition focus:border-stone-500" defaultValue="">
                    <option value="" disabled>Select one</option>
                    <option value="Morning">Morning</option>
                    <option value="Afternoon">Afternoon</option>
                    <option value="Evening">Evening</option>
                  </select>
                </label>
              </div>

              <label className="grid gap-2 text-sm font-medium text-stone-800">Anything you want us to know before we call?
                <textarea name="notes" rows={4} className="rounded-2xl border border-stone-300 px-4 py-3 outline-none transition focus:border-stone-500" placeholder="Optional" />
              </label>

              <button type="submit" className="rounded-2xl bg-orange-500 px-6 py-4 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5">
                Request My Consultation Call
              </button>
            </form>
          </Card>
        </div>
      </section>
    </main>
  );
}
