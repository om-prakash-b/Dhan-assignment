export function LandingHero() {
  return (
    <section id="home" className="relative pt-24 pb-16 px-4 md:pt-32 md:pb-24">
      <div className="container mx-auto max-w-5xl">
        <h1 className="text-green-400 text-3xl md:text-4xl font-bold mb-8">
          Dhan assignment:
        </h1>
        <div className="space-y-8 text-white">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">Task:</h2>
            <p className="text-lg md:text-xl leading-relaxed">
              Download the Dhan application and conduct an in-depth analysis. Imagine you are the Product Manager (PM) of Dhan: identify areas for improvement in the app, explaining what changes you would prioritize and why. Provide a detailed rationale for each suggestion, focusing on enhancing user experience, engagement, and overall app functionality.
            </p>
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              I have broken it down into the following:
            </h2>
            <ol className="list-decimal list-inside space-y-4 text-lg md:text-xl">
              <li>The Reasons why users like Dhan</li>
              <li>Product and Features in Dhan</li>
              <li>If I were a PM at Dhan what feature/product would I prioritize and why?</li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}

