import { Model } from "../../lib";
import { Mat4 } from "../../lib/matrix";
import Robot from "../../apps/11-model/Robot";
import RobotUnit from "../units/RobotUnit";
import Tiles from './Tiles'

export default class GameField extends Model {
  constructor(game) {
    const map = [
      ".....................................................",
      ".....................................................",
      ".....................................................",
      ".....................................................",
      ".....................................................",
      ".....................................................",
      ".....................................................",
      ".....................................................",
      ".....................................................",
      ".....................................................",
      ".....................................................",
      ".....................................................",
      ".....................................................",
      ".....................................................",
      ".....................................................",
      ".....................................................",
      ".....................................................",
      ".....................................................",
      ".....................................................",
      ".....................................................",
      ".....................................................",
    ]

    super(null)
    this.width = map[0].length
    this.height = map.length
    this.tileSize = 0.5
    this.tileModel = new Tiles(map, this.tileSize)
    this.game = game
    this.addChild(this.tileModel)


    this.setUnitMatrix(
      new Mat4().translate(
        -map[0].length * this.tileSize / 2,
        0,
        -map.length*this.tileSize /2,
      ).getMatrix()
    );

    this.addTextureImage(
      "/texture08.jpg"
    );

    // 存储所有的单位
    this.units = []
  }

  addUnit(isPlayer, x, y, agent) {
    const unit = new RobotUnit(this.game, {
      isPlayer,
      x,
      y,
      tileSize : this.tileSize,
      agent
    })
    this.units.push(unit)
    this.addChild(unit.getModel())
    return unit
  }

  draw(){
    super.draw()
  }
}
