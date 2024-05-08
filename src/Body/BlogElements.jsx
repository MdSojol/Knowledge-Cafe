import PropTypes from 'prop-types';
import Icons from '../assets/images/Vector.png'

export default function BlogElements({importDataSingle, handleAddingBookMark, handleTimeSpent}) {
//  console.log(importDataSingle);
 const {author_image,author,posted_date,reading_time,title,hashtags} = importDataSingle;
//  const gero  = 0;
 const towHandlearrun = () =>{
    handleAddingBookMark(importDataSingle);

 }
  return (
    <div>
        <div className='mb-14'>
            <img className='rounded-xl w-full' src={importDataSingle.cover} alt="" />
            <div className='flex justify-between'>
                <div className='flex my-5'>
                    <div style={{width:'60px', height:'60px'}} className=' truncate rounded-full border-solid border-2 border-slate-300'>
                    <img src={author_image} alt="" />
                    </div>
                    <div className='ml-5'>
                        <h3>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className='place-content-center '>
                    <div onClick={towHandlearrun} className='flex cursor-pointer'>
                    <h1 className='mr-2'>{reading_time} min red  </h1>
                    <img className='' src={Icons} alt="" />
                    </div>
                    
                </div>
            </div>
            
            <div className='mb-1'>
                <h1 className='text-2xl mb-2'>{title}</h1>
                {
                    hashtags.map((hashtag, idx) => <span key={idx}> <a className='text-slate-500 pr-2 ' href=''>#{hashtag} </a> </span>)
                }
            </div>
            <a onClick={()=>handleTimeSpent(reading_time)} className='text-blue-700 underline underline-offset-1 cursor-pointer' >Mark as read</a> 
        </div>
    </div>
  )
}

BlogElements.propTypes ={
    importDataSingle:PropTypes.object.isRequired
}

