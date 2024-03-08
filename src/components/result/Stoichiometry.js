import CustomField from "../buildingBlocks/CustomField";
import ValueUnit from "../buildingBlocks/ValueUnit";
import ValueError from "../buildingBlocks/ValueError";
import ArrayField from "../buildingBlocks/ArrayField";
import EntityInvolved from "../buildingBlocks/EntityInvolved";
import FormWrapper from "../buildingBlocks/FormWrapper";
import UseDefault from "../buildingBlocks/UseDefault";
import { useFormikContext } from "formik";

function Stoichiometry( { name } ) {

    const { values } = useFormikContext()

    const unitOptions = [
        { value: 'per complex', label: 'per complex' },
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
                    tooltipUnit='Unit of the stoichiometry'
                />
            </div>
        </div>
        <div>
            <ArrayField
                name={name}
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
                label='Value error'
                fieldName='value_error'
                maxItems={1}
                tooltipHeader='The expected error of the result in terms of a 95 % confidence interval'
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

export default Stoichiometry;