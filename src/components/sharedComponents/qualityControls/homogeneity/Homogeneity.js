import FormWrapper from '../../../buildingBlocks/FormWrapper';
import OptionField from '../../../buildingBlocks/OptionField';
import ArrayField from '../../../buildingBlocks/ArrayField';
import { getIn, useFormikContext } from 'formik';
import HomogeneityYes from './HomogeneityYes';

function Purity( { name } ) {

    const { values } = useFormikContext();

    const typeOptions = [
        { value: 'Yes', label: 'Yes' },
        { value: 'No', label: 'No' },
    ];

  return (
    <>
        <ArrayField
            name={name}
            label="Homogeneity"
            fieldName='homogeneity'
            initialValue={{ type: 'Yes'}}
            maxItems={1}
            renderChild={({ arrayName, index }) => {
                const actualValue = getIn(values, `${arrayName}.${index}`)
                if (!actualValue) {return null}        
                return(
                <FormWrapper
                    headline='Homogeneity'
                >
                    <div className="flex">
                        <div className="mr-3">
                            <OptionField
                                name={`${arrayName}.${index}`}
                                options={typeOptions}
                                label='type'
                                fieldName='type'
                                width='w-full'
                            />
                        </div>
                        <div>
                            {actualValue.type === 'Yes' && (
                                <HomogeneityYes
                                    name={`${arrayName}.${index}`}
                                />
                            )}
                            {actualValue.type === 'No' && (
                                <></>
                            )}
                        </div>
                    </div>
                </FormWrapper>
            )}}
        />
    </>
  );
}

export default Purity;
