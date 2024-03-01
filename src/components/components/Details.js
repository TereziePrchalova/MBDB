import CustomField from "../buildingBlocks/CustomField";
import FormWrapper from "../buildingBlocks/FormWrapper";
import OptionInput from "../buildingBlocks/OptionInput";
import ArrayField from "../buildingBlocks/ArrayField";
import Size from "./Size";
import Components from "./Components";

function Details({ name, colorSchema, sizeColorSchema, molecularWeightColorSchema, colorSchemaWrapper, colorSchemaProtocol }) {

    const detailsTypeOptions = [
        { value: 'Micelle', label: 'Micelle' },
        { value: 'Liposome', label: 'Liposome' },
        { value: 'Nanodisc', label: 'Nanodisc' },
        { value: 'Sheet', label: 'Sheet' },
      ];

  return (
    <>
      <FormWrapper colorSchema={colorSchema} headline='Details' tooltipHeader='The chemical origin where the complex substance was derived from'>
        <div className="flex mb-3">
          <div className="mr-3">
              <OptionInput
                  name={name}
                  options={detailsTypeOptions}
                  fieldName='type'
                  label='Type'
                  tooltip='The type of lipid assembly'
              />
          </div>
          <div>
              <CustomField 
                  name={name}
                  fieldName='number_of_mono_layers'
                  label='Number of mono layers'
                  tooltip='The number of lipid mono layers in the lipid assembly, -1 if unknown'
              />
          </div>
        </div>
        <div className="mb-3">
          <Size
            name={`${name}.size`}
            colorSchema={sizeColorSchema}
          />
        </div>
        <div>
          <Components
            name={`${name}.components`}
            molecularWeightColorSchema={molecularWeightColorSchema}
            colorSchemaWrapper={colorSchemaWrapper}
            colorSchema={sizeColorSchema}
            colorSchemaProtocol={colorSchemaProtocol}
            tooltip='The components of the lipid assembly'
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
                        tooltip='Additional information about the lipid assembly, if applicable'
                    />
                )}
            />
        </div>
      </FormWrapper>
    </>
  );
}

export default Details;