import FormWrapper from "../../buildingBlocks/FormWrapper";
import ArrayField from "../../buildingBlocks/ArrayField";
import UseDefault from "../../buildingBlocks/UseDefault";
import { useFormikContext } from 'formik';
import MeasurementProtocol from "../measurementProtocol/MeasurementProtocol";

function MeasurementProtocolTab( { name } ) {

    const { values } = useFormikContext();

    const fieldName = 'measurement_protocol'

    UseDefault(values, `${name}.${fieldName}`, [{}] );

    return (
      <>
        <div className="-mt-3">
            <ArrayField
                name={name}
                label="Measurement protocol"
                required={true}
                fieldName={fieldName}
                tooltip='List of the steps in the measurement protocol'
                renderChild={({ arrayName, index }) => (
                    <FormWrapper
                        headline={`Measurement protocol ${index + 1}`}
                        tooltipHeader='List of the steps in the measurement protocol'
                    >
                        <div>
                            <MeasurementProtocol
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
  
  export default MeasurementProtocolTab;