import { LevelAndCurrentXp } from '../domain/interfaces/level-and-current-xp.interface';

export function getLevelAndCurrentXp(totalXp: number): LevelAndCurrentXp {
  let xpNeeded = 100;
  let level = 0;
  let totalXpNeededLastLevel = 0;
  while (totalXp > xpNeeded) {
    level++;
    totalXpNeededLastLevel = xpNeeded;
    xpNeeded += 100;
  }

  return {
    level,
    currentXp: totalXp - totalXpNeededLastLevel,
    levelXp: xpNeeded,
  };
}
