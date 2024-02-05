import FormWrapper from "../buildingBlocks/FormWrapper";
import OptionInput from "../buildingBlocks/OptionInput";
import { useState } from "react";
import CustomField from "../buildingBlocks/CustomField";
import UseDefault from "../buildingBlocks/UseDefault";

function AssociatedPublication( {name, values} ) {
    
    const componentName = `${name}.type`
   
    UseDefault(values, componentName, 'article')

    const associatedPublicationOptions = [
        { value: 'article', label: 'Article' },
        { value: 'book', label: 'Book' },
        { value: 'thesis', label: 'Thesis' },
    ];

    const degreeTypeOptions = [
        { value: 'phd', label: 'PhD' },
        { value: 'habilitation', label: 'Habilitation' },
        { value: 'master', label: 'Master' },
        { value: 'bachelor', label: 'Bachelor' },
    ];

    const [selectedOption, setSelectedOption] = useState('article');
    
    const handleOptionChange = (value) => {
        setSelectedOption(value);
    };

  return (
    <>
        <FormWrapper headline='Associated publication'>
            <div className="mb-3">
                <OptionInput
                    name={name}
                    options={associatedPublicationOptions}
                    label='type'
                    fieldName='type'
                    onOptionChange={handleOptionChange}
                />
            </div>
            <div>
                {selectedOption === 'article' && (
                    <div className="flex">
                        <div>
                            <CustomField
                                name={name}
                                fieldName='journal'
                                label='Journal'
                            />
                        </div>
                        <div className="mx-3">
                            <CustomField
                                name={name}
                                fieldName='pid'
                                label='Pid'
                            />
                        </div>
                        <div>
                            <CustomField
                                name={name}
                                fieldName='title'
                                label='Title'
                            />
                        </div>
                    </div>
                )}
                {selectedOption === 'book' && (
                    <div className="flex">
                        <div>
                            <CustomField
                                name={name}
                                fieldName='publisher'
                                label='Publisher'
                            />
                        </div>
                        <div className="mx-3">
                            <CustomField
                                name={name}
                                fieldName='pid'
                                label='Pid'
                            />
                        </div>
                        <div>
                            <CustomField
                                name={name}
                                fieldName='title'
                                label='Title'
                            />
                        </div>
                    </div>
                )}
                {selectedOption === 'thesis' && (
                    <div className="flex">
                        <div>
                            <OptionInput
                                name={name}
                                options={degreeTypeOptions}
                                label='Degree type'
                                fieldName='degree_type'
                            />
                        </div>
                        <div className="mx-3">
                            <CustomField
                                name={name}
                                fieldName='pid'
                                label='Pid'
                            />
                        </div>
                        <div>
                            <CustomField
                                name={name}
                                fieldName='title'
                                label='Title'
                            />
                        </div>
                    </div>
                )}
            </div>
        </FormWrapper>
    </>
  );
}

export default AssociatedPublication;