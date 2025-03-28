import { GET_USER } from '@/queries'
import { type UserData } from '@/types'
import { useQuery } from '@apollo/client'
import { toast } from 'sonner'
import UserCard from './UserCard'
import StatsContainer from './StatsContainer'
import ForkedRepos from '../charts/ForkedRepos'

const UserProfile = ({ userName }: { userName: string }) => {
  const { data, loading, error } = useQuery<UserData>(GET_USER, {
    variables: { login: userName },
  })
  if (loading) return <div>loading...</div>
  if (error || !data) {
    if (error) toast(error.message)
    return <div className="text-2xl text-center">Failed to find user...</div>
  }

  const {
    avatarUrl,
    name,
    bio,
    url,
    repositories,
    followers,
    following,
    gists,
  } = data.user
  return (
    <section id="user-profile">
      <UserCard avatarUrl={avatarUrl} name={name} bio={bio} url={url} />
      <StatsContainer
        totalRepos={repositories.totalCount}
        followers={followers.totalCount}
        following={following.totalCount}
        gists={gists.totalCount}
      />
      {repositories.totalCount > 0 && (
        <div className="grid md:grid-cols-2 gap-4">
          <ForkedRepos repos={repositories.nodes}></ForkedRepos>
        </div>
      )}
    </section>
  )
}
export default UserProfile
