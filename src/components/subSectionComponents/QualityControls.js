import CustomField from "../buildingBlocks/CustomField";
import FormWrapper from "../buildingBlocks/FormWrapper";
import OptionInput from "../buildingBlocks/OptionInput";
import StorageUntilMeasurement from "./StorageUntilMeasurement";

function QualityControls( { name } ) {

    const parameterOptions = [
        { value: 'aggregation_state', label: 'Aggregation state' },
        { value: 'homogeneity', label: 'Homogeneity' },
        { value: 'identity', label: 'Identity' },
        { value: 'purity', label: 'Purity' },
        { value: 'stability', label: 'Stability' },
        { value: 'other', label: 'Other' },
    ];

  return (
    <>
        <FormWrapper headline='Quality Controls' colorSchema=''>
            <div className="flex mb-2">
                <div className="mr-3">
                    <OptionInput
                        name={name}
                        label='Parameter'
                        fieldName='parameter'
                        options={parameterOptions}
                        width='w-[10rem]'
                    />
                </div>
                <div>
                    <CustomField
                        label='Technique'
                        name={name}
                        fieldName='technique'
                        width='w-[10rem]'
                    />
                </div>
            </div>
            <div>
                <StorageUntilMeasurement name={`${name}.storage_until_measurement`} />
            </div>
        </FormWrapper>           
    </>
  );
}

export default QualityControls;