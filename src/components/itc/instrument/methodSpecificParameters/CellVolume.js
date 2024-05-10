import FormWrapper from "../../../buildingBlocks/FormWrapper";
import ValueUnit from "../../../buildingBlocks/ValueUnit";

function CellVolume( { colorSchema, name } ) {

    const unitOptions = [
      { value: 'ml', label: 'ml' },
      { value: 'µl', label: 'µl' },
    ];

  return (
    <>
      <FormWrapper
        colorSchema={colorSchema}
        headline='Cell volume'
        tooltip='Volume of the cell in which the sample is measured'>
          <ValueUnit
            options={unitOptions}
            name={name}
            tooltipValue='Volume of the sample'
            tooltipUnit='Unit of the volume'
          />
      </FormWrapper>
    </>
  );
}

export default CellVolume;