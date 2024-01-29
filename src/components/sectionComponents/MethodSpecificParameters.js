import FormWrapper from '../buildingBlocks/FormWrapper';
import OptionInput from '../buildingBlocks/OptionInput';
import CustomField from '../buildingBlocks/CustomField';
import Temperature from '../components/Temperature';
import ArrayFieldOneElement from '../buildingBlocks/ArrayFieldOneElement';

function MethodSpecificParameters( {name, values} ) {

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
            <div className='flex mb-3'>
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
                <div>
                    <OptionInput
                        name={name}
                        options={excitationLedColorOptions}
                        label='Excitation LED color'
                        fieldName='excitation_led_color'
                    />
                </div>
            </div>
            <div className='flex'>
                <div className='mr-3'>
                    <CustomField
                        name={name}
                        label='Excitation LED power'
                        fieldName='excitation_led_power'
                    />
                </div>
                <div>
                    <CustomField
                        name={name}
                        label='IR MST laser power'
                        fieldName='ir_mst_laser_power'
                    />
                </div>
            </div>
            <div>
                <ArrayFieldOneElement
                    name={name}
                    values={values}
                    label='Temperature'
                    fieldName='temperature'
                    renderChild={({ name, index }) => (
                        <div className='-mx-3'>
                            <Temperature 
                                name={`${name}.temperature.${index}`}
                            />
                        </div>
                    )}
                />
            </div>
        </FormWrapper>
    </>
  );
}

export default MethodSpecificParameters;