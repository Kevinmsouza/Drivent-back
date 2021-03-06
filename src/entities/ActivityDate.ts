import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import Activity from "./Activity";

@Entity("activitiesDates")

export default class ActivityDate extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "timestamp" })
    date: Date;

    @OneToMany(() => Activity, (activity) => activity.date)
    activity: Activity;

    static async getActivityDates() {
      return await this.find();
    }
}

