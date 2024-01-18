import Pressure from "../components/Pressure";
import Humidity from "../components/Humidity";
import Temperature from "../components/Temperature";

function PhysicalConditionsAtSampleHandling( {name} ) {

  return (
    <>
      <div className="rounded-3xl mt-4 border-[1px] border-primary bg-white p-4">
        <div className="mb-2 text-dark font-JostMedium text-18px">
          Physical conditions at sample handling
        </div>
        <div className="mb-2">
          <Temperature colorSchema='light' name={`${name}.temperature`} />
        </div>
        <div className="mb-2">
          <Pressure name={`${name}.pressure`} />
        </div>
        <div className="mb-2">
          <Humidity name={`${name}.humidity`} />
        </div>
      </div>
    </>
  );
}

export default PhysicalConditionsAtSampleHandling;