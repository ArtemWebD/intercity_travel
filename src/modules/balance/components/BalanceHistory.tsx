import { memo } from "react";
import BaseSection from "../../../core/components/base/BaseSection";
import { Table, Text } from "@radix-ui/themes";

const BalanceHistory = () => {
    return (
        <BaseSection className="mt-4">
            <Text size={"4"}>История операций</Text>
            <Table.Root className="mt-2 mb-2">
                <Table.Header>
                    <Table.Row>
                        <Table.ColumnHeaderCell>№</Table.ColumnHeaderCell>
                        <Table.ColumnHeaderCell>Дата</Table.ColumnHeaderCell>
                        <Table.ColumnHeaderCell>Тип операции</Table.ColumnHeaderCell>
                        <Table.ColumnHeaderCell>Сумма</Table.ColumnHeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    <Table.Row>
                        <Table.RowHeaderCell>1</Table.RowHeaderCell>
                        <Table.Cell>13.08.2025</Table.Cell>
                        <Table.Cell>Пополнение</Table.Cell>
                        <Table.Cell>5000 ₽</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.RowHeaderCell>2</Table.RowHeaderCell>
                        <Table.Cell>13.08.2025</Table.Cell>
                        <Table.Cell>Комиссия</Table.Cell>
                        <Table.Cell>500 ₽</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.RowHeaderCell>3</Table.RowHeaderCell>
                        <Table.Cell>14.08.2025</Table.Cell>
                        <Table.Cell>Пополнение</Table.Cell>
                        <Table.Cell>2500 ₽</Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table.Root>
        </BaseSection>
    );
};

export default memo(BalanceHistory);
