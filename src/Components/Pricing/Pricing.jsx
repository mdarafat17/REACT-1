import DownBanner from "../Services/DownBanner/DownBanner";
import FAQ from "./FAQ";
import PricingBanner from "./PricingBanner";
import PricingPlan from "./PricingPlan";

const Pricing = () => {
  return (
    <div>
      <PricingBanner />
      <PricingPlan />
      <FAQ />
      <DownBanner/>
      
    </div>
  );
};

export default Pricing;