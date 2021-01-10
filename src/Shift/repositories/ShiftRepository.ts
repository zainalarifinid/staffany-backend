import { BaseSqlRepository } from "src/Common/BaseSqlRepository";
import { EntityRepository } from "typeorm";
import { Shift } from "../entities/Shift";

@EntityRepository(Shift)
export class ShiftRepository extends BaseSqlRepository<Shift>{

}
