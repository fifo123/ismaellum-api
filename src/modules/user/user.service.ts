import { getLevelAndCurrentXp } from '@/common/constants/get-level-and-current-xp';
import { SignUpUser } from '@/common/domain/dtos/user/';
import { ProcedureHistory, User } from '@/common/domain/models';
import { Stats } from '@/common/domain/models/stats.model';
import { deleteFile } from '@/common/functions/delete-file';
import { HttpException, Injectable, Logger } from '@nestjs/common';
import { ProcedureHistoryService } from '../procedure-history/procedure-history.service';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly procedureHistoryService: ProcedureHistoryService,
  ) {}

  async signUp(data: SignUpUser): Promise<User> {
    const emailInUse = await this.userRepository.findUserByEmail(data.email);
    if (emailInUse)
      throw new HttpException('Error: Email already in use.', 400);
    return this.userRepository.signUp(data);
  }

  async updateProfilePicture(
    user_id: number,
    profilePicture: string,
  ): Promise<boolean> {
    const lastProfilePicture = await this.userRepository.updateProfilePicture(
      user_id,
      profilePicture,
    );
    if (lastProfilePicture) {
      try {
        await deleteFile(`./files/${lastProfilePicture}`);
      } catch (error) {
        Logger.error(error);
      }
    }
    return true;
  }

  async getUserById(user_id: number): Promise<User> {
    return this.userRepository.getUserById(user_id);
  }

  async proceduresHistory(user_id: number): Promise<ProcedureHistory[]> {
    return this.procedureHistoryService.getProceduresByUserId(user_id);
  }

  async getStats(user_id: number): Promise<Stats> {
    const { totalXp, totalCredits } =
      await this.procedureHistoryService.getUserTotalXpAndCredits(user_id);
    const { currentXp, level } = getLevelAndCurrentXp(totalXp);
    return {
      totalXp,
      currentXp,
      level,
      credits: totalCredits,
    };
  }
}
