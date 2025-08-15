export interface IBaseRatingProps {
    initial?: number;
    interactive?: boolean;
    onRating?: (rating: number) => void;
}