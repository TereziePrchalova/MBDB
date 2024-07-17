import CustomField from "../../buildingBlocks/CustomField";

function Ph({ name }) {
  return (
    <>
      <div className="bg-primary p-3 rounded-lg text-dark flex">
        <div className="m-auto mr-3">pH</div>
        <div>
          <CustomField
            name={name}
            label="Value"
            type="number"
            required
            tooltip="The pH value of the chemical environment"
            width="w-[8.5rem]"
          />
        </div>
      </div>
    </>
  );
}

export default Ph;
