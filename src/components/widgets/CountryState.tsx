import CountryDropdown from "@/components/custom/Form/CountryStatesDropdown/countries";
import StateDropdown from "@/components/custom/Form/CountryStatesDropdown/states";

const CountryState = () => {
  return (
    <div className="flex w-[1000px] items-center justify-center gap-4">
      <CountryDropdown />
      <StateDropdown />
    </div>
  );
};

export default CountryState;
