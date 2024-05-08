function BookMarksComponents({addBookMarks}) {
    console.log(addBookMarks);
    const {title} = addBookMarks;
  return (
    <div>
        <h3 className="p-3 bg-slate-200 mb-1 ml-2 rounded-lg mt-1 text-base">{title}</h3>
    </div>
  )
}


export default BookMarksComponents
