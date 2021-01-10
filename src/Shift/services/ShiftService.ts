import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ShiftField } from "../entities/data/ShiftField";
import { Shift } from "../entities/Shift";
import { ShiftRepository } from "../repositories/ShiftRepository";

@Injectable()
export class ShiftService {
  constructor(
    @InjectRepository(Shift)
    private readonly shiftRepository: ShiftRepository,
  ){}

  async getListShift(): Promise<Shift[]> {
    const listShift = await this.shiftRepository.find();

    return listShift;
  }

  async saveShift(dataShift: ShiftField) {
    const newShift = new Shift();
    newShift.name = dataShift.name;
    newShift.date = new Date(dataShift.date);
    newShift.startTime = new Date(dataShift.startTime);
    newShift.endTime = new Date(dataShift.endTime);

    return this.shiftRepository.save(newShift);
  }

  async updateShift(idShift: number, dataShift: ShiftField){
    const existShift = await this.shiftRepository.findOne(idShift);
    existShift.name = dataShift.name;
    existShift.date = dataShift.date;
    existShift.startTime = dataShift.startTime;
    existShift.endTime = dataShift.endTime;
    return this.shiftRepository.save(existShift);
  }

  async deleteShift(idShift: number) {
    return this.shiftRepository.delete({id: idShift});
  }
}
