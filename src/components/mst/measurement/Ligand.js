import OptionField from "../../buildingBlocks/OptionField";
import Concentration from "../../sharedComponents/Concentration";
import { useFormikContext, getIn } from 'formik';
import CreateOptions from "../../buildingBlocks/CreateOptions";
import CreateUuid from "../../buildingBlocks/CreateUuid";

function Ligand( { name } ) {

  CreateUuid(`${name}.entity`);

  const { values } = useFormikContext();
      
  const entitiesValue = getIn(values, `metadata.general_parameters.entities_of_interest`);
  const entityOptions = CreateOptions(entitiesValue, 'Select Entity, if applicable');

  return (
    <>
      <div className="flex">
        <div className="mr-3">
          <OptionField
              name={`${name}.entity`}
              options={entityOptions}
              label='Entity'
              fieldName='name'
              required={true}
              tooltip='List of names (ids) of entities (from the entities of interest defined in the general parameters) that were used to alter the behavior of the target(s)'
          />
        </div>
        <div>
          <Concentration
              name={`${name}.concentration`}
              colorSchema='light'
              tooltip='Concentration of the entity'
          />
        </div>
      </div>
    </>
  );
}

export default Ligand;