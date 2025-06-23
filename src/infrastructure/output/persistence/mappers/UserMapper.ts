import { createMapper, createMap, forMember, mapFrom } from "@automapper/core";
import { classes } from "@automapper/classes";
import { User } from "../../../../domain/models/UserModel";
import { UserEntity } from "../models/Usermodel";


// Mapper config
const mapper = createMapper({
  strategyInitializer: classes(),
});

// Mapping configuration
createMap(
    mapper,
    UserEntity,
    User,
    forMember(
        (destination) => destination.usuID,
        mapFrom((source) => source.usuID)
    ),
    forMember(
        (destination) => destination.usuName,
        mapFrom((source) => source.usuName)
    ),
    forMember(
        (destination) => destination.usuEmail,
        mapFrom((source) => source.usuEmail)
    ),
    forMember(
        (destination) => destination.usuPassword,
        mapFrom((source) => source.usuPassword)
    ),
    forMember(
        (destination) => destination.usuRole,
        mapFrom((source) => source.usuRole)
    ),
    forMember(
        (destination) => destination.room,
        mapFrom((source) => source.room)
    )
);
createMap(
    mapper,
    User,
    UserEntity,
     forMember(
        (destination) => destination.usuID,
        mapFrom((source) => source.usuID)
    ),
    forMember(
        (destination) => destination.usuName,
        mapFrom((source) => source.usuName)
    ),
    forMember(
        (destination) => destination.usuEmail,
        mapFrom((source) => source.usuEmail)
    ),
    forMember(
        (destination) => destination.usuPassword,
        mapFrom((source) => source.usuPassword)
    ),
    forMember(
        (destination) => destination.usuRole,
        mapFrom((source) => source.usuRole)
    ),
    forMember(
        (destination) => destination.room,
        mapFrom((source) => source.room)
    )
);

export { mapper as excuseMapper };