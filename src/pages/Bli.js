import { Formik, Form } from "formik";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import RawDataFilesTab from "../components/generalTabs/RawDataFilesTab";
import EntitiesOfInterestTab from "../components/generalTabs/EntitiesOfInterestTab";
import InstrumentTab from "../components/bli/bliTabs/InstrumentTab";
import ChemicalEnvironmentTab from '../components/generalTabs/ChemicalEnvironmentTab'
import ResultTab from "../components/generalTabs/ResultTab";
import ProjectInformationTab from "../components/generalTabs/ProjectInformationTab";
import PlatesTab from "../components/bli/bliTabs/PlatesTab";
import SensorsTab from "../components/bli/bliTabs/SensorsTab";
import MeasurementProtocolStepTab from "../components/bli/bliTabs/MeasurementProtocolStepTab";
import MeasurementsTab from "../components/bli/bliTabs/MeasurementsTab";
import DataAnalysisTab from "../components/bli/bliTabs/DataAnalysisTab";

function Bli() {

  const Tabs = [
    { value: 'raw-data-files', label: 'Raw data files' },
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
      <div>
        <div className="relative top-0 left-0 mt-4">
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
      </div>
      <Formik
        initialValues={{
          "metadata": {
            "general_parameters": {
              "schema_version": "0.9.21",
              "technique": "BLI measurement of hemoglobin serum elements",
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
              <button className="fixed top-0 right-0 p-3 m-4 bg-primary rounded-lg" type="submit">Submit</button>
            </Form>
          </div>
        )}
      </Formik>
    </>
  );
}

export default Bli;
