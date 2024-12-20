// import Actors from "./Actors";
import "./App.css";
import Player from "./Player";
// import Family from "./Family";
// import Todo from './Todo'

function App() {
  // const image = 'https://i.ibb.co.com/mb4fw7b/small-6-Pg-OGc-Om-I2-Whats-App-Image-2023-06-07-at-5-32-36-PM.jpg';
  // const description = 'this is description';

  // const actors = [
  //   "Foyez Ahamed",
  //   "Nesar Ahamed",
  //   "Salay Ahamed",
  //   "Salman Saif",
  //   "Abdullah Tahsin",
  // ];

  // const familyMembers = [
  //   { id: 1, name: "Foyez Ahmaed", age: 26, wifeName: "Suraiya Zaman Konok" },
  //   { id: 2, name: "Nesar Ahamed", age: 30, wifeName: "Tamanna Islam Honey" },
  //   { id: 3, name: "Salay Ahamed", age: 33, wifeName: "Umme Kulsum Moni" },
  // ];

  // function for event handler //
  // const addWork = () =>{
  //   alert('Ami konok re Love kori');
  // }

  // const calculation = (num) =>{
  //   alert(num * 5);
  // }

  return (
    <>
      {/* mapping data from object */}
      {/* {familyMembers.map((member) => (
        <Family key={member.id} member={member}></Family>
      ))} */}
      {/* mapping data from object */}

      {/* ............................. */}

      {/* mapping data from array */}

      {/* {actors.map((actor) => (
        <Actors key={actor} actor={actor}></Actors>
      ))} */}

      {/* mapping data from array */}

      {/* others file component import */}

      {/* <Todo task="Ami ghumabo 10:30" isCompleted={false} />

   <Todo task="Ami react shikhbo" isCompleted={true} /> */}

      {/* others file component import */}

      {/* <img className='w-[100px] h-[100px] mt-5 mx-auto rounded-md' src={image} alt={description} /> */}

      {/* <ChildComponet/>

   <Device name="Mobile" price="20000" />
   <Device name="Laptop" price="50000"/>
   <Device name="Tablet" price="30000"/> */}


   {/* event handler */}

   {/* <div className="mt-5 text-center border border-red-200 max-w-96 mx-auto p-8">
     
   <div className="flex justify-between">
   <button onClick={addWork} className="bg-red-600 px-4 py-2 text-white rounded-md font-bold"> Add Work </button>

<button onClick={() => calculation(5)} className="bg-red-600 px-4 py-2 text-white rounded-md font-bold"> Calculation </button>
   </div>

   </div> */}



   {/* practice react useState hooks */}
   <Player />
   {/* practice react useState hooks */}
   

    </>
  );
}

// function ChildComponet(){

//   // share all logic here //
//   const mySelf = {
//     name : "Foyez Ahamed",
//     fatherName : "Nurul Amin",
//     motherName : "Arafater Nesa",
//     age : 26
//   }

//   // style by object //
//   const descriptionStyle = {
//     border: '2px solid purple',
//     padding: '10px',
//     maxWidth: '70%',
//     margin: '20px auto'
//   }

//   return(
//     <div className='mt-5 text-center'>

//       <div className='myInfoStyle'>
//       <h1>Assalamualaikum, This is {mySelf.name}. My Father name is {mySelf.fatherName}. My mother name is {mySelf.motherName}. My age is {mySelf.age}.</h1>
//       </div>

//       <div className='mt-5' style={descriptionStyle}>
//         <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum aliquam molestiae alias sapiente nisi, optio sit voluptatibus explicabo quos voluptatem nobis a veritatis cupiditate quo hic perferendis, atque, ipsum sequi quia maxime repellendus est soluta animi. Temporibus ad asperiores neque?</p>
//       </div>

//     </div>
//   )
// }

// function for basic props(properties) drilling //

// function Device(props){

//   // console.log(props);

//   const {name, price} = props; // object destructuring //

//   return(
//     <>
//     <div>
//       {/* <p className='text-center'> This device name is : {props?.name}. This device price is : {props?.price}</p> */}

//       <p className='text-center'> This device name is : {name}. This device price is : {price}</p>
//     </div>
//     </>
//   )
// }

export default App;
