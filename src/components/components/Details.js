import CustomField from "../buildingBlocks/CustomField";
import FormWrapper from "../buildingBlocks/FormWrapper";
import OptionInput from "../buildingBlocks/OptionInput";
import ArrayField from "../buildingBlocks/ArrayField";
import Size from "./Size";
import Components from "./Components";

function Details({ name, values }) {

    const detailsTypeOptions = [
        { value: 'micelle', label: 'Micelle' },
        { value: 'liposome', label: 'Liposome' },
        { value: 'nanodisc', label: 'Nanodisc' },
        { value: 'sheet', label: 'Sheet' },
      ];

  return (
    <>
      <FormWrapper colorSchema='light' headline='Details' tooltipHeader='The chemical origin where the complex substance was derived from'>
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
          <Size name={`${name}.size`} values={values} />
        </div>
        <div>
          <Components
            name={`${name}.components`}
            values={values}
            molecularWeightColorSchema='light'
            tooltip='The components of the lipid assembly'
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
      </FormWrapper>
    </>
  );
}

export default Details;