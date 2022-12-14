import {useState, useEffect} from 'react';

function Form() {
  
  const [petName, setPetName] = useState('');
  const [ownerName, setOwnerName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [sintoms, setSintoms] = useState('');  

  const [errors, setErrors] = useState(false);

  const handleSubmit = (e)=>{
    e.preventDefault();

    //Validate form inputs
    console.log('Input values:',{petName,ownerName,email,date,sintoms});
    
    if([petName,ownerName,email,date,sintoms].includes('')){
        setErrors(true);
        console.log('Something is empty!');
        return;
      }
        setErrors(false);
        console.log('All inputs have something!');
        console.log('Enviando...', e.target);
    
  }

  return (
    
    <div className="md:w-1/2 lg:w-2/5">
      <h3 className="text-3xl font-black text-center">
        Seguimentos pacientes
      </h3>
      <p className="text-lg text-center mt-5 mb-10">
        Add Patients for {''}
        <span className="text-indigo-600 font-bold">Manage</span>
      </p>
      <div className="relative">
        <div className="sticky">
          <form onSubmit={handleSubmit} className="bg-white shadow-md mb-10 py-10 px-5 rounded-md">
            <div className="mb-5">

            {errors && (
            <div className="mb-5 bg-red-700 text-white uppercase text-bold rounded p-5 text-center">
              <p>All field are required</p>
            </div>
            )}

            <label htmlFor="pet_name" className="text-gray-700 uppercase">
              Pet Name </label>
            <input id="pet_name" type="text" className="p-2 w-full border placeholder-gray-400 rounded-md" placeholder="Enter the Pet Name here" 
            value={petName}
            onChange={(e)=>setPetName(e.target.value)}
            />
            </div>

            <div className="mb-5">   
            <label htmlFor="owner_name" className="text-gray-700 uppercase">Owner Name</label>
            <input id="owner_name" type="text" className="p-2 w-full border placeholder-gray-400 rounded-md" placeholder="Enter the Owner Name here" value={ownerName}
            onChange={(e)=>setOwnerName(e.target.value)}
            />
            </div>

            <div className="mb-5">   
            <label htmlFor="owner_name" className="text-gray-700 uppercase">Email</label>
            <input id="owner_name" type="email" className="p-2 w-full border placeholder-gray-400 rounded-md" placeholder="Enter the email here" value={email}
            onChange={(e)=>setEmail(e.target.value)}/>
            </div>

            <div className="mb-5">   
            <label htmlFor="date" className="text-gray-700 uppercase">Date</label>
            <input id="date" type="date" className="p-2 w-full border placeholder-gray-400 rounded-md" 
            value={date}
            onChange={(e)=>setDate(e.target.value)}/>
            </div>

            <div className="mb-5">   
            <label htmlFor="sintoms" className="text-gray-700 uppercase">Date</label>
            <textarea id="sintoms" 
            className="p-2 w-full border placeholder-gray-400 rounded-md"
            value={sintoms}
            onChange={(e)=>setSintoms(e.target.value)}
            />
            </div>

            <input name="submit" type="submit"
            className="cursor-pointer transition-all bg-indigo-600 hover:shadow-md hover:bg-indigo-800 w-full p-3 text-white uppercase font-bold"
            value="Add Pet" />
            

          </form>
      </div>
      </div>
    </div>
  )
}

export default Form