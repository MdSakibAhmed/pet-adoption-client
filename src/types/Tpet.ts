import { Key } from "react";

export type TPet = {
  id: string;
  name: string;
  type: string;
  breed: string;
  age: number;
  gender: string;
  specialNeeds: string;
  size: string;
  location: string;
  description: string;
  temperament: string;
  medicalHistory: string;
  adoptionRequirements: string;
  createdAt: Date;
  updatedAt: Date;
};

export type TResponse = {
  [key: string]: string | number | boolean |  TResponse | undefined | any ;
};

export type TChildren = {
  children: React.ReactNode;
};
