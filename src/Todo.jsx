// export default function Todo({task}){
//     return(
//         <>
//         <div className="text-center mt-8">
           
//             <ul className="list-disc text-yellow-600">
//                 <li> Task: {task} </li>
//             </ul>

//         </div>
//         </>
//     )
// }


// condition based component render //

// export default function Todo({task, isCompleted}){
//    if(isCompleted){
//     return(
//         <>
//         <div className="text-center mt-8">
           
//             <ul className="list-disc text-yellow-600">
//                 <li> Task: {task} </li>
//             </ul>

//         </div>
//         </>
//     )
//    } else {
//     return(
//         <>
//         <p className="text-red-800 text-center mt-5"> Sorry ! There is no task here</p>
//         </>
//     )
//    }
// }


// conditional rendering with ternary operator //
// export default function Todo({task, isCompleted}){
//     return(
//         <>
//         <div className="text-center mt-8">
           
//             <ul className="list-disc text-yellow-600">
//                 <li>{isCompleted ? 'Work on' : 'please done it'} : {task} </li>
//             </ul>

//         </div>
//         </>
//     )
// };


// conditional rendering with && operator //
// export default function Todo({task, isCompleted}){
//     return(
//         <>
//         <div className="text-center mt-8">
           
//             <ul className="list-disc text-yellow-600">
//                 <li> { isCompleted && 'Please keep going work' } : {task} </li>
//             </ul>

//         </div>
//         </>
//     )
// }

// conditional rendering with || operator //
// export default function Todo({task, isCompleted}){
//     return(
//         <>
//         <div className="text-center mt-8">
           
//             <ul className="list-disc text-yellow-600">
//                 <li> {task} { isCompleted || 'Please keep going work' }   </li>
//             </ul>

//         </div>
//         </>
//     )
// }


// conditional rendering with variable declare then man set kora //

// export default function Todo({task, isCompleted}){
//     let yourTask ;
//     if (isCompleted){
//         yourTask = <li> Task : {task}</li>;
//     } else {
//         yourTask = <p>Please completed the task</p>;
//     }

//     return yourTask;
// };