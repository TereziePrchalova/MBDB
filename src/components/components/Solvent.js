import FormWrapper from "../buildingBlocks/FormWrapper";
import OptionInput from "../buildingBlocks/OptionInput";
import UseDefault from "../buildingBlocks/UseDefault";
import { useState } from "react";
import ArrayFieldFirstElementRequired from "../buildingBlocks/ArrayFieldFirstElementRequired";
import ChemicalEnvironmentChemical from "./ChemicalEnvironmentChemical";

function Solvent( { name, values } ) {

    const componentName = `${name}.solvent[0].type`
   
    UseDefault(values, componentName, 'chemical')

    const entitiesOfInterestTabOptions = [
        { value: 'chemical', label: 'Chemical' },
    ];

    const [selectedOption, setSelectedOption] = useState(['chemical']);
    
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
                <ArrayFieldFirstElementRequired
                    name={name}
                    values={values}
                    label="Solvent"
                    fieldName='solvent'
                    renderChild={({ arrayName, index }) => (
                        <div className="mt-3">
                            <FormWrapper 
                                headline={`Solvent ${index + 1}`}
                                colorSchema='light'
                            >
                                <div className="mb-3">
                                    <OptionInput
                                        name={`${arrayName}.${index}`}
                                        options={entitiesOfInterestTabOptions}
                                        label='type'
                                        fieldName='type'
                                        onOptionChange={(value) => handleOptionChange(value, index)}
                                    />
                                </div>
                                <div>
                                    {selectedOption[index] === 'chemical' && (
                                        <div>
                                            <ChemicalEnvironmentChemical
                                                name={`${arrayName}.${index}`}
                                                values={values}
                                            />
                                        </div>
                                    )}
                                </div>
                            </FormWrapper>
                        </div>

                    )}
                />
            </div>
        </div>
      </>
    );
  }
  
  export default Solvent;