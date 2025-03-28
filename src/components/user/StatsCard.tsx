import { Card, CardDescription, CardTitle } from '../ui/card'

const StatsCard = ({ title, count }: { title: string; count: number }) => {
  return (
    <Card className="flex flex-row items-center justify-between p-6">
      <CardTitle>{title}</CardTitle>
      <CardDescription>{count}</CardDescription>
    </Card>
  )
}
export default StatsCard
