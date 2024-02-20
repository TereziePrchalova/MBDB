import ArrayField from "../buildingBlocks/ArrayField";
import CustomField from "../buildingBlocks/CustomField";
import MolecularWeight from "./MolecularWeight";

function Chemical( { name, values } ) {

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
            <CustomField
              name={name}
              label='Inchikey'
              fieldName='inchikey'
              tooltip='InChIKey identifier of the chemical. In case of chemical polymers please specify the InChIKey of the monomer and specify the specific type in the additional identifiers field (e.g. if PEG 3350 was employed, the InChiKey of ethylene glycol, i.e. LYCAIKOWRPUZTN-UHFFFAOYSA-N should be specified here)'
            />
          </div>
          <div>
            <CustomField
              name={name}
              label='Isotopic labeling'
              fieldName='isotopic_labeling'
              tooltip='If the isotopic composition of the chemical was altered from the naturally occurring abundances, it can be specified here (e.g. 15N, 13C)'
            />
          </div>
        </div>
        <div className="-mx-3">
            <MolecularWeight
              name={`${name}.molecular_weight`}
              tooltipHeader='The molecular weight of the chemical'
            />
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
                            tooltip='Unique and persistent identifier from an external source; options of sources are CAS number, Pubchem Compound ID, and Pubchem Substance ID'
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

export default Chemical;