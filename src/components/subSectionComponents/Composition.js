import CustomField from "../buildingBlocks/CustomField";
import FormWrapper from "../buildingBlocks/FormWrapper";
import OptionInput from "../buildingBlocks/OptionInput";
import MolecularWeight from "../components/MolecularWeight";
import Supplier from "../components/Supplier";
import QualityControls from "./QualityControls";

function Composition( { name } ) {

    const typeOptions = [
        { value: 'chemical', label: 'Chemical' },
    ];

  return (
    <>
        <FormWrapper headline='Composition' colorSchema='light'>
            <div className="flex mb-2">
                <div>
                    <OptionInput
                        name={name}
                        label='Type'
                        fieldName='type'
                        options={typeOptions}
                        colorSchema='light'
                        width='w-[10rem]'
                    />
                </div>
                <div className="mx-3">
                    <CustomField
                        label='Name'
                        name={name}
                        fieldName='name'
                        colorSchema='light'
                        width='w-[10rem]'
                    />
                </div>
                <div className="mr-3">
                    <CustomField
                        label='inchiKey'
                        name={name}
                        fieldName='inchikey'
                        colorSchema='light'
                        width='w-[10rem]'
                    />
                </div>
                <div>
                    <CustomField
                        label='Isotopic labeling'
                        name={name}
                        fieldName='isotopic_labeling'
                        colorSchema='light'
                        width='w-[10rem]'
                    />
                </div>
            </div>

            <div className="mb-2">
                <MolecularWeight colorSchema='' name={`${name}.molecular_weight`} />
            </div>

            <div className="mb-2">
                <Supplier name={`${name}.supplier`} />
            </div>

            <div>
                <QualityControls name={`${name}.quality_controls`} />
            </div>
        </FormWrapper>           
    </>
  );
}

export default Composition;