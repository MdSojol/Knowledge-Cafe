import BookMarksComponents from "./BookMarksComponents";
export default function BookMark({addBookMarks,spentTime}) {
  // const {title} =booksingles;
  // console.log(addBookMarks)
  // const {title} = addBookMarks;
  return (
    
    <div className="md:w-1/3"> 
    <div>
      <h1 className="p-3 bg-slate-200 mb-3 ml-2 rounded-lg  font-bold text-1xl text-center">Spent time on read : {spentTime} min</h1>
    </div>
      <div>
        <h1 className="p-3 bg-slate-200 mb-3 ml-2 rounded-lg mt-6 font-bold text-2xl text-center">BookMark: {addBookMarks.length}</h1>
        <div className="">
          {
           addBookMarks.map((newBookMarks,npc) => <BookMarksComponents key={npc} addBookMarks={newBookMarks}></BookMarksComponents>)
          }
        </div>
        
      </div>
      
    </div>
  )
}
