import Pressure from "../components/Pressure";
import Humidity from "../components/Humidity";
import Temperature from "../components/Temperature";
import FormWrapper from "../buildingBlocks/FormWrapper";

function PhysicalConditionsAtSampleHandling( {name} ) {

  return (
    <>
      <FormWrapper headline='Physical conditions at sample handling' colorSchema='light'>
        <div className="mb-2">
          <Temperature colorSchema='light' name={`${name}.temperature`} />
        </div>
        <div className="mb-2">
          <Pressure name={`${name}.pressure`} />
        </div>
        <div className="mb-2">
          <Humidity name={`${name}.humidity`} />
        </div>
      </FormWrapper>
    </>
  );
}

export default PhysicalConditionsAtSampleHandling;