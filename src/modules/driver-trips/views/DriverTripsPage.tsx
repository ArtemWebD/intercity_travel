import { Text } from "@radix-ui/themes";
import BasePage from "../../../core/components/base/BasePage";
import DriverTripsList from "../components/DriverTripsList";

const DriverTripsPage = () => {
    return (
        <BasePage>
            <Text size={"4"} className="!block !mb-9">
                Мои поездки
            </Text>
            <DriverTripsList />
        </BasePage>
    );
};

export default DriverTripsPage;
