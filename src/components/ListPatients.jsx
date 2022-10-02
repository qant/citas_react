import Patient from "./Patient";

function ListPatients() {
    return (
        <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
            <h3 className="text-3xl font-black text-center">
                Patients List
            </h3>

            <p className="text-lg text-center mt-5 mb-10">
                Manage your {''}
                <span className="text-indigo-600 font-bold">Patients and Dates</span>
            </p>
            
                <Patient/>
                <Patient/>
                <Patient/>
                <Patient/>
        </div>
    )
}

export default ListPatients;