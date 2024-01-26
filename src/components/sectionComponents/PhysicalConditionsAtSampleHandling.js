import Humidity from "../components/Humidity";
import FormWrapper from "../buildingBlocks/FormWrapper";
import Duration from "../components/Duration";

function PhysicalConditionsAtSampleHandling( {name} ) {

  return (
    <>
      <FormWrapper headline='Physical conditions at sample handling' colorSchema='light'>
        <div className="mb-2">
          <Humidity name={`${name}.humidity`} />
        </div>
        <Duration/>
      </FormWrapper>
    </>
  );
}

export default PhysicalConditionsAtSampleHandling;