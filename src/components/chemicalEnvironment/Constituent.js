import FormWrapper from "../buildingBlocks/FormWrapper";
import Chemical from "./constituent/Chemical";
import Polymer from "./constituent/Polymer";
import OptionInput from "../buildingBlocks/OptionInput";
import ComplexSubstanceOfBiologicalOrigin from "./constituent/ComplexSubstanceOfBiologicalOrigin";
import ComplexSubstanceOfEnvironmentalOrigin from "./constituent/ComplexSubstanceOfEnvironmentalOrigin";
import MolecularAssembly from "./constituent/MolecularAssembly";
import ComplexSubstanceOfChemicalOrigin from "./constituent/ComplexSubstanceOfChemicalOrigin";
import ArrayField from "../buildingBlocks/ArrayField";
import ComplexSubstanceOfIndustrialOrigin from "./constituent/ComplexSubstanceOfIndustrialOrigin";
import { getIn, useFormikContext } from "formik";

function Constituent( { name } ) {

    const { values } = useFormikContext()

    const ChemicalEnvironmentTabOptions = [
        { value: 'Polymer', label: 'Polymer' },
        { value: 'Chemical', label: 'Chemical' },
        { value: 'Molecular Assembly', label: 'Molecular Assembly' },
        { value: 'Complex substance of biological origin', label: 'Complex substance of biological origin' },
        { value: 'Complex substance of environmental origin', label: 'Complex substance of environmental origin' },
        { value: 'Complex substance of chemical origin', label: 'Complex substance of chemical origin' },
        { value: 'Complex substance of industrial origin', label: 'Complex substance of industrial origin' },
    ];

    return (
      <>
        <div>
            <div>
                <ArrayField
                    name={name}
                    label="Constituent"
                    fieldName='constituent'
                    initialValue={{type: 'Polymer'}}
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
                                <OptionInput
                                    name={`${arrayName}.${index}`}
                                    options={ChemicalEnvironmentTabOptions}
                                    label='type'
                                    fieldName='type'
                                    width='w-full'
                                />
                            </div>
                            <div>
                                {actualValue.type === 'Polymer' && (
                                    <div>
                                        <Polymer
                                            name={`${arrayName}.${index}`}
                                        />
                                    </div>
                                )}
                                {actualValue.type === 'Chemical' && (
                                    <div>
                                        <Chemical
                                            name={`${arrayName}.${index}`}
                                        />
                                    </div>
                                )}
                                {actualValue.type === 'Molecular Assembly' && (
                                    <div>
                                        <MolecularAssembly
                                            name={`${arrayName}.${index}`}
                                        />
                                    </div>
                                )}
                                {actualValue.type === 'Complex substance of biological origin' && (
                                    <div>
                                        <ComplexSubstanceOfBiologicalOrigin
                                            name={`${arrayName}.${index}`}
                                        />
                                    </div>
                                )}
                                {actualValue.type === 'Complex substance of environmental origin' && (
                                    <div>
                                        <ComplexSubstanceOfEnvironmentalOrigin
                                            name={`${arrayName}.${index}`}
                                        />
                                    </div>
                                )}
                                {actualValue.type === 'Complex substance of chemical origin' && (
                                    <div>
                                        <ComplexSubstanceOfChemicalOrigin
                                            name={`${arrayName}.${index}`}
                                        />
                                    </div>
                                )}
                                {actualValue.type === 'Complex substance of industrial origin' && (
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