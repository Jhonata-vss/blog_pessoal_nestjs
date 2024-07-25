import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Postagem } from "./postagem/entities/postagem.entity";
import { TemaModule } from "./tema/services/tema.module";
import { PostagemService } from "./postagem/services/postagem.service";
import { TemaService } from "./tema/services/tema.service";
import { PostagemController } from "./postagem/controller/postagem.controller";


@Module({
    imports: [TypeOrmModule.forFeature([Postagem]),TemaModule],
    providers: [PostagemService,TemaService],
    controllers: [PostagemController],
    exports: [TypeOrmModule]
})


export class PostagemModule {

}