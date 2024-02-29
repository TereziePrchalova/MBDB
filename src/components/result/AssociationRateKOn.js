import CustomField from "../buildingBlocks/CustomField";
import ValueUnit from "../buildingBlocks/ValueUnit";
import ValueError from "../buildingBlocks/ValueError";
import EntityInvolved from "../buildingBlocks/EntityInvolved";
import FormWrapper from "../buildingBlocks/FormWrapper";
import UseDefault from "../buildingBlocks/UseDefault";
import ArrayField from "../buildingBlocks/ArrayField";

function AssociationRateKOn( { name, values } ) {

    const unitOptions = [
        { value: 'M^-1 s^-1', label: 'M^-1 s^-1' },
        { value: 'M^-2 s^-1', label: 'M^-2 s^-1' },
        { value: 'mM^-1 s^-1', label: 'mM^-1 s^-1' },
        { value: 'mM^-2 s^-1', label: 'mM^-2 s^-1' },
        { value: 'µM^-1 s^-1', label: 'µM^-1 s^-1' },
        { value: 'µM^-2 s^-1', label: 'µM^-2 s^-1' },
        { value: 'nM^-1 s^-1', label: 'nM^-1 s^-1' },
        { value: 'nM^-2 s^-1', label: 'nM^-2 s^-1' },
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
                    tooltipUnit='Unit of the association rate constant'
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
                    <FormWrapper
                        colorSchema='light'
                        headline={`Entity involved ${index + 1}`}
                        tooltipHeader='List of chemical or molecular assemblies the result describes and how many copies of each are involved'
                    >
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

export default AssociationRateKOn;