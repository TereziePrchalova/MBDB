import FormWrapper from "../../buildingBlocks/FormWrapper";
import ValueUnit from "../../buildingBlocks/ValueUnit";

function Volume( { colorSchema, name } ) {

    const unitOptions = [
      { value: 'ml', label: 'ml' },
      { value: 'µl', label: 'µl' },
    ];

  return (
    <>
        <FormWrapper
            colorSchema={colorSchema}
            headline='Volume'
            tooltip='Titrant volume injected into the cell'
        >
            <ValueUnit
                options={unitOptions}
                name={name}
                tooltipValue='Volume of the sample'
                tooltipUnit='Unit of the volume'
                valueRequired={true}
                unitRequired={true}
            />
        </FormWrapper>
    </>
  );
}

export default Volume;