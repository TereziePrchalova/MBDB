import CustomField from "../buildingBlocks/CustomField";
import ValueUnit from "../buildingBlocks/ValueUnit";
import ValueError from "../buildingBlocks/ValueError";
import ArrayFieldOneElement from "../buildingBlocks/ArrayFieldOneElement";
import ArrayFieldFirstElementRequired from "../buildingBlocks/ArrayFieldFirstElementRequired";
import EntityInvolved from "../buildingBlocks/EntityInvolved";
import FormWrapper from "../buildingBlocks/FormWrapper";

function ConstantOfDissociationKD( { name, values } ) {

    const unitOptions = [
        { value: 'M', label: 'M' },
        { value: 'M^2', label: 'M^2' },
        { value: 'mM', label: 'mM' },
        { value: 'mM^2', label: 'mM^2' },
        { value: 'µM', label: 'µM' },
        { value: 'µM^2', label: 'µM^2' },
        { value: 'nM', label: 'nM' },
        { value: 'nM^2', label: 'nM^2' },
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
                    tooltipUnit='Unit of the constant of dissociation'
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
                        />
                    </div>
                )}
            />
        </div>
    </>
  );
}

export default ConstantOfDissociationKD;