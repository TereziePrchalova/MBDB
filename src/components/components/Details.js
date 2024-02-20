import CustomField from "../buildingBlocks/CustomField";
import FormWrapper from "../buildingBlocks/FormWrapper";
import OptionInput from "../buildingBlocks/OptionInput";
import Size from "./Size";

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
        <div>
          <Size name={`${name}.size`} values={values} />
        </div>
      </FormWrapper>
    </>
  );
}

export default Details;