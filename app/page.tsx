export default function Home() {
  return (
    <main>
      <section className="relative">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/main_zakop.jpg?height=1080&width=1920')",
            backgroundRepeat: "no-repeat",
            height: "100vh",
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30 z-10" />

        {/* Content */}
        <div className="relative h-screen flex flex-col items-center justify-center text-center text-white z-20 px-4 sm:px-6">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">Claudia & Amine</h1>
          <p className="max-w-md mx-auto mt-4 text-xl text-white/90">
            A celebration of love between an American/Polish stylist and a Moroccan wannabe-musician
          </p>
        </div>
      </section>
    </main>
  )
}

