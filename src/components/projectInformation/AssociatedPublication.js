import FormWrapper from "../buildingBlocks/FormWrapper";
import OptionInput from "../buildingBlocks/OptionInput";
import { useState } from "react";
import UseDefault from "../buildingBlocks/UseDefault";
import Article from "./Article";
import Book from "./Book";
import Thesis from "./Thesis";

function AssociatedPublication( {name, values} ) {
    
    const componentName = `${name}.type`
   
    UseDefault(values, componentName, 'article')

    const associatedPublicationOptions = [
        { value: 'article', label: 'Article' },
        { value: 'book', label: 'Book' },
        { value: 'thesis', label: 'Thesis' },
    ];

    const [selectedOption, setSelectedOption] = useState('article');
    
    const handleOptionChange = (value) => {
        setSelectedOption(value);
    };

  return (
    <>
        <FormWrapper headline='Associated publication' tooltipHeader='If the data in this record is described in published literature (article, journal, thesis), information about the literature can be specified here'>
            <div className="mb-3">
                <OptionInput
                    name={name}
                    options={associatedPublicationOptions}
                    label='type'
                    fieldName='type'
                    onOptionChange={handleOptionChange}
                    width='w-full'
                    tooltip='The type of the publication'
                />
            </div>
            <div>
                {selectedOption === 'article' && (
                    <Article
                        name={name}
                    />
                )}
                {selectedOption === 'book' && (
                    <Book
                        name={name}
                    />
                )}
                {selectedOption === 'thesis' && (
                    <Thesis
                        name={name}
                    />
                )}
            </div>
        </FormWrapper>
    </>
  );
}

export default AssociatedPublication;