import { useState } from 'react'
import './App.css'
import Header from './Header'
// import FastComponents from './FastComponents';
import BlogsPart from './Body/BlogsParts'
import BookMark from './Body/BookMark'

function App() {
  
  const [addBookMarks,SetBookmarks] =useState([]);
  const [spentTime, SetSpenTime] = useState(0);

   const handleAddingBookMark = blog =>{
    // console.log('BookMark Adding blogs')
    const handleconst = [...addBookMarks,blog];
    SetBookmarks(handleconst)
   }

   const handleTimeSpent = time =>{
    console.log('thanks spent a times', time);
    const timebook = spentTime + time;
    SetSpenTime(timebook)

   }
  //  console.log(addBookMarks)
  


  return (
    <>
      <div className='w-9/12 mx-auto'>
        <Header></Header>
      </div>
      <div className='mx-14'>
        <div className='md:flex my-6  w-9/12 mx-auto'>
          <BlogsPart handleAddingBookMark={handleAddingBookMark} handleTimeSpent={handleTimeSpent} ></BlogsPart>
          <BookMark addBookMarks={addBookMarks} spentTime={spentTime}></BookMark>
          
        </div>
      </div>
    </>
  )
}

export default App
