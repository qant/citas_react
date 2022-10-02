function Form() {
  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h3 className="text-3xl font-black text-center">
        Seguimentos pacientes
      </h3>
      <p className="text-lg text-center mt-5 mb-10">
        Add Patients for {''}
        <span className="text-indigo-600 font-bold">Manage</span>
      </p>
      <form className="bg-white shadow-md mb-10 py-10 px-5 rounded-md">
        <div className="mb-5">
        <label htmlFor="pet_name" className="text-gray-700 uppercase">Pet Name</label>
        <input id="pet_name" type="text" className="p-2 w-full border placeholder-gray-400 rounded-md" placeholder="Enter the Pet Name here" />
        </div>

        <div className="mb-5">   
        <label htmlFor="owner_name" className="text-gray-700 uppercase">Owner Name</label>
        <input id="owner_name" type="text" className="p-2 w-full border placeholder-gray-400 rounded-md" placeholder="Enter the Owner Name here" />
        </div>

        <div className="mb-5">   
        <label htmlFor="owner_name" className="text-gray-700 uppercase">Email</label>
        <input id="owner_name" type="email" className="p-2 w-full border placeholder-gray-400 rounded-md" placeholder="Enter the email here" />
        </div>

        <div className="mb-5">   
        <label htmlFor="date" className="text-gray-700 uppercase">Date</label>
        <input id="date" type="date" className="p-2 w-full border placeholder-gray-400 rounded-md" />
        </div>

        <div className="mb-5">   
        <label htmlFor="sintoms" className="text-gray-700 uppercase">Date</label>
        <textarea id="sintoms" 
        className="p-2 w-full border placeholder-gray-400 rounded-md"
        />
        </div>

        <input name="submit" type="submit"
        className="cursor-pointer transition-all bg-indigo-600 hover:shadow-md hover:bg-indigo-800 w-full p-3 text-white uppercase font-bold"
        value="Add Pet" />
        

      </form>
    </div>
  )
}

export default Form