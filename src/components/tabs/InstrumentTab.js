import Instrument from "../components/Instrument";

function InstrumentTab( { name, values} ) {

    return (
      <>
          <div>
                <Instrument name={`${name}.instrument`} />
          </div>
      </>
    );
  }
  
  export default InstrumentTab;