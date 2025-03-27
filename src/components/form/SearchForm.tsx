import { type FormEvent, useState } from 'react'
import { toast } from 'sonner'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Button } from '../ui/button'

type SearchProps = {
  userName: string
  setUserName: React.Dispatch<React.SetStateAction<string>>
}
const SearchForm = ({ userName, setUserName }: SearchProps) => {
  const [inputText, setInputText] = useState(userName)

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (inputText === '') {
      toast('please enter a valid user name')
      return
    }
    setUserName(inputText)
  }

  return (
    <form
      onSubmit={handleSearch}
      className="flex items-center gap-x-2 w-full lg:w-1/3 mb-8"
    >
        <Label htmlFor='search' className='sr-only'>Search</Label>
        <Input type='search' id='search' value={inputText} onChange={(e)=>setInputText(e.target.value)} placeholder='Search Github Users...' className='flex-grow bg-background'/>
        <Button content='' type='submit'>Submit</Button> 
    </form>
  )
}
export default SearchForm
