import FormWrapper from '../../../buildingBlocks/FormWrapper';
import OptionField from '../../../buildingBlocks/OptionField';
import ByIntactMass from './ByIntactMass';
import ArrayField from '../../../buildingBlocks/ArrayField';
import BySequencing from './BySequencing';
import ByFingerprinting from './ByFingerprinting';

function Identity( { name, colorSchema } ) {

    const checkedOptions = [
        { value: 'Yes', label: 'Yes' },
        { value: 'No', label: 'No' },
    ];

  return (
    <>
        <ArrayField
            name={name}
            label='Identity'
            fieldName='identity'
            maxItems={1}
            tooltip='Modifications (e.g. non-natural amino acids) of the polymer made during synthesis (e.g. translation) of the polymer'
            renderChild={({ arrayName, index }) => (
                <FormWrapper
                    headline='Identity'
                    colorSchema={colorSchema}
                    tooltipHeader='Information about if, and how identity was assessed'
                >
                    <div>
                        <OptionField
                            name={`${arrayName}.${index}`}
                            fieldName='checked'
                            label='Checked'
                            options={checkedOptions}
                            tooltip='Whether the identity was confirmed experimentally'
                        />
                    </div>
                    <div>
                        <ArrayField
                            name={`${arrayName}.${index}`}
                            maxItems={1}
                            label='By intact mass'
                            fieldName='by_intact_mass'
                            tooltip='How identity was determined by intact mass, if applicable'
                            renderChild={({ arrayName, index }) => (
                                <ByIntactMass
                                    name={`${arrayName}.${index}`}
                                    colorSchema={colorSchema === 'light' ? '' : 'light'}
                                />
                            )}
                        />
                    </div>
                    <div>
                        <ArrayField
                            name={`${arrayName}.${index}`}
                            maxItems={1}
                            label='By sequencing'
                            fieldName='by_sequencing'
                            tooltip='How identity was determined by intact mass, if applicable'
                            renderChild={({ arrayName, index }) => (
                                <BySequencing
                                    name={`${arrayName}.${index}`}
                                    colorSchema={colorSchema === 'light' ? '' : 'light'}
                                />
                            )}
                        />
                    </div>
                    <div>
                        <ArrayField
                            name={`${arrayName}.${index}`}
                            maxItems={1}
                            label='By fingerprinting'
                            fieldName='by_fingerprinting'
                            tooltip='How identity was determined by fingerprinting, if applicable'
                            renderChild={({ arrayName, index }) => (
                                <ByFingerprinting
                                    name={`${arrayName}.${index}`}
                                    colorSchema={colorSchema === 'light' ? '' : 'light'}
                                />
                            )}
                        />
                    </div>
                </FormWrapper>
            )}
        />
    </>
  );
}

export default Identity;
