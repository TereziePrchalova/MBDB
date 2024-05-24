import { Formik, Form } from "formik";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import RawDataFilesTab from "../components/general/generalTabs/RawDataFilesTab";
import EntitiesOfInterestTab from "../components/general/generalTabs/EntitiesOfInterestTab";
import ChemicalEnvironmentTab from '../components/general/generalTabs/ChemicalEnvironmentTab';
import ResultTab from "../components/general/generalTabs/ResultTab";
import ProjectInformationTab from "../components/general/generalTabs/ProjectInformationTab";
import InstrumentTab from "../components/spr/sprTabs/InstrumentTab";
import MeasurementProtocolTab from "../components/spr/sprTabs/MeasurementProtocolTab";
import MeasurementsTab from "../components/spr/sprTabs/MeasurementsTab";
import DataAnalysisTab from "../components/spr/sprTabs/DataAnalysisTab";
import SensorTab from "../components/spr/sprTabs/SensorTab";
import MeasurementPositionsTab from "../components/spr/sprTabs/MeasurementPositionsTab";

function Spr() {

  const Tabs = [
    { value: 'raw-data-files', label: 'Raw data files' },
    { value: 'project-information', label: 'Project information' },
    { value: 'entities-of-interest', label: 'Entities of interest' },
    { value: 'chemical-environment', label: 'Chemical environments' },
    { value: 'result', label: 'Results' },
    { value: 'instrument', label: 'Instrument' },
    { value: 'sensor', label: 'Sensor' },
    { value: 'measurement-positions', label: 'Measurement positions' },
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
      <div className="flex text-dark text-24px justify-center mt-4">
        You are depositing SPR data
      </div>
      <div className="flex justify-center">
        <div className="mt-4">
          {Tabs.map(tab => (
            <div 
              key={tab.value} 
              className={`text-dark p-4 mb-3 rounded-lg cursor-pointer transition-all hover:bg-primary-light ${state.selected === tab.value ? 'active bg-primary' : ''}`}
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
                "technique": "SPR measurement of hemoglobin serum elements",
                "record_information": {
                  "publisher": "MBDB",
                  "resource_type_general": "Dataset",
                  "resource_type": "SPR",
                  "deposition_date": new Date().toISOString().slice(0, 10),
                  "date_available": new Date().toISOString().slice(0, 10),
                  "subject_category": "Biophysics",
                },
              },
              "method_specific_parameters": {
                "schema_version": "0.9.5"
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
            <div className="flex justify-center">
              <Form className="m-4 w-[1100px]">
                <div className={`${state.selected === 'raw-data-files' ? '' : 'hidden'}`}>
                  <RawDataFilesTab name='metadata.general_parameters' />
                </div>
                <div className={state.selected === 'raw-data-files' ? 'hidden' : ''}>
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
                  {state.selected === 'sensor' && (
                    <SensorTab name='metadata.method_specific_parameters' />
                  )}
                  {state.selected === 'measurement-positions' && (
                    <MeasurementPositionsTab name='metadata.method_specific_parameters' />
                  )}
                  {state.selected === 'measurement-protocol' && (
                    <MeasurementProtocolTab name='metadata.method_specific_parameters' />
                  )}
                  {state.selected === 'measurements' && (
                    <MeasurementsTab name='metadata.method_specific_parameters' />
                  )}
                  {state.selected === 'data-analysis' && (
                    <DataAnalysisTab name='metadata.method_specific_parameters' />
                  )}
                </div>
                <button className="fixed top-0 right-0 p-3 m-4 bg-primary rounded-lg" type="submit">Submit</button>
              </Form>
            </div>
          )}
        </Formik>
      </div>
    </>
  );
}

export default Spr;
