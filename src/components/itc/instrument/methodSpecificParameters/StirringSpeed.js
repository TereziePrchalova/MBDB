import FormWrapper from "../../../buildingBlocks/FormWrapper";
import ValueUnit from "../../../buildingBlocks/ValueUnit";

function StirringSpeed( { colorSchema, name } ) {

    const unitOptions = [
      { value: 'RPM', label: 'RPM' },
    ];

  return (
    <>
      <FormWrapper
        colorSchema={colorSchema}
        headline='Stirring speed'
        tooltip='Sample cell stirring speed in RPM'>
          <ValueUnit
            options={unitOptions}
            name={name}
            tooltipValue='The numerical value of the stirring speed'
            tooltipUnit='The unit of the stirring speed'
          />
      </FormWrapper>
    </>
  );
}

export default StirringSpeed;