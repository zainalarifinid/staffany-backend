import { TypeOrmModule } from "@nestjs/typeorm";
import { Module } from '@nestjs/common';
import { SHIFT_SERVICE } from "./constants";
import { ShiftController } from "./controllers/ShiftController";
import { Shift } from "./entities/Shift";
import { ShiftRepository } from "./repositories/ShiftRepository";
import { ShiftService } from "./services/ShiftService";

const shiftServiceProvider = {
  provide: SHIFT_SERVICE,
  useClass: ShiftService,
};

@Module({
  imports: [TypeOrmModule.forFeature([Shift, ShiftRepository])],
  controllers: [ShiftController],
  providers: [shiftServiceProvider],
  exports: [shiftServiceProvider]
})

export class ShiftModule {}
