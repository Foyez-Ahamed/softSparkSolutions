import './App.css'

function App() {

  const image = 'https://i.ibb.co.com/mb4fw7b/small-6-Pg-OGc-Om-I2-Whats-App-Image-2023-06-07-at-5-32-36-PM.jpg';
  const description = 'this is description';

  return (
   <>

   <h1 className='text-3xl font-bold underline text-center'>Hello world</h1>

   <img className='w-[600px] mt-5 mx-auto rounded-md' src={image} alt={description} />

   <ChildComponet/>

   </>
  )
}

function ChildComponet(){

  // share all logic here //
  const mySelf = {
    name : "Foyez Ahamed",
    fatherName : "Nurul Amin",
    motherName : "Arafater Nesa",
    age : 26
  }

  return(
    <div className='mt-5 text-center'>

      <div className='myInfoStyle'>
      <h1>Assalamualaikum, This is {mySelf.name}. My Father name is {mySelf.fatherName}. My mother name is {mySelf.motherName}. My age is {mySelf.age}.</h1>
      </div>

    </div>
  )
}

export default App


