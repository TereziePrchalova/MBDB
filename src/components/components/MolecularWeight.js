import FormWrapper from '../buildingBlocks/FormWrapper';
import ValueUnit from '../buildingBlocks/ValueUnit';

function MolecularWeight( {colorSchema, name, tooltipHeader} ) {

    const unitOptions = [
        { value: 'gmol', label: 'g / mol' },
        { value: 'da', label: 'Da' },
        { value: 'kda', label: 'kDA' },
        { value: 'mda', label: 'MDA' },
      ];

  return (
    <>
      <FormWrapper colorSchema={colorSchema} headline='Molecular Weight' tooltipHeader={tooltipHeader}>
          <ValueUnit
            options={unitOptions}
            name={name}
            tooltipValue='The numerical value of the molecular weight'
            tooltipUnit='The unit of the molecular weight'
          />
      </FormWrapper>
    </>
  );
}

export default MolecularWeight;