import PhysicalConditionsAtSampleHandling from "./sectionComponents/PhysicalConditionsAtSampleHandling";
import Instrument from "./components/Instrument";
import FormWrapperRequired from "./buildingBlocks/FormWrapperRequired";

function GeneralParameters( { name } ) {


  return (
    <>
      <FormWrapperRequired headline='General Parameters'>
        <div className="mb-2">
          <Instrument name={`${name}.instrument`}/>
        </div>
        <div>
          <PhysicalConditionsAtSampleHandling name={`${name}.physical_conditions_at_sample_handling`}/>
        </div>
      </FormWrapperRequired>
    </>
  );
}

export default GeneralParameters;
