import { MigrationInterface, QueryRunner } from "typeorm";

export class init1677150261744 implements MigrationInterface {
    name = 'init1677150261744'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`users\` (\`id\` int NOT NULL AUTO_INCREMENT, \`email\` varchar(20) NOT NULL, \`first_name\` varchar(15) NULL, \`last_name\` varchar(30) NULL, \`password\` varchar(60) NOT NULL, \`sex\` bit NULL, \`photo\` varchar(255) NULL, \`registration_date\` datetime NOT NULL, \`access_token\` varchar(255) NOT NULL, UNIQUE INDEX \`IDX_97672ac88f789774dd47f7c8be\` (\`email\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX \`IDX_97672ac88f789774dd47f7c8be\` ON \`users\``);
        await queryRunner.query(`DROP TABLE \`users\``);
    }

}
