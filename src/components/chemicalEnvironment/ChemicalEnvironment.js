import Constituent from "../components/Constituent";
import Solvent from "../components/Solvent";
import CustomField from "../buildingBlocks/CustomField";
import Ph from "../components/Ph";
import ArrayField from "../buildingBlocks/ArrayField";


function ChemicalEnvironment( { name, values } ) {

  return (
    <>
        <div className="mb-3">
            <CustomField
                name={name}
                fieldName='name'
                label='Name'
                tooltip='Name of the chemical environment (e.g. Measurement Buffer). The name must be unique within a record as it will be referred to the in method specific section in when describing the composition of the individual samples or measurement steps'
            />
        </div>
        <div>
            <Ph
                name={`${name}.pH`}
                values={values}
                tooltipHeader='The pH value of the chemical environment and how the value was determined'
                colorSchema='light'
            />
        </div>
        <div>
            <Solvent name={`${name}.solvent`} values={values} />
        </div>
        <div>
            <Constituent name={`${name}.contituent`} values={values} />
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
                        tooltip='Additional information about the chemical environment can be specified here (e.g. prepared just prior to conducting the measurement, additional treatments like UV irradiation, specific storage container of chemical environment if that influenced the measurement etc.)'
                    />
                )}
            />
        </div>
    </>
  );
}

export default ChemicalEnvironment;