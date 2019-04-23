import { ID } from "../../types/ID";
import { CardSet } from "../Cards/CardSet";
import { Arena } from "../Level/Arena";
import { Level } from "../Level/Level";
import { Player } from "./Player";
import { Turn } from "./Turn";

export class Solo {
  public id: ID;
  public level: Level;
  public arena: Arena;
  public player: Player;
  public sets: CardSet[];
  public turns: Turn[];
}
