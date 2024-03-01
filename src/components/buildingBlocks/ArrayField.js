import React from 'react';
import { FieldArray, getIn, useFormikContext } from 'formik';
import Button from '@mui/material/Button';

function ArrayField({ name, fieldName, label, renderChild, initialValue, required, maxItems }) {

  const { values } = useFormikContext()
  
  const arrayName = `${name}.${fieldName}`;
  const value = getIn(values, arrayName);

  return (
    <div>
      <FieldArray
        name={arrayName}
        render={({ push, remove }) => ( 
          <>
            {value && (
              value.map((item, index) => (
                <div key={index} className='flex mt-3'>
                  <div className='mr-3'>
                    {renderChild({ arrayName, name, index })}
                  </div>
                  { (!required || index > 0 ) && 
                    <Button
                      type='button'
                      className='text-dark'
                      variant="outlined"
                      onClick={() => remove(index)}
                      sx={{
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
                  }
                </div>
              ))
            )}
            {(!maxItems || (!value || value.length < maxItems)) &&
              <div className='mt-3'>
                <Button
                  variant="outlined"
                  onClick={() => push({...initialValue})}
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
            }
          </>
        )}
      />
    </div>
  );
}

export default ArrayField;