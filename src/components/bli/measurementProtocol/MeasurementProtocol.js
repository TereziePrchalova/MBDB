import CustomField from "../../buildingBlocks/CustomField";
import OptionField from "../../buildingBlocks/OptionField";
import ShakingSpeed from "./ShakingSpeed";
import StartTime from "../../sharedComponents/StartTime";
import TimeLength from "../../sharedComponents/TimeLength";
import CreateUuid from "../../buildingBlocks/CreateUuid";

function MeasurementProtocol({ name }) {
  CreateUuid(name);

  const typeOptions = [
    { value: "Association", label: "Association" },
    { value: "Baseline", label: "Baseline" },
    { value: "Dissociation", label: "Dissociation" },
    { value: "Regeneration", label: "Regeneration" },
    { value: "Load", label: "Load" },
    { value: "Wash", label: "Wash" },
    { value: "Activation", label: "Activation" },
  ];

  return (
    <>
      <div className="flex mb-3">
        <div className="mr-3">
          <CustomField
            name={name}
            fieldName="name"
            label="Name"
            required
            tooltip="Descriptive name (id) of the a step in the measurement protocol which must be unique within a record"
            width="w-[29rem]"
          />
        </div>
        <div>
          <OptionField
            name={name}
            label="Type"
            fieldName="type"
            required
            options={typeOptions}
            tooltip="Which type of step in the measurement protocol this refers to"
          />
        </div>
      </div>
      <div className="flex mb-3">
        <div className="mr-3">
          <StartTime name={`${name}.start_time`} colorSchema="light" />
        </div>
        <div>
          <TimeLength name={`${name}.time_length`} colorSchema="light" />
        </div>
      </div>
      <div>
        <ShakingSpeed name={`${name}.shaking_speed`} colorSchema="light" />
      </div>
    </>
  );
}

export default MeasurementProtocol;
