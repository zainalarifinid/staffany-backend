import { Repository } from "typeorm";
import { BaseSqlEntity } from "./BaseSqlEntity";

export class BaseSqlRepository<T extends BaseSqlEntity> extends Repository<T> {
  
}
