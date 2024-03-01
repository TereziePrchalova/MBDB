import FormWrapper from "../buildingBlocks/FormWrapper";
import Chemical from "../entitiesOfInterest/Chemical";
import Polymer from "../entitiesOfInterest/Polymer";
import OptionInput from "../buildingBlocks/OptionInput";
import UseDefault from "../buildingBlocks/UseDefault";
import ComplexSubstanceOfBiologicalOrigin from "../entitiesOfInterest/ComplexSubstanceOfBiologicalOrigin";
import MolecularAssembly from "../entitiesOfInterest/MolecularAssembly";
import ComplexSubstanceOfIndustrialOrigin from "../entitiesOfInterest/ComplexSubstanceOfIndustrialOrigin";
import ComplexSubstanceOfEnvironmentalOrigin from "../entitiesOfInterest/ComplexSubstanceOfEnvironmentalOrigin";
import ComplexSubstanceOfChemicalOrigin from "../entitiesOfInterest/ComplexSubstanceOfChemicalOrigin";
import ArrayField from "../buildingBlocks/ArrayField";
import { getIn, useFormikContext } from "formik";

function EntitiesOfInterestTab( { name } ) {

    const { values } = useFormikContext();

    const componentName = `${name}.entities_of_interest[0].type`
   
    UseDefault(values, componentName, 'polymer')

    const entitiesOfInterestTabOptions = [
        { value: 'polymer', label: 'Polymer' },
        { value: 'chemical', label: 'Chemical' },
        { value: 'moleculal_assembly', label: 'Molecular Assembly' },
        { value: 'complex_substance_of_biological_origin', label: 'Complex substance of biological origin' },
        { value: 'complex_substance_of_environmental_origin', label: 'Complex substance of environmental origin' },
        { value: 'complex_substance_of_chemical_origin', label: 'Complex substance of chemical origin' },
        { value: 'complex_substance_of_industrial_origin', label: 'Complex substance of industrial origin' },
    ];

    return (
      <>
        <div className="-mt-3">
            <ArrayField
                name={name}
                label="Entity of interest"
                fieldName='entities_of_interest'
                initialValue={{type: 'polymer'}}
                required={true}
                renderChild={({ arrayName, index }) =>  {
                    const actualValue = getIn(values, `${arrayName}.${index}`)
                    if (!actualValue) {return null}
                    return (
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
                            {actualValue.type === 'moleculal_assembly' && (
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
      </>
    );
  }
  
  export default EntitiesOfInterestTab;