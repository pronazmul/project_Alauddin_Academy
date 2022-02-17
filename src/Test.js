import { useSearchParams } from 'react-router-dom'

export default function Test() {
  const [searchParam, setSearchParam] = useSearchParams()
  const handleChanage = (e) => {
    console.log(e.target.value)
    setSearchParam({ name: e.target.value })
  }

  return (
    <div>
      <h1>This is from div Component</h1>

      <hr />
      <p> {searchParam.get('name')} </p>
      <input type='text' onChange={handleChanage} />
    </div>
  )
}
