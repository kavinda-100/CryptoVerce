import { Input } from "@/components/ui/input"

type SearchProps = {
    searchTerm: string
    setSearchTerm: React.Dispatch<React.SetStateAction<string>>
    placeholder: string
}
const Search = ({ searchTerm, setSearchTerm, placeholder}: SearchProps) => {
  return (
    <div className="w-full">
        <Input 
        placeholder={placeholder} 
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        />
    </div>
  )
}

export default Search