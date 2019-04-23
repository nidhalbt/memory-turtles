import { ID } from "../../types/ID";
import { Action } from "./Action";

export class MenuItem {
  public id: ID;
  public title: string;
  public active: boolean;
  public order: number;
  public action: Action;
  
  constructor(init?: Partial<MenuItem>) {
    Object.assign(this, init);
  }
}
