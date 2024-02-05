import CustomField from "./CustomField";
import OptionInput from "./OptionInput";

function Size( { name } ) {

    const typeOptions = [
        { value: 'radius', label: 'Radius' },
        { value: 'diameter', label: 'Diameter' },
        { value: 'path_length', label: 'Path length' },
    ];

    const unitOptions = [
        { value: 'Å', label: 'Å' },
        { value: 'nm', label: 'nm' },
        { value: 'μm', label: 'μm' },
        { value: 'mm', label: 'mm' },
        { value: 'cm', label: 'cm' },
        { value: 'm', label: 'm' },
    ];

    return(
        <>
            <div className="flex mb-3">
                <div className="mr-3">
                    <OptionInput 
                        name={name}
                        options={typeOptions}
                        label='type' 
                        fieldName='type' 
                    />
                </div>
                <div className="mr-3">
                    <CustomField name={name} label='Mean' fieldName='mean' />
                </div>
                <div>
                    <OptionInput
                        name={name}
                        options={unitOptions}
                        label='Unit'
                        fieldName='unit'
                    />
                </div>
            </div>
            <div className="flex">
                <div className="mr-3">
                    <CustomField name={name} label='Median' fieldName='median' />
                </div>
                <div className="mr-3">
                    <CustomField name={name} label='Upper' fieldName='upper' />
                </div>
                <div>
                    <CustomField name={name} label='Lower' fieldName='lower' />
                </div>
            </div>
        </>
    )

}

export default Size;