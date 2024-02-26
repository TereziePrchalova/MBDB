import CustomField from "../buildingBlocks/CustomField";

function Article( { name } ) {

  return (
    <>
        <div className="flex">
            <div>
                <CustomField
                    name={name}
                    fieldName='journal'
                    label='Journal'
                    tooltip='The full name of the journal of article appears in'
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
                />
            </div>
        </div>
    </>
  );
}

export default Article;