export default class AddressSuggestions {
    static async getSuggestions(query: string): Promise<string[] | null> {
        try {
            const response = await fetch(
                "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address",
                {
                    method: "POST",
                    mode: "cors",
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                        Authorization: "Token " + process.env.REACT_APP_DADATA_TOKEN,
                    },
                    body: JSON.stringify({ query: query }),
                },
            );

            if (!response.ok) {
                return null;
            }

            const result = await response.json();

            return result.suggestions?.map((suggestion: { value: string }) => suggestion.value);
        } catch (error) {
            return null;
        }
    }
}
