import { User } from "./../entity/user.entity";
import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { UserService } from "./user.service";
import { Filiacao } from "../entity/filiacao.entity";
import { CreateFiliacaoDto, UpdateFiliacaoDto } from "../dto/filiacao.dto";

@Injectable()
export class FiliacaoService {
  constructor(
    @InjectRepository(Filiacao)
    private filiacaoRepository: Repository<Filiacao>,
    private userService: UserService
  ) {}

  async create(createFiliacaoDto: CreateFiliacaoDto): Promise<Filiacao> {
    const user = await this.userService.findOne(createFiliacaoDto.userId);
    if (!user) {
      throw new NotFoundException(`Usuário não encontrado.`);
    }
    const newFiliacao = this.filiacaoRepository.create({
      ...createFiliacaoDto,
      user: user, // Associando o usuário encontrado ao novo registro de filiação
    });
    return await this.filiacaoRepository.save(newFiliacao);
  }

  async findAll(): Promise<User[]> {
    return await this.userService.findAll();
  }

  async findOne(id: number): Promise<Filiacao> {
    const filiacao = await this.filiacaoRepository.findOne({
      where: { id_perfil: id },
      relations: ["user"],
    });
    if (!filiacao) {
      throw new NotFoundException(`Filiação não encontrada.`);
    }
    return filiacao;
  }

  async update(
    id: number,
    updateFiliacaoDto: UpdateFiliacaoDto
  ): Promise<Filiacao> {
    const filiacao = await this.findOne(id);
    delete updateFiliacaoDto.userId;

    const updated = this.filiacaoRepository.merge(filiacao, updateFiliacaoDto);
    return await this.filiacaoRepository.save(updated);
  }

  async remove(id: number): Promise<void> {
    const filiacao = await this.findOne(id);
    await this.filiacaoRepository.remove(filiacao);
  }
}

