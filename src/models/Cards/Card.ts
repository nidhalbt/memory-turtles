import { ID } from "../../types/ID";
import { Sign } from "./Sign";

export class Card {
  public id: ID;
  public sign: Sign;
  
  public equals(card: Card): boolean {
    return !this.is(card) && this.sign.id === card.sign.id;
  }
  
  public is(card: Card): boolean {
    return this.id === card.id;
  }
}
