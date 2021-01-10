import { ObjectLiteral, CreateDateColumn } from "typeorm";
type Nullable<T> = T | null;

export class BaseSqlEntity implements ObjectLiteral{
  
  @CreateDateColumn({
    name: 'created_at',
    type: process.env.NODE_ENV === 'test' ? 'datetime' : 'timestamp',
    precision: 0,
  })
  createdAt: Date = new Date();
  
  @CreateDateColumn({
    name: 'update_at',
    type: process.env.NODE_ENV === 'test' ? 'datetime' : 'timestamp',
    precision: 0,
  })
  updateAt: Date = new Date();

  @CreateDateColumn({
    name: 'delete_at',
    type: process.env.NODE_ENV === 'test' ? 'datetime' : 'timestamp',
    precision: 0,
    nullable: true,
    default: null,
  })
  deletedAt: Nullable<Date> = null;

  public delete(): void {
    this.deletedAt = new Date();
  }

  public isDeleted(): boolean {
    return this.deletedAt !== null;
  }

}
