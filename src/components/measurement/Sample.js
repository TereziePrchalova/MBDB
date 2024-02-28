import ArrayFieldFirstElementRequired from '../buildingBlocks/ArrayFieldFirstElementRequired';
import FormWrapper from '../buildingBlocks/FormWrapper';
import OptionInput from '../buildingBlocks/OptionInput';
import Ligand from './Ligand';
import Target from './Target';
import ArrayField from '../buildingBlocks/ArrayField';
import Protocol from '../buildingBlocks/Protocol';

function Sample( { name, values, tooltip, colorSchema } ) {

    const measurementContainerOptions = [
        { value: 'Monolith Standard Capillary', label: 'Monolith Standard Capillary' },
        { value: 'Monolith Premium Capillary', label: 'Monolith Premium Capillary' },
        { value: 'Monolith LabelFree Capillary', label: 'Monolith LabelFree Capillary' },
        { value: 'Monolith LabelFree Premium Capillary', label: 'Monolith LabelFree Premium Capillary' },
        { value: 'Monolith NT.Automated Capillary Chip', label: 'Monolith NT.Automated Capillary Chip' },
        { value: 'Monolith NT.Automated Premium Capillary Chip', label: 'Monolith NT.Automated Premium Capillary Chip' },
        { value: 'Monolith NT.Automated LabelFree Capillary Chip', label: 'Monolith NT.Automated LabelFree Capillary Chip' },
        { value: 'Monolith NT.Automated LabelFree Premium Capillary Chip', label: 'Monolith NT.Automated LabelFree Premium Capillary Chip' },
        { value: '384-well plate', label: '384-well plate' },
        { value: 'Other', label: 'Other' },
    ];

    const chemicalEnvironmentOptions = [
        { value: 'currently_out_of_service', label: 'Currently out of service' },
    ];

  return (
    <>
        <FormWrapper
            colorSchema={colorSchema}
            headline='Sample'
            tooltipHeader={tooltip}
        >
            <div className='flex mb-3'>
                <div className='mr-3'>
                    <OptionInput
                        name={name}
                        fieldName='chemical_environment'
                        label='Chemical environment'
                        options={chemicalEnvironmentOptions}
                        tooltip='Name (id) of the chemical environment of the sample (from the chemical environments defined in the general parameters'
                    />
                </div>
                <div>
                    <OptionInput
                        name={name}
                        fieldName='measurement_container'
                        options={measurementContainerOptions}
                        label='Measurement container'
                        tooltip='The container the sample was in during the measurement'
                    />
                </div>
            </div>
            <div>
                <ArrayFieldFirstElementRequired
                    name={name}
                    values={values}
                    label='Target'
                    fieldName='targets'
                    renderChild={({ arrayName, index }) => (
                        <FormWrapper
                            headline={`Target ${index + 1}`}
                            tooltipHeader=''
                        >
                            <Target
                                name={`${arrayName}.${index}`}
                            />
                        </FormWrapper>
                    )}
                />
            </div>
            <div>
                <ArrayFieldFirstElementRequired
                    name={name}
                    values={values}
                    label='Ligand'
                    fieldName='ligands'
                    renderChild={({ arrayName, index }) => (
                        <FormWrapper
                            headline={`Ligand ${index + 1}`}
                            tooltipHeader=''
                        >
                            <Ligand
                                name={`${arrayName}.${index}`}
                            />
                        </FormWrapper>
                    )}
                />
            </div>
            <div>
                <ArrayField
                    name={name}
                    values={values}
                    label='Preparation protocol'
                    fieldName='preparation_protocol'
                    renderChild={({ arrayName, index }) => (
                        <FormWrapper
                            headline={`Preparation protocol ${index + 1}`}
                            tooltipHeader='List of the steps performed during the preparation of the complex substance'
                        >
                            <Protocol
                                name={`${arrayName}.${index}`}
                                fieldName='protocol'
                            />
                        </FormWrapper>
                    )}
                />
            </div>
        </FormWrapper>
    </>
  );
}

export default Sample;
