import React from 'react';
import { getIn, useFormikContext } from 'formik';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import { Typography } from '@mui/material';

function OptionalField({ name, fieldName, label, renderChild, initialValue, tooltip }) {

  const { values, setFieldValue } = useFormikContext();
  const optionalFieldName = fieldName !== undefined ? `${name}.${fieldName}` : `${name}`;
  const value = getIn(values, optionalFieldName);

    function remove() {
        setFieldValue(optionalFieldName, undefined);
    }

    function add() {
        if (initialValue) {
            setFieldValue(optionalFieldName, initialValue);
        } else {
            setFieldValue(optionalFieldName, '');
        }
    }

  return (
    <>
        {(value || value === '') && (
            <div className='flex mt-3'>
                <div className='mr-3'>
                    {renderChild({ optionalFieldName })}
                </div>
                <Button
                    type='button'
                    className='text-dark'
                    variant="outlined"
                    onClick={() => remove()}
                    sx= {{ 
                        borderColor: "#023850",
                        backgroundColor: "#023850",
                        color: '#fff',
                        "&:hover": {
                            borderColor: "#023850",
                            backgroundColor: '#023850',
                            color: '#fff',
                        },
                    }}
                    >
                    <div>
                        <CancelOutlinedIcon/>
                    </div>
                </Button>
            
            </div>
        )}
        {(value === undefined || !value === '') && (
            <div className='mt-3'>
                <Tooltip title={<Typography fontSize={13}>{tooltip}</Typography>} arrow>
                    <Button
                        variant="outlined"
                        onClick={() => add()}
                        sx= {{ 
                            borderColor: "#023850",
                            backgroundColor: "#023850",
                            color: '#fff',
                            "&:hover": {
                                borderColor: "#023850",
                                backgroundColor: '#023850',
                                color: '#fff',
                            },
                        }}
                    >
                        + {`${label}`}
                    </Button>
                </Tooltip>
            </div>
        )}
    </>
  );
}

export default OptionalField;