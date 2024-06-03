import { Formik, Form } from "formik";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import RawMeasurementFilesTab from "../components/general/generalTabs/RawMeasurementFilesTab";
import EntitiesOfInterestTab from "../components/general/generalTabs/EntitiesOfInterestTab";
import InstrumentTab from "../components/bli/bliTabs/InstrumentTab";
import ChemicalEnvironmentTab from '../components/general/generalTabs/ChemicalEnvironmentTab'
import ResultTab from "../components/general/generalTabs/ResultTab";
import ProjectInformationTab from "../components/general/generalTabs/ProjectInformationTab";
import PlatesTab from "../components/bli/bliTabs/PlatesTab";
import SensorsTab from "../components/bli/bliTabs/SensorsTab";
import MeasurementProtocolStepTab from "../components/bli/bliTabs/MeasurementProtocolStepTab";
import MeasurementsTab from "../components/bli/bliTabs/MeasurementsTab";
import DataAnalysisTab from "../components/bli/bliTabs/DataAnalysisTab";

function Bli() {

  const Tabs = [
    { value: 'raw-measurement-files', label: 'Raw measurement files' },
    { value: 'project-information', label: 'Project information' },
    { value: 'entities-of-interest', label: 'Entities of interest' },
    { value: 'chemical-environment', label: 'Chemical environments' },
    { value: 'result', label: 'Results' },
    { value: 'instrument', label: 'Instrument' },
    { value: 'plates', label: 'Plates' },
    { value: 'sensors', label: 'Sensors' },
    { value: 'measurement-protocol', label: 'Measurement protocol' },
    { value: 'measurements', label: 'Measurements' },
    { value: 'data-analysis', label: 'Data analysis' },
  ];

  const location = useLocation();
  const [state, setState] = useState({ selected: 'project-information' });

  useEffect(() => {
    const selectedTab = location?.state?.selectedTab || 'project-information';
    setState({ selected: selectedTab });
  }, [location]);

  return (
    <>
      <div className="flex justify-center">
        <div className="bg-primary m-5 border-dark border-solid border-[.1px] rounded-normal">
          <div className="flex justify-center w-fit h-[90vh]">
            <div className="bg-dark rounded-tl-normal rounded-bl-normal">
              {Tabs.map(tab => (
                <div
                  key={tab.value} 
                  className={`py-5 px-6 font-JostBold cursor-pointer rounded-tl-normal rounded-bl-normal hover:bg-primary hover:text-dark ${state.selected === tab.value ? 'bg-primary text-dark' : 'text-white'}`}
                  onClick={() => setState({ selected: tab.value })}
                >
                  {tab.label}
                </div>
              ))}
            </div>
            <Formik
              initialValues={{
                "metadata": {
                  "general_parameters": {
                    "schema_version": "0.9.21",
                    "technique": "Bio-layer interferometry (BLI)",
                    "record_information": {
                      "publisher": "MBDB",
                      "resource_type_general": "Dataset",
                      "resource_type": "BLI",
                      "deposition_date": new Date().toISOString().slice(0, 10),
                      "date_available": new Date().toISOString().slice(0, 10),
                      "subject_category": "Biophysics",
                    },
                  },
                  "method_specific_parameters": {
                    "schema_version": "0.9.6"
                  }
                }
              }}
              onSubmit={values => 
                setTimeout(() => {
                  console.log(values)
                  alert(JSON.stringify(values, null, 2));
                }, 500)
              }
              >
              {() => (
                <div className="overflow-scroll">
                  <div className="flex flex-col w-[1250px]">
                    <div className="flex text-dark font-JostBold text-24px mt-4 ml-6">
                      You are depositing BLI data
                    </div>
                    <Form className="m-6">
                      <div className={`${state.selected === 'raw-measurement-files' ? '' : 'hidden'}`}>
                        <RawMeasurementFilesTab name='metadata.general_parameters' />
                      </div>
                      <div className={state.selected === 'raw-measurement-files' ? 'hidden' : ''}>
                        {state.selected === 'project-information' && (
                          <ProjectInformationTab name='metadata.general_parameters' />
                        )}
                        {state.selected === 'entities-of-interest' && (
                          <EntitiesOfInterestTab name='metadata.general_parameters' />
                        )}
                        {state.selected === 'chemical-environment' && (
                          <ChemicalEnvironmentTab name='metadata.general_parameters' />
                        )}
                        {state.selected === 'result' && (
                          <ResultTab name='metadata.general_parameters'/>
                        )}
                        {state.selected === 'instrument' && (
                          <InstrumentTab name='metadata.general_parameters' />
                        )}
                        {state.selected === 'plates' && (
                          <PlatesTab name='metadata.method_specific_parameters' />
                        )}
                        {state.selected === 'sensors' && (
                          <SensorsTab name='metadata.method_specific_parameters' />
                        )}
                        {state.selected === 'measurement-protocol' && (
                          <MeasurementProtocolStepTab name='metadata.method_specific_parameters' />
                        )}
                        {state.selected === 'measurements' && (
                          <MeasurementsTab name='metadata.method_specific_parameters' />
                        )}
                        {state.selected === 'data-analysis' && (
                          <DataAnalysisTab name='metadata.method_specific_parameters' />
                        )}
                      </div>
                      <button className="absolute top-8 right-8 p-3 bg-dark text-white rounded-normal" type="submit">Submit</button>
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

export default Bli;
