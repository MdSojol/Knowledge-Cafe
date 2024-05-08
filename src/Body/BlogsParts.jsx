import { useEffect, useState } from "react";
import BlogElements from './BlogElements';
export default function BlogsParts({handleAddingBookMark, handleTimeSpent }) {
    const [importData, setDataImports] = useState([])
    
    useEffect(()=>{
        fetch('DataBase.json')
        .then(ref=>ref.json())
        .then(data => setDataImports(data))
    },[]);
    
  return (
    <div className="md:w-2/3">
        <h1>Blogs Post: {importData.length}</h1>
        {/* <BlogElements></BlogElements> */} 

        {
            importData.map(importDataSingle => <BlogElements key={importDataSingle.id} importDataSingle={importDataSingle}
              handleAddingBookMark={handleAddingBookMark} handleTimeSpent={handleTimeSpent} ></BlogElements>)
        }
    </div>
  )
}
