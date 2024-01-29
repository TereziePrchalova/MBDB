import FormWrapper from '../buildingBlocks/FormWrapper';
import OptionInput from '../buildingBlocks/OptionInput';
import CustomField from '../buildingBlocks/CustomField';

function MethodSpecificParameters( {name} ) {

    const experimentTypeOptions = [
        { value: 'affinity', label: 'Affinity' },
        { value: 'Concentration', label: 'Concentration' },
        { value: 'Other', label: 'Other' },
    ];

    const signalTypeOptions = [
        { value: 'initial_intensity', label: 'Initial intensity' },
        { value: 'tric_mst', label: 'TRIC / MST' },
        { value: 'spectral_shift', label: 'Spectral shift' },
    ];

    const excitationLedColorOptions = [
        { value: 'RED (ex 605-645nm, em 660-720nm)', label: 'RED (ex 605-645nm, em 660-720nm)' },
        { value: 'RED (ex 610-645nm, em 680-720nm)', label: 'RED (ex 610-645nm, em 680-720nm)' },
        { value: 'GREEN (ex 555-585nm, em 605-690nm)', label: 'GREEN (ex 555-585nm, em 605-690nm)' },
        { value: 'GREEN (ex 515-550nm, em 565-600nm)', label: 'GREEN (ex 515-550nm, em 565-600nm)' },
        { value: 'BLUE (ex 480-500nm, em 515-550nm)', label: 'BLUE (ex 480-500nm, em 515-550nm)' },
        { value: 'BLUE (ex 460-500nm, em 515-560nm)', label: 'BLUE (ex 460-500nm, em 515-560nm)' },
        { value: 'UV (ex 260-300nm, em 330-380nm)', label: 'UV (ex 260-300nm, em 330-380nm)' },
        { value: 'spectral_shift', label: 'Spectral shift' },
    ];



  return (
    <>
        <FormWrapper headline='Method specific parameters'>
            <div className='flex'>
                <div>
                    <OptionInput
                        name={name}
                        options={experimentTypeOptions}
                        label='Experiment type'
                        fieldName='experiment_type'
                    />
                </div>
                <div className='mx-3'>
                    <OptionInput
                        name={name}
                        options={signalTypeOptions}
                        label='Signal type'
                        fieldName='signal_type'
                    />
                </div>
            </div>
        </FormWrapper>
    </>
  );
}

export default MethodSpecificParameters;