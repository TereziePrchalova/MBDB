import ArrayField from "../buildingBlocks/ArrayField";
import CustomField from "../buildingBlocks/CustomField";
import FormWrapper from "../buildingBlocks/FormWrapper";
import OptionInput from "../buildingBlocks/OptionInput";
import Protocol from "../buildingBlocks/Protocol";
import MolecularWeight from "./MolecularWeight";
import Modification from "./Modification";

function Chemical( { name, values} ) {

  return (
    <>
        <div className='flex mb-3'>
          <div className='mr-3'>
            <CustomField name={name} label='Name' fieldName='name' />
          </div>
          <div className="mr-3">
            <CustomField name={name} label='Inchikey' fieldName='inchikey' />
          </div>
          <div>
            <CustomField name={name} label='Isotopic labeling' fieldName='isotopic_labeling' />
          </div>
        </div>
        <div className="-mx-3">
            <MolecularWeight name={`${name}.molecular_weight`} />
        </div>
        <div className="flex">
            <div className="mr-3">
                <ArrayField
                    name={name}
                    values={values}
                    label='Additional identifier'
                    fieldName='additional_identifiers'
                    renderChild={({ name, index }) => (
                        <CustomField
                            name={name}
                            index={index}
                            label={`Additional identifier ${index + 1}`}
                            fieldName='additional_identifiers'
                        />
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
                        />
                    )}
                />
            </div>
        </div>
    </>
  );
}

export default Chemical;