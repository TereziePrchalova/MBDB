import CustomField from "../buildingBlocks/CustomField";

function StoragePreparation( { name } ) {

  return (
    <>
        <div className="flex">
            <div className="mr-3">
                <CustomField
                    name={name}
                    fieldName='name'
                    label='Name'
                />
            </div>
            <div>
                <CustomField
                    name={name}
                    fieldName='description'
                    label='Description'
                />
            </div>
        </div>
    </>
  );
}

export default StoragePreparation;