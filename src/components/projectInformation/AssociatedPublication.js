import FormWrapper from "../buildingBlocks/FormWrapper";
import OptionInput from "../buildingBlocks/OptionInput";
import UseDefault from "../buildingBlocks/UseDefault";
import Article from "./Article";
import Book from "./Book";
import Thesis from "./Thesis";
import { getIn, useFormikContext } from "formik";

function AssociatedPublication( { name } ) {
    
    const { values } = useFormikContext()

    const componentName = `${name}.type`
   
    UseDefault(values, componentName, 'Article')

    const actualValue = getIn(values, componentName)

    const associatedPublicationOptions = [
        { value: 'Article', label: 'Article' },
        { value: 'Book', label: 'Book' },
        { value: 'Thesis', label: 'Thesis' },
    ];

  return (
    <>
        <FormWrapper
            headline='Associated publication'
            tooltipHeader='If the data in this record is described in published literature (article, journal, thesis), information about the literature can be specified here'
        >
            <div className="flex">
                <div className="mr-3">
                    <OptionInput
                        name={name}
                        options={associatedPublicationOptions}
                        label='type'
                        fieldName='type'
                        width='w-full'
                        tooltip='The type of the publication'
                    />
                </div>
                <div>
                    {actualValue === 'Article' && (
                        <Article
                            name={name}
                        />
                    )}
                    {actualValue === 'Book' && (
                        <Book
                            name={name}
                        />
                    )}
                    {actualValue === 'Thesis' && (
                        <Thesis
                            name={name}
                        />
                    )}
                </div>
            </div>
        </FormWrapper>
    </>
  );
}

export default AssociatedPublication;