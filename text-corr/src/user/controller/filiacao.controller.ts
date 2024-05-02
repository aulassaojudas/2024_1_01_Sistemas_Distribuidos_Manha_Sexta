import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
    HttpCode,
    HttpStatus,
  } from "@nestjs/common";
  import { FiliacaoService } from "../service/filiacao.service";
  import { CreateFiliacaoDto, UpdateFiliacaoDto } from "../dto/filiacao.dto";
  
  @Controller("filiacao")
  export class FiliacaoController {
    constructor(private readonly filiacaoService: FiliacaoService) {}
  
    @Post()
    async create(@Body() createFiliacaoDto: CreateFiliacaoDto) {
      return await this.filiacaoService.create(createFiliacaoDto);
    }
  
    @Get()
    async findAll() {
      return await this.filiacaoService.findAll();
    }
  
    @Get(":id")
    async findOne(@Param("id") id: number) {
      return await this.filiacaoService.findOne(id);
    }
  
    @Put(":id")
    async update(
      @Param("id") id: number,
      @Body() updateFiliacaoDto: UpdateFiliacaoDto
    ) {
      return await this.filiacaoService.update(id, updateFiliacaoDto);
    }
  
    @Delete(":id")
    @HttpCode(HttpStatus.NO_CONTENT)
    async remove(@Param("id") id: number) {
      return await this.filiacaoService.remove(id);
    }
  }