import { countForkedRepos } from "@/lib/utils"
import { Repository } from "@/types"

const ForkedRepos = ({repos}: {repos: Repository[]}) => {
    console.log(countForkedRepos(repos))
  return (
    <div>ForkedRepos</div>
  )
}
export default ForkedRepos