import CustomField from "./CustomField";
import OptionInput from "./OptionInput";

function ValueUnit({ colorSchema, options, name, width, tooltipValue, tooltipUnit }) {

  return (
    <>
        <div className="flex">
            <div className="mr-3">
              <CustomField 
                name={name}
                fieldName='value'
                type='number'
                label='Value'
                tooltip={tooltipValue}
              />
            </div>
            <div>
              <OptionInput
                name={name}
                fieldName='unit'
                options={options}
                label='Unit'
                width={width}
                tooltip={tooltipUnit}
              />
            </div>
        </div>
    </>
  );
}

export default ValueUnit;