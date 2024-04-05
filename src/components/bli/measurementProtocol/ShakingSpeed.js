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
        tooltipHeader='The numerical value of the start point of the measurement step relative to the beginning of the measurement in the units defined in the general parameters'>
          <ValueUnit
            options={unitOptions}
            name={name}
            tooltipValue='The numerical value of the time point or duration'
            tooltipUnit='The unit of the time duration'
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