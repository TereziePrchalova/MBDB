import { Formik, Form } from "formik";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import RawDataFiles from "../components/tabs/RawDataFiles";
import EntitiesOfInterestTab from "../components/tabs/EntitiesOfInterestTab";
import InstrumentTab from "../components/tabs/InstrumentTab";
import ChemicalEnvironmentTab from '../components/tabs/ChemicalEnvironmentTab'
import ResultTab from "../components/tabs/ResultTab";
import DataAnalysisTab from "../components/tabs/DataAnalysisTab";
import ProjectInformationTab from "../components/tabs/ProjectInformationTab";
import MeasurementTab from "../components/tabs/MeasurementTAb";

function Mst() {

  const Tabs = [
    { value: 'raw-data-files', label: 'Raw data files' },
    { value: 'project-information', label: 'Project information' },
    { value: 'entities-of-interest', label: 'Entities of interest' },
    { value: 'chemical-environment', label: 'Chemical environment' },
    { value: 'result', label: 'Result' },
    { value: 'instrument', label: 'Instrument' },
    { value: 'measurement', label: 'Measurement' },
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
              "schema_version": "0.9.19",
              "technique": "Microscale thermophoresis/Temperature related intensity change (MST/TRIC)",
              "record_information": {
                "publisher": "MBDB",
                "resource_type_general": "Dataset",
                "resource_type": "MST",
                "deposition_date": new Date(),
                "date_available": new Date(),
                "subject_category": "Biophysics",
              },
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
        {( { values } ) => (
          <div className="flex justify-center">
            <Form className="m-4 w-[1100px]">
              {state.selected === 'raw-data-files' && (
                <RawDataFiles name='metadata.general_parameters' />
              )}
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
              {state.selected === 'measurement' && (
                <MeasurementTab name='metadata.method_specific_parameters' />
              )}
              {state.selected === 'data-analysis' && (
                <DataAnalysisTab name='metadata.method_specific_parameters' />
              )}
              <button className="fixed top-0 right-0 p-3 m-4 bg-primary rounded-lg" type="submit">Submit</button>
            </Form>
          </div>
        )}
      </Formik>
    </>
  );
}

export default Mst;
