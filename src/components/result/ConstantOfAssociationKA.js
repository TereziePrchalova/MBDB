import CustomField from "../buildingBlocks/CustomField";
import ValueUnit from "../buildingBlocks/ValueUnit";
import ValueError from "../buildingBlocks/ValueError";
import ArrayFieldOneElement from "../buildingBlocks/ArrayFieldOneElement";
import ArrayFieldFirstElementRequired from "../buildingBlocks/ArrayFieldFirstElementRequired";
import EntityInvolved from "../buildingBlocks/EntityInvolved";
import FormWrapper from "../buildingBlocks/FormWrapper";

function ConstantOfAssociationKA( { name, values } ) {

    const unitOptions = [
        { value: 'M^-1', label: 'M^-1' },
        { value: 'M^-2', label: 'M^-2' },
        { value: 'mM^-1', label: 'mM^-1' },
        { value: 'mM^-2', label: 'mM^-2' },
        { value: 'µM^-1', label: 'µM^-1' },
        { value: 'µM^-2', label: 'µM^-2' },
        { value: 'nM^-1', label: 'nM^-1' },
        { value: 'nM^-2', label: 'nM^-2' },
    ];

  return (
    <>
        <div className='flex mb-3'>
            <div className="mr-3">
                <CustomField
                    name={name}
                    fieldName='name'
                    label='Name'
                    tooltip='Descriptive name (id) of the result (e.g. Kd of Lysozyme and VHH2). Must be unique within a record'
                />
            </div>
            <div>
                <ValueUnit
                    options={unitOptions}
                    name={name}
                    tooltipValue='Numerical value of the result'
                    tooltipUnit='Unit of the constant of association'
                />
            </div>
        </div>
        <div>
            <ArrayFieldFirstElementRequired
                name={name}
                values={values}
                label='Entity involved'
                fieldName='entities_involved'
                renderChild={({ name, index }) => (
                    <FormWrapper colorSchema='light' headline={`Entity involved ${index + 1}`} tooltipHeader='List of chemical or molecular assemblies the result describes and how many copies of each are involved'>
                        <EntityInvolved
                            name={`${name}.entities_involved.${index}`}
                        />
                    </FormWrapper>
                )}
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
                            colorSchema='light'
                        />
                    </div>
                )}
            />
        </div>
    </>
  );
}

export default ConstantOfAssociationKA;