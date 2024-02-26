import CustomField from "../buildingBlocks/CustomField";
import FormWrapper from "../buildingBlocks/FormWrapper";
import ValueError from "../buildingBlocks/ValueError";
import ArrayFieldOneElement from "../buildingBlocks/ArrayFieldOneElement";

function Ph( { name, values ,colorSchema, tooltipHeader } ) {

    return(
        <>
            <FormWrapper colorSchema={colorSchema} headline='pH' tooltipHeader={tooltipHeader}>
                <div className="mb-3">
                    <CustomField
                        name={name}
                        label='Value'
                        fieldName='value'
                        type='number'
                        tooltip='The pH value of the solution'
                    />
                </div>
                <div>
                    <ArrayFieldOneElement
                        name={name}
                        values={values}
                        label='Value error'
                        fieldName='value_error'
                        renderChild={({ name, index }) => (
                            <div>
                                <ValueError
                                    name={`${name}.value_error.${index}`}
                                />
                            </div>
                        )}
                    />
                </div>
            </FormWrapper>
        </>
    )

}

export default Ph;