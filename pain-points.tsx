import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const painPoints = [
  "Overwhelming UI and features for new or beginner traders and investors",
  "Higher cost of call & trade- 50 rupees per trade",
  "Only push notification, no SMS alerts",
  "No extensive research paper to its users"
]

export function PainPoints() {
  return (
    <section id="pain-points" className="py-16 px-4 md:py-24">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold text-white mb-8">
          Major pain points from user feedback online:
        </h2>
        <div className="space-y-4">
          {painPoints.map((point, index) => (
            <Card key={index} className="bg-transparent">
              <CardContent className="p-6">
                <p className="text-lg text-gray-200">
                  {index + 1}. {point}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

