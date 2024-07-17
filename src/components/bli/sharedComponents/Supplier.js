import ArrayField from "../../buildingBlocks/ArrayField";
import CustomField from "../../buildingBlocks/CustomField";
import FormWrapper from "../../buildingBlocks/FormWrapper";
import OptionalField from "../../buildingBlocks/OptionalField";

function Supplier({ name, colorSchema, tooltip }) {
  return (
    <>
      <FormWrapper
        headline="Supplier"
        colorSchema={colorSchema}
        tooltip={tooltip}
      >
        <div className="flex">
          <div className="mr-3">
            <CustomField
              name={name}
              label="Name"
              fieldName="name"
              required
              tooltip="Name of the supplier"
            />
          </div>
          <div className="-mt-3 mr-3">
            <OptionalField
              name={name}
              label="Catalog number"
              fieldName="catalog_number"
              tooltip="The catalog number or identifier of the item"
              renderChild={({ optionalFieldName }) => (
                <CustomField
                  name={optionalFieldName}
                  label="Catalog number"
                  type="number"
                  tooltip="The catalog number or identifier of the item"
                />
              )}
            />
          </div>
          <div className="-mt-3">
            <ArrayField
              name={name}
              label="Futher information"
              fieldName="futher_information"
              tooltip="Further information e.g. batch number"
              renderChild={({ arrayName, index }) => (
                <CustomField
                  name={`${arrayName}.${index}`}
                  label={`Futher information ${index + 1}`}
                  tooltip="Further information e.g. batch number"
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
