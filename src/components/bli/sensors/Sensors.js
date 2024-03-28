import CustomField from "../../buildingBlocks/CustomField";
import ArrayField from "../../buildingBlocks/ArrayField";
import OptionField from "../../buildingBlocks/OptionField";
import Supplier from "../sharedComponents/Supplier";

function Sensors( { name } ) {

    const previouslyUsedOptions = [
        { value: 'Yes', label: 'Yes' },
        { value: 'No', label: 'No' },
      ];

  return (
    <>
        <div className="mb-3">
            <CustomField
                name={name}
                fieldName='name'
                label='Name'
                tooltip='Descriptive name of the sensor'
                width='w-full'
            />
        </div>
        <div className="flex -mt-3 mb-3">
            <div className="mr-3">
                <ArrayField
                    name={name}
                    label='Surface properties'
                    fieldName='surface_properties'
                    maxItems={1}
                    tooltip='The type of surface properties the sensor has, e.g. Protein A'
                    renderChild={({ arrayName, index }) => (
                        <CustomField
                            name={`${arrayName}.${index}`}
                            label='Surface properties'
                            tooltip='The type of surface properties the sensor has, e.g. Protein A'
                        />
                    )}
                />
            </div>
            <div className="mr-3">
                <ArrayField
                    name={name}
                    label='Sensor id'
                    fieldName='sensor_id'
                    maxItems={1}
                    tooltip='The id of the sensor as given by the supplier'
                    renderChild={({ arrayName, index }) => (
                        <CustomField
                            name={`${arrayName}.${index}`}
                            label='Sensor id'
                            tooltip='The id of the sensor as given by the supplier'
                        />
                    )}
                />
            </div>
            <div>
                <ArrayField
                    name={name}
                    label='Previously used'
                    fieldName='previously_used'
                    maxItems={1}
                    tooltip='The id of the sensor as given by the supplier'
                    renderChild={({ arrayName, index }) => (
                        <OptionField
                            name={`${arrayName}.${index}`}
                            label='Previously used'
                            options={previouslyUsedOptions}
                            tooltip='The id of the sensor as given by the supplier'
                        />
                    )}
                />
            </div>
        </div>
        <div>
            <Supplier
                name={`${name}.supplier`}
                colorSchema='light'
            />
        </div>
    </>
  );
}

export default Sensors;