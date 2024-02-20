import CustomField from "../buildingBlocks/CustomField";
import FormWrapper from "../buildingBlocks/FormWrapper";
import OptionInput from "../buildingBlocks/OptionInput";

function Size( { name } ) {

    const typeOptions = [
        { value: 'radius', label: 'Radius' },
        { value: 'diameter', label: 'Diameter' },
        { value: 'path_length', label: 'Path length' },
      ];

    const unitOptions = [
        { value: 'nm', label: 'nm' },
        { value: 'μm', label: 'μm' },
        { value: 'mm', label: 'mm' },
        { value: 'cm', label: 'cm' },
        { value: 'm', label: 'm' },
      ];

  return (
    <>
      <FormWrapper headline='Size' tooltipHeader='The size of the lipid assembly'>
        <div className="flex mb-3">
          <div className="mr-3">
              <OptionInput
                  name={name}
                  options={typeOptions}
                  fieldName='type'
                  label='Type'
                  tooltip='The type of size (e.g. radius)'
              />
          </div>
          <div className="mr-3">
              <CustomField
                name={name}
                fieldName='mean'
                label='Mean'
                tooltip='The mean of the size'
              />
          </div>
          <div>
              <OptionInput
                  name={name}
                  options={unitOptions}
                  fieldName='unit'
                  label='Unit'
                  tooltip='The unit of the size'
              />
          </div>
        </div>
        <div className="flex">
          <div className="mr-3">
              <CustomField
                name={name}
                fieldName='median'
                label='Median'
                tooltip='The median of the size'
              />
          </div>
          <div className="mr-3">
              <CustomField
                name={name}
                fieldName='upper'
                label='Upper'
                tooltip='The upper bound of the size'
              />
          </div>
          <div>
              <CustomField
                name={name}
                fieldName='lower'
                label='Lower'
                tooltip='The lower bound of the size'
              />
          </div>
        </div>
      </FormWrapper>
    </>
  );
}

export default Size;