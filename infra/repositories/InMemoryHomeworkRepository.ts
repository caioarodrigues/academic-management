import { Homework } from "@/domain/Homework";
import { CreateHomeworkDTO } from "@/domain/dtos/homework";
import { HomeworkRepository } from "@/domain/repositories/HomeworkRepository";
import { useState } from "react";

export class InMemoryHomeworkRepository implements HomeworkRepository {
  private activities: Homework[] = [];

  async create(data: CreateHomeworkDTO): Promise<Homework> {
    const newActivity: Homework = {
      ...data,
      id: this.activities.length + 1,
      done: false,
    };

    this.activities.push(newActivity);
    return newActivity;
  }

  async update(id: number, data: Partial<Homework>): Promise<Homework> {
    const activityIndex = this.activities.findIndex((activity) => activity.id === id);

    if (activityIndex === -1) {
      throw new Error("Activity not found");
    }

    this.activities[activityIndex] = {
      ...this.activities[activityIndex],
      ...data,
    };

    return this.activities[activityIndex];
  }

  async delete(id: number): Promise<void> {
    this.activities = this.activities.filter((activity) => activity.id !== id);
  }

  async findAll(): Promise<Homework[]> {
    return this.activities;
  }

  async findById(id: number): Promise<Homework | undefined> {
    return this.activities.find((activity) => activity.id === id);
  }
}