import { useState } from "react"
import toast from "react-hot-toast";

export default function Player(){

    const [player, UpdatePlayer] = useState(11);

    const addPlayer = () => {
        const newPlayer = player + 1;

        if(newPlayer >= 23){
            toast.error('Maximum player added is 22');
            return;
        }

        UpdatePlayer(newPlayer);
    }

    const removePlayer = () => {
        const removePlayer = player - 1;

        if(removePlayer <= 10) {
            toast.error('Minimum player added is 11');
            return;
        }

        UpdatePlayer(removePlayer);
    }

    // toast //
    const notify = () => toast.error('Here is your toast.');
   

    // style by object //
    const playerDiv = {
        maxWidth: '60%',
        margin: '50px auto',
        border: '2px solid red',
        padding: '10px',
        textAlign: 'center',
        borderRadius: '10px',
    }
    // style by object //
    
    return(
        <div>
         
         <div style={playerDiv}>
            <h1 className="font-bold"> Player : {player} </h1>

            <div className="flex justify-center items-center gap-5 mt-10">

                <button onClick={addPlayer} className="bg-green-600 p-2 text-white rounded-md"> Add Player </button>

                <button onClick={removePlayer} className="bg-red-600 p-2 text-white rounded-md"> Remove Player </button>

                <button onClick={notify} className="bg-red-600 p-2 text-white rounded-md"> Toast </button>


            </div>
         </div>

        </div>
    )
};