package fr.codecake.HomeRoam_clone_back.listing.application.dto;

import java.util.UUID;

import fr.codecake.HomeRoam_clone_back.listing.application.dto.vo.PriceVO;

public record ListingCreateBookingDTO(UUID listingPublicId, PriceVO price) {
    
}
