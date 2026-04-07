export default function ThankYouGeneralPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-stone-50 px-6 text-stone-900">
      <div className="max-w-xl rounded-3xl border border-stone-200 bg-white p-10 text-center shadow-xl">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-600/80">Thank you</p>
        <h1 className="mt-4 text-4xl font-bold">Your request was submitted.</h1>
        <p className="mt-4 text-base leading-7 text-stone-700">Our team will review your information and contact you if general care looks like the right place to start.</p>
        <a href="/general-consult" className="mt-8 inline-block rounded-2xl bg-stone-900 px-6 py-3 text-sm font-semibold text-white">Return to the page</a>
      </div>
    </main>
  );
}
