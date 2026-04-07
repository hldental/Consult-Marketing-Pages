export const metadata = {
  title: "Consult Request Pages",
  description: "Choose the type of consultation request page you want to use.",
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-stone-50 px-6 py-16 text-stone-900">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold tracking-tight">Consult Marketing Pages</h1>
        <p className="mt-4 max-w-2xl text-lg leading-8 text-stone-700">
          This package includes two separate landing pages: one for surgery/prosthetic consults and one for general clinic consults.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <a href="/surgery-consult" className="rounded-3xl border border-stone-200 bg-white p-8 shadow-xl transition hover:-translate-y-0.5">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">Page 1</p>
            <h2 className="mt-3 text-2xl font-bold">Surgery / Prosthetic Consult</h2>
            <p className="mt-3 text-sm leading-6 text-stone-600">Missing teeth, extractions, implants, dentures, and full-arch screening.</p>
          </a>
          <a href="/general-consult" className="rounded-3xl border border-stone-200 bg-white p-8 shadow-xl transition hover:-translate-y-0.5">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">Page 2</p>
            <h2 className="mt-3 text-2xl font-bold">General Clinic Consult</h2>
            <p className="mt-3 text-sm leading-6 text-stone-600">Pain, broken teeth, limited treatment, general evaluation, and unsure where to start.</p>
          </a>
        </div>
      </div>
    </main>
  );
}
