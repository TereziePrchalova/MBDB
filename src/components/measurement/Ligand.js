import OptionInput from "../buildingBlocks/OptionInput";
import Concentration from "../components/Concentration";

function Ligand( { name, values } ) {

    const entityOptions = [
        { value: 'currently_out_of_service', label: 'Currently out of service' },
    ];

  return (
    <>
        <div>
          <div className="mb-3">
            <OptionInput
                name={name}
                options={entityOptions}
                label='Entity'
                fieldName='entity'
            />
          </div>
          <div>
            <Concentration
                name={`${name}.concentration`}
                colorSchema='light'
                tooltipHeader='Concentration of the entity'
            />
          </div>
        </div>
    </>
  );
}

export default Ligand;