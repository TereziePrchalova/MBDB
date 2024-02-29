import FormWrapper from "../buildingBlocks/FormWrapper";
import ArrayField from "../buildingBlocks/ArrayField";
import Measurement from "../measurement/Measurement";
import UseDefault from "../buildingBlocks/UseDefault";

function MeasurementTab( { name, values} ) {

    const fieldName = 'measurements'
    UseDefault(values, `${name}.${fieldName}`, [{}] );

    return (
      <>
        <div className="-mt-3">
            <ArrayField
                name={name}
                values={values}
                label="Measurement"
                required={true}
                fieldName={fieldName}
                renderChild={({ arrayName, index }) => { 
                    console.log(values, arrayName)
                return(
                    <FormWrapper headline={`Measurement ${index + 1}`}>
                        <div>
                            <Measurement
                                name={`${arrayName}.${index}`}
                                values={values}
                            />
                        </div>
                    </FormWrapper>
                )}}
            />
        </div>
      </>
    );
  }
  
  export default MeasurementTab;