/* import { useEffect, useState } from "react"

export default function FastComponents() {
    const [importData, setDataImports] = useState([])
    useEffect(()=>{
        fetch('DataBase.json')
        .then(ref=>ref.json())
        .then(data => setDataImports(data))
    },[])

  return (
    <div>
        <div>
        
        {
            importData.map(importDataSingle => console.log(importDataSingle))
        }
        
        </div>        
    </div>
  )
}
 */