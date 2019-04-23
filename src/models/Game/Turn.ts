import { Card } from "../Cards/Card";
import { Joker } from "./Joker";

export class Turn {
  public picked: Card[];
  public allowed: number;
  public joker: Joker;
  
  public get done(): boolean {
    return this.picked.length === this.allowed;
  }
  
  public get matched(): Card[] {
    // these surely are nested loops, but picked has max length 3
    return this.picked.filter(outerCard => {
      return this.picked.find(innerCard => outerCard.equals(innerCard));
    });
  }
}
