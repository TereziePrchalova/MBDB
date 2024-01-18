import PhysicalConditionsAtSampleHandling from "./sectionComponents/PhysicalConditionsAtSampleHandling";
import Instrument from "./components/Instrument";

function GeneralParameters( {value, name} ) {


  return (
    <>
      <div className="flex flex-col">
        <div className="rounded-2xl bg-primary p-4">
          <div className="mb-2 text-dark font-JostMedium text-18px">
            General Parameters
          </div>
          <Instrument name={`${name}.instrument`}/>
          <PhysicalConditionsAtSampleHandling name={`${name}.physical_conditions_at_sample_handling`}/>
        </div>
      </div>
    </>
  );
}

export default GeneralParameters;
