import FormWrapper from "../buildingBlocks/FormWrapper";
import Chemical from "../chemicalEnvironment/Chemical";
import Polymer from "../chemicalEnvironment/Polymer";
import OptionInput from "../buildingBlocks/OptionInput";
import { useState } from "react";
import ComplexSubstanceOfBiologicalOrigin from "../chemicalEnvironment/ComplexSubstanceOfBiologicalOrigin";
import ComplexSubstanceOfEnvironmentalOrigin from "../entitiesOfInterest/ComplexSubstanceOfEnvironmentalOrigin";
import MolecularAssembly from "../chemicalEnvironment/MolecularAssembly";
import ComplexSubstanceOfIndustrialProductionOrigin from "../entitiesOfInterest/ComplexSubstanceOfIndustrialProductionOrigin";
import ComplexSubstanceOfChemicalOrigin from "../entitiesOfInterest/ComplexSubstanceOfChemicalOrigin";
import ArrayField from "../buildingBlocks/ArrayField";

function Constituent( { name, values } ) {

    const ChemicalEnvironmentTabOptions = [
        { value: 'polymer', label: 'Polymer' },
        { value: 'chemical', label: 'Chemical' },
        { value: 'moleculal_assembly', label: 'Molecular Assembly' },
        { value: 'complex_substance_of_biological_origin', label: 'Complex substance of biological origin' },
        { value: 'complex_substance_of_environmental_origin', label: 'Complex substance of environmental origin' },
        { value: 'complex_substance_of_chemical_origin', label: 'Complex substance of chemical origin' },
        { value: 'complex_substance_of_industrial_production_origin', label: 'Complex substance of industrial production origin' },
    ];

    const [selectedOption, setSelectedOption] = useState(['polymer']);
    
    const handleOptionChange = (value, index) => {
        setSelectedOption(prevOptions => {
            const updatedOptions = [...prevOptions];
            updatedOptions[index] = value;
            return updatedOptions;
        });
    };

    return (
      <>
        <div>
            <div>
                <ArrayField
                    name={name}
                    values={values}
                    label="Constituent"
                    fieldName='constituent'
                    renderChild={({ arrayName, index }) => (
                        <FormWrapper
                            colorSchema='light'
                            headline={`Constituent ${index + 1}`}
                            tooltipHeader='List of the constituents, excluding solvent components, that made up the chemical environment (i.e. buffer system, salts, surfactants, crowding agents, serum, etc.)'
                        >
                            <div className="mb-3">
                                <OptionInput
                                    name={`${arrayName}.${index}`}
                                    options={ChemicalEnvironmentTabOptions}
                                    label='type'
                                    fieldName='type'
                                    onOptionChange={(value) => handleOptionChange(value, index)}
                                    width='w-full'
                                />
                            </div>
                            <div>
                                {selectedOption[index] === 'polymer' && (
                                    <div>
                                        <Polymer
                                            name={`${arrayName}.${index}`}
                                            values={values}
                                        />
                                    </div>
                                )}
                                {selectedOption[index] === 'chemical' && (
                                    <div>
                                        <Chemical
                                            name={`${arrayName}.${index}`}
                                            values={values}
                                        />
                                    </div>
                                )}
                                {selectedOption[index] === 'moleculal_assembly' && (
                                    <div>
                                        <MolecularAssembly
                                            name={`${arrayName}.${index}`}
                                            values={values}
                                        />
                                    </div>
                                )}
                                {selectedOption[index] === 'complex_substance_of_biological_origin' && (
                                    <div>
                                        <ComplexSubstanceOfBiologicalOrigin
                                            name={`${arrayName}.${index}`}
                                            values={values}
                                        />
                                    </div>
                                )}
                                {selectedOption[index] === 'complex_substance_of_environmental_origin' && (
                                    <div>
                                        <ComplexSubstanceOfEnvironmentalOrigin
                                            name={`${arrayName}.${index}`}
                                            values={values}
                                        />
                                    </div>
                                )}
                                {selectedOption[index] === 'complex_substance_of_chemical_origin' && (
                                    <div>
                                        <ComplexSubstanceOfChemicalOrigin
                                            name={`${arrayName}.${index}`}
                                            values={values}
                                        />
                                    </div>
                                )}
                                {selectedOption[index] === 'complex_substance_of_industrial_production_origin' && (
                                    <div>
                                        <ComplexSubstanceOfIndustrialProductionOrigin
                                            name={`${arrayName}.${index}`}
                                            values={values}
                                        />
                                    </div>
                                )}
                            </div>
                        </FormWrapper>
                    )}
                />
            </div>
        </div>
      </>
    );
  }
  
  export default Constituent;