import { countStarredRepos } from '@/lib/utils'
import { Repository } from '@/types'
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '../ui/chart'
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from 'recharts'

const StarredRepos = ({ repos }: { repos: Repository[] }) => {
  const starred = countStarredRepos(repos)
  const chartConfig = {
    repo: {
      label: 'Repositories',
      color: '#4be625',
    },
  } satisfies ChartConfig

  return (
    <div>
      <h2 className="text-2xl font-semibold text-center mb-4">
        Popular Repositories
      </h2>
      <ChartContainer config={chartConfig} className="h-100 w-3/4 md:w-full">
        <BarChart accessibilityLayer data={starred}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey={'repo'}
            tickLine={false}
            tickMargin={10}
            tickFormatter={(val) => val.slice(0, 10)}
          />
          <YAxis dataKey={'stars'} />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Bar dataKey={'stars'} fill='var(--color-repo' radius={4} />
        </BarChart>
      </ChartContainer>
    </div>
  )
}
export default StarredRepos
