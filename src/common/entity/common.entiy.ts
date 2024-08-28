import e from 'express';
import {
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Column,
  BaseEntity,
} from 'typeorm';

export abstract class CommonEntity extends BaseEntity {
  @PrimaryGeneratedColumn({
    type: 'int',
    name: 'id',
    comment: '主键ID',
  })
  id: number;

  @Column({
    type: 'tinyint',
    name: 'is_delete',
    comment: '是否删除',
    default: 0,
  })
  isDelete: number;

  @CreateDateColumn({
    type: 'timestamp',
    name: 'create_time',
    comment: '创建时间',
  })
  createTime: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    name: 'update_time',
    comment: '更新时间',
  })
  updateTime: Date;

  @Column({
    type: 'timestamp',
    name: 'delete_time',
    comment: '删除时间',
    nullable: true,
  })
  deleteTime: Date;
}

export abstract class CompleteEntity extends BaseEntity {

}
