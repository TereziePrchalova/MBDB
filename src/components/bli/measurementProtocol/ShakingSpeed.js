import FormWrapper from "../../buildingBlocks/FormWrapper";
import ValueUnit from "../../buildingBlocks/ValueUnit";
import ValueError from "../../buildingBlocks/ValueError";
import ArrayField from "../../buildingBlocks/ArrayField";

function ShakingSpeed( { colorSchema, name } ) {

    const unitOptions = [
        { value: 'RPM', label: 'RPM' },
      ];

  return (
    <>
      <FormWrapper
        colorSchema={colorSchema}
        headline='Shaking speed'
        tooltipHeader='The numerical value of the shaking speed of the plate during the measurement step in the units defined in the general parameters'>
          <ValueUnit
            options={unitOptions}
            name={name}
            tooltipValue='The numerical value of the shaking speed of the plate during the measurement step in the units defined in the general parameters'
            tooltipUnit='The reported error of the value of the shaking speed (e.g. standard deviation, % error)'
          />
          <ArrayField
                name={name}
                label='Value error'
                fieldName='value_error'
                maxItems={1}
                tooltip='The expected error of the result in terms of a 95 % confidence interval'
                renderChild={({ arrayName, index }) => (
                    <div>
                        <ValueError
                            name={`${arrayName}.${index}`}
                        />
                    </div>
                )}
            />
      </FormWrapper>
    </>
  );
}

export default ShakingSpeed;