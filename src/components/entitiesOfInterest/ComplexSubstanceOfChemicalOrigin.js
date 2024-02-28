import OptionInput from "../buildingBlocks/OptionInput";
import CustomField from "../buildingBlocks/CustomField";
import ArrayField from "../buildingBlocks/ArrayField";
import FormWrapper from "../buildingBlocks/FormWrapper";
import Protocol from "../buildingBlocks/Protocol";
import ArrayFieldOneElement from "../buildingBlocks/ArrayFieldOneElement";
import Storage from "../buildingBlocks/Storage";
import Details from "../components/Details";

function ComplexSubstanceOfChemicalOrigin( { name, values } ) {

    const classOptions = [
        { value: 'lipid_assembly', label: 'Lipid assembly' },
      ];

  return (
    <>
        <div className="flex mb-3">
            <div className='mr-3'>
                <CustomField
                    name={name}
                    label='Name'
                    fieldName='name'
                    tooltip='Short descriptive name (id) of the entity; must be unique within a record (e.g. Lysozyme, Serum from Patient 1). This name is referenced in the measurement description to identify the entities present in measured sample'
                />
            </div>
            <div>
                <OptionInput
                    name={name}
                    options={classOptions}
                    label='Class'
                    fieldName='class'
                    tooltip='The chemical origin where the complex substance was derived from'
                />
            </div>
        </div>
        <div>
            <Details name={`${name}.details`} values={values} />
        </div>
        <div>
            <ArrayField
                name={name}
                values={values}
                label='Preparation protocol'
                fieldName='preparation_protocol'
                renderChild={({ arrayName, index }) => (
                    <FormWrapper
                        colorSchema='light'
                        headline={`Preparation protocol ${index + 1}`}
                        tooltipHeader='List of the steps performed during the preparation of the complex substance'
                    >
                        <Protocol
                            name={`${arrayName}.${index}`}
                            values={values}
                        />
                    </FormWrapper>
                )}
            />
        </div>
        <div>
            <ArrayFieldOneElement
                name={name}
                values={values}
                label='Storage'
                fieldName='storage'
                renderChild={({ arrayName, index }) => (
                    <FormWrapper
                        colorSchema='light'
                        headline={`Storage ${index + 1}`}
                        tooltipHeader='Information about how the complex substance was stored between being acquired and measured, including temperature and duration'
                    >
                        <Storage
                            name={`${arrayName}.${index}`}
                            values={values}
                        />
                    </FormWrapper>
                )}
            />
        </div>
        <div>
            <ArrayField
                name={name}
                values={values}
                label='Additional specification'
                fieldName='additional_specifications'
                renderChild={({ name, index }) => (
                    <CustomField
                        name={name}
                        index={index}
                        label={`Additional specification ${index + 1}`}
                        fieldName='additional_specifications'
                        width='w-[15rem]'
                        tooltip='Additional information about the lipid assembly, if applicable'
                    />
                )}
            />
        </div>
    </>
  );
}

export default ComplexSubstanceOfChemicalOrigin;