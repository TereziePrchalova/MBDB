import FormWrapperRequired from '../buildingBlocks/FormWrapperRequired';
import ValueError from '../buildingBlocks/ValueError';
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
        <FormWrapperRequired colorSchema={colorSchema} headline='Molecular Weight'>
            <div className='mb-2'>
                <ValueUnit options={unitOptions} name={name}/>
            </div>
            <ValueError colorSchema={colorSchema} name={`${name}.value_error`}/>
        </FormWrapperRequired>
    </>
  );
}

export default MolecularWeight;