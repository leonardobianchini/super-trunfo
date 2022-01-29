import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Car } from 'src/models/car.model';
import { Repository } from 'typeorm';

@Controller('cars')
export class CarController {

  constructor(
    @InjectRepository(Car)
    private carRepo: Repository<Car>
  ) {}

  @Get()
  index() {
    return this.carRepo.find();
  }

  @Get(':id')
  showOne(@Param('id') id: string) {
    return this.carRepo.findOne(id);
  }
  
  @Post()
  store(@Body() body) {
    const car = this.carRepo.create(body);
    return this.carRepo.save(car);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() body){
    await this.carRepo.findOneOrFail(id);
    this.carRepo.update({id: +id}, body);
    return await this.carRepo.findOne(id);
  }

  @Delete(':id')
  @HttpCode(204)
  async delete(@Param('id') id:string) {
    await this.carRepo.findOneOrFail(id);
    this.carRepo.delete(id)
  }
}
