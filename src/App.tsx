import { useState } from 'react'
import SearchForm from './components/form/SearchForm'
import UserProfile from './components/user/UserProfile'
import { Toaster } from 'sonner'

const App = () => {
  const [userName, setUserName] = useState('quincylarson')
  return (
    <main className="mx-auto max-w-6xl px-8 py-20">
      <SearchForm userName={userName} setUserName={setUserName} />
      <UserProfile userName={userName} />
      <Toaster/>
    </main>
  )
}
export default App
