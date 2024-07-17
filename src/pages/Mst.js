import { Formik, Form } from "formik";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import RawMeasurementFilesTab from "../components/general/generalTabs/RawMeasurementFilesTab";
import EntitiesOfInterestTab from "../components/general/generalTabs/EntitiesOfInterestTab";
import InstrumentTab from "../components/mst/mstTabs/InstrumentTab";
import ChemicalEnvironmentTab from "../components/general/generalTabs/ChemicalEnvironmentTab";
import ResultTab from "../components/general/generalTabs/ResultTab";
import DataAnalysisTab from "../components/mst/mstTabs/DataAnalysisTab";
import ProjectInformationTab from "../components/general/generalTabs/ProjectInformationTab";
import MeasurementTab from "../components/mst/mstTabs/MeasurementTab";

function Mst() {
  const Tabs = [
    { value: "raw-measurement-files", label: "Raw measurement files" },
    { value: "project-information", label: "Project information" },
    { value: "entities-of-interest", label: "Entities of interest" },
    { value: "chemical-environment", label: "Chemical environments" },
    { value: "result", label: "Results" },
    { value: "instrument", label: "Instrument" },
    { value: "measurement", label: "Measurements" },
    { value: "data-analysis", label: "Data analysis" },
  ];

  const location = useLocation();
  const [state, setState] = useState({ selected: "project-information" });

  useEffect(() => {
    const selectedTab = location?.state?.selectedTab || "project-information";
    setState({ selected: selectedTab });
  }, [location]);

  const fileContent = ["Hello, world!"];

  // Create a Blob object from the content
  const fileBlob = new Blob(fileContent, { type: "text/plain" });

  // Define the name and options for the File object
  const fileName = "example.txt";

  // Create the File object using the Blob and the file name
  const file = new File([fileBlob], fileName, { type: "text/plain" });

  // Log the File object to the console
  console.log(file);

  const reader = new FileReader();

  // Define the onload event handler
  reader.onload = function (event) {
    // Log the file content to the console
    console.log(event.target.result);
  };

  // Read the file content as text
  reader.readAsText(file);

  return (
    <>
      <div className="flex justify-center">
        <div className="bg-primary m-5 border-dark border-solid border-[.1px] rounded-normal">
          <div className="flex justify-center w-fit h-[90vh]">
            <div className="bg-dark rounded-tl-normal rounded-bl-normal">
              {Tabs.map((tab) => (
                <div
                  key={tab.value}
                  className={`py-5 px-6 font-JostBold cursor-pointer rounded-tl-normal rounded-bl-normal hover:bg-primary hover:text-dark ${
                    state.selected === tab.value
                      ? "bg-primary text-dark"
                      : "text-white"
                  }`}
                  onClick={() => setState({ selected: tab.value })}
                >
                  {tab.label}
                </div>
              ))}
            </div>
            <Formik
              initialValues={{
                metadata: {
                  general_parameters: {
                    schema_version: "0.9.21",
                    technique:
                      "Microscale thermophoresis/Temperature related intensity change (MST/TRIC)",
                    record_information: {
                      publisher: "MBDB",
                      resource_type_general: "Dataset",
                      resource_type: "MST",
                      deposition_date: new Date().toISOString().slice(0, 10),
                      date_available: new Date().toISOString().slice(0, 10),
                      subject_category: "Biophysics",
                    },
                  },
                  method_specific_parameters: {
                    schema_version: "0.9.10",
                  },
                },
              }}
              onSubmit={(values) =>
                setTimeout(() => {
                  console.log(values);
                  alert(JSON.stringify(values, null, 2));
                }, 500)
              }
            >
              {() => (
                <div className="overflow-scroll">
                  <div className="flex flex-col w-[1250px]">
                    <div className="flex text-dark font-JostBold text-24px mt-4 ml-6">
                      You are depositing MST data
                    </div>
                    <Form className="m-6">
                      <div
                        className={`${
                          state.selected === "raw-measurement-files"
                            ? ""
                            : "hidden"
                        }`}
                      >
                        <RawMeasurementFilesTab name="metadata.general_parameters" />
                      </div>
                      <div
                        className={
                          state.selected === "raw-measurement-files"
                            ? "hidden"
                            : ""
                        }
                      >
                        {state.selected === "project-information" && (
                          <ProjectInformationTab name="metadata.general_parameters" />
                        )}
                        {state.selected === "entities-of-interest" && (
                          <EntitiesOfInterestTab name="metadata.general_parameters" />
                        )}
                        {state.selected === "chemical-environment" && (
                          <ChemicalEnvironmentTab name="metadata.general_parameters" />
                        )}
                        {state.selected === "result" && (
                          <ResultTab name="metadata.general_parameters" />
                        )}
                        {state.selected === "instrument" && (
                          <InstrumentTab name="metadata.general_parameters" />
                        )}
                        {state.selected === "measurement" && (
                          <MeasurementTab name="metadata.method_specific_parameters" />
                        )}
                        {state.selected === "data-analysis" && (
                          <DataAnalysisTab name="metadata.method_specific_parameters" />
                        )}
                      </div>
                      <button
                        className="absolute top-8 right-8 p-3 bg-dark text-white rounded-normal"
                        type="submit"
                      >
                        Submit
                      </button>
                    </Form>
                  </div>
                </div>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
}

export default Mst;
