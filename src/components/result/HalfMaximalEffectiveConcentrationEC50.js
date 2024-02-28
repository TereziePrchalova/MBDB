import CustomField from "../buildingBlocks/CustomField";
import ValueUnit from "../buildingBlocks/ValueUnit";
import ValueError from "../buildingBlocks/ValueError";
import ArrayFieldOneElement from "../buildingBlocks/ArrayFieldOneElement";
import ArrayFieldFirstElementRequired from "../buildingBlocks/ArrayFieldFirstElementRequired";
import EntityInvolved from "../buildingBlocks/EntityInvolved";
import FormWrapper from "../buildingBlocks/FormWrapper";

function HalfMaximalEffectiveConcentrationEC50( { name, values } ) {

    const unitOptions = [
        { value: 'w/w %', label: 'w/w %' },
        { value: 'v/w %', label: 'v/w %' },
        { value: 'w/v %', label: 'w/v %' },
        { value: 'U/ml', label: 'U/ml' },
        { value: '% saturated', label: '% saturated' },
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
                    tooltipUnit='Unit of the half maximal effective concentration'
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

export default HalfMaximalEffectiveConcentrationEC50;