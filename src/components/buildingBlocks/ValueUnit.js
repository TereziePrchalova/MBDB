import CustomField from "./CustomField";
import OptionField from "./OptionField";

function ValueUnit({
  options,
  name,
  width,
  tooltipValue,
  tooltipUnit,
  valueRequired,
  unitRequired
}) {

  return (
    <>
        <div className="flex">
            <div className="mr-3">
              <CustomField 
                name={name}
                fieldName='value'
                type='number'
                label='Value'
                required={valueRequired}
                tooltip={tooltipValue}
              />
            </div>
            <div>
              <OptionField
                name={name}
                fieldName='unit'
                options={options}
                label='Unit'
                required={unitRequired}
                width={width}
                tooltip={tooltipUnit}
              />
            </div>
        </div>
    </>
  );
}

export default ValueUnit;