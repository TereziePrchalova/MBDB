import { getIn, useFormikContext } from "formik";
import CustomField from "../../buildingBlocks/CustomField";
import OptionField from "../../buildingBlocks/OptionField";
import Sample from "./Sample";

function Measurements( { name } ) {

    const { values } = useFormikContext();

    const sensorValue = getIn(values, `metadata.method_specific_parameters.sensors`)

    let sensorOptions = [];

    if (sensorValue && sensorValue.length > 0) {
        sensorOptions = sensorValue.map(sensor => ({
            value: sensor.name,
            label: sensor.name
        }))
    } else {
        sensorOptions = [{ label: 'Select Sensor, if applicable' }]
    }

    const measurementProtocolStepValue = getIn(values, `metadata.method_specific_parameters.measurement_protocol`)

    let measurementProtocolStepOptions = [];

    if (measurementProtocolStepValue && measurementProtocolStepValue.length >0 ) {
        measurementProtocolStepOptions = measurementProtocolStepValue.map(measurementProtocolStep => ({
            value: measurementProtocolStep.name,
            label: measurementProtocolStep.name
        }))
    } else {
        measurementProtocolStepOptions = [{ label: 'Select Measurement protocol step, if applicable' }]
    }

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
                    options={sensorOptions}
                />
            </div>
            <div className="mr-3">
                <OptionField
                    name={name}
                    label='Measurement protocol step'
                    fieldName='measurement_protocol_step'
                    options={measurementProtocolStepOptions}
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