import OptionInput from "../../buildingBlocks/OptionInput";
import UseDefault from "../../buildingBlocks/UseDefault";
import BodyFluid from "./BodyFluid";
import CellFraction from "./CellFraction";
import Virion from "./Virion";
import { useFormikContext, getIn } from "formik";

function ComplexSubstanceOfBiologicalOrigin( { name } ) {

    const { values } = useFormikContext()

    const componentName = `${name}.derived_from`
   
    UseDefault(values, componentName, 'body_fluid')

    const actualValue = getIn(values, componentName)

    const complexSubstanceOfBiologicalOriginOptions = [
        { value: 'body_fluid', label: 'Body fluid' },
        { value: 'cell_fraction', label: 'Cell fraction' },
        { value: 'virion', label: 'Virion' },
    ];

  return (
    <>
        <div className="mb-3">
            <OptionInput
                name={name}
                options={complexSubstanceOfBiologicalOriginOptions}
                label='Derived from'
                fieldName='derived_from'
                width='w-full'
            />
        </div>

        {actualValue === 'body_fluid' && (
            <>
                <BodyFluid name={name} values={values} />
            </>
        )}
        {actualValue === 'cell_fraction' && (
            <>
                <CellFraction name={name} values={values} />
            </>
        )}
        {actualValue === 'virion' && (
            <>
                <Virion name={name} values={values} />
            </>
        )}
    </>
  );
}

export default ComplexSubstanceOfBiologicalOrigin;