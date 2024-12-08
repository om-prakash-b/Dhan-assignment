import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const personas = [
  {
    title: "User persona 1: Behind the news trader",
    age: 23,
    behavior: "feels lost with cluttered news",
    needs: "wants to get real update about financials, but struggles to keep up with news.",
    painPoints: "needs personalized financial insights about companies"
  },
  {
    title: "User persona 2: Aspiring Pro trader",
    age: 45,
    behavior: "wants to get started with trading like pro",
    needs: "Wants to become a full time trader and uses the risk management tools to make it bigtime",
    painPoints: "needs a guidance to use learn and use the tools to start applying it to trade"
  }
]

export function Personas() {
  return (
    <section id="personas" className="py-16 px-4 md:py-24">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold text-white mb-8">Personas</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {personas.map((persona) => (
            <Card key={persona.title} className="bg-transparent">
              <CardHeader>
                <CardTitle className="text-xl text-white">{persona.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-white mb-1">Age:</h4>
                  <p className="text-gray-200">{persona.age}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Behavior:</h4>
                  <p className="text-gray-200">{persona.behavior}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Needs:</h4>
                  <p className="text-gray-200">{persona.needs}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Pain points:</h4>
                  <p className="text-gray-200">{persona.painPoints}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

