import Supplier from "../../bli/sharedComponents/Supplier";
import ArrayField from "../../buildingBlocks/ArrayField";
import CustomField from "../../buildingBlocks/CustomField";
import FormWrapper from "../../buildingBlocks/FormWrapper";
import OptionField from "../../buildingBlocks/OptionField";

function Sensor( { name } ) {

    const sensorInitializationOptions = [
        { value: 'Air', label: 'Air' },
        { value: 'Glycerol', label: 'Glycerol' },
    ];

    const previouslyUsedOptions = [
        { value: 'Yes', label: 'Yes' },
        { value: 'No', label: 'No' },
    ];

    return (
      <>
        <FormWrapper
            headline='Sensor'
            tooltipHeader='Sensor used for the measurements'
        >
            <div className="flex -mt-3 mb-3">
                <div className="mr-3">
                    <ArrayField
                        name={name}
                        fieldName='id'
                        label='Id'
                        maxItems={1}
                        tooltip='The id of the sensor as given by the supplier'
                        renderChild={({ arrayName, index }) => (
                            <CustomField
                                name={`${arrayName}.${index}`}
                                label='Id'
                                tooltip='The id of the sensor as given by the supplier'
                            />
                        )}
                    />
                </div>
                <div className="mr-3">
                    <ArrayField
                        name={name}
                        fieldName='surface_properties'
                        label='Surface properties'
                        maxItems={1}
                        tooltip='The type surface properties the sensor has e.g. Protein A'
                        renderChild={({ arrayName, index }) => (
                            <CustomField
                                name={`${arrayName}.${index}`}
                                label='Id'
                                tooltip='The type surface properties the sensor has e.g. Protein A'
                            />
                        )}
                    />
                </div>
                <div className="mr-3">
                    <ArrayField
                        name={name}
                        fieldName='sensor_initialization'
                        label='Sensor initialization'
                        maxItems={1}
                        tooltip='How the initialization of the sensor was performed'
                        renderChild={({ arrayName, index }) => (
                            <OptionField
                                name={`${arrayName}.${index}`}
                                label='Sensor initialization'
                                tooltip='How the initialization of the sensor was performed'
                                options={sensorInitializationOptions}
                            />
                        )}
                    />
                </div>
                <div>
                    <ArrayField
                        name={name}
                        fieldName='previously_used'
                        label='Previously used'
                        maxItems={1}
                        tooltip='Whether or not the sensor was used in previous measurements'
                        renderChild={({ arrayName, index }) => (
                            <OptionField
                                name={`${arrayName}.${index}`}
                                label='Previously used'
                                tooltip='Whether or not the sensor was used in previous measurements'
                                options={previouslyUsedOptions}
                            />
                        )}
                    />
                </div>
            </div>
            <div>
                <Supplier
                    name={`${name}.supplier`}
                    tooltipHeader='Information about the supplier of the sensor'
                    colorSchema='light'
                />
            </div>
        </FormWrapper>
      </>
    );
  }
  
  export default Sensor;