package fr.codecake.HomeRoam_clone_back.listing.application;

import java.util.UUID;

import fr.codecake.HomeRoam_clone_back.listing.application.dto.sub.PictureDTO;
import fr.codecake.HomeRoam_clone_back.listing.application.dto.vo.PriceVO;
import fr.codecake.HomeRoam_clone_back.listing.domain.BookingCategory;

public record DisplayCardListingDTO(PriceVO price,
                                    String location,
                                    PictureDTO cover,
                                    BookingCategory bookingCategory,
                                    UUID publicId) {

}
