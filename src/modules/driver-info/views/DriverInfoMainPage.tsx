import BasePage from "../../../core/components/base/BasePage";
import DriverInfoCars from "../components/DriverInfoCars";
import DriverInfoHeader from "../components/DriverInfoHeader";

const DriverInfoMainPage = () => {
    return (
        <BasePage>
            <DriverInfoHeader />
            <DriverInfoCars />
        </BasePage>
    );
};

export default DriverInfoMainPage;
