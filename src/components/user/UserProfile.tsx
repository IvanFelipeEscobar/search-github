import { GET_USER } from '@/queries'
import { type UserData } from '@/types'
import { useQuery } from '@apollo/client'
import { toast } from 'sonner'
import UserCard from './UserCard'

const UserProfile = ({ userName }: { userName: string }) => {
  const { data, loading, error } = useQuery<UserData>(GET_USER, {
    variables: { login: userName },
  })
  if (loading) return <div>loading...</div>
  if (error || !data) {
    if (error) toast(error.message)
    return <div className="text-2xl text-center">Failed to find user...</div>
  }

  const {avatarUrl, name, bio, url} = data.user
  return (
    <section id="user-profile">
    <UserCard avatarUrl={avatarUrl} name={name} bio={bio} url={url}/>
    </section>
  )
}
export default UserProfile
