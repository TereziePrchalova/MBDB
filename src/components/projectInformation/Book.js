import CustomField from "../buildingBlocks/CustomField";

function Book( { name } ) {

  return (
    <>
        <div className="flex">
            <div>
                <CustomField
                    name={name}
                    fieldName='publisher'
                    label='Publisher'
                    tooltip='The full name of the publisher of the book'
                    width='w-[18rem]'
                />
            </div>
            <div className="mx-3">
                <CustomField
                    name={name}
                    fieldName='pid'
                    label='Pid'
                    tooltip='Persistent identifier associated with the publication (e.g. DOI, ISBN, URN)'
                />
            </div>
            <div>
                <CustomField
                    name={name}
                    fieldName='title'
                    label='Title'
                    tooltip='The title of the publication'
                    width='w-[18rem]'
                />
            </div>
        </div>
    </>
  );
}

export default Book;