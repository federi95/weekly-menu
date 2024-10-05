import { Injectable, OnModuleInit, OnModuleDestroy, Logger } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
	private readonly logger = new Logger(PrismaService.name);
	async onModuleInit() {
		try {
			await this.$connect();
			this.logger.log('Successfully connected to database');
		} catch (err) {
			this.logger.error('There was an error connecting to database', err);
		}
	}

	async onModuleDestroy() {
		await this.$disconnect();
	}
}
