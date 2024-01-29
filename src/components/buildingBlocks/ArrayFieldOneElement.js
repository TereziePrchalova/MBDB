import React from 'react';
import { FieldArray, getIn } from 'formik';
import Button from '@mui/material/Button';

function ArrayFieldOneElement({ name, values, fieldName, label, renderChild }) {

  const arrayName = `${name}.${fieldName}`;
  const value = getIn(values, arrayName);
  
  return (
    <FieldArray
      name={arrayName}
      render={(arrayHelpers) => (
        <>
          {value && value.length > 0 ? (
            value.map((item, index) => (
              <div key={index} className='flex mt-3'>
                <div className='mr-3'>
                    {renderChild({ arrayName, name, index })}
                </div>
                <Button
                  type='button'
                  className='text-dark'
                  variant="outlined"
                  onClick={() => arrayHelpers.remove(index)}
                  sx= {{ 
                        borderColor: '#034459',
                        color: '#034459',
                        "&:hover": {
                            borderColor: "#034459",
                        },
                    }}
                >
                    <div>
                        -
                    </div>
                </Button>
              </div>
            ))
          ) : null }
          {(value === undefined || value.length === 0) &&  (
            <div className='mt-3'>
                <Button
                variant="outlined"
                onClick={() => arrayHelpers.push('')}
                sx= {{ 
                    borderColor: '#034459',
                    color: '#034459',
                    backgroundColor: '#DCF1F3',
                    "&:hover": {
                        borderColor: "#034459",
                    },
                }}
                >
                + {`${label}`}
                </Button>
            </div>
          )}
        </>
      )}
    />
  );
}

export default ArrayFieldOneElement;