import ArrayField from "../buildingBlocks/ArrayField";
import CustomField from "../buildingBlocks/CustomField";
import FormWrapper from "../buildingBlocks/FormWrapper";
import OptionInput from "../buildingBlocks/OptionInput";
import Protocol from "../buildingBlocks/Protocol";
import MolecularWeight from "./MolecularWeight";
import Modification from "./Modification";

function Polymer( { name, values} ) {

    const polymerTypeOptions = [
        { value: 'cyclic_pseudo_peptide', label: 'Cyclic pseudo peptide' },
        { value: 'peptide_nucleic_acid', label: 'Peptide nucleic acid' },
        { value: 'polydeoxyribonucleotide', label: 'Polydeoxyribonucleotide' },
        { value: 'polydeoxyribonucleotide_polyribonucleotide_hybrid', label: 'Polydeoxyribonucleotide / polyribonucleotide hybrid' },
        { value: 'polypeptide(D)', label: 'Polypeptide(D)' },
        { value: 'polypeptide(L)', label: 'Polypeptide(L)' },
        { value: 'polyribonucleotide', label: 'Polyribonucleotide' },
      ];

      const expressionSourceTypeOptions = [
        { value: 'natively', label: 'Natively' },
        { value: 'recombinantly', label: 'Recombinantly' },
        { value: 'synthetically', label: 'Synthetically' },
      ];

  return (
    <>
        <div className='flex mb-3'>
          <div className='mr-3'>
            <CustomField name={name} label='Name' fieldName='name' />
          </div>
          <div className="mr-3">
            <OptionInput name={name} label='Polymer type' fieldName='polymer_type' options={polymerTypeOptions} />
          </div>
          <div>
            <CustomField name={name} label='Sequence' fieldName='sequence' />
          </div>
        </div>
        <div className="flex">
            <div className="mr-3">
                <CustomField name={name} label='Variant' fieldName='variant' />
            </div>
            <div className="mr-3">
                <CustomField name={name} label='Source organism' fieldName='source_organism' />
            </div>
            <div className="mr-3">
                <OptionInput name={name} label='Expression source type' fieldName='expression_source_type' options={expressionSourceTypeOptions} />
            </div>
            <div>
                <CustomField name={name} label='Expression organism' fieldName='expression_organism' />
            </div>
        </div>
        <div className="-mx-3">
            <MolecularWeight name={`${name}.molecular_weight`} />
        </div>
        <div>
            <ArrayField
                name={name}
                values={values}
                label='Synthesis'
                fieldName='synthesis'
                renderChild={({ arrayName, index }) => (
                    <FormWrapper colorSchema='light' headline={`Synthesis ${index + 1}`}>
                        <Modification
                            name={`${arrayName}.${index}`}
                            values={values}
                            fieldName='synthesis'
                        />
                    </FormWrapper>
                )}
            />
        </div>
        <div>
            <ArrayField
                name={name}
                values={values}
                label='Biological postprocessing'
                fieldName='biological_postprocessing'
                renderChild={({ arrayName, index }) => (
                    <FormWrapper colorSchema='light' headline={`Biological postprocessing ${index + 1}`}>
                        <Modification
                            name={`${arrayName}.${index}`}
                            values={values}
                            fieldName='biological_postprocessing'
                        />
                    </FormWrapper>
                )}
            />
        </div>
        <div>
            <ArrayField
                name={name}
                values={values}
                label='Chemical'
                fieldName='chemical'
                renderChild={({ arrayName, index }) => (
                    <FormWrapper colorSchema='light' headline={`Chemical ${index + 1}`}>
                        <Modification
                            name={`${arrayName}.${index}`}
                            values={values}
                            fieldName='chemical'
                        />
                    </FormWrapper>
                )}
            />
        </div>
        <div className="flex">
            <div className="mr-3">
                <ArrayField
                    name={name}
                    values={values}
                    label='External Database'
                    fieldName='external_databases'
                    renderChild={({ name, index }) => (
                        <CustomField
                            name={name}
                            index={index}
                            label={`External database ${index + 1}`}
                            fieldName='external_databases'
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

export default Polymer;