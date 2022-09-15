import { InjectConnection } from '@nestjs/mongoose';
import { Connection } from 'mongoose';
import { DbBaseService } from '../interfaces/db-base-service.interface';

export class ChangelogService implements DbBaseService<unknown> {
    constructor(@InjectConnection() private readonly connection: Connection) {}

    public getAll(): Promise<unknown[]> {
        return this.collection.find({}).toArray();
    }

    public async removeAll(): Promise<void> {
        await this.collection.deleteMany({});
    }

    private get collection() {
        return this.connection.collection('changelog');
    }
}
