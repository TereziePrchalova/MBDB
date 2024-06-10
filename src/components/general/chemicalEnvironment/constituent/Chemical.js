import ArrayField from "../../../buildingBlocks/ArrayField";
import CustomField from "../../../buildingBlocks/CustomField";
import Concentration from "../../../sharedComponents/Concentration";

function Chemical( { name } ) {

  return (
    <>
      <div className="mb-3">
        <CustomField
          name={name}
          label='Name'
          fieldName='name'
          required={true}
          tooltip='Name of the chemical'
          width='w-full'
        />
      </div>
      <div className="mb-3">
        <Concentration
          name={`${name}.concentration`}
          tooltip='Concentration of the constituent including its relative concentration related to the collected sample or absolute concentration of the constituent'
        />
      </div>
      <div className='flex'>
          <div className='mr-3'>
            <CustomField
              name={name}
              label='Basic information'
              fieldName='basic_information'
              required={true}
              tooltip='The basic information about the chemical. This information is pulled from Pubchem, however if the information is not available it can be manually filled'
            />
          </div>
          <div className="-mt-3">
              <ArrayField
                  name={name}
                  label='Additional specification'
                  fieldName='additional_specifications'
                  tooltip='Additional information about the chemical can be specified here (e.g. RNase free water, recrystallization, desalting)'
                  renderChild={({ arrayName, index }) => (
                      <CustomField
                          name={`${arrayName}.${index}`}
                          label={`Additional specification ${index + 1}`}
                          width='w-[15rem]'
                          tooltip='Additional information about the chemical can be specified here (e.g. RNase free water, recrystallization, desalting)'
                      />
                  )}
              />
          </div>
      </div>
    </>
  );
}

export default Chemical;