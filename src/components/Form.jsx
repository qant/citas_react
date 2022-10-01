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
      <form className="bg-white shadow-md mb-10 py-10 px-5">
        <label className="text-gray-700 uppercase">Name</label>
        <input type="text" className="p-2 w-full border placeholder-red-300" placeholder="Enter the name here" />
      </form>
    </div>
  )
}

export default Form