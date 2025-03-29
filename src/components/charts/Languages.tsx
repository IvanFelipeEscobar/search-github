import { countLanguages } from '@/lib/utils'
import { Repository } from '@/types'
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '../ui/chart'
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from 'recharts'

const Languages = ({ repos }: { repos: Repository[] }) => {
  const languages = countLanguages(repos)

  const chartConfig = {
    language: {
      label: 'Language',
      color: '#25aaec',
    },
  } satisfies ChartConfig

  return (
    <div>
      <h2 className="text-2xl text-center mb-4 font-semibold">Languages</h2>
      <ChartContainer config={chartConfig} className="h-100 w-3/4 md:w-full">
        <BarChart accessibilityLayer data={languages}>
          <CartesianGrid vertical={false} />
          <XAxis dataKey={'language'} tickLine={false} tickMargin={10} />
          <YAxis dataKey={'count'} />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Bar dataKey={'count'} fill='var(--color-language)' radius={4} />
        </BarChart>
      </ChartContainer>
    </div>
  )
}
export default Languages
