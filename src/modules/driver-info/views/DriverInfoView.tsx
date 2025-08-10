import BasePage from "../../../core/components/base/BasePage";
import DriverInfoFeedbacks from "../components/DriverInfoFeedbacks";
import DriverInfoHeader from "../components/DriverInfoHeader";

const DriverInfoView = () => {
    return (
        <BasePage>
            <DriverInfoHeader />
            <DriverInfoFeedbacks />
            {/* <DriverInfoForm /> */}
        </BasePage>
    );
};

export default DriverInfoView;
