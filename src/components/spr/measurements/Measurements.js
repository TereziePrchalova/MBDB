import { getIn, useFormikContext } from "formik";
import CustomField from "../../buildingBlocks/CustomField";
import OptionField from "../../buildingBlocks/OptionField";
import Sample from "./Sample";
import ArrayField from "../../buildingBlocks/ArrayField";
import FormWrapper from "../../buildingBlocks/FormWrapper";
import UseDefault from "../../buildingBlocks/UseDefault";
import OptionalField from "../../buildingBlocks/OptionalField";

function Measurements( { name } ) {

    const { values } = useFormikContext();

    UseDefault(`${name}.sample`, [{}])

    const measurementPotionValue = getIn(values, `metadata.method_specific_parameters.measurement_positions`)

    let measurementPotionOptions = [];

    if (measurementPotionValue && measurementPotionValue.length > 0) {
        measurementPotionOptions = measurementPotionValue.map(measurementPotion => ({
            value: measurementPotion.name,
            label: measurementPotion.name
        }))
    } else {
        measurementPotionOptions = [{ label: 'Select Measurement position, if applicable' }]
    }

  return (
    <>
        <div className="mb-3">
            <CustomField
                name={name}
                fieldName='name'
                label='Name'
                tooltip='Name (id) of the measurement which must be unique within a record (i.e. triplicates must be named individually in the raw data file). The name must allow location of the measurement data within the raw data file as well as processed data files if these are present'
                width='w-full'
            />
        </div>
        <div className="flex mb-3">
            <div>
                <OptionField
                    name={name}
                    label='Measurement position'
                    fieldName='measurement_position'
                    options={measurementPotionOptions}
                />
            </div>
            <div className="-mt-3">
                <OptionalField
                    name={name}
                    fieldName='reference_measurement_position'
                    label='Reference measurement positon'
                    renderChild={({ optionalFieldName }) => (
                        <OptionField
                            name={optionalFieldName}
                            label='Reference measurement position'
                            options={measurementPotionOptions}
                        />
                    )}
                />
            </div>
        </div>
        <div>
            <ArrayField
                name={name}
                fieldName='sample'
                label='Sample'
                required={true}
                renderChild={({ arrayName, index }) => (
                    <FormWrapper
                        headline={`Sample ${index + 1}`}
                        colorSchema='light'
                    >
                        <Sample
                            name={`${arrayName}.${index}`}
                        />
                    </FormWrapper>
                )}
            />
        </div>
        <div>
            <ArrayField
                name={name}
                fieldName='reference_sample'
                label='Reference sample'
                renderChild={({ arrayName, index }) => (
                    <FormWrapper
                        headline={`Reference sample ${index + 1}`}
                        colorSchema='light'
                    >
                        <Sample
                            name={`${arrayName}.${index}`}
                        />
                    </FormWrapper>
                )}
            />
        </div>
    </>
  );
}

export default Measurements;