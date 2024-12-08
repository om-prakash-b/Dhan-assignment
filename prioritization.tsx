import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const prioritizationData = [
  {
    feature: "In App Navigation guide",
    impact: 4,
    effort: 1,
    score: 4.0
  },
  {
    feature: "Sentiment analysis score",
    impact: 5,
    effort: 3,
    score: 1.7
  },
  {
    feature: "Star feature icon",
    impact: 4,
    effort: 3,
    score: 1.3
  },
  {
    feature: "SMS alerts/notification",
    impact: 3,
    effort: 1,
    score: 3.0
  }
]

export function Prioritization() {
  return (
    <section id="prioritization" className="py-16 px-4 md:py-24">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold text-white mb-8">Prioritization Matrix</h2>
        <div className="rounded-lg">
          <Table className="bg-transparent">
            <TableHeader>
              <TableRow>
                <TableHead className="text-white">FEATURE</TableHead>
                <TableHead className="text-white">IMPACT</TableHead>
                <TableHead className="text-white">EFFORT</TableHead>
                <TableHead className="text-white">SCORE</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {prioritizationData.map((item) => (
                <TableRow key={item.feature}>
                  <TableCell className="font-medium text-white">{item.feature}</TableCell>
                  <TableCell className="text-gray-200">{item.impact}</TableCell>
                  <TableCell className="text-white">{item.effort}</TableCell>
                  <TableCell className="text-gray-200">{item.score}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  )
}

