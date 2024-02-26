import React from 'react';
import { FieldArray, getIn } from 'formik';
import Button from '@mui/material/Button';

function ArrayFieldFirstElementRequired({ name, values, fieldName, label, renderChild }) {

  const arrayName = `${name}.${fieldName}`;
  const value = getIn(values, arrayName);

  return (
    <div>
      <div className='flex'>
        <div>
          {renderChild({ arrayName, name, index: 0 })}
        </div>
      </div>

      {/* Render the rest of the array items */}
      <FieldArray
        name={arrayName}
        render={({ push, remove }) => ( 
          <>
            {value && value.length > 0 ? (
              value.slice(1).map((item, index) => (
                <div key={index + 1} className='flex mt-3'>
                  <div className='mr-3'>
                    {renderChild({ arrayName, name, index: index + 1 })}
                  </div>
                  <Button
                    type='button'
                    className='text-dark'
                    variant="outlined"
                    onClick={() => remove(index + 1)}
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
                </div>
              ))
            ) : null}

            <div className='mt-3'>
              <Button
                variant="outlined"
                onClick={() => push('')}
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
          </>
        )}
      />
    </div>
  );
}

export default ArrayFieldFirstElementRequired;