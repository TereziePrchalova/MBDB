import CustomField from "../buildingBlocks/CustomField";
import ValueUnit from "../buildingBlocks/ValueUnit";
import ValueError from "../buildingBlocks/ValueError";
import EntityInvolved from "../buildingBlocks/EntityInvolved";
import FormWrapper from "../buildingBlocks/FormWrapper";
import ArrayField from "../buildingBlocks/ArrayField";
import UseDefault from "../buildingBlocks/UseDefault";

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

    const fieldNameEntityInvolved = 'entities_involved'
    UseDefault(values, `${name}.${fieldNameEntityInvolved}`, [{}] );

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
            <ArrayField
                name={name}
                values={values}
                label='Entity involved'
                fieldName={fieldNameEntityInvolved}
                required={true}
                renderChild={({ arrayName, index }) => (
                    <FormWrapper colorSchema='light' headline={`Entity involved ${index + 1}`} tooltipHeader='List of chemical or molecular assemblies the result describes and how many copies of each are involved'>
                        <EntityInvolved
                            name={`${arrayName}.${index}`}
                        />
                    </FormWrapper>
                )}
            />
        </div>
        <div>
            <ArrayField
                name={name}
                values={values}
                label='Value error'
                fieldName='value_error'
                maxItems={1}
                renderChild={({ arrayName, index }) => (
                    <div>
                        <ValueError
                            name={`${arrayName}.${index}`}
                            colorSchema='light'
                        />
                    </div>
                )}
            />
        </div>
    </>
  );
}

export default ConstantOfDissociationKD;