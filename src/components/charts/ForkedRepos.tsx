import { countForkedRepos } from '@/lib/utils'
import { Repository } from '@/types'
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '../ui/chart'
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from 'recharts'

const ForkedRepos = ({ repos }: { repos: Repository[] }) => {
  const forked = countForkedRepos(repos)

  const chartConfig = {
    repo: {
      label: 'Repository',
      color: '#d8de3c',
    },
  } satisfies ChartConfig
  return (
    <div>
      <h2 className="font-semibold text-center text-2xl mb-4">
        Forked Repositories
      </h2>
      <ChartContainer config={chartConfig} className="h-100 w-3/4 md:w-full">
        <BarChart accessibilityLayer data={forked}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey={'repo'}
            tickLine={false}
            tickMargin={10}
            tickFormatter={(val) => val.slice(0, 10)}
          />
          <YAxis dataKey={'count'} />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Bar dataKey={'count'} fill="var(--color-repo)" radius={4} />
        </BarChart>
      </ChartContainer>
    </div>
  )
}
export default ForkedRepos
