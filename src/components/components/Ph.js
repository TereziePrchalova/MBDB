import CustomField from "../buildingBlocks/CustomField";
import FormWrapper from "../buildingBlocks/FormWrapper";

function Ph( { name, colorSchema, tooltipHeader } ) {

    return(
        <>
            <FormWrapper colorSchema={colorSchema} headline='pH' tooltipHeader={tooltipHeader}>
                <div>
                    <CustomField
                        name={name}
                        label='Value'
                        fieldName='value'
                        type='number'
                        tooltip='The pH value of the chemical environment'
                        width='w-[8.5rem]'
                    />
                </div>
            </FormWrapper>
        </>
    )

}

export default Ph;