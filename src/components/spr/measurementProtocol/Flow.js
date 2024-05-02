import CustomField from "../../buildingBlocks/CustomField";
import OptionField from "../../buildingBlocks/OptionField";
import FormWrapper from "../../buildingBlocks/FormWrapper";
import OptionalField from "../../buildingBlocks/OptionalField";

function Flow( { colorSchema, name } ) {

    const unitOptions = [
        { value: 'mL/min', label: 'mL/min' },
        { value: 'µl/s', label: 'µl/s' },
      ];
    
    const directionOptions = [
        { value: 'Vertical', label: 'Vertical' },
        { value: 'Horizontal', label: 'Horizontal' },
    ];

  return (
    <>
      <FormWrapper
        colorSchema={colorSchema}
        headline='Flow'
        tooltip='Information about the flow during the measurement step'>
            <div className="flex">
                <div className="mr-3">
                    <CustomField
                        name={name}
                        fieldName='rate'
                        label='Rate'
                        tooltip='Numerical value of the flow-rate'
                        type='number'
                    />
                </div>
                <div className="mr-3">
                    <OptionField
                        name={name}
                        fieldName='unit'
                        label='Unit'
                        tooltip='The unit of the flow-rate'
                        options={unitOptions}
                    />
                </div>
                <div className="-mt-3">
                    <OptionalField
                        name={name}
                        label='Direction'
                        fieldName='direction'
                        tooltip='Direction of the flow'
                        renderChild={({ optionalFieldName }) => (
                            <OptionField
                                name={optionalFieldName}
                                label='Direction'
                                tooltip='Direction of the flow'
                                options={directionOptions}
                            />
                        )}
                    />
                </div>
            </div>
      </FormWrapper>
    </>
  );
}

export default Flow;