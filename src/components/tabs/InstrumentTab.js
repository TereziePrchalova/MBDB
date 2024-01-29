import CustomField from "../buildingBlocks/CustomField";
import FormWrapper from "../buildingBlocks/FormWrapper";
import Instrument from "../components/Instrument";
import MethodSpecificParameters from "../sectionComponents/MethodSpecificParameters";

function InstrumentTab( { name, values} ) {

    return (
      <>
          <div>
            <div className="mb-2">
                <Instrument name={`${name}.instrument`} />
            </div>
            <FormWrapper>
                <div className="flex">
                    <div className="mr-3 my-auto text-dark">
                        Collection start time
                    </div>
                    <div>
                        <CustomField
                            name={name}
                            type='date'
                            fieldName='collection_start_time'
                        />
                    </div>
                </div>
            </FormWrapper>
            <div className="mt-2">
                <MethodSpecificParameters values={values} name='method_specific_parameters' />
            </div>
                
          </div>
      </>
    );
  }
  
  export default InstrumentTab;