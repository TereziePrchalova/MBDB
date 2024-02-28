import FormWrapper from "../buildingBlocks/FormWrapper";
import ArrayFieldFirstElementRequired from "../buildingBlocks/ArrayFieldFirstElementRequired";
import Measurement from "../measurement/Measurement";

function MeasurementTab( { name, values} ) {

    return (
      <>
        <div className="-mt-3">
            <ArrayFieldFirstElementRequired
                name={name}
                values={values}
                label="Measurement"
                fieldName='measurements'
                renderChild={({ arrayName, index }) => (
                    <FormWrapper headline={`Measurement ${index + 1}`}>
                        <div>
                            <Measurement
                                name={`${arrayName}.${index}`}
                                values={values}
                            />
                        </div>
                    </FormWrapper>
                )}
            />
        </div>
      </>
    );
  }
  
  export default MeasurementTab;