import CustomField from "../../buildingBlocks/CustomField";
import Sample from "./Sample";

function Measurements( { name } ) {

  return (
    <>
        <div className="mb-3">
            <CustomField
                name={name}
                fieldName='name'
                label='Name'
                tooltip='Name (id) of the measurement which must be unique within a record (i.e. triplicates must be named individually in the raw data file). The name must allow location of the measurement data within the raw data file as well as processed data files if these are present'
                width='w-full'
            />
        </div>
        <div>
            <Sample
                name={`${name}.sample`}
                colorSchema='light'
            />
        </div>
    </>
  );
}

export default Measurements;