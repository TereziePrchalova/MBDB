import OptionInput from "../buildingBlocks/OptionInput";
import { useState } from "react";
import UseDefault from "../buildingBlocks/UseDefault";
import BodyFluid from "./BodyFluid";
import CellFraction from "../entitiesOfInterest/CellFraction";
import Virion from "../entitiesOfInterest/Virion";

function ComplexSubstanceOfBiologicalOrigin( { name, values } ) {

    const componentName = `${name}.derived_from`
   
    UseDefault(values, componentName, 'body_fluid')

    const complexSubstanceOfBiologicalOriginOptions = [
        { value: 'body_fluid', label: 'Body fluid' },
        { value: 'cell_fraction', label: 'Cell fraction' },
        { value: 'virion', label: 'Virion' },
    ];

    const [selectedOption, setSelectedOption] = useState('body_fluid');

    const handleOptionChange = (value) => {
        setSelectedOption(value);
    };

  return (
    <>
        <div className="mb-3">
            <OptionInput
                name={name}
                options={complexSubstanceOfBiologicalOriginOptions}
                label='Derived from'
                fieldName='derived_from'
                width='w-full'
                onOptionChange={handleOptionChange}
            />
        </div>

        {selectedOption === 'body_fluid' && (
            <>
                <BodyFluid name={name} values={values} />
            </>
        )}
        {selectedOption === 'cell_fraction' && (
            <>
                <CellFraction name={name} values={values} />
            </>
        )}
        {selectedOption === 'virion' && (
            <>
                <Virion name={name} values={values} />
            </>
        )}
    </>
  );
}

export default ComplexSubstanceOfBiologicalOrigin;