import CustomField from "../buildingBlocks/CustomField";
import OptionInput from "../buildingBlocks/OptionInput";

function Thesis( { name } ) {

    const degreeTypeOptions = [
        { value: 'phd', label: 'PhD' },
        { value: 'habilitation', label: 'Habilitation' },
        { value: 'master', label: 'Master' },
        { value: 'bachelor', label: 'Bachelor' },
    ];

  return (
    <>
        <div className="flex">
            <div>
                <OptionInput
                    name={name}
                    options={degreeTypeOptions}
                    label='Degree type'
                    fieldName='degree_type'
                    tooltip='The type of degree (equivalent) the thesis was submitted to attain'
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

export default Thesis;