import BasePage from "../../../core/components/base/BasePage";
import DriverTripsList from "../components/DriverTripsList";

const DriverTripsPage = () => {
    return (
        <BasePage title="Мои поездки">
            <DriverTripsList />
        </BasePage>
    );
};

export default DriverTripsPage;
