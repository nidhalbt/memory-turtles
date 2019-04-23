import { ID } from "../../types/ID";
import { Panel } from "./Panel";

export class Page {
  public id: ID;
  public title: string;
  public overview: string;
  public panels: Panel[];
  
  constructor(init?: Partial<Page>) {
    Object.assign(this, init);
  }
}
