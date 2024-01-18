import CustomField from "./CustomField";
import OptionInput from "./OptionInput";

function ValueUnit({ colorSchema, options, name, width }) {

  return (
    <>
        <div className="flex">
            <div className="mr-3">
              <CustomField 
                name={name}
                fieldName='value'
                type='number'
                label='Value'
                width='w-[7rem]'
              />
            </div>
            <div className="mr-3">
              <OptionInput
                name={name}
                fieldName='unit'
                options={options}
                label='Unit'
                width={width}
              />
            </div>
        </div>
    </>
  );
}

export default ValueUnit;