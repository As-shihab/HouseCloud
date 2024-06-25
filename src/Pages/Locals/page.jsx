import Header  from '../../Components/Default_c/Header'
import { Suspense } from "react"

async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos')
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}
 
export default async function Page() {
  const data = await getData()

  return <main>
    <Header/>
  <table>
    <thead>
      <tr><th>
        title</th>
        <th>USER ID</th>
        
        </tr>

      
    </thead>
    <tbody>
   {
    Object.values(data).map(todo=>{
      return(
        <Suspense fallback={<p>Loading</p>}>
   <tr key={todo.id}>
        <td>{todo.title}</td>
        <td>{todo.id}</td>
      </tr>

        </Suspense>
     
      )
    })
   }
    </tbody>
  </table>
  </main>
}