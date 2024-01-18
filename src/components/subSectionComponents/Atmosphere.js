import FormWrapper from "../buildingBlocks/FormWrapper";
import Composition from "./Composition";

function Atmosphere( { name } ) {

  return (
    <>
        <FormWrapper headline='Atmosphere'>
          <div>
            <Composition name={`${name}.composition`} />
          </div>
        </FormWrapper>             
    </>
  );
}

export default Atmosphere;