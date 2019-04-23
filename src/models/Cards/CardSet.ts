import { ID } from "../../types/ID";
import { Card } from "./Card";

export class CardSet {
  public id: ID;
  public cards: Card[];
  
  public get done(): boolean {
    return !this.cards.length;
  }
  
  public remove(card: Card) {
    const index = this.cards.findIndex((e: Card) => e.is(card));
    this.cards.splice(index, 1);
  }
}
