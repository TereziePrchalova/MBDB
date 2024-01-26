import ValueUnit from '../buildingBlocks/ValueUnit';
import FormWrapper from '../buildingBlocks/FormWrapper';

function Duration( {name} ) {

    const unitOptions = [
        { value: 'miliseconds', label: 'miliseconds' },
        { value: 'seconds', label: 'seconds' },
        { value: 'minutes', label: 'minutes' },
        { value: 'hours', label: 'hours' },
        { value: 'days', label: 'days' },
        { value: 'months', label: 'months' },
        { value: 'years', label: 'years' },
      ];

  return (
    <>
        <FormWrapper colorSchema='' headline='Duration'>
            <ValueUnit options={unitOptions} name={name} />
        </FormWrapper>
    </>
  );
}

export default Duration;
