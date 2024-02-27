import FormWrapper from "../buildingBlocks/FormWrapper";
import OptionInput from "../buildingBlocks/OptionInput";
import UseDefault from "../buildingBlocks/UseDefault";
import { useState } from "react";
import ArrayFieldFirstElementRequired from "../buildingBlocks/ArrayFieldFirstElementRequired";
import ComponentsPolymer from "./ComponentsPolymer";
import ComponentsChemical from "./ComponentsChemical";

function Components( { name, values, colorSchema, molecularWeightColorSchema } ) {

    const componentName = `${name}.components[0].type`
   
    UseDefault(values, componentName, 'polymer')

    const componentOptions = [
        { value: 'polymer', label: 'Polymer' },
        { value: 'chemical', label: 'Chemical' },
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
            <ArrayFieldFirstElementRequired
                name={name}
                values={values}
                label="Component"
                fieldName='components'
                renderChild={({ arrayName, index }) => (
                    <FormWrapper headline={`Component ${index + 1}`} colorSchema={colorSchema}>
                        <div className="mb-3">
                            <OptionInput
                                name={`${arrayName}.${index}`}
                                options={componentOptions}
                                label='type'
                                fieldName='type'
                                width='w-full'
                                onOptionChange={(value) => handleOptionChange(value, index)}
                            />
                        </div>
                        <div>
                            {selectedOption[index] === 'polymer' && (
                                <div>
                                    <ComponentsPolymer
                                        name={`${arrayName}.${index}`}
                                        values={values}
                                        molecularWeightColorSchema={molecularWeightColorSchema}
                                    />
                                </div>
                            )}
                            {selectedOption[index] === 'chemical' && (
                                <div>
                                    <ComponentsChemical
                                        name={`${arrayName}.${index}`}
                                        values={values}
                                        molecularWeightColorSchema={molecularWeightColorSchema}
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
  
  export default Components;