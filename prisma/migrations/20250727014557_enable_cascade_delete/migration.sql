-- DropForeignKey
ALTER TABLE `report` DROP FOREIGN KEY `fk_report_actID`;

-- DropForeignKey
ALTER TABLE `report` DROP FOREIGN KEY `fk_report_carID`;

-- DropForeignKey
ALTER TABLE `report` DROP FOREIGN KEY `fk_report_detID`;

-- DropForeignKey
ALTER TABLE `report` DROP FOREIGN KEY `fk_report_esfID`;

-- DropForeignKey
ALTER TABLE `report` DROP FOREIGN KEY `fk_report_impID`;

-- DropForeignKey
ALTER TABLE `report` DROP FOREIGN KEY `fk_report_ingID`;

-- DropForeignKey
ALTER TABLE `report` DROP FOREIGN KEY `fk_report_r110ID`;

-- DropForeignKey
ALTER TABLE `report` DROP FOREIGN KEY `fk_report_renID`;

-- DropForeignKey
ALTER TABLE `report` DROP FOREIGN KEY `fk_report_resID`;

-- DropForeignKey
ALTER TABLE `report` DROP FOREIGN KEY `fk_report_roomID`;

-- DropForeignKey
ALTER TABLE `report` DROP FOREIGN KEY `fk_report_stuID`;

-- DropForeignKey
ALTER TABLE `room` DROP FOREIGN KEY `fk_room_usuID`;

-- DropForeignKey
ALTER TABLE `student` DROP FOREIGN KEY `fk_student_roomID`;

-- AddForeignKey
ALTER TABLE `report` ADD CONSTRAINT `fk_report_actID` FOREIGN KEY (`actID`) REFERENCES `formactivosfijos`(`actID`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `report` ADD CONSTRAINT `fk_report_carID` FOREIGN KEY (`carID`) REFERENCES `formcaratula`(`carID`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `report` ADD CONSTRAINT `fk_report_detID` FOREIGN KEY (`detID`) REFERENCES `formdetallerenglones`(`detID`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `report` ADD CONSTRAINT `fk_report_esfID` FOREIGN KEY (`esfID`) REFERENCES `formesfpatrimonio`(`esfID`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `report` ADD CONSTRAINT `fk_report_impID` FOREIGN KEY (`impID`) REFERENCES `formimpuestodiferido`(`impID`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `report` ADD CONSTRAINT `fk_report_ingID` FOREIGN KEY (`ingID`) REFERENCES `formingresosfancturacion`(`ingID`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `report` ADD CONSTRAINT `fk_report_r110ID` FOREIGN KEY (`r110ID`) REFERENCES `formr110`(`r110ID`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `report` ADD CONSTRAINT `fk_report_renID` FOREIGN KEY (`renID`) REFERENCES `formrentaliquida`(`renID`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `report` ADD CONSTRAINT `fk_report_resID` FOREIGN KEY (`resID`) REFERENCES `formresumenesferi`(`resID`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `report` ADD CONSTRAINT `fk_report_roomID` FOREIGN KEY (`roomID`) REFERENCES `room`(`roomID`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `report` ADD CONSTRAINT `fk_report_stuID` FOREIGN KEY (`stuID`) REFERENCES `student`(`stuID`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `room` ADD CONSTRAINT `fk_room_usuID` FOREIGN KEY (`usuID`) REFERENCES `user`(`usuID`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `student` ADD CONSTRAINT `fk_student_roomID` FOREIGN KEY (`roomID`) REFERENCES `room`(`roomID`) ON DELETE CASCADE ON UPDATE CASCADE;
