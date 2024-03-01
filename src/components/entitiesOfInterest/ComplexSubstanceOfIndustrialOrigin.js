import OptionInput from "../buildingBlocks/OptionInput";
import CustomField from "../buildingBlocks/CustomField";
import ArrayField from "../buildingBlocks/ArrayField";
import FormWrapper from "../buildingBlocks/FormWrapper";
import Protocol from "../buildingBlocks/Protocol";
import Storage from "../buildingBlocks/Storage";

function ComplexSubstanceOfIndustrialOrigin( { name } ) {

    const productOptions = [
        { value: 'Beer', label: 'Beer' },
        { value: 'Cell medium', label: 'Cell medium' },
        { value: 'Whey', label: 'Whey' },
      ];

  return (
    <>
        <div className="flex">
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
                    options={productOptions} 
                    label='Product' 
                    fieldName='product'
                    tooltip='The type of product, byproduct, or waste product the complex substance was derived from'
                />
            </div>
        </div>
        <div>
            <ArrayField
                name={name}
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
                        />
                    </FormWrapper>
                )}
            />
        </div>
        <div>
            <ArrayField
                name={name}
                label='Storage'
                fieldName='storage'
                maxItems={1}
                renderChild={({ arrayName, index }) => (
                    <FormWrapper
                        colorSchema='light'
                        headline={`Storage ${index + 1}`}
                        tooltipHeader='Information about how the complex substance was stored between being acquired and measured, including temperature and duration'
                    >
                        <Storage
                            name={`${arrayName}.${index}`}
                        />
                    </FormWrapper>
                )}
            />
        </div>
        <div>
            <ArrayField
                name={name}
                label='Additional specification'
                fieldName='additional_specifications'
                renderChild={({ arrayName, index }) => (
                    <CustomField
                        name={`${arrayName}.${index}`}
                        label={`Additional specification ${index + 1}`}
                        width='w-[15rem]'
                        tooltip='Additional information about the complex substance can be specified here'
                    />
                )}
            />
        </div>
    </>
  );
}

export default ComplexSubstanceOfIndustrialOrigin;