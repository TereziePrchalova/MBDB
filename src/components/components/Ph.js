import CustomField from "../buildingBlocks/CustomField";
import FormWrapper from "../buildingBlocks/FormWrapper";
import ValueError from "../buildingBlocks/ValueError";
import ArrayField from "../buildingBlocks/ArrayField";

function Ph( { name, colorSchema, tooltipHeader } ) {

    return(
        <>
            <FormWrapper colorSchema={colorSchema} headline='pH' tooltipHeader={tooltipHeader}>
                <div className="flex">
                    <div className="mr-3">
                        <CustomField
                            name={name}
                            label='Value'
                            fieldName='value'
                            type='number'
                            tooltip='The pH value of the chemical environment'
                            width='w-[8.5rem]'
                        />
                    </div>
                    <div className="-mt-3">
                        <ArrayField
                            name={name}
                            label='Value error'
                            fieldName='value_error'
                            maxItems={1}
                            renderChild={({ arrayName, index }) => (
                                <div>
                                    <ValueError
                                        name={`${arrayName}.${index}`}
                                    />
                                </div>
                            )}
                        />
                    </div>
                </div>
            </FormWrapper>
        </>
    )

}

export default Ph;