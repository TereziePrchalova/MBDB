import FormWrapper from '../../buildingBlocks/FormWrapper';
import Homogeneity from './homogeneity/Homogeneity';
import Identity from './identity/Identity';
import Purity from './purity/Purity';

function QualityControls( { name, colorSchema } ) {

  return (
    <>
        <FormWrapper
            headline='Quality controls'
            colorSchema={colorSchema}
        >
            <div className='mb-3 -mt-3'>
                <Purity name={name}/>
            </div>
            <div className='mb-3'>
                <Identity name={name} />
            </div>
            <div>
                <Homogeneity name={name} />
            </div>
        </FormWrapper>
    </>
  );
}

export default QualityControls;
