-- CreateTable
CREATE TABLE `formactivosfijos` (
    `actID` VARCHAR(191) NOT NULL,
    `actContent` JSON NOT NULL,

    PRIMARY KEY (`actID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `formcaratula` (
    `carID` VARCHAR(191) NOT NULL,
    `carContent` JSON NOT NULL,

    PRIMARY KEY (`carID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `formdetallerenglones` (
    `detID` VARCHAR(191) NOT NULL,
    `detContent` JSON NOT NULL,

    PRIMARY KEY (`detID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `formesfpatrimonio` (
    `esfID` VARCHAR(191) NOT NULL,
    `esfContent` JSON NOT NULL,

    PRIMARY KEY (`esfID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `formimpuestodiferido` (
    `impID` VARCHAR(191) NOT NULL,
    `impContent` JSON NOT NULL,

    PRIMARY KEY (`impID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `formingresosfancturacion` (
    `ingID` VARCHAR(191) NOT NULL,
    `ingContent` JSON NOT NULL,

    PRIMARY KEY (`ingID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `formr110` (
    `r110ID` VARCHAR(191) NOT NULL,
    `r110Content` JSON NOT NULL,

    PRIMARY KEY (`r110ID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `formrentaliquida` (
    `renID` VARCHAR(191) NOT NULL,
    `renContent` JSON NOT NULL,

    PRIMARY KEY (`renID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `formresumenesferi` (
    `resID` VARCHAR(191) NOT NULL,
    `resContent` JSON NOT NULL,

    PRIMARY KEY (`resID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `report` (
    `repID` VARCHAR(191) NOT NULL,
    `stuID` VARCHAR(255) NOT NULL,
    `roomID` VARCHAR(255) NOT NULL,
    `carID` VARCHAR(255) NOT NULL,
    `detID` VARCHAR(255) NOT NULL,
    `esfID` VARCHAR(255) NOT NULL,
    `renID` VARCHAR(255) NOT NULL,
    `impID` VARCHAR(255) NOT NULL,
    `ingID` VARCHAR(255) NOT NULL,
    `actID` VARCHAR(255) NOT NULL,
    `resID` VARCHAR(255) NOT NULL,
    `r110ID` VARCHAR(255) NOT NULL,

    INDEX `idx_report_actID`(`actID`),
    INDEX `idx_report_carID`(`carID`),
    INDEX `idx_report_detID`(`detID`),
    INDEX `idx_report_esfID`(`esfID`),
    INDEX `idx_report_impID`(`impID`),
    INDEX `idx_report_ingID`(`ingID`),
    INDEX `idx_report_r110ID`(`r110ID`),
    INDEX `idx_report_renID`(`renID`),
    INDEX `idx_report_resID`(`resID`),
    INDEX `idx_report_roomID`(`roomID`),
    INDEX `idx_report_stuID`(`stuID`),
    PRIMARY KEY (`repID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `room` (
    `roomID` VARCHAR(191) NOT NULL,
    `roomName` VARCHAR(255) NOT NULL,
    `roomPassword` VARCHAR(255) NOT NULL,
    `roomDate` DATE NOT NULL,
    `roomStatus` ENUM('open', 'closed') NOT NULL,
    `roomAnswer` JSON NOT NULL,
    `usuID` VARCHAR(255) NOT NULL,

    UNIQUE INDEX `room_roomPassword_key`(`roomPassword`),
    INDEX `idx_room_usuID`(`usuID`),
    PRIMARY KEY (`roomID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `student` (
    `stuID` VARCHAR(191) NOT NULL,
    `stuCedula` VARCHAR(255) NOT NULL,
    `roomID` VARCHAR(191) NOT NULL,

    INDEX `idx_student_roomID`(`roomID`),
    PRIMARY KEY (`stuID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user` (
    `usuID` VARCHAR(191) NOT NULL,
    `usuName` VARCHAR(128) NOT NULL,
    `usuEmail` VARCHAR(128) NOT NULL,
    `usuPassword` VARCHAR(255) NOT NULL,
    `usuRole` ENUM('admin', 'professor') NOT NULL,

    UNIQUE INDEX `user_usuEmail_key`(`usuEmail`),
    PRIMARY KEY (`usuID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `report` ADD CONSTRAINT `fk_report_actID` FOREIGN KEY (`actID`) REFERENCES `formactivosfijos`(`actID`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `report` ADD CONSTRAINT `fk_report_carID` FOREIGN KEY (`carID`) REFERENCES `formcaratula`(`carID`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `report` ADD CONSTRAINT `fk_report_detID` FOREIGN KEY (`detID`) REFERENCES `formdetallerenglones`(`detID`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `report` ADD CONSTRAINT `fk_report_esfID` FOREIGN KEY (`esfID`) REFERENCES `formesfpatrimonio`(`esfID`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `report` ADD CONSTRAINT `fk_report_impID` FOREIGN KEY (`impID`) REFERENCES `formimpuestodiferido`(`impID`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `report` ADD CONSTRAINT `fk_report_ingID` FOREIGN KEY (`ingID`) REFERENCES `formingresosfancturacion`(`ingID`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `report` ADD CONSTRAINT `fk_report_r110ID` FOREIGN KEY (`r110ID`) REFERENCES `formr110`(`r110ID`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `report` ADD CONSTRAINT `fk_report_renID` FOREIGN KEY (`renID`) REFERENCES `formrentaliquida`(`renID`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `report` ADD CONSTRAINT `fk_report_resID` FOREIGN KEY (`resID`) REFERENCES `formresumenesferi`(`resID`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `report` ADD CONSTRAINT `fk_report_roomID` FOREIGN KEY (`roomID`) REFERENCES `room`(`roomID`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `report` ADD CONSTRAINT `fk_report_stuID` FOREIGN KEY (`stuID`) REFERENCES `student`(`stuID`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `room` ADD CONSTRAINT `fk_room_usuID` FOREIGN KEY (`usuID`) REFERENCES `user`(`usuID`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `student` ADD CONSTRAINT `fk_student_roomID` FOREIGN KEY (`roomID`) REFERENCES `room`(`roomID`) ON DELETE RESTRICT ON UPDATE CASCADE;
