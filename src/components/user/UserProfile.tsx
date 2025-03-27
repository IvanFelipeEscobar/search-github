const UserProfile = ({ userName }: { userName: string }) => {
  return (
    <section id="user-profile" className="text-2xl font-bold">
      {userName}{' '}
    </section>
  )
}
export default UserProfile
