import ProfilePic from'../src/assets/images/profile.png'
export default function Header() {
  return (
    <div className=" border-b-2">

        <div className="flex justify-between my-6 mx-10">
            <h1 className="text-4xl font-bold place-content-center">Knowledge Cafe</h1>
            <img src={ProfilePic} alt="" />
        </div>

    </div>
  )
}
