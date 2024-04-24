import FormWrapper from "../../buildingBlocks/FormWrapper";
import DataFitting from "../../sharedComponents/DataFitting";
import FColdAndHot from "./FColdAndHot";
import ArrayField from "../../buildingBlocks/ArrayField";
import DataProcessingStep from "../../sharedComponents/DataProcessingStep";
import OptionField from "../../buildingBlocks/OptionField";
import { getIn, useFormikContext } from "formik";
import OptionalField from "../../buildingBlocks/OptionalField";

function DataAnalysis( { name } ) {

    const { values } = useFormikContext();
      
    const resultsValue = getIn(values, `metadata.general_parameters.results`)

    let resultOptions = [];

    if (resultsValue && resultsValue.length > 0) {
        resultOptions = resultsValue.map(result => ({
            value: result.name,
            label: result.name,
        }));
    } else {
        resultOptions = [{ label: 'Select Result, if applicable' }];
    }

    const measurementValue = getIn(values, `metadata.method_specific_parameters.measurements`)

    let measurementOptions = [];

    if (measurementValue && measurementValue.length > 0) {
        measurementOptions = measurementValue.map(measurement => ({
            value: measurement.name,
            label: measurement.name,
        }));
    } else {
        measurementOptions = [{ label: 'Select Measurement, if applicable' }];
    }

  return (
    <>
        <div className='flex mb-3'>
            <div className="mr-3 -mt-3">
                <ArrayField
                    name={name}
                    label='Measurement'
                    fieldName='measurements'
                    tooltip='List of the measurements that was analyzed together for a specific parameter'
                    renderChild={({ arrayName, index }) => (
                        <OptionField
                            name={`${arrayName}.${index}`}
                            label={`Measurement ${index + 1}`}
                            options={measurementOptions}
                            tooltip='List of the measurements that was analyzed together for a specific parameter'
                        />
                    )}
                />
            </div>
            <div className="-mt-3">
                <ArrayField
                    name={name}
                    label='Result'
                    fieldName='results'
                    tooltip='Link to the result(s) that was obtained by the data analysis. The link is to the results defined in the general parameters'
                    renderChild={({ arrayName, index }) => (
                        <OptionField
                            name={`${arrayName}.${index}`}
                            options={resultOptions}
                            label={`Result ${index + 1}`}
                            tooltip='Link to the result(s) that was obtained by the data analysis. The link is to the results defined in the general parameters'
                        />
                    )}
                />
            </div>
        </div>
        <div className="mb-3">
            <OptionalField
                name={name}
                label='F cold and hot'
                fieldName='f_cold_and_hot'
                tooltip='If the data was analyzed with time windows corresponding to fluorescence before and after an IR laser was heating the sample the edges of the time windows can be specified here'
                renderChild={({ optionalFieldName }) => (
                    <FormWrapper
                        colorSchema='light'
                        headline='F cold and hot'
                        tooltipHeader='If the data was analyzed with time windows corresponding to fluorescence before and after an IR laser was heating the sample the edges of the time windows can be specified here'
                    >
                        <FColdAndHot
                            name={optionalFieldName}
                        />
                    </FormWrapper>
                )}
            />
        </div>
        <div className="mb-3">
            <OptionalField
                name={name}
                label='Data fitting'
                fieldName='data_fitting'
                tooltip='If the data was analyzed with time windows corresponding to fluorescence before and after an IR laser was heating the sample the edges of the time windows can be specified here'
                renderChild={({ optionalFieldName }) => (
                    <FormWrapper
                        colorSchema='light'
                        headline='Data fitting'
                        tooltipHeader='If the data was analyzed with time windows corresponding to fluorescence before and after an IR laser was heating the sample the edges of the time windows can be specified here'
                    >
                        <DataFitting
                            name={optionalFieldName}
                        />
                    </FormWrapper>
                )}
            />
        </div>
        <div>
            <ArrayField
                name={name}
                label='Data processing step'
                fieldName='data_processing_step'
                tooltip='Describe the steps in the data analysis prior to fitting (removing outliers in the raw data, applying smoothing filters, etc.)'
                renderChild={({ arrayName, index }) => (
                    <FormWrapper
                        colorSchema='light'
                        headline={`Data processing step ${index + 1}`}
                        tooltipHeader='Describe the steps in the data analysis prior to fitting (removing outliers in the raw data, applying smoothing filters, etc.)'
                    >
                        <DataProcessingStep
                            name={`${arrayName}.${index}`}
                        />
                    </FormWrapper>
                )}
            />
        </div>
    </>
  );
}

export default DataAnalysis;