package fr.codecake.HomeRoam_clone_back.listing.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import fr.codecake.HomeRoam_clone_back.listing.domain.Listing;

public interface ListingRepository  extends JpaRepository<Listing, Long> {

}
