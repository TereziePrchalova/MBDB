import ArrayField from "../../buildingBlocks/ArrayField";
import CustomField from "../../buildingBlocks/CustomField";
import FormWrapper from "../../buildingBlocks/FormWrapper";

function Supplier( { name, colorSchema } ) {

  return (
    <>
        <FormWrapper
            headline='Supplier'
            colorSchema={colorSchema}
            tooltipHeader='Information about the supplier of the plate'
        >
            <div className='flex'>
                <div className='mr-3'>
                    <CustomField
                        name={name}
                        label='Name'
                        fieldName='name'
                        tooltip='Name of the supplier'
                    />
                </div>
                <div className="-mt-3 mr-3">
                    <ArrayField
                        name={name}
                        label='Catalog number'
                        fieldName='catalog_number'
                        maxItems={1}
                        tooltip='The catalog number or identifier of the item'
                        renderChild={({ arrayName, index }) => (
                                <CustomField
                                    name={`${arrayName}.${index}`}
                                    label='Catalog number'
                                    type='number'
                                    tooltip='The catalog number or identifier of the item'
                                />
                        )}
                    />
                </div>
                <div className="-mt-3">
                    <ArrayField
                        name={name}
                        label='Futher information'
                        fieldName='futher_information'
                        tooltip='The catalog number or identifier of the item'
                        renderChild={({ arrayName, index }) => (
                                <CustomField
                                    name={`${arrayName}.${index}`}
                                    label={`Futher information ${index + 1}`}
                                    tooltip='The catalog number or identifier of the item'
                                />
                        )}
                    />
                </div>
            </div>
        </FormWrapper>
    </>
  );
}

export default Supplier;