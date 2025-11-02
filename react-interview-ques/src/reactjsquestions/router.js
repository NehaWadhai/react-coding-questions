import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const RouterComponent = () =>{
  const age = [6,9,1,67,5,4]
// const navigate = useNavigate()
const name = ['neha', 'abni', 'rohan', 'soni', 'moni', 'toni']

const [sortname, setNameSorted] = useState(name)
const [sortAge, setAgeSorted] = useState(age)
const navigate = useNavigate()
  const onClickSortName = () =>{
    setNameSorted(name.sort())
    navigate('/name')
  }

  const onClickSortAge = () =>{
    setAgeSorted(age.sort())
    navigate('/age')
  }
    return(
        <div style={{display: 'flex'}}>
        <div> Age:
        {sortAge.map((ageValue,index) => {
          return(<div>{ageValue}</div>)
        })}
        </div>
       <div>Names:
       {sortname.map((nameValue,index) => {
         return(<div>{nameValue}</div>)
       })}
       </div>
       <button onClick={onClickSortName}>Sort Name</button>
       <button onClick={onClickSortAge}>Sort Age</button>
       </div>
 
    )
}