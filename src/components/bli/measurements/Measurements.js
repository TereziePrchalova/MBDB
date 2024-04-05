import CustomField from "../../buildingBlocks/CustomField";
import OptionField from "../../buildingBlocks/OptionField";
import Sample from "./Sample";

function Measurements( { name } ) {

    const wellsOptions = [
        { value: '96', label: '96' },
        { value: '384', label: '384' },
    ];

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
        <div className="flex mb-3">
            <div className="mr-3">
                <OptionField
                    name={name}
                    label='Sensor'
                    fieldName='sensor'
                    options={wellsOptions}
                />
            </div>
            <div className="mr-3">
                <OptionField
                    name={name}
                    label='Measurement protocol step'
                    fieldName='measurement_protocol_step'
                    options={wellsOptions}
                />
            </div>
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