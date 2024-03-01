import FormWrapper from "../buildingBlocks/FormWrapper";
import Chemical from "./constituent/Chemical";
import Polymer from "./constituent/Polymer";
import ComplexSubstanceOfBiologicalOrigin from "./constituent/ComplexSubstanceOfBiologicalOrigin";
import ComplexSubstanceOfEnvironmentalOrigin from "./constituent/ComplexSubstanceOfEnvironmentalOrigin";
import MolecularAssembly from "./constituent/MolecularAssembly";
import ComplexSubstanceOfChemicalOrigin from "./constituent/ComplexSubstanceOfChemicalOrigin";
import ArrayField from "../buildingBlocks/ArrayField";
import ComplexSubstanceOfIndustrialOrigin from "./constituent/ComplexSubstanceOfIndustrialOrigin";
import { getIn, useFormikContext } from "formik";
import UseDefault from "../buildingBlocks/UseDefault";
import OptionField from "../buildingBlocks/OptionField";

function Constituent( { name } ) {

    const { values } = useFormikContext();

    const componentName = `${name}.chemical_environment[0].type`
   
    UseDefault(values, componentName, 'polymer')

    const ChemicalEnvironmentTabOptions = [
        { value: 'polymer', label: 'Polymer' },
        { value: 'chemical', label: 'Chemical' },
        { value: 'molecular_assembly', label: 'Molecular Assembly' },
        { value: 'complex_substance_of_biological_origin', label: 'Complex substance of biological origin' },
        { value: 'complex_substance_of_environmental_origin', label: 'Complex substance of environmental origin' },
        { value: 'complex_substance_of_chemical_origin', label: 'Complex substance of chemical origin' },
        { value: 'complex_substance_of_industrial_origin', label: 'Complex substance of industrial origin' },
    ];

    return (
      <>
        <div>
            <div>
                <ArrayField
                    name={name}
                    label="Constituent"
                    fieldName='constituent'
                    initialValue={{type: 'polymer'}}
                    renderChild={({ arrayName, index }) => {
                        const actualValue = getIn(values, `${arrayName}.${index}`)
                        if (!actualValue) {return null}
                        return (
                        <FormWrapper
                            colorSchema='light'
                            headline={`Constituent ${index + 1}`}
                            tooltipHeader='List of the constituents, excluding solvent components, that made up the chemical environment (i.e. buffer system, salts, surfactants, crowding agents, serum, etc.)'
                        >
                            <div className="mb-3">
                                <OptionField
                                    name={`${arrayName}.${index}`}
                                    options={ChemicalEnvironmentTabOptions}
                                    label='type'
                                    fieldName='type'
                                    width='w-full'
                                />
                            </div>
                            <div>
                                {actualValue.type === 'polymer' && (
                                    <div>
                                        <Polymer
                                            name={`${arrayName}.${index}`}
                                        />
                                    </div>
                                )}
                                {actualValue.type === 'chemical' && (
                                    <div>
                                        <Chemical
                                            name={`${arrayName}.${index}`}
                                        />
                                    </div>
                                )}
                                {actualValue.type === 'molecular_assembly' && (
                                    <div>
                                        <MolecularAssembly
                                            name={`${arrayName}.${index}`}
                                        />
                                    </div>
                                )}
                                {actualValue.type === 'complex_substance_of_biological_origin' && (
                                    <div>
                                        <ComplexSubstanceOfBiologicalOrigin
                                            name={`${arrayName}.${index}`}
                                        />
                                    </div>
                                )}
                                {actualValue.type === 'complex_substance_of_environmental_origin' && (
                                    <div>
                                        <ComplexSubstanceOfEnvironmentalOrigin
                                            name={`${arrayName}.${index}`}
                                        />
                                    </div>
                                )}
                                {actualValue.type === 'complex_substance_of_chemical_origin' && (
                                    <div>
                                        <ComplexSubstanceOfChemicalOrigin
                                            name={`${arrayName}.${index}`}
                                        />
                                    </div>
                                )}
                                {actualValue.type === 'complex_substance_of_industrial_origin' && (
                                    <div>
                                        <ComplexSubstanceOfIndustrialOrigin
                                            name={`${arrayName}.${index}`}
                                        />
                                    </div>
                                )}
                            </div>
                        </FormWrapper>
                    )}}
                />
            </div>
        </div>
      </>
    );
  }
  
  export default Constituent;