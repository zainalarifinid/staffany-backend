import { Body, Controller, Delete, Get, Inject, Param, Patch, Post, Put, Req } from "@nestjs/common";
import { ApiBody, ApiOperation, ApiTags } from "@nestjs/swagger";
import { SHIFT_SERVICE } from "../constants";
import { ShiftField } from "../entities/data/ShiftField";
import { Shift } from "../entities/Shift";
import { ShiftService } from "../services/ShiftService";

@ApiTags('Shift')
@Controller('/api/shifts')
export class ShiftController {
  constructor(
    @Inject(SHIFT_SERVICE)
    private shiftService: ShiftService,
  ){}

  @Get()
  @ApiOperation({
    summary: 'Get list of shifts',
    description: 'The API to get list all of shift',
  })
  async get(): Promise<Shift[]>{
    return this.shiftService.getListShift();
  }

  @Post()
  @ApiBody({
    type: Shift,
  })
  @ApiOperation({
    summary: 'Create Data of shifts',
    description: 'The API to Create Data of shift',
    
  })
  async post(@Body() shift: ShiftField): Promise<Shift> {
    return this.shiftService.saveShift(shift)
  }

  @Put(':id')
  @ApiBody({
    type: Shift,
  })
  @ApiOperation({
    summary: 'Create Data of shifts',
    description: 'The API to Create Data of shift',
  })
  async update(@Param('id') idShift: number, @Body() shift: ShiftField): Promise<Shift> {
    return this.shiftService.updateShift(idShift, shift)
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Create Data of shifts',
    description: 'The API to Create Data of shift',
  })
  async delete(@Param('id') idShift: number): Promise<any> {
    return this.shiftService.deleteShift(idShift)
  }


}
