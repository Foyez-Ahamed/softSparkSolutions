export default function Family({ member }) {
  
 const {name, age , wifeName} = member;   

  return (
    <div>
      <div className="mt-5 text-center border border-red-200 max-w-96 mx-auto">
        <h1>Name : {name} </h1>
        <p>Age: {age}</p>
        <p >Wife Name: <span className="text-red-600">{wifeName}</span></p>
      </div>
    </div>
  );
}
