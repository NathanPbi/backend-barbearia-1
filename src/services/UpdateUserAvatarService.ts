import { getRepository } from 'typeorm';
import path from 'path';
import fs from 'fs';

import uploadConfig from '../config/upload';
import User from '../models/User';

interface Request {
    user_id: string;
    avatar_filename: string;
}

class UpdateUserAvatarService {
    public async execute({ user_id, avatar_filename }: Request): Promise<User> {
        const userRepository = getRepository(User);

        const user = await userRepository.findOne(user_id);

        if (!user) {
            throw new Error('Only authenticated users can change avatart');
        }

        if (user.avatar) {
            const UpdateUserAvatarFilePath = path.join(
                uploadConfig.directory,
                user.avatar);   
                const userAvatarFileExists = await fs.promises.stat(userAvatarFilePath);
            );
        }
    }
}
