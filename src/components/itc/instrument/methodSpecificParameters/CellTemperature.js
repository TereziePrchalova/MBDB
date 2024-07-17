import FormWrapper from "../../../buildingBlocks/FormWrapper";
import ValueUnit from "../../../buildingBlocks/ValueUnit";

function CellTemperature({ colorSchema, name }) {
  const unitOptions = [
    { value: "K", label: "K" },
    { value: "°C", label: "°C" },
    { value: "°F", label: "°F" },
  ];

  return (
    <>
      <FormWrapper
        colorSchema={colorSchema}
        headline="Cell temperature"
        tooltip="Temperature of the cell in which the sample is measured"
      >
        <ValueUnit
          options={unitOptions}
          name={name}
          tooltipValue="The numerical value of the temperature"
          tooltipUnit="The unit of the temperature"
          valueRequired
          unitRequired
        />
      </FormWrapper>
    </>
  );
}

export default CellTemperature;
