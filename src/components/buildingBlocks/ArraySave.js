import React from 'react';
import { FieldArray, getIn } from 'formik';
import Temperature from '../components/Temperature';
import FormWrapper from '../buildingBlocks/FormWrapper';

function EntitiesOfInterest( { name, values, label } ) {


    const value = getIn(values, name)

  return (
    <>
        <FieldArray
            name={name}
            render={arrayHelpers => (
            <div>
                {value && value.length > 0 ? (
                value.map((item, index) => (
                    <div key={index}>
                        <FormWrapper headline='Entities of interest'>
                            <Temperature colorSchema='light' name={`${name}.${index}.temperature`} />
                        </FormWrapper>
                    <button
                        className='m-4'
                        type="button"
                        onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
                    >
                        -
                    </button>
                    <button
                        className='m-4'
                        type="button"
                        onClick={() => arrayHelpers.insert(index, '')} // insert an empty string at a position
                    >
                        +
                    </button>
                    </div>
                ))
                ) : (
                <button type="button" onClick={() => arrayHelpers.push('')}>
                    {/* show this when user has removed all friends from the list */}
                    Add {`${label}`}
                </button>
                )}
            </div>
            )}
        />
    </>
  );
}

export default EntitiesOfInterest;
