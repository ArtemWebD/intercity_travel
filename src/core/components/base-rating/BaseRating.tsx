import { Box, Flex } from "@radix-ui/themes";
import { memo, useState, type FC } from "react";
import StarIcon from "@mui/icons-material/Star";
import type { IBaseRatingProps } from "./types/IBaseRating";

const BaseRating: FC<IBaseRatingProps> = ({ initial = 0, interactive, onRating }) => {
    const [rating, setRating] = useState(initial);
    const [hovered, setHovered] = useState<number | null>(null);

    function onClick(star: number): void {
        setRating(star);

        if (onRating) {
            onRating(star);
        }
    }

    return (
        <Flex>
            {[1, 2, 3, 4, 5].map((star) => (
                <Box
                    key={star}
                    onMouseEnter={interactive ? () => setHovered(star) : undefined}
                    onMouseLeave={interactive ? () => setHovered(null) : undefined}
                    onClick={interactive ? () => onClick(star) : undefined}
                    className="cursor-pointer"
                >
                    <StarIcon
                        sx={{
                            color: star <= (hovered ?? rating) ? "#ffd700" : "gray",
                            fontSize: 30,
                        }}
                    />
                </Box>
            ))}
        </Flex>
    );
};

export default memo(BaseRating);
