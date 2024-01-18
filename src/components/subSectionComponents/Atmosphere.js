import MolecularWeight from "../components/MolecularWeight";

function Atmosphere( { name } ) {

  return (
    <>                    
        <div className="rounded-3xl mt-4 bg-primary p-4">
            <div className="mb-2 text-dark font-JostMedium text-18px">
            Atmosphere
            </div>
            <div className="mb-2">
                <MolecularWeight colorSchema='' name={`${name}.molecular_weight`} />
            </div>
        </div>
    </>
  );
}

export default Atmosphere;