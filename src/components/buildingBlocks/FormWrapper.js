import { Tooltip } from '@mui/material';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { Typography } from '@mui/material';

function FormWrapper( { headline, children, colorSchema, tooltip } ) {

return (
  <>                    
      <div className={`${colorSchema === 'light' ? 'bg-primary' : 'bg-white' } p-3 rounded-lg text-dark`}>
        {headline &&
          <div className="flex">
            <div className='font-JostMedium text-18px mb-2'>
              {headline}
            </div>
            {tooltip &&
              <div className='ml-1 -mt-1'>
                <Tooltip title={<Typography fontSize={13}>{tooltip}</Typography>} arrow>
                  <HelpOutlineIcon fontSize="smaller"/>
                </Tooltip>
              </div>
            }
          </div>
        }
          {children}
      </div>  
  </>
);
}

export default FormWrapper;