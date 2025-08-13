import BasePage from "../../../core/components/base/BasePage";
import AddBalance from "../components/AddBalance";
import BalanceHistory from "../components/BalanceHistory";
import CurrentBalance from "../components/CurrentBalance";

const BalancePage = () => {
    return (
        <BasePage title="Пополнение баланса">
            <CurrentBalance />
            <AddBalance />
            <BalanceHistory />
        </BasePage>
    );
};

export default BalancePage;
