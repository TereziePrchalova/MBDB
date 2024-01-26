import FormWrapper from '../buildingBlocks/FormWrapper';
import ValueUnit from '../buildingBlocks/ValueUnit';

function MolecularWeight( {colorSchema, name} ) {

    const unitOptions = [
        { value: 'gmol', label: 'g / mol' },
        { value: 'da', label: 'Da' },
        { value: 'kda', label: 'kDA' },
        { value: 'mda', label: 'MDA' },
      ];

  return (
    <>
        <FormWrapper colorSchema={colorSchema} headline='Molecular Weight'>
            <ValueUnit options={unitOptions} name={name}/>
        </FormWrapper>
    </>
  );
}

export default MolecularWeight;