import FormWrapper from '../../buildingBlocks/FormWrapper';
import OptionField from '../../buildingBlocks/OptionField';

function MethodSpecificParameters( { name } ) {

    const experimentTypeOptions = [
        { value: 'Affinity', label: 'Affinity' },
        { value: 'Quantification', label: 'Quantification' },
        { value: 'Other', label: 'Other' },
    ];

  return (
    <>
        <FormWrapper
            headline='Method specific parameters'
            tooltipHeader='The parameters of the experiment that is specific to BLI'
        >
            <OptionField
                name={name}
                options={experimentTypeOptions}
                label='Experiment type'
                fieldName='experiment_type'
                tooltip='Which type of parameter is sought with the measurements'
            />
        </FormWrapper>
    </>
  );
}

export default MethodSpecificParameters;