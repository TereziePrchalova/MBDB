import FormWrapper from "../buildingBlocks/FormWrapper";
import Temperature from "../components/Temperature";
import Duration from "../components/Duration"
import StoragePreparation from "../components/StoragePreparation";

function StorageUntilMeasurement( { name } ) {

  return (
    <>
        <FormWrapper headline='Storage until Measurement' colorSchema='light'>
            <div className="mb-2">
                <Temperature name={`${name}.temperature`} />
            </div>
            <div className="mb-2">
                <Duration name={`${name}.duration`} />
            </div>
            <div>
                <StoragePreparation name={`${name}.storage_preparation`} />
            </div>
        </FormWrapper>           
    </>
  );
}

export default StorageUntilMeasurement;