import Instrument from "../components/Instrument";
import MethodSpecificParameters from "../sectionComponents/MethodSpecificParameters";

function InstrumentTab( { name, values} ) {

    return (
      <>
          <div>
            <div className="mb-2">
                <Instrument name={`${name}.instrument`} />
            </div>
            <div className="mb-2">
                <MethodSpecificParameters name='method_specific_parameters' />
            </div>
                
          </div>
      </>
    );
  }
  
  export default InstrumentTab;