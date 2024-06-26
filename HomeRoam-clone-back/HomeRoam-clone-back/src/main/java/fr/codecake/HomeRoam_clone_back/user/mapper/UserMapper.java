package fr.codecake.HomeRoam_clone_back.user.mapper;

import org.mapstruct.Mapper;

import fr.codecake.HomeRoam_clone_back.user.application.dto.ReadUserDTO;
import fr.codecake.HomeRoam_clone_back.user.domain.Authority;
import fr.codecake.HomeRoam_clone_back.user.domain.User;

@Mapper(componentModel = "spring")
public interface UserMapper {

    ReadUserDTO readUserDTOToUser(User user);

    default String mapAuthoritiesToString(Authority authority) {
        return authority.getName();
    }

}
