import { Tooltip } from "@mui/material";
import CustomField from "../buildingBlocks/CustomField";
import FormWrapper from "../buildingBlocks/FormWrapper";
import Instrument from "../instrument/Instrument";
import MethodSpecificParameters from "../instrument/MethodSpecificParameters";
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

function InstrumentTab( { name, values} ) {

    return (
      <>
          <div>
            <div className="mb-2">
                <Instrument name={`${name}.instrument`} />
            </div>
            <FormWrapper>
                <div className="flex">
                    <div className="flex">
                        <div className="mr-3 my-auto text-dark">
                            Collection start time
                        </div>
                        <div className='-mt-1 -ml-2 mr-3'>
                            <Tooltip title='The date when collection of the raw data began' arrow>
                                <HelpOutlineIcon fontSize="smaller"/>
                            </Tooltip>
                        </div>
                    </div>
                    <div>
                        <CustomField
                            name={name}
                            type='date'
                            fieldName='collection_start_time'
                        />
                    </div>
                </div>
            </FormWrapper>
            <div className="mt-2">
                <MethodSpecificParameters values={values} name='method_specific_parameters' />
            </div>
                
          </div>
      </>
    );
  }
  
  export default InstrumentTab;