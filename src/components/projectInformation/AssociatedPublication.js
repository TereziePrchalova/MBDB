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
   
    UseDefault(values, componentName, 'article')

    const actualValue = getIn(values, componentName)

    const associatedPublicationOptions = [
        { value: 'article', label: 'article' },
        { value: 'book', label: 'book' },
        { value: 'thesis', label: 'thesis' },
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
                    {actualValue === 'article' && (
                        <Article
                            name={name}
                        />
                    )}
                    {actualValue === 'book' && (
                        <Book
                            name={name}
                        />
                    )}
                    {actualValue === 'thesis' && (
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