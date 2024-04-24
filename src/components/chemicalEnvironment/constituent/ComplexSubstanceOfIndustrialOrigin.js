import CustomField from "../../buildingBlocks/CustomField";
import ArrayField from "../../buildingBlocks/ArrayField";
import FormWrapper from "../../buildingBlocks/FormWrapper";
import Protocol from "../../buildingBlocks/Protocol";
import Storage from "../../buildingBlocks/Storage";
import Concentration from "../../sharedComponents/Concentration";
import OptionField from "../../buildingBlocks/OptionField";
import UseDefault from "../../buildingBlocks/UseDefault";
import OptionalField from "../../buildingBlocks/OptionalField";

function ComplexSubstanceOfIndustrialOrigin( { name } ) {

    const productOptions = [
        { value: 'Beer', label: 'Beer' },
        { value: 'Cell medium', label: 'Cell medium' },
        { value: 'Whey', label: 'Whey' },
      ];

      const fieldName = 'preparation_protocol'

      UseDefault(`${name}.${fieldName}`, [{}] );

  return (
    <>
        <div className="flex mb-3">
            <div className='mr-3'>
                <CustomField
                    name={name}
                    label='Name'
                    fieldName='name'
                    width='w-[22rem]'
                    tooltip='Short descriptive name (id) of the entity; must be unique within a record (e.g. Lysozyme, Serum from Patient 1). This name is referenced in the measurement description to identify the entities present in measured sample'
                />
            </div>
            <div>
                <OptionField
                    name={name} 
                    options={productOptions} 
                    label='Product' 
                    fieldName='product'
                    tooltip='The type of product, byproduct, or waste product the complex substance was derived from'
                />
            </div>
        </div>
        <div>
            <Concentration
                name={`${name}.concentration`}
            />
        </div>
        <div className="flex mb-3">
            <div>
                <ArrayField
                    name={name}
                    label='Preparation protocol'
                    fieldName={fieldName}
                    required={true}
                    tooltip='List of the steps performed during the preparation of the complex substance'
                    renderChild={({ arrayName, index }) => (
                        <FormWrapper
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
                    label='Additional specification'
                    fieldName='additional_specifications'
                    tooltip='Additional information about the complex substance can be specified here'
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
        </div>
        <div>
            <OptionalField
                name={name}
                label='Storage'
                fieldName='storage'
                tooltip='Information about how the complex substance was stored between being acquired and measured, including temperature and duration'
                renderChild={({ optionalFieldName }) => (
                    <FormWrapper
                        headline='Storage'
                        tooltipHeader='Information about how the complex substance was stored between being acquired and measured, including temperature and duration'
                    >
                        <Storage
                            name={optionalFieldName}
                            colorSchema='light'
                        />
                    </FormWrapper>
                )}
            />
        </div>
    </>
  );
}

export default ComplexSubstanceOfIndustrialOrigin;