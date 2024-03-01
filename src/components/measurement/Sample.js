import ArrayField from '../buildingBlocks/ArrayField';
import FormWrapper from '../buildingBlocks/FormWrapper';
import Ligand from './Ligand';
import Target from './Target';
import Protocol from '../buildingBlocks/Protocol';
import UseDefault from '../buildingBlocks/UseDefault';
import { getIn, useFormikContext } from 'formik';
import OptionField from '../buildingBlocks/OptionField';

function Sample( { name, tooltip, colorSchema } ) {

    const { values } = useFormikContext();

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

    const chemicalEnvironmentsValue = getIn(values, `general_parameters.chemical_environment`)

    let chemicalEnvironmentOptions = [];

    if (chemicalEnvironmentsValue && chemicalEnvironmentsValue.length > 0) {
        chemicalEnvironmentOptions = chemicalEnvironmentsValue.map(chemicalEnvironment => ({
            value: chemicalEnvironment.name,
            label: chemicalEnvironment.name,
        }));
    } else {
        chemicalEnvironmentOptions = [{ label: 'Select Chemical environment, if applicable' }];
    }

    const fieldNameTarget = 'targets'
    UseDefault(values, `${name}.${fieldNameTarget}`, [{}] );

    const fieldNameLigand = 'ligands'
    UseDefault(values, `${name}.${fieldNameLigand}`, [{}] );

  return (
    <>
        <FormWrapper
            colorSchema={colorSchema}
            headline='Sample'
            tooltipHeader={tooltip}
        >
            <div className='flex mb-3'>
                <div className='mr-3'>
                    <OptionField
                        name={name}
                        fieldName='chemical_environment'
                        label='Chemical environment'
                        options={chemicalEnvironmentOptions}
                        tooltip='Name (id) of the chemical environment of the sample (from the chemical environments defined in the general parameters'
                    />
                </div>
                <div>
                    <OptionField
                        name={name}
                        fieldName='measurement_container'
                        options={measurementContainerOptions}
                        label='Measurement container'
                        tooltip='The container the sample was in during the measurement'
                    />
                </div>
            </div>
            <div>
                <ArrayField
                    name={name}
                    label='Target'
                    fieldName={fieldNameTarget}
                    required={true}
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
                <ArrayField
                    name={name}
                    label='Ligand'
                    fieldName={fieldNameLigand}
                    required={true}
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
                    label='Preparation protocol'
                    fieldName='preparation_protocol'
                    renderChild={({ arrayName, index }) => (
                        <FormWrapper
                            headline={`Preparation protocol ${index + 1}`}
                            tooltipHeader='List of the steps performed during the preparation of the complex substance'
                        >
                            <Protocol
                                name={`${arrayName}.${index}`}
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
