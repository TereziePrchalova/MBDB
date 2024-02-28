import FormWrapper from "../buildingBlocks/FormWrapper";
import Chemical from "../entitiesOfInterest/Chemical";
import Polymer from "../entitiesOfInterest/Polymer";
import OptionInput from "../buildingBlocks/OptionInput";
import UseDefault from "../buildingBlocks/UseDefault";
import { useState } from "react";
import ComplexSubstanceOfBiologicalOrigin from "../entitiesOfInterest/ComplexSubstanceOfBiologicalOrigin";
import ComplexSubstanceOfEnvironmentalOrigin from "../entitiesOfInterest/ComplexSubstanceOfEnvironmentalOrigin";
import MolecularAssembly from "../entitiesOfInterest/MolecularAssembly";
import ComplexSubstanceOfIndustrialProductionOrigin from "../entitiesOfInterest/ComplexSubstanceOfIndustrialProductionOrigin";
import ComplexSubstanceOfChemicalOrigin from "../entitiesOfInterest/ComplexSubstanceOfChemicalOrigin";
import ArrayFieldFirstElementRequired from "../buildingBlocks/ArrayFieldFirstElementRequired";

function EntitiesOfInterestTab( { name, values } ) {

    const componentName = `${name}.entities_of_interest[0].type`
   
    UseDefault(values, componentName, 'polymer')

    const entitiesOfInterestTabOptions = [
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
        <div className="-mt-3">
            <ArrayFieldFirstElementRequired
                name={name}
                values={values}
                label="Entity of interest"
                fieldName='entities_of_interest'
                renderChild={({ arrayName, index }) => (
                    <FormWrapper 
                        headline={`Entity of interest ${index + 1}`} 
                        tooltipHeader='List of the entities that are being directly measured, as well as the entities that are being used as a variable to influence the behavior of the directly measured entities (e.g. lysozyme, NAG3,NaCl). IMPORTANT! If the pH was varied by individually prepared chemical environments these should be specified individually in chemical environments'
                    >
                        <div className="mb-3">
                            <OptionInput
                                name={`${arrayName}.${index}`}
                                options={entitiesOfInterestTabOptions}
                                label='type'
                                fieldName='type'
                                width='w-full'
                                onOptionChange={(value) => handleOptionChange(value, index)}
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
      </>
    );
  }
  
  export default EntitiesOfInterestTab;