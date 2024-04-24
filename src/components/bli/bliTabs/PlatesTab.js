import FormWrapper from "../../buildingBlocks/FormWrapper";
import ArrayField from "../../buildingBlocks/ArrayField";
import UseDefault from "../../buildingBlocks/UseDefault";
import Plates from "../plates/Plates";

function PlatesTab( { name } ) {

    const fieldName = 'plates'

    UseDefault(`${name}.${fieldName}`, [{}] );

    return (
      <>
        <div className="-mt-3">
            <ArrayField
                name={name}
                label="Plates"
                required={true}
                fieldName={fieldName}
                tooltip='List of the plate types used for the measurements'
                renderChild={({ arrayName, index }) => (
                    <FormWrapper
                        headline={`Plates ${index + 1}`}
                        tooltipHeader='List of the plate types used for the measurements'
                    >
                        <div>
                            <Plates
                                name={`${arrayName}.${index}`}
                            />
                        </div>
                    </FormWrapper>
                )}
            />
        </div>
      </>
    );
  }
  
  export default PlatesTab;