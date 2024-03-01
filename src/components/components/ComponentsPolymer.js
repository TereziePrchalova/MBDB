import ArrayField from "../buildingBlocks/ArrayField";
import CustomField from "../buildingBlocks/CustomField";
import MolecularWeight from "../components/MolecularWeight";
import Modifications from "../components/Modifications";
import OptionField from "../buildingBlocks/OptionField";

function ComponentsPolymer( { name, molecularWeightColorSchema, colorSchemaWrapper, colorSchemaProtocol } ) {

    const polymerTypeOptions = [
        { value: 'Cyclic pseudo peptide', label: 'Cyclic pseudo peptide' },
        { value: 'Peptide nucleic acid', label: 'Peptide nucleic acid' },
        { value: 'Polydeoxyribonucleotide', label: 'Polydeoxyribonucleotide' },
        { value: 'Polydeoxyribonucleotide / polyribonucleotide hybrid', label: 'Polydeoxyribonucleotide / polyribonucleotide hybrid' },
        { value: 'Polypeptide(D)', label: 'Polypeptide(D)' },
        { value: 'Polypeptide(L)', label: 'Polypeptide(L)' },
        { value: 'Polyribonucleotide', label: 'Polyribonucleotide' },
      ];

      const expressionSourceTypeOptions = [
        { value: 'Natively', label: 'Natively' },
        { value: 'Recombinantly', label: 'Recombinantly' },
        { value: 'Synthetically', label: 'Synthetically' },
      ];

  return (
    <>
        <div className='flex mb-3'>
          <div className='mr-3'>
            <CustomField
                name={name}
                label='Name'
                fieldName='name'
                tooltip='Short descriptive name (id) of the entity; must be unique within a record (e.g. Lysozyme, Serum from Patient 1). This name is referenced in the measurement description to identify the entities present in measured sample'
            />
          </div>
          <div className="mr-3">
            <OptionField
                name={name}
                label='Polymer type'
                fieldName='polymer_type'
                options={polymerTypeOptions}
                tooltip='The type of polymer (e.g. polypeptide(L))'
            />
          </div>
          <div>
            <CustomField
                name={name}
                label='Copy number'
                fieldName='copy_number'
                type='number'
                tooltip='Number of molecules of the component within the assembly, -1 if unknown'
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
                />
            </div>
            <div className="mr-3">
                <OptionField
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
                />
            </div>
        </div>
        <div>
            <MolecularWeight 
                name={`${name}.molecular_weight`}
                tooltipHeader='The molecular weight of the polymer'
                colorSchema={molecularWeightColorSchema}
            />
        </div>
        <div>
            <Modifications
                name={`${name}.modifications`}
                colorSchemaWrapper={colorSchemaWrapper}
                colorSchemaProtocol={colorSchemaProtocol}
            />
        </div>
        <div className="flex">
            <div className="mr-3">
                <ArrayField
                    name={name}
                    label='External Database'
                    fieldName='external_databases'
                    renderChild={({ arrayName, index }) => (
                        <CustomField
                            name={arrayName}
                            index={index}
                            label={`External database ${index + 1}`}
                            width='w-[15rem]'
                            tooltip='List of identifiers to records in external databases containing information about the polymer can be specified here (e.g UNIPROT:Q8KRF6)'
                        />
                    )}
                />
            </div>
            <div>
                <ArrayField
                    name={name}
                    label='Additional specification'
                    fieldName='additional_specifications'
                    renderChild={({ arrayName, index }) => (
                        <CustomField
                            name={arrayName}
                            index={index}
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

export default ComponentsPolymer;