package fr.codecake.HomeRoam_clone_back.listing.application.dto.sub;

import fr.codecake.HomeRoam_clone_back.listing.application.dto.vo.DescriptionVO;
import fr.codecake.HomeRoam_clone_back.listing.application.dto.vo.TitleVO;
import jakarta.validation.constraints.NotNull;

public record DescriptionDTO(
    @NotNull TitleVO title,
    @NotNull DescriptionVO description
    ) {
}
