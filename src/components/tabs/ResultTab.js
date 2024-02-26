import { useState } from "react";
import FormWrapper from "../buildingBlocks/FormWrapper";
import OptionInput from "../buildingBlocks/OptionInput";
import UseDefault from "../buildingBlocks/UseDefault";
import ArrayField from "../buildingBlocks/ArrayField";
import Concentration from "../result/Concentration";
import Stoichiometry from "../result/Stoichiometry";
import ConstantOfAssociationKA from "../result/ConstantOfAssociationKA";
import ConstantOfDissociationKD from "../result/ConstantOfDissociationKD";
import AssociationRateKOn from "../result/AssociationRateKOn";
import DissociationRateKOff from "../result/DissociationRateKOff";
import ChangeInEnthalpyDeltaH from "../result/ChangeInEnthalpyDeltaH";
import ChangeInEntropyDeltaS from "../result/ChangeInEntropyDeltaS";
import MolecularWeightMW from "../result/MolecularWeightMW";
import HalfMaximalEffectiveConcentrationEC50 from "../result/HalfMaximalEffectiveConcentrationEC50";
import HillCoefficient from "../result/HillCoefficient";

function ResultTab( { name, values } ) {

    const componentName = `${name}.results[0].type`
   
    UseDefault(values, componentName, 'concentration')

    const resultTabOptions = [
        { value: 'concentration', label: 'Concentration' },
        { value: 'stoichiometry', label: 'Stoichiometry' },
        { value: 'constant_of_association_KA', label: 'Constant of association KA' },
        { value: 'constant_of_dissociation_KD', label: 'Constant of dissociation KD' },
        { value: 'association_rate_kOn', label: 'Association rate kOn' },
        { value: 'dissociation_rate_kOff', label: 'Dissociation rate kOff' },
        { value: 'change_in_enthalpy_deltaH', label: 'Change in enthalpy deltaH' },
        { value: 'change_in_entropy_deltaS', label: 'Change in entropy deltaS' },
        { value: 'change_in_gibbs_free_energy_deltaG', label: 'Change in Gibbs free energy deltaG' },
        { value: 'molecular_weight_MW', label: 'Molecular weight MW' },
        { value: 'half_maximal_effective_concentration_EC50', label: 'Half maximal effective concentration EC50' },
        { value: 'hill_coefficient', label: 'Hill coefficient' },
    ];

    const [selectedOption, setSelectedOption] = useState(['concentration']);
    
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
            <ArrayField 
                name={name}
                values={values}
                label="Result"
                fieldName='results'
                renderChild={({ arrayName, index }) => (
                    <FormWrapper headline={`Result ${index + 1}`}>
                        <div className="mb-3">
                            <OptionInput
                                name={`${arrayName}.${index}`}
                                options={resultTabOptions}
                                label='type'
                                fieldName='type'
                                width='w-full'
                                onOptionChange={(value) => handleOptionChange(value, index)}
                            />
                        </div>
                        <div>
                            {selectedOption[index] === 'concentration' && (
                                <div>
                                    <Concentration
                                        name={`${arrayName}.${index}`}
                                        values={values}
                                        fieldName='results'
                                    />
                                </div>
                            )}
                            {selectedOption[index] === 'stoichiometry' && (
                                <div>
                                    <Stoichiometry
                                        name={`${arrayName}.${index}`}
                                        values={values}
                                        fieldName='results'
                                    />
                                </div>
                            )}
                            {selectedOption[index] === 'constant_of_association_KA' && (
                                <div>
                                    <ConstantOfAssociationKA
                                        name={`${arrayName}.${index}`}
                                        values={values}
                                        fieldName='results'
                                    />
                                </div>
                            )}
                            {selectedOption[index] === 'constant_of_dissociation_KD' && (
                                <div>
                                    <ConstantOfDissociationKD
                                        name={`${arrayName}.${index}`}
                                        values={values}
                                        fieldName='results'
                                    />
                                </div>
                            )}
                            {selectedOption[index] === 'association_rate_kOn' && (
                                <div>
                                    <AssociationRateKOn
                                        name={`${arrayName}.${index}`}
                                        values={values}
                                        fieldName='results'
                                    />
                                </div>
                            )}
                            {selectedOption[index] === 'dissociation_rate_kOff' && (
                                <div>
                                    <DissociationRateKOff
                                        name={`${arrayName}.${index}`}
                                        values={values}
                                        fieldName='results'
                                    />
                                </div>
                            )}
                            {selectedOption[index] === 'change_in_enthalpy_deltaH' && (
                                <div>
                                    <ChangeInEnthalpyDeltaH
                                        name={`${arrayName}.${index}`}
                                        values={values}
                                        fieldName='results'
                                    />
                                </div>
                            )}
                            {selectedOption[index] === 'change_in_entropy_deltaS' && (
                                <div>
                                    <ChangeInEntropyDeltaS
                                        name={`${arrayName}.${index}`}
                                        values={values}
                                        fieldName='results'
                                    />
                                </div>
                            )}
                            {selectedOption[index] === 'change_in_gibbs_free_energy_deltaG' && (
                                <div>
                                    <ChangeInEntropyDeltaS
                                        name={`${arrayName}.${index}`}
                                        values={values}
                                        fieldName='results'
                                    />
                                </div>
                            )}
                            {selectedOption[index] === 'molecular_weight_MW' && (
                                <div>
                                    <MolecularWeightMW
                                        name={`${arrayName}.${index}`}
                                        values={values}
                                        fieldName='results'
                                    />
                                </div>
                            )}
                            {selectedOption[index] === 'half_maximal_effective_concentration_EC50' && (
                                <div>
                                    <HalfMaximalEffectiveConcentrationEC50
                                        name={`${arrayName}.${index}`}
                                        values={values}
                                        fieldName='results'
                                    />
                                </div>
                            )}
                            {selectedOption[index] === 'hill_coefficient' && (
                                <div>
                                    <HillCoefficient
                                        name={`${arrayName}.${index}`}
                                        values={values}
                                        fieldName='results'
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
  
  export default ResultTab;