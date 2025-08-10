import BasePage from "../../../core/components/base/BasePage";
import DriverInfoFeedbacks from "../components/DriverInfoFeedbacks";
import DriverInfoForm from "../components/DriverInfoForm";
import DriverInfoHeader from "../components/DriverInfoHeader";

const DriverInfoView = () => {
    return (
        <BasePage title="Личный кабинет" titleAlign="center">
            <DriverInfoHeader />
            <DriverInfoFeedbacks />
            {/* <DriverInfoForm /> */}
        </BasePage>
    );
};

export default DriverInfoView;
