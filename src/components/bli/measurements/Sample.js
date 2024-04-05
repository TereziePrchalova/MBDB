import ArrayField from "../../buildingBlocks/ArrayField";
import FormWrapper from "../../buildingBlocks/FormWrapper";
import Protocol from "../../buildingBlocks/Protocol";
import { useFormikContext } from "formik";
import UseDefault from "../../buildingBlocks/UseDefault";
import OptionField from "../../buildingBlocks/OptionField";
import CustomField from "../../buildingBlocks/CustomField";
import { getIn } from "formik";

function Sample( { name, colorSchema } ) {

    const { values } = useFormikContext();

    const fieldName = 'sample'

    UseDefault(values, `${name}.${fieldName}`, [{}] );

    const platesValue = getIn(values, `metadata.method_specific_parameters.plates`)

      let platesOptions = [];

      if (platesValue && platesValue.length > 0) {
            platesOptions = platesValue.map(plate => ({
                value: plate.name,
                label: plate.name,
            }));
        } else {
            platesOptions = [{ label: 'Select Plate, if applicable' }];
        }

    const chemicalEnvironmentsValue = getIn(values, `metadata.general_parameters.chemical_environments`)

    let chemicalEnvironmentsOptions = [];

    if (chemicalEnvironmentsValue && chemicalEnvironmentsValue.length > 0) {
            chemicalEnvironmentsOptions = chemicalEnvironmentsValue.map(chemicalEnvironment => ({
                value: chemicalEnvironment.name,
                label: chemicalEnvironment.name,
            }));
        } else {
            chemicalEnvironmentsOptions = [{ label: 'Select Chemical environment, if applicable' }];
        }


  return (
    <>
        <FormWrapper
            headline='Sample'
            colorSchema={colorSchema}
            tooltipHeader='The type of sealing used to seal the top of the plate'
        >
            <div className="flex">
                <div className="mr-3">
                    <OptionField
                        name={name}
                        label='Plate'
                        fieldName='plate'
                        options={platesOptions}
                    />
                </div>
                <div className="mr-3">
                    <CustomField
                        name={name}
                        fieldName='well_position'
                        label='Well position'
                        tooltip='The position the well (in the plate) where the sample was during the measurement'
                    
                    />
                </div>
                <div>
                    <OptionField
                        name={name}
                        label='Chemical environment'
                        fieldName='chemical_environment'
                        options={chemicalEnvironmentsOptions}
                    />
                </div>
            </div>
            <div className="mr-3">
                <ArrayField
                    name={name}
                    required={true}
                    label='Protocol'
                    fieldName={fieldName}
                    tooltip='The catalog number or identifier of the item'
                    renderChild={({ arrayName, index }) => (
                        <FormWrapper
                            headline={`Protocol ${index + 1}`}
                            tooltipHeader='List of protocol steps used to modify the surface of the wells'
                        >
                            <Protocol
                                name={`${arrayName}.${index}`}
                            />
                        </FormWrapper>
                    )}
                />
            </div>
        </FormWrapper>
    </>
  );
}

export default Sample;