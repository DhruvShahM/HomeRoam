package fr.codecake.HomeRoam_clone_back.listing.application.dto.vo;

import jakarta.validation.constraints.NotNull;

public record PriceVO(@NotNull(message = "Price value must be present") int value) {
}
