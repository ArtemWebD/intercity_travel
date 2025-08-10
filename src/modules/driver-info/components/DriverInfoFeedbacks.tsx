import { memo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
//@ts-ignore
import "swiper/css";
import BaseRating from "../../../core/components/base-rating/BaseRating";

const slidesData = [
    {
        rating: 5,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, consequatur quaerat deleniti reiciendis eum nostrum. Harum in cupiditate tempore sed impedit alias odit cumque placeat sequi nesciunt! Culpa, sequi est.",
    },
];

const DriverInfoFeedbacks = () => {
    return (
        <>

            <Swiper>
                {/* {slidesData.map((data, i) => (
                    <SwiperSlide key={i}>
                        <BaseRating />
                    </SwiperSlide>
                ))} */}
            </Swiper>
        </>
    );
};

export default memo(DriverInfoFeedbacks);
