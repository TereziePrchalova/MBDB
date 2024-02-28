import ArrayField from "../buildingBlocks/ArrayField";
import CustomField from "../buildingBlocks/CustomField";
import OptionInput from "../buildingBlocks/OptionInput";
import MolecularWeight from "../components/MolecularWeight";
import MyContext from "../buildingBlocks/MyContext";
import { useContext } from "react";
import Modifications from "../components/Modifications";

function Polymer( { name, values } ) {

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
      
        const { setInputValue } = useContext(MyContext);

        const handleChange = (e) => {
            setInputValue(e.target.value);
        };

  return (
    <>
        <div className='flex mb-3'>
          <div className='mr-3'>
            <CustomField
                name={name}
                label='Name'
                fieldName='name'
                onChange={handleChange}
                tooltip='Short descriptive name (id) of the entity; must be unique within a record (e.g. Lysozyme, Serum from Patient 1). This name is referenced in the measurement description to identify the entities present in measured sample'
            />
          </div>
          <div>
            <OptionInput
                name={name}
                label='Polymer type'
                fieldName='polymer_type'
                options={polymerTypeOptions}
                tooltip='The type of polymer (e.g. polypeptide(L))'
            />
          </div>
        </div>
        <div className="mb-3">
          <div>
            <CustomField 
                name={name}
                label='Sequence'
                fieldName='sequence'
                tooltip='Primary sequence of the polymer, using single letter codes (e.g. SAGRELLE, AGTTA). In case of non-natural amino acids or nucleotides, please place the monomer in brackets'
                multiline={true}
                width='w-full'
            />
          </div>
        </div>
        <div className="flex mb-3">
            <div className="mr-3">
                <CustomField
                    name={name}
                    label='Variant'
                    fieldName='variant'
                    tooltip='Descriptive name indicating differences of primary sequence of the polymer as compared to the most common form, or wildtype, including mutations, purification tags, etc. (A53T, C-terminal GFP, N-terminal 6xHis-tag)'    
                />
            </div>
            <div className="mr-3">
                <CustomField
                    name={name}
                    label='Source organism'
                    fieldName='source_organism'
                    tooltip='The biological species where the polymer naturally occurs. Note that this is based on the NCBI taxonomy'
                />
            </div>
            <div className="mr-3">
                <OptionInput
                    name={name}
                    label='Expression source'
                    fieldName='expression_source_type'
                    options={expressionSourceTypeOptions}
                    tooltip='How the polymer was produced'
                />
            </div>
            <div>
                <CustomField
                    name={name}
                    label='Expression organism'
                    fieldName='expression_organism'
                    tooltip='The biological species where the polymer naturally occurs. Note that this is based on the NCBI taxonomy'
                />
            </div>
        </div>
        <div>
            <MolecularWeight 
                name={`${name}.molecular_weight`}
                colorSchema='light'
                tooltipHeader='The molecular weight of the polymer'
            />
        </div>
        <div>
            <Modifications
                name={`${name}.modifications`}
                colorSchemaWrapper='light'
                values={values}
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
                            width='w-[15rem]'
                            tooltip='List of identifiers to records in external databases containing information about the polymer can be specified here (e.g UNIPROT:Q8KRF6)'
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
                            tooltip='Additional information about the chemical can be specified here (e.g. RNase free water, recrystallization, desalting)'
                        />
                    )}
                />
            </div>
        </div>
    </>
  );
}

export default Polymer;